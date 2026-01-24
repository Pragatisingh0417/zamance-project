import {
  FinanceIcon,
  HealthcareIcon,
  ManufacturingIcon,
  EnergyIcon,
  RetailIcon,
  TravelIcon,
  TechIcon,
} from "../icons/IndustryIcons";


const industries = [
  {
    name: "Finance & Banking",
    icon: FinanceIcon,
  },
  {
    name: "Healthcare & Life Sciences",
    icon: HealthcareIcon,
  },
  {
    name: "Manufacturing & Industrial",
    icon: ManufacturingIcon,
  },
  {
    name: "Energy & Utilities",
    icon: EnergyIcon,
  },
  {
    name: "Retail & Logistics",
    icon: RetailIcon,
  },
  {
    name: "Travel, Tourism & Leisure",
    icon: TravelIcon,
  },
  {
    name: "Technology & SaaS",
    icon: TechIcon,
  },
];

export default function Industries() {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/assets/bg/industries.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F172A]/85 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          Industries We Serve
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <div
              key={industry.name}
              className="
                group rounded-xl border border-white/10
                bg-white/10 backdrop-blur
                p-6 text-center
                transition-all duration-500
                hover:-translate-y-2 hover:bg-white/15 hover:shadow-xl
                animate-fade-up
              "
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <industry.icon />

              <p className="mt-4 font-medium text-white">
                {industry.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
