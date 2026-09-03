import React from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Compass,
  FileCheck2,
  GraduationCap,
  Info,
  Landmark,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

const borofirstAdvantages = [
  {
    id: "01",
    icon: Compass,
    title: "Clear Guidance Through the Process",
    description:
      "Understand the key steps involved in an education loan journey, from assessing your funding requirement to preparing for the lender process.",
  },
  {
    id: "02",
    icon: Landmark,
    title: "Explore Suitable Financing Options",
    description:
      "Explore education financing possibilities based on your course, institution, funding requirement and applicant profile.",
  },
  {
    id: "03",
    icon: FileCheck2,
    title: "Know What Documents to Prepare",
    description:
      "Understand the documents generally required for students and co-applicants, including academic, KYC and income-related documents where applicable.",
  },
  {
    id: "04",
    icon: UsersRound,
    title: "Support When You Need It",
    description:
      "Get helpful guidance for students, parents and co-applicants as they understand requirements and move through the application process.",
  },
];

const borofirstApproach = [
  {
    icon: Info,
    title: "Clear Information",
    description:
      "Understand the important requirements before moving forward.",
  },
  {
    icon: GraduationCap,
    title: "Student-Focused Guidance",
    description:
      "Get support designed around the needs of students and co-applicants.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Approach",
    description:
      "Understand that approval, rates and loan terms remain subject to lender policies and eligibility.",
  },
];

