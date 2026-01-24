import Hero from "../components/home/Hero";
import HowZamanceDelivers from "../components/home/HowZamanceDelivers";
import Industries from "../components/home/Industries";
import Methodology from "../components/home/Methodology";
import NewsletterCTA from "../components/home/NewsletterCTA";
import Pillars from "../components/home/Pillars";
import WhyZamance from "../components/home/WhyZamance";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyZamance />
      <HowZamanceDelivers />
      {/* Next sections go here */}
      <Pillars />
      <Industries />
      <Methodology />
      <NewsletterCTA />
      
    </>
  );
}
