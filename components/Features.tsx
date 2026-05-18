"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const features = [
  {
    num: "9",
    label: "Competition Gap",
    desc: "Genuine white space in European RTD creatine. Zero direct competitors. First-mover advantage is real — and time-limited.",
    sub: "Unoccupied territory",
    color: "#7EFFD4",
    delay: 0,
  },
  {
    num: "8",
    label: "Market Size",
    desc: "European creatine market $217M → $779M by 2033. 15%+ CAGR. RTD creatine is 18–24 months behind the US curve.",
    sub: "180M TAM · 22M SAM",
    color: "#00C2FF",
    delay: 0.08,
  },
  {
    num: "8",
    label: "Virality",
    desc: "Padel clubs, CrossFit boxes, cycling groups are tight social networks. One person brings it in — it spreads without a media budget.",
    sub: "Word-of-mouth score 9/10",
    color: "#7EFFD4",
    delay: 0.16,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 px-6 lg:px-10"
      style={{ background: "var(--bg2)" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel num="Why Now" />
          <h2
            className="font-display leading-[0.95] tracking-[0.03em] mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "#E8F0F5",
            }}
          >
            Three Reasons
            <br />
            This Works
          </h2>
          <p
            className="mb-14 max-w-lg font-light"
            style={{
              fontSize: "0.95rem",
              color: "rgba(232,240,245,0.55)",
            }}
          >
            The three highest-scoring dimensions — and why the timing is
            exactly right.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {features.map((f) => (
            <motion.div
              key={f.label}
              className="relative overflow-hidden p-8 group cursor-default"
              style={{ background: "var(--bg2)" }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: f.delay, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ backgroundColor: "var(--bg3)" }}
            >
              {/* Ghost number */}
              <span
                className="absolute top-4 right-6 font-display leading-none pointer-events-none"
                style={{
                  fontSize: "6rem",
                  color: "rgba(255,255,255,0.025)",
                }}
                aria-hidden
              >
                {f.num}
              </span>

              {/* Score */}
              <div
                className="font-display mb-2 leading-none"
                style={{ fontSize: "3.5rem", color: f.color }}
              >
                {f.num}
                <span
                  className="font-display"
                  style={{
                    fontSize: "1.1rem",
                    color: "rgba(232,240,245,0.25)",
                  }}
                >
                  /10
                </span>
              </div>

              {/* Label */}
              <div
                className="font-display text-xs tracking-[0.2em] mb-4"
                style={{ color: "rgba(232,240,245,0.35)" }}
              >
                {f.label}
              </div>

              {/* Bar */}
              <motion.div
                className="h-px mb-6"
                style={{ background: f.color, originX: 0 }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: f.delay + 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              />

              {/* Description */}
              <p
                className="text-sm font-light leading-relaxed mb-4"
                style={{ color: "rgba(232,240,245,0.6)" }}
              >
                {f.desc}
              </p>

              {/* Sub-tag */}
              <div
                className="font-display text-xs tracking-[0.15em]"
                style={{ color: f.color, opacity: 0.7 }}
              >
                {f.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
