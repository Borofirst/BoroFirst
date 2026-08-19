import React from "react";
import PersonalLoanHero from "../../component/personalLoan/PersonalHero";
import TrustStrip from "../../component/common/TrustStrip";
import WhatIsPersonalLoan from "../../component/personalLoan/whatisPersonal";
import PersonalLoanUses from "../../component/personalLoan/whatcanusepersonal";
import WhyChoosePersonalLoan from "../../component/personalLoan/WhyChoosePersonalLoan";
import LoanEligibilityChecker from "../../component/common/EligibilitySection";
import LoanDocuments from "../../component/common/DocumentsSection";
import {personalLoanSalariedDocuments} from "../../data/documnetLoan"
import {personalLoanSelfEmployedDocuments} from "../../data/documnetLoan"
import LoanCalculator from "../../component/common/LoanCalculator";
import HowItWorks from "../../component/common/HowitWork";
import {personalLoanSteps} from "../../data/stepProcess"
import PersonalLoanFeaturesBenefits from "../../component/personalLoan/PersonalLoanfeatureAndbenefite";
import WhyChooseBoroFirst from "../../component/personalLoan/WhyChooseBoroFirst";
import ContactSection from "../../component/common/ContactSection";
import FAQSection from "../../component/common/FAQSection";
import { personalLoanFAQs } from "../../data/HomePageFAQDATA";

const PersonalLoan = () => {
  return (
    <div>
      <PersonalLoanHero />
      <TrustStrip/>
      <WhatIsPersonalLoan/>
      <PersonalLoanUses/>
      <PersonalLoanFeaturesBenefits/>
      <WhyChoosePersonalLoan/>
      <LoanEligibilityChecker/>
      <LoanDocuments salariedDocuments={personalLoanSalariedDocuments} selfEmployedDocuments={personalLoanSalariedDocuments}/>
      <LoanCalculator/>
      <HowItWorks
  id="personal-loan-process"
  eyebrow="Simple Process"
  title="How Personal Loan Works"
  description="A simple journey from checking your eligibility to receiving your personal loan."
  steps={personalLoanSteps}
/>
<WhyChooseBoroFirst/>
<ContactSection/>
<FAQSection faqs={personalLoanFAQs}/>

    </div>
  );
};

export default PersonalLoan;
