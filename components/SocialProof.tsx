"use client";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { val: 180, suf: "M", label: "Europeans 25–45", sub: "Total Addressable Market", color: "#08080C" },
  { val: 22,  suf: "M", label: "Serviceable Audience", sub: "Western Europe premium spenders", color: "#08080C" },
  { val: 779, suf: "M", label: "Market by 2033", sub: "From $217M today — 15%+ CAGR", color: "#00C2FF" },
];

function AnimatedNum({ val, suf, color, delay }: { val: number; suf: string; color: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const c = animate(mv, val, {
      duration: 2,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: v => { if (ref.current) ref.current.textContent = Math.round(v).toString(); },
    });
    return c.stop;
  }, [inView, val, delay, mv]);

  return (
    <span ref={ref} className="font-display leading-none" style={{ color }}>0</span>
  );
}

export default function SocialProof() {
  return (
    <section id="market" style={{ background: "var(--warm)" }}>
      {/* Section intro */}
      <div className="px-6 lg:px-10 pt-20 pb-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-5 h-px" style={{ background: "rgba(0,12,24,0.4)" }}/>
          <span className="font-display text-[0.7rem] tracking-[0.3em]" style={{ color: "rgba(0,12,24,0.45)" }}>01 — Market Size</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display leading-[0.9] mb-3"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "#08080C" }}
        >
          The Numbers
          <br />
          Are There.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-light max-w-lg"
          style={{ fontSize: "0.95rem", color: "rgba(8,8,12,0.5)", lineHeight: 1.7 }}
        >
          A market growing at 15%+ CAGR with zero dominant RTD creatine brand in Europe. The window is open now.
        </motion.p>
      </div>

      {/* Giant stats */}
      <div style={{ borderTop: "1px solid rgba(8,8,12,0.1)" }}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="grid px-6 lg:px-10 py-10 items-center"
            style={{
              gridTemplateColumns: "1fr auto",
              borderBottom: "1px solid rgba(8,8,12,0.1)",
              maxWidth: "100%",
            }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div className="font-display tracking-[0.25em] text-[0.65rem] mb-2" style={{ color: "rgba(8,8,12,0.4)" }}>{s.sub}</div>
              <div className="font-display leading-none" style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", color: s.color }}>
                <AnimatedNum val={s.val} suf={s.suf} color={s.color} delay={i * 0.1 + 0.3} />
                <span style={{ fontSize: "0.4em", verticalAlign: "0.2em" }}>{s.suf}</span>
              </div>
            </div>
            <div className="text-right max-w-[260px] hidden md:block">
              <div className="font-display text-sm tracking-[0.1em] mb-1" style={{ color: "rgba(8,8,12,0.65)" }}>{s.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Insight strip */}
      <motion.div
        className="px-6 lg:px-10 py-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="font-light text-sm" style={{ color: "rgba(8,8,12,0.5)", lineHeight: 1.8, maxWidth: 600 }}>
          <strong style={{ color:"#08080C", fontWeight: 500 }}>Growing fast.</strong> European creatine market $217M → $779M by 2033. RTD creatine is 18–24 months behind the US curve in Europe. Functional RTD growing ~8% CAGR in parallel. The window to be first is now.
        </p>
      </motion.div>
    </section>
  );
}
