"use client";

import { motion } from "framer-motion";

export function EngineeringCapabilities() {
  const capabilities = [
    {
      title: "System Architecture & Design",
      desc: "Design of scalable, distributed, and fault-tolerant systems aligned to long-term business growth, security standards, and operational resilience.",
    },
    {
      title: "Platform & Application Engineering",
      desc: "Full-lifecycle engineering of mission-critical platforms from design and development to integration, modernization, and evolution.",
    },
    {
      title: "Performance & Reliability Engineering",
      desc: "Structured performance optimization, observability design, and reliability frameworks to ensure stability, uptime, and system integrity.",
    },
    {
      title: "DevOps & Engineering Enablement",
      desc: "Modern CI/CD pipelines, infrastructure automation, and developer tooling to accelerate delivery while maintaining engineering discipline.",
    },
  ];

  return (
    <section className="bg-white py-32">
      <div className="mx-auto relative max-w-7xl px-6">
        
<div className="absolute right-12 top-0 w-[200px] h-[200px] bg-blue-500 rounded-full blur-[80px] opacity-100"></div>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
            Engineering Excellence
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
            Core Engineering Capabilities
          </h2>

          <p className="mt-8 text-lg text-black/60 leading-relaxed">
            We build resilient, scalable, and high-performance systems engineered
            for enterprise reliability and long-term sustainability.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-28 grid gap-y-20 gap-x-16 relative md:grid-cols-2 lg:grid-cols-4  ">
          <div className="absolute left-10 top-0 w-[200px] h-[200px] bg-green-500 rounded-full blur-[80px] opacity-100"></div>
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative "
            >
              {/* Large subtle number */}
              <span className="text-5xl font-bold text-black/5">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="mt-6 space-y-5">
                <h3 className="text-xl font-semibold text-[#0F172A] 
                               transition-colors duration-300 
                               group-hover:text-[#1FA45B]">
                  {item.title}
                </h3>

                <p className="text-black/60 leading-relaxed">
                  {item.desc}
                </p>

                {/* Minimal underline */}
                <div className="h-[1.5px] w-8 bg-[#1FA45B] 
                                transition-all duration-300 
                                group-hover:w-14" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}