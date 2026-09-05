import React from "react";
import PersonalLoanHero from "../../component/personalLoan/PersonalHero";
import TrustStrip from "../../component/common/TrustStrip";
import WhatIsPersonalLoan from "../../component/personalLoan/whatisPersonal";
import PersonalLoanUses from "../../component/personalLoan/whatcanusepersonal";
import WhyChoosePersonalLoan from "../../component/personalLoan/WhyChoosePersonalLoan";
import LoanEligibilityChecker from "../../component/common/EligibilitySection";
import LoanDocuments from "../../component/common/DocumentsSection";
import { personalLoanSalariedDocuments } from "../../data/documnetLoan";
import { personalLoanSelfEmployedDocuments } from "../../data/documnetLoan";
import LoanCalculator from "../../component/common/LoanCalculator";
import HowItWorks from "../../component/common/HowitWork";
import { personalLoanSteps } from "../../data/stepProcess";
import PersonalLoanFeaturesBenefits from "../../component/personalLoan/PersonalLoanfeatureAndbenefite";
import WhyChooseBoroFirst from "../../component/personalLoan/WhyChooseBoroFirst";
import ContactSection from "../../component/common/ContactSection";
import FAQSection from "../../component/common/FAQSection";
import { personalLoanFAQs } from "../../data/HomePageFAQDATA";
import SEO from "../../component/Seo";

const PersonalLoan = () => {
  return (
      <>
      <SEO
        title="Personal Loan | Flexible Financing Solutions | Borofirst"
        description="Explore flexible personal loan solutions from Borofirst designed to support your financial goals with transparent and customer-focused financial services."
        canonical="https://www.borofirst.com/personal-loan"
      />

      <main>
             <PersonalLoanHero />
      <TrustStrip />
      <WhatIsPersonalLoan />
      <PersonalLoanUses />
      <PersonalLoanFeaturesBenefits />
      <WhyChoosePersonalLoan />
      <LoanEligibilityChecker />
      <LoanDocuments
        salariedDocuments={personalLoanSalariedDocuments}
        selfEmployedDocuments={personalLoanSelfEmployedDocuments}
      />
      <LoanCalculator />
      <HowItWorks
        id="personal-loan-process"
        eyebrow="Simple Process"
        title="How Personal Loan Works"
        description="A simple journey from checking your eligibility to receiving your personal loan."
        steps={personalLoanSteps}
      />
      <WhyChooseBoroFirst />
      <ContactSection />
      <FAQSection faqs={personalLoanFAQs} />
      </main>
    </>

  
  );
};

export default PersonalLoan;
