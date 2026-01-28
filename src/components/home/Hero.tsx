"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
  "Data Analysis",
  "Digital Technology",
  "AI Automations",
  "Engineering Consultancy",
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

 useEffect(() => {
  const currentText = texts[textIndex];

  const speed = isDeleting ? 50 : 80;

  const timeout = setTimeout(() => {
    if (!isDeleting) {
      setDisplayText(currentText.slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);

      if (charIndex + 1 === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      }
    } else {
      setDisplayText(currentText.slice(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);

      if (charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, speed);

  return () => clearTimeout(timeout);
}, [charIndex, isDeleting, textIndex]);


  return (
    <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1FA45B] text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Zamance – Global Consulting & Intelligent Solutions
          </h1>

          <p className="text-2xl md:text-xl text-white/90 mb-10">
            Consulting and solutions firm specializing in{" "}
            <span className="font-semibold  text-white">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/contact"
              className="rounded-full bg-white px-8 py-3 text-[#1E3A8A] font-semibold hover:bg-white/90 transition"
            >
              Talk to Experts
            </a>

            <a
              href="/services"
              className="rounded-full border border-white px-8 py-3 font-semibold hover:bg-white hover:text-[#1E3A8A] transition"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
