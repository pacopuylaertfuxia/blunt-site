"use client";
import { motion } from "framer-motion";

const factors = [
  { label: "Word of Mouth",  score: 9, color: "#08080C", bg: "#00C2FF",  note: "Padel clubs, CrossFit, cycling — tight networks. One person brings it, it spreads." },
  { label: "Hook Strength",  score: 8, color: "#08080C", bg: "#7EFFD4",  note: '"Creatine in a can" is a single-sentence pitch anyone instantly gets.' },
  { label: "Algorithm Fit",  score: 7, color: "#E8F0F5", bg: "#0C1219",  note: "Lifestyle + wellness is a top IG / TikTok category. High organic ceiling." },
  { label: "Shareability",   score: 7, color: "#E8F0F5", bg: "#131B25",  note: "Design-literate audience shares aesthetically pleasing products." },
  { label: "Save / Rewatch", score: 5, color: "#E8F0F5", bg: "#060A10",  note: 'Educational "why creatine?" content saves well across platforms.' },
];

export default function Virality() {
  return (
    <section id="virality" style={{ background: "var(--warm)" }}>
      <div className="px-6 lg:px-10 pt-20 pb-10 max-w-6xl mx-auto">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px" style={{ background:"rgba(0,12,24,0.4)" }}/>
            <span className="font-display text-[0.7rem] tracking-[0.3em]" style={{ color:"rgba(0,12,24,0.45)" }}>04 — Virality Factors</span>
          </div>
          <h2 className="font-display leading-[0.9] mb-12" style={{ fontSize:"clamp(3rem,7vw,6rem)", color:"#08080C" }}>
            Built to<br />Spread.
          </h2>
        </motion.div>
      </div>

      {/* Full-width bars */}
      <div>
        {factors.map((f, i) => (
          <motion.div
            key={f.label}
            className="relative overflow-hidden"
            style={{ background: f.bg, borderTop: "1px solid rgba(255,255,255,0.06)" }}
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            viewport={{ once:true, margin:"-30px" }}
            transition={{ duration:0.5, delay:i*0.07 }}
          >
            {/* Progress fill */}
            <motion.div
              className="absolute left-0 top-0 bottom-0"
              style={{ background: "rgba(255,255,255,0.04)" }}
              initial={{ width:0 }}
              whileInView={{ width:`${f.score*10}%` }}
              viewport={{ once:true }}
              transition={{ duration:1.1, delay:i*0.07+0.2, ease:[0.22,1,0.36,1] }}
            />

            <div className="relative grid items-center px-6 lg:px-10 py-6"
              style={{ gridTemplateColumns:"auto 1fr auto", gap:"1.5rem" }}>
              <span className="font-display leading-none" style={{ fontSize:"clamp(2.5rem,5vw,4rem)", color:f.color, opacity:0.9 }}>
                {f.score}
              </span>
              <div>
                <div className="font-display text-xs tracking-[0.2em] mb-1" style={{ color:f.score>=8 ? f.color : "rgba(232,240,245,0.35)", opacity: f.bg === "#0C1219" || f.bg === "#131B25" || f.bg === "#060A10" ? 1 : 0.5 }}>
                  {f.label}
                </div>
                <p className="text-sm font-light" style={{ color: f.color === "#08080C" ? "rgba(8,8,12,0.6)" : "var(--c60)", lineHeight:1.6, maxWidth:480 }}>
                  {f.note}
                </p>
              </div>
              <span className="font-display text-xs tracking-[0.15em] hidden md:block" style={{ color: f.color === "#08080C" ? "rgba(8,8,12,0.3)" : "var(--c30)" }}>
                /10
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
