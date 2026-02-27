"use client";

import { motion } from "framer-motion";

export function AICapabilities() {
  const capabilities = [
    {
      title: "AI Strategy & Value Architecture",
      desc: "We define enterprise AI roadmaps, prioritize high-impact initiatives, and align investment with measurable business value.",
    },
    {
      title: "Intelligent Process Automation",
      desc: "Structured automation frameworks combining AI, orchestration, and workflow discipline to remove friction at scale.",
    },
    {
      title: "Applied Machine Learning",
      desc: "Production-grade predictive and optimization models engineered for reliability, monitoring, and continuous improvement.",
    },
    {
      title: "Generative AI Integration",
      desc: "Secure copilots and knowledge systems embedded into enterprise workflows to enhance productivity and decision support.",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-white py-32 overflow-hidden">

      {/* Subtle floating glow */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-1/2 left-96 w-[240px] h-[240px] bg-green-300 rounded-full blur-[90px] opacity-40 pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
            Capabilities
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
            Enterprise AI Built with Discipline
          </h2>

          <p className="mt-8 text-lg text-black/70 leading-relaxed max-w-2xl mx-auto">
            We move organizations beyond experimentation — building AI systems
            that are governed, scalable, and strategically aligned.
          </p>
        </motion.div>

        {/* Matrix Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 border-t border-l border-black/10"
        >
          {capabilities.map((itemData, index) => (
            <motion.div
              key={itemData.title}
              variants={item}
              whileHover={{ y: -8 }}
              className="relative p-14 border-b border-r border-black/10 
                         group transition-all duration-500 
                         hover:bg-[#F8FAFC]"
            >
              {/* Animated corner accent */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "60px" }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 left-0 h-[3px] bg-[#1FA45B]"
              />

              {/* Subtle glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#1FA45B]/5 to-transparent" />

              <motion.h3
                whileHover={{ x: 6 }}
                className="text-2xl font-semibold text-[#0F172A] transition-colors duration-300 group-hover:text-[#1FA45B]"
              >
                {itemData.title}
              </motion.h3>

              <p className="mt-6 text-black/70 leading-relaxed max-w-md transition-opacity duration-300 group-hover:text-black/90">
                {itemData.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}