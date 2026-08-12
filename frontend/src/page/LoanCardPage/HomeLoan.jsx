// // import React from 'react'

// // const HomeLoan = () => {
// //   return (
// //     <div>
// //       Home Loan
// //     </div>
// //   )
// // }

// // export default HomeLoan



// import React from "react";
// import { ArrowRight, CheckCircle2, Home, ShieldCheck } from "lucide-react";
// // import heroImage from "../assets/home-loan-hero.png";

// const HomeLoan = () => {
//   return (
//     <section className="relative min-h-[700px] overflow-hidden bg-slate-50">
      
//       {/* Hero Image */}
//       <div className="absolute inset-0">
//         <img
//           src="/home.png"
//           alt="Happy family standing in front of their new home"
//           className="h-[80%] w-full object-cover object-center"
//         />

//         {/* Very subtle image blending */}
//         {/* <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-40% to-transparent" /> */}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 mx-auto flex min-h-[580px] max-w-7xl items-center px-5  sm:px-8 lg:px-12">
        
//         <div className="w-full max-w-xl">

//           {/* Small Badge */}
//           <div
//             className="mb-4 inline-flex animate-[fadeInUp_0.7s_ease-out] items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur-md"
//           >
//             <Home size={17} />

//             <span>Home Loan Solutions</span>
//           </div>

//           {/* Heading */}
//           <h1
//             className="animate-[fadeInUp_0.8s_ease-out_0.1s_both] text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
//           >
//             Make Your
//             <span className="block text-emerald-600">
//               Dream Home
//             </span>
//             a Reality.
//           </h1>

//           {/* Description */}
//           <p
//             className="mt-6 max-w-lg animate-[fadeInUp_0.8s_ease-out_0.2s_both] text-base leading-7 text-slate-600 sm:text-lg"
//           >
//             Turn your dream of owning a home into reality with flexible
//             home loan solutions designed around your financial needs.
//           </p>

//           {/* Features */}
//           <div
//             className="mt-6 flex flex-wrap gap-x-6 gap-y-3 animate-[fadeInUp_0.8s_ease-out_0.3s_both]"
//           >
//             <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
//               <CheckCircle2
//                 size={18}
//                 className="text-emerald-600"
//               />
//               Flexible Tenure
//             </div>

//             <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
//               <CheckCircle2
//                 size={18}
//                 className="text-emerald-600"
//               />
//               Simple Process
//             </div>

//             <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
//               <CheckCircle2
//                 size={18}
//                 className="text-emerald-600"
//               />
//               Trusted Support
//             </div>
//           </div>

//           {/* Buttons */}
//           <div
//             className="mt-8 flex flex-col gap-3 animate-[fadeInUp_0.8s_ease-out_0.4s_both] sm:flex-row"
//           >
//             <button
//               className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl"
//             >
//               Apply for Home Loan

//               <ArrowRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </button>

//             <button
//               className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-700"
//             >
//               Calculate EMI
//             </button>
//           </div>

//           {/* Trust Indicator */}
//           <div
//             className="mt-8 flex animate-[fadeInUp_0.8s_ease-out_0.5s_both] items-center gap-3"
//           >
//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
//               <ShieldCheck
//                 size={21}
//                 className="text-emerald-600"
//               />
//             </div>

//             <div>
//               <p className="text-sm font-semibold text-slate-800">
//                 Built Around Your Financial Goals
//               </p>

//               <p className="text-xs text-slate-500">
//                 Transparent guidance from application to approval
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating decorative card */}
//       <div
//         className="absolute bottom-40 right-[42%] hidden animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-md xl:block"
//       >
//         <div className="flex items-center gap-3">
//           <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
//             <Home
//               size={20}
//               className="text-emerald-600"
//             />
//           </div>

//           <div>
//             <p className="text-xs text-slate-500">
//               Your Dream Home
//             </p>

//             <p className="text-sm font-bold text-slate-800">
//               Starts Here
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Decorative glow */}
//       <div className="pointer-events-none absolute -bottom-32 left-[42%] h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />

//       {/* Custom animations */}
//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-10px);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HomeLoan;


import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Home,
  ShieldCheck,
} from "lucide-react";


const HomeLoan = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50">

      {/* ================= DESKTOP HERO ================= */}
      <div className="relative hidden min-h-[680px] lg:block">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/home.png"
            alt="Family in their new home"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-r from-white via-white/90 via-40% to-transparent" />
        </div>

        {/* Desktop Content */}
        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-12">

          <div className="max-w-xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur">
              <Home size={17} />
              Home Loan Solutions
            </div>

            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 xl:text-6xl">
              Make Your
              <span className="block text-emerald-600">
                Dream Home
              </span>
              a Reality.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-7 text-slate-600">
              Turn your dream of owning a home into reality with
              flexible home loan solutions designed around your
              financial needs.
            </p>

            <div className="mt-6 flex flex-wrap gap-5">
              <Feature text="Flexible Tenure" />
              <Feature text="Simple Process" />
              <Feature text="Trusted Support" />
            </div>

            <div className="mt-8 flex gap-3">

              <button className="group flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-1 hover:bg-emerald-700">
                Apply for Home Loan

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-xl border border-slate-300 bg-white/80 px-7 py-3.5 font-semibold text-slate-700 backdrop-blur transition hover:border-emerald-400 hover:text-emerald-700">
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
        <div className="relative h-[330px] w-full overflow-hidden">

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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-semibold text-emerald-700 shadow-sm">

            <Home size={15} />

            Home Loan Solutions

          </div>


          {/* Heading */}
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900">

            Make Your

            <span className="block text-emerald-600">
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

            <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition active:scale-[0.98]">

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

    </section>
  );
};


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
    <div className="mt-7 flex items-center gap-3">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">

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

export default HomeLoan;