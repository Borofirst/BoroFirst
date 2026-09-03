import React from "react";
import {
  BadgeCheck,
  CarFront,
  CheckCircle2,
  FileCheck2,
  Headphones,
  IndianRupee,
  ShieldCheck,
  Sparkles,
  TrendingDown,
} from "lucide-react";

const reasons = [
  {
    icon: FileCheck2,
    number: "01",
    title: "Simple Application Journey",
    description:
      "Apply with a straightforward process designed to make your car loan journey easier, clearer and more convenient.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Transparent Loan Guidance",
    description:
      "Understand important loan details such as amount, tenure, EMI and applicable charges before moving forward.",
  },
  {
    icon: BadgeCheck,
    number: "03",
    title: "Solutions Matched to Your Profile",
    description:
      "We help you explore suitable car loan options based on your financial profile, requirements and eligibility.",
  },
  {
    icon: CarFront,
    number: "04",
    title: "New & Used Car Support",
    description:
      "Whether you are purchasing a brand-new car or a pre-owned vehicle, BOROFIRST helps you navigate the financing journey.",
  },
  {
    icon: Headphones,
    number: "05",
    title: "Guidance When You Need It",
    description:
      "Our team helps you understand documentation, application requirements and the next steps throughout your loan journey.",
  },
  {
    icon: Sparkles,
    number: "06",
    title: "A More Convenient Experience",
    description:
      "From checking eligibility to completing your application, we focus on making the financing experience simple and customer-friendly.",
  },
];

const WhyChooseBorofirst = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-emerald-50 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[-180px] h-[400px] w-[400px] rounded-full bg-slate-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/70 px-3.5 py-2">
              <ShieldCheck
                size={15}
                className="text-[#186A07]"
                strokeWidth={2}
              />

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#186A07]">
                Why BOROFIRST
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Why BOROFIRST Is the Smarter Way
              <span className="block bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
                to Finance Your Car
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="flex items-center">
            <p className="text-sm leading-7 text-slate-500 sm:text-base">
              Buying a car is a major financial decision. BOROFIRST is built to
              make the financing journey easier to understand — helping you
              explore your options, understand the process and move ahead with
              greater confidence.
            </p>
          </div>
        </div>

        {/* =========================
            TRUST STRIP
        ========================== */}
        <div className="mt-10 grid overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 sm:grid-cols-3">
          <div className="flex items-center gap-3 border-b border-slate-200 p-5 sm:border-b-0 sm:border-r">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#186A07] shadow-sm">
              <CheckCircle2 size={20} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">Clear Process</p>
              <p className="mt-0.5 text-xs text-slate-500">
                Know what comes next
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-b border-slate-200 p-5 sm:border-b-0 sm:border-r">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#186A07] shadow-sm">
              <ShieldCheck size={20} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                Transparent Guidance
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                Understand your loan
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#186A07] shadow-sm">
              <Headphones size={20} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                Dedicated Support
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                Help throughout the journey
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            BENEFIT GRID
        ========================== */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.number}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)]"
              >
                {/* Number */}
                <span className="absolute right-5 top-4 text-4xl font-extrabold tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-emerald-50">
                  {reason.number}
                </span>

                {/* Icon */}
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-[#186A07] transition-all duration-300 group-hover:bg-[#186A07] group-hover:text-white">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="relative mt-6">
                  <h3 className="text-lg font-bold tracking-tight text-slate-900">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================
            BOTTOM CTA
        ========================== */}
        <div className="relative mt-10 overflow-hidden rounded-[26px] bg-linear-to-r from-[#186A07] to-[#0B2578] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2">
                <CarFront size={19} className="text-white" strokeWidth={2} />

                <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                  Your Car. Your Journey.
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Ready to find the right way to finance your car?
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
                Check your eligibility and take the next step towards your new
                or used car with BOROFIRST.
              </p>
            </div>

            <button
              type="button"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Check Your Eligibility
              <TrendingDown
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBorofirst;
