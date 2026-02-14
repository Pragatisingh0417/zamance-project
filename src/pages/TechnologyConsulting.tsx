import ServiceHero from "../components/ServiceHero";
import Section from "../components/Section";
import CTASection from "../components/CTASection";

const TechnologyConsulting = () => {
  return (
    <>
      <ServiceHero
        title="Technology Consulting"
        subtitle="Aligning technology decisions with long-term business strategy and operational excellence."
      />

      <Section>
        <h2 className="text-2xl font-semibold">Our Capabilities</h2>
        <ul className="mt-6 space-y-3 text-slate-600">
          <li>• Technology strategy & roadmaps</li>
          <li>• Digital transformation planning</li>
          <li>• Platform & vendor evaluation</li>
          <li>• IT modernization initiatives</li>
          <li>• Governance & risk alignment</li>
        </ul>
      </Section>

      <Section className="bg-slate-50 rounded-xl">
        <p className="text-slate-600 max-w-3xl">
          Our advisory approach ensures technology investments are justified,
          scalable, and aligned with enterprise priorities.
        </p>
      </Section>

      <CTASection text="Make technology a growth enabler." />
    </>
  );
};

export default TechnologyConsulting;
