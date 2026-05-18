"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Dynamically import so Three.js never runs server-side
const CanScene = dynamic(() => import("./CanScene"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ opacity: 0 }}
    />
  ),
});

interface Can3DProps {
  className?: string;
  style?: React.CSSProperties;
}

import React from "react";

export default function Can3D({ className, style }: Can3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Subtle lift as user scrolls past hero
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, ...style }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Drag hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-display text-[0.6rem] tracking-[0.25em] z-10 pointer-events-none"
        style={{ color: "rgba(0,194,255,0.4)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        drag to rotate
      </motion.div>

      <CanScene />
    </motion.div>
  );
}
