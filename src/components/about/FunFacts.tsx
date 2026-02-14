"use client";

import { useEffect, useRef, useState } from "react";

/* Counter Component */
function Counter({
  value,
  label,
  start,
}: {
  value: number;
  label: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const step = Math.ceil(value / 60);

    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <div className="group relative rounded-3xl border border-black/10 bg-white/70 backdrop-blur-md p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      {/* Accent Line */}
      <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-[#1FA45B] to-[#1E3A8A]" />

      <h3 className="text-4xl font-extrabold text-gray-900">
        {count}
        <span className="text-[#1FA45B]">+</span>
      </h3>

      <p className="mt-3 text-sm font-medium tracking-wide text-gray-500">
        {label}
      </p>
    </div>
  );
}

/* FunFacts Section */
export default function FunFacts() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 250, label: "Projects Delivered" },
    { value: 40, label: "Global Clients" },
    { value: 8, label: "Years of Experience" },
    { value: 25, label: "Domain Experts" },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white py-24"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#1FA45B15,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1FA45B]">
            Fun Facts
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Numbers that reflect real execution
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <Counter
              key={item.label}
              value={item.value}
              label={item.label}
              start={visible}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
