const impacts = [
  {
    title: "Executive Decisions",
    desc: "Trusted dashboards and governed insights for leadership-level decisions.",
  },
  {
    title: "Operational Efficiency",
    desc: "Process optimization driven by accurate, real-time intelligence.",
  },
  {
    title: "Customer Intelligence",
    desc: "Unified customer data enabling personalization and retention.",
  },
  {
    title: "Risk & Compliance",
    desc: "Proactive controls aligned with governance and regulatory needs.",
  },
];

export default function DataImpact() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
            Business Impact
          </p>
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900">
            Where data creates measurable impact
          </h2>
        </div>

        {/* 4 Column Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impacts.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-lg font-semibold text-[#1E3A8A]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-black/70 sm:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
