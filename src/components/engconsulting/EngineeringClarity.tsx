export function EngineeringClarity() {
  const principles = [
    {
      title: "Production-Grade Engineering",
      desc: "Designed for failure scenarios, load variability, and long-term operational sustainability.",
    },
    {
      title: "Architectural Depth",
      desc: "Modular, distributed, and extensible systems built to evolve with business complexity.",
    },
    {
      title: "Operational Discipline",
      desc: "Structured observability, performance optimization, and reliability frameworks embedded from day one.",
    },
    {
      title: "True Ownership",
      desc: "We remain accountable beyond deployment — ensuring systems perform in the real world.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* LEFT SIDE */}
          <div className="space-y-6 lg:space-y-8 lg:sticky lg:top-32 self-start">

            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
              Engineering Consulting
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
              Systems Built
              <br className="hidden sm:block" />
              For Reality —
              <br className="hidden sm:block" />
              Not Demos.
            </h2>

            <p className="text-base sm:text-lg text-black/70 leading-relaxed max-w-xl">
              At Zamance, engineering consulting is the discipline of building
              systems that survive scale, pressure, and complexity. We focus on
              architecture integrity, performance sustainability, and
              operational resilience — not just shipping features.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative mt-10 lg:mt-0">

            {/* Vertical line (hidden on small screens) */}
            <div className="hidden sm:block absolute left-3 top-0 bottom-0 w-px bg-black/10" />

            <div className="space-y-12 sm:space-y-14">
              {principles.map((item, index) => (
                <div
                  key={item.title}
                  className="relative pl-8 sm:pl-12"
                >
                  {/* Dot indicator */}
                  <div className="absolute left-0 sm:left-0 top-2 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#1FA45B]" />

                  <span className="text-xs sm:text-sm text-black/40 font-medium">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-2 text-lg sm:text-xl lg:text-2xl font-semibold text-[#0F172A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-black/70 leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
