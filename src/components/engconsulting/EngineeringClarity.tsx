"use client";

import { motion } from "framer-motion";

export default function EngineeringClarity() {
  const items = [
    {
      title: "Business-led architecture",
      desc: "Systems designed around real workflows, constraints, and business priorities — not idealized diagrams.",
    },
    {
      title: "Built to scale responsibly",
      desc: "Technology choices that support growth without creating hidden complexity or long-term fragility.",
    },
    {
      title: "Independent, vendor-neutral",
      desc: "Recommendations driven by fit and impact, not partnerships, licenses, or resale incentives.",
    },
    {
      title: "Execution with governance",
      desc: "Clear ownership, structured decision-making, and delivery aligned with European governance standards.",
    },
  ];

  return (
    <section className=" py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-24">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-[#2F9E44]">
            Technology Consulting
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#1C2B4A] leading-tight">
            How Zamance Thinks
            <br />
            About Technology
          </h2>

          <p className="text-lg text-black/70 leading-relaxed">
            At Zamance, technology consulting is not about recommending
            platforms or chasing trends. It’s about helping leadership teams
            make technology decisions they can stand behind today and three
            years from now.
          </p>

          <button
            className="mt-6 bg-[#2F9E44] hover:bg-[#248A39] 
                             transition-all duration-300 
                             px-6 py-3 rounded-lg text-white font-medium
                             shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            Schedule a Consultation →
          </button>
        </motion.div>

        {/* RIGHT SIDE - NEW DESIGN */}
        <div className="divide-y divide-black/10">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
              className="group py-10 flex gap-8 transition-all duration-300"
            >
              {/* Large Number */}
              <div className="text-5xl font-bold text-black/10 group-hover:text-[#2F9E44]/20 transition-colors duration-300">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div>
                <h3
                  className="text-xl font-semibold text-[#1C2B4A] 
                               group-hover:text-[#2F9E44] 
                               transition-colors duration-300"
                >
                  {item.title}
                </h3>

                <p className="mt-3 text-black/70 leading-relaxed max-w-lg">
                  {item.desc}
                </p>

                {/* subtle underline animation */}
                <div
                  className="mt-4 h-[2px] w-0 bg-[#2F9E44] 
                                group-hover:w-16 transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
