import {
  ClipboardList,
  SearchCheck,
  Files,
  BadgeCheck,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: ClipboardList,
      title: "Tell Us Your Requirement",
      text: "Share your home financing requirement with our team.",
    },
    {
      number: "02",
      icon: SearchCheck,
      title: "Check Eligibility",
      text: "Understand the general factors that may affect your eligibility.",
    },
    {
      number: "03",
      icon: Files,
      title: "Submit Documents to bank",
      text: "Provide the documents requested for lender assessment.",
    },
    {
      number: "04",
      icon: BadgeCheck,
      title: "Approval & Disbursal",
      text: "Once approved by the lender, proceed toward disbursal.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className=" py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        
        <div className="mx-auto max-w-3xl text-center ">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2c8e18]">
            Simple Process
          </p>

          <h2 className="text-3xl text-slate-900 font-extrabold  sm:text-4xl lg:text-5xl">
            How Home Loan Works
          </h2>

          <p className="mt-5 text-slate-500">
            A straightforward journey from your requirement to lender
            assessment and disbursal.
          </p>
        </div>

        {/* Desktop */}
        <div className="relative mt-16 hidden lg:block">
          <div className="absolute left-[12%] right-[12%] top-7 h-px bg-slate-300" />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className=" relative text-center"
                  style={{ transitionDelay: `${index * 130}ms` }}
                >
                  <div className="timeline-active relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#F8FAFC] bg-[#119f39] text-white shadow-lg">
                    <Icon size={23} />
                  </div>

                  <p className="mt-6 text-xs font-bold tracking-widest text-[#10B981]">
                    STEP {step.number}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-[#0B2578]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="mt-12 space-y-6 lg:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="reveal relative flex gap-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-white">
                  <Icon size={21} />
                </div>

                <div>
                  <p className="text-xs font-bold tracking-wider text-[#10B981]">
                    STEP {step.number}
                  </p>

                  <h3 className="mt-1 font-bold text-[#0B2578]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;