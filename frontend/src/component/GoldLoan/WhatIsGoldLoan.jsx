import React from "react";
import {
  ArrowRight,
  Calculator,
  Check,
  Gem,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const concepts = [
  {
    id: "01",
    icon: ShieldCheck,
    title: "Secured borrowing",
    description: "Eligible gold jewellery is pledged as collateral.",
  },
  {
    id: "02",
    icon: Gem,
    title: "Gold is assessed",
    description: "Purity, weight and other applicable factors are evaluated.",
  },
  {
    id: "03",
    icon: Scale,
    title: "Value determines eligibility",
    description:
      "The eligible amount depends on assessed value and lender terms.",
  },
];

const assessmentItems = ["Gold purity", "Gold weight", "Assessed value"];

const GoldLoanWhatIs = () => {
  return (
    <section
      id="what-is-gold-loan"
      aria-labelledby="gold-loan-heading"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#10B981]/[0.045] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#D4AF37]/[0.055] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[85%] -translate-x-1/2 bg-linear-to-r from-transparent via-[#E2E8F0] to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-14 max-w-3xl lg:mb-20">
          <div className="mb-5 flex items-center gap-3">
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#0B2578] text-white">
              <Gem size={13} strokeWidth={2} />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0B2578] sm:text-[11px]">
              Understanding Gold Loans
            </span>

            <span className="h-px w-10 bg-[#D4AF37]" />
          </div>

          <h2
            id="gold-loan-heading"
            className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-[#0F172A] sm:text-5xl lg:text-[3.7rem]"
          >
            What Is a{" "}
            <span className="relative inline-block text-[#0B2578]">
              Gold Loan?
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[3px] w-[72%] rounded-full bg-[#D4AF37]"
              />
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
            A simple way to understand how eligible gold jewellery can be used
            as collateral to access funds, and what generally influences the
            loan amount.
          </p>
        </div>

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.88fr] lg:gap-20">
          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}

          <div>
            {/* Main Explanation */}
            <div className="relative max-w-2xl">
              <span
                aria-hidden="true"
                className="absolute -left-5 top-1 hidden h-16 w-[3px] rounded-full bg-linear-to-b from-[#D4AF37] to-transparent sm:block"
              />

              <p className="text-[17px] font-medium leading-8 text-[#334155] sm:text-[19px] sm:leading-9">
                A{" "}
                <strong className="font-bold text-[#0B2578]">gold loan</strong>{" "}
                is a secured loan where eligible gold jewellery is pledged as
                collateral to obtain funds.
              </p>

              <p className="mt-5 text-sm leading-7 text-[#64748B] sm:text-[15px] sm:leading-8">
                The lender evaluates the gold's{" "}
                <span className="font-semibold text-[#0F172A]">purity</span>,{" "}
                <span className="font-semibold text-[#0F172A]">weight</span> and
                other applicable factors before determining the eligible loan
                amount.
              </p>

              <p className="mt-5 text-sm leading-7 text-[#64748B] sm:text-[15px] sm:leading-8">
                Because the loan is backed by eligible gold collateral, the
                amount you may be able to borrow depends on the assessed value
                of the gold and the applicable terms of the lender.
              </p>
            </div>

            {/* =================================================
                ASSESSMENT STRIP
            ================================================== */}

            <div className="mt-9 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_12px_35px_rgba(15,23,42,0.045)]">
              <div className="flex items-center gap-3 border-b border-[#E2E8F0] px-5 py-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0B2578]/[0.07] text-[#0B2578]">
                  <Calculator size={16} />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#0F172A]">
                    What is assessed?
                  </p>

                  <p className="mt-0.5 text-[10px] text-[#94A3B8]">
                    Key factors considered during gold valuation
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 px-5 py-4">
                {assessmentItems.map((item) => (
                  <span
                    key={item}
                    className="group inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-2 text-[10px] font-semibold text-[#475569] transition-all duration-300 hover:border-[#10B981]/30 hover:bg-[#F0FDF4]"
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#10B981]/10 text-[#10B981]">
                      <Check size={9} strokeWidth={3} />
                    </span>

                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* =================================================
                CONCEPTS
            ================================================== */}

            <div className="mt-10 space-y-1">
              {concepts.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className="group flex items-center gap-4 rounded-2xl px-3 py-4 transition-all duration-300 hover:bg-white hover:shadow-[0_10px_30px_rgba(15,23,42,0.045)] sm:px-4"
                  >
                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-[#10B981] transition-all duration-300 group-hover:border-[#10B981]/30 group-hover:bg-[#F0FDF4]">
                      <Icon size={18} />

                      <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#D4AF37]" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-bold tracking-[0.12em] text-[#C9A227]">
                          {item.id}
                        </span>

                        <h3 className="text-sm font-bold text-[#0F172A]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-1 text-xs leading-5 text-[#64748B]">
                        {item.description}
                      </p>
                    </div>

                    <ArrowRight
                      size={15}
                      className="shrink-0 text-[#CBD5E1] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#10B981]"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===================================================
              RIGHT PREMIUM VISUAL
          ==================================================== */}

          <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
            {/* Outer Glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-[45px] bg-linear-to-br from-[#D4AF37]/10 via-transparent to-[#10B981]/10 blur-2xl"
            />

            {/* Main Visual */}
            <div className="relative min-h-[510px] overflow-hidden rounded-[34px] border border-[#E2E8F0] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.09)] sm:min-h-[560px]">
              {/* Soft linear */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-linear(circle_at_50%_38%,rgba(212,175,55,0.12),transparent_32%),radial-linear(circle_at_80%_90%,rgba(16,185,129,0.07),transparent_35%)]"
              />

              {/* Decorative rings */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[44%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/10"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[44%] h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#10B981]/10"
              />

              {/* =================================================
                  TOP LABEL
              ================================================== */}

              <div className="absolute left-6 right-6 top-6 z-30 flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-black tracking-[0.25em] text-[#0B2578]">
                    BOROFIRST
                  </p>

                  <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.15em] text-[#94A3B8]">
                    Gold Loan
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-[#C9A227] shadow-sm">
                  <Sparkles size={15} />
                </div>
              </div>

              {/* =================================================
                  JEWELLERY — NECKLACE
              ================================================== */}

              <div
                aria-hidden="true"
                className="absolute left-[9%] top-[18%] z-10 h-44 w-44 animate-[goldFloat_6s_ease-in-out_infinite] sm:left-[11%] sm:h-52 sm:w-52 sm:w-52"
              >
                {/* Chain */}
                <div className="absolute left-1/2 top-0 h-40 w-32 -translate-x-1/2 rotate-[-10deg] rounded-b-[70px] border-[6px] border-t-0 border-[#D4AF37] sm:h-44 sm:w-36">
                  <div className="absolute inset-[2px] rounded-b-[65px] border-2 border-[#FFF2B0]/80 border-t-0" />
                </div>

                {/* Pendant */}
                <div className="absolute bottom-0 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-[5px] border-[#D4AF37] bg-linear-to-br from-[#FFF5B5] via-[#D4AF37] to-[#A67D12] shadow-[0_12px_30px_rgba(201,162,39,0.28)]">
                  <div className="h-5 w-5 rotate-45 rounded-[4px] border-2 border-[#FFF8D7] bg-[#C9A227]" />
                </div>
              </div>

              {/* =================================================
                  RING
              ================================================== */}

              <div
                aria-hidden="true"
                className="absolute right-[9%] top-[17%] z-10 h-28 w-28 animate-[goldFloatReverse_7s_ease-in-out_infinite] sm:right-[11%] sm:h-32 sm:w-32"
              >
                <div className="absolute left-1/2 top-7 h-20 w-20 -translate-x-1/2 rounded-full border-[8px] border-[#D4AF37] shadow-[0_10px_25px_rgba(201,162,39,0.2)]" />

                <div className="absolute left-1/2 top-0 h-9 w-9 -translate-x-1/2 rotate-45 rounded-md border-4 border-[#FFF1A5] bg-linear-to-br from-[#FFF6BD] to-[#C9A227]" />
              </div>

              {/* =================================================
                  CENTRAL CARD
              ================================================== */}

              <div className="absolute left-1/2 top-[43%] z-20 w-[74%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative overflow-hidden rounded-[28px] border border-white bg-white/95 p-5 shadow-[0_25px_65px_rgba(11,37,120,0.14)] backdrop-blur-xl sm:p-6">
                  {/* Gold line */}
                  <div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-[#D4AF37] via-[#10B981] to-[#0B2578]" />

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
                        Secured by
                      </p>

                      <p className="mt-1 text-lg font-extrabold tracking-tight text-[#0B2578]">
                        Gold
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B2578] text-white shadow-lg shadow-[#0B2578]/10">
                      <Gem size={17} />
                    </div>
                  </div>

                  {/* Assessment Box */}
                  <div className="mt-5 rounded-2xl border border-[#EDE3C5] bg-[#FFFCF5] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/15 text-[#C9A227]">
                        <Scale size={17} />
                      </div>

                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#94A3B8]">
                          Gold Assessment
                        </p>

                        <p className="mt-0.5 text-sm font-extrabold text-[#0F172A]">
                          Value Evaluated
                        </p>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mt-5 space-y-3">
                      <div>
                        <div className="mb-1.5 flex justify-between">
                          <span className="text-[9px] text-[#64748B]">
                            Purity
                          </span>

                          <span className="text-[9px] font-semibold text-[#0F172A]">
                            Assessed
                          </span>
                        </div>

                        <div className="h-1.5 rounded-full bg-[#E2E8F0]">
                          <div className="h-full w-[82%] rounded-full bg-[#D4AF37]" />
                        </div>
                      </div>

                      <div>
                        <div className="mb-1.5 flex justify-between">
                          <span className="text-[9px] text-[#64748B]">
                            Weight
                          </span>

                          <span className="text-[9px] font-semibold text-[#0F172A]">
                            Assessed
                          </span>
                        </div>

                        <div className="h-1.5 rounded-full bg-[#E2E8F0]">
                          <div className="h-full w-[68%] rounded-full bg-[#10B981]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Flow */}
                  <div className="mt-5 flex items-center justify-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#C9A227]">
                      <Gem size={13} />
                    </div>

                    <div className="h-px w-9 bg-linear-to-r from-[#D4AF37] to-[#10B981]" />

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#10B981]/10 text-[#10B981]">
                      <Calculator size={13} />
                    </div>

                    <div className="h-px w-9 bg-linear-to-r from-[#10B981] to-[#0B2578]" />

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B2578] text-white">
                      <Check size={13} strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  BANGLES
              ================================================== */}

              <div
                aria-hidden="true"
                className="absolute bottom-[15%] left-[7%] z-10 h-28 w-40 animate-[goldFloatReverse_6.5s_ease-in-out_infinite]"
              >
                <div className="absolute left-3 top-7 h-16 w-32 rotate-[12deg] rounded-full border-[7px] border-[#D4AF37] shadow-[inset_0_0_0_2px_rgba(255,247,196,0.65)]" />

                <div className="absolute left-7 top-1 h-16 w-32 rotate-[12deg] rounded-full border-[6px] border-[#C9A227]" />

                <div className="absolute left-12 top-12 h-12 w-28 rotate-[12deg] rounded-full border-[5px] border-[#E8C85B]" />
              </div>

              {/* =================================================
                  FLOATING LABELS
              ================================================== */}

              <div className="absolute left-5 top-[31%] z-30 animate-[softFloat_5s_ease-in-out_infinite] sm:left-6">
                <div className="flex items-center gap-2 rounded-2xl border border-white bg-white/90 px-3 py-2.5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_0_4px_rgba(212,175,55,0.10)]" />

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-[#94A3B8]">
                      Collateral
                    </p>

                    <p className="text-[10px] font-bold text-[#0F172A]">
                      Eligible Gold
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-5 top-[32%] z-30 animate-[softFloatReverse_6s_ease-in-out_infinite] sm:right-6">
                <div className="flex items-center gap-2 rounded-2xl border border-white bg-white/90 px-3 py-2.5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_0_4px_rgba(16,185,129,0.10)]" />

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-[#94A3B8]">
                      Assessment
                    </p>

                    <p className="text-[10px] font-bold text-[#0F172A]">
                      Value Evaluated
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  BOTTOM LABEL
              ================================================== */}

              <div className="absolute bottom-6 left-1/2 z-30 w-[82%] -translate-x-1/2">
                <div className="flex items-center justify-between rounded-2xl border border-[#E2E8F0] bg-white/95 px-4 py-3 shadow-[0_12px_35px_rgba(15,23,42,0.07)] backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#10B981]/10 text-[#10B981]">
                      <ShieldCheck size={14} />
                    </div>

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#94A3B8]">
                        Gold Loan
                      </p>

                      <p className="text-[11px] font-bold text-[#0F172A]">
                        Gold → Assessed Value
                      </p>
                    </div>
                  </div>

                  <ArrowRight size={15} className="text-[#0B2578]" />
                </div>
              </div>

              {/* Decorative sparkles */}
              <div
                aria-hidden="true"
                className="absolute left-[18%] top-[13%] text-[#D4AF37]/40"
              >
                <Sparkles size={15} />
              </div>

              <div
                aria-hidden="true"
                className="absolute right-[20%] bottom-[26%] text-[#D4AF37]/30"
              >
                <Sparkles size={17} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes goldFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(-1deg);
          }

          50% {
            transform: translate3d(0, -9px, 0) rotate(1deg);
          }
        }

        @keyframes goldFloatReverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(1deg);
          }

          50% {
            transform: translate3d(0, -7px, 0) rotate(-1deg);
          }
        }

        @keyframes softFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -5px, 0);
          }
        }

        @keyframes softFloatReverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, 5px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default GoldLoanWhatIs;
