import deliveryImg from "../../assets/delivery.jpg"; // add a clean consulting image

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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-14 leading-snug md:leading-tight">
            How Zamance Delivers
          </h2>
          <p className="text-lg text-black/70">
            Zamance delivers results through a problem-first, execution-driven
            consulting model—bridging strategy and execution with accountability
            and governance.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-center">

          {/* Visual */}
          <div className="rounded-xl overflow-hidden border border-black/10">
            <img
              src={deliveryImg}
              alt="Zamance delivery model"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Principles */}
          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white border border-black/10 p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-[#1E3A8A] mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-black/70 text-sm sm:text-base md:text-sm lg:text-base leading-relaxed md:leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* <p className="mt-10 text-sm text-black/60 max-w-3xl">
          Talent and delivery teams enable execution — expertise, solutions,
          and outcomes define Zamance’s value.
        </p> */}

      </div>
    </section>
  );
}
