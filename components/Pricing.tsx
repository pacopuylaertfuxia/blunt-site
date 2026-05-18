"use client";
import { motion } from "framer-motion";

const metrics = [
  { label: "DTC Gross Margin",          value: "55–60%",  note: "COGS ~€1.20–1.60/can at scale. Retail price €3.50–4.50.", accent: "#7EFFD4" },
  { label: "Subscription LTV",          value: "€400–600",note: "€40–50/month box, 12-month retention. Powder phase.", accent: "#00C2FF" },
  { label: "ARR at 10K Subscribers",    value: "€400–500K",note: "Annual recurring revenue before retail kicks in.", accent: "#7EFFD4" },
  { label: "Sponsorship Fit",           value: "Strong",  note: "On Running, Lululemon, Whoop. Padel + cycling events.", accent: "#00C2FF" },
];

export default function Pricing() {
  return (
    <section id="monetization" className="py-24 px-6 lg:px-10" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px" style={{ background:"#00C2FF" }}/>
            <span className="font-display text-[0.7rem] tracking-[0.3em]" style={{ color:"#00C2FF" }}>05 — Monetization</span>
          </div>
          <h2 className="font-display leading-[0.9] mb-4" style={{ fontSize:"clamp(3rem,7vw,6rem)", color:"#E8F0F5" }}>
            Unit Economics<br />That Work.
          </h2>
          <p className="mb-14 font-light max-w-md" style={{ fontSize:"0.9rem", color:"var(--c60)", lineHeight:1.7 }}>
            DTC-to-retail sequencing with a subscription layer creates defensible LTV from day one.
          </p>
        </motion.div>

        {/* Hero number */}
        <motion.div
          className="py-16 flex flex-col items-center text-center mb-2"
          style={{ border:"1px solid var(--border)", background:"var(--bg2)" }}
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
        >
          <div className="font-display text-xs tracking-[0.3em] mb-4" style={{ color:"var(--c30)" }}>ANNUAL RECURRING REVENUE — 10K SUBSCRIBERS</div>
          <div className="font-display leading-none mb-4" style={{ fontSize:"clamp(4rem,12vw,9rem)", color:"#7EFFD4", textShadow:"0 0 80px rgba(126,255,212,0.25)" }}>
            €400–500K
          </div>
          <div className="font-display text-sm tracking-[0.15em]" style={{ color:"var(--c30)" }}>Before retail kicks in · Breakeven ~3–5K subs</div>
        </motion.div>

        {/* Supporting metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px" style={{ background:"var(--border)" }}>
          {metrics.slice(0,3).map((m, i) => (
            <motion.div
              key={m.label}
              className="p-8"
              style={{ background:"var(--bg2)" }}
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.55, delay:i*0.07, ease:[0.22,1,0.36,1] }}
              onMouseEnter={e => (e.currentTarget.style.background="var(--bg3)")}
              onMouseLeave={e => (e.currentTarget.style.background="var(--bg2)")}
            >
              <div className="font-display text-[0.65rem] tracking-[0.2em] mb-3" style={{ color:"var(--c30)" }}>{m.label}</div>
              <div className="font-display leading-none mb-3" style={{ fontSize:"clamp(1.6rem,3vw,2.2rem)", color:m.accent }}>{m.value}</div>
              <p className="text-xs font-light" style={{ color:"var(--c60)", lineHeight:1.7 }}>{m.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
