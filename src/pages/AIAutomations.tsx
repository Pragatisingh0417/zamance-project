import ServiceHero from "../components/ServiceHero";
import { AICapabilities } from "../components/aiIntelligence/AICapabilities";

import { AIClarity } from "../components/aiIntelligence/AIClarity";
import { AIGovernance } from "../components/aiIntelligence/AIGovernance";
import { AIProblems } from "../components/aiIntelligence/AIProblems";
import GetInTouch from "../components/home/GetInTouch";
import NewsletterCTA from "../components/home/NewsletterCTA";




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
      <GetInTouch />
      <NewsletterCTA />
     

      

      

      
    </>
  );
};

export default AIAutomations;
