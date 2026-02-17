export function TechClarity() {
  const points = [
    {
      title: "Business-led architecture",
      desc: "Systems designed around real workflows, constraints, and business priorities — not idealized diagrams.",
    },
    {
      title: "Built to scale responsibly",
      desc: "Technology choices that support growth without creating hidden complexity or long-term fragility.",
    },
    {
      title: "Independent, vendor-neutral",
      desc: "Recommendations driven by fit and impact, not partnerships, licenses, or resale incentives.",
    },
    {
      title: "Execution with governance",
      desc: "Clear ownership, structured decision-making, and delivery aligned with European governance standards.",
    },
  ];

  return (
    <section className="relative py-28 bg-[#F8FAFC] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#1FA45B]/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#1E3A8A]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          
          {/* Left Content */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
              Technology Consulting
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-[#1E3A8A]">
              How Zamance Thinks <br /> About Technology
            </h2>

            <p className="mt-6 text-black/70 text-lg leading-relaxed">
              At Zamance, technology consulting is not about recommending
              platforms or chasing trends. It’s about helping leadership teams
              make technology decisions they can stand behind today and three
              years from now.
            </p>

            {/* New Paragraph */}
            <p className="mt-2 text-black/70 text-lg leading-relaxed">
              We work closely with executive teams to align technology strategy
              with operational reality ensuring investments drive measurable
              value, reduce risk, and create long term structural advantage.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="inline-flex items-center gap-2 rounded-lg bg-[#1FA45B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#178a4c] hover:shadow-lg">
                Schedule a Consultation
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>

          {/* Right Side Numbered Timeline */}
          <div className="relative border-l-2 border-[#1FA45B]/30 pl-8 space-y-12">
            {points.map((item, index) => (
              <div key={item.title} className="relative">
                
                {/* Number Badge */}
                <span className="absolute -left-[52px] flex h-10 w-10 items-center justify-center rounded-full bg-[#1FA45B] text-white font-bold text-sm shadow-md">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-lg font-semibold text-[#1E3A8A]">
                  {item.title}
                </h3>

                <p className="mt-2 text-black/70 text-sm leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
