type Props = {
  title: string;
  subtitle?: string; // ✅ optional
};

const ServiceHero = ({ title, subtitle }: Props) => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-900 to-teal-800 text-white h-30 md:h-40 lg:h-60">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-6 md:py-24">
        <h1 className="text-2xl md:text-5xl text-center font-semibold tracking-tight animate-fadeIn">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 max-w-2xl text-slate-200 text-lg animate-slideUp">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default ServiceHero;
