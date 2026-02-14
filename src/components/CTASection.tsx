const CTASection = ({ text }: { text: string }) => {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h3 className="text-3xl font-semibold">{text}</h3>
        <button className="mt-8 rounded-lg bg-white px-8 py-3 font-medium text-slate-900 hover:bg-slate-200 transition">
          Schedule a Consultation
        </button>
      </div>
    </section>
  );
};

export default CTASection;
