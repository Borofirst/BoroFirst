import React from "react";
import {
  ShieldCheck,
  MousePointerClick,
  Building2,
  Eye,
  UserCheck,
  Headphones,
  Info,
  GitCompare,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const benefits = [
  {
    icon: MousePointerClick,
    title: "Simple Application Process",
    description:
      "Complete your basic details through a straightforward application journey designed to reduce unnecessary complexity.",
  },
  {
    icon: Building2,
    title: "Multiple Lender Options",
    description:
      "Explore personal loan options from suitable lending partners based on your profile and requirements.",
  },
  {
    icon: Eye,
    title: "Transparent Guidance",
    description:
      "Understand important loan details such as interest rate, tenure, EMI and applicable terms before proceeding.",
  },
  {
    icon: UserCheck,
    title: "Guidance Based on Your Profile",
    description:
      "We help you understand available options based on factors such as income, existing obligations and other eligibility criteria.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Responsible Process",
    description:
      "Your information is handled responsibly throughout the application and verification journey.",
  },
  {
    icon: Headphones,
    title: "Support When You Need It",
    description:
      "Get assistance throughout the application journey whenever you need help understanding the next step.",
  },
];

const trustPoints = [
  {
    title: "Simple Journey",
    description: "Easy-to-understand process",
  },
  {
    title: "Multiple Options",
    description: "Explore suitable lender options",
  },
  {
    title: "Customer Support",
    description: "Guidance when you need it",
  },
];

const journeyPoints = [
  {
    icon: Info,
    title: "Understand",
    description: "Know the key loan details before you proceed.",
  },
  {
    icon: GitCompare,
    title: "Compare",
    description: "Explore suitable options based on your profile.",
  },
  {
    icon: CheckCircle2,
    title: "Decide",
    description: "Make an informed borrowing decision.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const WhyChooseBoroFirst = ({
  id = "why-borofirst",
}) => {
  const handleEligibility = () => {
    document
      .getElementById("loan-eligibility")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const handleApply = () => {
    document
      .getElementById("loan-application")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      id={id}
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
        className="pointer-events-none absolute -right-40 top-[35%] h-96 w-96 rounded-full bg-blue-300/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/10 blur-3xl"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#0B2578 1px, transparent 1px), linear-gradient(90deg, #0B2578 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 shadow-sm">
            <ShieldCheck
              size={16}
              className="text-emerald-600"
            />

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
              Why BoroFirst
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Why Choose{" "}
            <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
              BoroFirst
            </span>{" "}
            for Your Personal Loan?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base">
            At BoroFirst, we aim to make your personal loan
            journey simpler, clearer and more convenient. From
            understanding your requirements to exploring suitable
            loan options, we help you navigate the process with
            greater confidence.
          </p>
        </div>

        {/* =====================================================
            TRUST CARD + BENEFITS
        ====================================================== */}

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">

          {/* ===================================================
              LEFT — TRUST CARD
          ==================================================== */}

          <div className="lg:col-span-5">
            <div className="group relative h-full min-h-[480px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#186A07] via-[#119f39] to-[#0B2578] p-7 text-white shadow-xl shadow-slate-300/30 sm:p-9">

              {/* Decorative glow */}
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl"
              />

              {/* Decorative circles */}
              <div
                aria-hidden="true"
                className="absolute right-8 top-8 h-24 w-24 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute right-14 top-14 h-12 w-12 rounded-full border border-white/10"
              />

              <div className="relative flex h-full flex-col">

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-lg backdrop-blur-sm">
                  <ShieldCheck
                    size={31}
                    strokeWidth={1.8}
                    className="text-white"
                  />
                </div>

                {/* Content */}
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                    Your Financial Journey
                  </p>

                  <h3 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Your Loan Journey,
                    <span className="block text-emerald-200">
                      Simplified.
                    </span>
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-white/75 sm:text-base">
                    From eligibility assessment to lender
                    coordination, BoroFirst is designed to make
                    the personal loan journey easier to understand
                    and navigate.
                  </p>
                </div>

                {/* Trust points */}
                <div className="mt-auto pt-10">
                  <div className="space-y-3">
                    {trustPoints.map((point) => (
                      <div
                        key={point.title}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] p-3.5 backdrop-blur-sm"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                          <CheckCircle2
                            size={17}
                            className="text-emerald-200"
                          />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-white">
                            {point.title}
                          </p>

                          <p className="mt-0.5 text-xs text-white/60">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ===================================================
              RIGHT — BENEFIT CARDS
          ==================================================== */}

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg sm:p-6"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl  bg-emerald-50   text-[#2c8e18]
                        transition-all duration-300 ease-out
                      group-hover:bg-[#118A09]
                      group-hover:text-white
                        group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]
                        group-hover:scale-110">
                    <Icon size={20} />
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 text-base font-bold text-[#0B2578] sm:text-lg">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#64748B]">
                    {benefit.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-5 h-0.5 w-8 rounded-full bg-emerald-500/30 transition-all duration-300 group-hover:w-14 group-hover:bg-emerald-500" />
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            WHAT MAKES US DIFFERENT
        ====================================================== */}

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-6 py-6 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Sparkles size={19} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#186A07]">
                  Our Approach
                </p>

                <h3 className="mt-1 text-xl font-bold text-[#0F172A] sm:text-2xl">
                  Designed Around Your Financial Journey
                </h3>
              </div>
            </div>
          </div>

          <div className="grid divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {journeyPoints.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.title}
                  className="group p-6 transition-colors duration-300 hover:bg-emerald-50/40 sm:p-7"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-[#0B2578] transition-all duration-300 group-hover:bg-[#263b7f] group-hover:text-white">
                    <Icon size={18} />
                  </div>

                  <h4 className="mt-4 font-bold text-[#0B2578]">
                    {point.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-[#64748B]">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CUSTOMER FIRST
        ====================================================== */}

        <div className="relative mt-8 overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-50 p-7 sm:p-9 lg:p-10">
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#186A07] shadow-sm">
              <UserCheck size={22} />
            </div>

            <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
              Your Goals Come First.
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#64748B] sm:text-base">
              Whether you're planning a wedding, managing an
              unexpected expense, consolidating eligible
              obligations or pursuing an important personal goal,
              BoroFirst helps you explore your financing options
              with greater clarity.
            </p>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
              Financial Freedom Starts Here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseBoroFirst;