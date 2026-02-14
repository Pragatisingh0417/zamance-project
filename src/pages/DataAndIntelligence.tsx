import ServiceHero from "../components/ServiceHero";

import DataIntelligenceConsulting from "../components/DataIntelligenceConsulting";
import DataImpact from "../components/DataImpact";
import DataIntelligenceCaseStudies from "../components/DataIntelligenceCaseStudies";
import DataIntelligenceFramework from "../components/DataIntelligenceFramework";
// import DataIntelligenceCTA from "../components/DataIntelligenceCTA";

const DataAndIntelligence = () => {
  return (
    <>
      <ServiceHero
        title="Data & Intelligence Consulting"
        subtitle="Transforming enterprise data into actionable intelligence that enables confident, informed decision-making."
      />
<DataIntelligenceCaseStudies />
      <DataIntelligenceConsulting />
       <DataIntelligenceFramework />
      <DataImpact />
      {/* <DataIntelligenceCTA /> */}
     
     
      
    </>
  );
};

export default DataAndIntelligence;
