export function EngineeringOutcomes() {
  const outcomes = [
    {
      metric: "Higher System Reliability",
      desc: "Reduced production incidents and stronger fault tolerance across critical workflows.",
    },
    {
      metric: "Performance at Scale",
      desc: "Improved latency, throughput, and infrastructure efficiency under real traffic conditions.",
    },
    {
      metric: "Reduced Technical Debt",
      desc: "Cleaner architecture, improved maintainability, and lower long-term engineering overhead.",
    },
    {
      metric: "Safer Deployment Cycles",
      desc: "Shorter release cycles with stronger rollback strategies and CI/CD governance.",
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT SIDE — Section Intro */}
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-widest font-semibold text-[#1FA45B]">
              Engineering Outcomes
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] leading-tight">
              Measurable Impact —
              <br />
              Not Just Delivery.
            </h2>

            <p className="text-lg text-black/70 leading-relaxed max-w-xl">
              Our engagements are structured around operational improvement.
              The goal is not feature completion — it is system-level advancement
              that compounds over time.
            </p>
          </div>

          {/* RIGHT SIDE — Impact Blocks */}
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">

            {outcomes.map((item) => (
              <div key={item.metric} className="group">

                <h3 className="text-2xl font-semibold text-[#0F172A] group-hover:text-[#1FA45B] transition-colors">
                  {item.metric}
                </h3>

                <p className="mt-4 text-black/70 leading-relaxed max-w-sm">
                  {item.desc}
                </p>

                <div className="mt-6 h-[2px] w-14 bg-black/10 group-hover:bg-[#1FA45B] transition-colors"></div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
