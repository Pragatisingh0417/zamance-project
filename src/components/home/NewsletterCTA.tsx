export default function NewsletterCTA() {
  return (
    <section className="py-20 bg-[#1E3A8A] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Solving Complex Data and Technology Challenges with Measurable Impact
        </h2>
        <p className="text-white/90 mb-8">
          Subscribe to Zamance insights on data, technology, AI, and engineering.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-full text-white w-full sm:w-80 border-2 border-white"
          />
          <button
            type="submit"
            className="rounded-full bg-[#1FA45B] px-8 py-3 font-semibold hover:bg-green-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
