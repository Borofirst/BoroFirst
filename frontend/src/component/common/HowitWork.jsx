

import React from "react";

const HowItWorks = ({
  eyebrow = "Simple Process",
  title = "How It Works",
  description = "A straightforward journey from your requirement to lender assessment and disbursal.",
  steps = [],
  id = "how-it-works",
}) => {
  return (
    <section id={id} className="py-20 lg:py-28 ">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2c8e18]">
            {eyebrow}
          </p>

          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mt-5 text-sm leading-6 text-slate-500 sm:text-base">
            {description}
          </p>
        </div>

        {/* =====================================================
            DESKTOP TIMELINE
        ====================================================== */}
        <div className="relative mt-16 hidden lg:block">

          {/* Timeline line */}
          <div className="absolute left-[12%] right-[12%] top-7 h-px bg-slate-300" />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number || index}
                  className="group relative text-center"
                  style={{
                    transitionDelay: `${index * 130}ms`,
                  }}
                >
                  {/* Icon */}
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#F8FAFC] bg-[#119f39] text-white shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                    <Icon size={23} />
                  </div>

                  {/* Step Number */}
                  <p className="mt-6 text-xs font-bold tracking-widest text-[#10B981]">
                    STEP{" "}
                    {step.number ||
                      String(index + 1).padStart(2, "0")}
                  </p>

                  {/* Title */}
                  <h3 className="mt-2 text-lg font-bold text-[#0B2578]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            MOBILE APPLICATION TIMELINE
        ====================================================== */}
        <div className="mt-12 lg:hidden">
          <div className="relative">

            {/* Vertical Timeline Line */}
            <div className="absolute bottom-8 left-[25px] top-8 w-px bg-slate-200" />

            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number || index}
                    className="relative flex gap-4"
                    style={{
                      transitionDelay: `${index * 120}ms`,
                    }}
                  >
                    {/* Timeline Icon */}
                    <div className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-4 border-[#F8FAFC] bg-[#119f39] text-white shadow-lg">
                      <Icon size={21} />
                    </div>

                    {/* Step Card */}
                    <div className="flex-1 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition-all duration-300 active:scale-[0.99] sm:p-6">

                      {/* Step Number */}
                      <p className="text-[11px] font-bold tracking-[0.16em] text-[#10B981]">
                        STEP{" "}
                        {step.number ||
                          String(index + 1).padStart(2, "0")}
                      </p>

                      {/* Title */}
                      <h3 className="mt-1.5 text-base font-bold text-[#0B2578] sm:text-lg">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {step.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;