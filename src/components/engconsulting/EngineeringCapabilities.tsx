export function EngineeringCapabilities() {
  const capabilities = [
    {
      title: "System Architecture & Design",
      desc: "Design of scalable, distributed, and fault-tolerant systems aligned to long-term business growth, security standards, and operational resilience.",
    },
    {
      title: "Platform & Application Engineering",
      desc: "Full-lifecycle engineering of mission-critical platforms — from design and development to integration, modernization, and evolution.",
    },
    {
      title: "Performance & Reliability Engineering",
      desc: "Structured performance optimization, observability design, and reliability frameworks to ensure stability, uptime, and system integrity.",
    },
    {
      title: "DevOps & Engineering Enablement",
      desc: "Modern CI/CD pipelines, infrastructure automation, and developer tooling to accelerate delivery while maintaining engineering discipline.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
            Engineering Excellence
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
            Core Engineering
            <br /> Capabilities
          </h2>

          <p className="mt-8 text-lg text-black/70 leading-relaxed">
            We build resilient, scalable, and high-performance technology systems
            engineered for enterprise reliability, long-term sustainability,
            and disciplined execution.
          </p>
        </div>

        {/* Capability Blocks */}
        <div className="mt-24 grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => (
            <div key={item.title} className="space-y-6">
              
              {/* Number */}
              <span className="text-4xl font-bold text-[#1E3A8A]/15">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-xl font-semibold text-[#0F172A] leading-snug">
                {item.title}
              </h3>

              <p className="text-black/70 leading-relaxed">
                {item.desc}
              </p>

              {/* Divider */}
              <div className="h-[2px] w-12 bg-[#1FA45B]"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
