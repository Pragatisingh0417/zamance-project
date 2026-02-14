export default function AboutZamance() {
    return (
        <section className="bg-white py-24 sm:py-28">
            <div className="mx-auto max-w-7xl px-6">

                {/* Centered Heading Only */}
                <div className="mb-20 text-center">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
                        About Zamance
                    </p>

                    <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-14 leading-snug text-center md:leading-tight">
                        Consulting that turns clarity into execution
                    </h1>
                </div>

                {/* Content */}
                <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">

                    {/* Left Content */}
                    <div className="space-y-3 text-base leading-relaxed text-black/70 sm:text-lg">
                        <p>
                            Zamance Consulting was founded to solve a common failure in modern
                            consulting strategy without execution, or execution without
                            direction.
                        </p>

                        <p>
                            We partner with organizations to define complex problems, design
                            practical solutions, and take full ownership of delivery. Our
                            responsibility does not end at advice it extends to measurable
                            outcomes.
                        </p>

                        <p>
                            Every engagement begins with understanding business realities,
                            constraints, and objectives before technology or tools are
                            introduced.
                        </p>
                    </div>

                    {/* Right Content */}
                   <div className="space-y-7 text-base leading-relaxed sm:text-lg">
  <div
    className="relative rounded-3xl border border-black/10 bg-cover bg-center bg-no-repeat p-8 sm:p-10 overflow-hidden"
    style={{ backgroundImage: "url('/graph.avif')" }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]" />

    {/* Content */}
    <div className="relative z-10">
      <p className="text-2xl font-bold mb-4 text-[#1E3A8A]">
        What Defines Zamance
      </p>

      <ul className="space-y-5">
        {[
          "Consulting led execution beyond slideware",
          "Ownership from problem definition to scale",
          "Outcome driven delivery with accountability",
          "Global execution with European governance",
        ].map((text) => (
          <li key={text} className="flex items-start gap-4">
            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1FA45B]" />
            <span className="text-sm leading-relaxed text-black/80 sm:text-base">
              {text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>


                </div>

            </div>
        </section>
    );
}
