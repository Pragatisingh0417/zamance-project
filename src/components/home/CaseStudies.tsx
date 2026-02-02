export default function CaseStudies() {
  const cases = [
    {
    category: "Retail & Marketing",
    title: "Digital Presence Revamp",
    description:
      "Website redesign, SEO, and social media campaigns to boost online engagement.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
    {
      category: "Startup & Technology",
    title: "SaaS Product Launch",
    description:
      "Market research, strategy planning, and go-to-market support for a tech startup.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    },
    {
    category: "HR & Operations",
    title: "HR Automation System",
    description:
      "Automated attendance, payroll, and performance  for a manufacturing firm.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-14 leading-snug text-center md:leading-tight">
          Case Studies
        </h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div
                className="h-64 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#1FA45B] text-white mb-3">
                  {item.category}
                </span>

                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <button className="bg-[#1E3A8A] text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-teal-600 transition">
                  View Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
