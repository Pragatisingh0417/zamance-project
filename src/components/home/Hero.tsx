"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
  "Data Analysis",
  "Digital Technology",
  "AI Automations",
  "Engineering",
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

 useEffect(() => {
  const currentText = texts[textIndex];

  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseAtEnd = 1500;

  let timeout: ReturnType<typeof setTimeout>;

  if (!isDeleting) {
    if (charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => setIsDeleting(true), pauseAtEnd);
    }
  } else {
    if (charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }
  }

  return () => clearTimeout(timeout);
}, [charIndex, isDeleting, textIndex]);


  return (
    <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1FA45B] text-white overflow-hidden">
      <div className="mx-auto min-h-[450px] md:min-h-[520px] lg:min-h-[575px] max-w-7xl px-6 py-16 sm:py-28 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
           Zamance Consulting
Turning Vision into Action
          </h1>

          {/* <p className="text-base sm:text-lg md:text-lg text-white/90 mb-6 sm:mb-8">
            We turn strategic vision into execution using data, technology, and engineering expertise that drives real business results.
          </p> */}

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-10">
            Consulting and solutions firm specializing in{" "}
            <span className="font-semibold text-white">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <a
              href="/contact"
              className="rounded-full bg-white px-6 sm:px-8 py-2 sm:py-3 text-[#1E3A8A] hover:text-white hover:bg-[#1E3A8A] font-semibold transition text-sm sm:text-base"
            >
              Talk to Experts
            </a>

            <a
              href="/services"
              className="rounded-full border border-white px-6 sm:px-8 py-2 sm:py-3 font-semibold hover:bg-white hover:text-[#1E3A8A] transition text-sm sm:text-base"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
