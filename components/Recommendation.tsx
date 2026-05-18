"use client";

import { motion } from "framer-motion";

import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    label: "The Angle",
    body: 'Own <strong>"creatine for people who don\'t take supplements."</strong> Not gym. Not sport. Not biohacking. Everyday performance for people who care how they feel at 3pm. The cognitive / afternoon energy angle sidesteps the bodybuilder association entirely.',
    delay: 0,
  },
  {
    label: "First 30 Days",
    body: "<strong>Lock CreaBev® or equivalent with an exclusivity clause.</strong> Design the can before you make the can — the visual identity IS the product validation. Launch a waitlist targeting Copenhagen padel clubs and cycling communities.",
    delay: 0.07,
  },
  {
    label: "Channel to Study",
    body: "<strong>Momentous</strong> — US brand that crossed from elite sport into mainstream with exactly this positioning shift. Their content, ambassador strategy, and DTC-to-retail sequencing is your playbook. Athletic Brewing for cultural proof of concept.",
    delay: 0.14,
  },
  {
    label: "Bottom Line",
    body: "The concept is sound, the timing is right, the positioning is differentiated. <strong>The risk isn't the idea — it's execution speed</strong> and staying funded through the 18-month powder → can transition. If the can looks as good as Olipop and the community is tight before retail, this is a real brand.",
    delay: 0.21,
  },
];

export default function Recommendation() {
  return (
    <section
      id="recommendation"
      className="py-24 px-6 lg:px-10"
      style={{ background: "#00C2FF" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div
            className="flex items-center gap-3 mb-3"
          >
            <span
              className="inline-block w-5 h-px"
              style={{ background: "rgba(0,12,24,0.35)" }}
            />
            <span
              className="font-display text-xs tracking-[0.3em]"
              style={{ color: "rgba(0,12,24,0.55)" }}
            >
              07 — Recommendation
            </span>
          </div>
          <h2
            className="font-display leading-[0.95] tracking-[0.03em] mb-8"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "rgba(0,12,24,0.7)",
            }}
          >
            Verdict
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div
            className="font-display leading-[0.88] mb-12"
            style={{
              fontSize: "clamp(4rem, 10vw, 8rem)",
              color: "#001824",
              letterSpacing: "0.01em",
            }}
          >
            GO —<br />
            Copenhagen<br />
            First.
          </div>
        </ScrollReveal>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-px"
          style={{
            background: "rgba(0,12,24,0.18)",
            border: "1px solid rgba(0,12,24,0.18)",
          }}
        >
          {cards.map((c) => (
            <motion.div
              key={c.label}
              className="p-8 transition-colors duration-200"
              style={{ background: "rgba(0,12,24,0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: c.delay, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ backgroundColor: "rgba(0,12,24,0.2)" }}
            >
              <div
                className="font-display text-xs tracking-[0.25em] mb-3"
                style={{ color: "rgba(0,12,24,0.5)" }}
              >
                {c.label}
              </div>
              <p
                className="text-sm font-light leading-relaxed"
                style={{ color: "rgba(0,12,24,0.8)" }}
                dangerouslySetInnerHTML={{
                  __html: c.body.replace(
                    /<strong>/g,
                    '<strong style="color:#001824;font-weight:500">'
                  ),
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Waitlist CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div>
              <div
                className="font-display text-2xl lg:text-3xl mb-1"
                style={{ color: "#001824", letterSpacing: "0.04em" }}
              >
                Be the first to know.
              </div>
              <p
                className="text-sm font-light"
                style={{ color: "rgba(0,12,24,0.6)" }}
              >
                Copenhagen launch · Early 2025
              </p>
            </div>
            <a
              href="mailto:hello@blunt.co?subject=BLUNT Waitlist"
              className="flex-shrink-0 font-display text-sm tracking-[0.15em] px-8 py-4 transition-all duration-200"
              style={{
                background: "#001824",
                color: "#00C2FF",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#060A10";
                e.currentTarget.style.color = "#7EFFD4";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#001824";
                e.currentTarget.style.color = "#00C2FF";
              }}
            >
              Join the Waitlist →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
