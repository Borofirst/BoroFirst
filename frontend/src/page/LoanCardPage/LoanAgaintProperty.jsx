import React from "react";
import LAPHero from "../../component/loanAgainstProperty/LAPHero";
import WhatIsLAP from "../../component/loanAgainstProperty/whatisLAP";
import TrustStrip from "../../component/common/TrustStrip";
import LAPBenefits from "../../component/loanAgainstProperty/LAPFuture";
import LoanCalculator from "../../component/common/LoanCalculator";
import WhyBoroFirstLAP from "../../component/loanAgainstProperty/whyBorofirst";
import FAQSection from "../../component/common/FAQSection";
import { lapFAQs } from "../../data/HomePageFAQDATA";
import LoanDocuments from "../../component/common/DocumentsSection";
import { LAPsalariedDocuments } from "../../data/documnetLoan";
import { LAPselfEmployedDocuments } from "../../data/documnetLoan";
import HowItWorks from "../../component/common/HowitWork";
import {lapSteps} from "../../data/stepProcess"
import LoanAgainstPropertyUses from "../../component/loanAgainstProperty/whatIsLAPuseFor";
import LoanEligibilityChecker from "../../component/common/EligibilitySection";
import ContactSection from "../../component/common/ContactSection";
import SEO from "../../component/Seo";

const LoanAgaintProperty = () => {
  return (
     <>
          <SEO
      title="Loan Against Property | BOROFIRST"
    description=
      "Explore loan against property solutions from BOROFIRST and unlock the financial value of your property."
    canonical= "https://borofirst.com/loan-againt-property"
      />
      <main>
      <LAPHero />
      <TrustStrip />
      <WhatIsLAP />
      <LoanAgainstPropertyUses/>
      <LAPBenefits/>
      <LoanEligibilityChecker/>
      <LoanDocuments
        salariedDocuments={LAPsalariedDocuments}
        selfEmployedDocuments={LAPselfEmployedDocuments}
      />
      <LoanCalculator />
      <HowItWorks
  title="How Loan Against Property Works"
  description="A straightforward journey from property assessment to lender approval and disbursal."
  steps={lapSteps}
/>
      <WhyBoroFirstLAP />
      <ContactSection/>
      <FAQSection faqs={lapFAQs} />
   </main>
   </>
  );
};

export default LoanAgaintProperty;
