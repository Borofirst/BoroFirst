
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
    <section className="bg-[#F8FAFC] pt-20 pb-10 lg:pt-28 lg:pb-14 ">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid gap-12  lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left */}
          <div
            ref={headingRef}
            className={`reveal-left ${
              headingVisible ? "visible" : ""
            }`}
          >

                     <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#186A07]" />
              </span>

              <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
                Understand Your Loan
              </span>
            </div>

         
            
       
          
                        <h2 className=" text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.45rem]">
                   What Is {" "}
              <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent block">
                  Home Loans{" "}
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