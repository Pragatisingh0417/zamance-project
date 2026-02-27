"use client";

import { motion } from "framer-motion";

export function TechCapabilities() {
  const capabilities = [
    {
      title: "Strategic Direction",
      desc: "Defining long-term technology positioning aligned with commercial goals and capital planning.",
    },
    {
      title: "Architecture Design",
      desc: "Designing scalable, resilient systems that support multi-year growth without hidden complexity.",
    },
    {
      title: "Investment Governance",
      desc: "Ensuring disciplined, transparent and outcome-driven technology investment decisions.",
    },
    {
      title: "Risk & Structural Integrity",
      desc: "Strengthening compliance, security posture and ownership clarity to reduce exposure.",
    },
  ];

  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-20">

        {/* LEFT STICKY PANEL */}
        <div className="lg:sticky lg:top-32 h-fit">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1FA45B] mb-4">
            Technology Advisory Scope
          </p>

          <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">
            Capabilities Structured Around Strategic Control
          </h2>

          <p className="mt-6 text-sm text-black/60">
            Enterprise-grade advisory designed to strengthen structural clarity,
            investment discipline and long-term resilience.
          </p>
        </div>

        {/* RIGHT SCROLLING CONTENT */}
        <div className="space-y-24">

          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
              className="group border-l-2 border-black/10 pl-8 relative"
            >
              {/* Animated Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full 
                              bg-gradient-to-br from-blue-600 to-green-500
                              transition-all duration-500
                              group-hover:scale-125" />

              <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4">
                {item.title}
              </h3>

              <p className="text-lg text-black/70 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}