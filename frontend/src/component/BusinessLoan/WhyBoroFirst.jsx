import React from "react";
import {
  Building2,
  Layers3,
  FileCheck2,
  Workflow,
  ShieldCheck,
  Headphones,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: Building2,
    title: "Financing That Understands Your Business",
    description:
      "Whether you are expanding operations, managing working capital or investing in new opportunities, explore financing solutions aligned with your business requirements.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Explore Multiple Lending Options",
    description:
      "Explore suitable options from our lending network based on your business profile, funding requirement and repayment capacity.",
  },
  {
    number: "03",
    icon: FileCheck2,
    title: "Clear Documentation Support",
    description:
      "Understand the documents generally required for your application and prepare your paperwork with greater confidence.",
  },
  {
    number: "04",
    icon: Workflow,
    title: "A Smoother Loan Process",
    description:
      "From requirement assessment to application support, our structured process helps keep your financing journey organised and easier to navigate.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Transparent From Start to Finish",
    description:
      "Get clearer information about important loan terms, eligibility factors and repayment considerations before proceeding.",
  },
  {
    number: "06",
    icon: Headphones,
    title: "Support When You Need It",
    description:
      "Our team helps you understand the application journey, answer your questions and navigate the next steps with greater clarity.",
  },
];

const trustPoints = [
  {
    number: "01",
    title: "Business-Centric Approach",
    icon: Building2,
  },
  {
    number: "02",
    title: "Structured Application Support",
    icon: CheckCircle2,
  },
  {
    number: "03",
    title: "Transparent Loan Guidance",
    icon: ShieldCheck,
  },
];

