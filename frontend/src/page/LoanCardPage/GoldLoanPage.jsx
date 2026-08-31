import React from 'react'
import GoldLoanHero from '../../component/GoldLoan/GoldLoan'
import TrustStrip from '../../component/common/TrustStrip'
import GoldLoanWhatIs from '../../component/GoldLoan/WhatIsGoldLoan'
import WhyChooseLoanBlue from '../../component/common/whyChooseLoan2'
import { goldLoanContent } from '../../data/WhyCooseData'
import GoldLoanBenefits from '../../component/GoldLoan/GoldLoanBenefite'
import GoldLoanAmountEstimator from '../../component/GoldLoan/EstimatGoldLoan'
import GoldLoanDocuments from '../../component/GoldLoan/document'
import LoanCalculator from '../../component/common/LoanCalculator'
import HowItWorks from '../../component/common/HowitWork'
import {goldLoanProcess} from '../../data/stepProcess'
import ContactSection from '../../component/common/ContactSection'
import FAQSection from '../../component/common/FAQSection'
import { goldLoanFAQs } from '../../data/HomePageFAQDATA'


const GoldLoanPage = () => {
  return (
    <div>
      <GoldLoanHero/>
      <TrustStrip/>
      <GoldLoanWhatIs/>
     <WhyChooseLoanBlue content={goldLoanContent}/>
     <GoldLoanBenefits/>
     <GoldLoanAmountEstimator/>
     <LoanCalculator/>
     <GoldLoanDocuments/>
                <HowItWorks   id="Gold-loan-process"
        eyebrow="Simple Process"
        title="How Gold Loan Works"
        description="A simple journey from checking your eligibility to receiving your Gold loan."
        steps={goldLoanProcess}
        />
        <ContactSection/>
<FAQSection faqs={goldLoanFAQs}/>

    </div>
  )
}

export default GoldLoanPage
