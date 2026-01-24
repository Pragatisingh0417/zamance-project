import deliveryImg from "../../assets/delivery.jpg"; // add a clean consulting image

const principles = [
  {
    title: "Problem-First Approach",
    desc: "We begin with business challenges, constraints, and outcomes — not tools or technologies.",
  },
  {
    title: "Execution Ownership",
    desc: "We stay accountable beyond strategy through execution, adoption, and delivery quality.",
  },
  {
    title: "Global Delivery with Governance",
    desc: "European-aligned governance, compliance, and quality standards across all engagements.",
  },
  {
    title: "Outcome-Driven Partnerships",
    desc: "Long-term client relationships built on trust, transparency, and measurable results.",
  },
];

export default function HowZamanceDelivers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Zamance Delivers
          </h2>
          <p className="text-lg text-black/70">
            Zamance delivers results through a problem-first, execution-driven
            consulting model—bridging strategy and execution with accountability
            and governance.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">

          {/* Visual */}
          <div className="rounded-xl overflow-hidden border border-black/10">
            <img
              src={deliveryImg}
              alt="Zamance delivery model"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Principles */}
          <div className="grid gap-6 sm:grid-cols-2">
            {principles.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white border border-black/10 p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">
                  {item.title}
                </h3>
                <p className="text-black/70 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-sm text-black/60 max-w-3xl">
          Talent and delivery teams enable execution — expertise, solutions,
          and outcomes define Zamance’s value.
        </p>

      </div>
    </section>
  );
}
