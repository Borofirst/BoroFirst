
import React from "react";
import {
  BookOpen,
  ShieldCheck,
  Wallet,
  CalendarDays,
  IndianRupee,
  CheckCircle2,
  Gauge,
  ArrowRight,


} from "lucide-react";

const featureCards = [
  {
    icon: ShieldCheck,
    title: "Generally Unsecured",
    description:
      "No collateral is generally required, subject to lender policies.",
  },
  {
    icon: Wallet,
    title: "Flexible Usage",
    description:
      "Use the funds for a variety of eligible personal needs.",
  },
  {
    icon: CalendarDays,
    title: "Monthly EMIs",
    description:
      "Repay the loan through structured monthly instalments.",
  },
  {
    icon: Gauge,
    title: "Profile Based",
    description:
      "Loan amount and terms depend on your financial profile.",
  },
];


const WhatIsPersonalLoan = () => {


  return (
    <section
      id="what-is-personal-loan"
      className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div
      
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl"
      />

      <div
       
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-300/10 blur-3xl"
      />

      {/* Subtle grid */}
      <div
      
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-20">

          {/* Badge */}
          <div
            className="
              animate-fade-up
              mb-5 inline-flex items-center gap-2
              rounded-full border border-emerald-200
              bg-emerald-50 px-4 py-2
              text-xs font-bold uppercase tracking-wider
              text-emerald-700
              sm:text-sm
            "
          >
            <BookOpen size={16} />

            Understanding Personal Loans
          </div>

          {/* Heading */}
          <h2
            className="
              animate-fade-up
              text-3xl font-extrabold
              tracking-tight text-[#0F172A]
              sm:text-4xl
              lg:text-5xl
          "
          >
            What is a{" "}
            <span className="text-[#186A07]">
              Personal Loan?
            </span>
          </h2>

          <p
            className="
              animate-fade-up
              mt-4 text-lg font-semibold
              text-[#0B2578]
              sm:text-xl
            "
          >
            A simple way to manage your important{" "}
            <span className="text-[#2c8e18]">
              financial needs.
            </span>
          </p>

          <p
            className="
              animate-fade-up
              mx-auto mt-5 max-w-3xl
              text-sm leading-7 text-[#64748B]
              sm:text-base
            "
          >
            A personal loan is an unsecured loan that can help you
            meet a wide range of personal financial requirements
            without generally pledging an asset as collateral.
            Depending on your profile and the lender's eligibility
            criteria, you may be able to borrow a suitable amount
            and repay it through convenient monthly EMIs.
          </p>
        </div>

   



            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">

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
                      group rounded-2xl
                      border border-[#E2E8F0]
                      bg-white p-5
                      shadow-sm
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-emerald-200
                      hover:shadow-xl
                      hover:shadow-slate-200/50
                    "
                  >
                    <div
                      className="
                        mb-4 flex h-11 w-11
                        items-center justify-center
                        rounded-xl
                        bg-emerald-50
                        text-[#2c8e18]
                        transition-all duration-300 ease-out
                      group-hover:bg-[#118A09]
                      group-hover:text-white
                        group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]
                        group-hover:scale-110
                      "
                    >
                      <Icon size={21} />
                    </div>

                    <h3 className="text-base font-bold text-[#0F172A]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#64748B]">
                      {feature.description}
                    </p>
                  </div>
                );
              })}

            </div>

       
          {/* </div> */}
      </div>

    
    </section>
  );
};

export default WhatIsPersonalLoan;