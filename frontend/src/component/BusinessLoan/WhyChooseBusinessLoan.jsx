
import React from "react";
import {
  WalletCards,
  Rocket,
  Settings2,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
  ArrowLeftRight,
  Building2,
  PiggyBank,
} from "lucide-react";

 const advantages = [
  {
    id: 1,
    icon: WalletCards,
    title: "Strengthen Working Capital",
    description:
      "Keep your business operations moving smoothly by managing eligible inventory, supplier payments, salaries, and day-to-day expenses.",
  },
  {
    id: 2,
    icon: Building2,
    title: "Expand Your Business",
    description:
      "Support suitable plans to increase capacity, open new locations, expand operations, or enter new markets.",
  },
  {
    id: 3,
    icon: Settings2,
    title: "Invest in Equipment & Technology",
    description:
      "Upgrade eligible machinery, equipment, technology, and infrastructure to support your business operations.",
  },
  {
    id: 4,
    icon: ArrowLeftRight,
    title: "Manage Cash Flow Gaps",
    description:
      "Handle temporary differences between outgoing business expenses and incoming customer payments with greater financial flexibility.",
  },
  {
    id: 5,
    icon: PiggyBank,
    title: "Preserve Your Cash Reserves",
    description:
      "Use suitable external financing for eligible business needs while keeping available funds for other important requirements.",
  },
  {
    id: 6,
    icon: Rocket,
    title: "Be Ready for New Opportunities",
    description:
      "Maintain the financial flexibility to pursue suitable projects, orders, expansion plans, and other business opportunities.",
  },
];

const WhyChooseBusinessLoan = () => {
  return (
    <section
      id="why-choose-business-loan"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#10B981]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#0B2578]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B2578]">
              Why Choose Business Financing?
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Funding That Supports Your
            <span className="block text-[#186A07]">
             Business Goals
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base">
            A suitable business loan can give eligible businesses the
            financial flexibility to manage important needs, invest with
            purpose, and move confidently toward their next opportunity.
          </p>
        </div>

        {/* ================= MAIN VISUAL ================= */}

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_0.8fr_1fr] lg:gap-10">

          {/* LEFT BENEFITS */}

          <div className="space-y-5">

            {advantages.slice(0, 3).map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-2xl
                    border border-[#E2E8F0]
                    bg-white
                    p-5
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-emerald-200
                    hover:shadow-lg
                  "
                >
                  <div className="flex gap-4">

                    <div
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-xl
                          bg-emerald-50
                    text-[#2c8e18]
                        transition-all duration-300 ease-out
                      group-hover:bg-[#118A09]
                      group-hover:text-white
                        group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]
                        group-hover:scale-110
                      "
                    >
                      <Icon size={20} />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-[#CBD5E1]">
                          0{index + 1}
                        </span>

                        <h3 className="text-base font-bold text-[#0F172A]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-[#64748B]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= CENTER ================= */}

          <div className="relative mx-auto flex h-[300px] w-[300px] items-center justify-center">

            {/* Outer circle */}
            <div className="absolute inset-0 rounded-full border border-[#E2E8F0]" />

            <div className="absolute inset-8 rounded-full border border-[#10B981]/20" />

            <div className="absolute inset-16 rounded-full bg-[#F0FDF9]" />

            {/* Connecting dots */}

            <div className="absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#10B981]" />

            <div className="absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#10B981]" />

            <div className="absolute left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#10B981]" />

            <div className="absolute bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#10B981]" />

            {/* Center */}
            <div
              className="
                relative z-10
                flex h-36 w-36
                flex-col items-center justify-center
                rounded-[32px]
                 bg-linear-to-r from-[#186A07] to-[#0B2578]
                text-center
                shadow-[0_20px_50px_rgba(11,37,120,0.18)]
              "
            >
              <TrendingUp
                size={28}
                className="text-[#6EE7B7]"
              />

              <p className="mt-3 text-sm font-bold uppercase tracking-wider text-white">
                Business
              </p>

              <p className="text-lg font-extrabold text-[#2c8e18]">
                Growth
              </p>
            </div>
          </div>

          {/* RIGHT BENEFITS */}

          <div className="space-y-5">

            {advantages.slice(3).map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-2xl
                    border border-[#E2E8F0]
                    bg-white
                    p-5
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-emerald-200
                    hover:shadow-lg
                  "
                >
                  <div className="flex gap-4">

                    <div
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-xl

                              bg-emerald-50
                    text-[#2c8e18]
                        transition-all duration-300 ease-out
                      group-hover:bg-[#118A09]
                      group-hover:text-white
                        group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]
                        group-hover:scale-110
                      "
                    >
                      <Icon size={20} />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-[#CBD5E1]">
                          0{index + 3}
                        </span>

                        <h3 className="text-base font-bold text-[#0F172A]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-[#64748B]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}

       
        {/* Disclaimer */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-5 text-[#94A3B8]">
          Loan approval, amount, interest rate, tenure, and other terms
          are subject to the respective lender's eligibility criteria,
          policies, and terms.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseBusinessLoan;