export function AICapabilities() {
  const capabilities = [
    {
      title: "AI Strategy & Value Architecture",
      desc: "We define enterprise AI roadmaps, prioritize high-impact initiatives, and align investment with measurable business value.",
    },
    {
      title: "Intelligent Process Automation",
      desc: "Structured automation frameworks that combine AI, orchestration, and workflow discipline to remove friction at scale.",
    },
    {
      title: "Applied Machine Learning",
      desc: "Production-grade predictive and optimization models engineered for reliability, monitoring, and continuous improvement.",
    },
    {
      title: "Generative AI Integration",
      desc: "Secure copilots and knowledge systems embedded into enterprise workflows to enhance productivity and decision support.",
    },
  ];

  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
              Capabilities
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
              Enterprise AI
              <br /> Built with Discipline
            </h2>

            <p className="mt-8 text-lg text-black/70 leading-relaxed max-w-lg">
              We design AI systems that are scalable, governed, and aligned to
              business strategy — moving beyond experimentation toward structured,
              enterprise-grade implementation.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-10">
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                className="border-b border-black/10 pb-8"
              >
                <div className="flex items-start gap-6">
                  
                  <span className="text-3xl font-bold text-[#1FA45B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-black/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
