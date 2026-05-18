"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    num: "A",
    label: "The Angle",
    body: 'Own "creatine for people who don\'t take supplements." Not gym. Not sport. The cognitive / afternoon energy angle sidesteps the bodybuilder association entirely.',
  },
  {
    num: "B",
    label: "First 30 Days",
    body: "Lock CreaBev® with exclusivity. Design the can before you make the can — the visual identity IS the product validation. Waitlist: Copenhagen padel clubs and cycling communities.",
  },
  {
    num: "C",
    label: "Playbook",
    body: "Momentous — US brand that crossed from elite sport into mainstream. Athletic Brewing for cultural proof. Their DTC-to-retail sequencing is your roadmap.",
  },
  {
    num: "D",
    label: "Bottom Line",
    body: "The risk isn't the idea — it's execution speed and staying funded through the 18-month powder → can transition. If the can looks as good as Olipop and community is tight before retail, this is a real brand.",
  },
];

export default function Recommendation() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const goX = useTransform(scrollYProgress, [0, 0.4], ["-8%", "0%"]);

  return (
    <section ref={ref} id="recommendation" className="overflow-hidden" style={{ background: "#00C2FF" }}>

      {/* GO — full-bleed */}
      <div className="relative overflow-hidden" style={{ borderBottom:"2px solid rgba(0,12,24,0.15)" }}>
        <motion.div
          className="font-display leading-[0.82] select-none"
          style={{
            fontSize: "clamp(10rem, 35vw, 28rem)",
            color: "rgba(0,12,24,0.9)",
            letterSpacing: "-0.02em",
            x: goX,
            paddingLeft: "0.1em",
          }}
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once:true }}
          transition={{ duration:1, ease:[0.22,1,0.36,1] }}
        >
          GO
        </motion.div>

        {/* Verdict tag */}
        <motion.div
          className="absolute bottom-8 right-6 lg:right-10 text-right"
          initial={{ opacity:0, x:20 }}
          whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.7, delay:0.4 }}
        >
          <div className="font-display text-xs tracking-[0.3em] mb-1" style={{ color:"rgba(0,12,24,0.45)" }}>07 — Recommendation</div>
          <div className="font-display" style={{ fontSize:"clamp(1.5rem,4vw,3rem)", color:"rgba(0,12,24,0.85)", letterSpacing:"0.04em" }}>
            Copenhagen First.
          </div>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="px-6 lg:px-10 pt-12 pb-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background:"rgba(0,12,24,0.18)" }}>
          {cards.map((c, i) => (
            <motion.div
              key={c.num}
              className="p-8"
              style={{ background:"rgba(0,12,24,0.08)" }}
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.5, delay:i*0.07, ease:[0.22,1,0.36,1] }}
              onMouseEnter={e => (e.currentTarget.style.background="rgba(0,12,24,0.18)")}
              onMouseLeave={e => (e.currentTarget.style.background="rgba(0,12,24,0.08)")}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-display text-xs" style={{ color:"rgba(0,12,24,0.4)" }}>{c.num}</span>
                <span className="font-display text-xs tracking-[0.2em]" style={{ color:"rgba(0,12,24,0.5)" }}>{c.label}</span>
              </div>
              <p className="text-sm font-light leading-relaxed" style={{ color:"rgba(0,12,24,0.75)" }}>{c.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Waitlist CTA */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-8"
          style={{ borderTop:"1px solid rgba(0,12,24,0.2)" }}
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once:true }}
          transition={{ duration:0.6, delay:0.3 }}
        >
          <div>
            <div className="font-display" style={{ fontSize:"clamp(1.5rem,4vw,2.5rem)", color:"rgba(0,12,24,0.88)", letterSpacing:"0.02em" }}>
              Be first in Europe.
            </div>
            <p className="text-sm font-light mt-1" style={{ color:"rgba(0,12,24,0.5)" }}>Copenhagen launch · 2026</p>
          </div>
          <a
            href="mailto:hello@blunt.co?subject=BLUNT Waitlist"
            data-cursor
            className="flex-shrink-0 font-display text-sm tracking-[0.15em] px-8 py-4 transition-all duration-200"
            style={{ background:"rgba(0,12,24,0.88)", color:"#00C2FF" }}
            onMouseEnter={e => { e.currentTarget.style.background="#060A10"; e.currentTarget.style.color="#7EFFD4"; }}
            onMouseLeave={e => { e.currentTarget.style.background="rgba(0,12,24,0.88)"; e.currentTarget.style.color="#00C2FF"; }}
          >
            Join the Waitlist →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
