export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ===================== Banner ===================== */}
      <section className="relative bg-gradient-to-br from-[#1E3A8A] to-[#1FA45B] h-30 md:h-40 lg:h-60 flex items-center justify-center ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-left">
          Contact Us
        </h1>
      </section>

      {/* ===================== Contact Info ===================== */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {/* Phone */}
        <div className="flex flex-col items-center text-center border border-gray-200 rounded-xl p-6 transition hover:border-teal-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke="#344054" d="M25 14.583A10.417 10.417 0 0 1 35.417 25m-12.5-18.625A17 17 0 0 1 25 6.25A18.75 18.75 0 0 1 43.75 25q0 1.045-.125 2.083"/><path stroke="#306cfe" d="M31.25 43.75a27.5 27.5 0 0 1-9.042-3.98L26 34.334a4.167 4.167 0 0 1 5.583-1.062c.688.437 1.396.833 2.084 1.229a4.167 4.167 0 0 1 1.75 5.875l-1.292 1.98a2.44 2.44 0 0 1-2.875 1.395M7.646 15.98l2.083-1.293a4.167 4.167 0 0 1 5.938 1.521c.396.75.791 1.459 1.229 2.084a4.167 4.167 0 0 1-1.063 5.583l-5.541 3.854A27.5 27.5 0 0 1 6.25 18.75a2.44 2.44 0 0 1 1.396-2.77"/><path stroke="#306cfe" d="M10.292 27.73a37 37 0 0 0 5.375 6.603a37 37 0 0 0 6.604 5.375"/></g></svg>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
          <p className="text-gray-600 text-sm">+1 90 456 7890</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center text-center border border-gray-200 rounded-xl p-6 transition hover:border-teal-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 32 32"><path fill="#1E3A8A" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 6l-12 6l-12-6V8l12 6l12-6Z"/></svg>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
          <p className="text-gray-600 text-sm">info@example.com</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center text-center border border-gray-200 rounded-xl p-6 transition hover:border-teal-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#1E3A8A" d="M14 11.5A2.5 2.5 0 0 0 16.5 9A2.5 2.5 0 0 0 14 6.5A2.5 2.5 0 0 0 11.5 9a2.5 2.5 0 0 0 2.5 2.5M14 2c3.86 0 7 3.13 7 7c0 5.25-7 13-7 13S7 14.25 7 9a7 7 0 0 1 7-7M5 9c0 4.5 5.08 10.66 6 11.81L10 22S3 14.25 3 9c0-3.17 2.11-5.85 5-6.71C6.16 3.94 5 6.33 5 9"/></svg>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
          <p className="text-gray-600 text-sm text-center">
            123 Business Street,<br />City, State, Country - 123456
          </p>
        </div>
      </section>

      {/* ===================== Optional Contact Form ===================== */}
     <section className="max-w-3xl mx-auto px-6 pb-16">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
    Send Us a Message
  </h2>
  <form className="grid gap-6 bg-white p-8 rounded-2xl shadow-lg">
    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
    />
    <textarea
      placeholder="Your Message"
      rows={5}
      className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition resize-none"
    ></textarea>
    <button
      type="submit"
      className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
    >
      Send Message
    </button>
  </form>
</section>

    </div>
  );
}
