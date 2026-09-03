// import React from "react";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   BookOpenCheck,
//   CheckCircle2,
//   GraduationCap,
//   PiggyBank,
//   Sparkles,
//   TrendingUp,
//   WalletCards,
// } from "lucide-react";

import { educationWhyChoose } from "../../data/WhyLoanUsedata";
import WhyChooseLoan from "../common/WhyChooseLoan";

// const benefits = [
//   {
//     id: "01",
//     icon: WalletCards,
//     title: "Manage Education Costs",
//     description:
//       "A suitable education loan can help spread eligible tuition, accommodation, books and other approved education expenses through a structured repayment plan.",
//   },
//   {
//     id: "02",
//     icon: PiggyBank,
//     title: "Preserve Family Savings",
//     description:
//       "Instead of using a large portion of family savings upfront, financing can help maintain liquidity for other important financial priorities.",
//   },
//   {
//     id: "03",
//     icon: GraduationCap,
//     title: "Access Better Opportunities",
//     description:
//       "Education financing may help eligible students explore reputed institutions, professional courses and academic opportunities that align with their goals.",
//   },
//   {
//     id: "04",
//     icon: BookOpenCheck,
//     title: "Cover Eligible Expenses",
//     description:
//       "Depending on lender policy, eligible financing may support tuition, accommodation, books, equipment and other approved academic expenses.",
//   },
//   {
//     id: "05",
//     icon: TrendingUp,
//     title: "Invest in Your Future",
//     description:
//       "Quality education can help build knowledge, professional skills and career opportunities that may support your long-term financial goals.",
//   },
// ];

// const journey = [
//   {
//     icon: GraduationCap,
//     title: "Education",
//     text: "Choose the right academic opportunity.",
//   },
//   {
//     icon: BookOpenCheck,
//     title: "Skills",
//     text: "Build knowledge and capabilities.",
//   },
//   {
//     icon: CheckCircle2,
//     title: "Career",
//     text: "Prepare for professional opportunities.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Future",
//     text: "Work toward long-term goals.",
//   },
// ];

// const WhyChooseEducationLoan = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-32">

//       {/* Background decoration */}
//       <div className="pointer-events-none absolute inset-0">

//         <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#10B981]/5 blur-3xl" />

//         <div className="absolute -right-40 top-[40%] h-96 w-96 rounded-full bg-[#0B2578]/5 blur-3xl" />

//         <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#10B981]/5 blur-3xl" />

//         {/* Subtle grid */}
//         <div
//           className="absolute inset-0 opacity-[0.025]"
//           style={{
//             backgroundImage:
//               "linear-linear(#0B2578 1px, transparent 1px), linear-linear(90deg, #0B2578 1px, transparent 1px)",
//             backgroundSize: "60px 60px",
//           }}
//         />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

//         {/* =====================================================
//             HEADER
//         ===================================================== */}

//         <div className="mx-auto max-w-3xl text-center animate-fade-up">

//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#10B981]/20 bg-white px-4 py-2 shadow-sm">

//             <span className="relative flex h-2 w-2">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-60" />
//               <span className="relative h-2 w-2 rounded-full bg-[#10B981]" />
//             </span>

//             <span className="text-[10px] font-bold tracking-[0.22em] text-[#0B2578] sm:text-xs">
//               WHY EDUCATION LOANS?
//             </span>

//           </div>

//           <h2 className=" text-[#0F172A] text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] tracking-tight">

//             Invest in Education Today.

//             <span className="mt-2 block bg-linear-to-r from-[#186A07] via-[#10B981] to-[#0B2578] bg-clip-text text-transparent">
//               Build a Stronger Tomorrow.
//             </span>

//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
//             A well-planned education loan can help students pursue quality
//             education while giving families greater flexibility to manage
//             eligible academic expenses.
//           </p>

//         </div>

//         {/* =====================================================
//             ORBITAL BENEFIT SYSTEM
//         ===================================================== */}

