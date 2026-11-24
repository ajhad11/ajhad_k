import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// 3D Flagship Mobile Device with Layered Holographic UI Cards
function MobileDeviceVisual() {
  const rootGroup = useRef();
  const phoneBodyRef = useRef();
  const barsGroupRef = useRef();
  const orbitRingRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Smooth cursor-tracking parallax tilt with inertia
    if (rootGroup.current) {
      rootGroup.current.rotation.y = THREE.MathUtils.lerp(
        rootGroup.current.rotation.y,
        state.pointer.x * 0.45 + Math.sin(t * 0.5) * 0.08,
        0.06
      );
      rootGroup.current.rotation.x = THREE.MathUtils.lerp(
        rootGroup.current.rotation.x,
        -state.pointer.y * 0.35 + 0.1,
        0.06
      );
    }

    // Animate data visualization chart bars on the screen
    if (barsGroupRef.current) {
      barsGroupRef.current.children.forEach((child, i) => {
        const scaleY = 0.5 + Math.sin(t * 3 + i * 0.8) * 0.45;
        child.scale.y = scaleY;
      });
    }

    // Smooth orbit halo ring
    if (orbitRingRef.current) {
      orbitRingRef.current.rotation.z = t * 0.25;
      orbitRingRef.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8} floatingRange={[-0.1, 0.1]}>
      <group ref={rootGroup} scale={1.05}>
        
        {/* =========================================
            1. PHONE CHASSIS & SCREEN
            ========================================= */}
        <group ref={phoneBodyRef}>
          {/* Outer Titanium Frame */}
          <RoundedBox args={[2.4, 4.8, 0.18]} radius={0.2} smoothness={8}>
            <meshStandardMaterial
              color="#0d1b32"
              roughness={0.2}
              metalness={0.9}
            />
          </RoundedBox>

          {/* Polished Edge Bevel Trim */}
          <RoundedBox args={[2.36, 4.76, 0.182]} radius={0.19} smoothness={8}>
            <meshStandardMaterial
              color="#0A84FF"
              emissive="#021E42"
              roughness={0.15}
              metalness={0.95}
              transparent
              opacity={0.35}
            />
          </RoundedBox>

          {/* OLED Screen Surface */}
          <RoundedBox args={[2.22, 4.62, 0.02]} radius={0.16} smoothness={6} position={[0, 0, 0.092]}>
            <meshBasicMaterial color="#020B1C" />
          </RoundedBox>

          {/* Dynamic Island Pill Notch */}
          <RoundedBox args={[0.62, 0.14, 0.02]} radius={0.07} smoothness={4} position={[0, 2.08, 0.105]}>
            <meshBasicMaterial color="#000000" />
          </RoundedBox>

          {/* Front Camera Lens Dot */}
          <mesh position={[0.2, 2.08, 0.116]}>
            <circleGeometry args={[0.025, 16]} />
            <meshBasicMaterial color="#00E5FF" />
          </mesh>

          {/* Bottom Home Indicator Bar */}
          <RoundedBox args={[0.8, 0.035, 0.01]} radius={0.015} smoothness={2} position={[0, -2.18, 0.105]}>
            <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
          </RoundedBox>
        </group>

        {/* =========================================
            2. FLOATING HOLOGRAPHIC UI LAYERS
            ========================================= */}
        <group position={[0, 0, 0.2]}>
          
          {/* Top Floating App Bar Card */}
          <group position={[0, 1.45, 0]}>
            <RoundedBox args={[1.9, 0.52, 0.04]} radius={0.08} smoothness={4}>
              <meshStandardMaterial
                color="#0A84FF"
                emissive="#071A35"
                roughness={0.1}
                metalness={0.7}
                transparent
                opacity={0.88}
              />
            </RoundedBox>
            {/* Header Status Indicator Dot */}
            <mesh position={[-0.72, 0, 0.025]}>
              <circleGeometry args={[0.05, 16]} />
              <meshBasicMaterial color="#00E5FF" />
            </mesh>
            {/* Header Wireframe Text Bar */}
            <RoundedBox args={[0.85, 0.06, 0.01]} radius={0.03} position={[-0.15, 0.06, 0.025]}>
              <meshBasicMaterial color="#FFFFFF" />
            </RoundedBox>
            <RoundedBox args={[0.55, 0.04, 0.01]} radius={0.02} position={[-0.3, -0.07, 0.025]}>
              <meshBasicMaterial color="#7DD3FC" />
            </RoundedBox>
            {/* Right Status Badge */}
            <RoundedBox args={[0.35, 0.16, 0.01]} radius={0.04} position={[0.62, 0, 0.025]}>
              <meshBasicMaterial color="#38BDF8" transparent opacity={0.3} />
            </RoundedBox>
          </group>

          {/* Central Live Performance & AI Metrics Card */}
          <group position={[0, 0.3, 0.04]}>
            <RoundedBox args={[1.92, 1.45, 0.04]} radius={0.1} smoothness={4}>
              <meshStandardMaterial
                color="#071A35"
                emissive="#020B1C"
                roughness={0.2}
                metalness={0.85}
                transparent
                opacity={0.92}
              />
            </RoundedBox>

            {/* Title Mini Line */}
            <RoundedBox args={[0.95, 0.06, 0.01]} radius={0.03} position={[-0.35, 0.48, 0.025]}>
              <meshBasicMaterial color="#00E5FF" />
            </RoundedBox>

            {/* Glowing Metric Chart Area */}
            <group ref={barsGroupRef} position={[0, -0.05, 0.03]}>
              {[-0.65, -0.38, -0.12, 0.14, 0.4, 0.65].map((x, i) => (
                <RoundedBox
                  key={i}
                  args={[0.16, 0.65, 0.02]}
                  radius={0.05}
                  smoothness={2}
                  position={[x, 0, 0]}
                >
                  <meshStandardMaterial
                    color={i % 2 === 0 ? "#0A84FF" : "#00E5FF"}
                    emissive={i % 2 === 0 ? "#0A84FF" : "#00E5FF"}
                    emissiveIntensity={0.6}
                    roughness={0.2}
                  />
                </RoundedBox>
              ))}
            </group>

            {/* Baseline horizontal grid line */}
            <RoundedBox args={[1.65, 0.02, 0.01]} radius={0.01} position={[0, -0.42, 0.025]}>
              <meshBasicMaterial color="#38BDF8" transparent opacity={0.4} />
            </RoundedBox>
          </group>

          {/* Floating Feature Badges (Left & Right) */}
          <group position={[-0.5, -0.82, 0.06]}>
            <RoundedBox args={[0.88, 0.42, 0.03]} radius={0.08} smoothness={4}>
              <meshStandardMaterial
                color="#071A35"
                roughness={0.15}
                metalness={0.8}
                transparent
                opacity={0.9}
              />
            </RoundedBox>
            <mesh position={[-0.26, 0, 0.02]}>
              <circleGeometry args={[0.06, 16]} />
              <meshBasicMaterial color="#00E5FF" />
            </mesh>
            <RoundedBox args={[0.35, 0.05, 0.01]} radius={0.02} position={[0.08, 0.05, 0.02]}>
              <meshBasicMaterial color="#FFFFFF" />
            </RoundedBox>
            <RoundedBox args={[0.25, 0.04, 0.01]} radius={0.02} position={[0.03, -0.06, 0.02]}>
              <meshBasicMaterial color="#38BDF8" />
            </RoundedBox>
          </group>

          <group position={[0.5, -0.82, 0.06]}>
            <RoundedBox args={[0.88, 0.42, 0.03]} radius={0.08} smoothness={4}>
              <meshStandardMaterial
                color="#071A35"
                roughness={0.15}
                metalness={0.8}
                transparent
                opacity={0.9}
              />
            </RoundedBox>
            <mesh position={[-0.26, 0, 0.02]}>
              <circleGeometry args={[0.06, 16]} />
              <meshBasicMaterial color="#0A84FF" />
            </mesh>
            <RoundedBox args={[0.35, 0.05, 0.01]} radius={0.02} position={[0.08, 0.05, 0.02]}>
              <meshBasicMaterial color="#FFFFFF" />
            </RoundedBox>
            <RoundedBox args={[0.25, 0.04, 0.01]} radius={0.02} position={[0.03, -0.06, 0.02]}>
              <meshBasicMaterial color="#60A5FA" />
            </RoundedBox>
          </group>

          {/* Bottom Primary Action Card (Launch / Connect Pill) */}
          <group position={[0, -1.48, 0.03]}>
            <RoundedBox args={[1.9, 0.48, 0.04]} radius={0.1} smoothness={4}>
              <meshStandardMaterial
                color="#0A84FF"
                emissive="#0055aa"
                emissiveIntensity={0.4}
                roughness={0.2}
                metalness={0.6}
              />
            </RoundedBox>
            <RoundedBox args={[0.9, 0.07, 0.01]} radius={0.03} position={[0, 0, 0.025]}>
              <meshBasicMaterial color="#FFFFFF" />
            </RoundedBox>
          </group>

        </group>

        {/* =========================================
            3. ELEGANT GEOMETRIC ORBIT HALO
            ========================================= */}
        <group ref={orbitRingRef}>
          <mesh>
            <torusGeometry args={[3.2, 0.018, 16, 120]} />
            <meshStandardMaterial
              color="#00E5FF"
              emissive="#00E5FF"
              emissiveIntensity={0.8}
              roughness={0.1}
              metalness={0.95}
              transparent
              opacity={0.7}
            />
          </mesh>
          {/* Orbit satellite node 1 */}
          <mesh position={[3.2, 0, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color="#00E5FF" />
          </mesh>
          {/* Orbit satellite node 2 */}
          <mesh position={[-3.2, 0, 0]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshBasicMaterial color="#0A84FF" />
          </mesh>
        </group>

      </group>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full min-h-[380px] md:min-h-[460px] relative flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 46 }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        {/* Balanced Studio Lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 8]} intensity={2.2} color="#00E5FF" />
        <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#0A84FF" />
        <pointLight position={[0, 0, 4.5]} intensity={2.4} color="#38BDF8" />
        <pointLight position={[0, 3, 2]} intensity={1.5} color="#FFFFFF" />

        {/* The Clean, Instantly Recognizable 3D Mobile Visual */}
        <MobileDeviceVisual />

        {/* Subtle Ambient Depth Sparkles */}
        <Sparkles
          count={35}
          scale={7}
          size={1.6}
          speed={0.3}
          opacity={0.6}
          color="#00E5FF"
        />
      </Canvas>
    </div>
  );
}
