"use client";

import { motion, type Variants } from "framer-motion";

const trustItems = [
  {
    title: "GDPR Compliant",
    desc: "EU-aligned data privacy & protection",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9 12l2 2 4-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "European Governance",
    desc: "Compliance-driven quality standards",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12l2.5 2.5L16 9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Global Delivery",
    desc: "India & Europe with local accountability",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 12h18M12 3a15 15 0 010 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Outcome Ownership",
    desc: "Execution with measurable results",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M4 12l4 4 12-12" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function TrustStrip() {
  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {trustItems.map((itemData, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex gap-4"
            >
              {/* Icon */}
              <div className="mt-1 text-teal-600 shrink-0">
                {itemData.icon}
              </div>

              {/* Text */}
              <div>
                <h4 className="text-sm font-semibold tracking-wide text-slate-900">
                  {itemData.title}
                </h4>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  {itemData.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
