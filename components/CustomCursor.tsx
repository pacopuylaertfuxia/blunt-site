"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const [big, setBig] = useState(false);

  const sx = useSpring(mx, { stiffness: 600, damping: 45 });
  const sy = useSpring(my, { stiffness: 600, damping: 45 });

  useEffect(() => {
    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
    const on  = () => setBig(true);
    const off = () => setBig(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-cursor]").forEach(el => {
      el.addEventListener("mouseenter", on);
      el.addEventListener("mouseleave", off);
    });
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border"
        style={{
          x: sx, y: sy,
          translateX: "-50%", translateY: "-50%",
          borderColor: big ? "#00C2FF" : "rgba(232,240,245,0.35)",
        }}
        animate={{ width: big ? 44 : 28, height: big ? 44 : 28 }}
        transition={{ duration: 0.18 }}
      />
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: mx, y: my,
          translateX: "-50%", translateY: "-50%",
          width: 5, height: 5,
          backgroundColor: big ? "#00C2FF" : "#E8F0F5",
        }}
      />
    </>
  );
}
