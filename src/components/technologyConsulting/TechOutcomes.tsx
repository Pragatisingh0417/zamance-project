export function TechOutcomes() {
  const steps = [
    {
      title: "Assess & Diagnose",
      desc: "We evaluate your technology landscape, governance model, and execution capability to identify structural risks and opportunity gaps.",
    },
    {
      title: "Design & Align",
      desc: "We define a clear architecture vision, governance framework, and strategic roadmap aligned with business priorities.",
    },
    {
      title: "Execute & Govern",
      desc: "We embed accountability, oversight mechanisms, and measurable milestones to ensure disciplined delivery.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
            Our Approach
          </p>

          <h2 className="mt-6 text-4xl font-bold text-[#1E3A8A] leading-tight">
            A Structured Framework for Technology Leadership
          </h2>

          <p className="mt-6 text-lg text-black/70 leading-relaxed">
            We combine strategic clarity, architectural discipline, and governance oversight 
            to ensure technology initiatives remain aligned, resilient, and value-driven.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-[2px] bg-[#1E3A8A]/10"></div>

          <div className="grid gap-16 md:grid-cols-3 text-center md:text-left">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">

                {/* Step Circle */}
                <div className="mx-auto md:mx-0 w-16 h-16 flex items-center justify-center 
                                rounded-full bg-[#1E3A8A] text-white text-xl font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-[#1E3A8A]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-black/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
