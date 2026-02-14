type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className = "" }: SectionProps) => {
  return (
    <section className={`mx-auto max-w-7xl px-6 py-20 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
