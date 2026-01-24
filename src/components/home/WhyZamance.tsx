const reasons = [
  {
    title: "Consulting-Led, Execution-Backed",
    desc: "We don’t stop at strategy. Zamance designs and executes solutions with clear ownership and measurable outcomes.",
  },
  {
    title: "Outcome Ownership",
    desc: "We take responsibility beyond recommendations, ensuring delivery, adoption, and business impact.",
  },
  {
    title: "Global Governance Standards",
    desc: "European-aligned governance, compliance (GDPR), and quality frameworks across all engagements.",
  },
  {
    title: "Problem-First Approach",
    desc: "We start with business challenges, not tools or technologies, ensuring relevance and clarity.",
  },
];

export default function WhyZamance() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Zamance
          </h2>
          <p className="text-lg text-black/70">
            Zamance is a global consulting and solutions firm specializing in Data Intelligence, Digital Technology, AI Automations, and Engineering Consulting. We help organizations move from strategy to execution with clarity, accountability, and measurable outcomes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-black/10 p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-[#1E3A8A] mb-3">
                {item.title}
              </h3>
              <p className="text-black/70 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
