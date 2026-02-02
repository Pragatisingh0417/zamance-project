"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

export default function NewsletterCTA() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-50, 50], [8, -8]);
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const glowBackground = useTransform(
    [mouseX, mouseY],
    ([x, y]) => {
      const mx = x as number;
      const my = y as number;

      return `radial-gradient(
        600px at ${mx + 600}px ${my + 300}px,
        rgba(45,212,191,0.18),
        transparent 70%
      )`;
    }
  );

  return (
    <section className="relative py-10 overflow-hidden bg-slate-950">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-teal-800" />

      {/* Cursor-follow glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: glowBackground }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="
            relative rounded-3xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            px-8 py-14 md:px-16
            text-center text-white
            transition-shadow
            hover:shadow-[0_30px_80px_-20px_rgba(45,212,191,0.35)]
          "
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Solving Complex Data & Technology Challenges
            <br className="hidden sm:block" />
            with Measurable Impact
          </h2>

          <p className="text-white/75 mb-10">
            Subscribe to Zamance insights on data, technology, AI, and engineering.
          </p>

          {/* Form */}
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full sm:w-80
                px-5 py-3 rounded-full
                bg-white/10
                border border-white/30
                text-white placeholder-white/60
                focus:outline-none focus:ring-2 focus:ring-teal-400/40
                transition
              "
            />

            <motion.button
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                relative overflow-hidden
                rounded-full px-8 py-3 font-semibold
                bg-gradient-to-r from-teal-400 to-emerald-500
                text-slate-900
                shadow-lg
              "
            >
              <span className="relative z-10">Subscribe</span>

              {/* Shine effect */}
              <span className="absolute inset-0 bg-white/30 opacity-0 hover:opacity-100 transition-opacity" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
