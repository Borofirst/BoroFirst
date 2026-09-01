//  bg-linear-to-r from-[#186A07] to-[#0B2578]
// text-[#186A07]


import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileCheck2,
  Headphones,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Building2,
    title: "Multiple Lending Options",
    text: "Explore suitable loan options based on your requirements and profile.",
  },
  {
    number: "02",
    icon: UserRoundCheck,
    title: "Personalised Guidance",
    text: "Get help understanding your options, requirements and next steps.",
  },
  {
    number: "03",
    icon: FileCheck2,
    title: "Clear Process",
    text: "Understand the application and document process without unnecessary complexity.",
  },
  {
    number: "04",
    icon: Headphones,
    title: "End-to-End Support",
    text: "Get guidance throughout your journey, from enquiry to the next stages.",
  },
];

const WhyBoroFirstLAP = () => {
  return (
    <section
      id="why-borofirst-lap"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =======================================================
            MAIN SPLIT LAYOUT
        ======================================================== */}

        <div className="grid items-stretch gap-8 lg:grid-cols-2">

          {/* =====================================================
              LEFT — IMAGE
          ====================================================== */}

          <div className="relative min-h-[560px] overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white shadow-xl lg:min-h-[680px]">

            <img
              src="/LAPWhyChoose.png"
              alt="Indian couple standing near their property"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out hover:scale-[1.01]"
            />

            {/* Subtle overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2578]/70 via-[#0B2578]/10 to-transparent" />

            {/* Emerald glow */}

            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

            {/* Brand card */}

            <div className="absolute bottom-20 left-6 right-6 sm:left-8 sm:right-auto sm:max-w-sm">

              <div className="rounded-[20px] border border-white/20 bg-white/95 p-5 shadow-2xl backdrop-blur-md">

                <div className="flex items-start gap-3">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#10B981]">
                    <ShieldCheck size={21} />
                  </div>

                  <div>
                     <img
              src="/Borofirst-Logos-1-1.webp"
              alt="Borofirst Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Clear information, suitable options and support
                      throughout your journey.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT — CONTENT
          ====================================================== */}

          <div className="flex min-h-[560px] flex-col justify-center lg:min-h-[680px]">

            {/* Eyebrow */}

            <div className="inline-flex w-fit items-center    ">
                          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2 shadow-sm">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/40" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#186A07]" />
                        </span>
          
                        <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
                           Why BoroFirst
                        </span>
                      </div>
            </div>

            {/* Heading */}
           
    
           <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[3.45rem]">
             Why Thousands Choose{" "}
              <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
             BOROFIRST{" "}
            </span>
             
               for {" "}
            <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
             Loan Against Property{" "}
            </span>
            
          </h2>
          


            <p className="mt-5 max-w-xl text-base leading-8 text-[#64748B] sm:text-lg">
              We help simplify the Loan Against Property journey with
              clear information, suitable lending options and guidance
              from start to finish.
            </p>

            {/* ===================================================
                REASONS
            ==================================================== */}

            <div className="mt-4 border-t border-[#E2E8F0]">

              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.number}
                    className="group border-b border-[#E2E8F0] py-3 transition duration-300 hover:bg-emerald-50/50 sm:py-4"
                  >
                    <div className="flex items-start gap-4">

                      {/* Number */}

                      <span className="pt-1 text-xs font-extrabold tracking-widest text-slate-300 transition duration-300 group-hover:text-[#10B981]">
                        {reason.number}
                      </span>

                      {/* Icon */}

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#10B981] shadow-sm ring-1 ring-slate-100 transition duration-300 group-hover:bg-[#10B981] group-hover:text-white group-hover:scale-105">
                        <Icon size={21} />
                      </div>

                      {/* Content */}

                      <div className="min-w-0 flex-1">

                        <div className="flex items-start justify-between gap-4">

                          <h3 className="text-[16px] font-extrabold text-slate-700 sm:text-lg">
                            {reason.title}
                          </h3>

                          <ArrowRight
                            size={18}
                            className="mt-0.5 shrink-0 text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-[#10B981]"
                          />

                        </div>

                        <p className="mt-1.5 max-w-lg text-sm leading-6 text-slate-500">
                          {reason.text}
                        </p>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ===================================================
                HIGHLIGHT
            ==================================================== */}

            <div className="mt-7 rounded-[20px] border border-emerald-100 bg-emerald-50 p-5 sm:p-6">

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#10B981] shadow-sm">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-extrabold text-slate-800 sm:text-base">
                    Your Property. Your Goals. Clearer Guidance.
                  </h3>

                  <p className="mt-1.5 text-xs leading-6 text-slate-500 sm:text-sm">
                    Our focus is to help you understand your options
                    and take your next step with confidence.
                  </p>
                </div>

              </div>
            </div>

            {/* ===================================================
                TRUST INDICATORS
            ==================================================== */}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 ">

              {[
                "Clear Information",
                "Personalised Guidance",
                "Customer-Focused Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-semibold border-2 border-emerald-50 py-3 px-2 rounded-xl bg-emerald-100 text-slate-500"
                >
                  <CheckCircle2
                    size={16}
                    className="text-[#186A07]"
                  />

                  {item}
                </div>
              ))}

            </div>

            {/* ===================================================
                CTA
            ==================================================== */}

            <div className="mt-8">

              <p className="text-xl font-extrabold text-slate-700 sm:text-2xl">
                Ready to Explore Your Options?
              </p>

              <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                Take the first step toward finding a Loan Against
                Property solution that fits your needs.
              </p>

              <div className="mt-5 flex flex-col  gap-3 sm:flex-row">


                <a
                  href="#contact"
                  className="inline-flex w-full min-h-[50px] items-center justify-center rounded-xl border border-[#E2E8F0]  bg-linear-to-r from-[#186A07] to-[#0B2578] px-6 py-3.5 text-sm font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
                >
                  Talk to an Expert
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBoroFirstLAP;