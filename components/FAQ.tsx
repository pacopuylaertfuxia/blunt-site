"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const risks = [
  {
    num: "01",
    title: "CreaBev® Supplier Dependency",
    body: "You're reliant on a single encapsulation technology supplier. If they can't scale or pricing increases, the core product differentiator is threatened.",
    fix: "Validate alternatives early. Negotiate exclusivity before the launch confirms demand.",
  },
  {
    num: "02",
    title: "18-Month Copycat Window",
    body: "If BLUNT validates the market with a DTC launch, a Nocco, Huel, or Redbull-backed competitor can launch a me-too with 10× the budget. Speed and brand equity are your only moat.",
    fix: "Move fast. Build community before retail. Make brand equity defensible.",
  },
  {
    num: "03",
    title: "Retail Timeline Slippage",
    body: "Independent health stores (Ekoplaza, etc.) have long lead times and listing fees. Phase 3 likely slips to 24–30 months realistically.",
    fix: "Plan cash for a longer powder-first runway. Don't underestimate retail gatekeeping.",
  },
];

function RiskItem({ r, i }: { r: typeof risks[0]; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      style={{ borderBottom: "1px solid var(--border)" }}
      initial={{ opacity:0, y:16 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ duration:0.5, delay:i*0.09, ease:[0.22,1,0.36,1] }}
    >
      <button
        className="w-full text-left py-7 px-0 grid items-center gap-6"
        style={{ gridTemplateColumns:"auto 1fr auto", cursor:"none" }}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        data-cursor
      >
        <span className="font-display leading-none" style={{ fontSize:"clamp(2rem,4vw,3.5rem)", color:"#00C2FF", opacity:0.3 }}>{r.num}</span>
        <span className="font-display tracking-[0.04em]" style={{ fontSize:"clamp(1.1rem,2.5vw,1.6rem)", color:"#E8F0F5" }}>{r.title}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="font-display text-2xl"
          style={{ color:"var(--c30)" }}
        >+</motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height:0, opacity:0 }}
            animate={{ height:"auto", opacity:1 }}
            exit={{ height:0, opacity:0 }}
            transition={{ duration:0.32, ease:[0.22,1,0.36,1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 pl-16 pr-4">
              <p className="text-sm font-light mb-4" style={{ color:"var(--c60)", lineHeight:1.8 }}>{r.body}</p>
              <div className="flex items-start gap-2 text-xs font-light" style={{ color:"#00C2FF" }}>
                <span className="font-display mt-0.5">→</span>
                <span>{r.fix}</span>
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
    <section id="risks" className="py-24 px-6 lg:px-10" style={{ background: "var(--bg2)" }}>
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px" style={{ background:"#00C2FF" }}/>
            <span className="font-display text-[0.7rem] tracking-[0.3em]" style={{ color:"#00C2FF" }}>06 — Risk Factors</span>
          </div>
          <h2 className="font-display leading-[0.9] mb-4" style={{ fontSize:"clamp(3rem,7vw,6rem)", color:"#E8F0F5" }}>
            Know the<br />Risks.
          </h2>
          <p className="mb-12 font-light max-w-md" style={{ fontSize:"0.9rem", color:"var(--c60)", lineHeight:1.7 }}>
            The idea is sound. The risk isn't the concept — it's execution speed and staying funded through the 18-month transition.
          </p>
        </motion.div>

        <div style={{ borderTop:"1px solid var(--border)" }}>
          {risks.map((r,i) => <RiskItem key={r.num} r={r} i={i}/>)}
        </div>
      </div>
    </section>
  );
}