//         <div className="relative mx-auto mt-20 max-w-6xl lg:mt-24">

//           {/* ===================================================
//               DESKTOP ORBITAL AREA
//           =================================================== */}

//           <div className="relative hidden min-h-[720px] lg:block">

//             {/* Large outer orbit */}

//             <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#10B981]/10" />

//             {/* Dashed orbit */}

//             <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#10B981]/20 animate-slow-spin" />

//             {/* Inner orbit */}

//             <div className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0B2578]/10" />

//             {/* Orbit glowing dot */}

//             <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 animate-orbit">

//               <span className="absolute left-1/2 top-[-5px] h-3 w-3 -translate-x-1/2 rounded-full bg-[#10B981] shadow-[0_0_25px_rgba(16,185,129,0.6)]" />

//               <span className="absolute bottom-[10%] right-[11%] h-2 w-2 rounded-full bg-[#0B2578]" />

//               <span className="absolute left-[8%] top-[30%] h-2 w-2 rounded-full bg-[#186A07]" />

//             </div>

//             {/* =================================================
//                 CARD 01 — TOP LEFT
//             ================================================= */}

//             <div className="absolute left-[1%] top-[7%] w-[290px] animate-card-one">

//               <BenefitCard benefit={benefits[0]} />

//             </div>

//             {/* =================================================
//                 CARD 02 — TOP RIGHT
//             ================================================= */}

//             <div className="absolute right-[1%] top-[7%] w-[290px] animate-card-two">

//               <BenefitCard benefit={benefits[1]} />

//             </div>

//             {/* =================================================
//                 CARD 03 — LEFT CENTER
//             ================================================= */}

//             <div className="absolute bottom-[12%] left-[4%] w-[290px] animate-card-three">

//               <BenefitCard benefit={benefits[2]} />

//             </div>

//             {/* =================================================
//                 CARD 04 — RIGHT CENTER
//             ================================================= */}

//             <div className="absolute bottom-[12%] right-[4%] w-[290px] animate-card-four">

//               <BenefitCard benefit={benefits[3]} />

//             </div>

//             {/* =================================================
//                 CARD 05 — BOTTOM CENTER
//             ================================================= */}

//             <div className="absolute bottom-[-3%] left-1/2 w-[310px] -translate-x-1/2 animate-card-five">

//               <BenefitCard benefit={benefits[4]} />

//             </div>

//             {/* =================================================
//                 CENTRAL ORB
//             ================================================= */}

//             <CentralOrb />

//           </div>

//           {/* ===================================================
//               MOBILE VERSION
//           =================================================== */}

//           <div className="lg:hidden">

//             <CentralOrb />

//             <div className="mt-14 grid gap-4">

//               {benefits.map((benefit, index) => (
//                 <div
//                   key={benefit.id}
//                   className="animate-fade-up"
//                   style={{
//                     animationDelay: `${index * 100}ms`,
//                   }}
//                 >
//                   <BenefitCard benefit={benefit} />
//                 </div>
//               ))}

//             </div>

//           </div>

//         </div>

//         {/* =====================================================
//             JOURNEY
//         ===================================================== */}

//         <div className="mt-24 lg:mt-32">

//           <div className="mx-auto max-w-2xl text-center animate-fade-up">

//             <span className="text-[10px] font-bold tracking-[0.22em] text-[#2c8e18] sm:text-xs">
//               YOUR JOURNEY FORWARD
//             </span>

//             <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
//               From Education to a Stronger Future
//             </h3>

//             <p className="mt-4 text-sm leading-7 text-[#64748B]">
//               Education can be an important step toward developing skills,
//               building a career and working toward long-term goals.
//             </p>

//           </div>

//           <div className="relative mt-14">

//             {/* Desktop line */}

//             <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-[#E2E8F0] lg:block">

//               <div className="h-full origin-left bg-linear-to-r from-[#10B981] via-[#10B981] to-[#0B2578] animate-line-grow" />

