"use client";

import { motion } from "framer-motion";

export function TechOutcomes() {
  const steps = [
    {
      title: "Assess & Diagnose",
      desc: "We evaluate your technology landscape, governance model, and execution capability to identify structural risks .",
    },
    {
      title: "Design & Align",
      desc: "We define a clear architecture vision, governance framework, and strategic roadmap aligned with business priorities.",
    },
    {
      title: "Execute & Govern",
      desc: "We embed accountability, oversight mechanisms, and measurable milestones to ensure disciplined delivery.",
    },
  ];

  return (
    <section className="py-28 relative bg-[#F8FAFC] overflow-hidden">
      <div className="absolute left-10 bottom-54 w-[200px] h-[200px] bg-green-500 rounded-full blur-[80px] opacity-100"></div>
              <div className="absolute right-10 bottom-54 w-[200px] h-[200px] bg-blue-500 rounded-full blur-[80px] opacity-100"></div>
      <div className="mx-auto max-w-6xl px-6 relative">
         {/* <div className="absolute left-10 top-0 w-[200px] h-[200px]  bg-green-500 rounded-full blur-[80px] opacity-100"></div> */}

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
            Our Approach
          </p>

          <h2 className="mt-6 text-4xl font-bold text-[#1E3A8A] leading-tight">
            A Structured Framework for Technology Leadership
          </h2>

          <p className="mt-6 text-lg text-black/70 leading-relaxed">
            We combine strategic clarity, architectural discipline, and governance oversight 
            to ensure technology initiatives remain aligned, resilient, and value-driven.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-24">

          {/* Animated Horizontal Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="hidden md:block absolute top-8 left-0 right-0 h-[2px] 
                       bg-gradient-to-r from-[#1E3A8A]/20 via-[#1E3A8A] to-[#1FA45B]
                       origin-left"
          />

          <div className="grid gap-16 md:grid-cols-3 text-center md:text-left relative">
             

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >

                {/* Step Circle */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mx-auto md:mx-0 w-16 h-16 flex items-center justify-center 
                             rounded-full bg-[#1E3A8A] text-white text-xl font-bold 
                             shadow-lg transition-all duration-300
                             group-hover:shadow-[0_0_25px_rgba(30,58,138,0.5)]"
                >
                  {index + 1}
                </motion.div>

                {/* Content Card */}
                <div className="mt-10 p-6 rounded-xl transition-all duration-300
                                group-hover:bg-white group-hover:shadow-xl">

                  <h3 className="text-xl font-semibold text-[#1E3A8A] 
                                 transition-colors duration-300
                                 group-hover:text-[#1FA45B]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-black/70 leading-relaxed">
                    {step.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}