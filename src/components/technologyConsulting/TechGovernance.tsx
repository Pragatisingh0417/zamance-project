"use client";

import { motion } from "framer-motion";

export function TechGovernance() {
  const governance = [
    {
      title: "Architecture Governance",
      desc: "Structured oversight ensuring systems align with long-term scalability and enterprise resilience.",
    },
    {
      title: "Security & Compliance",
      desc: "Embedded regulatory controls and security frameworks aligned with data protection standards.",
    },
    {
      title: "Risk Governance",
      desc: "Proactive identification of vendor and technical dependencies to reduce operational risk.",
    },
    {
      title: "Delivery Accountability",
      desc: "Clear ownership models and milestone governance ensuring measurable execution.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-900 to-teal-800 py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 ">

        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" mb-20"
        >
          <p className="text-sm font-semibold uppercase text-center tracking-widest text-[#1FA45B]">
            Governance Framework
          </p>

          <h2 className=" text-center mt-6 text-4xl font-bold leading-tight">
            Governance Roadmap Elements
          </h2>

          <p className="mt-6 text-center text-white/70 text-lg">
            Core governance elements ensuring structured, secure, and accountable technology execution.
          </p>
        </motion.div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Horizontal Gradient Line */}
          <div className="hidden lg:block absolute top-7 left-0 w-full h-1 
            bg-gradient-to-r from-blue-500 via-teal-400 to-green-500" />

          <div className="grid lg:grid-cols-4 gap-12 relative">

            {governance.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Node */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 w-14 h-14 rounded-xl 
                  bg-gradient-to-br from-blue-500 to-green-500
                  flex items-center justify-center font-bold shadow-lg mb-6
                  transition-all duration-300
                  group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
                >
                  {i + 1}
                </motion.div>

                {/* Card */}
                <div className="
                  bg-white/5 border border-white/10 
                  rounded-xl p-6 backdrop-blur-md
                  transition-all duration-300
                  group-hover:border-green-400/40
                  group-hover:bg-white/10
                  group-hover:shadow-[0_0_40px_rgba(34,197,94,0.15)]
                ">

                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-white/70 text-sm mt-3 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}