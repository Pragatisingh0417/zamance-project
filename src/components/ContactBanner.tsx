export default function ContactBanner() {
  return (
    <section
      className="relative h-64 md:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/src/assets/bg/contact-banner.jpg')" }}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Heading */}
      <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
        Contact Us
      </h1>
    </section>
  );
}