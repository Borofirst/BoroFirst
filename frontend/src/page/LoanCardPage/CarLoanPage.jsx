import React from 'react'
import TrustStrip from '../../component/common/TrustStrip';

import CarLoanWhatIsSection from '../../component/carLoan/WhatisCarloan';
import WhyChooseLoanBlue from '../../component/common/whyChooseLoan2';
import LoanEligibilityChecker from '../../component/common/EligibilitySection';
import DocumentsRequired from '../../component/carLoan/CarDocument';
import LoanCalculator from '../../component/common/LoanCalculator';
import HowItWorks from '../../component/common/HowitWork';
import { carLoanProcess } from '../../data/stepProcess';
import WhyChooseBorofirst from '../../component/carLoan/whyChooseBoro';
import ContactSection from '../../component/common/ContactSection';
import FAQSection from '../../component/common/FAQSection';
import { carLoanFAQs } from '../../data/HomePageFAQDATA';
import CarLoanHeroSpotlight from '../../component/carLoan/carLoanHero';
import { carLoanContent } from '../../data/WhyCooseData';

const CarLoanPage = () => {
  return (
    <div>
      <CarLoanHeroSpotlight/>
      <TrustStrip/>
      <CarLoanWhatIsSection/>
      <WhyChooseLoanBlue content={carLoanContent}  />
      <LoanEligibilityChecker/>
      <DocumentsRequired/>
      <LoanCalculator/>
      <HowItWorks   id="Car-loan-process"
        eyebrow="Simple Process"
        title="How Car Loan Works"
        description="A simple journey from checking your eligibility to receiving your Car loan."
        steps={carLoanProcess}
        />
        <WhyChooseBorofirst/>
        <ContactSection/>
        <FAQSection faqs={carLoanFAQs}/>


    </div>
  )
}

export default CarLoanPage;