//             </div>

//             <div className="grid gap-8 lg:grid-cols-4">

//               {journey.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className="group relative z-10 text-center animate-fade-up"
//                     style={{
//                       animationDelay: `${index * 120}ms`,
//                     }}
//                   >

//                     <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-[#F8FAFC] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-500 group-hover:-translate-y-2">

//                       <div className="flex h-12 w-12 items-center justify-center rounded-full

//                     bg-emerald-50
//                     text-[#2c8e18]
//                         transition-all duration-300 ease-out
//                       group-hover:bg-[#118A09]
//                       group-hover:text-white
//                         group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]
//                         group-hover:scale-110

//                       ">

//                         <Icon size={22} />

//                       </div>

//                     </div>

//                     <span className="mt-5 block text-[10px] font-bold tracking-[0.2em] text-[#94A3B8]">
//                       STEP {String(index + 1).padStart(2, "0")}
//                     </span>

//                     <h4 className="mt-1 font-bold text-[#0F172A]">
//                       {item.title}
//                     </h4>

//                     <p className="mx-auto mt-2 max-w-[210px] text-xs leading-5 text-[#64748B]">
//                       {item.text}
//                     </p>

//                   </div>
//                 );
//               })}

//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             CTA
//         ===================================================== */}

//         <div className="relative mt-20 overflow-hidden rounded-[32px]  bg-linear-to-br
//               from-[#0B2578]
//               via-[#0B2578]
//               to-[#186A07] px-6 py-12 sm:px-10 lg:mt-28 lg:px-16 lg:py-14">

//           {/* Glow */}

//           <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#10B981]/20 blur-3xl" />

//          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#10B981]/10 blur-3xl" />

//           <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

//             <div className="max-w-2xl">

//               <div className="mb-4 flex items-center gap-2">

//                 <Sparkles
//                   size={16}
//                   className="text-[#6EE7B7]"
//                 />

//                 <span className="text-[10px] font-bold tracking-[0.2em] text-[#A7F3D0]">
//                   START YOUR JOURNEY
//                 </span>

//               </div>

//               <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
//                 Ready to plan your education without putting your goals on
//                 hold?
//               </h3>

//               <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
//                 Explore your education loan options and understand the
//                 financing possibilities available for your academic journey.
//               </p>

//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row">

