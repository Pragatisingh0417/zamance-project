export function TechCapabilities() {
  const capabilities = [
    {
      title: "Strategic Direction",
      desc: "Defining long-term technology positioning that aligns with commercial goals, operational realities, and capital planning.",
    },
    {
      title: "Architecture Design",
      desc: "Designing systems that are scalable, resilient, and structured to support multi-year growth without accumulating hidden complexity.",
    },
    {
      title: "Investment Governance",
      desc: "Establishing decision frameworks that ensure technology spending remains disciplined, transparent, and outcome-driven.",
    },
    // {
    //   title: "Transformation Oversight",
    //   desc: "Providing structured execution control so modernization initiatives deliver measurable results — not prolonged disruption.",
    // },
    // {
    //   title: "Platform & Vendor Strategy",
    //   desc: "Independent evaluation of platforms and vendors to maintain leverage, flexibility, and long-term strategic control.",
    // },
    {
      title: "Risk & Structural Integrity",
      desc: "Strengthening compliance, security posture, and ownership clarity to reduce operational and reputational exposure.",
    },
  ];

  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="border-b border-black/10 pb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
            Technology Advisory Scope
          </p>

          <h2 className="mt-6 text-4xl font-bold text-[#1E3A8A] leading-tight">
            Capabilities Structured <br /> Around Strategic Control
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-black/70 leading-relaxed">
            Our advisory work is structured across the full lifecycle of
            technology decision-making  from defining direction to governing
            execution and protecting long-term structural integrity.
          </p>
        </div>

        {/* Capability Matrix */}
        <div className="divide-y divide-black/10 mt-10">
          {capabilities.map((c, index) => (
            <div
              key={c.title}
              className="grid md:grid-cols-12 gap-8 py-10 items-start"
            >
              {/* Index */}
              <div className="md:col-span-2 text-sm font-semibold text-black/40">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <h3 className="text-xl font-semibold text-[#1E3A8A]">
                  {c.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="text-black/70 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
