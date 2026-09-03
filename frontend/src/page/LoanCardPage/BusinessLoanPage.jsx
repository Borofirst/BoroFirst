import React from 'react'
import BusinessLoanHero from '../../component/BusinessLoan/BusinessLoanHero'
import WhatIsBusinessLoan from '../../component/BusinessLoan/whatIsBusinessLoan'
import TrustStrip from '../../component/common/TrustStrip'
import BusinessLoanUses from '../../component/BusinessLoan/BusinessLoanuse'

import LoanEligibilityChecker from '../../component/common/EligibilitySection'
import BusinessLoanDocuments from '../../component/BusinessLoan/BusinessDocument'
import LoanCalculator from '../../component/common/LoanCalculator'
import HowItWorks from '../../component/common/HowitWork'
import { businessLoanSteps } from '../../data/stepProcess'
import WhyChooseBorofirst from '../../component/BusinessLoan/WhyBoroFirst'
import ContactSection from '../../component/common/ContactSection'
import { businessLoanFaqs } from '../../data/HomePageFAQDATA'
import FAQSection from '../../component/common/FAQSection'
import { businessLoanContent } from '../../data/WhyCooseData'
import WhyChooseLoanBlue from '../../component/common/whyChooseLoan2'
import SEO from '../../component/Seo'


const BusinessLoanPage = () => {
  return (
    <>
        <SEO
        title="Business Loan | Grow Your Business | Borofirst"
        description="Explore business financing solutions from Borofirst designed to support business expansion, working capital and growth."
        canonical="https://borofirst.com/business-loan"
      />

      <main>
          <BusinessLoanHero/>
        <TrustStrip/>
        <WhatIsBusinessLoan/>
        <BusinessLoanUses/>
        <WhyChooseLoanBlue content={businessLoanContent} />
        <LoanEligibilityChecker/>
        <BusinessLoanDocuments/>
        <LoanCalculator/>
           <HowItWorks   id="Business-loan-process"
        eyebrow="Simple Process"
        title="How Business Loan Works"
        description="A simple journey from checking your eligibility to receiving your Business loan."
        steps={businessLoanSteps}
        />

<WhyChooseBorofirst/>
<ContactSection/>
<FAQSection faqs={businessLoanFaqs}/>
      </main>
    
  </>
  )
}

export default BusinessLoanPage