const WhyChooseBorofirst = () => {
  const handleEligibilityClick = () => {
    document.getElementById("loan-eligibility")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleLoanEMI = () => {
    document.getElementById("loan-EMI")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-28">
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#10B981]/5 blur-3xl" />

        <div className="absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-[#0B2578]/5 blur-3xl" />

        <div
          className="absolute right-[10%] top-[20%] h-32 w-32 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-linear(#0B2578 1px, transparent 1px), linear-linear(90deg, #0B2578 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            INTRODUCTION
        ========================================================= */}

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* LEFT CONTENT */}

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#186A07]" />
              </span>

              <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
                Why BOROFIRST
              </span>
            </div>

            {/* Heading */}

            <h2 className=" text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.45rem]">
              Business Financing,
              <br />
              <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent ">
                With a Better Way Forward.
              </span>
            </h2>

            {/* Small heading */}

            <p className="mt-6 text-lg font-bold text-[#0B2578]">
              Why Choose BOROFIRST?
            </p>

            {/* Description */}

            <p className="mt-3 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
              Your business needs financial solutions that fit its goals, not a
              one-size-fits-all approach. BOROFIRST helps you explore suitable
              business loan options with structured guidance, clear information
              and a simpler application journey.
            </p>

            {/* CTA */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleLoanEMI}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#10B981]/20 transition-all duration-300 hover:-translate-y-0.5  hover:shadow-xl hover:shadow-[#10B981]/25"
              >
                Calculate EMI
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              <button
                
                onClick={handleEligibilityClick}
                className="inline-flex items-center justify-center rounded-xl border border-[#E2E8F0] bg-white px-6 py-3.5 text-sm font-bold text-[#0B2578] transition-all duration-300 hover:border-[#10B981]/40 hover:bg-[#10B981]/5"
              >
                Check Eligibility
              </button>
            </div>
          </div>

          {/* =========================================================
              NAVY BRAND PANEL
          ========================================================= */}

          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] bg-[#0B2578] p-7 shadow-[0_25px_60px_rgba(11,37,120,0.16)] sm:p-9 lg:p-10">
              {/* Decorative large numbers */}

              <span className="pointer-events-none absolute -right-4 -top-12 select-none text-[170px] font-black leading-none text-white/[0.025]">
                01
              </span>

              <span className="pointer-events-none absolute -bottom-16 -left-5 select-none text-[170px] font-black leading-none text-white/[0.025]">
                03
              </span>

              <div className="relative z-10">
                {/* Label */}

                <div className="flex items-center gap-2">
                  <Sparkles size={15} className="text-[#10B981]" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                    BOROFIRST Business Loans
                  </span>
                </div>

                {/* Main message */}

                <h3 className="mt-8 max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Built for businesses that are{" "}
                  <span className="text-[#10B981]">ready for what's next.</span>
                </h3>

                {/* Divider */}

                <div className="my-8 h-px w-full bg-white/10">
                  <div className="h-px w-16 bg-[#10B981]" />
                </div>

                {/* Description */}

                <p className="max-w-md text-sm leading-6 text-white/60 sm:text-base">
                  Explore funding options with a structured process and support
                  at every stage of your business financing journey.
                </p>

                {/* Steps */}

                <div className="mt-8 space-y-4">
                  {[
                    ["01", "Explore suitable options"],
                    ["02", "Understand the process"],
                    ["03", "Move forward with clarity"],
                  ].map(([number, text]) => (
                    <div key={number} className="flex items-center gap-4">
                      <span className="text-xs font-bold text-[#10B981]">
                        {number}
                      </span>

                      <span className="h-px w-6 bg-white/15" />

                      <span className="text-sm font-semibold text-white/85">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            BENEFITS INTRO
        ========================================================= */}

        <div className="mt-24 lg:mt-32">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2c8e18]">
              Our Difference
            </p>

            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
              Reasons Why Businesses Choose{" "}
              <span className="text-[#0B2578]">BOROFIRST</span>
            </h3>

            <p className="mt-4 text-base leading-7 text-[#64748B]">
              Designed around the realities of business financing — from
              understanding your requirement to navigating the application
              journey.
            </p>
          </div>

          {/* =========================================================
              BENEFIT ROWS
          ========================================================= */}

          <div className="mt-12 grid border-t border-[#E2E8F0] lg:grid-cols-2 lg:gap-x-10">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.number}
                  className="group relative border-b border-[#E2E8F0] px-2 py-7 transition-all duration-300 hover:bg-[#10B981]/[0.035] sm:px-4 sm:py-8"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Number */}

                    <div className="w-10 shrink-0 pt-1 sm:w-12">
                      <span className="text-2xl font-extrabold tracking-tight text-slate-200 transition-colors duration-300 group-hover:text-[#2c8e18] sm:text-3xl">
                        {benefit.number}
                      </span>
                    </div>

                    {/* Icon */}

                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl 
               
                       //  bg-emerald-50
                     text-[#2c8e18]
                     transition-all
                     duration-300
                     ease-out
                    group-hover:scale-110
                     group-hover:bg-[#118A09]
                     group-hover:text-white
                 group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]
                       sm:h-12 sm:w-12"
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    {/* Content */}

                    <div className="min-w-0 flex-1">
                      <h4 className="pr-8 text-base font-bold leading-6 text-[#0F172A] transition-colors duration-300 group-hover:text-[#0B2578] sm:text-lg">
                        {benefit.title}
                      </h4>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-[#64748B]">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Arrow */}

                    <div className="hidden shrink-0 pt-1 sm:block">
                      <ArrowUpRight
                        size={20}
                        className="text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#10B981]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            TRUST BAND
        ========================================================= */}

        <div className="mt-20 overflow-hidden rounded-[28px] bg-[#0B2578] lg:mt-28">
          <div className="grid lg:grid-cols-[1fr_1.5fr]">
            {/* Trust Content */}

            <div className="p-7 sm:p-9 lg:p-11">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2c8e18]">
                Our Commitment
              </p>

              <h3 className="mt-3 max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
                Built Around Your Business Goals
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-6 text-white/60">
                BOROFIRST focuses on making business financing easier to
                understand, easier to explore and easier to navigate — so you
                can spend more time building your business.
              </p>
            </div>

            {/* Trust Points */}

            <div className="grid border-t border-white/10 lg:grid-cols-3 lg:border-l lg:border-t-0">
              {trustPoints.map((point, index) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.number}
                    className={`p-7 sm:p-8 ${
                      index !== 0
                        ? "border-t border-white/10 lg:border-l lg:border-t-0"
                        : ""
                    }`}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#10B981]">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <span className="mt-6 block text-xs font-bold tracking-wider text-white/30">
                      {point.number}
                    </span>

                    <h4 className="mt-2 text-sm font-bold leading-5 text-white">
                      {point.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBorofirst;
