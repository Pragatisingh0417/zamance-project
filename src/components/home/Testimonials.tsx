import { useEffect, useState } from "react";

type Testimonial = {
  name: string;
  company: string;
  message: string;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
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
  }, [testimonials.length]);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-14">
          What Our Clients Say
        </h2>

        {/* Mobile Auto Slider */}
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

        {/* Desktop Grid */}
        <div className="hidden md:grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
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
