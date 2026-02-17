export function EngineeringProblems() {
  const problems = [
    "Systems that fail under real production load.",
    "Performance bottlenecks that slow critical workflows.",
    "Frequent downtime and unstable releases.",
    "Uncontrolled technical complexity over time.",
  ];

  return (
    <section className="bg-[#0B1220] text-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE — Tension Statement */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Engineering Challenges
              <br />
              That Quietly
              <br />
              Break Systems.
            </h2>

            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              Most failures are not dramatic. They accumulate — through fragile
              architecture, weak operational discipline, and unchecked
              complexity — until reliability erodes.
            </p>
          </div>

          {/* RIGHT SIDE — Problem Stack */}
          <div className="space-y-10">
            {problems.map((problem, index) => (
              <div
                key={problem}
                className="border-l-2 border-red-500/60 pl-6"
              >
                <span className="text-sm text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-3 text-lg text-white/90 leading-relaxed max-w-md">
                  {problem}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
