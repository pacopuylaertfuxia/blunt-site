"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const stats = [
  {
    value: 180,
    suffix: "M",
    label: "Europeans 25–45",
    desc: "Active, health-aware adults across Europe — your total addressable market.",
    delay: 0,
  },
  {
    value: 22,
    suffix: "M",
    label: "Serviceable Audience",
    desc: "Padel players, cyclists, runners in Western Europe who buy premium functional products.",
    delay: 0.05,
  },
  {
    value: 15,
    suffix: "%+",
    label: "Annual Market CAGR",
    desc: "European creatine market growing faster than any adjacent supplement category.",
    delay: 0.1,
  },
  {
    value: 779,
    suffix: "M",
    label: "Market Size by 2033",
    desc: "From $217M today. RTD creatine is pre-wave in Europe — the window is open now.",
    delay: 0.15,
  },
];

function Counter({
  value,
  suffix,
  delay,
  color,
}: {
  value: number;
  suffix: string;
  delay: number;
  color: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, {
        duration: 1.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent =
              value < 100
                ? Math.round(v).toString()
                : Math.round(v).toString();
          }
        },
      });
      return controls.stop;
    }
  }, [inView, value, delay, motionValue]);

  return (
    <span
      className="font-display leading-none"
      style={{
        fontSize: "clamp(3rem, 6vw, 5rem)",
        color,
      }}
    >
      <span ref={ref}>0</span>
      <span style={{ fontSize: "0.55em" }}>{suffix}</span>
    </span>
  );
}

export default function SocialProof() {
  return (
    <section
      id="market"
      className="py-24 px-6 lg:px-10"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel num="01" label="Market Size" />
          <h2
            className="font-display leading-[0.95] tracking-[0.03em] mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "#E8F0F5",
            }}
          >
            The Numbers
            <br />
            Don't Lie
          </h2>
          <p
            className="mb-14 max-w-lg font-light"
            style={{ fontSize: "0.95rem", color: "rgba(232,240,245,0.55)" }}
          >
            A market growing at 15%+ CAGR with zero dominant RTD creatine
            brand in Europe. The window is open.
          </p>
        </ScrollReveal>

        {/* Stats grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mb-10"
          style={{ background: "var(--border)", border: "1px solid var(--border)" }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="p-8 relative overflow-hidden"
              style={{ background: "var(--bg2)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: s.delay }}
              whileHover={{ backgroundColor: "var(--bg3)" }}
            >
              {/* Ghost index */}
              <span
                className="absolute top-3 right-4 font-display leading-none"
                style={{
                  fontSize: "4rem",
                  color: "rgba(255,255,255,0.025)",
                }}
                aria-hidden
              >
                0{i + 1}
              </span>

              <Counter
                value={s.value}
                suffix={s.suffix}
                delay={s.delay + 0.3}
                color={i % 2 === 0 ? "#7EFFD4" : "#00C2FF"}
              />
              <div
                className="font-display text-xs tracking-[0.2em] mt-2 mb-3"
                style={{ color: "rgba(232,240,245,0.35)" }}
              >
                {s.label}
              </div>
              <p
                className="text-xs font-light leading-relaxed"
                style={{ color: "rgba(232,240,245,0.5)" }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trend bar */}
        <ScrollReveal delay={0.2}>
          <div
            className="flex items-start gap-4 p-5"
            style={{
              background: "rgba(0,194,255,0.05)",
              border: "1px solid rgba(0,194,255,0.18)",
            }}
          >
            <span
              className="font-display text-xl leading-none flex-shrink-0"
              style={{ color: "#00C2FF" }}
            >
              ↑
            </span>
            <p className="text-sm font-light" style={{ color: "rgba(232,240,245,0.6)" }}>
              <strong style={{ color: "#E8F0F5", fontWeight: 500 }}>
                Growing fast.
              </strong>{" "}
              European creatine market $217M → $779M by 2033 (15%+ CAGR). RTD
              creatine is pre-wave in Europe — 18–24 months behind the US
              curve. Functional RTD growing ~8% CAGR in parallel.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
