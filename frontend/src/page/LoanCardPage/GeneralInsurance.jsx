import React from 'react'
import GeneralInsuranceHero from '../../component/GeneralInsurance/GeneralHero'
import TrustStrip from '../../component/common/TrustStrip';
import InsuranceCategorySelector from '../../component/GeneralInsurance/GeneralCategory';
import WhatIsGeneralInsurance from '../../component/GeneralInsurance/WhatIsGeneralInsuranse';
import WhyDoYouNeedInsurance from '../../component/GeneralInsurance/WhyGeneral';
// import InsuranceBenefits from '../../component/GeneralInsurance/InsuranceBenefits';
import { insuranceSteps } from '../../data/stepProcess';
import HowItWorks from '../../component/common/HowitWork';
import WhyChooseBOROFIRST from '../../component/GeneralInsurance/WhyChooseBoro';
import InsuranceComparison from '../../component/GeneralInsurance/InsuranceCampare';
import ContactSection from '../../component/common/ContactSection';
import FAQSection from '../../component/common/FAQSection';
import { generalInsuranceFAQs } from '../../data/HomePageFAQDATA';
import SEO from '../../component/Seo';



const GeneralInsurance = () => {
  return (
    <>
    <SEO
  title="General Insurance | Protect What Matters Most | Borofirst"
  description="Explore general insurance solutions with Borofirst designed to help protect your vehicle, property, health and valuable assets with reliable coverage and customer-focused support."
  canonical="https://www.borofirst.com/general-insurance"
/>
<main>
  <GeneralInsuranceHero/>
      <TrustStrip/>
      <InsuranceCategorySelector/>
      <WhatIsGeneralInsurance/>
      <WhyDoYouNeedInsurance/>
            <HowItWorks
  id="General-Insurance-process"
  eyebrow="Simple Process"
  title="How General Insurance Works"
  description=" From choosing the right type of protection to receiving your
            policy, the insurance journey can be understood in four simple
            steps."
  steps={insuranceSteps}
/>
<WhyChooseBOROFIRST/>
<InsuranceComparison/>
<ContactSection/>
<FAQSection faqs={generalInsuranceFAQs}/>
</main>  
    </>
  )
}

export default GeneralInsurance;
