"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Can3D from "./Can3D";
import { useRef } from "react";
import React from "react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const line = {
  hidden: { opacity: 0, y: 40 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const canY  = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const canOp = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const txtY  = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: "var(--bg)" }}>

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(0,194,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,194,255,0.03) 1px,transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage: "radial-gradient(ellipse 90% 90% at 50% 40%, black 20%, transparent 100%)",
      }}/>

      {/* Glows */}
      <div className="absolute pointer-events-none" style={{ top: "5%", right: "-5%", width: "50vw", height: "50vw", background: "radial-gradient(circle, rgba(0,194,255,0.10) 0%, transparent 65%)" }}/>
      <div className="absolute pointer-events-none" style={{ bottom: "10%", left: "-10%", width: "30vw", height: "30vw", background: "radial-gradient(circle, rgba(126,255,212,0.06) 0%, transparent 65%)" }}/>

      {/* Ghost score watermark */}
      <motion.div
        className="absolute select-none pointer-events-none font-display leading-none"
        style={{
          top: "50%", left: "-2vw",
          translateY: "-50%",
          fontSize: "clamp(14rem, 38vw, 52rem)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(0,194,255,0.07)",
          y: txtY,
          letterSpacing: "-0.02em",
          zIndex: 0,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        aria-hidden
      >
        7.8
      </motion.div>

      {/* 3D Can — desktop */}
      <Can3D
        className="absolute hidden lg:block"
        style={{
          right: "0vw",
          top: "0",
          width: "46vw",
          height: "100%",
          zIndex: 1,
        } as React.CSSProperties}
      />

      {/* Content */}
      <motion.div
        className="relative flex flex-col justify-end px-6 lg:px-10 pb-16 pt-28 z-10"
        style={{ minHeight: "100vh", maxWidth: "65vw" }}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* Label */}
        <motion.div variants={line} className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px" style={{ background: "#00C2FF" }}/>
          <span className="font-display text-[0.7rem] tracking-[0.3em]" style={{ color: "#00C2FF" }}>Market Opportunity Analysis</span>
        </motion.div>

        {/* Main title */}
        <div className="overflow-hidden">
          <motion.div variants={line} className="font-display leading-[0.85] tracking-[0.01em]"
            style={{ fontSize: "clamp(4.5rem, 13vw, 11rem)", color: "#E8F0F5" }}>
            RTD
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div variants={line} className="font-display leading-[0.85] tracking-[0.01em] pl-[0.5em]"
            style={{ fontSize: "clamp(4.5rem, 13vw, 11rem)", color: "#E8F0F5" }}>
            Creatine
          </motion.div>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.div variants={line} className="font-display leading-[0.85] tracking-[0.01em] pl-[1em]"
            style={{ fontSize: "clamp(4.5rem, 13vw, 11rem)", color: "#00C2FF" }}>
            Europe
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div variants={line} className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 max-w-[200px]" style={{ background: "var(--border2)" }}/>
          <span className="font-display text-xs tracking-[0.2em]" style={{ color: "var(--c30)" }}>2026 — CONFIDENTIAL</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p variants={line} className="font-light mb-10 max-w-[480px]"
          style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)", color: "rgba(232,240,245,0.55)", lineHeight: 1.7 }}>
          Creatine + electrolytes in a can — targeting active Europeans who don't identify as gym culture but live performance-oriented lives.
        </motion.p>

        {/* Score + CTAs */}
        <motion.div variants={line} className="flex flex-wrap items-end gap-8 mb-0">
          <div>
            <div className="font-display text-[0.65rem] tracking-[0.25em] mb-1" style={{ color: "var(--c30)" }}>Composite Score</div>
            <div className="font-display leading-none" style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", color: "#7EFFD4", textShadow: "0 0 60px rgba(126,255,212,0.3)" }}>
              7.8<span className="font-display" style={{ fontSize: "2rem", color: "var(--c30)", verticalAlign: "baseline" }}>/10</span>
            </div>
            <div className="font-display text-xl tracking-[0.08em] mt-1" style={{ color: "#00C2FF" }}>Strong → Go</div>
          </div>

          <div className="flex gap-3 pb-2">
            <a href="#market" data-cursor
              className="font-display text-xs tracking-[0.15em] px-6 py-3 transition-all duration-200"
              style={{ background: "#00C2FF", color: "#060A10" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#7EFFD4")}
              onMouseLeave={e => (e.currentTarget.style.background = "#00C2FF")}
            >View Analysis ↓</a>
            <a href="#recommendation" data-cursor
              className="font-display text-xs tracking-[0.15em] px-6 py-3 transition-all duration-200"
              style={{ border: "1px solid rgba(0,194,255,0.3)", color: "#00C2FF" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(0,194,255,0.6)"; e.currentTarget.style.background="rgba(0,194,255,0.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(0,194,255,0.3)"; e.currentTarget.style.background="transparent"; }}
            >Join Waitlist</a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2" aria-hidden>
        <span className="font-display text-[0.6rem] tracking-[0.3em]" style={{ color:"var(--c30)", writingMode:"vertical-rl" }}>Scroll</span>
        <span className="w-px h-12 block" style={{ background:"var(--border2)" }}/>
      </div>
    </section>
  );
}
