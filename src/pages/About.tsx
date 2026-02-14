import AboutUs from "../components/about/aboutus";
import OurPhilosophy from "../components/about/OurPhilosophy";
import NewsletterCTA from "../components/home/NewsletterCTA";
import FunFacts from "../components/about/FunFacts";
import GovernanceStandards from "../components/about/GovernanceStandards";

export default function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#1E3A8A] to-[#1FA45B] h-30 md:h-40 lg:h-60 flex items-center justify-center ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-left">
          About Zamance
        </h1>
      </section>
      <AboutUs />
      <OurPhilosophy />
      {/* <WhyZamance /> */}
      <FunFacts />
      <GovernanceStandards />
      <NewsletterCTA />
    </>
  );
}
