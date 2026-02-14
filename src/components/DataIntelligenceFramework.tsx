const frameworkSteps = [
  {
    step: "01",
    title: "Discover & Align",
    desc: "Understand business objectives, data landscape, and decision priorities.",
  },
  {
    step: "02",
    title: "Architect & Govern",
    desc: "Design scalable data architecture with built-in governance and compliance.",
  },
  {
    step: "03",
    title: "Build & Integrate",
    desc: "Develop pipelines, models, and dashboards with enterprise-grade quality.",
  },
  {
    step: "04",
    title: "Enable & Optimize",
    desc: "Operationalize insights, measure outcomes, and continuously optimize.",
  },
];

export default function DataIntelligenceFramework() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 ">
          <h2 className="text-3xl font-semibold text-white text-center">
            Our Delivery Framework
          </h2>
          <p className="mt-3 text-slate-400 text-center">
            A structured approach to turning data into measurable business value.
          </p>
        </div>

        {/* Framework Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {frameworkSteps.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-slate-700"
            >
             <div className="flex items-center gap-4">
  {/* Step Badge */}
  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/10 text-sm font-semibold text-white">
    {item.step}
  </div>

  {/* Content */}
  <div>
    <h3 className="text-base font-semibold leading-tight text-white">
      {item.title}
    </h3>
  </div>
</div>

              {/* Description */}
              <p className="mt-3 text-sm text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
