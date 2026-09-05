import {
  Building2,
  UserRoundCheck,
  FileCheck2,
  Headphones,
} from "lucide-react";
import WhyChooseSection from "../common/WhyChooseHomeAndLAP";


const WhyBoroFirst = () => {
  const homeLoanReasons = [
    {
      number: "01",
      icon: Building2,
      title: "Multiple Lending Options",
      text: "Explore suitable home loan options based on your requirements and financial profile.",
    },
    {
      number: "02",
      icon: UserRoundCheck,
      title: "Personalised Guidance",
      text: "Get help understanding your home loan options, requirements and next steps.",
    },
    {
      number: "03",
      icon: FileCheck2,
      title: "Clear Process",
      text: "Understand eligibility, documentation and the application process with greater clarity.",
    },
    {
      number: "04",
      icon: Headphones,
      title: "End-to-End Support",
      text: "Get guidance throughout your home loan journey, from enquiry to the next stages.",
    },
  ];

  return (
    <WhyChooseSection
      eyebrow="Why Choose BOROFIRST"

      title="Why Choose BOROFIRST"
      highlight="for Your Home Loan?"

      description="Buying a home is one of life's most important financial decisions. We help simplify the financing journey with clear information, suitable options and structured support."

      image="/home-loan-family-keys.png"
      imageAlt="Indian family standing outside their new home"

      reasons={homeLoanReasons}

      brandMessage="Clear information, suitable home loan options and support throughout your journey."

      highlightTitle="Your Home. Your Goals. Clearer Guidance."
      highlightText="Understand your home loan options and take your next step with greater clarity and confidence."

      trustItems={[
        "Clear Information",
        "Personalised Guidance",
        "Customer-Focused Support",
      ]}

      ctaTitle="Ready to Explore Your Home Loan Options?"
      ctaDescription="Take the first step toward finding a home loan solution that fits your requirements."

      ctaText="Talk to an Expert"
      ctaHref="tel:+917060162526"
    />
  );
};

export default WhyBoroFirst;