const WhyChooseBorofirst = () => {
  return (
    <section
      aria-labelledby="why-borofirst-heading"
      className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mb-10 max-w-7xl text-center sm:mb-12 lg:mb-14">
    
                                                 <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2 shadow-sm">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/40" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#186A07]" />
                        </span>
          
                        <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
                               
             Why BOROFIRST
                        </span>
                      </div>

            {/* Heading */}


                   <h2 className=" text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.45rem]">
                             Why Choose {" "}
                        <span className=" bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent ">
                           Borofirst{" "}
                            
                        </span>
                         for Your{" "}
                        <span className="block  bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent ">
                           Education Loan?
                            
                        </span>
                        
                      </h2>            
        

          <p className="mt-5  text-base leading-7 text-[#64748B] sm:text-lg">
            BOROFIRST helps students and families understand their education
            loan requirements, prepare the right information and explore
            suitable financing options with greater clarity.
          </p>
        </div>

        {/* ================= MAIN COMPOSITION ================= */}
        <div className="overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* ================= LEFT PANEL ================= */}
            <div className="relative bg-[#F8FAFC] p-7 sm:p-9 lg:p-10">
              {/* Emerald vertical accent */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-10 h-20 w-1 rounded-r-full bg-[#10B981]"
              />

              <div className="pl-3">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#64748B]">
                  The BOROFIRST Approach
                </span>

                <h3 className="mt-4 max-w-sm text-2xl font-bold leading-tight text-[#0F172A] sm:text-3xl">
                  Your Education.
                  <br />
                  <span className="text-[#0B2578]">Your Ambition.</span>
                  <br />
                  Our Guidance.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-6 text-[#64748B] sm:text-base">
                  Education financing involves important decisions around
                  course fees, eligibility, documentation, co-applicants and
                  lender requirements. BOROFIRST helps simplify these steps so
                  students and families can make better-informed decisions.
                </p>

                {/* Approach Points */}
                <div className="mt-8 space-y-5">
                  {borofirstApproach.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#2c6e18] shadow-sm">
                          <Icon size={17} strokeWidth={2} />
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-[#0F172A]">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-xs leading-5 text-[#64748B] sm:text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Brand Signature */}
                <div className="mt-10 border-t border-[#E2E8F0] pt-7">
                  <div className="mb-4 h-0.5 w-12 bg-[#10B981]" />

                  

                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-[#0B2578]">
                      Financial Freedom Starts Here.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= RIGHT PANEL ================= */}
            <div className="p-7 sm:p-9 lg:p-10">
              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#2c8e18]">
                  What You Can Expect
                </span>

                <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
                  A straightforward approach
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-[#64748B]">
                  Focused on helping you understand what comes next in your
                  education financing journey.
                </p>
              </div>

              {/* Advantage Rows */}
              <div className="mt-6">
                {borofirstAdvantages.map((item, index) => {
                  const Icon = item.icon;
                  const isLast = index === borofirstAdvantages.length - 1;

                  return (
                    <div
                      key={item.id}
                      className={`group -mx-3 flex gap-4 rounded-xl px-3 py-6 transition-all duration-300 hover:bg-emerald-50/40 sm:gap-5 ${
                        !isLast ? "border-b border-[#E2E8F0]" : ""
                      }`}
                    >
                      {/* Number */}
                      <span className="w-7 shrink-0 pt-2 text-xs font-bold tracking-wide text-[#94A3B8]">
                        {item.id}
                      </span>

                      {/* Icon */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl  bg-emerald-50
                    text-[#2c8e18]
                        transition-all duration-300 ease-o  ut
                      group-hover:bg-[#118A09]
                      group-hover:text-white
                        group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]
                        group-hover:scale-110">
                        <Icon size={19} strokeWidth={2} />
                      </div>
                                                         

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-base font-semibold leading-6 text-[#0F172A] transition-colors duration-300 group-hover:text-[#10B981] sm:text-lg">
                            {item.title}
                          </h4>

                          <ArrowUpRight
                            size={18}
                            className="mt-1 shrink-0 text-[#94A3B8] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1 group-hover:text-[#10B981]"
                          />
                        </div>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-[#64748B]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ================= TRUST STRIP ================= */}
        <div className="mt-7 flex flex-col gap-4 border-b border-[#E2E8F0] pb-7 sm:mt-8 sm:flex-row sm:items-start sm:gap-4">
          <CheckCircle2
            size={22}
            className="shrink-0 text-[#10B981]"
            strokeWidth={2}
          />

          <div>
            <h3 className="text-sm font-bold text-[#0F172A] sm:text-base">
              Built Around Students & Families
            </h3>

            <p className="mt-1 max-w-3xl text-sm leading-6 text-[#64748B]">
              From students planning their next academic step to parents
              managing the financial side, BOROFIRST focuses on making the
              financing journey easier to understand.
            </p>
          </div>
        </div>

        {/* ================= RESPONSIBLE FINANCE NOTE ================= */}
        <p className="mt-5 max-w-4xl text-xs leading-5 text-[#64748B]">
          Education loan approval, interest rates, tenure, security
          requirements and other terms are subject to the respective lender's
          eligibility criteria, policies and applicable requirements.
        </p>

        {/* ================= CTA ================= */}
        <div
  className="
    relative
    mt-16
    overflow-hidden
    rounded-[28px]
    border
    border-white/20
    bg-linear-to-br
    from-[#186A07]
    via-[#155F16]
    to-[#0B2578]
    px-6
    py-7
    shadow-[0_20px_60px_rgba(11,37,120,0.16)]
    sm:px-8
    sm:py-8
    lg:mt-20
    lg:px-10
    lg:py-9
  "
>
  {/* Background Glow */}

  <div
    className="
      pointer-events-none
      absolute
      -right-24
      -top-32
      h-72
      w-72
      rounded-full
      bg-[#10B981]/15
      blur-3xl
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -bottom-32
      left-1/3
      h-64
      w-64
      rounded-full
      bg-white/5
      blur-3xl
    "
  />

  {/* Content */}

  <div
    className="
      relative
      z-10
      flex
      flex-col
      gap-6
      lg:flex-row
      lg:items-center
      lg:justify-between
    "
  >

    {/* Left Content */}

    <div className="max-w-3xl">

      {/* Badge */}

      <div
        className="
          mb-3
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-white/15
          bg-white/10
          px-3
          py-1.5
          backdrop-blur-md
        "
      >
        <Sparkles
          size={14}
          className="text-[#A7F3D0]"
        />

        <span
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-[#D1FAE5]
            sm:text-[10px]
          "
        >
          Start Your Journey
        </span>
      </div>

      {/* Heading */}

      <h3
        className="
          max-w-2xl
          text-2xl
          font-bold
          leading-tight
          tracking-tight
          text-white
          sm:text-3xl
          lg:text-[34px]
        "
      >
        Ready to Explore Your
        <span className="ml-1.5 text-[#A7F3D0]">
          Education Loan Options?
        </span>
      </h3>

      {/* Description */}

      <p
        className="
          mt-2
          max-w-2xl
          text-sm
          leading-6
          text-white/70
        "
      >
        Check your eligibility and understand the next steps
        with BOROFIRST.
      </p>

    </div>

    {/* Buttons */}

    <div
      className="
        relative
        flex
        shrink-0
        flex-col
        gap-2.5
        sm:flex-row
        lg:flex-col
        xl:flex-row
      "
    >

      {/* Primary */}

      <button
        type="button"
        className="
          group
          inline-flex
          min-h-11
          items-center
          justify-center
          gap-2
          whitespace-nowrap
          rounded-xl
          bg-white
          px-5
          py-2.5
          text-sm
          font-semibold
          text-[#0B2578]
          shadow-[0_8px_25px_rgba(0,0,0,0.12)]
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)]
          focus:outline-none
          focus:ring-2
          focus:ring-white
          focus:ring-offset-2
          focus:ring-offset-[#0B2578]
        "
      >
        Check Loan Eligibility

        <ArrowUpRight
          size={16}
          className="
            transition-transform
            duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
          "
        />
      </button>

      {/* Secondary */}

      <button
        type="button"
        className="
          inline-flex
          min-h-11
          items-center
          justify-center
          whitespace-nowrap
          rounded-xl
          border
          border-white/25
          bg-white/10
          px-5
          py-2.5
          text-sm
          font-semibold
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-white/40
          hover:bg-white/15
          focus:outline-none
          focus:ring-2
          focus:ring-white
          focus:ring-offset-2
          focus:ring-offset-[#0B2578]
        "
      >
        Talk to an Expert
      </button>

    </div>

  </div>
</div>
 
</div>




    </section>
  );
};

export default WhyChooseBorofirst;