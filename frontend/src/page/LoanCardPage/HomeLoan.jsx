import React from "react";
import HomeLoanHero from "../../component/HomeLOan/HomeLoanHero";
import TrustStrip from "../../component/HomeLOan/TrustStrip";
import WhatIsHomeLoan from "../../component/HomeLOan/WhatIsHomeLoan";
import LoanUses from "../../component/HomeLOan/LoanUses";
import HomeLoanBenefits from "../../component/HomeLOan/HomeLoanBenefite";
import EligibilitySection from "../../component/HomeLOan/EligibilitySection";
import HowItWorks from "../../component/HomeLOan/HowItWorks";
import WhyBoroFirst from "../../component/HomeLOan/WhyBoroFirst";
import LoanCalculator from "../LoanCalculator";
import HomeLoanEligibility from "../../component/HomeLOan/EligibilitySection";
import FAQSection from "../../component/common/FAQSection";
import {HOmeLoanfaqs} from "../../data/HomePageFAQDATA"
import LoanDocuments from "../../component/common/DocumentsSection";
import {HomesalariedDocuments} from "../../data/documnetLoan"
import {HomeselfEmployedDocuments} from "../../data/documnetLoan"


export const HomeLoan = () => {
  return (
    <>
      <HomeLoanHero />
      <TrustStrip />
      <WhatIsHomeLoan />
      <LoanUses />
      <HomeLoanBenefits />
      <HomeLoanEligibility />
      <HowItWorks />
      <LoanDocuments salariedDocuments={HomesalariedDocuments} EmployedDocuments={HomeselfEmployedDocuments}  />
      <WhyBoroFirst />
      <LoanCalculator />
      <section id="faq">
        <FAQSection faqs={HOmeLoanfaqs}/>
      </section>
    </>
  );
};

// export default HomeLoan;
