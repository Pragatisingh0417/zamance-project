export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1FA45B] text-white">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Consulting-Led.
            <br />
            Execution-Backed.
            <br />
            <span className="opacity-90">Outcome-Driven.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10">
            Zamance is a global consulting and solutions firm specializing in
            Data Intelligence, Digital Technology, AI Automations, and
            Engineering — bridging strategy and execution with accountability.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-white px-8 py-3 text-[#1E3A8A] font-semibold hover:bg-white/90"
            >
              Talk to Experts
            </a>

            <a
              href="/services"
              className="rounded-full border border-white px-8 py-3 font-semibold hover:bg-white hover:text-[#1E3A8A]"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
