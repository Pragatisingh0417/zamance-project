"use client";

import { motion, type Variants } from "framer-motion";

const impacts = [
  {
    title: "Executive Decisions",
    desc: "Trusted dashboards and governed insights for leadership-level decisions.",
  },
  {
    title: "Operational Efficiency",
    desc: "Process optimization driven by accurate, real-time intelligence.",
  },
  {
    title: "Customer Intelligence",
    desc: "Unified customer data enabling personalization and retention.",
  },
  {
    title: "Risk & Compliance",
    desc: "Proactive controls aligned with governance and regulatory needs.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // ✅ Type-safe easing
    },
  },
};

export default function DataImpact() {
  return (
    <section className="bg-[#F8FAFC] py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
            Business Impact
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Where data creates measurable impact
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {impacts.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-8"
            >
              {/* Hover Glow Background */}
              <div
                className="absolute inset-0 bg-gradient-to-br
                from-[#1FA45B]/0 via-[#1FA45B]/0 to-[#1FA45B]/0
                group-hover:from-[#1FA45B]/5
                group-hover:via-[#1FA45B]/3
                group-hover:to-transparent
                transition-all duration-500"
              />

              {/* Accent Line */}
              <div
                className="mb-6 h-[3px] w-10 bg-[#1FA45B]
                transition-all duration-500
                group-hover:w-20"
              />

              <h3
                className="relative mb-4 text-lg font-semibold text-[#1E3A8A]
                transition-colors duration-300
                group-hover:text-[#1FA45B]"
              >
                {item.title}
              </h3>

              <p className="relative text-sm leading-relaxed text-black/70 sm:text-base">
                {item.desc}
              </p>

              {/* Subtle Depth Shadow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl
                shadow-sm group-hover:shadow-xl
                transition-shadow duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}