import React from "react";
import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  HeartPulse,
  House,
  Plane,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const insuranceItems = [
  {
    id: 1,
    title: "Home",
    subtitle: "Protect your space",
    icon: House,
    position: "left-0 top-4 lg:-left-2 xl:-left-8 lg:top-10",
    animation: "animate-[float_5s_ease-in-out_infinite]",
  },
  {
    id: 2,
    title: "Motor",
    subtitle: "Protect your journey",
    icon: CarFront,
    position: "right-0 top-8 lg:-right-4 xl:-right-10 lg:top-16",
    animation: "animate-[float_5s_ease-in-out_infinite]",
  },
  {
    id: 3,
    title: "Health",
    subtitle: "Protect your wellbeing",
    icon: HeartPulse,
    position: "right-0 bottom-16 lg:-right-2 xl:-right-8 lg:bottom-20",
    animation: "animate-[float_6s_ease-in-out_infinite]",
  },
  {
    id: 4,
    title: "Travel",
    subtitle: "Travel with confidence",
    icon: Plane,
    position: "left-0 bottom-4 lg:-left-2 xl:-left-8 lg:bottom-8",
    animation: "animate-[float_6s_ease-in-out_infinite]",
  },
];

const trustPoints = [
  "Multiple Insurance Options",
  "Simple Guidance",
  "Customer-Focused Support",
];

