import ServiceHero from "../components/ServiceHero";
import { AICapabilities } from "../components/aiIntelligence/AICapabilities";

import { AIClarity } from "../components/aiIntelligence/AIClarity";
import { AIGovernance } from "../components/aiIntelligence/AIGovernance";
import { AIProblems } from "../components/aiIntelligence/AIProblems";



const AIAutomations = () => {
  return (
    <>
      <ServiceHero
        title="AI & Intelligent Automation"
      />
      <AIClarity />
      <AIProblems />
       <AIGovernance />
      <AICapabilities />
     

      

      

      
    </>
  );
};

export default AIAutomations;
