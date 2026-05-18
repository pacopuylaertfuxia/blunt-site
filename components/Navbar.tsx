"use client";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => scrollY.on("change", v => setScrolled(v > 60)), [scrollY]);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10"
      style={{
        height: 56,
        background: scrolled ? "rgba(6,10,16,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "background 0.4s, border-color 0.4s",
      }}
    >
      <a href="#" className="font-display text-xl tracking-[0.14em]" style={{ color: "#E8F0F5" }}>
        BLUNT<span style={{ color: "#00C2FF" }}>.</span>
      </a>

      <div className="flex items-center gap-5">
        <div className="hidden sm:flex items-center gap-1 px-3 py-1" style={{ border: "1px solid rgba(0,194,255,0.22)", background: "rgba(0,194,255,0.06)" }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00C2FF" }} />
          <span className="font-display text-[0.65rem] tracking-[0.2em]" style={{ color: "#00C2FF" }}>GO WITH ANGLE</span>
        </div>
        <a
          href="#recommendation"
          data-cursor
          className="font-display text-xs tracking-[0.15em] px-4 py-2 hidden sm:block"
          style={{ background: "#00C2FF", color: "#060A10" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#7EFFD4")}
          onMouseLeave={e => (e.currentTarget.style.background = "#00C2FF")}
        >
          Join Waitlist
        </a>
      </div>
    </motion.nav>
  );
}
