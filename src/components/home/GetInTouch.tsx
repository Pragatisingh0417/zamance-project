export default function GetInTouch() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center">
              Get in Touch
            </h2>

            <p className="text-gray-600 max-w-lg mx-auto mb-10 leading-relaxed text-center">
              Tell us about your requirements and challenges.
              Our team will get back to you within one business day.
            </p>

            {/* CONTACT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              
              {/* Phone */}
              <div className="group bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md hover:border-teal-400 transition">
                <div className="flex justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 448 512"><path fill="#1E3A8A" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3z"/></svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Phone
                </h3>
                <p className="text-sm text-gray-600">
                  +1 90 456 7890
                </p>
              </div>

              {/* Email */}
              <div className="group bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md hover:border-teal-400 transition">
                <div className="flex justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#1E3A8A" d="M22 5.5H9c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h13c1.11 0 2-.89 2-2v-9a2 2 0 0 0-2-2m0 3.67l-6.5 3.33L9 9.17V7.5l6.5 3.31L22 7.5zM5 16.5c0 .17.03.33.05.5H1c-.552 0-1-.45-1-1s.448-1 1-1h4zM3 7h2.05c-.02.17-.05.33-.05.5V9H3c-.55 0-1-.45-1-1s.45-1 1-1m-2 5c0-.55.45-1 1-1h3v2H2c-.55 0-1-.45-1-1"/></svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Email
                </h3>
                <p className="text-sm text-gray-600">
                  info@example.com
                </p>
              </div>

            </div>

            {/* TRUST POINTS */}
            <ul className="space-y-4 text-sm text-gray-700">
              {[
                "Enterprise-grade delivery and governance",
                "GDPR-aligned data privacy and security",
                "India & Europe delivery model",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#1FA45B] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10">
            <form className="space-y-6">

              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1FA45B] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1FA45B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1FA45B] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1FA45B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe your requirements"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1FA45B] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-br from-[#1E3A8A] to-[#1FA45B]  text-white font-semibold rounded-lg hover:bg-[#178A4C] transition"
              >
                Send Message
              </button>

              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Your information is safe with us.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
