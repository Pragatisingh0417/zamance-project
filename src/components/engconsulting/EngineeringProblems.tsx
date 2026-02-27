"use client";

import { motion } from "framer-motion";

export function EngineeringProblems() {
  const problems = [
    {
      title: "Systems production load",
      desc: "Architectures that appear stable in testing but collapse under real operational stress and scale.",
    },
    {
      title: "Performance bottlenecks",
      desc: "Hidden constraints that silently degrade mission-critical workflows and business velocity.",
    },
    {
      title: " complexity Frequent downtime",
      desc: "Unstable releases and fragile deployments that erode trust and operational continuity.",
    },
    {
      title: "Uncontrolled technical complexity",
      desc: "Accumulated architectural debt that compounds risk and reduces long-term agility.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-900 to-teal-800 text-white py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Engineering Challenges
            <br />
            That Quietly Break Systems
          </h2>
        </div>

        {/* Horizontal Line */}
        <div className="relative mb-16">

          {/* Animated Base Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="origin-left absolute top-6 left-0 right-0 h-[2px] bg-white/20"
          />

          {/* Nodes */}
          <div className="relative flex justify-between">
            {problems.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div className="h-12 w-12 rounded-full bg-emerald-500 
                                flex items-center justify-center 
                                font-semibold text-white
                                shadow-lg
                                transition-all duration-300
                                group-hover:shadow-[0_0_25px_rgba(16,185,129,0.6)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {problems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl 
                         border border-white/10 
                         transition-all duration-500
                         hover:border-emerald-400/40"
            >
              <h3 className="text-lg font-semibold mb-4 
                             group-hover:text-emerald-300 
                             transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-white/70 leading-relaxed text-sm">
                {item.desc}
              </p>

              <div className="mt-6 h-[2px] w-10 bg-emerald-500 
                              transition-all duration-500 
                              group-hover:w-16" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}