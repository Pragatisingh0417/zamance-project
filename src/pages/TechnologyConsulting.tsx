import ServiceHero from "../components/ServiceHero";

import { TechClarity } from "../components/technologyConsulting/TechClarity";
import { TechProblems } from "../components/technologyConsulting/TechProblems";
import { TechCapabilities } from "../components/technologyConsulting/TechCapabilities";
import { TechGovernance } from "../components/technologyConsulting/TechGovernance";
import { TechOutcomes } from "../components/technologyConsulting/TechOutcomes";
import GetInTouch from "../components/home/GetInTouch";
import NewsletterCTA from "../components/home/NewsletterCTA";

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
      <GetInTouch />
            <NewsletterCTA />

      

    </>
  );
};

export default TechnologyConsulting;
