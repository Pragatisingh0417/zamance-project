"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Consulting-Led, Execution-Backed",
    desc: "We don’t stop at strategy. Zamance designs and executes solutions with clear ownership and measurable outcomes.",
  },
  {
    title: "Outcome Ownership",
    desc: "We take responsibility beyond recommendations, ensuring delivery, adoption, and business impact.",
  },
  {
    title: "Global Governance Standards",
    desc: "European-aligned governance, compliance (GDPR), and quality frameworks across all engagements.",
  },
  {
    title: "Problem-First Approach",
    desc: "We start with business challenges, not tools or technologies, ensuring relevance and clarity.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhyZamance() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-block mb-3 text-sm font-semibold tracking-wide text-[#1E3A8A]">
            WHY CHOOSE US
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-black">
            Why Zamance
          </h2>

          <p className="text-lg text-black/70 leading-relaxed">
            Zamance is a global consulting and solutions firm specializing in
            Data Intelligence, Digital Technology, AI Automations, and
            Engineering Consulting — helping organizations move from strategy
            to execution with clarity, accountability, and measurable outcomes.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-black/5 bg-white p-7 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-[#1E3A8A] to-[#1FA45B] opacity-0 group-hover:opacity-100 transition" />

              <h3 className="text-lg font-semibold text-[#1E3A8A] mb-4 leading-snug">
                {item.title}
              </h3>

              <p className="text-black/70 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
