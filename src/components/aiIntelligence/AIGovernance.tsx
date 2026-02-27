"use client";

import { motion } from "framer-motion";

export function AIGovernance() {
  const governance = [
    {
      title: "Transparent AI Models",
      desc: "AI systems are built with interpretability to ensure stakeholders understand how decisions are made and outcomes occur."
    },
    {
      title: "Structured Human Oversight",
      desc: "Critical decisions remain supervised through defined review mechanisms that preserve accountability and operational control."
    },
    {
      title: "Data Privacy Controls",
      desc: "Robust governance frameworks protect sensitive information while aligning with enterprise security and regulatory standards."
    },
    {
      title: "Audit Ready Compliance",
      desc: "Every AI workflow remains traceable and compliant, enabling structured audits, documentation, and risk transparency."
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-900 to-teal-800 py-32 text-white overflow-hidden">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
            AI Governance
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight">
            Responsible & Governed AI
            <br /> By Design
          </h2>

          <p className="mt-8 text-lg text-white/70 leading-relaxed">
            Governance is embedded into every layer of AI deployment —
            ensuring resilience, oversight, and compliance at scale.
          </p>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative mt-24">

          {/* Base Line */}
          <div className="absolute top-10 left-0 right-0 h-[2px] bg-white/10"></div>

          {/* Animated Progress Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="origin-left absolute top-10 left-0 right-0 h-[2px] bg-[#1FA45B]"
          />

          <div className="grid md:grid-cols-4 gap-10 relative">
            {governance.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative text-center"
              >
                {/* Node */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="relative z-10 mx-auto w-16 h-16 rounded-full 
                             bg-[#1FA45B] flex items-center justify-center 
                             font-bold text-white shadow-lg
                             transition-all duration-300
                             group-hover:shadow-[0_0_30px_rgba(31,164,91,0.6)]"
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="mt-10 bg-white/5 backdrop-blur-xl border border-white/10 
                             rounded-2xl p-6 transition-all duration-500
                             group-hover:border-[#1FA45B]/40
                             group-hover:bg-white/10"
                >
                  <h3 className="text-lg font-semibold group-hover:text-[#1FA45B] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm text-white/70 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}