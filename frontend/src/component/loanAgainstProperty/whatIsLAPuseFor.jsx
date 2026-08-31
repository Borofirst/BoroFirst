
import React from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Heart,
  HeartPulse,
  House,
  IndianRupee,
  Plane,
  Sparkles,
  WalletCards,
} from "lucide-react";

const loanUses = [
  {
    icon: BriefcaseBusiness,
    label: "GROW YOUR BUSINESS",
    title: "Business Expansion",
    description:
      "Use funds for eligible business expansion, working capital, new equipment, infrastructure or other business-related requirements.",
  },
  {
    icon: House,
    label: "IMPROVE YOUR PROPERTY",
    title: "Property Renovation",
    description:
      "Finance eligible renovation, repairs, construction, interior upgrades or other property improvement requirements.",
  },
  {
    icon: GraduationCap,
    label: "PLAN FOR EDUCATION",
    title: "Education & Higher Studies",
    description:
      "Meet eligible education-related expenses such as higher studies, professional courses or other academic requirements.",
  },
  {
    icon: HeartPulse,
    label: "MANAGE IMPORTANT NEEDS",
    title: "Medical & Emergency Expenses",
    description:
      "Access funds for eligible medical treatment, emergencies or other significant financial requirements.",
  },
  {
    icon: Heart,
    label: "MANAGE MAJOR EXPENSES",
    title: "Family & Personal Needs",
    description:
      "Meet eligible major personal or family expenses, including important life events and planned financial requirements.",
  },
  {
    icon: WalletCards,
    label: "CONSOLIDATE OBLIGATIONS",
    title: "Debt Consolidation",
    description:
      "Subject to lender policies, use the loan to manage eligible existing financial obligations and simplify repayment planning.",
  },
];


const LoanAgainstPropertyUses = () => {
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
      id="personal-loan-uses"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-blue-300/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Badge */}
          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-emerald-200
              bg-emerald-50
              px-4 py-2
              text-xs font-bold tracking-wider
              text-emerald-700
              sm:text-sm
            "
          >
            <Sparkles size={15} />

            FLEXIBLE FOR YOUR FINANCIAL NEEDS
          </div>

          {/* Heading */}
          <h2
            className="
              mt-5
              text-3xl font-extrabold
              leading-tight tracking-tight
              text-[#0F172A]
              sm:text-4xl
              lg:text-5xl
            "
          >
            What Can You Use a{" "}
            <span className="text-[#186A07]">
              Loan Against Property
            </span>{" "}
            For?
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto mt-5
              max-w-2xl
              text-base leading-7
              text-[#64748B]
              sm:text-lg
            "
          >
            A Loan Against Property can help eligible property
            owners access funds for a wide range of personal,
            professional and business-related financial
            requirements, subject to applicable lender policies.
          </p>
        </div>

        {/* =====================================================
            USE CASE CARDS
        ====================================================== */}

        <div
          className="
            mt-14
            grid grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {loanUses.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  group relative
                  overflow-hidden
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
                "
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Top glow */}
                <div
                  className="
                    pointer-events-none
                    absolute -right-10 -top-10
                    h-28 w-28
                    rounded-full
                    bg-emerald-400/10
                    blur-2xl
                    transition-all duration-500
                    group-hover:bg-emerald-400/20
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    flex h-14 w-14
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
                      tracking-[0.16em]
                      text-emerald-600
                    "
                  >
                    {item.label}
                  </p>

                  <h3
                    className="
                      mt-2
                      text-xl font-bold
                      tracking-tight
                      text-[#0F172A]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-[#64748B]
                    "
                  >
                    {item.description}
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
          })}
        </div>

        {/* =====================================================
            FLEXIBLE FUNDING BANNER
        ====================================================== */}

        <div className="relative mt-8 overflow-hidden rounded-3xl">

          {/* Background */}
          <div
            className="
              absolute inset-0
              bg-linear-to-br
              from-[#0B2578]
              via-[#0B2578]
              to-[#186A07]
            "
          />

          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="
              absolute -right-24 -top-24
              h-64 w-64
              rounded-full
              bg-emerald-400/20
              blur-3xl
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute -bottom-32 -left-20
              h-72 w-72
              rounded-full
              bg-blue-400/10
              blur-3xl
            "
          />

          <div
            className="
              relative
              grid
              gap-8
              p-7
              sm:p-9
              lg:grid-cols-[1fr_auto]
              lg:items-center
              lg:p-10
            "
          >

            {/* Left */}
            <div className="flex items-start gap-5">

              <div
                className="
                  hidden h-16 w-16 shrink-0
                  items-center justify-center
                  rounded-2xl
                  bg-white/10
                  ring-1 ring-white/15
                  backdrop-blur-sm
                  sm:flex
                "
              >
                <IndianRupee
                  size={30}
                  className="text-emerald-300"
                />
              </div>

              <div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-emerald-300"
                  />

                  <span
                    className="
                      text-xs font-bold
                      uppercase tracking-wider
                      text-emerald-300
                    "
                  >
                    Unlock Your Property's Potential
                  </span>
                </div>

                <h3
                  className="
                    mt-3
                    text-2xl font-extrabold
                    tracking-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  Your property. Your needs.
                  <span className="text-emerald-300">
                    {" "}Your financial journey.
                  </span>
                </h3>

                <p
                  className="
                    mt-3
                    max-w-2xl
                    text-sm
                    leading-6
                    text-slate-300
                    sm:text-base
                  "
                >
                  Explore suitable Loan Against Property options
                  based on your property, financial profile,
                  eligibility and applicable lender policies.
                </p>

              </div>
            </div>

            {/* Right */}
            <button
              type="button"
              onClick={handleEligibilityClick}
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#10B981]
                px-6 py-3.5
                text-sm font-bold
                text-white
                shadow-lg
                shadow-emerald-900/20
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-emerald-400
                hover:shadow-xl
                focus:outline-none
                focus:ring-4
                focus:ring-emerald-300/30
              "
            >
              Check Your Eligibility

              <ArrowRight
                size={18}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default LoanAgainstPropertyUses;