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
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-16 text-center">
          The Zamance Methodology
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {steps.map((s, index) => (
            <div key={s.step} className="flex items-center md:flex-row flex-col">
              
              {/* Step Card */}
              <div className="text-center max-w-xs">
                <div className="text-4xl font-bold text-[#1FA45B] mb-4">
                  {s.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {s.title}
                </h3>
                <p className="text-black/70 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Arrow (hide after last item) */}
              {index !== steps.length - 1 && (
                <>
                  {/* Desktop Arrow */}
                  <div className="hidden md:flex mx-6">
                    <svg
                      width="48"
                      height="24"
                      viewBox="0 0 48 24"
                      fill="none"
                    >
                      <path
                        d="M0 12H40"
                        stroke="#1FA45B"
                        strokeWidth="2"
                      />
                      <path
                        d="M34 6L40 12L34 18"
                        stroke="#1FA45B"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  {/* Mobile Arrow */}
                  <div className="md:hidden my-6">
                    <svg
                      width="24"
                      height="48"
                      viewBox="0 0 24 48"
                      fill="none"
                    >
                      <path
                        d="M12 0V40"
                        stroke="#1FA45B"
                        strokeWidth="2"
                      />
                      <path
                        d="M6 34L12 40L18 34"
                        stroke="#1FA45B"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
