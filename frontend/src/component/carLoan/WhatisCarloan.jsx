

import React from "react";
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  Calculator,
  CheckCircle2,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

const benefits = [
  {
    id: "01",
    icon: WalletCards,
    title: "Reduce the Upfront Financial Burden",
    text: "Instead of arranging the entire vehicle cost at once, financing can help you spread the eligible purchase amount across planned monthly repayments.",
  },
  {
    id: "02",
    icon: CalendarDays,
    title: "Plan Your Monthly Expenses",
    text: "EMIs provide a structured repayment schedule, making it easier to include your vehicle purchase within your monthly financial planning.",
  },
  {
    id: "03",
    icon: CarFront,
    title: "Get the Car You Need",
    text: "Financing may give eligible borrowers greater flexibility to choose a new or pre-owned vehicle that suits their needs and financial capacity.",
  },
  {
    id: "04",
    icon: ShieldCheck,
    title: "Keep More of Your Savings Available",
    text: "Using financing may allow you to avoid putting a large portion of your available cash into one purchase, leaving funds available for other planned needs.",
  },
];

const financingSteps = [
  {
    icon: CarFront,
    label: "CAR PURCHASE",
    text: "Choose your car",
  },
  {
    icon: WalletCards,
    label: "FINANCING",
    text: "Finance the eligible amount",
  },
  {
    icon: Calculator,
    label: "MONTHLY EMI",
    text: "Repay through planned EMIs",
  },
];

