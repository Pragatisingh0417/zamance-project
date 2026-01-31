import { motion, type Variants } from "framer-motion";

const reasons = [
  {
    title: "Consulting Led",
    desc: "We combine strategic consulting with hands on execution to deliver measurable outcomes.",
  },
  {
    title: "Outcome Driven",
    desc: "Our teams  delivery quality timelines accountability & measurable business results.",
  },
  {
    title: "Global Standards",
    desc: "We align global execution with European governance compliance quality and security standards.",
  },
  {
    title: "Problem First",
    desc: "We begin with business challenges constraints objectives before proposing solutions.",
  },
];

// Container variant for stagger
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function WhyZamance() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-14 leading-snug md:leading-tight">
            Why Zamance Consulting
          </h2>
          <p className="text-lg text-black/70 leading-relaxed">
            Zamance is built to solve a common gap in consulting—great strategy without execution, or execution without clarity. We bridge this gap by combining deep consulting expertise with hands-on delivery and full accountability for outcomes.
          </p>
        </motion.div>

        {/* Cards */}
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
              className="group relative rounded-2xl border border-black/5 bg-white p-7 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-[#1E3A8A] to-[#1FA45B] opacity-0 group-hover:opacity-100 transition" />

              <h3 className="text-lg font-semibold text-[#1E3A8A] mb-4 leading-snug">
                {item.title}
              </h3>
              <p className="text-black/70 text-sm sm:text-base md:text-sm lg:text-base leading-relaxed md:leading-snug">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
