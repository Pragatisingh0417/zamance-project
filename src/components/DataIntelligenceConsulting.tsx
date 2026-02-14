const capabilities = [
  {
    title: "Data Strategy",
    desc: "Define data vision, architecture, and priorities aligned with business goals.",
  },
  {
    title: "Analytics & Insights",
    desc: "Convert enterprise data into clear insights for faster decision-making.",
  },
  {
    title: "AI & Intelligence",
    desc: "Apply predictive models to automate, optimize, and forecast outcomes.",
  },
  {
    title: "Data Governance",
    desc: "Ensure accuracy, security, compliance, and long-term data trust.",
  },
];

export default function DataIntelligenceConsulting() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
            Data & Intelligence Consulting
          </p>

          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900">
            Turning data into decisions leaders can trust
          </h2>

          <p className="mt-5 text-base text-black/70 sm:text-lg">
            We help organizations build reliable data foundations and transform
            information into governed intelligence and measurable outcomes.
          </p>
        </div>

        {/* Capability List */}
        <div className="mx-auto max-w-5xl divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="grid gap-4 px-8 py-7 sm:grid-cols-3 sm:gap-8"
            >
              <h3 className="text-lg font-semibold text-[#1E3A8A] sm:col-span-1">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-black/70 sm:col-span-2 sm:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-base text-black/70 sm:text-lg">
            From strategy through execution, Zamance owns outcomes — not just reports.
          </p>
        </div>

      </div>
    </section>
  );
}
