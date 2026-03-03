"use client";

import { motion } from "framer-motion";

export function EngineeringGovernance() {
  const capabilities = [
    {
      title: "Standards That Enforce Quality",
      desc: "Code reviews, CI/CD discipline, versioning strategy, and architectural guardrails are defined before delivery begins.",
    },
    {
      title: "Resilience By Design",
      desc: "Failure scenarios, load patterns, and recovery workflows are engineered into systems not patched in later.",
    },
    {
      title: "Security As Architecture",
      desc: "Access models, encryption strategy, and data boundaries are foundational design decisions, not compliance checkboxes.",
    },
    {
      title: "Clear Operational Ownership",
      desc: "Monitoring, performance accountability, and measurable reliability metrics continue beyond launch.",
    },
  ];

  return (
    <section className="bg-white py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="absolute left-10 top-0 w-[200px] h-[200px] bg-green-500 rounded-full blur-[80px] opacity-100"></div>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1c398e] leading-tight tracking-tight">
            Engineering Quality
            <br />
            <span className="text-[#1eb65e]">
              Is a System Not a Promise.
            </span>
          </h2>

          <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Governance is not documentation after delivery. It is the structural
            discipline that shapes how systems are designed, reviewed, deployed,
            and sustained in production.
          </p>
        </motion.div>

        {/* CONTENT BLOCKS */}
        <div className="mt-20 grid gap-10 md:grid-cols-2">

          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-500 hover:shadow-xl"
            >
              {/* Animated Left Accent */}
              <div className="absolute left-0 top-0 h-full w-1 bg-emerald-500 scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100 rounded-l-2xl" />

              <h3 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>

              {/* Animated Bottom Line */}
              <div className="mt-6 h-[2px] w-16 bg-slate-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full"></div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}