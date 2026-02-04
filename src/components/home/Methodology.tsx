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
    desc: "End-to-end delivery with ownership  at every stage.",
  },
  {
    step: "04",
    title: "Governance & Scale",
    desc: "Global delivery with quality, compliance, and control.",
  },
];

export default function Methodology() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-20 text-center">
          The Zamance Roadmap
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-[#1FA45B]/30" />

          {/* Vertical line (mobile) */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-[#1FA45B]/30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {steps.map((s, index) => (
              <div
                key={s.step}
                className={`relative flex md:flex-col ${
                  index % 2 === 0
                    ? "md:items-start"
                    : "md:items-end"
                }`}
              >
                {/* Dot */}
                {/* <div className="absolute md:static left-0 md:left-auto top-2 md:top-auto">
                  <div className="w-8 h-8 rounded-full bg-[#1FA45B] text-white flex items-center justify-center font-bold text-sm">
                    {s.step}
                  </div>
                </div> */}

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 mt-0 md:mt-6 max-w-xs bg-white border border-gray-200 rounded-xl shadow-sm p-6 ${
                    index % 2 === 0
                      ? "md:translate-y-8"
                      : "md:-translate-y-8"
                  }`}
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed">
                    {s.desc}
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
