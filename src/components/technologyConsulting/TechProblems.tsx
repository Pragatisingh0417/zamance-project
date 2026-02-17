export function TechProblems() {
  const problems = [
    {
      title: "Legacy systems limiting growth",
      desc: "Outdated architecture and rigid systems slow innovation and restrict the ability to scale efficiently."
    },
    {
      title: "Disconnected platforms & data silos",
      desc: "Critical data lives in separate systems, reducing visibility and weakening decision-making."
    },
    {
      title: "Unclear technology roadmaps",
      desc: "Technology investments are made reactively without a structured long-term direction."
    },
    {
      title: "Rising cost and technical debt",
      desc: "Short-term fixes accumulate into long-term structural complexity and financial burden."
    },
    {
      title: "Vendor lock-in risk",
      desc: "Dependence on single providers limits flexibility and strategic leverage."
    },
    {
      title: "Scaling without governance",
      desc: "Rapid growth without clear ownership and controls creates operational instability."
    },
    {
      title: "Security and compliance exposure",
      desc: "Gaps in governance increase regulatory risk and potential reputational damage."
    },
    {
      title: "Lack of executive visibility",
      desc: "Leadership lacks clear reporting and transparency into system performance and risk."
    }
  ];

  return (
    <section className="relative bg-[#F8FAFC] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className=" mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-center text-[#1FA45B]">
            Strategic Technology Risks
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#1E3A8A] text-center leading-tight">
            Common Technology Challenges <br /> We Help Leadership Resolve
          </h2>

          <p className="mt-6 text-center  text-black/70 text-lg leading-relaxed">
            Technology issues rarely begin as technical failures. They emerge
            gradually through misalignment, unclear ownership, fragmented
            systems, and reactive decisions. Over time, these gaps become
            structural barriers to growth.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg"
            >
              {/* Large Background Number */}
              <span className="absolute right-6 top-6 text-5xl font-bold text-[#1FA45B]/10">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-lg font-semibold text-[#1E3A8A]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-black/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
