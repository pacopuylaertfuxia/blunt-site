"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ padding: "6rem 2.5rem 3rem" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,194,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,194,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Ambient glows */}
      <div
        className="absolute bottom-[-10%] right-[-5%] pointer-events-none rounded-full"
        style={{
          width: "55vw",
          height: "55vw",
          background:
            "radial-gradient(circle, rgba(0,194,255,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[10%] left-[-8%] pointer-events-none rounded-full"
        style={{
          width: "35vw",
          height: "35vw",
          background:
            "radial-gradient(circle, rgba(126,255,212,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Can image — desktop */}
      <motion.div
        className="absolute right-[4vw] bottom-0 z-10 pointer-events-none select-none hidden md:block"
        initial={{ opacity: 0, x: 60, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="/blunt-can.png"
          alt="BLUNT can"
          width={480}
          height={720}
          className="w-auto object-contain"
          style={{
            height: "clamp(320px, 82vh, 720px)",
            filter:
              "drop-shadow(0 0 60px rgba(0,194,255,0.18)) drop-shadow(0 40px 80px rgba(0,0,0,0.6))",
          }}
          priority
        />
      </motion.div>

      {/* Can image — mobile (faded behind content) */}
      <motion.div
        className="absolute right-[-2vw] bottom-0 z-0 pointer-events-none select-none md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.4, delay: 0.6 }}
      >
        <Image
          src="/blunt-can.png"
          alt=""
          width={300}
          height={450}
          className="w-auto"
          style={{ height: "45vh" }}
          aria-hidden
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-[580px]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Label */}
        <motion.div
          variants={item}
          className="flex items-center gap-3 mb-4"
        >
          <span
            className="inline-block w-6 h-px"
            style={{ background: "#00C2FF" }}
          />
          <span
            className="font-display text-xs tracking-[0.25em]"
            style={{ color: "#00C2FF" }}
          >
            Market Opportunity Analysis
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={item}
          className="font-display leading-[0.88] tracking-[0.02em] mb-6"
          style={{
            fontSize: "clamp(5rem, 14vw, 10rem)",
            color: "#E8F0F5",
          }}
        >
          RTD
          <br />
          Creatine
          <br />
          <span style={{ color: "#00C2FF" }}>Europe</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="mb-10 font-light max-w-[520px]"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "rgba(232,240,245,0.6)",
          }}
        >
          Creatine + electrolytes in a can — targeting active Europeans who
          don't identify as gym culture but live performance-oriented lives.
        </motion.p>

        {/* Score display */}
        <motion.div
          variants={item}
          className="flex items-end gap-8 flex-wrap mb-10"
        >
          <div
            className="font-display leading-none"
            style={{
              fontSize: "clamp(4.5rem, 12vw, 7.5rem)",
              color: "#7EFFD4",
              textShadow: "0 0 60px rgba(126,255,212,0.35)",
            }}
          >
            7.8
            <sub
              className="font-display"
              style={{
                fontSize: "2.2rem",
                color: "rgba(232,240,245,0.3)",
                verticalAlign: "baseline",
              }}
            >
              /10
            </sub>
          </div>
          <div className="pb-3">
            <div
              className="font-display text-xs tracking-[0.2em] mb-1"
              style={{ color: "rgba(232,240,245,0.3)" }}
            >
              Opportunity Verdict
            </div>
            <div
              className="font-display text-2xl lg:text-3xl tracking-[0.06em]"
              style={{ color: "#00C2FF" }}
            >
              Strong → Go
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={item} className="flex gap-4 flex-wrap">
          <a
            href="#market"
            className="group inline-flex items-center gap-2 px-6 py-3 font-display text-sm tracking-[0.15em] transition-all duration-200"
            style={{ background: "#00C2FF", color: "#060A10" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#7EFFD4")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#00C2FF")
            }
          >
            View Full Analysis
            <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
              ↓
            </span>
          </a>
          <a
            href="#recommendation"
            className="inline-flex items-center gap-2 px-6 py-3 font-display text-sm tracking-[0.15em] transition-all duration-200"
            style={{
              border: "1px solid rgba(0,194,255,0.3)",
              color: "#00C2FF",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,194,255,0.6)";
              e.currentTarget.style.background = "rgba(0,194,255,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,194,255,0.3)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Join Waitlist
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2"
        aria-hidden
      >
        <span
          className="font-display text-[0.65rem] tracking-[0.25em]"
          style={{
            color: "rgba(232,240,245,0.25)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <span
          className="w-px h-10 block"
          style={{ background: "rgba(255,255,255,0.11)" }}
        />
      </div>
    </section>
  );
}
