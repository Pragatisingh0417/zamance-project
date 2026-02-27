import ServiceHero from "../components/ServiceHero";

 
import { EngineeringProblems } from "../components/engconsulting/EngineeringProblems";
import { EngineeringCapabilities } from "../components/engconsulting/EngineeringCapabilities";
import { EngineeringGovernance } from "../components/engconsulting/EngineeringGovernance";
import { EngineeringOutcomes } from "../components/engconsulting/EngineeringOutcomes";
import GetInTouch from "../components/home/GetInTouch";
import NewsletterCTA from "../components/home/NewsletterCTA";
import EngineeringClarity from "../components/engconsulting/EngineeringClarity";

const EngineeringConsulting = () => {
  return (
    <>
      <ServiceHero
        title="Engineering Consulting"
        // subtitle="Designing and delivering robust, scalable, and future-ready engineering solutions."
      />

      <EngineeringClarity />
      <EngineeringCapabilities />
      <EngineeringProblems />
      <EngineeringGovernance />
      
      
      <EngineeringOutcomes />
      <GetInTouch />
      <NewsletterCTA />

      
    </>
  );
};

export default EngineeringConsulting;
