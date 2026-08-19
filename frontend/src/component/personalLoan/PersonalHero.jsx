
import React from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  IndianRupee,
  ShieldCheck,
  TrendingUp,
  Wallet,
    WalletCards,
  Zap,
} from "lucide-react";


const trustItems = [
  {
    icon: Zap,
    title: "Quick Processing",
    description: "Simple application journey",
  },
  {
    icon: CalendarDays,
    title: "Flexible Tenure",
    description: "Options to suit your profile",
  },
  {
    icon: ShieldCheck,
    title: "Secure Process",
    description: "Responsible information handling",
  },
];

const floatingCards = [
  {
    icon: CheckCircle2,
    title: "Eligibility Check",
    description: "Quick & Simple",
    position:
      "left-0 top-12 lg:-left-16 lg:top-16",
  },
  {
    icon: TrendingUp,
    title: "Flexible Options",
    description: "Based on your profile",
    position:
      "right-0 top-4 lg:-right-10 lg:top-10",
  },
  {
    icon: ShieldCheck,
    title: "Secure Process",
    description: "Trusted journey",
    position:
      "bottom-4 right-2 lg:-right-6 lg:bottom-10",
  },
];

const PersonalLoanHero = () => {
  const handleEligibility = () => {
    // Replace with your eligibility section ID or route.
    document
      .getElementById("loan-eligibility")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const handleApply = () => {
    // Replace with your actual application route.
    console.log("Apply Now clicked");
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#F8FAFC]">
      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="absolute right-[-180px] top-24 h-[420px] w-[420px] rounded-full bg-blue-200/20 blur-3xl" />

        <div className="absolute bottom-[-200px] left-[40%] h-[400px] w-[400px] rounded-full bg-emerald-100/30 blur-3xl" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold tracking-wide text-emerald-700 shadow-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
                <Wallet size={13} />
              </span>

              PERSONAL LOAN
            </div>

            {/* Heading */}
            <h1 className=" font-extrabold leading-[1.08] tracking-tight  text-slate-900 text-4xl sm:text-5xl lg:text-[60px]">
              Personal Loans Made{" "}
              <span className="relative inline-block text-[#186A07]">
                Simple,
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-emerald-200/70" />
              </span>{" "}
              <span className="text-[#0B2578]">
                Fast &
              </span>{" "}
              <span className="text-[#186A07]">
                 Transparent
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">
              Whether you're managing an unexpected expense,
              planning a wedding, renovating your home or
              achieving a personal goal, explore suitable
              personal loan options through a simple and
              transparent process.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleEligibility}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/25 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
              >
                Check Your Eligibility

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={handleApply}
                className="inline-flex items-center justify-center rounded-xl border border-[#E2E8F0] bg-white px-7 py-3.5 text-sm font-bold text-[#0F172A] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
              >
                Apply Now
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 grid grid-cols-1 gap-5 border-t border-slate-200 pt-7 sm:grid-cols-3 sm:gap-4">
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      <Icon size={17} />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-slate-800">
                        {item.title}
                      </p>

                      <p className="mt-1 text-[11px] leading-4 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Small trust statement */}
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck
                size={15}
                className="text-emerald-600"
              />

              <span>
                Simple, transparent and customer-focused loan
                assistance.
              </span>
            </div>
          </div>

          {/* =====================================================
              RIGHT — LOAN VISUAL
          ====================================================== */}

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            {/* Main glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-3xl" />

            {/* Decorative ring */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-200/50" />

            {/* =================================================
                FLOATING CARDS
            ================================================== */}

            {floatingCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className={`absolute z-20 hidden rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl shadow-slate-900/10 backdrop-blur-md sm:block ${card.position} ${
                    index === 0
                      ? "animate-[float_5s_ease-in-out_infinite]"
                      : index === 1
                      ? "animate-[float_6s_ease-in-out_infinite]"
                      : "animate-[float_7s_ease-in-out_infinite]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Icon size={19} />
                    </div>

                    <div className="pr-2">
                      <p className="text-xs font-bold text-slate-800">
                        {card.title}
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-500">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* =================================================
                MAIN LOAN CARD
            ================================================== */}
                 <div className="lap-hero-image relative overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-[#F8FAFC] shadow-2xl shadow-slate-200/70">

              <img
                src="/home-loan-family-keys.png"
                alt="Indian property owners standing outside a modern property"
                className="h-[480px] w-full object-cover transition duration-1000 ease-out hover:scale-[1.02] sm:h-[560px] lg:h-[620px]"
              />

              {/* Subtle image gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2578]/25 via-transparent to-transparent" />

              {/* Small property label */}

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:min-w-[250px]">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#2c8e18]">
                    <WalletCards size={20}/>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Property-backed
                    </p>

                    <p className="mt-0.5 text-sm font-extrabold text-slate-700">
                      Financing Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
         
            {/* Bottom mini card */}
            <div className="absolute -bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur-md sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <CheckCircle2 size={18} />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-800">
                  Check your eligibility
                </p>

                <p className="text-[10px] text-slate-500">
                  Get an indicative estimate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust strip */}
   
      </div>

      {/* =====================================================
          CUSTOM FLOAT ANIMATION
          Tailwind arbitrary animation used intentionally.
      ====================================================== */}

    </section>
  );
};

export default PersonalLoanHero;

