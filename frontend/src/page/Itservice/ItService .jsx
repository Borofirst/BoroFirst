import AIBusinessAutomation from "../../component/ItService/AIautomation"
import FinalITCTA from "../../component/ItService/CTA"
import CaseStudies from "../../component/ItService/feaitureAndCasStudy"
import HowOurITSolutionsWork from "../../component/ItService/HowAreItwork"
import IndustriesWeServe from "../../component/ItService/IndustryServe"
import ITServicesHero from "../../component/ItService/ItServiceHero"
import ITServicesOverview from "../../component/ItService/ItserviceOverview"
import TechnologyExpertise from "../../component/ItService/TechnicalExpart"
import WhyChooseBoroFirstIT from "../../component/ItService/WhyChooseBoro"


const ItService  = () => {
  return (

 <>
 <ITServicesHero/>
 <ITServicesOverview/>
 <AIBusinessAutomation/>
 <HowOurITSolutionsWork/>
 <TechnologyExpertise/>
 <WhyChooseBoroFirstIT/>
 <IndustriesWeServe/>
 <CaseStudies/>
 <FinalITCTA/>
 </>
  )
}

export default ItService 
