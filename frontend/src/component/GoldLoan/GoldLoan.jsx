import React from "react";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Gem,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

const trustIndicators = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Simple Application",
    description: "A guided journey",
  },
  {
    id: 2,
    icon: CheckCircle2,
    title: "Transparent Guidance",
    description: "Clear loan information",
  },
  {
    id: 3,
    icon: LockKeyhole,
    title: "Secure Process",
    description: "Built around trust",
  },
];

const GoldLoanHero = () => {
  const scrollToCalculator = () => {
    document
      .getElementById("gold-loan-calculator")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleApply = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="gold-loan-hero"
      className="relative isolate overflow-hidden bg-[#F8FAFC]"
    >
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#10B981]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-[-120px] h-[520px] w-[520px] rounded-full bg-[#D4AF37]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#0B2578]/5 blur-3xl"
      />

      {/* Decorative Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-linear(#0B2578 1px, transparent 1px), linear-linear(90deg, #0B2578 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-12 lg:px-10 lg:pb-15 lg:pt-30">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-16">
          {/* =========================================================
              LEFT CONTENT
          ========================================================== */}
          <div className="relative z-10 max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-white/80 px-3.5 py-2 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-md">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0B2578] text-white">
                <Gem size={13} strokeWidth={2.2} />
              </span>

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0B2578] sm:text-xs">
                Gold Loan
              </span>

              <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />

              <span className="text-[11px] font-medium text-[#64748B] sm:text-xs">
                Financially Smarter
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-[2.7rem] font-extrabold leading-[1.04] tracking-[-0.045em] text-[#0F172A] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Your Gold Has Value.
              <span className="mt-1 block text-[#0B2578]">
                Let It{" "}
                <span className="relative inline-block text-[#186A07]">
                  Work
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#D4AF37]/70"
                  />
                </span>{" "}
                for You.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#64748B] sm:text-base sm:leading-8">
              Get access to funds by pledging eligible gold jewellery, with a
              simple application process and transparent guidance from{" "}
              <span className="font-semibold text-[#0F172A]">BOROFIRST</span>.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleApply}
                className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-2xl bg-[#186A07] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_35px_rgba(16,185,129,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2c8e18] hover:shadow-[0_18px_40px_rgba(16,185,129,0.32)] focus:outline-none focus:ring-4 focus:ring-[#10B981]/20"
              >
                <span>Apply for Gold Loan</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={15} />
                </span>
              </button>

              <button
                type="button"
                onClick={scrollToCalculator}
                className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-2xl border border-[#E2E8F0] bg-white px-6 py-3.5 text-sm font-bold text-[#0F172A] shadow-[0_8px_25px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#10B981]/40 hover:bg-[#F8FFFC] hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)] focus:outline-none focus:ring-4 focus:ring-[#10B981]/10"
              >
                <Calculator
                  size={17}
                  className="text-[#0B2578] transition-transform duration-300 group-hover:scale-110"
                />

                <span>Calculate Loan Amount</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-9 grid max-w-xl grid-cols-1 gap-4 border-t border-[#E2E8F0] pt-6 sm:grid-cols-3 sm:gap-0">
              {trustIndicators.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3 sm:px-4 ${
                      index === 0 ? "sm:pl-0" : ""
                    } ${
                      index !== 2
                        ? "border-b border-[#E2E8F0] pb-4 sm:border-b-0 sm:border-r sm:pb-0"
                        : ""
                    }`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#10B981]/10 text-[#10B981]">
                      <Icon size={17} strokeWidth={2} />
                    </span>

                    <div>
                      <p className="text-xs font-bold text-[#0F172A]">
                        {item.title}
                      </p>

                      <p className="mt-0.5 text-[10px] leading-4 text-[#94A3B8]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =========================================================
              RIGHT VISUAL
          ========================================================== */}
          <div className="relative mx-auto flex min-h-[470px] w-full max-w-[620px] items-center justify-center sm:min-h-[560px]">
            {/* Large Decorative Circle */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.035] sm:h-[440px] sm:w-[440px]"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[255px] w-[255px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#10B981]/10 sm:h-[350px] sm:w-[350px]"
            />

            {/* Gold Glow */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl sm:h-72 sm:w-72"
            />

            {/* Floating Top Badge */}
            <div className="absolute left-[4%] top-[8%] z-20 hidden animate-[float_5s_ease-in-out_infinite] sm:block">
              <div className="flex items-center gap-2 rounded-2xl border border-white bg-white/90 px-3.5 py-3 shadow-[0_15px_40px_rgba(15,23,42,0.10)] backdrop-blur-md">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#C9A227]">
                  <Sparkles size={15} />
                </span>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#94A3B8]">
                    Your Asset
                  </p>
                  <p className="text-xs font-bold text-[#0F172A]">
                    Gold Jewellery
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Bottom Badge */}
            <div className="absolute bottom-[7%] right-[1%] z-20 hidden animate-[float_6s_ease-in-out_infinite_reverse] sm:block">
              <div className="flex items-center gap-2.5 rounded-2xl border border-white bg-white/90 px-3.5 py-3 shadow-[0_15px_40px_rgba(15,23,42,0.10)] backdrop-blur-md">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#10B981]/10 text-[#10B981]">
                  <WalletCards size={15} />
                </span>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#94A3B8]">
                    Unlock
                  </p>
                  <p className="text-xs font-bold text-[#0F172A]">
                    Financial Value
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                CSS GOLD JEWELLERY
            ====================================================== */}

            {/* Necklace */}
            <div
              aria-hidden="true"
              className="absolute left-[7%] top-[22%] z-10 h-[155px] w-[155px] animate-[float_6s_ease-in-out_infinite] sm:left-[8%] sm:top-[20%] sm:h-[190px] sm:w-[190px]"
            >
              {/* Necklace outer curve */}
              <div className="absolute left-1/2 top-0 h-[145px] w-[125px] -translate-x-1/2 rounded-b-[70px] border-[8px] border-t-0 border-[#D4AF37] opacity-95 [transform:rotate(-13deg)] sm:h-[175px] sm:w-[150px]">
                <div className="absolute inset-[3px] rounded-b-[65px] border-[2px] border-[#F7E7A7]/70 border-t-0" />
              </div>

              {/* Pendant */}
              <div className="absolute bottom-[0px] left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-[5px] border-[#D4AF37] bg-linear-to-br from-[#FFF4B8] via-[#D4AF37] to-[#9B7613] shadow-[0_8px_20px_rgba(201,162,39,0.35)] sm:h-14 sm:w-14">
                <div className="h-4 w-4 rotate-45 rounded-sm border-2 border-[#FFF5C2] bg-[#D4AF37]" />
              </div>
            </div>

            {/* Bangles */}
            <div
              aria-hidden="true"
              className="absolute bottom-[12%] left-[7%] z-10 h-28 w-36 animate-[float_7s_ease-in-out_infinite_reverse] sm:bottom-[11%] sm:left-[9%] sm:h-32 sm:w-40"
            >
              <div className="absolute left-3 top-7 h-16 w-32 rotate-[15deg] rounded-full border-[8px] border-[#D4AF37] shadow-[inset_0_0_0_2px_rgba(255,247,196,0.7)] sm:left-1 sm:h-[74px] sm:w-[145px]" />

              <div className="absolute left-7 top-2 h-16 w-32 rotate-[15deg] rounded-full border-[7px] border-[#C9A227] shadow-[inset_0_0_0_2px_rgba(255,247,196,0.65)] sm:left-5 sm:h-[74px] sm:w-[145px]" />

              <div className="absolute left-12 top-12 h-12 w-28 rotate-[15deg] rounded-full border-[5px] border-[#E9C85D] sm:left-10 sm:h-14 sm:w-32" />
            </div>

            {/* Ring */}
            <div
              aria-hidden="true"
              className="absolute right-[7%] top-[17%] z-10 flex h-24 w-24 animate-[float_5.5s_ease-in-out_infinite_reverse] items-center justify-center sm:right-[9%] sm:top-[14%] sm:h-28 sm:w-28"
            >
              <div className="absolute h-[70px] w-[70px] rounded-full border-[10px] border-[#D4AF37] bg-transparent shadow-[0_10px_25px_rgba(201,162,39,0.25)] sm:h-[80px] sm:w-[80px]" />

              <div className="absolute -top-1 h-8 w-8 rotate-45 rounded-[7px] border-4 border-[#F7E7A7] bg-linear-to-br from-[#FFF1A6] to-[#C9A227] shadow-[0_6px_18px_rgba(201,162,39,0.35)] sm:h-9 sm:w-9" />
            </div>

            {/* =====================================================
                CENTRAL BOROFIRST CARD
            ====================================================== */}
            <div className="relative z-30 w-[88%] max-w-[390px]">
              <div className="relative overflow-hidden rounded-[30px] border border-white/80 bg-white/95 p-6 shadow-[0_30px_80px_rgba(11,37,120,0.14),0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-7">
                {/* Card accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-[#0B2578] via-[#10B981] to-[#D4AF37]" />

                {/* Inner glow */}
                <div
                  aria-hidden="true"
                  className="absolute right-[-80px] top-[-80px] h-44 w-44 rounded-full bg-[#10B981]/10 blur-3xl"
                />

                {/* Brand */}
                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-black tracking-[0.24em] text-[#0B2578]">
                      BOROFIRST
                    </p>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                      <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#94A3B8]">
                        Financial Freedom Starts Here
                      </span>
                    </div>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B2578] text-white shadow-[0_8px_20px_rgba(11,37,120,0.18)]">
                    <Gem size={18} />
                  </div>
                </div>

                {/* Card Heading */}
                <div className="relative mt-8">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-px w-7 bg-[#D4AF37]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A227]">
                      Gold Loan
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-[#0F172A] sm:text-3xl">
                    Unlock Your Gold's
                    <span className="block text-[#0B2578]">
                      Financial Value.
                    </span>
                  </h2>

                  <p className="mt-3 max-w-xs text-xs leading-5 text-[#64748B]">
                    Explore funding options backed by eligible gold jewellery.
                  </p>
                </div>

                {/* Value Flow */}
                <div className="relative mt-7 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                  {/* Gold */}
                  <div className="rounded-2xl border border-[#F0E5C3] bg-[#FFFCF2] p-3.5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D4AF37]/15 text-[#C9A227]">
                        <Gem size={16} />
                      </span>

                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-wide text-[#94A3B8]">
                          Asset
                        </p>
                        <p className="text-xs font-bold text-[#0F172A]">Gold</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5F9] text-[#0B2578]">
                    <ArrowRight size={14} />
                  </div>

                  {/* Opportunity */}
                  <div className="rounded-2xl border border-[#D8F5E9] bg-[#F5FFFA] p-3.5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#10B981]/10 text-[#10B981]">
                        <WalletCards size={16} />
                      </span>

                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-wide text-[#94A3B8]">
                          Opportunity
                        </p>
                        <p className="text-xs font-bold text-[#0F172A]">
                          Funds
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Status */}
                <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#F8FAFC] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-50" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
                    </span>

                    <span className="text-[10px] font-semibold text-[#64748B]">
                      Explore your options
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-[#0B2578]">
                    BOROFIRST
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Gold Dots */}
            <span
              aria-hidden="true"
              className="absolute right-[8%] bottom-[24%] h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_0_6px_rgba(212,175,55,0.10)]"
            />

            <span
              aria-hidden="true"
              className="absolute left-[28%] top-[11%] h-1.5 w-1.5 rounded-full bg-[#10B981] shadow-[0_0_0_5px_rgba(16,185,129,0.10)]"
            />

            <span
              aria-hidden="true"
              className="absolute right-[9%] top-[33%] h-1 w-1 rounded-full bg-[#0B2578]"
            />
          </div>
        </div>
      </div>

      {/* Component-only animations */}
    </section>
  );
};

export default GoldLoanHero;
