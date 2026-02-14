import ServiceHero from "../components/ServiceHero";
import Section from "../components/Section";
import CTASection from "../components/CTASection";

const EngineeringConsulting = () => {
  return (
    <>
      <ServiceHero
        title="Engineering Consulting"
        subtitle="Designing and delivering robust, scalable, and future-ready engineering solutions."
      />

      <Section>
        <h2 className="text-2xl font-semibold">What We Deliver</h2>
        <ul className="mt-6 space-y-3 text-slate-600">
          <li>• System architecture & design</li>
          <li>• Engineering process optimization</li>
          <li>• Scalability & performance planning</li>
          <li>• Quality & reliability frameworks</li>
          <li>• Technology risk mitigation</li>
        </ul>
      </Section>

      <Section className="bg-slate-50 rounded-xl">
        <p className="text-slate-600 max-w-3xl">
          Our consulting balances innovation with stability, ensuring solutions
          scale confidently as organizations grow.
        </p>
      </Section>

      <CTASection text="Engineer solutions built to scale." />
    </>
  );
};

export default EngineeringConsulting;
