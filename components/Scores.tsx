"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const scores = [
  {
    name: "Market Size",
    weight: "25%",
    score: 8,
    color: "#7EFFD4",
    desc: "Large TAM, genuinely underserved SAM in the European RTD creatine space.",
  },
  {
    name: "Recreatability / Organic Growth",
    weight: "25%",
    score: 7,
    color: "#00C2FF",
    desc: "Design-dependent but ceiling is high. If the can is photogenic, UGC is essentially free.",
  },
  {
    name: "Monetization",
    weight: "20%",
    score: 8,
    color: "#7EFFD4",
    desc: "Strong unit economics with subscription layer. 55–60% gross margin DTC.",
  },
  {
    name: "Virality",
    weight: "20%",
    score: 8,
    color: "#00C2FF",
    desc: "Tight community networks — padel clubs, CrossFit, cycling. One person brings it, it spreads.",
  },
  {
    name: "Competition Gap",
    weight: "10%",
    score: 9,
    color: "#7EFFD4",
    desc: "Genuine white space in Europe. First-mover advantage is real and time-limited.",
  },
];

function ScoreBar({
  score,
  color,
  delay,
}: {
  score: number;
  color: string;
  delay: number;
}) {
  return (
    <div
      className="h-px mt-4 rounded-full overflow-hidden"
      style={{ background: "rgba(255,255,255,0.07)" }}
    >
      <motion.div
        className="h-full rounded-full"
        style={{ background: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${score * 10}%` }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  );
}

export default function Scores() {
  return (
    <section
      id="scores"
      className="py-24 px-6 lg:px-10"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel num="03" label="Dimension Scores" />
          <h2
            className="font-display leading-[0.95] tracking-[0.03em] mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "#E8F0F5",
            }}
          >
            How We
            <br />
            Score It
          </h2>
          <p
            className="mb-14 max-w-lg font-light"
            style={{ fontSize: "0.95rem", color: "rgba(232,240,245,0.55)" }}
          >
            Five weighted dimensions. Weighted composite score: 7.8/10.
          </p>
        </ScrollReveal>

        {/* Score cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px mb-px"
          style={{ background: "var(--border)", border: "1px solid var(--border)" }}
        >
          {scores.map((s, i) => (
            <motion.div
              key={s.name}
              className="p-8"
              style={{ background: "var(--bg)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ backgroundColor: "var(--bg3)" }}
            >
              <div
                className="font-display text-xs tracking-[0.2em] mb-3"
                style={{ color: "rgba(232,240,245,0.3)" }}
              >
                {s.name}
              </div>
              <div className="flex items-end gap-1 mb-3">
                <span
                  className="font-display leading-none"
                  style={{ fontSize: "3rem", color: s.color }}
                >
                  {s.score}
                </span>
                <span
                  className="font-display mb-1"
                  style={{ fontSize: "1.1rem", color: "rgba(232,240,245,0.25)" }}
                >
                  /10
                </span>
              </div>
              <p
                className="text-xs font-light leading-relaxed"
                style={{ color: "rgba(232,240,245,0.55)" }}
              >
                {s.desc}
              </p>
              <ScoreBar score={s.score} color={s.color} delay={i * 0.07 + 0.3} />
            </motion.div>
          ))}
        </div>

        {/* Weights table */}
        <ScrollReveal delay={0.15} className="mb-12">
          <div style={{ border: "1px solid var(--border)", borderTop: "none" }}>
            {scores.map((s, i) => (
              <div
                key={s.name + "w"}
                className="grid items-center px-6 py-4 transition-colors duration-150"
                style={{
                  gridTemplateColumns: "1fr auto auto",
                  gap: "1rem",
                  borderBottom:
                    i < scores.length - 1 ? "1px solid var(--border)" : "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--bg3)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <span
                  className="text-sm font-light"
                  style={{ color: "rgba(232,240,245,0.6)" }}
                >
                  {s.name}
                </span>
                <span
                  className="font-display text-xs tracking-[0.1em]"
                  style={{ color: "rgba(232,240,245,0.3)" }}
                >
                  {s.weight}
                </span>
                <span
                  className="font-display text-xl"
                  style={{ color: s.color }}
                >
                  {s.score}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Spectrum bar */}
        <ScrollReveal delay={0.2}>
          <div
            className="h-1.5 rounded-sm relative mb-2"
            style={{
              background:
                "linear-gradient(90deg, #1a2030, #00C2FF 50%, #7EFFD4 100%)",
            }}
          >
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full"
              style={{
                left: "78%",
                background: "#E8F0F5",
                boxShadow:
                  "0 0 0 3px var(--bg), 0 0 0 5px #00C2FF",
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4, type: "spring" }}
            />
          </div>
          <div
            className="flex justify-between font-display text-xs tracking-[0.15em]"
            style={{ color: "rgba(232,240,245,0.3)" }}
          >
            <span>Skip</span>
            <span>Moderate</span>
            <span>Strong</span>
            <span>Massive</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
