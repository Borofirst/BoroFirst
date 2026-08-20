
import {
  ArrowDown,
  ArrowRight,
  Building2,
  CheckCircle2,
  House,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import useReveal from "../../hook/useReveal";

const conceptSteps = [
  {
    icon: House,
    title: "Property",
  },
  {
    icon: ShieldCheck,
    title: "Security",
  },
  {
    icon: WalletCards,
    title: "Financing",
  },
  {
    icon: CheckCircle2,
    title: "Eligible Need",
  },
];

const infoCards = [
  {
    icon: House,
    title: "Property as Security",
    text: "An eligible residential or commercial property may be offered as security.",
  },
  {
    icon: WalletCards,
    title: "Multiple Uses",
    text: "Funds may be used for eligible personal or business requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Lender Assessment",
    text: "Final terms depend on the lender, property and applicant profile.",
  },
];

const WhatIsLAP = () => {
      const [headingRef, headingVisible] = useReveal();
  const [contentRef, contentVisible] = useReveal();
  return (
    <section
      id="what-is-lap"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-emerald-50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-50/70 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =======================================================
            MAIN TWO-COLUMN LAYOUT
        ======================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* =====================================================
              LEFT — CONTENT
          ====================================================== */}

           <div
            ref={headingRef}
            className={`reveal-left ${
              headingVisible ? "visible" : ""
            }`}
          >

            {/* Eyebrow */}

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#2c8e18]">
              <Building2 size={15} />
              Understand LAP
            </div>

            {/* Heading */}

            <h2 className="mt-6 max-w-xl text-3xl font-extrabold text-slate-900 leading-[1.1] tracking-tight  sm:text-4xl lg:text-[48px]">
              What Is a Loan
              <span className="block">
                Against{" "}
                <span className="text-[#186A07]">
                  Property?
                </span>
              </span>
            </h2>

            {/* Main explanation */}

            <p className="mt-6 max-w-xl text-base leading-8 text-[#64748B] sm:text-lg">
              A Loan Against Property is a secured financing option
              where an eligible residential or commercial property is
              offered as security for the loan. The funds may be used
              for eligible personal or business requirements, depending
              on the lender&apos;s policies and your profile.
            </p>

            {/* Supporting statement */}

            <div className="mt-5 flex max-w-xl items-start gap-3">
              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-[#2c8e18]">
                <ShieldCheck size={16} />
              </div>

              <p className="text-sm leading-6 text-slate-500">
                Loan amount, interest rate, tenure and eligibility
                depend on factors such as the property, income,
                credit profile and lender assessment.
              </p>
            </div>

            {/* =================================================
                CONCEPT FLOW
            ================================================== */}

            <div className="mt-9">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-700">
                How the concept works
              </p>

              <div className="grid gap-2 sm:grid-cols-2">
                {conceptSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.title}
                      className="group relative rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]  transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-lg"
                    >
                      {/* Step number */}

                     

                      <div className="flex items-center justify-center  gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text- shadow-sm ring-1 ring-slate-100 transition duration-300  group-hover:bg-[#00740c] group-hover:text-white">
                          <Icon size={19} />
                        </div>

                        <div className="p-5">
                          <h3 className="text-sm font-bold text-slate-700">
                            {step.title}
                          </h3>

                         
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Flow line */}

              <div className="mt-5 hidden items-center gap-2 text-xs font-semibold text-slate-400 sm:flex">
                <span className="text-[#10B981]">Property</span>

                <ArrowRight
                  size={14}
                  className="text-[#10B981]"
                />

                <span className="text-[#0B2578]">
                  Security
                </span>

                <ArrowRight
                  size={14}
                  className="text-[#10B981]"
                />

                <span className="text-[#0B2578]">
                  Financing
                </span>

                <ArrowRight
                  size={14}
                  className="text-[#10B981]"
                />

                <span className="text-[#0B2578]">
                  Eligible Need
                </span>
              </div>
            </div>

            {/* CTA */}

            <a
              href="#eligibility"
              className="group mt-8 inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-xl"
            >
              Check Your Eligibility

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* =====================================================
              RIGHT — PREMIUM VISUAL
          ====================================================== */}

          <div
            ref={contentRef}
            className={`reveal-right relative ${
              contentVisible ? "visible" : ""
            }`}
          >

            {/* Emerald glow */}

            <div className="absolute -inset-6 rounded-[36px] bg-emerald-100/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-[#0B2578] p-4 shadow-2xl sm:p-5">

              {/* Decorative circles */}

              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

              <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

              {/* Main visual */}

              <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-linear-to-br from-[#102d91] via-[#0B2578] to-[#07194f]">

                {/* Architectural line art */}

                <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
                  <svg
                    viewBox="0 0 500 400"
                    className="h-full w-full"
                    fill="none"
                  >
                    <path
                      d="M70 250L250 85L430 250"
                      stroke="white"
                      strokeWidth="2"
                    />

                    <path
                      d="M110 230V330H390V230"
                      stroke="white"
                      strokeWidth="2"
                    />

                    <rect
                      x="185"
                      y="240"
                      width="130"
                      height="90"
                      stroke="white"
                      strokeWidth="2"
                    />

                    <path
                      d="M250 240V330"
                      stroke="white"
                      strokeWidth="2"
                    />

                    <rect
                      x="125"
                      y="245"
                      width="45"
                      height="45"
                      stroke="white"
                      strokeWidth="2"
                    />

                    <rect
                      x="330"
                      y="245"
                      width="45"
                      height="45"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="relative flex min-h-[500px] flex-col items-center justify-center px-6 py-12 text-center sm:min-h-[560px]">

                  {/* Top label */}

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-emerald-300 backdrop-blur-sm">
                    <House size={14} />
                    Property-Backed Financing
                  </div>

                  {/* Main house icon */}

                  <div className="relative mt-10">

                    <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-3xl" />

                    <div className="relative flex h-28 w-28 items-center justify-center rounded-[30px] border border-emerald-300/20 bg-white/10 text-emerald-300 shadow-2xl backdrop-blur-sm sm:h-32 sm:w-32">
                      <House
                        size={58}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Visual heading */}

                  <h3 className="mt-8 text-2xl font-extrabold text-white sm:text-3xl">
                    Your Property
                    <span className="block text-emerald-300">
                      Can Support Your Goals
                    </span>
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
                    Explore suitable financing options against an
                    eligible property, subject to lender assessment
                    and applicable terms.
                  </p>

                  {/* Bottom flow */}

                  <div className="mt-10 flex flex-wrap items-center justify-center gap-2">

                    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-bold text-white">
                      Property
                    </div>

                    <ArrowRight
                      size={16}
                      className="text-emerald-300"
                    />

                    <div className="rounded-xl border border-emerald-300/20 bg-emerald-400/10 px-4 py-3 text-xs font-bold text-emerald-200">
                      Security
                    </div>

                    <ArrowRight
                      size={16}
                      className="text-emerald-300"
                    />

                    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-bold text-white">
                      Financing
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating information card */}

              <div className="relative mx-auto -mt-7 w-[90%] rounded-2xl border border-white/20 bg-white/95 p-4 shadow-xl backdrop-blur-xl sm:w-[82%]">

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#2c8e18]">
                    <ShieldCheck size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Important
                    </p>

                    <p className="mt-0.5 text-sm font-extrabold text-[#0B2578]">
                      Final terms are subject to lender assessment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM INFORMATION CARDS
        ======================================================== */}

        <div className="mt-8 grid gap-5 md:grid-cols-3">
         
          {infoCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className=" group rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#2c8e18]  transition duration-300 group-hover:bg-[#00740c] group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-700">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatIsLAP;