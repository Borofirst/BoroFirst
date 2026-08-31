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


const BusinessLoanPage = () => {
  return (
    <div>
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
    </div>
  )
}

export default BusinessLoanPage
