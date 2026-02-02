import { motion, type Variants } from "framer-motion";

const reasons = [
  {
    title: "Consulting Led",
    desc: "We combine strategic consulting with hands-on execution to deliver measurable outcomes.",
  },
  {
    title: "Outcome Driven",
    desc: "Our teams deliver quality, timelines, accountability, and measurable business results.",
  },
  {
    title: "Global Standards",
    desc: "We align global execution with European governance, compliance, quality, and security standards.",
  },
  {
    title: "Problem First",
    desc: "We begin with business challenges, constraints, and objectives before proposing solutions.",
  },
];

// Container stagger animation
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Card animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function WhyZamance() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-[#F8FAFC] overflow-hidden">
      
      {/* 🔹 Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#1E3A8A]/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-[#1FA45B]/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-teal-400/10 blur-[100px]" />

        {/* Subtle Grid Texture */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* 🔹 Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-6">
            Why Zamance Consulting
          </h2>
          <p className="text-base md:text-lg text-black/70 leading-relaxed max-w-4xl mx-auto">
            Zamance bridges the gap between strategy and execution by combining consulting expertise
            with hands-on delivery and full accountability for outcomes.
          </p>
        </motion.div>

        {/* 🔹 Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-black/5 bg-white p-7 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Left Accent Bar */}
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-[#1E3A8A] to-[#1FA45B] opacity-0 group-hover:opacity-100 transition" />

              {/* Hover Glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#1E3A8A]/10 via-transparent to-[#1FA45B]/10" />

              <h3 className="relative text-lg font-semibold text-[#1E3A8A] mb-4">
                {item.title}
              </h3>
              <p className="relative text-black/70 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
