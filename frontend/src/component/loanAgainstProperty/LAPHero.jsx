
import {
  ArrowRight,
  Building2,
  Calculator,
  CheckCircle2,
  ShieldCheck,
  WalletCards,
} from "lucide-react";



const floatingCards = [
  {
    icon: ShieldCheck,
    title: "Guided Process",
    text: "Support from application to disbursal",
    position:
      "left-0 top-12 sm:-left-6 sm:top-16",
    animation: "animate-lap-float",
  },
  {
    icon: Building2,
    title: "Property-Backed Financing",
    text: "Subject to lender assessment",
    position:
      "right-0 bottom-10 sm:-right-6 sm:bottom-14",
    animation: "animate-lap-float-delay",
  },
];

const LAPHero = () => {
    const handleCalculationEmi = () => {
    // Replace with your eligibility section ID or route.
    document
      .getElementById("loan-EMI")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      id="lap-home"
      className="relative overflow-hidden bg-white pt-12 sm:pt-15 lg:pt-18"
    >
      {/* ==========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" /> 

      {/* Minimal architectural lines */}
      <div className="pointer-events-none absolute right-0 top-28 hidden opacity-[0.04] lg:block">
        <svg
          width="420"
          height="420"
          viewBox="0 0 420 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 320L210 120L400 320"
            stroke="#0B2578"
            strokeWidth="2"
          />

          <path
            d="M75 300V220H345V300"
            stroke="#0B2578"
            strokeWidth="2"
          />

          <rect
            x="145"
            y="220"
            width="130"
            height="100"
            stroke="#0B2578"
            strokeWidth="2"
          />

          <path
            d="M210 220V320"
            stroke="#0B2578"
            strokeWidth="2"
          />

          <path
            d="M75 180H345"
            stroke="#10B981"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* ==========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 pb-6 sm:px-6 lg:px-8 lg:pb-10">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">

          {/* ======================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="max-w-2xl">

            {/* Eyebrow */}

            <div className="lap-hero-eyebrow  inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#186A07]">
              <Building2 size={15} />
              Loan Against Property
            </div>

            {/* Heading */}

            <h1 className="lap-hero-heading mt-6  font-extrabold leading-[1.08] tracking-tight text-slate-900 text-4xl sm:text-5xl lg:text-[60px]">
              Unlock the Value
              <br />
              of Your{" "}
              <span className="text-[#186A07]">
                Property.
              </span>
            </h1>

            {/* Description */}

            <p className="lap-hero-description mt-6 max-w-xl text-base leading-8 text-[#64748B] sm:text-lg">
              Explore financing against an eligible property for
              your personal or business needs, with guidance from
              application to disbursal.
            </p>

            {/* CTA */}

            <div className="lap-hero-buttons mt-8 flex flex-col gap-3 sm:flex-row">

              {/* Primary */}

              <a
                href="#eligibility"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/25"
              >
               Apply Now

              </a>

              {/* Secondary */}

              <a
                onClick={handleCalculationEmi}
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-6 py-3.5 text-sm font-extrabold text-[#0B2578] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
              >
                <Calculator
                  size={18}
                  className="text-[#10B981]"
                />

                Calculate EMI
              </a>
            </div>

            {/* Trust points */}


            {/* Disclaimer */}

            <p className="lap-hero-disclaimer mt-5 max-w-xl text-[11px] leading-5 text-slate-400">
              Loan amount, interest rate, tenure and eligibility depend
              on the lender, property and applicant profile.
            </p>
          </div>

          {/* ======================================================
              RIGHT IMAGE
          ====================================================== */}
            <div className="relative">

            {/* Emerald glow */}

            <div className="absolute -inset-5 rounded-[36px] bg-emerald-100/40 blur-2xl" />

            {/* Image wrapper */}
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
                    <WalletCards size={20} />
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
          

            {/* ==================================================
                FLOATING CARDS
            ================================================== */}

            {floatingCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className={`absolute z-20 hidden rounded-2xl border border-white bg-white/95 p-4 shadow-xl backdrop-blur-md sm:block ${card.position} ${card.animation}`}
                >
                  <div className="flex items-start gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#2c8e18]">
                      <Icon size={19} />
                    </div>

                    <div className="max-w-[175px]">
                      <p className="text-xs font-extrabold text-slate-700">
                        {card.title}
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-slate-500">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
      
        </div>
      </div>
    </section>
  );
};

export default LAPHero;