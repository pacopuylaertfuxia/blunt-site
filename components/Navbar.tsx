"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Market", href: "#market" },
  { label: "Competition", href: "#competition" },
  { label: "Scores", href: "#scores" },
  { label: "Monetization", href: "#monetization" },
  { label: "Verdict", href: "#recommendation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 40));
    return unsub;
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 h-16"
      style={{
        background: scrolled
          ? "rgba(6,10,16,0.92)"
          : "rgba(6,10,16,0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      {/* Logo */}
      <a href="#" className="font-display text-2xl tracking-[0.12em]" style={{ color: "#E8F0F5" }}>
        BLUNT<span style={{ color: "#00C2FF" }}>.</span>
      </a>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-display text-xs tracking-[0.2em] transition-colors duration-200"
            style={{ color: "rgba(232,240,245,0.45)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#E8F0F5")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(232,240,245,0.45)")
            }
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Verdict pill */}
      <div className="hidden lg:flex items-center gap-4">
        <div
          className="font-display text-xs tracking-[0.15em] px-3 py-1.5"
          style={{
            color: "#00C2FF",
            background: "rgba(0,194,255,0.08)",
            border: "1px solid rgba(0,194,255,0.22)",
          }}
        >
          GO WITH ANGLE
        </div>
        <a
          href="#recommendation"
          className="font-display text-xs tracking-[0.15em] px-4 py-2 transition-all duration-200"
          style={{
            background: "#00C2FF",
            color: "#060A10",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "#7EFFD4")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "#00C2FF")
          }
        >
          Join Waitlist
        </a>
      </div>

      {/* Mobile menu toggle */}
      <button
        className="lg:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="w-6 h-px block"
          style={{ background: "#E8F0F5" }}
        />
        <motion.span
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-6 h-px block"
          style={{ background: "#E8F0F5" }}
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="w-6 h-px block"
          style={{ background: "#E8F0F5" }}
        />
      </button>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="lg:hidden absolute top-16 left-0 right-0 overflow-hidden"
        style={{
          background: "rgba(6,10,16,0.98)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm tracking-[0.2em] py-2"
              style={{ color: "rgba(232,240,245,0.6)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#recommendation"
            className="font-display text-sm tracking-[0.15em] px-4 py-3 text-center mt-2"
            style={{ background: "#00C2FF", color: "#060A10" }}
            onClick={() => setMenuOpen(false)}
          >
            Join Waitlist
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
