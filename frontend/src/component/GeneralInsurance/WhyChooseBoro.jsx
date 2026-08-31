import React from "react";
import {
  ShieldCheck,
  Layers3,
  BookOpenCheck,
  UserRoundCheck,
  Smartphone,
  Headphones,
  Network,
  ArrowUpRight,
  ArrowRight,
  Info,
} from "lucide-react";

const borofirstAdvantages = [
  {
    id: "01",
    title: "One Place for Multiple Needs",
    description:
      "Explore insurance options across different categories alongside other financial solutions.",
    icon: Layers3,
    label: "ONE ECOSYSTEM",
  },
  {
    id: "02",
    title: "Simple, Clear Guidance",
    description:
      "Understand your options with straightforward information and guidance.",
    icon: BookOpenCheck,
    label: "CLEAR GUIDANCE",
  },
  {
    id: "03",
    title: "Customer-First Approach",
    description:
      "We focus on helping you make informed financial decisions based on your needs.",
    icon: UserRoundCheck,
    label: "CUSTOMER FIRST",
  },
  {
    id: "04",
    title: "Digital Convenience",
    description:
      "A digital-first experience designed to make your insurance journey easier.",
    icon: Smartphone,
    label: "DIGITAL EXPERIENCE",
  },
  {
    id: "05",
    title: "Dedicated Assistance",
    description:
      "Get relevant guidance and assistance when navigating your available options.",
    icon: Headphones,
    label: "ASSISTANCE",
  },
  {
    id: "06",
    title: "Trusted Financial Ecosystem",
    description:
      "BOROFIRST brings insurance, loans and other financial solutions together in one ecosystem.",
    icon: Network,
    label: "FINANCIAL ECOSYSTEM",
  },
];

const AdvantageCard = ({ advantage }) => {
  const Icon = advantage.icon;

  return (
    <article
      className="group relative h-full rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-7 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/30 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] motion-reduce:transition-none motion-reduce:hover:transform-none"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="text-[10px] font-bold tracking-[0.16em] text-[#94A3B8] transition-colors duration-300 group-hover:text-[#10B981]">
          {advantage.id}
        </span>

        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#64748B] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-[#10B981] group-hover:bg-[#10B981] group-hover:text-white"
        >
          <ArrowUpRight size={16} strokeWidth={2} />
        </span>
      </div>

      <div
        aria-hidden="true"
        className="mt-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#10B981]/10 bg-[#10B981]/10 text-[#186A07] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#10B981] group-hover:text-white motion-reduce:transition-none motion-reduce:transform-none
        
         bg-emerald-50
                    text-[#2c8e18]
                        transition-all duration-300 ease-o  ut
                      group-hover:bg-[#118A09]
                      group-hover:text-white
                        group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]
                        group-hover:scale-110"
      >
        <Icon size={23} strokeWidth={1.9} />
      </div>

      <h3 className="mt-5 text-lg font-bold tracking-tight text-[#0F172A]">
        {advantage.title}
      </h3>

      <p className="mt-2.5 max-w-md text-sm leading-6 text-[#64748B]">
        {advantage.description}
      </p>

      <div className="mt-6 border-t border-[#E2E8F0] pt-4">
        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">
          {advantage.label}
        </span>
      </div>
    </article>
  );
};

const BrandCenter = () => {
  return (
    <div className="relative h-full overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.07)] sm:p-9 lg:min-h-[330px]">
      {/* Decorative ecosystem connections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-[#10B981]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-70px] left-[-50px] h-48 w-48 rounded-full bg-[#0B2578]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-20 hidden h-px w-16 bg-[#10B981]/15 lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-20 hidden h-16 w-px bg-[#10B981]/15 lg:block"
      />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-5">
          <div>
      
             <img
              src="/Borofirst-Logos-1-1.webp"
              alt="Borofirst Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div
            aria-hidden="true"
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#186A07] to-[#0B2578] shadow-[0_12px_30px_rgba(11,37,120,0.16)]"
          >
            <ShieldCheck size={30} strokeWidth={1.8} className="text-white" />
          </div>
        </div>

        <div className="mt-10">
          <span className="inline-flex rounded-full border border-[#10B981]/10 bg-[#10B981]/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#186A07]">
            FINANCIAL GUIDANCE
          </span>

          <h3 className="mt-4 max-w-lg text-2xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-3xl">
            Making Financial Journeys Simpler
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#64748B]">
            Explore insurance and other financial solutions through one
            connected ecosystem.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          {["Insurance", "Loans", "Financial Solutions"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5 text-[10px] font-semibold text-[#64748B]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const WhyChooseBOROFIRST = () => {
  return (
    <section
      aria-labelledby="why-choose-borofirst-heading"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* Background depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#10B981]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#0B2578]/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section introduction */}
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/20 bg-white px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#186A07] shadow-sm">
              <ShieldCheck
                aria-hidden="true"
                size={14}
                strokeWidth={2}
              />
              WHY CHOOSE BOROFIRST
            </div>

            <h2
              id="why-choose-borofirst-heading"
              className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0F172A] sm:text-5xl lg:text-[52px]"
            >
              Insurance Guidance{" "}
              <span className="text-[#186A07]">
                Built Around Your Needs
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
              BOROFIRST helps simplify the insurance journey by bringing
              guidance, financial solutions and convenient digital experiences
              together in one place.
            </p>
          </div>

          <div className="lg:col-span-7">
            <BrandCenter />
          </div>
        </div>

        {/* Brand ecosystem connector */}
        <div
          aria-hidden="true"
          className="relative mx-auto my-10 hidden h-px max-w-5xl bg-gradient-to-r from-transparent via-[#10B981]/15 to-transparent lg:block"
        >
          <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#F8FAFC] bg-[#10B981]/40" />
        </div>

        {/* Advantages */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12">
          {borofirstAdvantages.map((advantage, index) => (
            <div
              key={advantage.id}
              className={`lg:col-span-4 ${
                index === 2 || index === 5 ? "lg:translate-y-3" : ""
              }`}
            >
              <AdvantageCard advantage={advantage} />
            </div>
          ))}
        </div>

        {/* Brand conclusion */}
        <div className="mt-16 border-t border-[#E2E8F0] pt-10 sm:mt-20 sm:pt-12">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <p className="text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
                One platform. Multiple financial journeys.
              </p>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-[#64748B] sm:text-base">
                From insurance to loans and other financial solutions,
                BOROFIRST is designed to help you navigate your financial needs
                with greater clarity.
              </p>
            </div>

            <a
              href="#insurance"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[#10B981]/20 bg-white px-5 py-3 text-sm font-semibold text-[#186A07] shadow-sm transition-all duration-300 hover:border-[#10B981]/40 hover:text-[#0B2578] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              Explore BOROFIRST
              <ArrowRight
                aria-hidden="true"
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </a>
          </div>

          {/* Responsible communication note */}
          <div className="mt-8 flex items-start gap-2 border-t border-[#E2E8F0]/80 pt-5">
            <Info
              aria-hidden="true"
              size={14}
              className="mt-0.5 shrink-0 text-[#94A3B8]"
            />

            <p className="max-w-4xl text-xs leading-5 text-[#64748B]/80">
              Insurance coverage, premiums, eligibility, policy terms and
              claims are subject to the selected insurer and policy
              conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBOROFIRST;
