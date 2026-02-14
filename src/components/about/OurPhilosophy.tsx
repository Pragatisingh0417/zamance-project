export default function OurPhilosophy() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">

        {/* Section Label */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
          Our Philosophy
        </p>

        {/* Heading */}
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-snug md:leading-tight">
          Consulting built for real business impact
        </h2>

        {/* Divider */}
        <div className="mx-auto my-10 h-[2px] w-20 rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#1FA45B]" />

        {/* Content */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-black/70">
          <p>
            At Zamance, we believe consulting should create real business impact 
            not just polished presentations.
          </p>

          <p>
            We start with the problem, align solutions with business objectives,
            and deliver with ownership from strategy through execution.
          </p>

          <p>
            Every engagement is driven by outcomes, transparency, and long-term
            value creation.
          </p>
        </div>

      </div>
    </section>
  );
}
