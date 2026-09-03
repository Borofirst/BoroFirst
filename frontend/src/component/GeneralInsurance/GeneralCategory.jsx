import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CarFront,
  CheckCircle2,
  HeartPulse,
  House,
  Plane,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const insuranceCategories = [
  {
    id: "motor",
    title: "Motor Insurance",
    description: "Protect your car or two-wheeler against unexpected costs.",
    icon: CarFront,
    href: "/insurance/motor",
    featured: false,
  },
  {
    id: "health",
    title: "Health Insurance",
    description: "Get financial support for medical and healthcare expenses.",
    icon: HeartPulse,
    href: "/insurance/health",
    featured: false,
  },
  {
    id: "travel",
    title: "Travel Insurance",
    description:
      "Travel with confidence with protection against unexpected events.",
    icon: Plane,
    href: "/insurance/travel",
    featured: false,
  },
  {
    id: "home",
    title: "Home Insurance",
    description: "Protect your home and valuable belongings.",
    icon: House,
    href: "/insurance/home",
    featured: false,
  },
  {
    id: "personal-accident",
    title: "Personal Accident",
    description: "Financial protection against accidental events.",
    icon: ShieldCheck,
    href: "/insurance/personal-accident",
    featured: false,
  },
  {
    id: "business",
    title: "Business Insurance",
    description: "Help protect your business from unexpected risks.",
    icon: Building2,
    href: "/insurance/business",
    featured: false,
  },
];

const InsuranceCategorySelector = () => {
  return (
    <section
      aria-labelledby="insurance-category-heading"
      className="relative overflow-hidden bg-linear-to-b from-white to-[#F8FAFC] py-16 sm:py-20 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Emerald glow */}
        <div className="absolute -left-40 top-24 h-[360px] w-[360px] rounded-full bg-[#10B981]/5 blur-3xl" />

        {/* Navy glow */}
        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#0B2578]/5 blur-3xl" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-linear(#0B2578 1px, transparent 1px), linear-linear(90deg, #0B2578 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "linear-linear(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-linear(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        />

        {/* Decorative circles */}
        <div className="absolute left-[8%] top-[12%] h-2 w-2 rounded-full bg-[#10B981]/30" />
        <div className="absolute right-[12%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#0B2578]/20" />
        <div className="absolute bottom-[18%] left-[20%] h-1.5 w-1.5 rounded-full bg-[#186A07]/25" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =======================================================
            SECTION HEADER
        ======================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#186A07]" />
            </span>

            <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
              Insurance Solutions
            </span>
          </div>

          {/* Heading */}

          <h2 className=" text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.45rem]">
            What Do You Want to{" "}
            <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent ">
              Protect?
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
            From your vehicle and health to your home, travel and business,
            explore protection designed around the things that matter most.
          </p>
        </div>

        {/* =======================================================
            CATEGORY GRID
        ======================================================== */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-5">
          {insuranceCategories.map((category) => {
            const Icon = category.icon;

            return (
              <a
                key={category.id}
                aria-label={`Explore ${category.title}`}
                className="transform  group relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.035)] outline-none transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/30 hover:shadow-[0_20px_45px_rgba(15,23,42,0.09)] focus-visible:ring-4 focus-visible:ring-[#10B981]/20 sm:p-6"
              >
                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#10B981]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Subtle bottom linear */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#186A07] to-[#0B2578] transition-all duration-500 group-hover:w-full"
                />

                {/* =================================================
                    TOP ROW
                ================================================== */}
                <div className="relative flex items-start justify-between">
                  <div
                    className="
                    pointer-events-none
                    absolute -right-10 -top-10
                    h-28 w-28
                    rounded-full
                    bg-[#EAF6E7]
                    blur-2xl
                    transition-all duration-500
                    group-hover:border-[#186A07]/30
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
                    <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
                  </div>

                  {/* Arrow */}
                  <div className="insurance-arrow flex h-9 w-9 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#64748B] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-[#10B981] group-hover:bg-[#118A09] group-hover:text-white">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}
                <div className="relative mt-7">
                  <h3 className="text-[19px] font-bold tracking-[-0.02em] text-[#0F172A]">
                    {category.title}
                  </h3>

                  <p className="mt-2.5 min-h-[50px] max-w-sm text-sm leading-6 text-[#64748B]">
                    {category.description}
                  </p>
                </div>

                {/* =================================================
                    CTA
                ================================================== */}
                <div className="relative mt-6 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0B2578] transition-colors duration-300 group-hover:text-[#186A07]">
                    Explore {category.title}
                  </span>

                  <ArrowRight
                    size={16}
                    className="text-[#10B981] transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </a>
            );
          })}
        </div>

        {/* =======================================================
            FIND MY INSURANCE CALLOUT
        ======================================================== */}
        <div className="relative mt-8 overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
          {/* Background accents */}
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#10B981]/8 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-20 left-20 h-44 w-44 rounded-full bg-[#0B2578]/5 blur-3xl"
          />

          <div className="relative flex flex-col gap-6 p-6 sm:p-7 md:flex-row md:items-center md:justify-between lg:px-8">
            {/* Message */}
            <div className="flex items-start gap-4">
              <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#186A07] to-[#0B2578] text-white shadow-[0_8px_20px_rgba(11,37,120,0.15)] sm:flex">
                <Sparkles size={19} strokeWidth={1.8} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-[#10B981] sm:hidden"
                    aria-hidden="true"
                  />

                  <h3 className="text-base font-bold text-[#0F172A] sm:text-lg">
                    Not sure which protection you need?
                  </h3>
                </div>

                <p className="mt-1.5 text-sm leading-6 text-[#64748B]">
                  Explore the right insurance category for your needs with
                  simple guidance from BOROFIRST.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href=""
              className="group inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(11,37,120,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(11,37,120,0.22)] focus:outline-none focus:ring-4 focus:ring-[#10B981]/20"
            >
              Find My Insurance
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          COMPONENT-LOCAL ANIMATIONS
      ========================================================== */}
    </section>
  );
};

export default InsuranceCategorySelector;
