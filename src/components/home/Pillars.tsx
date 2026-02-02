const pillars = [
  {
    title: "Data & Intelligence",
    desc: "Data strategy, analytics, AI/ML, governance, and decision systems.",
    accent: "border-[#1E3A8A]",
    bg: "bg-[#1E3A8A]/5",
  },
  {
    title: "Technology Consulting",
    desc: "Digital platforms, cloud, DevOps, cybersecurity, and architecture.",
    accent: "border-[#1FA45B]",
    bg: "bg-white",
  },
  {
    title: "AI Automations",
    desc: "Intelligent automation to optimize operations and scale outcomes.",
    accent: "border-[#1E3A8A]",
    bg: "bg-[#1E3A8A]/5",
  },
  {
    title: "Engineering Consulting",
    desc: "Electrical, electronics, mechanical, construction & real estate.",
    accent: "border-[#1FA45B]",
    bg: "bg-white",
  },
];

export default function Pillars() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-14 leading-snug text-center md:leading-tight">
          Our Consulting Pillars
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`
                ${p.bg}
                group rounded-xl border border-black/10
                border-l-4 ${p.accent}
                p-6 transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
                hover:border-black/20
              `}
            >
              <h3 className="text-lg font-semibold text-[#1E3A8A] mb-4 leading-snug">
                {p.title}
              </h3>

              <p className="text-black/70 text-sm sm:text-base md:text-sm lg:text-base leading-relaxed md:leading-snug">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
