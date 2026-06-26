import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, Sparkles } from '@react-three/drei';
import gsap from 'gsap';

// The 3D Scene Component
const Scene = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#0a84ff" />
      <directionalLight position={[-5, -5, -5]} intensity={1} color="#00e5ff" />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshPhysicalMaterial
            color="#0a84ff"
            emissive="#020b1c"
            metalness={0.8}
            roughness={0.1}
            transmission={0.9} // Glass effect
            thickness={0.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>

      <Sparkles count={80} scale={10} size={1.5} speed={0.4} opacity={0.6} color="#00e5ff" />

      <Environment preset="city" />
      <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2} far={4} color="#0a84ff" />
    </>
  );
};

export default function RoboticIntro({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    // Simulated Loading Progress (auto-completes)
    const loadingDuration = 2.5; // Load takes 2.5 seconds
    let progressVal = 0;
    const progressInterval = setInterval(() => {
        progressVal += (100 / (loadingDuration * 10)); // runs every 100ms
        if(progressVal >= 100) {
            progressVal = 100;
            clearInterval(progressInterval);
        }
        setProgress(Math.min(Math.round(progressVal), 100));
    }, 100);

    // Trigger exit animation when load is complete
    const tl = gsap.timeline({
        delay: loadingDuration,
        onComplete: () => {
            if(onComplete) onComplete();
        }
    });

    // Fade out everything smoothly
    if (containerRef.current) {
        tl.to(containerRef.current, {
            opacity: 0,
            duration: 1.2,
            ease: 'power2.inOut'
        });
    }

    return () => {
      clearInterval(progressInterval);
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] bg-[#020B1C] flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Container */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <Scene />
        </Canvas>
      </div>
      
      {/* Elegant Overlay UI */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <div className="mt-72 text-center space-y-5">
            <h2 className="text-sm md:text-base font-space tracking-[0.4em] text-white/90 font-light text-glow">
                LOADING SYSTEM
            </h2>
            
            {/* Minimalist Progress Bar */}
            <div className="w-48 md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative mx-auto">
                <div 
                    className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_10px_rgba(10,132,255,0.8)] transition-all duration-100 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
            
            <p className="text-[10px] md:text-xs text-text-gray font-mono tracking-widest opacity-70">
                {progress}%
            </p>
        </div>
      </div>
    </div>
  );
}
