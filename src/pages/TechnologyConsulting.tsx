import ServiceHero from "../components/ServiceHero";
import Section from "../components/Section";
import CTASection from "../components/CTASection";
import { TechClarity } from "../components/technologyConsulting/TechClarity";
import { TechProblems } from "../components/technologyConsulting/TechProblems";
import { TechCapabilities } from "../components/technologyConsulting/TechCapabilities";
import { TechGovernance } from "../components/technologyConsulting/TechGovernance";
import { TechOutcomes } from "../components/technologyConsulting/TechOutcomes";

const TechnologyConsulting = () => {
  return (
    <>
      <ServiceHero
        title="Technology Consulting"
        // subtitle="Aligning technology decisions with long-term business strategy and operational excellence."
      />
      <TechClarity />
      <TechProblems />
        <TechGovernance />
      <TechCapabilities />
    
      <TechOutcomes />

      

    </>
  );
};

export default TechnologyConsulting;
