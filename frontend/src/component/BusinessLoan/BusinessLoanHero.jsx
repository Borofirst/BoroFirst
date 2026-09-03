import React from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileCheck2,
  MoveUpRight,
  TrendingUp,
  WalletCards,
} from "lucide-react";

const trustStats = [
  {
    value: "₹100Cr+",
    label: "Funding Facilitated",
  },
  {
    value: "25+",
    label: "Lending Partners",
  },
  {
    value: "10K+",
    label: "Customers Assisted",
  },
];

const growthItems = [
  {
    label: "Revenue",
    value: "+18.4%",
    width: "82%",
  },
  {
    label: "Working Capital",
    value: "+24.8%",
    width: "91%",
  },
  {
    label: "Expansion",
    value: "+31.2%",
    width: "96%",
  },
];

const BusinessLoanHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#F8FAFC]">
      {/* =========================================================
          BACKGROUND DECORATIONS
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Emerald glow */}
        <div
          className="
            absolute right-[-12%] top-[8%] 
            h-[520px] w-[520px]
            rounded-full
            bg-[#10B981]/10
            blur-[120px]
          "
        />

        {/* Navy glow */}
        <div
          className="
            absolute bottom-[-20%] left-[-10%]
            h-[420px] w-[420px]
            rounded-full
            bg-[#0B2578]/5
            blur-[110px]
          "
        />

        {/* Subtle grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.035]
            [background-image:linear-linear(#0B2578_1px,transparent_1px),linear-linear(90deg,#0B2578_1px,transparent_1px)]
            [background-size:44px_44px]
          "
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-24 sm:px-6 lg:px-8 lg:pb-14 lg:pt-32">
        {/* =========================================================
            MAIN HERO
        ========================================================= */}
        <div className="grid items-center gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
          {/* =======================================================
              LEFT CONTENT
          ======================================================= */}
          <div className="relative z-10 max-w-2xl">
            {/* Eyebrow */}
            <div
              className="
                mb-6 inline-flex items-center gap-2
                rounded-full
                border border-[#10B981]/20
                bg-white/80
                px-3.5 py-2
                text-xs font-bold tracking-[0.16em]
                text-[#0B2578]
                shadow-[0_8px_30px_rgba(15,23,42,0.04)]
                backdrop-blur-md
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981]/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
              </span>
              BUSINESS FINANCING
            </div>

            {/* Heading */}
            <h1
              className="
                text-4xl font-extrabold
                leading-[1.05]
                tracking-[-0.045em]
                text-[#0F172A]
                sm:text-5xl
                lg:text-[4.25rem]
              "
            >
              Fuel Your Business.
              <span className="mt-2 block text-[#186A07]">
                Build What’s Next.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-7 max-w-xl
                text-base
                leading-7
                text-[#64748B]
                sm:text-lg
                sm:leading-8
              "
            >
              Flexible business loan solutions designed to help you expand
              operations, manage working capital, purchase equipment, or take
              your next big business opportunity forward.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="
                  group inline-flex items-center justify-center gap-3
                  rounded-xl
                  bg-linear-to-r from-[#186A07] to-[#0B2578]
                  px-6 py-3.5
                  text-sm font-bold text-white
                  shadow-[0_12px_28px_rgba(16,185,129,0.22)]
                  
               
                "
              >
                Apply Now
                <ArrowRight
                  size={18}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              <button
                type="button"
                className="
                  group inline-flex items-center justify-center gap-3
                  rounded-xl
                  border border-[#CBD5E1]
                  bg-white
                  px-6 py-3.5
                  text-sm font-bold text-[#0B2578]
                  shadow-sm
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:border-[#10B981]/40
                  hover:bg-[#F0FDF9]
                  hover:shadow-md
                  focus:outline-none
                  focus:ring-4
                  focus:ring-[#10B981]/10
                "
              >
                Check Eligibility
                <MoveUpRight
                  size={17}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </button>
            </div>

            {/* Trust message */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {[
                "Quick assistance",
                "Transparent process",
                "Multiple lending partners",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium text-[#64748B]"
                >
                  <CheckCircle2 size={14} className="shrink-0 text-[#10B981]" />

                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* =======================================================
              RIGHT VISUAL
          ======================================================= */}
          <div className="relative mx-auto min-h-[540px] w-full max-w-[650px] lg:min-h-[600px]">
            {/* Decorative ring */}
            <div
              className="
                absolute right-[7%] top-[4%]
                h-[390px] w-[390px]
                rounded-full
                border border-[#10B981]/10
              "
            />

            <div
              className="
                absolute right-[15%] top-[12%]
                h-[300px] w-[300px]
                rounded-full
                border border-[#0B2578]/10
              "
            />

            {/* =====================================================
                MAIN DASHBOARD
            ===================================================== */}
            <div
              className="
                absolute
                left-[7%] top-[10%]
                w-[86%]
                rounded-[28px]
                border border-white
                bg-white/95
                p-5
                shadow-[0_35px_90px_rgba(15,23,42,0.12)]
                backdrop-blur-xl
                sm:p-7
                lg:left-[8%]
                lg:w-[80%]
              "
            >
              {/* Dashboard header */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ECFDF5]">
                      <TrendingUp size={18} className="text-[#10B981]" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-[#64748B]">
                        BUSINESS OVERVIEW
                      </p>

                      <h3 className="mt-0.5 text-sm font-bold text-[#0F172A]">
                        Business Growth
                      </h3>
                    </div>
                  </div>
                </div>

                <span
                  className="
                    rounded-full
                    bg-[#ECFDF5]
                    px-3 py-1.5
                    text-[11px] font-bold
                    text-[#059669]
                  "
                >
                  Growth
                </span>
              </div>

              {/* Growth number */}
              <div className="mt-8 flex items-end justify-between">
                <div>
                  <p className="text-4xl font-extrabold tracking-tight text-[#0F172A]">
                    +28.6%
                  </p>

                  <p className="mt-1 text-xs text-[#64748B]">
                    Business growth indicator
                  </p>
                </div>

                <div
                  className="
                    flex items-center gap-1
                    rounded-lg
                    bg-[#F0FDF9]
                    px-2.5 py-1.5
                    text-xs font-bold text-[#059669]
                  "
                >
                  <MoveUpRight size={13} />
                  Positive trend
                </div>
              </div>

              {/* Chart */}
              <div className="relative mt-8 h-44 overflow-hidden rounded-2xl bg-[#F8FAFC] p-4">
                {/* Grid */}
                <div
                  className="
                    absolute inset-0
                    opacity-60
                    [background-image:linear-linear(#E2E8F0_1px,transparent_1px),linear-linear(90deg,#E2E8F0_1px,transparent_1px)]
                    [background-size:100%_35px,55px_100%]
                  "
                />

                <svg
                  className="relative h-full w-full overflow-visible"
                  viewBox="0 0 500 170"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <defs>
                    <linearlinear id="growthFill" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="#10B981"
                        stopOpacity="0.18"
                      />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                    </linearlinear>
                  </defs>

                  <path
                    d="M0 145 C45 135 58 142 92 115 C126 88 140 112 173 92 C210 69 226 102 257 74 C288 46 315 75 341 54 C376 25 392 49 420 30 C450 10 472 18 500 5 L500 170 L0 170 Z"
                    fill="url(#growthFill)"
                  />

                  <path
                    d="M0 145 C45 135 58 142 92 115 C126 88 140 112 173 92 C210 69 226 102 257 74 C288 46 315 75 341 54 C376 25 392 49 420 30 C450 10 472 18 500 5"
                    stroke="#10B981"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  <circle cx="500" cy="5" r="6" fill="#10B981" />

                  <circle
                    cx="500"
                    cy="5"
                    r="11"
                    fill="#10B981"
                    opacity="0.12"
                  />
                </svg>
              </div>

              {/* Growth metrics */}
              <div className="mt-6 space-y-4">
                {growthItems.map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#64748B]">
                        {item.label}
                      </span>

                      <span className="text-xs font-bold text-[#0F172A]">
                        {item.value}
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-[#E2E8F0]">
                      <div
                        className="h-full rounded-full bg-[#10B981]"
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* =====================================================
                FUNDING CARD
            ===================================================== */}
            <div
              className="
                absolute
                left-0 top-[7%]
                z-20
                w-[165px]
                rounded-2xl
                border border-white
                bg-white/95
                p-4
                shadow-[0_18px_45px_rgba(15,23,42,0.12)]
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_25px_55px_rgba(15,23,42,0.16)]
                sm:w-[180px]
              "
            >
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ECFDF5]">
                  <WalletCards size={18} className="text-[#10B981]" />
                </div>

                <MoveUpRight size={15} className="text-[#94A3B8]" />
              </div>

              <p className="mt-4 text-[11px] font-semibold text-[#64748B]">
                Funding Access
              </p>

              <p className="mt-1 text-xl font-extrabold text-[#0F172A]">
                ₹25L+
              </p>
            </div>

            {/* =====================================================
                WORKING CAPITAL CARD
            ===================================================== */}
            <div
              className="
                absolute
                bottom-[12%]
                left-0
                z-20
                w-[175px]
                rounded-2xl
                border border-white
                bg-white/95
                p-4
                shadow-[0_18px_45px_rgba(15,23,42,0.12)]
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF]">
                  <BriefcaseBusiness size={18} className="text-[#0B2578]" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold text-[#64748B]">
                    Business Purpose
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-[#0F172A]">
                    Working Capital
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                EXPANSION CARD
            ===================================================== */}
            <div
              className="
                absolute
                right-0 top-[27%]
                z-20
                w-[175px]
                rounded-2xl
                border border-white
                bg-white/95
                p-4
                shadow-[0_18px_45px_rgba(15,23,42,0.12)]
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1
                sm:w-[190px]
              "
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ECFDF5]">
                  <TrendingUp size={18} className="text-[#10B981]" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold text-[#64748B]">
                    Growth Opportunity
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-[#0F172A]">
                    Business Expansion
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                PROCESS CARD
            ===================================================== */}
            <div
              className="
                absolute
                bottom-[5%]
                right-[3%]
                z-20
                w-[175px]
                rounded-2xl
                border border-white
                bg-[#0B2578]
                p-4
                shadow-[0_20px_50px_rgba(11,37,120,0.22)]
                transition-all duration-300
                hover:-translate-y-1
                sm:w-[190px]
              "
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <FileCheck2 size={18} className="text-[#6EE7B7]" />
                </div>

                <div>
                  <p className="text-[10px] font-medium text-white/60">
                    Application
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-white">
                    Simple Process
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1.5 text-[10px] font-semibold text-[#6EE7B7]">
                <CheckCircle2 size={13} />
                Easy assistance
              </div>
            </div>

            {/* =====================================================
                FLOATING BADGES
            ===================================================== */}
            <div
              className="
                absolute
                right-[6%]
                top-[4%]
                z-30
                hidden
                items-center gap-2
                rounded-full
                border border-[#10B981]/20
                bg-white/95
                px-3.5 py-2
                text-[10px] font-bold
                text-[#0F172A]
                shadow-lg
                backdrop-blur-md
                sm:flex
              "
            >
              <CheckCircle2 size={14} className="text-[#10B981]" />
              Built for Business Growth
            </div>

            <div
              className="
                absolute
                bottom-[18%]
                right-[3%]
                z-30
                hidden
                items-center gap-2
                rounded-full
                border border-[#0B2578]/10
                bg-white/95
                px-3.5 py-2
                text-[10px] font-bold
                text-[#0B2578]
                shadow-lg
                backdrop-blur-md
                md:flex
              "
            >
              <WalletCards size={14} className="text-[#10B981]" />
              Flexible Funding Solutions
            </div>
          </div>
        </div>

        {/* =========================================================
            TRUST STRIP
        ========================================================= */}
        <div
          className="
            mt-6
            overflow-hidden
            rounded-3xl
            border border-[#E2E8F0]
            bg-white
            shadow-[0_12px_40px_rgba(15,23,42,0.05)]
          "
        >
          <div className="grid divide-y divide-[#E2E8F0] md:grid-cols-[1.2fr_repeat(3,1fr)] md:divide-x md:divide-y-0">
            {/* Message */}
            <div className="flex items-center px-6 py-6 sm:px-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#10B981]">
                  BOROFIRST
                </p>

                <p className="mt-1 text-sm font-semibold text-[#0F172A]">
                  Helping businesses move forward with confidence
                </p>
              </div>
            </div>

            {/* Stats */}
            {trustStats.map((stat) => (
              <div key={stat.label} className="px-6 py-5 sm:px-8">
                <p className="text-2xl font-extrabold tracking-tight text-[#0B2578]">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs font-medium text-[#64748B]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-4 text-center text-[10px] leading-5 text-[#94A3B8]">
          *Displayed figures are illustrative placeholders and should be
          replaced with BOROFIRST-approved business statistics before production
          use.
        </p>
      </div>
    </section>
  );
};

export default BusinessLoanHero;
