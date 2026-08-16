
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Headphones,
  House,
  IndianRupee,
  WalletCards,
  ShieldCheck,
  BanknoteArrowUp,
} from "lucide-react";



const benefits = [
  {
    icon: BanknoteArrowUp,
    title: "Higher Loan Amount",
    text: "Access a larger amount of funding based on your property value and eligibility.",
  },
  {
    icon: WalletCards,
    title: "Use the Loan for Your Needs",
    text: "Use the funds for eligible needs such as business expansion, education, medical expenses, home improvement, or other financial requirements, subject to lender terms.",
  },
  {
    icon: House,
    title: "Flexible Tenure",
    text: "Choose a repayment period that suits your financial situation, as offered by the lender.",
  },
  {
    icon: IndianRupee,
    title: "Get the Funding You Need",
    text: "The available amount depends on your property, income and lender assessment.",
  },
  {
    icon: CheckCircle2,
    title: "Simple Process",
    text: "Apply through BoroFirst and get guidance throughout the loan application process",
  },
  {
    icon: Headphones,
    title: "Expert Guidance",
    text: "Get support in understanding eligibility, documentation, lender options, and the application process..",
  },
];

const LAPBenefits = () => {
  return (
    <section
      id="lap-benefits"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#2c8e18]">
            <House size={15} />
            LAP Features & Benefits
          </div>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            How a Loan Against Property
            <span className="block  text-[#186A07]">
              Can Help You
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
          Unlock the value of your property and access funds for your personal or business needs with a Loan Against Property. Enjoy higher loan amounts, flexible repayment options, competitive interest rates, and longer repayment tenures—while continuing to own and use your property..
          </p>
        </div>

        {/* =====================================================
            FEATURED CARD
        ====================================================== */}

        <div delay={100} className="mt-14">
          <div className="relative overflow-hidden rounded-[28px] bg-[#0B2578]">

            {/* Background glow */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="grid items-center lg:grid-cols-[1fr_0.75fr]">

              {/* Content */}

              <div className="relative z-10 p-7 sm:p-10 lg:p-14">

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
                  Use Your Property
                </p>

                <h3 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  Turn Your Eligible Property Into a Financing Option.
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  An eligible property can be used as security for a
                  loan. The financing can then be explored for eligible
                  personal or business needs.
                </p>

                <a
                  href="#eligibility"
                  className="group mt-7 inline-flex min-h-[50px] items-center gap-2 rounded-xl  bg-[#186A07]  px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-600"
                >
                  Check Eligibility

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>

              {/* Visual */}

              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden lg:min-h-[390px]">

                <div className="absolute h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative flex h-40 w-40 items-center justify-center rounded-[32px] border border-emerald-300/20 bg-white/10 text-emerald-300 shadow-2xl backdrop-blur-sm transition duration-500 hover:scale-105 sm:h-48 sm:w-48">
                  <House
                    size={85}
                    strokeWidth={1.3}
                  />
                </div>

                {/* Simple bottom label */}

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-emerald-300"
                    />

                    <p className="text-xs leading-5 text-slate-300">
                      Final loan terms depend on the lender and your profile.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BENEFITS HEADING
        ====================================================== */}

        <div className="mt-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2c8e18]">
            Simple Benefits
          </p>

          <h3 className="mt-3 text-2xl font-extrabold text-slate-800 sm:text-3xl">
            What You Can Expect
          </h3>
        </div>

        {/* =====================================================
            BENEFITS GRID
        ====================================================== */}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (  
              <div
                key={benefit.title}
                delay={index * 100}
                className="h-full"
              >
                <article className="group flex h-full min-h-[245px] flex-col rounded-[22px] border border-[#E2E8F0] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg sm:p-7">

                  {/* Icon */}

                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#2c8e18] transition duration-300">
                      <Icon size={23} />
                    </div>

                    <ArrowRight
                      size={18}
                      className="text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-[#2c8e18]"
                    />
                  </div>

                  {/* Title */}

                  <h4 className="mt-6 text-lg font-extrabold text-slate-700">
                    {benefit.title}
                  </h4>

                  {/* Description */}

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {benefit.text}
                  </p>

                  {/* Bottom accent */}

                  <div className="mt-auto pt-6">
                    <div className="h-1 w-7 rounded-full bg-emerald-100 transition-all duration-300 group-hover:w-12 group-hover:bg-[#10B981]" />
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            SIMPLE INFORMATION STRIP
        ====================================================== */}

    
      </div>
    </section>
  );
};

export default LAPBenefits;