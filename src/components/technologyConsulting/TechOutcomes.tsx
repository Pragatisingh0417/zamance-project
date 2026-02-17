export function TechOutcomes() {
  const steps = [
    {
      title: "1. Assess & Diagnose",
      desc: "We evaluate your current technology landscape, governance model, and execution capability to identify structural risks, inefficiencies, and opportunity gaps.",
    },
    {
      title: "2. Design & Align",
      desc: "We define a clear architecture vision, governance framework, and strategic roadmap aligned with business priorities and growth objectives.",
    },
    {
      title: "3. Execute & Govern",
      desc: "We embed accountability, oversight mechanisms, and measurable milestones to ensure disciplined delivery and sustainable results.",
    },
  ];

  return (
    <section className=" py-8">
      <div className="mx-auto max-w-6xl px-6 text-center">

        {/* Header */}
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
            Our Approach
          </p>

          <h2 className="mt-6 text-4xl font-bold text-[#1E3A8A] leading-tight">
            A Structured Framework for
            <br /> Technology Leadership
          </h2>

          <p className="mt-6 text-lg text-black/70 leading-relaxed">
            We combine strategic clarity, architectural discipline, and
            governance oversight to ensure technology initiatives are aligned,
            resilient, and value-driven.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-20 grid gap-10 md:grid-cols-3 text-left">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl bg-white p-10 shadow-sm hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-[#1E3A8A]">
                {step.title}
              </h3>

              <p className="mt-6 text-black/70 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
