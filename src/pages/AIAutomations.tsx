import ServiceHero from "../components/ServiceHero";
import Section from "../components/Section";
import CTASection from "../components/CTASection";

const AIAutomations = () => {
  return (
    <>
      <ServiceHero
        title="AI & Intelligent Automation"
        subtitle="Improving efficiency, accuracy, and scalability through responsible intelligent automation."
      />

      <Section>
        <h2 className="text-2xl font-semibold">Automation Focus Areas</h2>
        <ul className="mt-6 space-y-3 text-slate-600">
          <li>• Process automation strategy</li>
          <li>• AI-enabled workflow optimization</li>
          <li>• Intelligent decision systems</li>
          <li>• Operational efficiency improvement</li>
          <li>• Automation governance & controls</li>
        </ul>
      </Section>

      <Section className="bg-slate-50 rounded-xl">
        <p className="text-slate-600 max-w-3xl">
          We prioritize business value, governance, and measurable outcomes —
          ensuring automation enhances, not disrupts, operations.
        </p>
      </Section>

      <CTASection text="Automate with intelligence and control." />
    </>
  );
};

export default AIAutomations;
