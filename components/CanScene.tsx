"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  PresentationControls,
  ContactShadows,
  Float,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

// ─── Proportions of a real 330 ml aluminium can ──────────────────────────────
//   Real-world:  height 115 mm · body ⌀ 66 mm · neck ⌀ 57 mm
//   Scene scale: 1 unit ≈ 33 mm  →  body radius 1.0 looks wide in canvas,
//   so we keep the tighter 0.62 r that fits the hero nicely.

const R      = 0.62;   // body radius
const rNeck  = 0.505;  // neck radius  (≈ 57/66 × R)
const rBase  = 0.545;  // bottom-dome radius (slightly smaller than body)
const BODY   = 2.55;   // straight-wall height
const SEGS   = 128;

// ─── Shared materials ─────────────────────────────────────────────────────────

function bodyMat() {
  return (
    <meshPhysicalMaterial
      color="#c0d4e0"
      metalness={0.92}
      roughness={0.12}
      clearcoat={0.7}
      clearcoatRoughness={0.05}
      envMapIntensity={1.6}
    />
  );
}

function topMat() {
  return (
    <meshPhysicalMaterial
      color="#a8bfcc"
      metalness={0.96}
      roughness={0.07}
      clearcoat={1}
      clearcoatRoughness={0.03}
      envMapIntensity={2.0}
    />
  );
}

function ringMat() {
  return (
    <meshPhysicalMaterial
      color="#d8eaf4"
      metalness={1}
      roughness={0.03}
      envMapIntensity={2.5}
    />
  );
}

// ─── Can ─────────────────────────────────────────────────────────────────────

function CanModel() {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.30;
  });

  const half   = BODY / 2;          // 1.275
  const topShH = 0.28;              // top shoulder height
  const botShH = 0.20;              // bottom shoulder height
  const neckH  = 0.08;              // neck straight
  const capH   = 0.04;              // cap disc thickness

  // y positions (centre of each piece)
  const topShY  = half + topShH / 2;
  const neckY   = half + topShH + neckH / 2;
  const capY    = half + topShH + neckH + capH / 2;
  const ringY   = half + topShH + neckH + capH + 0.025;

  const botShY  = -(half + botShH / 2);
  const baseY   = -(half + botShH + capH / 2);

  return (
    <group ref={ref}>
      {/* ── Straight body ── */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[R, R, BODY, SEGS, 1, false]} />
        {bodyMat()}
      </mesh>

      {/* ── Top shoulder taper (smooth cone) ── */}
      <mesh position={[0, topShY, 0]} castShadow>
        <cylinderGeometry args={[rNeck, R, topShH, SEGS, 1, false]} />
        {topMat()}
      </mesh>

      {/* ── Top neck ── */}
      <mesh position={[0, neckY, 0]}>
        <cylinderGeometry args={[rNeck, rNeck, neckH, SEGS, 1, false]} />
        {topMat()}
      </mesh>

      {/* ── Top cap ── */}
      <mesh position={[0, capY, 0]}>
        <cylinderGeometry args={[rNeck, rNeck, capH, SEGS, 1, false]} />
        {topMat()}
      </mesh>

      {/* ── Rivet / score line on lid ── */}
      <mesh position={[0, capY + capH / 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[rNeck * 0.55, rNeck * 0.65, SEGS]} />
        <meshPhysicalMaterial color="#8aa0ae" metalness={1} roughness={0.15} />
      </mesh>

      {/* ── Pull ring ── */}
      <mesh position={[rNeck * 0.28, ringY, 0]} rotation={[0.28, 0, 0]}>
        <torusGeometry args={[rNeck * 0.18, 0.016, 14, 64]} />
        {ringMat()}
      </mesh>

      {/* ── Bottom shoulder taper ── */}
      <mesh position={[0, botShY, 0]} castShadow>
        <cylinderGeometry args={[R, rBase, botShH, SEGS, 1, false]} />
        {topMat()}
      </mesh>

      {/* ── Bottom cap ── */}
      <mesh position={[0, baseY, 0]}>
        <cylinderGeometry args={[rBase, rBase, capH, SEGS, 1, false]} />
        {topMat()}
      </mesh>

      {/* ── Bottom face ── */}
      <mesh position={[0, baseY - capH / 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[rBase, SEGS]} />
        {topMat()}
      </mesh>
    </group>
  );
}

// ─── Mouse-tracked highlight ──────────────────────────────────────────────────

function DynamicLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x += (pointer.x * 6 - lightRef.current.position.x) * 0.08;
      lightRef.current.position.y += (pointer.y * 4 - lightRef.current.position.y) * 0.08;
    }
  });

  return <pointLight ref={lightRef} position={[0, 0, 6]} intensity={2.0} color="#ffffff" />;
}

// ─── Scene ────────────────────────────────────────────────────────────────────

function Scene() {
  return (
    <>
      <ambientLight intensity={0.20} />
      <DynamicLight />
      <pointLight position={[-5, 3, 2]}  intensity={0.8}  color="#00C2FF" />
      <pointLight position={[5, -3, 2]}  intensity={0.50} color="#7EFFD4" />
      <pointLight position={[0, -4, -2]} intensity={0.25} color="#ffffff" />

      <PresentationControls
        global
        snap
        speed={1.5}
        rotation={[0.04, 0.25, 0]}
        polar={[-Math.PI / 5, Math.PI / 5]}
        azimuth={[-Math.PI / 3, Math.PI / 3]}
      >
        <Float speed={1.6} rotationIntensity={0.18} floatIntensity={0.45}>
          <CanModel />
        </Float>
      </PresentationControls>

      <ContactShadows
        position={[0, -3.2, 0]}
        opacity={0.40}
        scale={8}
        blur={2.8}
        far={5}
        color="#00C2FF"
      />

      <Environment preset="studio" />
    </>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function CanScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 40 }}
      gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
