
import { useState } from "react";
import { ChevronRight } from "lucide-react";

import { loanNeeds, loanNeedData } from "../../data/loanNeedData";

const LoanNeedSection = () => {
  const [activeTab, setActiveTab] = useState("home");

  const activeLoans = loanNeedData[activeTab];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">

      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-emerald-100 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sky-100 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700">
            Find the Right Loan
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Find a Loan
            <span className="text-[#186A07]"> As Per Your Need</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Select your financial goal and discover loan solutions tailored to
            your needs with competitive interest rates, flexible repayment
            options, and quick approvals.
          </p>

        </div>

        {/* Tabs */}

        <div className="mt-14 overflow-x-auto scrollbar-hide">

          <div className="flex min-w-max justify-center gap-4 pb-2">

            {loanNeeds.map((item) => {
              const Icon = item.icon;

              const active = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`group relative flex items-center gap-3 rounded-full border px-6 py-3 font-semibold transition-all duration-300 whitespace-nowrap

                  ${
                    active
                      ? "border-transparent bg-gradient-to-r from-[#186A07] to-[#0B2578] text-white shadow-xl"
                      : "border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:text-emerald-600 hover:shadow-md"
                  }`}
                >
                  <Icon
                    size={20}
                    className={`transition-transform duration-300 ${
                      active ? "scale-110" : "group-hover:rotate-6"
                    }`}
                  />

                  {item.title}

                  {active && (
                    <ChevronRight
                      size={18}
                      className="animate-pulse"
                    />
                  )}
                </button>
              );
            })}

          </div>

        </div>

        {/* Loan Cards Start Here */}
        {/* PART 2 WILL START FROM HERE */}
        {/* Loan Cards */}
        {/* Loan Cards */}

{/* Loan Cards */}

<div
  key={activeTab}
  className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
>
  {activeLoans.map((loan) => {
    const Icon = loan.icon;

    return (
      <div
        key={loan.id}
        className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-xl"
      >
        {/* Icon */}

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 transition-all duration-300 group-hover:bg-emerald-50">
          <Icon
            size={28}
            className="text-[#186A07] transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Title */}

        <h3 className="mt-6 text-xl font-bold text-gray-900">
          {loan.title}
        </h3>

        {/* Description */}

        <p className="mt-3 text-sm leading-7 text-gray-600">
          {loan.description}
        </p>

        {/* Loan Amount */}

        <div className="mt-6 rounded-2xl bg-gray-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Loan Amount
          </p>

          <h4 className="mt-1 text-lg font-bold text-emerald-600">
            {loan.amount}
          </h4>
        </div>

        {/* Buttons */}

        <div className="mt-7 flex gap-3">
          <button className="flex-1 rounded-xl bg-gradient-to-r from-[#186A07] to-[#0B2578] py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg">
            {loan.primaryBtn}
          </button>

          <button className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-emerald-500 hover:text-emerald-600">
            Details
          </button>
        </div>
      </div>
    );
  })}
</div>


{/* Bottom CTA */}

<div className="mt-20 rounded-[32px] bg-gradient-to-r from-[#186A07] to-[#0B2578] p-10 text-white shadow-2xl lg:p-14">

  <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

    {/* Left */}

    <div className="max-w-2xl">

      <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
        Need Expert Guidance?
      </span>

      <h2 className="mt-6 text-3xl font-bold lg:text-5xl">
        Let Our Loan Experts Help You
      </h2>

      <p className="mt-5 text-lg leading-8 text-emerald-50">
        Whether you're buying your dream home, expanding your business,
        funding higher education, or managing unexpected expenses,
        our financial advisors will help you choose the right loan.
      </p>

    </div>

    {/* Right */}

    <div className="flex flex-wrap gap-4">

      <button className="rounded-xl bg-white px-8 py-4 font-semibold text-[#0B2578] transition-all duration-300 hover:scale-105 hover:bg-slate-100">
        Talk to an Expert
      </button>

      <button className="rounded-xl border border-white/40 px-8 py-4 font-semibold backdrop-blur transition-all duration-300 hover:bg-white/10">
        View All Loans
      </button>

    </div>

  </div>

</div>
      </div>

    </section>
  );
};

export default LoanNeedSection;