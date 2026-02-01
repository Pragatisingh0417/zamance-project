import { useEffect, useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Amit Sharma",
      company: "ABC School",
      message:
        "Zamance Consultancy implemented our school ERP smoothly and made administration effortless.",
    },
    {
      name: "Rohit Verma",
      company: "TechNova Solutions",
      message:
        "Their strategy and guidance helped us launch our SaaS product successfully on time.",
    },
    {
      name: "Priya Nair",
      company: "GreenLeaf Foods",
      message:
        "Thanks to Zamance Consultancy, our website traffic and online engagement increased significantly.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-14">
          What Our Clients Say
        </h2>

        {/* 🔹 Mobile Auto Slider */}
        <div className="block md:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((item, i) => (
              <div key={i} className="min-w-full px-2">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Desktop Grid */}
        <div className="hidden md:grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
      <svg
        className="w-8 h-8 text-teal-500 mb-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7.17 6C4.59 6 2.5 8.09 2.5 10.67c0 1.71 1.39 3.1 3.1 3.1.6 0 1.16-.2 1.61-.54l.36.71c-.61.47-1.38.74-2.23.74-2.48 0-4.5-2.02-4.5-4.5S4.69 6 7.17 6zm12 0c-2.58 0-4.67 2.09-4.67 4.67 0 1.71 1.39 3.1 3.1 3.1.6 0  1.16-.2 1.61-.54l.36.71c-.61.47-1.38.74-2.23.74-2.48 0-4.5-2.02-4.5-4.5S16.69 6 19.17 6z" />
      </svg>

      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
        “{item.message}”
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#1FA45B] text-white flex items-center justify-center font-bold">
          {item.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{item.name}</h4>
          <span className="text-sm text-gray-500">{item.company}</span>
        </div>
      </div>
    </div>
  );
}
