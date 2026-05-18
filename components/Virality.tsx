"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const factors = [
  {
    label: "Hook Strength",
    score: 8,
    note: '"Creatine in a can" is a single-sentence pitch anyone instantly gets.',
    color: "#7EFFD4",
  },
  {
    label: "Shareability",
    score: 7,
    note: "Design-literate audience shares aesthetically pleasing products.",
    color: "#00C2FF",
  },
  {
    label: "Save / Rewatch",
    score: 5,
    note: 'Educational "why creatine?" content saves well across platforms.',
    color: "#00C2FF",
  },
  {
    label: "Algorithm Fit",
    score: 7,
    note: "Lifestyle + wellness is a strong IG / TikTok category with high engagement.",
    color: "#7EFFD4",
  },
  {
    label: "Word of Mouth",
    score: 9,
    note: "Padel clubs, CrossFit boxes, cycling groups are tight social networks.",
    color: "#7EFFD4",
  },
];

export default function Virality() {
  return (
    <section
      id="virality"
      className="py-24 px-6 lg:px-10"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel num="04" label="Virality Factors" />
          <h2
            className="font-display leading-[0.95] tracking-[0.03em] mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "#E8F0F5",
            }}
          >
            Built to
            <br />
            Spread
          </h2>
          <p
            className="mb-14 max-w-lg font-light"
            style={{ fontSize: "0.95rem", color: "rgba(232,240,245,0.55)" }}
          >
            Word-of-mouth score 9/10. The communities BLUNT targets are
            tight networks where one person introduces a product and it
            spreads without a media budget.
          </p>
        </ScrollReveal>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px"
          style={{
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {factors.map((f, i) => (
            <motion.div
              key={f.label}
              className="p-6 relative"
              style={{ background: "var(--bg2)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ backgroundColor: "var(--bg3)" }}
            >
              <div
                className="font-display text-[0.65rem] tracking-[0.2em] mb-2"
                style={{ color: "rgba(232,240,245,0.3)" }}
              >
                {f.label}
              </div>
              <div
                className="font-display leading-none mb-3"
                style={{ fontSize: "2.2rem", color: f.color }}
              >
                {f.score}
                <span style={{ fontSize: "0.8rem", color: "rgba(232,240,245,0.25)" }}>
                  /10
                </span>
              </div>
              <p
                className="text-xs font-light leading-relaxed"
                style={{ color: "rgba(232,240,245,0.55)" }}
              >
                {f.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
