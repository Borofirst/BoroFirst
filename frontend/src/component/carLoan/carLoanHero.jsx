import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  CarFront,
  CheckCircle2,
  Gauge,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

const financeHighlights = [
  {
    icon: CarFront,
    label: "New & Used",
    text: "Car Financing",
  },
  {
    icon: WalletCards,
    label: "Flexible",
    text: "EMI Options",
  },
  {
    icon: ShieldCheck,
    label: "Simple",
    text: "Loan Process",
  },
];

const CarLoanHeroSpotlight = () => {
  return (
    <section className="relative min-h-[760px] w-full overflow-hidden bg-[#F8FAFC] text-[#0F172A] sm:min-h-[820px] lg:min-h-[850px]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top navy atmosphere */}
        <div
          className="
            absolute
            left-1/2
            top-[-220px]
            h-[520px]
            w-[900px]
            -translate-x-1/2
            rounded-[50%]
            bg-[#0B2578]/5
            blur-[100px]
          "
        />

        {/* Main emerald atmosphere */}
        <div
          className="
            absolute
            left-1/2
            top-[48%]
            h-[420px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#10B981]/10
            blur-[100px]
            animate-[heroGlow_8s_ease-in-out_infinite]
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-[-200px]
            left-1/2
            h-[400px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-[#10B981]/5
            blur-[100px]
          "
        />

        {/* Fine grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-linear(#0B2578_1px,transparent_1px),linear-linear(90deg,#0B2578_1px,transparent_1px)]
            bg-size-[55px_55px]
          "
        />

        {/* Large orbital circle */}
        <div
          className="
            absolute
            left-1/2
            top-[48%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#10B981]/10
            lg:h-[700px]
            lg:w-[700px]
            animate-[orbit_30s_linear_infinite]
          "
        />

        {/* Second orbital */}
        <div
          className="
            absolute
            left-1/2
            top-[48%]
            h-[360px]
            w-[360px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-dashed
            border-[#0B2578]/5
            lg:h-[540px]
            lg:w-[540px]
            animate-[orbitReverse_40s_linear_infinite]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 pt-28 sm:px-6 lg:px-10 lg:pt-32">
        {/* =================================================
            TOP CONTENT
        ================================================== */}

        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div
            className="
              hero-enter
              mx-auto
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#10B981]/20
              bg-white/75
              px-4
              py-2
              shadow-sm
              backdrop-blur-xl
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[#10B981]/50" />
              <span className="relative h-2 w-2 rounded-full bg-[#10B981]" />
            </span>

            <CarFront size={15} className="text-[#10B981]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B2578] sm:text-xs">
              New & Used Car Loans
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              hero-enter
              mt-6
              text-[44px]
              font-black
              leading-[0.94]
              tracking-[-0.065em]
              sm:text-6xl
              md:text-7xl
              lg:text-[82px]
            "
            style={{ animationDelay: "120ms" }}
          >
            The Car You Want.
            <br />
            <span className="relative text-[#186A07]">
              The Finance You Need.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              hero-enter
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-6
              text-[#64748B]
              sm:text-base
              sm:leading-7
            "
            style={{ animationDelay: "220ms" }}
          >
            Get financing for your new or used car with flexible options,
            convenient EMIs and a simple application journey with BOROFIRST.
          </p>

          {/* CTA */}
          <div
            className="
              hero-enter
              mt-7
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
            "
            style={{ animationDelay: "320ms" }}
          >
            <button
              className="
                group
                relative
                flex
                h-14
                w-full
                items-center
                justify-center
                gap-2
                overflow-hidden
                rounded-xl
                
                px-8
                text-sm
                font-bold
                text-white
                shadow-[0_18px_40px_rgba(16,185,129,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_22px_50px_rgba(16,185,129,0.32)]
                sm:w-auto
                bg-[#186A07]     hover:bg-[#125405]
              "
            >
              <span
                className="
                  absolute
                  inset-y-0
                  -left-24
                  w-16
                  rotate-12
                  bg-white/20
                  blur-sm
                  transition-all
                  duration-700
                  group-hover:left-[120%]
                  
                "
              />

              <span className="relative">Apply for Car Loan</span>

              <ArrowRight
                size={18}
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button
              className="
                flex
                h-14
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-[#E2E8F0]
                bg-white/80
                px-8
                text-sm
                font-bold
                text-[#0B2578]
                shadow-sm
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#125405]
                hover:text-white
                sm:w-auto
              "
            >
              <CheckCircle2 size={18} />
              Check Eligibility
            </button>
          </div>
        </div>

        {/* =================================================
            AUTOMOTIVE SPOTLIGHT
        ================================================== */}

        <div className="relative mx-auto mt-8 h-[360px] max-w-[1500px] sm:h-[420px] lg:mt-2 lg:h-[460px]">
          {/* Road shadow */}
          <div
            className="
              absolute
              bottom-[18%]
              left-1/2
              h-12
              w-[70%]
              -translate-x-1/2
              rounded-[50%]
              bg-[#0F172A]/10
              blur-2xl
            "
          />

          {/* Emerald road light */}
          <div
            className="
              absolute
              bottom-[20%]
              left-1/2
              h-5
              w-[45%]
              -translate-x-1/2
              rounded-full
              bg-[#10B981]/20
              blur-xl
              animate-pulse
            "
          />

          {/* Left finance card */}
          <div
            className="
              absolute
              left-0
              top-[22%]
              z-30
              hidden
              rounded-2xl
              border
              border-white/70
              bg-white/80
              p-4
              shadow-[0_20px_50px_rgba(15,23,42,0.1)]
              backdrop-blur-xl
              sm:block
              animate-[floatLeft_6s_ease-in-out_infinite]
              lg:left-[4%]
            "
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#10B981]/10">
                <WalletCards size={20} className="text-[#10B981]" />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                  Flexible EMI
                </p>

                <p className="mt-1 text-sm font-extrabold text-[#0F172A]">
                  Built Around You
                </p>

                <div className="mt-1 flex items-center gap-1">
                  <CheckCircle2 size={12} className="text-[#2c8e18]" />

                  <span className="text-[9px] text-[#64748B]">
                    Convenient repayment
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right finance card */}
          <div
            className="
              absolute
              right-0
              top-[15%]
              z-30
              hidden
              rounded-2xl
              border
              border-white/70
              bg-white/80
              p-4
              shadow-[0_20px_50px_rgba(15,23,42,0.1)]
              backdrop-blur-xl
              sm:block
              animate-[floatRight_5.5s_ease-in-out_infinite]
              lg:right-[4%]
            "
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B2578]/5">
                <ShieldCheck size={20} className="text-[#0B2578]" />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                  BOROFIRST
                </p>

                <p className="mt-1 text-sm font-extrabold text-[#0F172A]">
                  Simple Financing
                </p>

                <div className="mt-1 flex items-center gap-1">
                  <BadgeCheck size={12} className="text-[#2c8e18]" />

                  <span className="text-[9px] text-[#64748B]">
                    Easy application
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="
    absolute
    inset-0
    z-20
    flex
    items-center
    justify-center
    pt-10
    sm:pt-12
    lg:pt-16
    left-1/2
top-1/2

translate-y-[-36%]
    animate-[carFloat_6s_ease-in-out_infinite]
  "
          >
            <img
              src="carImage.png"
              alt="Premium car available with BOROFIRST car financing"
              className="
      block
      w-[150%]
      max-w-[1500px]
      h-auto
      object-contain
      drop-shadow-[0_40px_35px_rgba(15,23,42,0.20)]
      sm:w-[105%]
      lg:w-[95%]
    "
            />
          </div>

          {/* =================================================
              NEW / USED FLOATING LABEL
          ================================================== */}

          <div
            className="
              absolute
              bottom-[9%]
              left-1/2
              z-40
              -translate-x-1/2
              rounded-full
              border
              border-white/80
              bg-white/90
              px-5
              py-2.5
              shadow-[0_15px_35px_rgba(15,23,42,0.12)]
              backdrop-blur-xl
              sm:bottom-[6%]
            "
          >
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-[#0F172A] sm:text-xs">
                NEW CARS
              </span>

              <span className="h-1 w-1 rounded-full bg-[#2c8e18]" />

              <span className="text-[10px] font-bold text-[#0F172A] sm:text-xs">
                USED CARS
              </span>

              <span className="h-1 w-1 rounded-full bg-[#2c8e18]" />

              <span className="text-[10px] font-bold text-[#2c8e18] sm:text-xs">
                FINANCING
              </span>
            </div>
          </div>

          {/* Floating sparkle */}
          <Sparkles
            size={22}
            className="
              absolute
              left-[20%]
              top-[8%]
              text-[#10B981]/50
              animate-[sparkle_4s_ease-in-out_infinite]
            "
          />

          <Sparkles
            size={16}
            className="
              absolute
              right-[23%]
              bottom-[18%]
              text-[#0B2578]/30
              animate-[sparkle_5s_ease-in-out_1s_infinite]
            "
          />
        </div>

        {/* =================================================
            BOTTOM TRUST STRIP
        ================================================== */}

        <div
          className="
            mx-auto
            grid
            max-w-4xl
            grid-cols-3
            overflow-hidden
            rounded-2xl
            border
            border-[#E2E8F0]
            bg-white/75
            shadow-[0_15px_40px_rgba(15,23,42,0.05)]
            backdrop-blur-xl
          "
        >
          {financeHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-2
                  py-4
                  sm:gap-3
                  sm:py-5
                  ${index !== 0 ? "border-l border-[#E2E8F0]" : ""}
                `}
              >
                <Icon size={18} className="shrink-0 text-[#2c8e18]" />

                <div>
                  <p className="text-[9px] font-extrabold text-[#0F172A] sm:text-xs">
                    {item.label}
                  </p>

                  <p className="hidden text-[10px] text-[#64748B] sm:block">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#F8FAFC] to-transparent" />
    </section>
  );
};

export default CarLoanHeroSpotlight;
