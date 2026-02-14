import { motion } from "framer-motion";

const standards = [
  {
    title: "Clear Accountability",
    desc: "Single point ownership across strategy, execution milestones, and outcomes.",
  },
  {
    title: "Compliance by Design",
    desc: "Delivery aligned with European data protection, security, and regulatory norms.",
  },
  {
    title: "Quality & Risk Control",
    desc: "Embedded quality reviews, delivery controls, and proactive risk management.",
  },
  {
    title: "Transparent Governance",
    desc: "Clear reporting, decision logs, and real-time delivery visibility.",
  },
];

export default function GovernanceStandards() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-white py-24 sm:py-28">
      
      {/* Soft background structure */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#1E3A8A]/6 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#1FA45B]/6 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
            Governance Standards
          </p>

          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-snug">
           Execution guided by strong governance
          </h2>

          <p className="mt-6 text-base text-black/70 sm:text-lg">
            Zamance embeds European governance standards directly into delivery,
            ensuring accountability, compliance, and trust at every stage.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2">
          {standards.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl border border-black/10 bg-white/90 p-9 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Left accent */}
              <div className="absolute left-0 top-0 h-full w-[1px]  rounded-l-3xl bg-gradient-to-b from-[#1E3A8A] to-[#1FA45B] opacity-70" />

              {/* Icon dot */}
              <div className="mb-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#1E3A8A]/10 to-[#1FA45B]/10 flex items-center justify-center">
                  <span className="h-2.5 w-2.5  rounded-full bg-[#1FA45B]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1E3A8A]">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-black/70 sm:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mx-auto mt-20 max-w-4xl text-center">
          <p className="text-base text-black/70 sm:text-lg">
            Strong governance enables faster decisions, predictable delivery,
            and outcomes leaders can rely on from problem definition to scale.
          </p>
        </div>
      </div>
    </section>
  );
}
