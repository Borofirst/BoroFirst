import ContactSection from "../../component/common/ContactSection"
import LoanEligibilityChecker from "../../component/common/EligibilitySection"
import FAQSection from "../../component/common/FAQSection"
import HowItWorks from "../../component/common/HowitWork"
import LoanCalculator from "../../component/common/LoanCalculator"
import TrustStrip from "../../component/common/TrustStrip"
import EducationLoanDocuments from "../../component/EducationLoan/DocumentSection"
import EducationLoanHero from "../../component/EducationLoan/EducationHero"
import WhyChooseEducationLoan from "../../component/EducationLoan/EducationLoanUseFor"
import EducationLoanWhatIs from "../../component/EducationLoan/whatIsEducationLoan"
import WhyChooseBorofirstEducationLoan from "../../component/EducationLoan/whyChooseBorofirst"
import SEO from "../../component/Seo"
import { educationLoanFAQs } from "../../data/HomePageFAQDATA"
import { educationLoanSteps } from "../../data/stepProcess"


export const EducationLoanPage=()=>{
    return(
<>
          <SEO
      title="Education Loan | Borofirst"
    description=
      "Explore loan against property solutions from BOROFIRST and unlock the financial value of your property."
    canonical= "https://www.borofirst.com/education-loan"
      />

      <main>
          <EducationLoanHero/>
            <TrustStrip/>
            <EducationLoanWhatIs/>
            <WhyChooseEducationLoan/>
            <LoanEligibilityChecker/>
           <EducationLoanDocuments/>
           <LoanCalculator/>
          <HowItWorks
  id="education-loan-process"
  eyebrow="Simple Process"
  title="How Education Loan Works"
  description="A simple journey from checking your eligibility to receiving your Education loan."
  steps={educationLoanSteps}
/>
<WhyChooseBorofirstEducationLoan/>
<ContactSection/>
<FAQSection faqs={educationLoanFAQs}/>
   </main>
   </>

    )
}
