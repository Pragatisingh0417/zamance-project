export function AIProblems() {
  const problems = [
    {
      title: "Manual & Error-Prone Operations",
      desc: "Repetitive workflows, fragmented approvals, and spreadsheet-driven processes increase human error and slow down execution.",
    },
    {
      title: "Reactive Decision-Making",
      desc: "Organizations relying on lagging indicators struggle to anticipate risk, demand shifts, and operational bottlenecks.",
    },
    {
      title: "Escalating Operational Costs",
      desc: "Inefficient processes, duplicated efforts, and underutilized systems drive unnecessary overhead and resource waste.",
    },
    {
      title: "Data-Rich but Insight-Poor",
      desc: "Large volumes of data exist across systems, yet actionable intelligence remains inaccessible or delayed.",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
            AI-Driven Problem Solving
          </p>

          <h2 className="mt-6 text-4xl font-bold text-[#0F172A] leading-tight">
            Business Challenges We Solve with AI
          </h2>

          <p className="mt-6 text-lg text-black/70 leading-relaxed">
            We apply artificial intelligence to address structural inefficiencies,
            decision bottlenecks, and hidden operational risk — transforming data
            into measurable performance advantage.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group relative rounded-3xl border border-black/10 bg-[#F8FAFC] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Number Badge */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1FA45B]/10 text-[#1FA45B] font-semibold text-sm">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-[#0F172A]">
                {problem.title}
              </h3>

              <p className="mt-4 text-sm text-black/70 leading-relaxed">
                {problem.desc}
              </p>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#1FA45B] transition-all duration-300 group-hover:w-full rounded-b-3xl"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
