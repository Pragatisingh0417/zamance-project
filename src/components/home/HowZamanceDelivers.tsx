import deliveryImg from "../../assets/delivery.jpg";

const principles = [
  {
    title: "Understand the Problem",
    desc: "We analyze business challenges, constraints, and success criteria.",
  },
  {
    title: "Design the Solution",
    desc: "We develop practical, scalable solutions aligned with strategy and outcomes.",
  },
  {
    title: "Execute with Ownership",
    desc: "We take full responsibility for delivery quality, timelines, and results.",
  },
  {
    title: "Govern & Deliver Results",
    desc: "We ensure compliance, transparency, and performance improvement.",
  },
];

export default function HowZamanceDelivers() {
  return (
    <section className="relative  overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="absolute left-40 top-0 w-[150px] h-[100px] bg-blue-500 rounded-full blur-[80px] opacity-100"></div>
        {/* 🔹 Header */}
        <div className="mb-16 mt-24 text-center">
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-6">
            How Zamance Delivers
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-4xl mx-auto">
            Zamance delivers results through a problem-first, execution-driven
            consulting model—bridging strategy and execution with accountability
            and governance.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center relative">
          <div className="absolute right-28 top-20 w-[240px] h-[240px] bg-green-300 rounded-full blur-[70px] opacity-100"></div>

          {/* 🔹 Visual */}
          <div className="relative">
            
            {/* Glow */}
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#1E3A8A]/20 to-[#1FA45B]/20 blur-2xl opacity-70" />

            <div className="relative rounded-2xl overflow-hidden border border-black/10 shadow-xl">
              <img
                src={deliveryImg}
                alt="Zamance delivery model"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 🔹 Principles */}
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((item, index) => (
              <div
                key={item.title}
                className="group relative rounded-xl bg-white border border-black/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Step Indicator */}
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#1FA45B] text-white text-sm font-bold flex items-center justify-center shadow-md">
                  {index + 1}
                </div>

                <h3 className="text-lg font-semibold text-[#1E3A8A] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-black/70 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover Overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#1E3A8A]/5 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
