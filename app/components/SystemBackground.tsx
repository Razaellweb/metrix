"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Stars } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Group } from "three";

function Structure() {
  const group = useRef<Group>(null);
  
  // Create a grid of "infrastructure" blocks
  const blocks = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 50; i++) {
        const x = (Math.random() - 0.5) * 40;
        const y = (Math.random() - 0.5) * 15; // Flatter distribution
        const z = (Math.random() - 0.5) * 20;
        const scale = Math.random();
        temp.push({ position: [x, y, z], scale: [scale * 4, 0.1, scale * 4] });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    // Very slow rotation for "ineurability"
    group.current.rotation.y = state.clock.getElapsedTime() * 0.02;
  });

  return (
    <group ref={group}>
      {blocks.map((b, i) => (
        <mesh key={i} position={b.position as [number, number, number]} scale={b.scale as [number, number, number]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial 
            color="#1a1a1a" 
            transparent 
            opacity={0.8}
            roughness={0.4}
            metalness={0.8}
          />
          <lineSegments>
             <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
             <lineBasicMaterial color="#333" transparent opacity={0.2} />
          </lineSegments>
        </mesh>
      ))}
      {/* Some vertical connectors */}
      {Array.from({ length: 10 }).map((_, i) => (
           <mesh key={`v-${i}`} position={[(Math.random()-0.5)*30, 0, (Math.random()-0.5)*10]} scale={[0.05, 20, 0.05]}>
              <boxGeometry />
              <meshBasicMaterial color="#303030" transparent opacity={0.4} />
           </mesh>
      ))}
    </group>
  );
}

function CameraRig() {
    useFrame((state) => {
        // Subtle mouse parallax
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 2, 0.05)
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 1, 0.05)
        state.camera.lookAt(0, 0, 0);
    });
    return null;
}

export default function SystemBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-void pointer-events-none fade-in">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/50 to-void z-10" />
      <Canvas camera={{ position: [0, 2, 15], fov: 35 }} gl={{ antialias: true }}>
        <fog attach="fog" args={["#030304", 5, 30]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#404040" />
        <Structure />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <CameraRig />
      </Canvas>
    </div>
  );
}
