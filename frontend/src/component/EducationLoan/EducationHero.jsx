
import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Check,
  ChevronRight,
  Clock3,
  GraduationCap,
  IndianRupee,
  Percent,
  ShieldCheck,
  Sparkles,
  Star,
  WalletCards,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const trustPoints = [
  {
    icon: IndianRupee,
    text: "Loans up to ₹50 Lakhs",
  },
  {
    icon: Percent,
    text: "Competitive interest rates",
  },
  {
    icon: Clock3,
    text: "Quick approval",
  },
  {
    icon: WalletCards,
    text: "Flexible repayment options",
  },
];

const educationStats = [
  {
    number: "10K+",
    label: "Students",
  },
  {
    number: "4.8/5",
    label: "Experience",
  },
  {
    number: "India",
    label: "& Abroad",
  },
];

/* =========================================================
   CTA BUTTON
========================================================= */


/* =========================================================
   TRUST POINT
========================================================= */

const TrustPoint = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF]">
        <Icon
          size={14}
          className="text-[#4F46E5]"
          strokeWidth={2.2}
        />
      </span>

      <span className="text-xs font-semibold text-[#475569]">
        {text}
      </span>
    </div>
  );
};

/* =========================================================
   FLOATING LOAN CARD
========================================================= */

const LoanCard = () => {
  return (
    <div
      className="
        absolute
        right-[-10px]
        top-[8%]
        z-30
        w-[220px]
        rounded-2xl
        border
        border-white/80
        bg-white/90
        p-4
        shadow-[0_20px_50px_rgba(15,23,42,0.13)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        sm:right-[2%]
        sm:w-[235px]
      "
    >
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#6366F1] shadow-lg shadow-indigo-200">
          <GraduationCap
            size={20}
            className="text-white"
          />
        </div>

        <span className="rounded-full bg-[#ECFDF5] px-2 py-1 text-[8px] font-bold text-[#059669]">
          AVAILABLE
        </span>
      </div>

      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[#94A3B8]">
        Education Loan
      </p>

      <div className="mt-1 flex items-end gap-1">
        <span className="text-2xl font-extrabold tracking-tight text-[#0F172A]">
          Up to ₹50L
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2 border-t border-[#E2E8F0] pt-3">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ECFDF5]">
          <Check
            size={11}
            className="text-[#059669]"
          />
        </span>

        <span className="text-[10px] font-bold text-[#475569]">
          Quick Approval
        </span>
      </div>
    </div>
  );
};

/* =========================================================
   SMALL FLOATING CARD
========================================================= */

const MiniEducationCard = () => {
  return (
    <div
      className="
        absolute
        bottom-[17%]
        left-[-12px]
        z-30
        hidden
        items-center
        gap-3
        rounded-2xl
        border
        border-white/80
        bg-white/90
        px-4
        py-3
        shadow-[0_18px_40px_rgba(15,23,42,0.12)]
        backdrop-blur-xl
        sm:flex
        lg:left-[-20px]
      "
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF2FF]">
        <BookOpen
          size={17}
          className="text-[#4F46E5]"
        />
      </div>

      <div>
        <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#94A3B8]">
          Study Anywhere
        </p>

        <p className="mt-0.5 text-xs font-extrabold text-[#0F172A]">
          India & Abroad
        </p>
      </div>
    </div>
  );
};

/* =========================================================
   STUDENT VISUAL
========================================================= */

const StudentVisual = () => {
  return (
    <div className="relative mx-auto h-[470px] w-full max-w-[600px] sm:h-[540px] lg:h-[620px]">
      {/* Main visual background */}

      <div
        className="
          absolute
          bottom-[4%]
          right-[3%]
          h-[88%]
          w-[87%]
          overflow-hidden
          rounded-[3rem]
          bg-gradient-to-br
          from-[#EEF4FF]
          via-[#F5F3FF]
          to-[#ECFDF5]
        "
      >
        {/* Decorative grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.35]
            [background-image:linear-gradient(#6366F1_1px,transparent_1px),linear-gradient(90deg,#6366F1_1px,transparent_1px)]
            [background-size:45px_45px]
            [mask-image:linear-gradient(to_bottom,black,transparent)]
          "
        />

        {/* Large soft circles */}

        <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#6366F1]/10 blur-3xl" />

        <div className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-[#10B981]/10 blur-3xl" />

        {/* Academic rings */}

        <div className="absolute right-[12%] top-[14%] h-32 w-32 rounded-full border border-[#6366F1]/10" />

        <div className="absolute right-[17%] top-[19%] h-20 w-20 rounded-full border border-dashed border-[#2563EB]/15" />

        {/* CSS academic blocks */}

        <div className="absolute bottom-0 left-0 h-[34%] w-full bg-gradient-to-t from-[#DDE7FF]/60 to-transparent" />

        <div className="absolute bottom-[15%] right-[8%] h-20 w-[60%] rounded-t-[2rem] bg-white/35 backdrop-blur-sm" />

        <div className="absolute bottom-[15%] right-[14%] flex gap-2 opacity-40">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-14 w-5 rounded-t-full bg-[#4F46E5]/10"
            />
          ))}
        </div>
      </div>

      {/* Student image */}

      <div className="absolute bottom-0 left-[5%] z-20 h-[95%] w-[92%]">
        <img
          src="/images/education-student.webp"
          alt="Student pursuing higher education"
          className="
            h-full
            w-full
            object-contain
            object-bottom
            drop-shadow-[0_25px_35px_rgba(15,23,42,0.15)]
          "
        />
      </div>

      {/* Top floating card */}

      <LoanCard />

      {/* Bottom floating card */}

      <MiniEducationCard />

      {/* Small academic badge */}

      <div
        className="
          absolute
          bottom-[7%]
          right-[1%]
          z-40
          flex
          items-center
          gap-2
          rounded-full
          border
          border-white
          bg-white/90
          px-3
          py-2
          shadow-[0_12px_30px_rgba(15,23,42,0.1)]
          backdrop-blur-xl
        "
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFF7ED]">
          <Sparkles
            size={12}
            className="text-[#F59E0B]"
          />
        </span>

        <span className="text-[9px] font-bold text-[#475569]">
          Build Your Future
        </span>
      </div>
    </div>
  );
};

/* =========================================================
   TRUSTED STUDENTS
========================================================= */

const TrustedStudents = () => {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-4">
      {/* Avatars */}

      <div className="flex -space-x-2">
        {["AK", "RS", "PM", "NV"].map((initials, index) => (
          <div
            key={initials}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border-2
              border-white
              bg-gradient-to-br
              from-[#DBEAFE]
              to-[#E0E7FF]
              text-[8px]
              font-extrabold
              text-[#3730A3]
            "
          >
            {initials}
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={11}
              fill="currentColor"
              className="text-[#F59E0B]"
            />
          ))}
        </div>

        <p className="mt-0.5 text-[10px] font-semibold text-[#64748B]">
          Trusted by{" "}
          <span className="font-extrabold text-[#0F172A]">
            10,000+ students
          </span>
        </p>
      </div>
    </div>
  );
};

/* =========================================================
   MAIN HERO
========================================================= */

const EducationLoanHero = () => {
    const handleEligibilityClick = () => {
    document
      .getElementById("loan-eligibility")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };
  return (
    <section className="relative overflow-hidden bg-[#F8FAFF]">
      {/* =====================================================
          GLOBAL DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(#2563EB_1px,transparent_1px),linear-gradient(90deg,#2563EB_1px,transparent_1px)]
            [background-size:55px_55px]
          "
        />

        {/* Blurred circles */}

        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#6366F1]/10 blur-[100px]" />

        <div className="absolute right-[-100px] top-[25%] h-96 w-96 rounded-full bg-[#2563EB]/10 blur-[120px]" />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1440px] px-5 pb-8 pt-28 sm:px-8 sm:pb-10 sm:pt-32 lg:px-12 lg:pt-36 xl:px-16">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4 xl:gap-10">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-30 max-w-[650px]">
            {/* Brand */}

            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0B2578]">
                <GraduationCap
                  size={18}
                  className="text-white"
                />
              </div>

              <div>
                <p className="text-sm font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-[#186A07] to-[#0B2578]">
                  BOROFIRST
                </p>

                <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#94A3B8]">
                  Financial Freedom Starts Here
                </p>
              </div>
            </div>

            {/* Eyebrow */}

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#6366F1]/15 bg-white px-3 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4F46E5]" />

              <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#4F46E5] sm:text-[10px]">
                Invest in Your Future
              </span>
            </div>

            {/* Headline */}

            <h1
              className="
                max-w-[650px]
                text-[2.8rem]
                font-extrabold
                leading-[1]
                tracking-[-0.055em]
                text-[#0F172A]
                sm:text-5xl
                md:text-6xl
                lg:text-[4.15rem]
                xl:text-[4.75rem]
              "
            >
              Your Education Dreams,
              <br />

              <span className="bg-linear-to-r from-[#186A07] via-[#147342] to-[#0B2578] bg-clip-text text-transparent">
                Now Within Reach.
              </span>
            </h1>

            {/* Supporting text */}

            <p className="mt-6 max-w-[570px] text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
              Get flexible education loans with competitive interest rates,
              simple documentation, and quick approval — so you can focus on
              building your future.
            </p>

            {/* CTA */}

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <button onClick={handleEligibilityClick}
                className="inline-flex bg-linear-to-r from-[#186A07] to-[#0B2578] items-center justify-center rounded-xl border border-[#E2E8F0] bg-white px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-[#10B981]/40 hover:bg-[#10B981]/5"
              >
                Check Your Eligibility
              </button>
              <button 
                className="inline-flex  items-center justify-center rounded-xl border border-[#E2E8F0] bg-white px-6 py-3.5 text-sm font-bold text-[#0B2578] transition-all duration-300 hover:border-[#10B981]/40 hover:bg-[#10B981]/5"
              >
                Calculate EMI
              </button>

            
            </div>

            {/* Reassurance */}

            <div className="mt-4 flex items-center gap-2">
              <ShieldCheck
                size={15}
                className="text-[#10B981]"
              />

              <p className="text-[10px] font-medium text-[#64748B]">
                Checking eligibility will not affect your credit score.
              </p>
            </div>

            {/* Trust points */}

            <div className="mt-8 grid max-w-[590px] grid-cols-1 gap-y-3 border-t border-[#E2E8F0] pt-6 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <TrustPoint
                  key={point.text}
                  icon={point.icon}
                  text={point.text}
                />
              ))}
            </div>

            {/* Trusted students */}

            <TrustedStudents />
          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <div className="relative z-20 lg:-ml-4 xl:-ml-8">
            <StudentVisual />

            {/* =================================================
                STATS STRIP
            ================================================= */}

            <div className="relative z-40 mx-auto -mt-3 grid max-w-[510px] grid-cols-3 overflow-hidden rounded-2xl border border-white/80 bg-white/90 shadow-[0_15px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              {educationStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    px-3
                    py-3
                    text-center
                    sm:px-5
                    sm:py-4
                    ${
                      index !== educationStats.length - 1
                        ? "border-r border-[#E2E8F0]"
                        : ""
                    }
                  `}
                >
                  <p className="text-sm font-extrabold text-[#0B2578] sm:text-base">
                    {stat.number}
                  </p>

                  <p className="mt-0.5 text-[8px] font-semibold text-[#94A3B8] sm:text-[9px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            DISCLOSURE
        ===================================================== */}

        <div className="mt-7 flex justify-center lg:justify-start">
          <p className="text-[9px] font-medium text-[#94A3B8]">
            Terms and conditions apply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationLoanHero;