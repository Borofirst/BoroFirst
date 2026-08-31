import WhyJoinBorofirst from "../../component/Career/CarrerOportunity";
import CultureValues from "../../component/Career/culture";
import CareerHero from "../../component/Career/HeroCareer";
import JoinOurTeam from "../../component/Career/joinOurTeam";
import CareerOpportunities from "../../component/Career/Oportunity";




function CareersPage() {
  return (
    <>
      <CareerHero />
      <WhyJoinBorofirst/>
      <CareerOpportunities/>
      <CultureValues/>
      
      <JoinOurTeam/>
      {/* Add the section with id="open-positions" below */}
      {/* Add the resume section with id="send-resume" below */}
    </>
  );
}

export default CareersPage;