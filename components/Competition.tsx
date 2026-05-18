"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const rows = [
  {
    player: "Momentous / Gainful (US)",
    format: "Powder, DTC",
    gap: "No European RTD presence",
    highlight: false,
  },
  {
    player: "Nocco (Europe)",
    format: "RTD but BCAA/caffeine",
    gap: "Gym-bro aesthetic, no creatine",
    highlight: false,
  },
  {
    player: "Huel",
    format: "Powder / meal replacement",
    gap: "Different use case entirely",
    highlight: false,
  },
  {
    player: "Athletic Brewing",
    format: "RTD non-alcoholic beer",
    gap: "Same consumer, different category",
    highlight: false,
  },
  {
    player: "Olipop / Remedy",
    format: "Gut health RTD",
    gap: "Same aesthetic, different function",
    highlight: false,
  },
  {
    player: "BLUNT",
    format: "RTD Creatine + Electrolytes",
    gap: "Unoccupied — zero direct European competitor",
    highlight: true,
  },
];

export default function Competition() {
  return (
    <section
      id="competition"
      className="py-24 px-6 lg:px-10"
      style={{ background: "var(--bg2)" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel num="02" label="Competition Landscape" />
          <h2
            className="font-display leading-[0.95] tracking-[0.03em] mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "#E8F0F5",
            }}
          >
            Nobody's
            <br />
            Here Yet
          </h2>
          <p
            className="mb-12 max-w-lg font-light"
            style={{ fontSize: "0.95rem", color: "rgba(232,240,245,0.55)" }}
          >
            Low saturation in European RTD creatine. The "postable, desk-worthy"
            lifestyle positioning combined with creatine + electrolytes is
            genuinely unoccupied territory.
          </p>
        </ScrollReveal>

        {/* Table */}
        <ScrollReveal delay={0.1}>
          <div
            className="overflow-x-auto mb-6"
            style={{ border: "1px solid var(--border)" }}
          >
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <th
                    className="font-display text-xs tracking-[0.2em] text-left px-5 py-4"
                    style={{ color: "rgba(232,240,245,0.3)" }}
                  >
                    Player
                  </th>
                  <th
                    className="font-display text-xs tracking-[0.2em] text-left px-5 py-4"
                    style={{ color: "rgba(232,240,245,0.3)" }}
                  >
                    Format
                  </th>
                  <th
                    className="font-display text-xs tracking-[0.2em] text-left px-5 py-4"
                    style={{ color: "rgba(232,240,245,0.3)" }}
                  >
                    Gap
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <motion.tr
                    key={row.player}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                      borderBottom: "1px solid var(--border)",
                      background: row.highlight
                        ? "rgba(0,194,255,0.05)"
                        : "transparent",
                    }}
                    whileHover={{
                      backgroundColor: row.highlight
                        ? "rgba(0,194,255,0.09)"
                        : "rgba(255,255,255,0.02)",
                    }}
                  >
                    <td
                      className="px-5 py-4 text-sm font-medium"
                      style={{
                        color: row.highlight ? "#00C2FF" : "#E8F0F5",
                      }}
                    >
                      {row.player}
                    </td>
                    <td
                      className="px-5 py-4 text-sm font-light"
                      style={{ color: "rgba(232,240,245,0.55)" }}
                    >
                      {row.format}
                    </td>
                    <td
                      className="px-5 py-4 text-sm font-light"
                      style={{ color: "rgba(232,240,245,0.55)" }}
                    >
                      {row.highlight ? (
                        <strong style={{ color: "#7EFFD4", fontWeight: 500 }}>
                          {row.gap}
                        </strong>
                      ) : (
                        row.gap
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* Gap box */}
        <ScrollReveal delay={0.2}>
          <div
            className="relative overflow-hidden p-6 lg:p-8"
            style={{
              background: "var(--bg3)",
              border: "1px solid var(--border2)",
            }}
          >
            <span
              className="absolute top-0 right-4 font-display leading-none pointer-events-none"
              style={{ fontSize: "7rem", color: "rgba(255,255,255,0.015)" }}
              aria-hidden
            >
              GAP
            </span>
            <p
              className="text-sm font-light leading-relaxed relative z-10"
              style={{ color: "rgba(232,240,245,0.6)" }}
            >
              <strong style={{ color: "#E8F0F5", fontWeight: 500 }}>
                Saturation: Low
              </strong>{" "}
              in European RTD creatine / Medium in functional beverages broadly.
              The "postable, desk-worthy" lifestyle positioning combined with
              creatine + electrolytes in a can is{" "}
              <strong style={{ color: "#E8F0F5", fontWeight: 500 }}>
                genuinely unoccupied territory
              </strong>
              .
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
