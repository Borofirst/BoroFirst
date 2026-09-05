import WhyJoinBorofirst from "../../component/Career/CarrerOportunity";
import CultureValues from "../../component/Career/culture";
import CareerHero from "../../component/Career/HeroCareer";
import JoinOurTeam from "../../component/Career/joinOurTeam";
import CareerOpportunities from "../../component/Career/Oportunity";
import SEO from "../../component/Seo";




function CareersPage() {
  return (
    <>
    <SEO
  title="Careers at Borofirst | Build Your Future With Us"
  description="Explore career opportunities at Borofirst and join a growing team shaping the future of financial services, technology, innovation and customer-focused solutions."
  canonical="https://www.borofirst.com/careers"
/>
<main>
      <CareerHero />
      <WhyJoinBorofirst/>
      <CareerOpportunities/>
      <CultureValues/>
      
      <JoinOurTeam/>
</main>

\
    </>
  );
}

export default CareersPage;