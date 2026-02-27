import ServiceHero from "../components/ServiceHero";

import DataIntelligenceConsulting from "../components/DataIntelligenceConsulting";
import DataImpact from "../components/DataImpact";
import DataIntelligenceCaseStudies from "../components/DataIntelligenceCaseStudies";
import DataIntelligenceFramework from "../components/DataIntelligenceFramework";
import GetInTouch from "../components/home/GetInTouch";
import NewsletterCTA from "../components/home/NewsletterCTA";
import { TechThinkingSection } from "../components/TechThinking";

// import DataIntelligenceCTA from "../components/DataIntelligenceCTA";

const DataAndIntelligence = () => {
  return (
    <>
      <ServiceHero
        title="Data & Intelligence Consulting"
        // subtitle="Transforming enterprise data into actionable intelligence that enables confident, informed decision-making."
      />
      <TechThinkingSection />
      

      <DataIntelligenceConsulting />
       <DataIntelligenceFramework />
      <DataImpact />
      {/* <DataIntelligenceCTA /> */}
      <DataIntelligenceCaseStudies />
      <GetInTouch />
      <NewsletterCTA />
     
     
      
    </>
  );
};

export default DataAndIntelligence;
