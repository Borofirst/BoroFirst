import React from "react";
import {
  Zap,
  Wallet,
  CalendarDays,
  ShieldCheck,
  SlidersHorizontal,
  FileCheck2,
  Clock3,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Quick & Simple Process",
    description:
      "Get started with a straightforward application journey designed to make the process easier.",
  },
  {
    icon: Wallet,
    title: "Flexible Funding",
    description:
      "Access funds for a wide range of eligible personal financial requirements.",
  },
  {
    icon: CalendarDays,
    title: "Flexible Repayment Tenure",
    description:
      "Choose a suitable repayment tenure based on your profile and applicable lender options.",
  },
  {
    icon: ShieldCheck,
    title: "No Collateral Generally Required",
    description:
      "Personal loans are generally unsecured, so collateral is typically not required, subject to lender policies.",
  },
  {
    icon: SlidersHorizontal,
    title: "Profile-Based Loan Options",
    description:
      "Loan amount, interest rate and repayment terms may vary based on your financial profile.",
  },
  {
    icon: FileCheck2,
    title: "Simple Documentation",
    description:
      "Provide commonly required identity, address, income and banking documents for assessment.",
  },
];

const benefits = [
  {
    icon: Clock3,
    title: "Save Time",
    text: "A streamlined application process helps you move through the initial assessment efficiently.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Journey",
    text: "Understand the key loan details and requirements before proceeding with your application.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Process",
    text: "Your application is assessed according to applicable lender policies and eligibility criteria.",
  },
];

const PersonalLoanFeaturesBenefits = () => {
  const handleEligibility = () => {
    document
      .getElementById("loan-eligibility")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-emerald-100/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mx-auto max-w-3xl text-center">

          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
            <BadgeCheck size={15} />
            Personal Loan Benefits
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Features Designed Around
            <span className="block text-[#186A07]">
              Your Financial Needs
            </span>
             For The personal Laon
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base">
            Explore the features and benefits that can make a personal
            loan a convenient option for managing eligible planned or
            unexpected financial requirements.
          </p>
        </div>

        {/* =====================================================
            FEATURE CARDS
        ====================================================== */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/50 sm:p-7"
              >

                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#118A09] transition-all duration-500 group-hover:w-full" />

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 bg-emerald-50
                    text-[#2c8e18]
                        transition-all duration-300 ease-out
                      group-hover:bg-[#118A09]
                      group-hover:text-white
                        group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]
                        group-hover:scale-110">
                  <Icon size={22} strokeWidth={2} />
                </div>

                {/* Number */}
                <span className="absolute right-6 top-6 text-xs font-bold text-slate-200 transition-colors group-hover:text-emerald-100">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <h3 className="mt-6 text-lg font-bold text-[#0B2578]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#64748B]">
                  {feature.description}
                </p>


              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PersonalLoanFeaturesBenefits;