const CarLoanWhatIsSection = () => {
  return (
    <section
      id="what-is-car-loan"
      className="
        relative
        overflow-hidden
        bg-[#F8FAFC]
        py-20
        text-[#0F172A]
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Emerald glow */}
        <div
          className="
            absolute
            left-[8%]
            top-[15%]
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#10B981]/[0.055]
            blur-[110px]
            animate-[softGlow_8s_ease-in-out_infinite]
          "
        />

        {/* Navy glow */}
        <div
          className="
            absolute
            right-[5%]
            top-[35%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#0B2578]/[0.035]
            blur-[120px]
          "
        />

        {/* Fine grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.022]
            [background-image:linear-gradient(#0B2578_1px,transparent_1px),linear-gradient(90deg,#0B2578_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

        {/* Decorative circles */}
        <div
          className="
            absolute
            -right-[180px]
            top-[18%]
            h-[480px]
            w-[480px]
            rounded-full
            border
            border-[#10B981]/10
          "
        />

        <div
          className="
            absolute
            -left-[220px]
            bottom-[5%]
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-[#0B2578]/[0.045]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">

        {/* =====================================================
            INTRO / WHAT IS A CAR LOAN
        ====================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">

          {/* LEFT CONTENT */}
          <div className="hero-content">

            {/* Eyebrow */}
      
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                        <CarFront
                size={15}
                className="text-[#186A07]"
              />
                         Understanding Car Financing
                      </div>
            {/* Heading */}
            <h2
              className="
                mt-6
                max-w-2xl
                text-[42px]
    
                animate-[fadeUp_700ms_100ms_ease-out_both]
                 text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] tracking-tight
              "
            >
              What Is a
              <br />

              <span className=" bg-linear-to-r from-[#186A07] via-[#10B981] to-[#0B2578] bg-clip-text text-transparent">
                Car Loan?
              </span>

              <br />

              {/* <h3 className="max-w-xl text-3xl font-black leading-[1.08] tracking-[-0.045em] sm:text-4xl"> */}
              
              <span className="text-[#10B981] text-2xl">
           
              </span>
                <p className="text-xl font-bold leading-8 tracking-tight text-[#0F172A] sm:text-2xl sm:leading-9">
                    Get the car you need,
                {" "}without putting everything upfront.
              </p>
            {/* </h3> */}
            </h2>

            {/* Main description */}
            <p
              className="
                mt-6
                max-w-xl
                text-sm
                leading-7
                text-[#64748B]
                sm:text-base
                sm:leading-8
                animate-[fadeUp_700ms_200ms_ease-out_both]
              "
            >
              A car loan is a financing facility that helps you purchase a
              new or used car without paying the entire cost upfront. An
              eligible portion of the vehicle cost is financed and repaid
              through monthly EMIs over an agreed tenure.
            </p>

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-7
                text-[#64748B]
                sm:text-base
                sm:leading-8
                animate-[fadeUp_700ms_300ms_ease-out_both]
              "
            >
              Whether you're buying your first car, upgrading to a newer
              model or choosing a pre-owned vehicle, financing can help you
              spread the cost of your purchase into planned monthly
              repayments.
            </p>

            {/* Small trust statement */}
            <div
              className="
                mt-7
                flex
                items-center
                gap-2
                animate-[fadeUp_700ms_400ms_ease-out_both]
              "
            >
              <CheckCircle2
                size={17}
                className="text-[#10B981]"
              />

              <span className="text-xs font-semibold text-[#475569] sm:text-sm">
                Simple financing. Planned repayments. Smarter car ownership.
              </span>
            </div>
          </div>

          {/* RIGHT VISUAL PANEL */}
          <div
            className="
              relative
              animate-[fadeUp_800ms_200ms_ease-out_both]
            "
          >
            {/* Main panel */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#E2E8F0]
                bg-white
                p-6
                shadow-[0_25px_70px_rgba(15,23,42,0.07)]
                sm:p-8
                lg:p-10
              "
            >
              {/* Panel glow */}
              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  h-64
                  w-64
                  rounded-full
                  bg-[#10B981]/10
                  blur-[70px]
                "
              />

              <div className="relative">

                {/* Panel heading */}
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#10B981]">
                      How financing works
                    </p>

                    <h3 className="mt-3 text-2xl font-black tracking-[-0.035em] text-[#0F172A] sm:text-3xl">
                      Turn a big purchase
                      <br />
                      into a planned repayment.
                    </h3>
                  </div>

                  <div
                    className="
                      hidden
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#0B2578]
                      text-white
                      shadow-[0_12px_30px_rgba(11,37,120,0.18)]
                      sm:flex
                      animate-[iconFloat_5s_ease-in-out_infinite]
                    "
                  >
                    <WalletCards size={21} />
                  </div>
                </div>

                {/* Financing visual */}
                <div className="relative mt-10">

                  {/* Connecting line */}
                  <div
                    className="
                      absolute
                      left-[23px]
                      top-6
                      h-[calc(100%-48px)]
                      w-px
                      bg-gradient-to-b
                      from-[#10B981]
                      via-[#10B981]/40
                      to-[#0B2578]/20
                      origin-top
                      animate-[lineReveal_900ms_500ms_ease-out_both]
                    "
                  />

                  <div className="space-y-7">
                    {financingSteps.map((step, index) => {
                      const Icon = step.icon;

                      return (
                        <div
                          key={step.label}
                          className="
                            group
                            relative
                            flex
                            items-center
                            gap-5
                          "
                        >
                          {/* Icon */}
                          <div
                            className="
                              relative
                              z-10
                              flex
                              h-12
                              w-12
                              shrink-0
                              items-center
                              justify-center
                              rounded-2xl
                              border
                              border-[#E2E8F0]
                              bg-white
                              text-[#0B2578]
                              shadow-[0_8px_22px_rgba(15,23,42,0.06)]
                              transition-all
                              duration-300
                              group-hover:-translate-y-1
                              group-hover:border-[#10B981]/30
                              group-hover:bg-[#10B981]/10
                              group-hover:text-[#10B981]
                            "
                          >
                            <Icon size={19} />
                          </div>

                          {/* Text */}
                          <div>
                            <p className="text-[9px] font-black tracking-[0.16em] text-[#10B981]">
                              {step.label}
                            </p>

                            <p className="mt-1 text-sm font-extrabold text-[#0F172A] sm:text-base">
                              {step.text}
                            </p>
                          </div>

                          {/* Number */}
                          <span className="ml-auto text-[10px] font-black text-[#CBD5E1]">
                            0{index + 1}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom message */}
                <div
                  className="
                    mt-9
                    rounded-2xl
                    border
                    border-[#10B981]/15
                    bg-[#10B981]/[0.045]
                    p-4
                  "
                >
                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-[#10B981]"
                    />

                    <p className="text-xs leading-6 text-[#475569]">
                      Your actual loan amount, interest rate, tenure and EMI
                      depend on the lender's terms and your eligibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            HOW CAN A CAR LOAN HELP YOU?
        ====================================================== */}

        <div className="mt-24 lg:mt-32">

          {/* Section heading */}
          <div className="max-w-2xl">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#2c8e18]">
              Why consider financing?
            </p>

            <h3 className="mt-4 text-3xl font-black tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              How Can a Car Loan
              <span className="text-[#186A07]"> Help You?</span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
              A well-planned car loan can make a major vehicle purchase easier
              to manage while helping you balance your car purchase with your
              other financial priorities.
            </p>
          </div>

       

                   {/* Benefits */}
                     <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((expense) => (
              <BenefitsItem
                key={expense.title}
                {...expense}
              />
            ))}
          </div>

          </div>


        {/* =====================================================
            SMALL CTA
        ====================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-between
            gap-5
            rounded-[22px]
            border
            border-[#E2E8F0]
            bg-white
            p-5
            shadow-[0_12px_40px_rgba(15,23,42,0.04)]
            sm:flex-row
            sm:px-7
            sm:py-5
          "
        >
          <div>
            <p className="text-sm font-extrabold text-[#0F172A]">
              Ready to explore your car loan options?
            </p>

            <p className="mt-1 text-xs text-[#64748B]">
              Take the next step toward the car you want.
            </p>
          </div>

          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">

            <button
              type="button"
              className="
                group
                flex
                h-11
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-linear-to-r from-[#186A07]  to-[#0B2578]
                px-5
                text-xs
                font-extrabold
                text-white
                shadow-[0_10px_25px_rgba(16,185,129,0.2)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_14px_30px_rgba(16,185,129,0.28)]
                sm:w-auto
              "
            >
              Apply for Car Loan

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              className="
                flex
                h-11
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-[#E2E8F0]
                bg-white
                px-5
                text-xs
                font-extrabold
               
                hover:-translate-y-0.5
                hover:border-[#10B981]
                hover:bg-[#118A09]
                hover:text-white
                sm:w-auto
                
                      text-[#2c8e18]
                        transition-all duration-300 ease-o  ut
                     
              "
            >
              <CheckCircle2 size={15} />

              Check Eligibility
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarLoanWhatIsSection;

const BenefitsItem = ({ icon: Icon, title, text }) => {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-[#E2E8F0]
        bg-white
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#10B981]/30
        hover:shadow-[0_12px_30px_rgba(15,23,42,0.07)]
        sm:p-5
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
        bg-emerald-50
                     text-[#2c8e18]
                     transition-all
                     duration-300
                     ease-out
                     group-hover:scale-110
                     group-hover:bg-[#118A09]
                     group-hover:text-white
                    group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)] 

        "
      >
        <Icon
          size={18}
          className="
            text-[#059669]
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:text-white
          "
        />
      </div>

      <h3 className="mt-4 text-sm font-extrabold text-[#0F172A]">
        {title}
      </h3>

      <p className="mt-1.5 text-xs leading-5 text-[#64748B]">
        {text}
      </p>
    </div>
  );
};