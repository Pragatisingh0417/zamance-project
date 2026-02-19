export function AICapabilities() {
  const capabilities = [
    {
      title: "AI Strategy & Value Architecture",
      desc: "We define enterprise AI roadmaps, prioritize high-impact initiatives, and align investment with measurable business value.",
    },
    {
      title: "Intelligent Process Automation",
      desc: "Structured automation frameworks combining AI, orchestration, and workflow discipline to remove friction at scale.",
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

        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
            Capabilities
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
            Enterprise AI Built with Discipline
          </h2>

          <p className="mt-8 text-lg text-black/70 leading-relaxed">
            We move organizations beyond experimentation — building AI systems
            that are governed, scalable, and strategically aligned.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid md:grid-cols-2 border-t border-l border-black/10">

          {capabilities.map((item, ) => (
            <div
              key={item.title}
              className="p-14 border-b border-r border-black/10 group transition-colors duration-300 hover:bg-[#F8FAFC]"
            >
              

              <h3 className="text-2xl font-semibold text-[#0F172A]">
                {item.title}
              </h3>

              <p className="mt-6 text-black/70 leading-relaxed max-w-md">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
