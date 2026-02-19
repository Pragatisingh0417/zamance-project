import { useEffect, useRef } from "react";

export default function OurPhilosophy() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = e.clientX + "px";
      glowRef.current.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative overflow-hidden py-28">

      {/* 🌈 Ambient Gradient Base */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#E0F2FF,#F0FFF4,#FCE7F3)]" />

        {/* Soft gradient blobs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/40 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-green-400/40 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] bg-pink-400/30 rounded-full blur-[140px]" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.05] 
          bg-[linear-gradient(to_right,#000_1px,transparent_1px),
              linear-gradient(to_bottom,#000_1px,transparent_1px)]
          bg-[size:60px_60px]" />
      </div>

      {/* 🖱 Mouse Glow Effect */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute -z-10 w-[300px] h-[300px] bg-white/40 rounded-full blur-[120px] translate-x-[-50%] translate-y-[-50%]"
      />

      {/* 💎 Glass Content Card */}
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="
          rounded-3xl
          bg-white/60
          backdrop-blur-xl
          border border-white/60
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          px-10 py-16
        ">

          <div className="text-center">

            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-600">
              Our Philosophy
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Consulting built for real business impact
            </h2>

            <div className="mx-auto my-10 h-[2px] w-20 rounded-full bg-gradient-to-r from-blue-600 to-green-500" />

            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                At Zamance, we believe consulting should create real business
                impact — not just polished presentations.
              </p>

              <p>
                We start with the problem, align solutions with business
                objectives, and deliver with ownership from strategy through
                execution.
              </p>

              <p>
                Every engagement is driven by outcomes, transparency, and
                long-term value creation.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
