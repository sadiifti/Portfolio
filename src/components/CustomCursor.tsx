"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 24, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only activate custom cursor on non-touch (pointer: fine) devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, input, textarea, select, [role='button'], .cursor-pointer, .cursor-zoom-in");
      setIsHovered(!!interactive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleElementHover);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Outer Smooth Follower Ring / AI Reticle Target */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.7 : 1,
          borderColor: isHovered ? "rgba(52, 211, 153, 0.85)" : "rgba(56, 189, 248, 0.55)",
          backgroundColor: isHovered ? "rgba(56, 189, 248, 0.08)" : "transparent",
        }}
        transition={{ duration: 0.18 }}
        className="h-8 w-8 rounded-full border border-cyan-400/60 shadow-[0_0_15px_rgba(56,189,248,0.35)] relative flex items-center justify-center"
      >
        {/* Micro reticle corner ticks */}
        <span className="absolute -top-1 w-1.5 h-0.5 bg-cyan-400/80 rounded" />
        <span className="absolute -bottom-1 w-1.5 h-0.5 bg-cyan-400/80 rounded" />
        <span className="absolute -left-1 w-0.5 h-1.5 bg-cyan-400/80 rounded" />
        <span className="absolute -right-1 w-0.5 h-1.5 bg-cyan-400/80 rounded" />
      </motion.div>

      {/* Center Precision Target Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.6 : 1,
          backgroundColor: isHovered ? "#34d399" : "#38bdf8",
        }}
        transition={{ duration: 0.12 }}
        className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.9)]"
      />
    </div>
  );
}
