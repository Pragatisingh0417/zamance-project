const steps = [
  {
    step: "01",
    title: "Problem Definition",
    desc: "We start with business challenges, not tools.",
  },
  {
    step: "02",
    title: "Solution Design",
    desc: "Practical, outcome-driven architecture and planning.",
  },
  {
    step: "03",
    title: "Execution & Delivery",
    desc: "End-to-end delivery with ownership and accountability.",
  },
  {
    step: "04",
    title: "Governance & Scale",
    desc: "Global delivery with quality, compliance, and control.",
  },
];

export default function Methodology() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-14 leading-snug md:leading-tight">
  The Zamance Methodology
</h2>

        <div className="grid gap-10 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="text-4xl font-bold text-[#1FA45B] mb-4">
                {s.step}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-black/70 text-sm sm:text-base md:text-sm lg:text-base leading-relaxed md:leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
