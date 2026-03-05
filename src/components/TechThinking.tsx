export function TechThinkingSection() {
  return (
    <section className="bg-[#F4F7FB] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-[#1FA45B] uppercase">
              Data & Intelligence Consulting
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#1E3A8A] leading-tight">
              How Zamance Thinks <br />
              About Data & Intelligence
            </h2>

            <p className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              Most data programs don’t fail because of technology. They fail
              because the business never truly defined what decisions data
              should improve.
            </p>

            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              At Zamance, we treat data as an operating capability not a
              reporting layer. We align analytics with business priorities,
              governance standards, and the realities of execution so insights
              actually influence outcomes.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1FA45B] px-6 py-3 text-white font-semibold shadow-md transition hover:bg-[#178a4c]">
              Discuss Your Data Strategy →
            </button>
          </div>

          {/* RIGHT SIDE – Timeline */}
          <div className="relative">
            <div className="absolute left-5 top-4 bottom-1 h-96 w-[2px] bg-[#1FA45B]/30" />

            <div className="space-y-10">
              {[
                {
                  title: "Start with the Decision",
                  desc: "We define the business decisions that matter first, then design data foundations that directly support them.",
                },
                {
                  title: "Build Trust in the Numbers",
                  desc: "Clean pipelines, clear ownership, and governed models ensure leaders rely on the data they see.",
                },
                {
                  title: "Design for Real Adoption",
                  desc: "Dashboards alone don’t change behavior. Intelligence must integrate into workflows and operating rhythms.",
                },
                {
                  title: "Govern for Scale",
                  desc: "Security, compliance, and data stewardship are built in from the start not added after growth exposes gaps.",
                },
              ].map((item, index) => (
                <div key={item.title} className="relative pl-16">

                  {/* Number Circle */}
                  <div className="absolute left-0  flex h-10 w-10 items-center justify-center rounded-full bg-[#1FA45B] text-white font-semibold shadow-md">
                    {String(index + 1).padStart(2, "")}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-[#1E3A8A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
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