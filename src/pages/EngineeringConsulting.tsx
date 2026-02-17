import ServiceHero from "../components/ServiceHero";

import { EngineeringClarity } from "../components/engconsulting/EngineeringClarity";
import { EngineeringProblems } from "../components/engconsulting/EngineeringProblems";
import { EngineeringCapabilities } from "../components/engconsulting/EngineeringCapabilities";
// import { EngineeringGovernance } from "../components/engconsulting/EngineeringGovernance";
import { EngineeringOutcomes } from "../components/engconsulting/EngineeringOutcomes";

const EngineeringConsulting = () => {
  return (
    <>
      <ServiceHero
        title="Engineering Consulting"
        // subtitle="Designing and delivering robust, scalable, and future-ready engineering solutions."
      />

      <EngineeringClarity />
      <EngineeringProblems />
      {/* <EngineeringGovernance /> */}
      <EngineeringCapabilities />
      
      <EngineeringOutcomes />

      
    </>
  );
};

export default EngineeringConsulting;
