"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="px-6 lg:px-10 py-12" style={{ background:"var(--ink)", borderTop:"1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

        <motion.div
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
        >
          <div className="font-display text-2xl tracking-[0.14em] mb-1" style={{ color:"rgba(232,240,245,0.2)" }}>
            BLUNT<span style={{ color:"#00C2FF" }}>.</span>
          </div>
          <p className="text-xs font-light" style={{ color:"rgba(232,240,245,0.2)" }}>
            Market Opportunity Analysis — Confidential
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-6"
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once:true }}
          transition={{ duration:0.6, delay:0.1 }}
        >
          {["#market","#competition","#scores","#monetization","#recommendation"].map(href => (
            <a
              key={href}
              href={href}
              data-cursor
              className="font-display text-xs tracking-[0.2em] transition-colors duration-150"
              style={{ color:"rgba(232,240,245,0.2)" }}
              onMouseEnter={e => (e.currentTarget.style.color="rgba(232,240,245,0.55)")}
              onMouseLeave={e => (e.currentTarget.style.color="rgba(232,240,245,0.2)")}
            >
              {href.replace("#","").toUpperCase()}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
