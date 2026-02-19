export function AIClarity() {
  const pillars = [
    {
      title: "AI-Powered Decisioning",
      desc: "AI-driven insights embedded directly into operational workflows to support faster, more accurate executive and frontline decisions.",
    },
    {
      title: "Operational Automation",
      desc: "Structured automation of repeatable processes using AI-enhanced systems that reduce friction and improve consistency.",
    },
    {
      title: "Human-Centered Design",
      desc: "Automation designed to augment teams while preserving oversight, accountability, and critical institutional knowledge.",
    },
    {
      title: "Governed & Explainable AI",
      desc: "Transparent, compliant AI models aligned with governance standards, risk controls, and regulatory expectations.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">

        {/* Header */}
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
            Intelligent Automation
          </p>

          <h2 className="mt-6 text-4xl font-bold text-[#1E3A8A] leading-tight">
            What Intelligent Automation
            <br /> Means at Zamance
          </h2>

          <p className="mt-6 text-lg text-black/70 leading-relaxed">
            We approach AI and automation as strategic capability — not isolated
            tools. Our focus is on embedding intelligence into operations while
            maintaining governance, transparency, and human oversight.
          </p>
        </div>

        {/* Pillars */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-left">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl bg-white border border-black/10 p-8 transition duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-[#1E3A8A]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm text-black/70 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-6 h-[2px] w-8 bg-[#1FA45B] transition-all duration-300 group-hover:w-16"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
