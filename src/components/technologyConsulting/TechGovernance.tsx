export function TechGovernance() {
  const governance = [
    {
      title: "Architecture Governance",
      desc: "Structured oversight ensuring every system aligns with long-term scalability,  and enterprise resilience.",
    },
    {
      title: "Security & Compliance",
      desc: "Embedded regulatory controls and security frameworks aligned with data protection standards.",
    },
    {
      title: "Risk Governance & Exposure",
      desc: "Proactive identification of vendor, operational, and technical dependencies to prevent structural fragility.",
    },
    {
      title: "Delivery Accountability",
      desc: "Clear ownership models, milestone governance, and reporting transparency to ensure measurable execution.",
    },
  ];

  return (
    <section className="relative bg-[#0F172A] py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
            Governance Framework
          </p>

          <h2 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight">
            Governance Built into Technology Execution
          </h2>

          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            Our governance model ensures transparency, accountability, and structural
            integrity across every stage of technology execution.
          </p>
        </div>

        {/* 4 Modern Boxes */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {governance.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-[#1FA45B]/50 hover:bg-white/10"
            >
              {/* Top Accent Line */}
              <div className="absolute left-0 top-0 h-1 w-full bg-[#1FA45B] rounded-t-2xl opacity-80"></div>

              {/* Number */}
              <span className="text-4xl font-bold text-[#1FA45B]/20">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-6 text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
