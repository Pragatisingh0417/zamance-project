"use client";

import { motion } from "framer-motion";

export function TechGovernance() {
  const governance = [
    {
      step: "01",
      title: "Architecture Governance",
      desc: "Structured oversight ensuring systems align with long-term scalability and enterprise resilience.",
    },
    {
      step: "02",
      title: "Security & Compliance",
      desc: "Embedded regulatory controls and security frameworks aligned with data protection standards.",
    },
    {
      step: "03",
      title: "Risk Governance",
      desc: "Proactive identification of vendor and technical dependencies to reduce operational risk.",
    },
    {
      step: "04",
      title: "Delivery Accountability",
      desc: "Clear ownership models and milestone governance ensuring measurable execution.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-teal-900 py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest text-emerald-400 uppercase font-semibold">
            Data & Intelligence Framework
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Transformation Roadmap
          </h2>

          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            A structured operating model for turning fragmented data into
            governed, insight-driven business capability.
          </p>
        </div>

        {/* Horizontal Connector Line */}
        <div className="relative">
          <div className="absolute top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 via-blue-400 to-teal-400 hidden lg:block"></div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 relative">
            {governance.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 transition-all duration-300 hover:-translate-y-3 hover:bg-white/10"
              >
                {/* Step Dot */}
                <div className="hidden lg:flex absolute -top-5 left-1/2 -translate-x-1/2 h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 text-white font-bold shadow-lg">
                  {item.step}
                </div>

                {/* Large Background Number */}
                <span className="absolute top-6 right-6 text-6xl font-bold text-white/5 select-none">
                  {item.step}
                </span>

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold text-white group-hover:text-emerald-300 transition">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {item.desc}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-[2px] w-12 bg-emerald-400 transition-all duration-300 group-hover:w-24"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}