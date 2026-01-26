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

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        // Deleting
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return ( 
    // bg-gradient-to-br from-[#1E3A8A] to-[#1FA45B]
    <section className="bg- white text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl md:text-5xl text-[#1E3A8A] font-bold leading-tight mb-6">
            Zamance – Global Consulting & Intelligent Solutions
          </h1>

          <p className="text-2xl md:text-xl text-black/90 mb-10">
            Consulting and solutions firm specializing in{" "}
            <span className="font-semibold   text-[#048D59]">
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
              className="rounded-full text-white px-8 py-3 bg-[#1E3A8A] font-semibold hover:bg-[#1E3A8A]/90 transition"
            >
              Talk to Experts
            </a>

            <a
              href="/services"
              className="rounded-full border border-[#1E3A8A] text-[#1E3A8A]  px-8 py-3 font-semibold hover:bg-[#1E3A8A] hover:text-white hover:text-[#1E3A8A] transition"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
