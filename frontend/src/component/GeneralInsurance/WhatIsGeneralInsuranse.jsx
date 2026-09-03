import React from "react";
import {
  ArrowDown,
  CircleCheck,
  Info,
  Layers3,
  ShieldCheck,
  TriangleAlert,
  WalletCards,
} from "lucide-react";

const educationalPoints = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Protection Against Risks",
    description: "Helps address the financial impact of unexpected events.",
  },
  {
    id: 2,
    icon: Layers3,
    title: "Flexible Coverage",
    description:
      "Different insurance products are designed for different needs.",
  },
  {
    id: 3,
    icon: WalletCards,
    title: "Financial Preparedness",
    description:
      "Helps you plan for expenses that may arise from covered events.",
  },
];

const insuranceFlow = [
  {
    id: 1,
    title: "Unexpected Event",
    description: "Accident, damage, medical expense or travel emergency",
    icon: TriangleAlert,
    type: "normal",
  },
  {
    id: 2,
    title: "Financial Risk",
    description: "Unexpected expenses can put pressure on your finances.",
    icon: WalletCards,
    type: "normal",
  },
  {
    id: 3,
    title: "Insurance Protection",
    description: "A suitable policy can help cover eligible risks.",
    icon: ShieldCheck,
    type: "featured",
  },
  {
    id: 4,
    title: "Reduced Financial Burden",
    description: "Helps manage the financial impact of covered events.",
    icon: CircleCheck,
    type: "normal",
  },
];

