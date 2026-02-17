export function AIGovernance() {
  const governance = [
    {
      title: "Explainable & Transparent Models",
      desc: "AI systems designed with interpretability in mind — ensuring stakeholders understand how decisions are made and why outcomes occur.",
    },
    {
      title: "Embedded Human Oversight",
      desc: "Critical decisions remain supervised through structured review mechanisms, preserving accountability and operational control.",
    },
    {
      title: "Data Privacy & Security Controls",
      desc: "Strict data governance frameworks safeguard sensitive information, aligned with enterprise security standards and regulatory requirements.",
    },
    {
      title: "Auditability & Regulatory Alignment",
      desc: "Every AI workflow is traceable and compliant, enabling structured audits, documentation, and risk transparency.",
    },
  ];

  return (
    <section className="relative bg-[#0F172A] py-32 text-white overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1FA45B]/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
            AI Governance
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight">
            Responsible & Governed AI
            <br /> By Design
          </h2>

          <p className="mt-8 text-lg text-white/70 leading-relaxed">
            Trust is not optional in AI adoption. We embed governance,
            compliance, and ethical safeguards directly into system architecture —
            ensuring long-term resilience and stakeholder confidence.
          </p>
        </div>

        {/* Governance Grid */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {governance.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#1FA45B]/40 hover:bg-white/10"
            >
              {/* Number */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1FA45B]/20 text-[#1FA45B] font-semibold text-sm">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-6 text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#1FA45B] transition-all duration-300 group-hover:w-full rounded-b-3xl"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
