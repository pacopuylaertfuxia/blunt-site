"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const metrics = [
  {
    label: "DTC Gross Margin",
    value: "55–60%",
    note: "COGS ~€1.20–1.60/can at scale. Retail price €3.50–4.50.",
    color: "#7EFFD4",
    delay: 0,
  },
  {
    label: "Subscription LTV",
    value: "€400–600",
    note: "€40–50/month box, 12-month retention target. Powder phase.",
    color: "#00C2FF",
    delay: 0.07,
  },
  {
    label: "Revenue at 10K Subscribers",
    value: "€400–500K",
    note: "Annual recurring revenue before retail kicks in. Breakeven ~3–5K subs.",
    color: "#7EFFD4",
    delay: 0.14,
  },
  {
    label: "Sponsorship Fit",
    value: "Strong",
    note: "On Running, Lululemon, Whoop — direct co-marketing potential. Padel events.",
    color: "#00C2FF",
    delay: 0.21,
  },
];

export default function Pricing() {
  return (
    <section
      id="monetization"
      className="py-24 px-6 lg:px-10"
      style={{ background: "var(--bg2)" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel num="05" label="Monetization Potential" />
          <h2
            className="font-display leading-[0.95] tracking-[0.03em] mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "#E8F0F5",
            }}
          >
            Unit Economics
            <br />
            That Work
          </h2>
          <p
            className="mb-14 max-w-lg font-light"
            style={{ fontSize: "0.95rem", color: "rgba(232,240,245,0.55)" }}
          >
            Strong margin profile from day one. DTC-to-retail sequencing
            with a subscription layer creates defensible LTV.
          </p>
        </ScrollReveal>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-px"
          style={{ background: "var(--border)", border: "1px solid var(--border)" }}
        >
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              className="relative p-8 lg:p-10"
              style={{ background: "var(--bg)" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: m.delay, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ backgroundColor: "var(--bg3)" }}
            >
              <div
                className="font-display text-xs tracking-[0.2em] mb-3"
                style={{ color: "rgba(232,240,245,0.3)" }}
              >
                {m.label}
              </div>
              <div
                className="font-display mb-3 leading-none"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  color: m.color,
                }}
              >
                {m.value}
              </div>
              <p
                className="text-sm font-light"
                style={{ color: "rgba(232,240,245,0.55)" }}
              >
                {m.note}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <ScrollReveal delay={0.25}>
          <div
            className="mt-6 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            style={{
              background: "rgba(0,194,255,0.05)",
              border: "1px solid rgba(0,194,255,0.18)",
            }}
          >
            <div>
              <div
                className="font-display text-lg lg:text-2xl tracking-[0.05em] mb-1"
                style={{ color: "#E8F0F5" }}
              >
                Ready to build this?
              </div>
              <p
                className="text-sm font-light"
                style={{ color: "rgba(232,240,245,0.5)" }}
              >
                Score 7.8/10. Verdict: Strong Go. The timing window is now.
              </p>
            </div>
            <a
              href="#recommendation"
              className="flex-shrink-0 font-display text-xs tracking-[0.15em] px-6 py-3 transition-all duration-200"
              style={{ background: "#00C2FF", color: "#060A10" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#7EFFD4")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#00C2FF")
              }
            >
              See the Verdict →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
