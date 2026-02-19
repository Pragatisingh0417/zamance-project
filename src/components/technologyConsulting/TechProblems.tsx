export function TechProblems() {
  const problems = [
    {
      title: "Legacy Systems Limits",
      desc: "Outdated platforms and rigid systems slow innovation and restrict future scalability."
    },
    {
      title: "Fragmented Data ",
      desc: "Critical data spread across systems reduces visibility and weakens decisions."
    },
    {
      title: "Unclear Tech Strategy",
      desc: "Technology investments occur without structured planning or long term direction."
    },
    {
      title: "Rising Technical Debt",
      desc: "Temporary fixes increase complexity and create long term cost pressure."
    },
    {
      title: "Vendor Lock In Risk",
      desc: "Heavy provider dependence reduces flexibility and limits strategic leverage."
    },
    {
      title: "Scaling Risks",
      desc: "Rapid growth without governance creates instability and operational gaps."
    },
    {
      title: "Security Compliance ",
      desc: "Governance weaknesses increase regulatory exposure and reputational risk."
    },
    {
      title: "Limited Exec Visibility",
      desc: "Leadership lacks clear reporting into system performance and risk exposure."
    }
  ];

  return (
    <section className="relative bg-[#F8FAFC] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-center text-[#1FA45B]">
            Strategic Technology Risks
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#1E3A8A] text-center leading-tight">
            Common Technology Challenges We Help Leadership Resolve
          </h2>

          <p className="mt-6 text-center text-black/70 text-lg leading-relaxed">
            Technology issues rarely begin as technical failures. They emerge gradually through misalignment,
            unclear ownership, fragmented systems, and reactive decisions. Over time, these gaps become
            structural barriers to growth.
          </p>
        </div>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg"
            >
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
