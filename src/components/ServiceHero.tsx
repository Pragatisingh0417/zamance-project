type Props = {
  title: string;
  subtitle?: string;
};

const ServiceHero = ({ title, subtitle }: Props) => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-900 to-teal-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-24 lg:py-20 text-center">
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed">
            {subtitle}
          </p>
        )}

      </div>
    </section>
  );
};

export default ServiceHero;