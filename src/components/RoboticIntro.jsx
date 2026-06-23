import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';

export default function RoboticIntro({ onComplete }) {
  // Reference hook to access the DOM element container for the 3D Canvas
  const containerRef = useRef(null);
  // Reference hook to keep the Web Audio API context instance
  const audioContextRef = useRef(null);
  // Reference hook to keep audio nodes (oscillator, gain controller, etc.)
  const synthNodesRef = useRef({ hum: null, gain: null });
  
  // State to track if user clicked the start portal button
  const [started, setStarted] = useState(false);
  // State to track if audio is muted or enabled
  const [soundEnabled, setSoundEnabled] = useState(true);
  // State to track 2D mouse coordinates for parallax camera effect
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Web Audio Synth setup: Initializes oscillators and gain nodes for procedural audio
  const initAudio = () => {
    try {
      // Find browser audio constructor compatibilities
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      // Instantiate new Audio Context
      const ctx = new AudioContext();
      audioContextRef.current = ctx;

      // Master Gain Node to control overall audio volume level
      const masterGain = ctx.createGain();
      // Set volume level to 0.2
      masterGain.gain.setValueAtTime(0.2, ctx.currentTime);
      // Connect master gain node to speakers
      masterGain.connect(ctx.destination);
      synthNodesRef.current.gain = masterGain;

      // Deep ambient low drone oscillator (Linear/Stripe background style)
      const humOsc = ctx.createOscillator();
      // Lowpass filter to block high-frequency noise, keeping it warm and deep
      const humFilter = ctx.createBiquadFilter();
      humOsc.type = 'sine'; // Pure sine wave oscillator
      // Set frequency to 110Hz (A2 musical note)
      humOsc.frequency.setValueAtTime(110, ctx.currentTime);
      humFilter.type = 'lowpass';
      // Cutoff frequency at 80Hz
      humFilter.frequency.setValueAtTime(80, ctx.currentTime);

      // Volume controller specifically for the drone hum
      const humGain = ctx.createGain();
      // Start completely silent
      humGain.gain.setValueAtTime(0.0, ctx.currentTime);

      // Connect: Oscillator -> Filter -> Gain Node -> Master Gain (Speakers)
      humOsc.connect(humFilter);
      humFilter.connect(humGain);
      humGain.connect(masterGain);
      
      // Start generator in background
      humOsc.start();
      synthNodesRef.current.hum = humOsc;
      synthNodesRef.current.humGain = humGain;
    } catch (e) {
      console.warn('Audio Context initialization failed:', e);
    }
  };

  // Play procedural sound effects triggered at specific timeline marks
  const playSoundEffect = (type, timeOffset = 0) => {
    const ctx = audioContextRef.current;
    // Don't play if context is missing, sound is muted, or context is suspended
    if (!ctx || !soundEnabled || ctx.state === 'suspended') return;

    // Calculate absolute trigger time based on audio context timeline clock
    const time = ctx.currentTime + timeOffset;

    if (type === 'ambient_swell') {
      // Fades the background hum volume up slowly over 2 seconds
      if (synthNodesRef.current.humGain) {
        synthNodesRef.current.humGain.gain.linearRampToValueAtTime(0.18, time + 2);
      }
    }

    if (type === 'chime') {
      // Elegant crystal chime bell chord (multi-frequency synthesis)
      const bellGain = ctx.createGain();
      bellGain.gain.setValueAtTime(0.001, time);
      // Quick attack (volume rises instantly to 0.25)
      bellGain.gain.exponentialRampToValueAtTime(0.25, time + 0.1);
      // Slow release (decays back down to 0 over 2.5 seconds)
      bellGain.gain.exponentialRampToValueAtTime(0.001, time + 2.5);

      // Frequencies for a C-Major chord (C5, E5, G5, C6)
      const freqs = [523.25, 659.25, 783.99, 1046.50];
      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, time);
        
        // Detune frequencies slightly for a wider, warmer corporate tone
        osc.detune.setValueAtTime(idx * 3, time);

        // Individual volume level for each note of the chord
        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(0.06, time);
        // Note volume decays at slightly offset speeds
        oscGain.gain.exponentialRampToValueAtTime(0.001, time + 2.0 - (idx * 0.3));

        osc.connect(oscGain);
        oscGain.connect(bellGain);
        osc.start(time);
        osc.stop(time + 2.6);
      });

      bellGain.connect(synthNodesRef.current.gain);

      // Fade out background hum when final chime bell rings
      if (synthNodesRef.current.humGain) {
        synthNodesRef.current.humGain.gain.exponentialRampToValueAtTime(0.001, time + 1.2);
      }
    }
  };

  // Toggle master gain volume levels on mute click
  const toggleSound = () => {
    setSoundEnabled(prev => {
      const next = !prev;
      if (synthNodesRef.current.gain) {
        synthNodesRef.current.gain.gain.setValueAtTime(next ? 0.2 : 0, audioContextRef.current.currentTime);
      }
      return next;
    });
  };

  // Start initialization flow on first user click gesture
  const handleStart = () => {
    initAudio();
    setStarted(true);
  };

  // Capture mouse movement coordinates to calculate parallax values [-1 to 1]
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // WebGL & Three.js 3D Scene setup: Runs once started state changes to true
  useEffect(() => {
    if (!started) return;

    // Viewport dimensions
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Create scene container
    const scene = new THREE.Scene();
    // Dark premium background color
    scene.background = new THREE.Color(0x020b1c);
    // Soft exponential fog for atmosphere depth
    scene.fog = new THREE.FogExp2(0x020b1c, 0.05);

    // Create Camera (Field of view, Aspect ratio, Near plane, Far plane)
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    // Position camera back along the Z axis
    camera.position.set(0, 0.5, 14);

    // Create WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    // Limit pixel ratio to 2 for high performance mobile rendering
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // Film exposure configuration
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    containerRef.current.appendChild(renderer.domElement);

    // Dark ambient light for base visibility shadows
    const ambientLight = new THREE.AmbientLight(0x071a35, 0.8);
    scene.add(ambientLight);

    // Top spotlight to create metallic highlights
    const spotlight = new THREE.SpotLight(0xffffff, 4, 20, Math.PI / 4, 0.5, 1);
    spotlight.position.set(0, 8, 4);
    spotlight.castShadow = true;
    scene.add(spotlight);

    // Cyan accent light coming from the left
    const fillLight = new THREE.SpotLight(0x00e5ff, 8, 20, Math.PI / 3, 0.5, 1.2);
    fillLight.position.set(-6, 3, 2);
    scene.add(fillLight);

    // Blue directional accent light from the right
    const blueLight = new THREE.DirectionalLight(0x0a84ff, 1.5);
    blueLight.position.set(6, -2, 2);
    scene.add(blueLight);

    // Holographic grid floor helper
    const gridHelper = new THREE.GridHelper(30, 30, 0x0a84ff, 0x071a35);
    // Place floor at bottom of view
    gridHelper.position.y = -3.2;
    gridHelper.material.transparent = true;
    // Set grid opacity level
    gridHelper.material.opacity = 0.35;
    scene.add(gridHelper);

    // Main group to hold the central glassmorphic core sphere
    const centerGroup = new THREE.Group();
    scene.add(centerGroup);

    // Geometry of glass outer shell (faceted icosahedron)
    const shellGeom = new THREE.IcosahedronGeometry(1.6, 1);
    // Physical glass material simulation properties
    const shellMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a84ff,
      metalness: 0.1,
      roughness: 0.15,
      transmission: 0.85, // Direct glass transparency transmission
      thickness: 1.2,     // Refraction offset thickness
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide
    });
    const shellMesh = new THREE.Mesh(shellGeom, shellMat);
    centerGroup.add(shellMesh);

    // Inner glowing sphere core (energy reactor core)
    const innerGeom = new THREE.SphereGeometry(0.7, 32, 32);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x00e5ff,
      emissiveIntensity: 1.5,
      roughness: 0.1,
      metalness: 0.9
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    centerGroup.add(innerMesh);

    // Concentric orbiting rings group
    const ringsGroup = new THREE.Group();
    scene.add(ringsGroup);

    // High metal material for thin orbit rings
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.95,
      roughness: 0.1,
      transparent: true,
      opacity: 0.4
    });

    const orbitRing1 = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.02, 16, 100), ringMat);
    orbitRing1.rotation.x = Math.PI / 2.5;
    ringsGroup.add(orbitRing1);

    const orbitRing2 = new THREE.Mesh(new THREE.TorusGeometry(2.8, 0.015, 8, 80), ringMat);
    orbitRing2.rotation.y = Math.PI / 3;
    ringsGroup.add(orbitRing2);

    // HUD panels group (floating glass rectangles)
    const panelGroup = new THREE.Group();
    scene.add(panelGroup);

    // Helper function to build floating glass cards with cyan outline borders
    const createGlassCard = (w, h, posVec, rotVec) => {
      const cardGeom = new THREE.PlaneGeometry(w, h);
      const cardMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0.05,
        roughness: 0.1,
        transmission: 0.6,
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1
      });
      const card = new THREE.Mesh(cardGeom, cardMat);
      card.position.copy(posVec);
      card.rotation.set(rotVec.x, rotVec.y, rotVec.z);
      
      const edges = new THREE.EdgesGeometry(cardGeom);
      const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.3 }));
      card.add(line);

      return card;
    };

    // Position cards symmetrically to support UI layouts
    const card1 = createGlassCard(1.8, 1.2, new THREE.Vector3(-3.2, 1.0, -1), new THREE.Vector3(0, 0.4, 0));
    const card2 = createGlassCard(1.5, 2.2, new THREE.Vector3(3.4, -0.5, -2), new THREE.Vector3(0, -0.5, 0));
    
    panelGroup.add(card1);
    panelGroup.add(card2);

    // Floating 3D technology cards group
    const techGroup = new THREE.Group();
    scene.add(techGroup);

    const techLogoColors = [
      { name: 'React', color: 0x61dafb, pos: new THREE.Vector3(-4, -1, 1), speed: 0.5 },
      { name: 'Django', color: 0x092e20, pos: new THREE.Vector3(4.2, 1.5, 0), speed: 0.4 },
      { name: 'Flutter', color: 0x02569b, pos: new THREE.Vector3(-2.5, 2.3, -2), speed: 0.6 },
      { name: 'Python', color: 0x3776ab, pos: new THREE.Vector3(2, 2.6, -1), speed: 0.45 },
      { name: 'JavaScript', color: 0xf7df1e, pos: new THREE.Vector3(3.2, -1.8, 1), speed: 0.55 },
      { name: 'PostgreSQL', color: 0x336791, pos: new THREE.Vector3(-1.8, -2.4, -1), speed: 0.35 }
    ];

    const techCards = [];
    // Small block dimensions
    const cardGeometry = new THREE.BoxGeometry(0.7, 0.7, 0.08);

    techLogoColors.forEach((tech) => {
      const cardMat = new THREE.MeshStandardMaterial({
        color: tech.color,
        roughness: 0.2,
        metalness: 0.8,
        emissive: tech.color,
        emissiveIntensity: 0.1
      });
      const card = new THREE.Mesh(cardGeometry, cardMat);
      card.position.copy(tech.pos);
      card.rotation.set(Math.random() * 0.5, Math.random() * 0.5, 0);
      
      techGroup.add(card);
      techCards.push({ mesh: card, meta: tech });
    });

    // Ambient floating dust particles setup
    const particleCount = 250;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 16;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.04,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    const dustParticles = new THREE.Points(particleGeometry, particleMat);
    scene.add(dustParticles);

    // Glowing trace curves light streaks
    const curvePoints = [];
    for (let i = 0; i < 5; i++) {
      const angle = (i / 4) * Math.PI * 2;
      curvePoints.push(new THREE.Vector3(Math.cos(angle) * 3, Math.sin(angle) * 0.5, Math.sin(angle * 2) * 1.5));
    }
    const curve = new THREE.CatmullRomCurve3(curvePoints, true);
    const streakGeom = new THREE.TubeGeometry(curve, 64, 0.015, 8, true);
    const streakMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0 });
    const lightStreak = new THREE.Mesh(streakGeom, streakMat);
    scene.add(lightStreak);

    // GSAP animation timeline drives all visual assets sequentially
    const tl = gsap.timeline({
      onComplete: () => {
        // Triggers fade out overlay on canvas and starts portfolio main page
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1,
          onComplete: () => {
            onComplete && onComplete();
          }
        });
      }
    });

    // Start sound drones swell
    playSoundEffect('ambient_swell', 0.2);

    // Camera moves forward from z=14 to z=9.5
    tl.to(camera.position, { z: 9.5, y: 0.2, duration: 8.5, ease: 'sine.inOut' }, 0);
    
    // Core scaling
    centerGroup.scale.set(0.001, 0.001, 0.001);
    tl.to(centerGroup.scale, { x: 1, y: 1, z: 1, duration: 3.5, ease: 'power3.out' }, 0.5);
    tl.to(innerMat, { emissiveIntensity: 2.2, duration: 3 }, 0.5);

    // Fading overlays
    tl.to([card1.material, card2.material], { opacity: 0.55, duration: 3.5 }, 1.5);
    tl.to(streakMat, { opacity: 0.6, duration: 2.5 }, 2);

    // Floating tech elements scale-in
    techGroup.scale.set(0.001, 0.001, 0.001);
    tl.to(techGroup.scale, { x: 1, y: 1, z: 1, duration: 4, ease: 'power2.out' }, 2.5);

    // Identity texts slide-up and fade-in sequentially
    tl.to('.identity-line', { opacity: 1, y: 0, stagger: 0.25, duration: 1.5, ease: 'power3.out' }, 3.5);

    // Play chord chime sounds at final scene alignment
    tl.call(() => playSoundEffect('chime'), null, 7.2);

    // SaaS divider horizontal sweep line triggers
    tl.to('.sweep-line', { left: '100%', duration: 1.6, ease: 'power2.inOut' }, 7.5);
    tl.to('.sweep-line-glow', { opacity: 0.8, duration: 0.2, yoyo: true, repeat: 1 }, 7.5);

    // Dissolve scale and camera push before final flash
    tl.to(camera.position, { z: 7.5, duration: 2.5, ease: 'power2.inOut' }, 7.5);
    tl.to([centerGroup.scale, techGroup.scale, panelGroup.scale], { x: 0.001, y: 0.001, z: 0.001, duration: 2, ease: 'power2.inOut' }, 7.8);
    
    // Background screen flash hides canvas at timeline end
    tl.to('.screen-flash', { opacity: 1, duration: 1.2, ease: 'power2.inOut' }, 8.0);

    // Render loop loop clock
    const clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Rotating core sphere mesh speeds
      shellMesh.rotation.y = elapsedTime * 0.15;
      shellMesh.rotation.x = elapsedTime * 0.08;
      innerMesh.rotation.z = -elapsedTime * 0.25;

      // Rotate concentric metal casings
      orbitRing1.rotation.z = elapsedTime * 0.05;
      orbitRing2.rotation.z = -elapsedTime * 0.08;

      // Hovering floating card speeds
      card1.position.y = 1.0 + Math.sin(elapsedTime * 0.6) * 0.05;
      card2.position.y = -0.5 + Math.cos(elapsedTime * 0.8) * 0.08;

      // Rotate light streaks
      lightStreak.rotation.z = elapsedTime * 0.12;

      // Rotate and float tech cards around axes
      techCards.forEach((tech) => {
        tech.mesh.position.y = tech.meta.pos.y + Math.sin(elapsedTime * tech.meta.speed) * 0.08;
        tech.mesh.rotation.y += 0.003;
      });

      // Gravity updates on particle dust field positions array
      const dustPos = particleGeometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        dustPos[i * 3 + 1] -= 0.004;
        if (dustPos[i * 3 + 1] < -6) {
          dustPos[i * 3 + 1] = 6;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Mouse movements affect camera coordinates (parallax effect)
      if (camera.position.z > 2) {
        camera.position.x += (mouse.x * 0.8 - camera.position.x) * 0.04;
        camera.position.y += (-mouse.y * 0.6 + 0.2 - camera.position.y) * 0.04;
        camera.lookAt(new THREE.Vector3(0, 0, 0));
      }

      renderer.render(scene, camera);
    };

    animate();

    // Window size resizing listener callback
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      tl.kill();
      
      scene.clear();
      renderer.dispose();

      if (synthNodesRef.current.hum) {
        try {
          synthNodesRef.current.hum.stop();
        } catch (e) {}
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [started]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#020B1C] flex items-center justify-center overflow-hidden">
      
      {/* 1. Loading panel before user click gesture */}
      {!started && (
        <div className="absolute inset-0 bg-[#020B1C] flex flex-col items-center justify-center z-50 px-6">
          <div className="max-w-md w-full text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-block relative">
                <div className="w-12 h-12 rounded-xl border border-primary/20 flex items-center justify-center bg-[#071A35]/30">
                  <div className="w-6 h-6 rounded bg-primary/20 border border-primary animate-pulse" />
                </div>
              </div>
              <h1 className="text-xl md:text-2xl font-bold tracking-widest text-white font-space">
                SYSTEM PORTAL
              </h1>
              <p className="text-xs text-text-gray/70 tracking-widest uppercase">
                Enterprise Developer Framework
              </p>
            </div>

            <button
              onClick={handleStart}
              className="px-8 py-3.5 font-bold text-xs text-white border border-primary bg-primary/10 rounded-full hover:bg-primary hover:shadow-[0_0_25px_rgba(10,132,255,0.25)] transition-all duration-300 transform active:scale-95"
            >
              INITIALIZE PORTFOLIO
            </button>
            
            <p className="text-[10px] text-text-gray/40 tracking-wider">
              Optimal resolution on desktop & mobile with sound sweeps enabled.
            </p>
          </div>
        </div>
      )}

      {/* 2. Audio Control Toggle Button */}
      {started && (
        <button
          onClick={toggleSound}
          className="absolute top-6 right-6 p-3 rounded-full glass-card text-text-gray hover:text-white border border-white/5 z-50 transition-colors"
          aria-label="Toggle Sound"
        >
          {soundEnabled ? <FiVolume2 className="w-5 h-5 text-primary" /> : <FiVolumeX className="w-5 h-5" />}
        </button>
      )}

      {/* 3. Canvas for rendering scene */}
      <div ref={containerRef} className="w-full h-full absolute inset-0 z-10" />

      {/* 4. Minimal HUD text overlay layers */}
      {started && (
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center pointer-events-none select-none px-6">
          <div className="max-w-2xl w-full text-center space-y-4">
            
            <span className="identity-line opacity-0 translate-y-4 block text-xs md:text-sm font-bold tracking-[0.3em] text-primary uppercase font-space text-glow">
              HELLO, I'M
            </span>

            <h1 className="identity-line opacity-0 translate-y-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white font-space py-1">
              AJHAD K
            </h1>

            <div className="identity-line opacity-0 translate-y-4 flex flex-wrap justify-center items-center gap-3 text-xs md:text-sm font-semibold tracking-[0.2em] text-text-gray uppercase">
              <span>Full Stack Developer</span>
              <span className="text-primary/70">•</span>
              <span>React</span>
              <span className="text-primary/70">•</span>
              <span>Django</span>
              <span className="text-primary/70">•</span>
              <span>Flutter</span>
            </div>

          </div>
        </div>
      )}

      {/* 5. Linear sweep line element */}
      {started && (
        <div className="absolute inset-y-0 w-[2px] bg-primary left-[-10px] z-30 pointer-events-none transition-all duration-100 sweep-line">
          <div className="absolute inset-0 w-8 h-full bg-gradient-to-r from-primary/30 to-transparent -translate-x-full blur-md" />
          <div className="absolute inset-0 w-8 h-full bg-gradient-to-l from-primary/30 to-transparent blur-md" />
        </div>
      )}

      {/* 6. Clean fade screen transition overlay */}
      <div className="screen-flash absolute inset-0 z-40 bg-[#020B1C] opacity-0 pointer-events-none transition-opacity duration-300" />
      
    </div>
  );
}
