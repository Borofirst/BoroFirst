
import React from "react";
import {
  BriefcaseBusiness,
  TrendingUp,
  WalletCards,
  Factory,
  BadgeIndianRupee,
  Gauge,
} from "lucide-react";

const featureCards = [
  {
    icon: BriefcaseBusiness,
    title: "Built for Business Needs",
    description:
      "Designed to help eligible businesses manage working capital, operational expenses, expansion, and other business requirements.",
  },
  {
    icon: WalletCards,
    title: "Flexible Business Funding",
    description:
      "Access financing options that can support inventory purchases, supplier payments, marketing, technology, and day-to-day operations.",
  },
  {
    icon: TrendingUp,
    title: "Support Business Growth",
    description:
      "Use suitable financing to pursue expansion plans, increase capacity, enter new markets, or take advantage of growth opportunities.",
  },
  {
    icon: Factory,
    title: "Equipment & Expansion",
    description:
      "Funding may help eligible businesses invest in machinery, equipment, infrastructure, or other assets required for growth.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Business-Focused Financing",
    description:
      "Loan amount, interest rate, tenure, and other terms are determined based on the business and applicant's eligibility profile.",
  },
  {
    icon: Gauge,
    title: "Profile-Based Eligibility",
    description:
      "Eligibility is generally assessed using factors such as business vintage, turnover, income, credit profile, and lender-specific criteria.",
  },
];

const WhatIsBusinessLoan = () => {
  return (
    <section
      id="what-is-business-loan"
      className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute
          -left-40 top-20
          h-80 w-80
          rounded-full
          bg-emerald-300/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none absolute
          -right-40 bottom-20
          h-96 w-96
          rounded-full
          bg-blue-300/10
          blur-3xl
        "
      />

      {/* Subtle grid */}
    

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-20">
          
                                          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2 shadow-sm">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/40" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#186A07]" />
                        </span>
          
                        <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
                               
            Understanding Business Loans
                        </span>
                      </div>

            {/* Heading */}


                   <h2 className=" text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.45rem]">
                             What Is{" "}
                        <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent ">
                             Business Loan?
                        </span>
                      
                      </h2>

          {/* Strong Subheading */}
          <p
            className="
              animate-fade-up
              mt-4
              text-lg font-semibold
              text-[#0B2578]
              sm:text-xl
            "
          >
            Capital to help you{" "}
            <span className="text-[#2c8e18]">
              build, manage and grow your business.
            </span>
          </p>

          {/* Description */}
          <p
            className="
              animate-fade-up
              mx-auto mt-5
              max-w-3xl
              text-sm leading-7
              text-[#64748B]
              sm:text-base
            "
          >
            A business loan is a financing solution that can provide eligible
            businesses with access to capital for a variety of business
            requirements. From managing working capital and purchasing
            inventory to expanding operations, investing in equipment, or
            pursuing new opportunities, suitable business financing can give
            your plans the financial support they need.
          </p>

          <p
            className="
              animate-fade-up
              mx-auto mt-4
              max-w-2xl
              text-sm leading-7
              text-[#64748B]
            "
          >
            At{" "}
            <span className="font-bold text-[#0F172A]">
              BOROFIRST
            </span>
            , we help you explore business financing options through our
            lending partner network based on your business requirements,
            financial profile, and eligibility.
          </p>
        </div>

        {/* =====================================================
            FEATURE CARDS
        ====================================================== */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {featureCards.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                className="
                  animate-fade-up
                  group
                  rounded-2xl
                  border border-[#E2E8F0]
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-emerald-200
                  hover:shadow-xl
                  hover:shadow-slate-200/50
                "
              >
                {/* Icon */}
                <div
                  className="
                    mb-4
                    flex h-11 w-11
                    items-center justify-center
                    rounded-xl
                    bg-emerald-50
                    text-[#2c8e18]
                    transition-all
                    duration-300
                    ease-out
                    group-hover:scale-110
                    group-hover:bg-[#118A09]
                    group-hover:text-white
                    group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]
                  "
                >
                  <Icon size={21} />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#0F172A]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM HIGHLIGHT
        ====================================================== */}

        <div
          className="
            mx-auto mt-12
            max-w-4xl
            rounded-2xl
            border border-emerald-100
            bg-emerald-50/70
            px-6 py-5
            text-center
            sm:px-8
          "
        >
          <p className="text-sm font-semibold leading-6 text-[#0F172A] sm:text-base">
            Your business has the vision.
            <span className="text-[#118A09]">
              {" "}The right financing can help turn that vision into action.
            </span>
          </p>

          <p className="mt-1 text-xs leading-5 text-[#64748B]">
            Loan approval, amount, interest rate, tenure, and terms are
            subject to the respective lender's eligibility criteria and
            policies.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhatIsBusinessLoan;