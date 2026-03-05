"use client";

import { motion } from "framer-motion";

export function EngineeringOutcomes() {
  const outcomes = [
    {
      metric: "Higher System Reliability",
      desc: "Reduced production incidents and stronger fault tolerance across critical workflows.",
    },
    {
      metric: "Performance at Scale",
      desc: "Improved latency, throughput, and infrastructure efficiency under real traffic conditions.",
    },
    {
      metric: "Reduced Technical Debt",
      desc: "Cleaner architecture, improved maintainability, and lower long-term engineering overhead.",
    },
    {
      metric: "Safer Deployment Cycles",
      desc: "Shorter release cycles with stronger rollback strategies and CI/CD governance.",
    },
  ];

  return (
    <section className=" py-24 bg-slate-50 sm:py-28 lg:py-32 overflow-hidden">
      <div className="mx-auto relative max-w-7xl px-6">
        <div className="absolute left-10 bottom-0 w-[100px] h-[100px] bg-green-500 rounded-full blur-[80px] opacity-100"></div>

        <div className="grid  lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xs uppercase tracking-widest font-semibold text-[#1FA45B]">
              Engineering Outcomes
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] leading-tight">
              Measurable Impact 
              <br />
              Not Just Delivery.
            </h2>

            <p className="text-lg text-black/70 leading-relaxed max-w-xl">
              Our engagements are structured around operational improvement.
              The goal is not feature completion it is system-level advancement
              that compounds over time.
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="grid relative  sm:grid-cols-2 gap-x-12 gap-y-16">
             

            {outcomes.map((item, index) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative cursor-pointer transition-all duration-500"
              >
                {/* Hover background subtle */}
                <div className="absolute -inset-4 bg-green-50 opacity-0 group-hover:opacity-100 rounded-xl transition duration-500 -z-10"></div>

                {/* Metric */}
                <motion.h3
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-2xl font-semibold text-[#0F172A] group-hover:text-[#1FA45B] transition-colors duration-300"
                >
                  {item.metric}
                </motion.h3>

                {/* Description */}
                <p className="mt-4 text-black/70 leading-relaxed max-w-sm">
                  {item.desc}
                </p>

                {/* Animated underline */}
                <div className="mt-6 relative h-[2px] w-16 bg-black/10 overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-0 bg-[#1FA45B] transition-all duration-500 group-hover:w-full"></div>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 top-0 text-[#1FA45B]"
                >
                  →
                </motion.div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}