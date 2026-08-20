import React from "react";
import {
  AlertCircle,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  IndianRupee,
  Layers3,
  ShieldCheck,
  Sparkles,
  UserCheck,
  WalletCards,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const benefits = [
  {
    icon: ShieldCheck,
    label: "SECURITY",
    title: "No Collateral Generally Required",
    description:
      "Personal loans are generally unsecured, so eligible applicants may not need to pledge an asset as security.",
  },
  {
    icon: WalletCards,
    label: "FLEXIBILITY",
    title: "Flexible Usage",
    description:
      "Use funds for a variety of eligible personal financial requirements based on applicable lender terms.",
  },
  {
    icon: CalendarDays,
    label: "REPAYMENT",
    title: "Structured Monthly EMIs",
    description:
      "Repay the borrowed amount through structured monthly instalments over an eligible repayment tenure.",
  },
  {
    icon: Zap,
    label: "CONVENIENCE",
    title: "Simple Application Process",
    description:
      "Submit your details and documents through a convenient application journey designed to reduce unnecessary complexity.",
  },
  {
    icon: Clock3,
    label: "TENURE",
    title: "Flexible Tenure Options",
    description:
      "Explore available repayment tenures that may help you plan your monthly repayment according to your profile.",
  },
  {
    icon: UserCheck,
    label: "PROFILE BASED",
    title: "Options Based on Your Profile",
    description:
      "Loan amount, interest rate and repayment terms can vary based on income, credit profile and lender criteria.",
  },
];

const suitabilityPoints = [
  {
    icon: CalendarDays,
    title: "Planned Expenses",
    description:
      "For significant planned expenses that may be difficult to cover entirely from available savings.",
  },
  {
    icon: AlertCircle,
    title: "Unexpected Requirements",
    description:
      "For eligible unexpected personal financial needs where access to funds may be important.",
  },
  {
    icon: Layers3,
    title: "Consolidated Repayment",
    description:
      "In some situations, eligible borrowers may consider consolidating certain obligations, subject to lender terms and suitability.",
  },
];

/* =========================================================
   REUSABLE BENEFIT CARD
========================================================= */

const BenefitCard = ({ benefit, index }) => {
  const Icon = benefit.icon;

  return (
    <article
      className="
        group relative overflow-hidden
        rounded-3xl
        border border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all duration-500
        hover:-translate-y-2
        hover:border-emerald-200
        hover:shadow-xl
        hover:shadow-slate-200/60
        motion-safe:animate-[fadeUp_0.6s_ease-out_both]
      "
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-12 -top-12
          h-32 w-32
          rounded-full
          bg-emerald-400/10
          blur-3xl
          transition-all duration-500
          group-hover:bg-emerald-400/20
        "
      />

      {/* Icon */}
      <div
        className="
          relative flex h-14 w-14
          items-center justify-center
          rounded-2xl
           bg-emerald-50
                    text-[#2c8e18]
                        transition-all duration-300 ease-out
                      group-hover:bg-[#118A09]
                      group-hover:text-white
                        group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]
                        group-hover:scale-110
        "
      >
        <Icon size={25} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <div className="relative mt-6">
        <p
          className="
            text-[10px]
            font-bold
            tracking-[0.18em]
            text-emerald-600
          "
        >
          {benefit.label}
        </p>

        <h3
          className="
            mt-2
            text-xl
            font-bold
            leading-snug
            tracking-tight
            text-slate-900
          "
        >
          {benefit.title}
        </h3>

        <p
          className="
            mt-3
            text-sm
            leading-6
            text-slate-500
          "
        >
          {benefit.description}
        </p>

     
      </div>

      {/* Bottom accent */}
      <div
        className="
          absolute bottom-0 left-0
          h-1 w-0
          bg-[#118A09]
          transition-all duration-500
          group-hover:w-full
        "
      />
    </article>
  );
};

/* =========================================================
   FINANCIAL VISUAL
========================================================= */

const LoanVisual = () => {
  return (
    <div className="relative mx-auto w-full max-w-lg">

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="
          absolute left-1/2 top-1/2
          h-72 w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-emerald-400/20
          blur-3xl
        "
      />

      {/* Floating Card - Top */}
      <div
        className="
          absolute -right-2 -top-5 z-20
          hidden
          rounded-2xl
          border border-slate-200
          bg-white
          px-4 py-3
          shadow-xl
          sm:block
          motion-safe:animate-[float_4s_ease-in-out_infinite]
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-xl
              bg-emerald-50
              text-emerald-600
            "
          >
            <CheckCircle2 size={18} />
          </div>

          <div>
            <p className="text-xs font-bold text-slate-800">
              Simple Process
            </p>

            <p className="mt-0.5 text-[10px] text-slate-400">
              Easy application journey
            </p>
          </div>
        </div>
      </div>

      {/* Main Card */}
      <div
        className="
          relative z-10
          overflow-hidden
          rounded-[2rem]
          border border-slate-200
          bg-white
          p-6
          shadow-2xl
          shadow-slate-300/40
          transition-all duration-500
          hover:-translate-y-1
          sm:p-8
        "
      >
        {/* Card decoration */}
        <div
          aria-hidden="true"
          className="
            absolute -right-20 -top-20
            h-52 w-52
            rounded-full
            bg-emerald-100/50
            blur-3xl
          "
        />

        <div className="relative">

          {/* Header */}
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  bg-emerald-50
                  text-emerald-600
                "
              >
                <IndianRupee size={21} />
              </div>

              <div>
                <p className="text-xs font-bold tracking-wider text-slate-400">
                  PERSONAL LOAN
                </p>

                <p className="mt-0.5 text-sm font-bold text-slate-800">
                  Your Financial Plan
                </p>
              </div>

            </div>

            <span
              className="
                rounded-full
                border border-emerald-100
                bg-emerald-50
                px-3 py-1
                text-[9px]
                font-bold
                tracking-wider
                text-emerald-700
              "
            >
              INDICATIVE
            </span>
          </div>

          {/* Amount */}
          <div className="mt-8">

            <p className="text-xs font-medium text-slate-400">
              Illustrative Loan Amount
            </p>

            <p
              className="
                mt-2
                text-4xl
                font-extrabold
                tracking-tight
                text-slate-900
                sm:text-5xl
              "
            >
              ₹5,00,000
            </p>

          </div>

          {/* EMI */}
          <div
            className="
              mt-7
              rounded-2xl
              border border-emerald-100
              bg-emerald-50/70
              p-5
            "
          >

            <div className="flex items-center justify-between gap-4">

              <div>
                <p className="text-xs font-medium text-slate-500">
                  Illustrative EMI
                </p>

                <p className="mt-1 text-2xl font-extrabold text-slate-900">
                  ₹10,870
                  <span className="text-sm font-semibold text-slate-400">
                    {" "}/ month
                  </span>
                </p>
              </div>

              <div
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  bg-white
                  text-emerald-600
                  shadow-sm
                "
              >
                <CalendarDays size={19} />
              </div>

            </div>

            <div className="mt-4 flex items-center gap-3">

              <div className="h-2 flex-1 overflow-hidden rounded-full bg-emerald-100">
                <div className="h-full w-[68%] rounded-full bg-emerald-500" />
              </div>

              <span className="text-[10px] font-semibold text-emerald-700">
                Illustrative
              </span>

            </div>

          </div>

          {/* Details */}
          <div className="mt-5 grid grid-cols-2 gap-3">

            <div
              className="
                rounded-2xl
                border border-slate-100
                bg-slate-50
                p-4
              "
            >
              <p className="text-[10px] font-medium text-slate-400">
                Interest Rate
              </p>

              <p className="mt-1 text-sm font-bold text-slate-800">
                10.99% p.a.*
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border border-slate-100
                bg-slate-50
                p-4
              "
            >
              <p className="text-[10px] font-medium text-slate-400">
                Tenure
              </p>

              <p className="mt-1 text-sm font-bold text-slate-800">
                5 Years
              </p>
            </div>

          </div>

          {/* Disclaimer */}
          <p className="mt-5 text-[10px] leading-4 text-slate-400">
            *Illustrative figures only. Actual loan amount, interest
            rate, EMI, tenure and approval are subject to applicable
            lender eligibility criteria, policies and verification.
          </p>

        </div>
      </div>

      {/* Floating Card - Bottom */}
      <div
        className="
          absolute -bottom-5 -left-3 z-20
          hidden
          rounded-2xl
          border border-slate-200
          bg-white
          px-4 py-3
          shadow-xl
          sm:block
          motion-safe:animate-[floatReverse_5s_ease-in-out_infinite]
        "
      >
        <div className="flex items-center gap-3">

          <div
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-xl
              bg-blue-50
              text-[#0B2578]
            "
          >
            <ShieldCheck size={18} />
          </div>

          <div>
            <p className="text-xs font-bold text-slate-800">
              Responsible Process
            </p>

            <p className="mt-0.5 text-[10px] text-slate-400">
              Information handled responsibly
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

/* =========================================================
   WHY CHOOSE PERSONAL LOAN
========================================================= */

const WhyChoosePersonalLoan = () => {

  const handleEligibilityClick = () => {
    document
      .getElementById("loan-eligibility")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      id="why-choose-personal-loan"
      className="
        relative
        overflow-hidden
        bg-[#F8FAFC]
        py-20
        sm:py-24
        lg:py-28
      "
    >

      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-40 top-20
          h-80 w-80
          rounded-full
          bg-emerald-300/10
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-40 top-1/3
          h-96 w-96
          rounded-full
          bg-blue-300/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-emerald-200
              bg-emerald-50
              px-4 py-2
              text-xs
              font-bold
              tracking-wider
              text-emerald-700
              motion-safe:animate-[fadeUp_0.6s_ease-out_both]
            "
          >
            <Sparkles size={15} />

            WHY PERSONAL LOAN?
          </div>

          {/* Heading */}
          <h2
            className="
              mt-5
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-[#0F172A]
              sm:text-4xl
              lg:text-5xl
              motion-safe:animate-[fadeUp_0.7s_ease-out_both]
            "
          >
            Why Choose a{" "}
            <span className="text-[#186A07]">
              Personal Loan?
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-[#64748B]
              sm:text-lg
              motion-safe:animate-[fadeUp_0.8s_ease-out_both]
            "
          >
            When you need funds for an important personal goal
            or unexpected expense, a personal loan can provide
            eligible borrowers with convenient access to
            structured financing without generally pledging an
            asset as collateral.
          </p>

        </div>

        {/* =====================================================
            BENEFITS
        ====================================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              benefit={benefit}
              index={index}
            />
          ))}
        </div>

        {/* =====================================================
            FEATURE PANEL
        ====================================================== */}

        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[2rem]
            border border-slate-200
            bg-white
            shadow-xl
            shadow-slate-200/50
          "
        >

          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -right-32 -top-32
              h-80 w-80
              rounded-full
              bg-emerald-200/20
              blur-3xl
            "
          />

          <div
            className="
              relative
              grid
              gap-12
              p-6
              sm:p-8
              lg:grid-cols-2
              lg:items-center
              lg:p-12
            "
          >

            {/* LEFT CONTENT */}
            <div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-emerald-50
                  px-3 py-1.5
                  text-xs
                  font-bold
                  text-emerald-700
                "
              >
                <WalletCards size={14} />

                FINANCIAL FLEXIBILITY
              </div>

              <h3
                className="
                  mt-5
                  max-w-xl
                  text-3xl
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-slate-900
                  sm:text-4xl
                "
              >
                Financial flexibility
                <span className="text-emerald-500">
                  {" "}without unnecessary complexity.
                </span>
              </h3>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-base
                  leading-7
                  text-slate-500
                "
              >
                A personal loan can help you address eligible
                financial requirements while allowing you to
                plan repayment through structured monthly EMIs.
              </p>

              {/* Check points */}
              <div className="mt-7 space-y-4">

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-emerald-500"
                  />

                  <span className="text-sm font-medium text-slate-700">
                    No asset pledge generally required
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-emerald-500"
                  />

                  <span className="text-sm font-medium text-slate-700">
                    Structured monthly repayment
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-emerald-500"
                  />

                  <span className="text-sm font-medium text-slate-700">
                    Convenient application journey
                  </span>
                </div>

              </div>

            </div>

            {/* RIGHT VISUAL */}
            <LoanVisual />

          </div>
        </div>

        {/* =====================================================
            WHEN PERSONAL LOAN MAY MAKE SENSE
        ====================================================== */}

        <div className="mt-20">

          {/* Header */}
          <div className="text-center">

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-emerald-600
              "
            >
              CONSIDER YOUR NEED
            </p>

            <h3
              className="
                mt-3
                text-2xl
                font-extrabold
                tracking-tight
                text-slate-900
                sm:text-3xl
              "
            >
              When Might a Personal Loan Make Sense?
            </h3>

            <p
              className="
                mx-auto
                mt-3
                max-w-2xl
                text-sm
                leading-6
                text-slate-500
              "
            >
              A personal loan may be worth considering when
              suitable financing can help you manage an eligible
              financial requirement while maintaining a planned
              repayment schedule.
            </p>

          </div>

          {/* Suitability cards */}
          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-5
              md:grid-cols-3
            "
          >
            {suitabilityPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-emerald-200
                    hover:shadow-lg
                  "
                >

                  <div
                    className="
                      flex h-12 w-12
                      items-center justify-center
                      rounded-2xl
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

                  <h4
                    className="
                      mt-5
                      text-lg
                      font-bold
                      text-slate-900
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-slate-500
                    "
                  >
                    {item.description}
                  </p>

                </div>
              );
            })}
          </div>

        </div>


      </div>


  
    </section>
  );
};

export default WhyChoosePersonalLoan;