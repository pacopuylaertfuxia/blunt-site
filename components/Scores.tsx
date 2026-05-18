"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const dims = [
  { label: "Market Size",        weight: 25, score: 8, color: "#7EFFD4" },
  { label: "Organic Growth",     weight: 25, score: 7, color: "#00C2FF" },
  { label: "Monetization",       weight: 20, score: 8, color: "#7EFFD4" },
  { label: "Virality",           weight: 20, score: 8, color: "#00C2FF" },
  { label: "Competition Gap",    weight: 10, score: 9, color: "#7EFFD4" },
];

const N = dims.length;
const CX = 220, CY = 220, R = 160;
const levels = [0.2, 0.4, 0.6, 0.8, 1];

function angle(i: number) { return -Math.PI / 2 + (i * 2 * Math.PI) / N; }
function pt(i: number, r: number) {
  const a = angle(i);
  return [CX + r * Math.cos(a), CY + r * Math.sin(a)] as [number, number];
}
function polygon(scores: number[]) {
  return scores.map((s, i) => pt(i, (s / 10) * R).join(",")).join(" ");
}

function RadarChart() {
  const ref = useRef<SVGPolygonElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <svg viewBox={`0 0 440 440`} className="w-full max-w-[440px] mx-auto">
      {/* Web levels */}
      {levels.map(l => (
        <polygon
          key={l}
          points={dims.map((_,i) => pt(i, R*l).join(",")).join(" ")}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      ))}

      {/* Axis lines */}
      {dims.map((_, i) => {
        const [x2, y2] = pt(i, R);
        return <line key={i} x1={CX} y1={CY} x2={x2} y2={y2} stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>;
      })}

      {/* Score polygon */}
      <motion.polygon
        ref={ref}
        points={inView ? polygon(dims.map(d => d.score)) : polygon(dims.map(() => 0))}
        fill="rgba(0,194,255,0.12)"
        stroke="#00C2FF"
        strokeWidth="1.5"
        animate={{ points: inView ? polygon(dims.map(d => d.score)) : polygon(dims.map(() => 0)) }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Dots at each vertex */}
      {dims.map((d, i) => {
        const [x, y] = pt(i, (d.score / 10) * R);
        return (
          <motion.circle
            key={i} cx={x} cy={y} r={5}
            fill={d.color}
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.4, delay: 1 + i * 0.08, type: "spring" }}
            style={{ transformOrigin: `${x}px ${y}px` }}
          />
        );
      })}

      {/* Labels */}
      {dims.map((d, i) => {
        const [x, y] = pt(i, R + 30);
        const anchor = x < CX - 5 ? "end" : x > CX + 5 ? "start" : "middle";
        return (
          <g key={i}>
            <text x={x} y={y - 6} textAnchor={anchor}
              fill="rgba(232,240,245,0.5)"
              fontFamily="var(--font-display),Bebas Neue,sans-serif"
              fontSize="11" letterSpacing="1.5"
            >{d.label}</text>
            <text x={x} y={y + 10} textAnchor={anchor}
              fill={d.color}
              fontFamily="var(--font-display),Bebas Neue,sans-serif"
              fontSize="18"
            >{d.score}/10</text>
          </g>
        );
      })}

      {/* Center score */}
      <text x={CX} y={CY + 8} textAnchor="middle"
        fill="#7EFFD4"
        fontFamily="var(--font-display),Bebas Neue,sans-serif"
        fontSize="28"
      >7.8</text>
    </svg>
  );
}

export default function Scores() {
  return (
    <section id="scores" className="py-24 px-6 lg:px-10" style={{ background: "var(--bg2)" }}>
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px" style={{ background:"#00C2FF" }}/>
            <span className="font-display text-[0.7rem] tracking-[0.3em]" style={{ color:"#00C2FF" }}>03 — Dimension Scores</span>
          </div>
          <h2 className="font-display leading-[0.9] mb-4" style={{ fontSize:"clamp(3rem,7vw,6rem)", color:"#E8F0F5" }}>
            Five Dimensions.<br />One Score.
          </h2>
          <p className="mb-14 font-light max-w-md" style={{ fontSize:"0.9rem", color:"var(--c60)", lineHeight:1.7 }}>
            Weighted composite methodology. Each dimension scored 1–10. Final: <strong style={{ color:"#7EFFD4" }}>7.8/10</strong>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Radar */}
          <motion.div
            initial={{ opacity:0, scale:0.9 }}
            whileInView={{ opacity:1, scale:1 }}
            viewport={{ once:true, margin:"-60px" }}
            transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
            style={{ border:"1px solid var(--border)", padding:"2rem", background:"var(--bg)" }}
          >
            <RadarChart />
          </motion.div>

          {/* Breakdown table */}
          <div>
            {dims.map((d, i) => (
              <motion.div
                key={d.label}
                className="grid items-center py-5"
                style={{
                  gridTemplateColumns:"1fr auto auto",
                  gap:"1rem",
                  borderBottom:"1px solid var(--border)",
                }}
                initial={{ opacity:0, x:24 }}
                whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }}
                transition={{ duration:0.5, delay:i*0.07, ease:[0.22,1,0.36,1] }}
              >
                <div>
                  <div className="font-display text-[0.65rem] tracking-[0.2em] mb-1" style={{ color:"var(--c30)" }}>{d.weight}% WEIGHT</div>
                  <div className="text-sm font-light" style={{ color:"var(--c60)" }}>{d.label}</div>
                </div>
                {/* Bar */}
                <div className="w-20 h-px" style={{ background:"var(--border2)", position:"relative" }}>
                  <motion.div
                    className="absolute top-0 left-0 h-full"
                    style={{ background: d.color }}
                    initial={{ width:0 }}
                    whileInView={{ width:`${d.score*10}%` }}
                    viewport={{ once:true }}
                    transition={{ duration:0.9, delay:i*0.07+0.3, ease:[0.22,1,0.36,1] }}
                  />
                </div>
                <div className="font-display text-2xl" style={{ color:d.color }}>{d.score}</div>
              </motion.div>
            ))}

            {/* Total */}
            <motion.div
              className="flex items-center justify-between pt-6"
              initial={{ opacity:0 }}
              whileInView={{ opacity:1 }}
              viewport={{ once:true }}
              transition={{ duration:0.6, delay:0.5 }}
            >
              <span className="font-display text-xs tracking-[0.2em]" style={{ color:"var(--c30)" }}>WEIGHTED COMPOSITE</span>
              <span className="font-display text-4xl" style={{ color:"#7EFFD4" }}>7.8</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
