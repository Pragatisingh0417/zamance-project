export function EngineeringGovernance() {
  const capabilities = [
    {
      title: "Standards That Enforce Quality",
      desc: "Code reviews, CI/CD discipline, versioning strategy, and architectural guardrails are defined before delivery begins.",
    },
    {
      title: "Resilience By Design",
      desc: "Failure scenarios, load patterns, and recovery workflows are engineered into systems — not patched in later.",
    },
    {
      title: "Security As Architecture",
      desc: "Access models, encryption strategy, and data boundaries are foundational design decisions, not compliance checkboxes.",
    },
    {
      title: "Clear Operational Ownership",
      desc: "Monitoring, performance accountability, and measurable reliability metrics continue beyond launch.",
    },
  ];

  return (
    <section className="bg-[#0F172A] text-white py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl text-center lg:text-4xl font-bold leading-tight">
            Engineering Quality
           
            Is a System 
            
            Not a Promise.
          </h2>

          <p className="mt-8 text-lg text-center text-white/70  leading-relaxed">
            Governance is not documentation after delivery.
            It is the structural discipline that shapes how systems are designed,
            reviewed, deployed, and sustained in production.
          </p>
        </div>

        {/* CONTENT BLOCKS */}
        <div className="mt-20 grid gap-x-16 gap-y-14 md:grid-cols-2">

          {capabilities.map((item) => (
            <div key={item.title} className="group">

              <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#22C55E] transition-colors">
                {item.title}
              </h3>

              <p className="text-white/70 leading-relaxed max-w-md">
                {item.desc}
              </p>

              <div className="mt-6 h-[1px] w-16 bg-white/20 group-hover:bg-[#22C55E] transition-colors"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
