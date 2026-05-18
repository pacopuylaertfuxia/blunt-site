"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const risks = [
  {
    num: "01",
    title: "CreaBev® Supplier Dependency",
    body: "You're reliant on a single encapsulation technology supplier. If they can't scale or pricing increases, the core product differentiator is threatened.",
    mitigation:
      "Validate alternative encapsulation options early. Negotiate exclusivity.",
  },
  {
    num: "02",
    title: "18-Month Copycat Window",
    body: "If BLUNT validates the market with a DTC launch, a Nocco, Huel, or Redbull-backed competitor can launch a me-too with 10× the budget. Speed and brand equity are your only moat.",
    mitigation:
      "Move fast. Build community before retail. Make brand equity defensible.",
  },
  {
    num: "03",
    title: "Retail Timeline Slippage",
    body: "Independent health stores (Ekoplaza, etc.) have long lead times and listing fees. Phase 3 likely slips to 24–30 months realistically.",
    mitigation:
      "Plan cash for a longer powder-first runway. Don't underestimate retail gatekeeping.",
  },
];

function RiskItem({
  risk,
  delay,
}: {
  risk: (typeof risks)[0];
  delay: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        borderBottom: "1px solid var(--border)",
      }}
    >
      <button
        className="w-full grid items-start text-left py-6 px-2 gap-4 transition-colors duration-150"
        style={{ gridTemplateColumns: "auto 1fr auto" }}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="font-display text-2xl leading-none mt-0.5"
          style={{ color: "#00C2FF", opacity: 0.4 }}
        >
          {risk.num}
        </span>
        <span
          className="font-display text-lg lg:text-xl tracking-[0.04em]"
          style={{ color: "#E8F0F5" }}
        >
          {risk.title}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="font-display text-xl leading-none mt-0.5"
          style={{ color: "rgba(232,240,245,0.35)" }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-12 pr-2">
              <p
                className="text-sm font-light leading-relaxed mb-4"
                style={{ color: "rgba(232,240,245,0.6)" }}
              >
                {risk.body}
              </p>
              <div
                className="flex items-start gap-2 text-xs font-light"
                style={{ color: "#00C2FF" }}
              >
                <span className="font-display mt-0.5">→</span>
                <span>{risk.mitigation}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section
      id="risks"
      className="py-24 px-6 lg:px-10"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel num="06" label="Risk Factors" />
          <h2
            className="font-display leading-[0.95] tracking-[0.03em] mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "#E8F0F5",
            }}
          >
            Know the
            <br />
            Risks
          </h2>
          <p
            className="mb-12 max-w-lg font-light"
            style={{ fontSize: "0.95rem", color: "rgba(232,240,245,0.55)" }}
          >
            The concept is sound. The risk isn't the idea — it's execution
            speed and staying funded through the 18-month transition.
          </p>
        </ScrollReveal>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          {risks.map((r, i) => (
            <RiskItem key={r.num} risk={r} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
