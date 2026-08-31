import React from "react";
import {
  ShieldCheck,
  PiggyBank,
  TriangleAlert,
  House,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  WalletCards,
} from "lucide-react";

const insuranceReasons = [
  {
    id: "01",
    title: "Protect Your Savings",
    description:
      "Unexpected expenses can put pressure on your finances.",
    icon: PiggyBank,
    label: "FINANCIAL READINESS",
  },
  {
    id: "02",
    title: "Handle Life's Uncertainties",
    description:
      "Accidents and emergencies can happen without warning.",
    icon: TriangleAlert,
    label: "BE PREPARED",
  },
  {
    id: "03",
    title: "Protect Your Assets",
    description:
      "Your vehicle, home and other valuable assets deserve protection.",
    icon: House,
    label: "ASSET PROTECTION",
  },
  {
    id: "04",
    title: "Plan With Confidence",
    description:
      "Insurance can help you manage certain financial risks.",
    icon: ShieldCheck,
    label: "SMARTER PREPAREDNESS",
  },
  {
  id: "05",
  title: "Stay Financially Prepared",
  description:
    "Planning ahead can help you handle eligible unexpected expenses with greater confidence.",
  icon: WalletCards,
  label: "FINANCIAL PREPAREDNESS",
},
];

const ReasonCard = ({ reason, className = "" }) => {
  const Icon = reason.icon;

  return (
    <article
      className={`insurance-reason group relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-7 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/40 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] ${className}`}
    >
      {/* Subtle hover glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#10B981]/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[11px] font-bold tracking-[0.16em] text-[#94A3B8] transition-colors duration-300 group-hover:text-[#2c8e18]">
          {reason.id}
        </span>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E2E8F0]  group-hover:translate-x-0.5 group-hover:-translate-y-0.5 
         bg-emerald-50
                    text-[#2c8e18]
                        transition-all duration-300 ease-o  ut
                      group-hover:bg-[#118A09]
                      group-hover:text-white
                        group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]
                        group-hover:scale-110">
          <ArrowUpRight
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="relative z-10 mt-7">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#10B981]/10 bg-[#10B981]/10  
         group-hover:-translate-y-1 
                    text-[#2c8e18]
                        transition-all duration-300 ease-o  ut
                      group-hover:bg-[#118A09]
                      group-hover:text-white
                        group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]
                        group-hover:scale-110
        ">
          <Icon size={25} strokeWidth={1.9} aria-hidden="true" />
        </div>
      </div>

      <div className="relative z-10 mt-6">
        <h3 className="text-lg font-bold tracking-tight text-[#0F172A]">
          {reason.title}
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-[#64748B]">
          {reason.description}
        </p>
      </div>

      <div className="relative z-10 mt-7 border-t border-[#E2E8F0] pt-4">
        <span className="text-[9px] font-bold tracking-[0.16em] text-[#94A3B8]">
          {reason.label}
        </span>
      </div>
    </article>
  );
};

const FinancialPreparedness = () => {
  return (
    <div className="relative mx-auto w-full max-w-[430px]">
      {/* Decorative connection rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#10B981]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0B2578]/10"
      />

      {/* Soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10B981]/10 blur-3xl motion-safe:animate-pulse"
      />

      <div className="relative flex min-h-[330px] items-center justify-center">
        {/* Decorative orbit dots */}
        <span
          aria-hidden="true"
          className="absolute left-[12%] top-[25%] h-2 w-2 rounded-full bg-[#10B981]/40"
        />
        <span
          aria-hidden="true"
          className="absolute right-[14%] top-[31%] h-1.5 w-1.5 rounded-full bg-[#0B2578]/30"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-[24%] left-[19%] h-1.5 w-1.5 rounded-full bg-[#10B981]/30"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-[18%] right-[21%] h-2 w-2 rounded-full bg-[#0B2578]/20"
        />

        {/* Central protection visual */}
        <div className="relative z-10 w-full max-w-[290px] overflow-hidden rounded-[32px] bg-gradient-to-br from-[#186A07] to-[#0B2578] p-7 text-white shadow-[0_24px_70px_rgba(11,37,120,0.18)] sm:p-8">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-white/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-[#10B981]/20 blur-3xl"
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/10 shadow-inner backdrop-blur-sm transition-transform duration-300 motion-safe:group-hover:scale-105">
              <ShieldCheck
                size={43}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </div>

            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5">
              <Sparkles
                size={11}
                aria-hidden="true"
              />
              <span className="text-[9px] font-bold tracking-[0.18em]">
                FINANCIAL PREPAREDNESS
              </span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight sm:text-[27px]">
              Be Ready for the Unexpected
            </h3>

            <p className="mt-3 max-w-[235px] text-sm leading-6 text-white/75">
              Insurance can help you prepare for certain covered financial
              risks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyDoYouNeedInsurance = () => {
  return (
    <section
      aria-labelledby="why-insurance-heading"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#10B981]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-16 h-80 w-80 rounded-full bg-[#0B2578]/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/20 bg-white px-3.5 py-2 shadow-sm">
            <ShieldCheck
              size={14}
              className="text-[#10B981]"
              aria-hidden="true"
            />

            <span className="text-[11px] font-bold tracking-[0.16em] text-[#186A07]">
              WHY INSURANCE MATTERS
            </span>
          </div>

          <h2
            id="why-insurance-heading"
            className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0F172A] sm:text-5xl lg:text-[52px]"
          >
            Why Do You Need{" "}
            <span className="text-[#186A07]">Insurance?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
            Life can bring unexpected expenses. Insurance can help you prepare
            for certain financial risks, protect what you&apos;ve built and
            move forward with greater confidence.
          </p>
        </div>

        {/* Protection Ecosystem */}
        <div className="relative mt-16 lg:mt-20">
          {/* Decorative desktop connectors */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[18%] hidden h-[64%] w-px -translate-x-1/2 bg-[#10B981]/10 lg:block"
          />

          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-7">
            {/* Reason 01 */}
            <ReasonCard
              reason={insuranceReasons[0]}
              className="lg:col-span-4 lg:translate-y-[-20px]"
            />

            {/* Central visual */}
            <div className="order-first flex justify-center lg:order-none lg:col-span-4">
              <FinancialPreparedness />
            </div>

            {/* Reason 02 */}
            <ReasonCard
              reason={insuranceReasons[1]}
              className="lg:col-span-4 lg:translate-y-[20px]"
            />

            {/* Reason 03 */}
            <ReasonCard
              reason={insuranceReasons[2]}
              className="lg:col-span-4 lg:translate-y-[20px]"
            />

            {/* Reason 04 */}
            <ReasonCard
              reason={insuranceReasons[3]}
              className="border-[#10B981]/20 lg:col-span-4 lg:translate-y-[20px]"
            />
            <ReasonCard
              reason={insuranceReasons[4]}
              className="border-[#10B981]/20 lg:col-span-4 lg:translate-y-[20px]"
            />

            {/* Supporting ecosystem message */}
            <div className="hidden lg:col-span-4 lg:flex lg:justify-center">
              <div className="max-w-xs text-center">
                <div className="mx-auto mb-3 h-px w-10 bg-[#10B981]/30" />
                <p className="text-xs font-semibold leading-5 text-[#64748B]">
                  Preparedness starts with understanding the risks that matter
                  to you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile central supporting message */}
        <div className="mt-8 text-center lg:hidden">
          <div className="mx-auto mb-3 h-px w-10 bg-[#10B981]/30" />
          <p className="mx-auto max-w-sm text-xs font-semibold leading-5 text-[#64748B]">
            Preparedness starts with understanding the risks that matter to
            you.
          </p>
        </div>

        {/* Conclusion */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center sm:mt-16 sm:flex-row sm:gap-6">
          <p className="text-sm font-medium text-[#64748B] sm:text-base">
            Insurance is about being prepared before the unexpected happens.
          </p>

          <a
            href="#insurance-category-heading"
            className="group inline-flex items-center gap-2 rounded-full font-semibold text-[#186A07] transition-colors duration-300 hover:text-[#0B2578] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
          >
            <span>Explore Insurance</span>

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs leading-5 text-[#64748B]/80">
          Coverage, exclusions and benefits depend on the specific insurance
          policy and insurer.
        </p>
      </div>
    </section>
  );
};

export default WhyDoYouNeedInsurance;