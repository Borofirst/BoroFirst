
import {
  Home,
  Construction,
  Paintbrush,
} from "lucide-react";

import useReveal from "../../hook/useReveal";
import { RevealCard } from "../../hook/RevealCard";

const cards = [
  {
    icon: Home,
    title: "Purchase a Home",
    text: "Finance the purchase of your new residential property.",
  },
  {
    icon: Construction,
    title: "Construct a Home",
    text: "Fund the construction of your own house.",
  },
  {
    icon: Paintbrush,
    title: "Renovate Your Home",
    text: "Finance eligible home improvement requirements.",
  },
];

const WhatIsHomeLoan = () => {
  const [headingRef, headingVisible] = useReveal();
  const [contentRef, contentVisible] = useReveal();

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid gap-12  lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left */}
          <div
            ref={headingRef}
            className={`reveal-left ${
              headingVisible ? "visible" : ""
            }`}
          >
                <p className="mb-4 text-sm font-bold rounded-full text-start   uppercase tracking-[0.18em] text-[#186A07]">
              Understand Your Loan
            </p>

         
            
              <h2 className="mt-5 text-3xl font-extrabold text-slate-900 leading-tight tracking-tight  sm:text-4xl lg:text-[48px]">
              What Is 
            <span className="block text-[#186A07]">
               Home Loans
            </span>
          </h2>
          </div>

          {/* Right */}
          <div
            ref={contentRef}
            className={`reveal-right ${
              contentVisible ? "visible" : ""
            }`}
          >
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
         A Home Loan is a loan that helps you turn your dream of owning a home into reality. It provides the financial support you need to buy, construct, renovate, or extend a residential property without paying the entire cost upfront.
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Loan availability, interest rates, tenure and eligibility depend
              on the lender and the applicant's financial profile.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((card, index) => (
            <RevealCard
              key={card.title}
              card={card}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatIsHomeLoan;