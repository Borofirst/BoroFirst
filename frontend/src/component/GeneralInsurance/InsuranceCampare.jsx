import React, { useState } from "react";
import {
  ShieldCheck,
  Car,
  HeartPulse,
  Home,
  Plane,
  BriefcaseBusiness,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Info,
} from "lucide-react";

const insuranceCategories = [
  {
    id: "motor",
    title: "Motor Insurance",
    shortTitle: "Car & Bike",
    icon: Car,
    color: "emerald",
    description:
      "Protect your car or two-wheeler against eligible risks such as accidents, theft and other covered events.",
    protects: "Cars, bikes and other eligible vehicles",
    suitableFor:
      "Vehicle owners looking for financial protection against covered motor-related risks.",
    benefits: [
      "Protection against covered accidental damage",
      "Support for eligible theft-related claims",
      "Third-party liability cover where applicable",
    ],
  },
  {
    id: "health",
    title: "Health Insurance",
    shortTitle: "Health",
    icon: HeartPulse,
    color: "emerald",
    description:
      "Health insurance can help manage eligible medical expenses and provide financial support during covered healthcare events.",
    protects: "Your health and eligible medical expenses",
    suitableFor:
      "Individuals and families planning for unexpected healthcare costs.",
    benefits: [
      "Helps manage eligible hospitalization expenses",
      "Different coverage options may be available",
      "Can support financial preparedness for healthcare needs",
    ],
  },
  {
    id: "home",
    title: "Home Insurance",
    shortTitle: "Home",
    icon: Home,
    color: "emerald",
    description:
      "Home insurance can provide protection for eligible property and belongings against specified risks covered by the policy.",
    protects: "Your home and eligible belongings",
    suitableFor:
      "Homeowners and property owners looking to prepare for covered property-related risks.",
    benefits: [
      "Protection for eligible property risks",
      "Coverage options for certain household belongings",
      "Helps reduce the financial impact of covered events",
    ],
  },
  {
    id: "travel",
    title: "Travel Insurance",
    shortTitle: "Travel",
    icon: Plane,
    color: "emerald",
    description:
      "Travel insurance can provide financial protection for eligible travel-related risks during covered journeys.",
    protects: "Your journey and eligible travel-related risks",
    suitableFor:
      "Travellers looking for additional financial preparedness during domestic or international trips.",
    benefits: [
      "Support for eligible travel-related emergencies",
      "Coverage may include specified trip-related risks",
      "Useful for planning unexpected travel expenses",
    ],
  },
  {
    id: "business",
    title: "Business Insurance",
    shortTitle: "Business",
    icon: BriefcaseBusiness,
    color: "emerald",
    description:
      "Business insurance can help businesses prepare for eligible operational, property or liability-related risks.",
    protects: "Your business and eligible business-related risks",
    suitableFor:
      "Business owners looking to manage potential financial risks associated with their operations.",
    benefits: [
      "Protection against selected business risks",
      "Coverage options can vary by business type",
      "Helps improve financial risk preparedness",
    ],
  },
];

const protectionOptions = [
  {
    id: "motor",
    title: "My Vehicle",
    subtitle: "Car or two-wheeler",
    icon: Car,
  },
  {
    id: "health",
    title: "My Health",
    subtitle: "Individual or family",
    icon: HeartPulse,
  },
  {
    id: "home",
    title: "My Home",
    subtitle: "Property & belongings",
    icon: Home,
  },
  {
    id: "travel",
    title: "My Travel",
    subtitle: "Domestic or international",
    icon: Plane,
  },
  {
    id: "business",
    title: "My Business",
    subtitle: "Business-related risks",
    icon: BriefcaseBusiness,
  },
];

const InsuranceComparison = () => {
  const [selectedId, setSelectedId] = useState("motor");

  const selectedInsurance =
    insuranceCategories.find((item) => item.id === selectedId) ||
    insuranceCategories[0];

  const SelectedIcon = selectedInsurance.icon;

  return (
    <section
      id="insurance-comparison"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#10B981]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#0B2578]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#10B981]/20 bg-white px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#186A07] shadow-sm">
            <Sparkles
              size={14}
              aria-hidden="true"
            />
            Insurance Assistance
          </div>

          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0F172A] sm:text-5xl lg:text-[52px]">
            Not Sure Which{" "}
            <span className="text-[#186A07]">Insurance</span> You Need?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
            Tell us what you want to protect. Explore the relevant insurance
            category, understand its purpose and make a more informed decision.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          {/* LEFT - Selection */}
          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-7">
            <div className="mb-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">
                STEP 01
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#0F172A]">
                What do you want to protect?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#64748B]">
                Choose an area below to understand the insurance category that
                may be relevant to your needs.
              </p>
            </div>

            <div className="space-y-3">
              {protectionOptions.map((option) => {
                const Icon = option.icon;
                const isSelected = selectedId === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelectedId(option.id)}
                    aria-pressed={isSelected}
                    className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 ${
                      isSelected
                        ? "border-[#10B981]/40 bg-[#10B981]/5 shadow-[0_8px_24px_rgba(16,185,129,0.08)]"
                        : "border-[#E2E8F0] bg-white hover:-translate-y-0.5 hover:border-[#10B981]/30 hover:bg-[#F8FAFC]"
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                        isSelected
                          ? "bg-[#118A09] text-white"
                          : "bg-[#10B981]/10 text-[#186A07] group-hover:bg-[#118A09] group-hover:text-white"
                      }`}
                    >
                      <Icon size={22} aria-hidden="true" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-[#0F172A]">
                        {option.title}
                      </p>

                      <p className="mt-0.5 text-sm text-[#64748B]">
                        {option.subtitle}
                      </p>
                    </div>

                    <ArrowRight
                      size={18}
                      aria-hidden="true"
                      className={`shrink-0 transition-transform duration-300 ${
                        isSelected
                          ? "translate-x-1 text-[#186A07]"
                          : "text-[#94A3B8] group-hover:translate-x-1 group-hover:text-[#186A07]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT - Dynamic Explanation */}
          <div
            key={selectedInsurance.id}
            className="relative overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10"
          >
            {/* Top Accent */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#10B981]/5 blur-3xl"
            />

            <div className="relative">
              {/* Category Header */}
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#186A07] to-[#0B2578] text-white shadow-[0_12px_30px_rgba(11,37,120,0.15)]">
                    <SelectedIcon
                      size={28}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#186A07]">
                      RELEVANT CATEGORY
                    </p>

                    <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
                      {selectedInsurance.title}
                    </h3>
                  </div>
                </div>

                <div className="rounded-full border border-[#10B981]/15 bg-[#10B981]/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#186A07]">
                  {selectedInsurance.shortTitle}
                </div>
              </div>

              {/* Description */}
              <div className="mt-8">
                <p className="text-base leading-7 text-[#64748B] sm:text-lg">
                  {selectedInsurance.description}
                </p>
              </div>

              {/* Protects */}
              <div className="mt-7 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#10B981]/10 text-[#186A07]">
                    <ShieldCheck
                      size={17}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#94A3B8]">
                      WHAT IT CAN HELP PROTECT
                    </p>

                    <p className="mt-1 text-sm font-semibold leading-6 text-[#0F172A]">
                      {selectedInsurance.protects}
                    </p>
                  </div>
                </div>
              </div>

              {/* Suitable For */}
              <div className="mt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#94A3B8]">
                  WHO MAY CONSIDER IT
                </p>

                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  {selectedInsurance.suitableFor}
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-7">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#94A3B8]">
                  KEY AREAS TO UNDERSTAND
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {selectedInsurance.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-4"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#2c8e18]"
                        aria-hidden="true"
                      />

                      <p className="text-sm leading-5 text-[#475569]">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-4 border-t border-[#E2E8F0] pt-7 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-2">
                  <Info
                    size={15}
                    className="mt-0.5 shrink-0 text-[#94A3B8]"
                    aria-hidden="true"
                  />

                  <p className="max-w-md text-xs leading-5 text-[#64748B]">
                    Coverage, premiums, eligibility and policy terms depend on
                    the selected product and insurer.
                  </p>
                </div>

                <a
                  href="#insurance-options"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#186A07] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(24,106,7,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B2578] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  Explore Options
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Journey */}
        <div className="mx-auto mt-10 max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            <span className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-semibold text-[#64748B]">
              Tell us what you want to protect
            </span>

            <ArrowRight
              size={16}
              className="text-[#186A07]"
              aria-hidden="true"
            />

            <span className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-semibold text-[#64748B]">
              Understand relevant options
            </span>

            <ArrowRight
              size={16}
              className="text-[#186A07]"
              aria-hidden="true"
            />

            <span className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-semibold text-[#64748B]">
              Make an informed decision
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceComparison;