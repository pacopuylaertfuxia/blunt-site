"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useTexture,
  Environment,
  PresentationControls,
  ContactShadows,
  Float,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

// ─── Can mesh ──────────────────────────────────────────────────────────────────

function CanModel() {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useTexture("/blunt-can.png");
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;

  // Slow auto-rotation
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35;
    }
  });

  const bodyMat = (
    <meshPhysicalMaterial
      map={texture}
      metalness={0.75}
      roughness={0.22}
      clearcoat={0.6}
      clearcoatRoughness={0.08}
      envMapIntensity={1.4}
    />
  );

  const metalMat = (
    <meshPhysicalMaterial
      color="#9ab0c0"
      metalness={0.95}
      roughness={0.08}
      clearcoat={1}
      clearcoatRoughness={0.05}
      envMapIntensity={1.8}
    />
  );

  return (
    <group ref={groupRef}>
      {/* Main body */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.66, 0.66, 3.1, 80, 1, false]} />
        {bodyMat}
      </mesh>

      {/* Top taper */}
      <mesh position={[0, 1.68, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.66, 0.22, 80]} />
        {metalMat}
      </mesh>

      {/* Top cap */}
      <mesh position={[0, 1.83, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.08, 80]} />
        {metalMat}
      </mesh>

      {/* Pull ring post */}
      <mesh position={[0.1, 1.9, 0]} rotation={[0.4, 0, 0]}>
        <torusGeometry args={[0.12, 0.025, 12, 32]} />
        <meshPhysicalMaterial color="#c8d8e0" metalness={1} roughness={0.05} />
      </mesh>

      {/* Bottom taper */}
      <mesh position={[0, -1.68, 0]} castShadow>
        <cylinderGeometry args={[0.66, 0.5, 0.22, 80]} />
        {metalMat}
      </mesh>

      {/* Bottom cap */}
      <mesh position={[0, -1.83, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.08, 80]} />
        {metalMat}
      </mesh>
    </group>
  );
}

// ─── Mouse-tracked point light ─────────────────────────────────────────────────

function DynamicLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x += (pointer.x * 6 - lightRef.current.position.x) * 0.08;
      lightRef.current.position.y += (pointer.y * 4 - lightRef.current.position.y) * 0.08;
    }
  });

  return <pointLight ref={lightRef} position={[0, 0, 5]} intensity={1.8} color="#ffffff" />;
}

// ─── Full scene ────────────────────────────────────────────────────────────────

function Scene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <DynamicLight />
      <pointLight position={[-5, 3, 2]} intensity={0.6} color="#00C2FF" />
      <pointLight position={[5, -3, 2]}  intensity={0.4} color="#7EFFD4" />

      <PresentationControls
        global
        snap
        speed={1.5}
        rotation={[0.08, 0.35, 0]}
        polar={[-Math.PI / 5, Math.PI / 5]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <Float
          speed={1.8}
          rotationIntensity={0.25}
          floatIntensity={0.6}
        >
          <CanModel />
        </Float>
      </PresentationControls>

      <ContactShadows
        position={[0, -2.6, 0]}
        opacity={0.45}
        scale={8}
        blur={2.5}
        far={4}
        color="#00C2FF"
      />

      <Environment preset="studio" />
    </>
  );
}

// ─── Canvas export ─────────────────────────────────────────────────────────────

export default function CanScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 42 }}
      gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
