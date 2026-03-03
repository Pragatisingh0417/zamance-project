"use client";

import { motion } from "framer-motion";

export function EngineeringProblems() {
  const problems = [
    {
      step: "01",
      title: "Systems under production load",
      desc: "Architectures that appear stable in testing but collapse under real operational stress and scale.",
    },
    {
      step: "02",
      title: "Performance bottlenecks",
      desc: "Hidden constraints that silently degrade mission-critical workflows and business velocity.",
    },
    {
      step: "03",
      title: "Frequent downtime",
      desc: "Unstable releases and fragile deployments that erode trust and operational continuity.",
    },
    {
      step: "04",
      title: "Uncontrolled technical complexity",
      desc: "Accumulated architectural debt that compounds risk and reduces long-term agility.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-teal-900 py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-widest text-emerald-400 uppercase font-semibold">
            Engineering Risk Landscape
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Critical Engineering Challenges
          </h2>

          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Systemic weaknesses that silently erode performance, resilience,
            and long-term enterprise scalability.
          </p>
        </motion.div>

        {/* Horizontal Connector Line */}
        <div className="relative">
          <div className="absolute top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 via-blue-400 to-teal-400 hidden lg:block"></div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 relative">
            {problems.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 transition-all duration-300 hover:bg-white/10"
              >
                {/* Step Dot */}
                <div className="hidden lg:flex absolute -top-5 left-1/2 -translate-x-1/2 h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 text-white font-bold shadow-lg">
                  {item.step}
                </div>

                {/* Large Background Number */}
                <span className="absolute top-6 right-6 text-6xl font-bold text-white/5 select-none">
                  {item.step}
                </span>

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {item.desc}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-[2px] w-12 bg-emerald-400 transition-all duration-300 group-hover:w-24"></div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}