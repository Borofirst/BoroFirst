import React from "react";
import {
  ShieldCheck,
  FileCheck2,
  RefreshCcw,
  SearchCheck,
  Gem,
  Eye,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import CommonCard from "../common/commonCar";

const goldLoanBenefits = [
  {
    id: "01",
    icon: ShieldCheck,
    title: "Secured Borrowing",
    description:
      "A gold loan is backed by eligible gold collateral, providing a secured borrowing structure subject to the lender's applicable terms and eligibility criteria.",
    tag: "Gold-backed borrowing",
  },
  {
    id: "02",
    icon: FileCheck2,
    title: "Simple Application",
    description:
      "Follow a straightforward application journey with documentation and information required as specified by the applicable lender.",
    tag: "Straightforward journey",
  },
  {
    id: "03",
    icon: RefreshCcw,
    title: "Flexible Repayment",
    description:
      "Explore repayment structures available under the lender's gold loan product and choose an option that aligns with your eligible borrowing requirement.",
    tag: "Explore available options",
  },
  {
    id: "04",
    icon: SearchCheck,
    title: "Gold Evaluation",
    description:
      "Eligible gold is assessed according to applicable valuation procedures, purity requirements, weight and the lender's prescribed guidelines.",
    tag: "Applicable valuation",
  },
  {
    id: "05",
    icon: Gem,
    title: "No Need to Sell Your Gold",
    description:
      "Eligible gold jewellery can be used as collateral for borrowing, allowing you to retain ownership of the pledged gold subject to the loan agreement and repayment obligations.",
    tag: "Use gold as collateral",
  },
  {
    id: "06",
    icon: Eye,
    title: "Transparent Process",
    description:
      "Understand the applicable interest rate, charges, tenure, repayment obligations and other important loan terms before proceeding.",
    tag: "Know your loan terms",
  },
];

const GoldLoanBenefits = () => {
  return (
    <section
      id="gold-loan-benefits"
      aria-labelledby="gold-loan-benefits-title"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#10B981]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#0B2578]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================================
            HEADER
        ================================= */}
        <div className="mx-auto max-w-3xl text-center">
                       <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2 shadow-sm">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/40" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#186A07]" />
                        </span>
          
                        <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
                               
           GOLD LOAN BENEFITS
                        </span>
                      </div>

            {/* Heading */}


                   <h2 className=" text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.45rem]">
                               Designed Around Your{" "}
                        <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent ">
                       Financial Needs
            </span>
                        
                      </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base">
            A gold loan can offer a secured way to explore funding against
            eligible gold collateral. Here are some key aspects to consider
            when evaluating your options.
          </p>
        </div>

        {/* ================================
            BENEFITS GRID
        ================================= */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {goldLoanBenefits.map((benefit,index) => {
       

            return (
           
            <CommonCard key={index} item={benefit} index={index}/>
        
            );
          })}
        </div>

        {/* ================================
            TRUST STRIP
        ================================= */}
        <div className="mt-8 rounded-[24px] border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B2578]/5 text-[#0B2578]">
                <ShieldCheck size={19} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#0F172A]">
                  Understand before you borrow
                </h3>

                <p className="mt-1 max-w-3xl text-xs leading-5 text-[#64748B] sm:text-sm">
                  Loan amount, interest rate, valuation, charges, tenure,
                  repayment structure and other terms vary by lender and are
                  subject to applicable eligibility criteria and policies.
                </p>
              </div>
            </div>

            <a 
              href="tel:+917060162526"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#092064] focus:outline-none focus:ring-2 focus:ring-[#0B2578] focus:ring-offset-2"
            >
              Explore Gold Loan
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mx-auto mt-5 max-w-4xl text-center text-[11px] leading-5 text-[#94A3B8]">
          Product features, eligibility, valuation methods, charges, repayment
          options and other terms are subject to the respective lender's
          policies and applicable terms. Please review the relevant loan
          documents before proceeding.
        </p>
      </div>
    </section>
  );
};

export default GoldLoanBenefits;