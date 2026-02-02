import Hero from "../components/home/Hero";
import HowZamanceDelivers from "../components/home/HowZamanceDelivers";
import Industries from "../components/home/Industries";
import Methodology from "../components/home/Methodology";
import NewsletterCTA from "../components/home/NewsletterCTA";
import Pillars from "../components/home/Pillars";
import WhyZamance from "../components/home/WhyZamance";
import Trust from "../components/home/Trust";
import Partners from "../components/home/Partners";
import Testimonials from "../components/home/Testimonials";
import CaseStudies from "../components/home/CaseStudies";






export default function Home() {
  return (
    <>
       <Hero />  
       <CaseStudies /> 
       <Industries /> 
        <Partners />                 
      <Trust />                
      <WhyZamance />           
      <Pillars />              
      <HowZamanceDelivers />   
      <Methodology />                
      <Testimonials />         
                  
      <NewsletterCTA /> 

      
    </>
  );
}
