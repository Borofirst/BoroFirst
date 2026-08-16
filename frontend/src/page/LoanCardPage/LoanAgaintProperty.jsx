import React from 'react'
import LAPHero from '../../component/loanAgainstProperty/LAPHero'
import WhatIsLAP from '../../component/loanAgainstProperty/whatisLAP'
import TrustStrip from '../../component/HomeLOan/TrustStrip'
import LAPBenefits from '../../component/loanAgainstProperty/LAPFuture'
import LoanCalculator from '../LoanCalculator'
import WhyBoroFirstLAP from '../../component/loanAgainstProperty/whyBorofirst'
import FAQSection from '../../component/common/FAQSection'
import {lapFAQs} from "../../data/HomePageFAQDATA"
import LoanDocuments from '../../component/common/DocumentsSection'
import {LAPsalariedDocuments} from "../../data/documnetLoan"
import {LAPselfEmployedDocuments} from "../../data/documnetLoan"

const LoanAgaintProperty = () => {
  return (
    <div>
      <LAPHero/>
      <TrustStrip/>
      <WhatIsLAP/>
      <LAPBenefits/>
      <LoanDocuments salariedDocuments={LAPsalariedDocuments} selfEmployedDocuments={LAPselfEmployedDocuments}/>
       <LoanCalculator/>
       <WhyBoroFirstLAP/>
       <FAQSection faqs={lapFAQs}/>

    </div>
  )
}

export default LoanAgaintProperty