const GeneralInsuranceHero = () => {

                    const InsuranceComparison = () => {
    // Replace with your eligibility section ID or route.
    document.getElementById("insurance-comparison")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <section className="relative isolate overflow-hidden bg-[#F8FAFC]">
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Soft green glow */}
        <div className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-[#10B981]/10 blur-3xl" />

        {/* Soft navy glow */}
        <div className="absolute -bottom-40 right-[18%] h-[380px] w-[380px] rounded-full bg-[#0B2578]/5 blur-3xl" />

        {/* Subtle green glow */}
        <div className="absolute left-[-180px] top-[35%] h-[350px] w-[350px] rounded-full bg-[#186A07]/5 blur-3xl" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-linear(#0B2578 1px, transparent 1px), linear-linear(90deg, #0B2578 1px, transparent 1px)",
            backgroundSize: "55px 55px",
            maskImage:
              "linear-linear(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-linear(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-24 lg:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 xl:gap-14">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="relative z-10 max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#10B981]/20 bg-white px-3.5 py-2 shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#10B981]/10">
                <ShieldCheck
                  size={14}
                  strokeWidth={2.5}
                  className="text-[#10B981]"
                />
              </span>

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0B2578] sm:text-xs">
                General Insurance
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-[#0F172A] sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.35rem]">
              Protect What Matters.
              <span className="mt-2 block bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
                Prepare for What’s Next.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">
              Explore insurance solutions designed to help protect your health,
              vehicle, home, travel and more — with guidance from BOROFIRST.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                type="button"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(11,37,120,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(11,37,120,0.25)] focus:outline-none focus:ring-4 focus:ring-[#10B981]/20"
              >
                Explore Insurance
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <button
                type="button"
                onClick={InsuranceComparison }
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border border-[#E2E8F0] bg-white px-6 py-3.5 text-sm font-bold text-[#0F172A] shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#10B981]/30 hover:bg-[#F8FAFC] hover:text-[#186A07] focus:outline-none focus:ring-4 focus:ring-[#10B981]/15"
              >
                <ShieldCheck size={18} />
                Find My Insurance
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#E2E8F0] pt-6">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-xs font-medium text-[#64748B] sm:text-sm"
                >
                  <CheckCircle2
                    size={16}
                    strokeWidth={2.2}
                    className="shrink-0 text-[#10B981]"
                  />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              RIGHT PROTECTION ECOSYSTEM
          ====================================================== */}
          <div className="relative mx-auto flex h-[500px] w-full max-w-[650px] items-center justify-center sm:h-[560px] lg:h-[600px]">
            {/* Background ring */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#10B981]/10 sm:h-[410px] sm:w-[410px]"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0B2578]/10 sm:h-[320px] sm:w-[320px]"
            />

            {/* Dashed orbit */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#10B981]/15 sm:h-[490px] sm:w-[490px]"
            />

            {/* =================================================
                CONNECTION LINES
            ================================================== */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 sm:h-[420px] sm:w-[420px]"
            >
              {/* Vertical */}
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-linear-to-b from-transparent via-[#10B981]/20 to-transparent" />

              {/* Horizontal */}
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-linear-to-r from-transparent via-[#0B2578]/15 to-transparent" />

              {/* Diagonal 1 */}
              <div className="absolute left-1/2 top-1/2 h-px w-[90%] -translate-x-1/2 -translate-y-1/2 rotate-[32deg] bg-linear-to-r from-transparent via-[#10B981]/10 to-transparent" />

              {/* Diagonal 2 */}
              <div className="absolute left-1/2 top-1/2 h-px w-[90%] -translate-x-1/2 -translate-y-1/2 -rotate-[32deg] bg-linear-to-r from-transparent via-[#0B2578]/10 to-transparent" />
            </div>

            {/* =================================================
                CENTRAL PROTECTION
            ================================================== */}
            <div className="relative z-20 flex h-[190px] w-[190px] items-center justify-center rounded-[48px] border border-white/80 bg-white shadow-[0_30px_80px_rgba(11,37,120,0.14)] sm:h-[220px] sm:w-[220px]">
              {/* Inner glow */}
              <div
                aria-hidden="true"
                className="absolute inset-5 rounded-[38px] bg-linear-to-br from-[#10B981]/10 via-white to-[#0B2578]/10"
              />

              {/* Shield */}
              <div className="relative flex h-[105px] w-[105px] items-center justify-center rounded-[34px] bg-linear-to-br from-[#186A07] to-[#0B2578] shadow-[0_18px_35px_rgba(11,37,120,0.25)] sm:h-[120px] sm:w-[120px]">
                <ShieldCheck
                  size={58}
                  strokeWidth={1.7}
                  className="text-white sm:h-[64px] sm:w-[64px]"
                />

                {/* Small sparkle */}
                <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/80 bg-white shadow-lg">
                  <Sparkles
                    size={14}
                    className="text-[#10B981]"
                    fill="currentColor"
                  />
                </span>
              </div>

              {/* Label */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#E2E8F0] bg-white px-4 py-2 shadow-[0_10px_25px_rgba(15,23,42,0.08)]">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0B2578]">
                  Protection
                </span>
              </div>
            </div>

            {/* =================================================
                FLOATING INSURANCE CARDS
            ================================================== */}
            {insuranceItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className={`absolute z-30 ${item.position} ${item.animation}`}
                >
                  <div className="group flex w-[145px] items-center gap-3 rounded-[20px] border border-white/80 bg-white/95 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.14)] sm:w-[165px] sm:p-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#10B981]/10 text-[#186A07] transition-colors duration-300 group-hover:bg-[#10B981] group-hover:text-white">
                      <Icon size={20} strokeWidth={2} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-bold text-[#0F172A]">
                        {item.title}
                      </p>

                      <p className="mt-0.5 text-[10px] leading-4 text-[#64748B] sm:text-[11px]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* =================================================
                SMALL CENTER BADGES
            ================================================== */}
            <div className="absolute left-1/2 top-3 z-30 -translate-x-1/2 rounded-full border border-[#10B981]/15 bg-white px-3 py-1.5 shadow-[0_8px_25px_rgba(15,23,42,0.06)] sm:top-6">
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#186A07] sm:text-[10px]">
                Your Protection Ecosystem
              </span>
            </div>

            {/* Bottom mini label */}
            <div className="absolute bottom-2 left-1/2 z-30 -translate-x-1/2 rounded-full bg-[#0B2578] px-4 py-2 text-[10px] font-semibold text-white shadow-lg sm:bottom-4">
              Protection for what matters
            </div>

            {/* Decorative dots */}
            <span className="absolute left-[18%] top-[28%] h-2 w-2 rounded-full bg-[#10B981]/50 insurance-pulse" />
            <span className="absolute right-[19%] top-[40%] h-1.5 w-1.5 rounded-full bg-[#0B2578]/40 insurance-pulse-delay" />
            <span className="absolute bottom-[28%] left-[28%] h-1.5 w-1.5 rounded-full bg-[#186A07]/40 insurance-pulse" />
          </div>
        </div>
      </div>

      {/* =========================================================
          COMPONENT-LOCAL ANIMATIONS
      ========================================================== */}
    </section>
  );
};

export default GeneralInsuranceHero;
