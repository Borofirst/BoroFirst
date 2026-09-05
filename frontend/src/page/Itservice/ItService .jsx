import AIBusinessAutomation from "../../component/ItService/AIautomation"
import FinalITCTA from "../../component/ItService/CTA"
import CaseStudies from "../../component/ItService/feaitureAndCasStudy"
import HowOurITSolutionsWork from "../../component/ItService/HowAreItwork"
import IndustriesWeServe from "../../component/ItService/IndustryServe"
import ITServicesHero from "../../component/ItService/ItServiceHero"
import ITServicesOverview from "../../component/ItService/ItserviceOverview"
import TechnologyExpertise from "../../component/ItService/TechnicalExpart"
import WhyChooseBoroFirstIT from "../../component/ItService/WhyChooseBoro"
import SEO from "../../component/Seo"


const ItService  = () => {
  return (

 <>
 <SEO
  title="IT Services, AI & Software Solutions | Borofirst"
  description="Build smarter with Borofirst. We deliver custom software, AI-powered solutions, business automation, cloud technology and intelligent digital systems designed to improve efficiency, scale operations and drive sustainable business growth."
  canonical="https://www.borofirst.com/it-services"
/>
<main>
 <ITServicesHero/>
 <ITServicesOverview/>
 <AIBusinessAutomation/>
 <HowOurITSolutionsWork/>
 <TechnologyExpertise/>
 <WhyChooseBoroFirstIT/>
 <IndustriesWeServe/>
 <CaseStudies/>
 <FinalITCTA/>
</main>

 </>
  )
}

export default ItService 
