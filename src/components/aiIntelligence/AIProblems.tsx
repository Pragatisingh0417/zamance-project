export function AIProblems() {
  const problems = [
    {
      title: "Manual & Error-Prone Operations",
      desc: "Repetitive workflows, fragmented approvals, and spreadsheet-driven processes increase human error and slow execution.",
    },
    {
      title: "Reactive Decision-Making",
      desc: "Organizations relying on lagging indicators struggle to anticipate risk, demand shifts, and operational bottlenecks.",
    },
    {
      title: "Escalating Operational Costs",
      desc: "Inefficient processes, duplicated efforts, and underutilized systems drive unnecessary overhead and waste.",
    },
    {
      title: "Data-Rich but Insight-Poor",
      desc: "Large volumes of data exist across systems, yet actionable intelligence remains inaccessible or delayed.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-[#F8FAFC] py-28">
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
            We apply artificial intelligence to eliminate structural inefficiencies,
            unlock predictive insight, and transform data into measurable advantage.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-sm border border-black/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 h-1 w-full bg-[#1FA45B] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>

              {/* Step Number */}
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1FA45B]/10 text-[#1FA45B] font-bold text-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0F172A]">
                    {problem.title}
                  </h3>

                  <p className="mt-4 text-black/70 leading-relaxed">
                    {problem.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
