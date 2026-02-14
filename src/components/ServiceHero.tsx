type Props = {
  title: string;
  subtitle: string;
};

const ServiceHero = ({ title, subtitle }: Props) => {
  return (
    <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1FA45B] text-white h-30 md:h-40 lg:h-60">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight animate-fadeIn">
          {title}
        </h1>
        {/* <p className="mt-6 max-w-2xl text-slate-300 text-lg animate-slideUp">
          {subtitle}
        </p> */}
      </div>
    </section>
  );
};

export default ServiceHero;
