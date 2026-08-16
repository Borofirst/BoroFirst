import React from 'react'


import {
  ArrowRight,
  CheckCircle2,
  Home,
  ShieldCheck,
} from "lucide-react";


const HomeLoanHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50">

      {/* ================= DESKTOP HERO ================= */}
      <div className="relative hidden min-h-95 lg:block">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/homedesk.png"
            alt="Family in their new home"
            className="h-full w-full object-cover"
          />

        </div>

        {/* Desktop Content */}
        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-12">

          <div className="max-w-xl">

            <div className="mb-6 inline-flex items-center gap-2 animate-[fadeInUp_0.7s_ease-out] rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur">
              <Home size={17} />
              Home Loan Solutions
            </div>

            <h1 className="text-5xl animate-[fadeInUp_0.8s_ease-out_0.5s_both] font-bold leading-[1.1] tracking-tight text-slate-900 xl:text-6xl">
              Make Your
              <span className="block text-[#186A07]">
                Dream Home
              </span>
              a Reality.
            </h1>

            <p className="mt-6 animate-[fadeInUp_0.8s_ease-out_0.4s_both] max-w-lg text-lg leading-7 text-slate-600">
              Turn your dream of owning a home into reality with
              flexible home loan solutions designed around your
              financial needs.
            </p>

            <div className="mt-6 flex flex-wrap gap-5 animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
              <Feature text="Flexible Tenure" />
              <Feature text="Simple Process" />
              <Feature text="Trusted Support" />
            </div>

            <div className="mt-8 animate-[fadeInUp_0.8s_ease-out_0.4s_both] flex gap-3">

              <button className="group flex items-center gap-2 rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-7 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-1 hover:bg-emerald-700">
                Apply for Home Loan

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-xl border border-slate-300 bg-white/80 px-7 py-3.5 font-semibold text-slate-700 backdrop-blur transition hover:border-[#186A07] hover:text-[#186A07]">
                Calculate EMI
              </button>

            </div>

            <TrustIndicator />

          </div>
        </div>
      </div>


      {/* ================= MOBILE HERO ================= */}
      <div className="block lg:hidden">

        {/* Mobile Image */}
        <div className="relative h-[360px] w-full overflow-hidden">

          <img
            src="/home.png"
            alt="Family in their new home"
            className="h-full w-full object-cover object-[68%_center]"
          />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-slate-50 via-slate-50/50 to-transparent" />

        </div>


        {/* Mobile Content */}
        <div className="relative z-10 -mt-4 rounded-t-[32px] bg-slate-50 px-5 pb-10 pt-8">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#EAF5E8] bg-white px-4 py-2 text-xs font-semibold text-emerald-700 shadow-sm">

            <Home size={15} />

            Home Loan Solutions

          </div>


          {/* Heading */}
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900">

            Make Your

            <span className="block text-[#186A07]">
              Dream Home
            </span>

            a Reality.

          </h1>


          {/* Description */}
          <p className="mt-5 text-sm leading-6 text-slate-600">

            Turn your dream of owning a home into reality with
            flexible home loan solutions designed around your
            financial needs.

          </p>


          {/* Features */}
          <div className="mt-5 grid grid-cols-1 gap-3">

            <Feature text="Flexible Tenure" />

            <Feature text="Simple Process" />

            <Feature text="Trusted Support" />

          </div>


          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3">

            <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#186A07] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition active:scale-[0.98]">

              Apply for Home Loan

              <ArrowRight
                size={18}
                className="transition-transform group-active:translate-x-1"
              />

            </button>


            <button className="w-full rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition active:scale-[0.98]">

              Calculate EMI

            </button>

          </div>


          {/* Trust */}
          <TrustIndicator />
      

        </div>
      

      </div>
        <div
        className="absolute bottom-20 right-[42%] hidden animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-md xl:block"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
            <Home
              size={20}
              className="text-[#186A07]"
            />
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Your Dream Home
            </p>

            <p className="text-sm font-bold text-slate-800">
              Starts Here
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}

/* ================= FEATURE ================= */

const Feature = ({ text }) => {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-slate-700">

      <CheckCircle2
        size={17}
        className="shrink-0 text-emerald-600"
      />

      {text}

    </div>
  );
};


/* ================= TRUST ================= */

const TrustIndicator = () => {
  return (
    <div className="mt-7 animate-[fadeInUp_0.8s_ease-out_0.5s_both] flex  items-center gap-3">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF5E8]">

        <ShieldCheck
          size={20}
          className="text-emerald-600"
        />

      </div>

      <div>

        <p className="text-sm font-semibold text-slate-800">
          Built Around Your Financial Goals
        </p>

        <p className="text-xs text-slate-500">
          Transparent guidance from application to approval
        </p>

      </div>

    </div>
  );
};


export default HomeLoanHero;
