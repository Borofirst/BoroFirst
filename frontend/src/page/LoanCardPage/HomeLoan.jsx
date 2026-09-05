import React from "react";
import HomeLoanHero from "../../component/HomeLOan/HomeLoanHero";
import TrustStrip from "../../component/common/TrustStrip";
import WhatIsHomeLoan from "../../component/HomeLOan/WhatIsHomeLoan";
import LoanUses from "../../component/HomeLOan/LoanUses";
import HomeLoanBenefits from "../../component/HomeLOan/HomeLoanBenefite";

import WhyBoroFirst from "../../component/HomeLOan/WhyBoroFirst";
import LoanCalculator from "../../component/common/LoanCalculator";
import FAQSection from "../../component/common/FAQSection";
import { HOmeLoanfaqs } from "../../data/HomePageFAQDATA";
import LoanDocuments from "../../component/common/DocumentsSection";
import { HomesalariedDocuments } from "../../data/documnetLoan";
import { HomeselfEmployedDocuments } from "../../data/documnetLoan";
import LoanEligibilityChecker from "../../component/common/EligibilitySection";
import {homeLoanSteps} from "../../data/stepProcess"
import HowItWorks from "../../component/common/HowitWork";
import ContactSection from "../../component/common/ContactSection";
import SEO from "../../component/Seo";

export const HomeLoan = () => {
  return (

        <>
      <SEO
        title="Home Loan | Finance Your Dream Home | Borofirst"
        description="Explore home loan solutions with Borofirst and take the next step toward financing your dream home."
        canonical="https://www.borofirst.com/home-loan"
      />
      <main>
             <HomeLoanHero/>
      <TrustStrip />
      <WhatIsHomeLoan />
      <LoanUses />
      <HomeLoanBenefits />
      <LoanEligibilityChecker />
      {/* <HowItWorks /> */}
        <LoanDocuments
        salariedDocuments={HomesalariedDocuments}
        EmployedDocuments={HomeselfEmployedDocuments}
      />
       <LoanCalculator />
      <HowItWorks
  title="How Home Loan Works"
  description="A straightforward journey from your home financing requirement to loan disbursal."
  steps={homeLoanSteps}
/>

   
      <WhyBoroFirst />
       <ContactSection/>
      <section id="faq">
        <FAQSection faqs={HOmeLoanfaqs} />
      </section>
      </main>
    </>
  );
};


