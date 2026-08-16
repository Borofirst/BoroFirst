import {
  CalendarClock,
  Percent,
  IndianRupee,
  FileCheck2,
  Zap,
  UserRoundCheck,
} from "lucide-react";
import { RevealCard } from "../../hook/RevealCard";
import useReveal from "../../hook/useReveal";

const HomeLoanBenefits = () => {
const [ref, visible] = useReveal();
  const benefits = [
    {
      icon: CalendarClock,
      title: "Longer Repayment Tenure",
      text: "Longer repayment periods can help make monthly EMIs more manageable",
    },
    {
      icon: Percent,
      title: "Competitive Interest Rates",
      text: "Explore home loan options with competitive interest rates from suitable lending partners.",
    },
    {
      icon: IndianRupee,
      title: "High Loan Amount",
      text: "Access financing based on eligibility and property value.",
    },
    {
      icon: FileCheck2,
      title: "Simple Documentation",
      text: "We follow a streamlined documentation process fro your home loan.",
    },
    {
      icon: Zap,
      title: "Multiple Property Options",
      text: "Home loans may be available for purchasing, constructing, or eligible improvements to residential properties..",
    },
    {
      icon: UserRoundCheck,
      title: "Dedicated Assistance",
      text: "Get proper guidance throughout your loan journey.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        
        <div ref={ref} className={`reveal text-center  mx-auto max-w-3xl   ${
        visible ? "visible" : ""
             }  `}>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2c8e18]">
            Home Loan Benefits
          </p>

         
           <h2 className="mt-5 text-3xl font-extrabold text-slate-900 leading-tight tracking-tight  sm:text-4xl lg:text-[48px]">
              Key Features & Benefits
            <span className="block text-[#186A07]">
              of Home Loans
            </span>
          </h2>

          <p className="mt-5 leading-7 text-slate-500">
            Explore loan features designed to make your home financing journey
            simpler and more structured.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
           <RevealCard  
                       key={benefit.title}
                       card={benefit}
                       index={benefit}
                     />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeLoanBenefits;