"use client";
import { motion } from "framer-motion";

// X: Lifestyle/Premium positioning (0=gym bro, 10=premium lifestyle)
// Y: Creatine inclusion    (0=none, 10=core creatine)
const brands = [
  { name: "Nocco",           x: 4.2, y: 0.8, note: "RTD, BCAA/caffeine, gym-coded" },
  { name: "Huel",            x: 6.5, y: 1.5, note: "Meal replacement, D2C strong" },
  { name: "Athletic Brewing",x: 9.2, y: 0,   note: "Premium lifestyle, no creatine" },
  { name: "Olipop",          x: 8.5, y: 0,   note: "Gut health, same aesthetic" },
  { name: "Momentous",       x: 3.2, y: 8.8, note: "High creatine, no EU RTD" },
  { name: "Gainful",         x: 2.5, y: 7.2, note: "Creatine powder, US only" },
];
const blunt = { name: "BLUNT", x: 8.8, y: 9.2 };

const W = 480;
const H = 380;
const PAD = 48;

function toSVG(val: number, max: number, range: number) {
  return PAD + (val / 10) * range;
}

export default function Competition() {
  const rx = W - PAD * 2;
  const ry = H - PAD * 2;

  return (
    <section id="competition" className="py-24 px-6 lg:px-10" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px" style={{ background:"#00C2FF" }}/>
            <span className="font-display text-[0.7rem] tracking-[0.3em]" style={{ color:"#00C2FF" }}>02 — Competition Landscape</span>
          </div>
          <h2 className="font-display leading-[0.9] mb-4" style={{ fontSize:"clamp(3rem,7vw,6rem)", color:"#E8F0F5" }}>
            Nobody's<br />Here Yet.
          </h2>
          <p className="mb-12 font-light max-w-md" style={{ fontSize:"0.9rem", color:"var(--c60)", lineHeight:1.7 }}>
            Map of European functional beverage brands by lifestyle positioning vs. creatine inclusion. The upper-right quadrant is empty.
          </p>
        </motion.div>

        {/* Scatter plot */}
        <motion.div
          className="w-full"
          initial={{ opacity:0, scale:0.97 }}
          whileInView={{ opacity:1, scale:1 }}
          viewport={{ once:true, margin:"-60px" }}
          transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
        >
          <div style={{ border:"1px solid var(--border)", background:"var(--bg2)", position:"relative" }}>
            {/* Axis labels */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-display text-[0.6rem] tracking-[0.2em]" style={{ color:"var(--c30)" }}>
              ← GYM BRO · · · LIFESTYLE PREMIUM →
            </div>
            <div className="absolute left-1 top-1/2 -translate-y-1/2 font-display text-[0.6rem] tracking-[0.2em]" style={{ color:"var(--c30)", writingMode:"vertical-rl", transform:"translateY(-50%) rotate(180deg)" }}>
              ← NO CREATINE · CREATINE FOCUS →
            </div>

            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="w-full"
              style={{ maxHeight: 420 }}
            >
              {/* Grid lines */}
              {[2,4,6,8].map(v => (
                <g key={v}>
                  <line x1={toSVG(v,10,rx)} y1={PAD} x2={toSVG(v,10,rx)} y2={H-PAD}
                    stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                  <line x1={PAD} y1={H-PAD-(v/10)*ry} x2={W-PAD} y2={H-PAD-(v/10)*ry}
                    stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                </g>
              ))}

              {/* Axes */}
              <line x1={PAD} y1={PAD} x2={PAD} y2={H-PAD} stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
              <line x1={PAD} y1={H-PAD} x2={W-PAD} y2={H-PAD} stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>

              {/* THE GAP shading */}
              <rect
                x={toSVG(7,10,rx)} y={PAD}
                width={W-PAD-toSVG(7,10,rx)}
                height={H-PAD-toSVG(3,10,ry)}
                fill="rgba(0,194,255,0.04)"
                stroke="rgba(0,194,255,0.18)"
                strokeDasharray="4 3"
                strokeWidth="1"
              />
              <text x={toSVG(8.5,10,rx)} y={PAD+18} textAnchor="middle"
                fill="rgba(0,194,255,0.5)" fontFamily="var(--font-display),Bebas Neue,sans-serif"
                fontSize="11" letterSpacing="2">THE GAP</text>

              {/* Competitor dots */}
              {brands.map((b, i) => {
                const cx = toSVG(b.x,10,rx);
                const cy = H-PAD-(b.y/10)*ry;
                return (
                  <motion.g key={b.name}
                    initial={{ opacity:0, scale:0 }}
                    whileInView={{ opacity:1, scale:1 }}
                    viewport={{ once:true }}
                    transition={{ duration:0.5, delay: i*0.07+0.3, type:"spring" }}
                    style={{ transformOrigin:`${cx}px ${cy}px` }}
                  >
                    <circle cx={cx} cy={cy} r={5} fill="rgba(232,240,245,0.18)" stroke="rgba(232,240,245,0.35)" strokeWidth="1"/>
                    <text x={cx+9} y={cy+4} fill="rgba(232,240,245,0.45)"
                      fontFamily="var(--font-display),Bebas Neue,sans-serif"
                      fontSize="9.5" letterSpacing="1">{b.name}</text>
                  </motion.g>
                );
              })}

              {/* BLUNT dot — glowing */}
              {(() => {
                const cx = toSVG(blunt.x,10,rx);
                const cy = H-PAD-(blunt.y/10)*ry;
                return (
                  <motion.g
                    initial={{ opacity:0, scale:0 }}
                    whileInView={{ opacity:1, scale:1 }}
                    viewport={{ once:true }}
                    transition={{ duration:0.6, delay:0.7, type:"spring", stiffness:200 }}
                    style={{ transformOrigin:`${cx}px ${cy}px` }}
                  >
                    <circle cx={cx} cy={cy} r={16} fill="rgba(0,194,255,0.08)"/>
                    <circle cx={cx} cy={cy} r={9} fill="#00C2FF"/>
                    <circle cx={cx} cy={cy} r={5} fill="#E8F0F5"/>
                    <text x={cx+14} y={cy-6} fill="#00C2FF"
                      fontFamily="var(--font-display),Bebas Neue,sans-serif"
                      fontSize="13" letterSpacing="1.5">BLUNT</text>
                    <text x={cx+14} y={cy+8} fill="rgba(0,194,255,0.6)"
                      fontFamily="var(--font-display),Bebas Neue,sans-serif"
                      fontSize="9" letterSpacing="1">UNOCCUPIED</text>
                  </motion.g>
                );
              })()}
            </svg>
          </div>
        </motion.div>

        {/* Insight */}
        <motion.div
          className="mt-6 p-6"
          style={{ background:"rgba(0,194,255,0.05)", border:"1px solid rgba(0,194,255,0.16)" }}
          initial={{ opacity:0, y:16 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6, delay:0.2 }}
        >
          <p className="text-sm font-light" style={{ color:"var(--c60)", lineHeight:1.8 }}>
            <strong style={{ color:"#E8F0F5", fontWeight:500 }}>Saturation: Low.</strong> The "postable, desk-worthy" lifestyle positioning combined with creatine + electrolytes in a can is <strong style={{ color:"#E8F0F5", fontWeight:500 }}>genuinely unoccupied territory</strong>. No brand owns premium + creatine + European RTD simultaneously.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