//               <button
//                 className="
//                   group
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-2xl
//                   bg-[#10B981]
//                   px-6
//                   py-3.5
//                   text-sm
//                   font-bold
//                   text-white
//                   shadow-[0_12px_30px_rgba(16,185,129,0.25)]
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:bg-[#0EA472]
//                 "
//               >
//                 Check Education Loan Options

//                 <ArrowRight
//                   size={17}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </button>

//               <button
//                 className="
//                   rounded-2xl
//                   border
//                   border-white/20
//                   bg-white/5
//                   px-6
//                   py-3.5
//                   text-sm
//                   font-bold
//                   text-white
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:bg-white/10
//                 "
//               >
//                 Talk to an Expert
//               </button>

//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// /* =========================================================
//    CENTRAL ORB
// ========================================================= */

// const CentralOrb = () => {
//   return (
//     <div className="relative mx-auto flex h-[360px] w-[360px] items-center justify-center sm:h-[430px] sm:w-[430px]">

//       {/* Glow */}

//       <div className="absolute inset-16 rounded-full bg-[#10B981]/15 blur-3xl animate-pulse-glow" />

//       {/* Outer ring */}

//       <div className="absolute inset-0 rounded-full border border-[#10B981]/10" />

//       {/* Dashed orbit */}

//       <div className="absolute inset-8 rounded-full border border-dashed border-[#10B981]/20 animate-slow-spin" />

//       {/* Inner ring */}

//       <div className="absolute inset-16 rounded-full border border-[#0B2578]/10" />

//       {/* Orbiting elements */}

//       <div className="absolute inset-8 animate-orbit">

//         <span className="absolute left-1/2 top-[-4px] h-3 w-3 -translate-x-1/2 rounded-full bg-[#10B981] shadow-[0_0_20px_rgba(16,185,129,0.5)]" />

//         <span className="absolute bottom-[9%] right-[10%] h-2 w-2 rounded-full bg-[#0B2578]" />

//         <span className="absolute left-[8%] top-[30%] h-2 w-2 rounded-full bg-[#186A07]" />

//       </div>

//       {/* Central white orb */}

//       <div className="relative z-10 flex h-56 w-56 flex-col items-center justify-center rounded-full border border-white bg-linear-to-br from-white via-white to-[#ECFDF5] shadow-[0_30px_80px_rgba(15,23,42,0.13)] sm:h-64 sm:w-64 animate-float">

//         <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#10B981] to-[#186A07] text-white shadow-[0_12px_30px_rgba(16,185,129,0.3)]">

//           <GraduationCap
//             size={29}
//             strokeWidth={1.8}
//           />

//         </div>

//         <span className="text-[10px] font-bold tracking-[0.25em] text-[#10B981]">
//           BOROFIRST
//         </span>

//         <h3 className="mt-2 text-center text-xl font-extrabold leading-tight text-[#0F172A] sm:text-2xl">
//           Your Education.
//           <br />
//           <span className="text-[#0B2578]">
//             Your Future.
//           </span>
//         </h3>

//         <div className="mt-4 flex items-center gap-2">

//           <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />

//           <span className="text-[10px] font-medium text-[#64748B]">
//             Plan • Learn • Grow
//           </span>

//           <span className="h-1.5 w-1.5 rounded-full bg-[#0B2578]" />

//         </div>

//       </div>

//     </div>
//   );
// };

// /* =========================================================
//    BENEFIT CARD
// ========================================================= */

// const BenefitCard = ({ benefit }) => {
//   const Icon = benefit.icon;

//   return (
//     <div
//       className="
//         group
//         relative
//         overflow-hidden
//         rounded-3xl
//         border
//         border-[#E2E8F0]
//         bg-white
//         p-5
//         shadow-[0_12px_35px_rgba(15,23,42,0.06)]
//         transition-all
//         duration-500
//         hover:-translate-y-2
//         hover:border-[#10B981]/30
//         hover:shadow-[0_25px_55px_rgba(15,23,42,0.11)]
//       "
//     >

//       {/* Hover glow */}

//       <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#10B981]/5 transition-transform duration-700 group-hover:scale-[2.5]" />

//       <div className="relative">

//         {/* Header */}

//         <div className="flex items-start justify-between">

//           <div
//             className="
//               flex
//               h-12
//               w-12
//               items-center
//               justify-center
//               rounded-2xl
//               bg-emerald-50
//                     text-[#2c8e18]
//                         transition-all duration-300 ease-out
//                       group-hover:bg-[#118A09]
//                       group-hover:text-white
//                         group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]
//                         group-hover:scale-110
//             "
//           >
//             <Icon size={22} />
//           </div>

//           <span className="text-[11px] font-bold tracking-[0.2em] text-[#CBD5E1]">
//             {benefit.id}
//           </span>

//         </div>

//         {/* Title */}

//         <h3 className="mt-5 text-base font-bold leading-6 text-[#0F172A]">
//           {benefit.title}
//         </h3>

//         {/* Description */}

//         <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
//           {benefit.description}
//         </p>

//       </div>
//     </div>
//   );
// };

// export default WhyChooseEducationLoan;

const EducationLoanWhyChoose = () => {
  const handlePrimaryCTA = () => {
    document.getElementById("loan-eligibility")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSecondaryCTA = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <WhyChooseLoan
      config={educationWhyChoose}
      onPrimaryCTA={handlePrimaryCTA}
      onSecondaryCTA={handleSecondaryCTA}
    />
  );
};

export default EducationLoanWhyChoose;
