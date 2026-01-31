"use client";

import { motion, type Variants } from "framer-motion";

const trustItems = [
  {
    title: "GDPR Compliant",
    desc: "Data privacy & protection aligned with EU regulations",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4z"
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
    desc: "Quality, compliance & delivery excellence",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8 12l2.5 2.5L16 9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Global Delivery",
    desc: "India & Europe delivery with local accountability",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M3 12h18M12 3a15 15 0 010 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Outcome Ownership",
    desc: "Execution-backed consulting with measurable results",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          d="M4 12l4 4 12-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

// ✅ Typed Framer Motion variants
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function TrustStrip() {
  return (
    <section className="mt-2">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-14 leading-snug md:leading-tight">
          Our Commitment to Quality & Governance
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              variants={itemVariants}
            >
              <div className="text-teal-600 w-14 h-14">
                {item.icon}
              </div>
              <div>
                <h4 className="font-extralight text-lg text-slate-900">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
