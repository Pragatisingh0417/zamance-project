export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ===================== Banner ===================== */}
      <section className="relative h-64 md:h-80 lg:h-96 flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center">
          Contact Us
        </h1>
      </section>

      {/* ===================== Contact Info ===================== */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {/* Phone */}
        <div className="flex flex-col items-center text-center border border-gray-200 rounded-xl p-6 transition hover:border-teal-400">
          <svg
            className="w-10 h-10 text-teal-500 mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M3 5a2 2 0 012-2h3.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V9a1 1 0 01-1 1h-1v3h1a1 1 0 011 1v2.586a1 1 0 01-.293.707l-2.414 2.414a1 1 0 01-.707.293H5a2 2 0 01-2-2V5z" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
          <p className="text-gray-600 text-sm">+91 123 456 7890</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center text-center border border-gray-200 rounded-xl p-6 transition hover:border-teal-400">
          <svg
            className="w-10 h-10 text-teal-500 mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 4h16v16H4z" />
            <path d="M4 4l8 8 8-8" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
          <p className="text-gray-600 text-sm">info@example.com</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center text-center border border-gray-200 rounded-xl p-6 transition hover:border-teal-400">
          <svg
            className="w-10 h-10 text-teal-500 mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-4-8-8-8z" />
            <circle cx="12" cy="10" r="2" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
          <p className="text-gray-600 text-sm text-center">
            123 Business Street,<br />City, State, Country - 123456
          </p>
        </div>
      </section>

      {/* ===================== Optional Contact Form ===================== */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
          Send Us a Message
        </h2>
        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
