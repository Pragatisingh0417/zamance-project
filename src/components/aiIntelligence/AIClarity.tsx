"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export function AIClarity() {
  const pillars = [
    {
      title: "AI-Powered Decisioning",
      desc: "AI-driven insights embedded directly into operational workflows to support faster, more accurate executive .",
    },
    {
      title: "Operational Automation",
      desc: "Structured automation of repeatable processes using AI-enhanced systems  improve consistency.",
    },
    {
      title: "Human-Centered Design",
      desc: "Automation designed to augment teams while preserving oversight, accountability, and critical institutional knowledge.",
    },
    {
      title: "Governed & Explainable AI",
      desc: "Transparent, compliant AI models aligned with governance standards, risk controls, and regulatory expectations.",
    },
  ];

  // ✅ Properly typed container variant
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // ✅ Properly typed item variant (ease FIXED)
  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1], // ✅ Type-safe easing
      },
    },
  };

  return (
    <section className="relative bg-[#F8FAFC] py-28 overflow-hidden">
      {/* Background blur accents */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#1FA45B]/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#1E3A8A]/10 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-20 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
            Intelligent Automation
          </p>

          <h2 className="mt-6 text-4xl font-bold text-[#1E3A8A] leading-tight">
            What Intelligent Automation
            <br /> Means at Zamance
          </h2>

          <p className="mt-6 text-lg text-black/70 leading-relaxed max-w-xl">
            We approach AI and automation as strategic capability not isolated
            tools. Our focus is embedding intelligence into operations while
            maintaining governance, transparency, and human oversight.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 bg-[#1FA45B] text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-[#188A4C]"
          >
            Explore Our Approach →
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE TIMELINE */}
        <div className="relative">
          {/* Animated Vertical Line (ease FIXED) */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }} // ✅ FIXED
            viewport={{ once: true }}
            className="origin-top absolute left-6 top-0 bottom-0 w-[2px] h-92  bg-[#1E3A8A]/20"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {pillars.map((itemData, index) => (
              <motion.div
                key={itemData.title}
                variants={item}
                whileHover={{ x: 8 }}
                className="group relative pl-16 transition-all duration-300"
              >
                {/* Circle */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="absolute left-0  w-12 h-12 flex items-center justify-center 
                             rounded-full bg-[#1FA45B] text-white font-bold shadow-md 
                             transition-all duration-300 
                             group-hover:shadow-xl group-hover:shadow-[#1FA45B]/30"
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[#1E3A8A] transition-colors duration-300 group-hover:text-[#1FA45B]">
                  {itemData.title}
                </h3>

                <p className=" text-black/70 text-sm leading-relaxed max-w-md transition-opacity duration-300 group-hover:opacity-90">
                  {itemData.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}