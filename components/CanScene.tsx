"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  PresentationControls,
  ContactShadows,
  Float,
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

// ─────────────────────────────────────────────────────────────────────────────
//  Single LatheGeometry profile — one seamless mesh, no junction artefacts.
//
//  Real 330 ml can (Coca-Cola / standard):
//    total height  115 mm  →  scene 3.45 u  (scale 0.030 u/mm)
//    body radius    33 mm  →  0.99 u  (we keep 0.62 to fit hero; proportions preserved)
//    neck radius    28.5 mm →  0.535 u
//
//  Points are (radius, y) from BOTTOM → TOP.
// ─────────────────────────────────────────────────────────────────────────────

function buildCanProfile(): THREE.Vector2[] {
  // Helper: quadratic bezier interpolation
  const bezier = (
    p0: [number, number],
    p1: [number, number],
    p2: [number, number],
    steps: number
  ): THREE.Vector2[] => {
    const pts: THREE.Vector2[] = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const u = 1 - t;
      const x = u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0];
      const y = u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1];
      pts.push(new THREE.Vector2(x, y));
    }
    return pts;
  };

  const R     = 0.620;   // body radius
  const rN    = 0.535;   // neck radius
  const rBase = 0.490;   // base dome rim

  const pts: THREE.Vector2[] = [];

  // ── bottom dome (concave inner dome, then outward chime) ──
  // centre point
  pts.push(new THREE.Vector2(0.0,   -1.88));
  // inner dome rising outward
  pts.push(...bezier([0.0, -1.88], [0.30, -1.90], [rBase, -1.82], 8));
  // chime curving outward + up to body
  pts.push(...bezier([rBase, -1.82], [R - 0.01, -1.78], [R, -1.70], 6));

  // ── straight body wall ──
  pts.push(new THREE.Vector2(R, -1.70));
  pts.push(new THREE.Vector2(R,  1.42));

  // ── top shoulder (smooth inward curve, the "neck taper") ──
  pts.push(...bezier([R, 1.42], [R, 1.64], [rN, 1.78], 12));

  // ── neck (short straight section) ──
  pts.push(new THREE.Vector2(rN, 1.78));
  pts.push(new THREE.Vector2(rN, 1.88));

  // ── rim bead (tiny outward flare at the very top edge) ──
  pts.push(new THREE.Vector2(rN + 0.012, 1.90));
  pts.push(new THREE.Vector2(rN + 0.012, 1.92));
  pts.push(new THREE.Vector2(rN,          1.94));

  return pts;
}

// ─── Can mesh ────────────────────────────────────────────────────────────────

function CanModel() {
  const ref     = useRef<THREE.Group>(null);
  const profile = useMemo(buildCanProfile, []);

  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.28;
  });

  const rN   = 0.535;
  const topY = 1.94;   // must match last profile point y

  return (
    <group ref={ref}>

      {/* ── One seamless can body ── */}
      <mesh castShadow receiveShadow>
        <latheGeometry args={[profile, 128]} />
        <meshPhysicalMaterial
          color="#c4d6e2"
          metalness={0.93}
          roughness={0.10}
          clearcoat={0.75}
          clearcoatRoughness={0.05}
          envMapIntensity={1.8}
        />
      </mesh>

      {/* ── Lid (flat disc) ── */}
      <mesh position={[0, topY, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[rN, 128]} />
        <meshPhysicalMaterial
          color="#aabdca"
          metalness={0.95}
          roughness={0.08}
          clearcoat={1}
          clearcoatRoughness={0.03}
          envMapIntensity={2.2}
        />
      </mesh>

      {/* ── Score ring (embossed circle on lid) ── */}
      <mesh position={[0, topY + 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[rN * 0.44, rN * 0.52, 128]} />
        <meshPhysicalMaterial
          color="#8a9daa"
          metalness={1}
          roughness={0.18}
        />
      </mesh>

      {/* ── Pull-tab ring ── */}
      <mesh
        position={[rN * 0.30, topY + 0.028, 0]}
        rotation={[0.25, 0, 0]}
      >
        <torusGeometry args={[rN * 0.175, 0.015, 16, 64]} />
        <meshPhysicalMaterial
          color="#d8eaf4"
          metalness={1}
          roughness={0.03}
          envMapIntensity={2.5}
        />
      </mesh>

      {/* ── Pull-tab lever ── */}
      <mesh
        position={[rN * 0.05, topY + 0.018, 0]}
        rotation={[0.2, 0, 0.15]}
      >
        <boxGeometry args={[rN * 0.32, 0.012, rN * 0.55]} />
        <meshPhysicalMaterial
          color="#ccdce8"
          metalness={1}
          roughness={0.05}
          envMapIntensity={2.0}
        />
      </mesh>

    </group>
  );
}

// ─── Mouse-tracked highlight ──────────────────────────────────────────────────

function DynamicLight() {
  const ref     = useRef<THREE.PointLight>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (ref.current) {
      ref.current.position.x += (pointer.x * 6 - ref.current.position.x) * 0.08;
      ref.current.position.y += (pointer.y * 4 - ref.current.position.y) * 0.08;
    }
  });

  return <pointLight ref={ref} position={[0, 0, 6]} intensity={2.0} color="#ffffff" />;
}

// ─── Scene ────────────────────────────────────────────────────────────────────

function Scene() {
  return (
    <>
      <ambientLight intensity={0.18} />
      <DynamicLight />
      <pointLight position={[-5,  3, 2]} intensity={0.80} color="#00C2FF" />
      <pointLight position={[ 5, -3, 2]} intensity={0.50} color="#7EFFD4" />
      <pointLight position={[ 0, -4, -2]} intensity={0.20} color="#ffffff" />

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
        position={[0, -2.6, 0]}
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
