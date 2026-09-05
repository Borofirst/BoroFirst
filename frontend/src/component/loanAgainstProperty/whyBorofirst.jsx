//  bg-linear-to-r from-[#186A07] to-[#0B2578]
// text-[#186A07]

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileCheck2,
  Headphones,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import WhyChooseSection from "../common/WhyChooseHomeAndLAP";

const reasons = [
  {
    number: "01",
    icon: Building2,
    title: "Multiple Lending Options",
    text: "Explore suitable loan options based on your requirements and profile.",
  },
  {
    number: "02",
    icon: UserRoundCheck,
    title: "Personalised Guidance",
    text: "Get help understanding your options, requirements and next steps.",
  },
  {
    number: "03",
    icon: FileCheck2,
    title: "Clear Process",
    text: "Understand the application and document process without unnecessary complexity.",
  },
  {
    number: "04",
    icon: Headphones,
    title: "End-to-End Support",
    text: "Get guidance throughout your journey, from enquiry to the next stages.",
  },
];

const WhyBoroFirstLAP = () => {
  return (
<WhyChooseSection
  eyebrow="Why Choose BOROFIRST"

  title="Why Choose BOROFIRST"
  highlight="for Loan Against Property?"

  description="We help simplify the Loan Against Property journey with clear information, suitable lending options and guidance throughout the process."

  image="/LAPWhyChoose.png"
  imageAlt="Indian couple standing near their property"

  reasons={reasons}

  brandMessage="Clear information, suitable options and support throughout your Loan Against Property journey."

  highlightTitle="Your Property. Your Goals. Clearer Guidance."
  highlightText="Understand your financing options and take your next step with greater confidence."

  ctaTitle="Ready to Explore Your Options?"
  ctaDescription="Take the first step toward finding a Loan Against Property solution that fits your needs."

  ctaText="Talk to an Expert"
  ctaHref="tel:+917060162526"
/>
  );
};

export default WhyBoroFirstLAP;
