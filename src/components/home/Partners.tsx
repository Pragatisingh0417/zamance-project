import logo from "../../assets/logo.jpeg";


const partners = [
  logo,
  logo,
  logo,
  logo,
  logo
 
];

export default function Partners() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-14 leading-snug md:leading-tight">
          Trusted by Leading Organizations
        </h2>

        {/* Slider */}
        <div className="relative overflow-hidden">
          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling container */}
          <div
            className="flex gap-16 w-max"
            style={{
              animation: "scroll 20s linear infinite",
            }}
          >
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[160px]"
              >
                <img
                  src={logo}
                  alt="Partner logo"
                  className="h-10 md:h-12 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline keyframes */}
      <style >{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