const EducationalPoint = ({ icon: Icon, title, description }) => {
  return (
    <div className="group flex items-start gap-3.5">
      <div
        className="
          flex h-10 w-10 shrink-0 items-center justify-center
          rounded-xl
          border border-[#10B981]/10
          bg-[#10B981]/10
          text-[#186A07]
          transition-all duration-300
          group-hover:-translate-y-0.5
          group-hover:border-[#10B981]/25
          group-hover:bg-[#10B981]/15
        "
      >
        <Icon size={19} strokeWidth={2} aria-hidden="true" />
      </div>

      <div className="pt-0.5">
        <h3 className="text-sm font-bold tracking-[-0.01em] text-[#0F172A] sm:text-[15px]">
          {title}
        </h3>

        <p className="mt-1 max-w-md text-xs leading-5 text-[#64748B] sm:text-[13px]">
          {description}
        </p>
      </div>
    </div>
  );
};

const FlowConnector = () => {
  return (
    <div
      className="
        relative flex h-10 w-full
        items-center justify-center
        motion-reduce:transition-none
      "
      aria-hidden="true"
    >
      <div className="absolute inset-y-0 w-px bg-[#10B981]/25" />

      <div
        className="
          relative z-10 flex h-6 w-6 items-center justify-center
          rounded-full border border-[#10B981]/15
          bg-[#F8FAFC]
          text-[#10B981]
          motion-safe:animate-pulse
          motion-reduce:animate-none
        "
      >
        <ArrowDown size={13} strokeWidth={2.5} />
      </div>
    </div>
  );
};

const FlowNode = ({ item }) => {
  const Icon = item.icon;
  const isFeatured = item.type === "featured";

  if (isFeatured) {
    return (
      <div
        className="
          group relative w-full max-w-lg overflow-hidden
          rounded-3xl
          bg-linear-to-br from-[#186A07] to-[#0B2578]
          p-6
          text-white
          shadow-[0_24px_55px_rgba(11,37,120,0.18)]
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-[0_30px_65px_rgba(11,37,120,0.24)]
          motion-reduce:transition-none
        "
      >
        {/* Decorative glow */}
        <div
          className="
            pointer-events-none absolute -right-16 -top-16
            h-36 w-36 rounded-full
            bg-[#10B981]/20 blur-3xl
            transition-opacity duration-500
            group-hover:bg-[#10B981]/30
          "
          aria-hidden="true"
        />

        <div
          className="
            pointer-events-none absolute -bottom-20 -left-16
            h-40 w-40 rounded-full
            bg-white/5 blur-3xl
          "
          aria-hidden="true"
        />

        <div className="relative flex flex-col items-center text-center">
          <div
            className="
              flex h-20 w-20 items-center justify-center
              rounded-3xl
              border border-white/20
              bg-white/10
              shadow-[0_12px_30px_rgba(0,0,0,0.12)]
              backdrop-blur-sm
              transition-transform duration-500
              group-hover:scale-105
              motion-safe:animate-pulse
              motion-reduce:animate-none
            "
          >
            <Icon
              size={40}
              strokeWidth={1.8}
              className="text-white"
              aria-hidden="true"
            />
          </div>

          <span
            className="
              mt-4 inline-flex items-center rounded-full
              border border-white/15
              bg-white/10
              px-3 py-1
              text-[9px] font-bold uppercase
              tracking-[0.18em] text-white/85
            "
          >
            Financial Protection
          </span>

          <h3 className="mt-4 text-lg font-bold tracking-[-0.02em] sm:text-xl">
            {item.title}
          </h3>

          <p className="mt-2 max-w-md text-xs leading-5 text-white/75 sm:text-sm">
            {item.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        group relative w-full max-w-md
        overflow-hidden
        rounded-2xl
        border border-[#E2E8F0]
        bg-white
        p-4
        shadow-[0_10px_35px_rgba(15,23,42,0.05)]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#10B981]/25
        hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]
        motion-reduce:transition-none
        sm:p-5
      "
    >
      <div
        className="
          absolute bottom-0 left-0 h-0.5 w-0
          bg-linear-to-r from-[#186A07] to-[#10B981]
          transition-all duration-500
          group-hover:w-full
        "
        aria-hidden="true"
      />

      <div className="flex items-start gap-3.5">
        <div
          className="
            flex h-11 w-11 shrink-0 items-center justify-center
            rounded-xl
            border border-[#E2E8F0]
            bg-[#F8FAFC]
            text-[#0B2578]
            transition-all duration-300
            group-hover:border-[#10B981]/20
            group-hover:bg-[#10B981]/10
            group-hover:text-[#186A07]
          "
        >
          <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-bold tracking-[-0.01em] text-[#0F172A] sm:text-[15px]">
            {item.title}
          </h3>

          <p className="mt-1.5 text-xs leading-5 text-[#64748B] sm:text-[13px]">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const WhatIsGeneralInsurance = () => {
  return (
    <section
      aria-labelledby="general-insurance-heading"
      className="
        relative isolate overflow-hidden
        bg-[#F8FAFC]
        py-20 sm:py-24 lg:py-28
      "
    >
      {/* Background decoration */}
      <div
        className="
          pointer-events-none absolute -left-40 top-20
          -z-10 h-[360px] w-[360px]
          rounded-full
          bg-[#10B981]/5
          blur-3xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none absolute -right-48 bottom-0
          -z-10 h-[430px] w-[430px]
          rounded-full
          bg-[#0B2578]/5
          blur-3xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none absolute left-[8%] top-[18%]
          -z-10 h-1.5 w-1.5 rounded-full
          bg-[#10B981]/20
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none absolute right-[12%] top-[30%]
          -z-10 h-2 w-2 rounded-full
          bg-[#0B2578]/15
        "
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
          {/* LEFT — Educational Content */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#186A07]" />
              </span>

              <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
                Understanding Insurance
              </span>
            </div>

            {/* Heading */}
            <h2
              id="general-insurance-heading"
              className="
                max-w-xl
                text-4xl font-bold
                leading-[1.05]
                tracking-[-0.04em]
                text-[#0F172A]
                sm:text-5xl
                lg:text-[52px]
              "
            >
              What Is{" "}
              <span className="block bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
                General Insurance ?
              </span>
            </h2>

            {/* Heading */}

            {/* Main explanation */}
            <p className="mt-6 max-w-xl text-base leading-7 text-[#64748B] sm:text-lg">
              General insurance provides financial protection against various
              risks such as accidents, vehicle damage, medical expenses,
              property loss and travel-related emergencies.
            </p>

            {/* Supporting statement */}
            <p
              className="
                mt-4 max-w-lg
                border-l-2 border-[#10B981]/30
                pl-4
                text-sm leading-6
                text-[#64748B]
              "
            >
              It helps you prepare financially for situations that may otherwise
              create unexpected expenses.
            </p>

            {/* Educational Points */}
            <div className="mt-9 space-y-5 sm:mt-10">
              {educationalPoints.map((point) => (
                <EducationalPoint key={point.id} {...point} />
              ))}
            </div>
          </div>

          {/* RIGHT — Insurance Protection Flow */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Flow heading */}
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#64748B]">
                    How Protection Works
                  </p>
                  <p className="mt-1 text-sm text-[#94A3B8]">
                    A simple way to understand the concept
                  </p>
                </div>

                <div
                  className="
                    hidden h-9 w-9 items-center justify-center
                    rounded-xl
                    border border-[#E2E8F0]
                    bg-white
                    text-[#10B981]
                    shadow-sm
                    sm:flex
                  "
                  aria-hidden="true"
                >
                  <ShieldCheck size={18} />
                </div>
              </div>

              {/* Flow */}
              <div className="flex flex-col items-center">
                {insuranceFlow.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <FlowNode item={item} />

                    {index < insuranceFlow.length - 1 && <FlowConnector />}
                  </React.Fragment>
                ))}
              </div>

              {/* Disclaimer */}
              <div
                className="
                  mt-6 flex items-start gap-2
                  rounded-xl
                  border border-[#E2E8F0]/80
                  bg-white/70
                  px-3.5 py-3
                  backdrop-blur-sm
                "
              >
                <Info
                  size={14}
                  className="mt-0.5 shrink-0 text-[#64748B]"
                  aria-hidden="true"
                />

                <p className="text-[11px] leading-5 text-[#64748B]/90">
                  Coverage, exclusions and benefits depend on the specific
                  insurance policy and insurer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsGeneralInsurance;
