
import React from "react";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  GraduationCap,
  PiggyBank,
  Sparkles,
  TrendingUp,
  WalletCards,
} from "lucide-react";

/* =========================================================
   BENEFIT CARD
========================================================= */

const BenefitCard = ({ benefit }) => {
  const Icon = benefit.icon;

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-[#E2E8F0]
        bg-white
        p-5
        shadow-[0_12px_35px_rgba(15,23,42,0.06)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#10B981]/30
        hover:shadow-[0_25px_55px_rgba(15,23,42,0.11)]
      "
    >
      {/* Hover Glow */}

      <div
        className="
          absolute
          -right-10
          -top-10
          h-24
          w-24
          rounded-full
          bg-[#10B981]/5
          transition-transform
          duration-700
          group-hover:scale-[2.5]
        "
      />

      <div className="relative">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
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
            <Icon size={22} />
          </div>

          <span className="text-[11px] font-bold tracking-[0.2em] text-[#CBD5E1]">
            {benefit.id}
          </span>

        </div>

        {/* Title */}

        <h3 className="mt-5 text-base font-bold leading-6 text-[#0F172A]">
          {benefit.title}
        </h3>

        {/* Description */}

        <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
          {benefit.description}
        </p>

      </div>
    </div>
  );
};

/* =========================================================
   CENTRAL ORB
========================================================= */

const CentralOrb = ({ config }) => {
  const Icon = config.center.icon;

  return (
    <div
      className="
        relative
        mx-auto
        flex
        h-[360px]
        w-[360px]
        items-center
        justify-center
        sm:h-[430px]
        sm:w-[430px]
      "
    >

      {/* Glow */}

      <div
        className="
          absolute
          inset-16
          rounded-full
          blur-3xl
          animate-pulse-glow
        "
        style={{
          backgroundColor: `${config.colors.primary}18`,
        }}
      />

      {/* Outer Ring */}

      <div
        className="absolute inset-0 rounded-full border"
        style={{
          borderColor: `${config.colors.primary}18`,
        }}
      />

      {/* Dashed Orbit */}

      <div
        className="
          absolute
          inset-8
          rounded-full
          border
          border-dashed
          animate-slow-spin
        "
        style={{
          borderColor: `${config.colors.primary}30`,
        }}
      />

      {/* Inner Ring */}

      <div
        className="absolute inset-16 rounded-full border"
        style={{
          borderColor: `${config.colors.secondary}18`,
        }}
      />

      {/* Orbiting Elements */}

      <div className="absolute inset-8 animate-orbit">

        <span
          className="absolute left-1/2 top-[-4px] h-3 w-3 -translate-x-1/2 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]"
          style={{
            backgroundColor: config.colors.primary,
          }}
        />

        <span
          className="absolute bottom-[9%] right-[10%] h-2 w-2 rounded-full"
          style={{
            backgroundColor: config.colors.secondary,
          }}
        />

        <span
          className="absolute left-[8%] top-[30%] h-2 w-2 rounded-full"
          style={{
            backgroundColor: config.colors.accent,
          }}
        />

      </div>

      {/* Central White Orb */}

      <div
        className="
          relative
          z-10
          flex
          h-56
          w-56
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-white
          bg-gradient-to-br
          from-white
          via-white
          to-[#ECFDF5]
          shadow-[0_30px_80px_rgba(15,23,42,0.13)]
          sm:h-64
          sm:w-64
          animate-float
        "
      >

        {/* Icon */}

        <div
          className="
            mb-4
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            text-white
            shadow-[0_12px_30px_rgba(16,185,129,0.3)]
          "
          style={{
            background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.accent})`,
          }}
        >
          <Icon
            size={29}
            strokeWidth={1.8}
          />
        </div>

        {/* Brand */}

        <span
          className="text-[10px] font-bold tracking-[0.25em]"
          style={{
            color: config.colors.primary,
          }}
        >
          BOROFIRST
        </span>

        {/* Main Text */}

        <h3 className="mt-2 text-center text-xl font-extrabold leading-tight text-[#0F172A] sm:text-2xl">
          {config.center.title}

          <br />

          <span
            style={{
              color: config.colors.secondary,
            }}
          >
            {config.center.highlight}
          </span>
        </h3>

        {/* Bottom Text */}

        <div className="mt-4 flex items-center gap-2">

          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: config.colors.primary,
            }}
          />

          <span className="text-[10px] font-medium text-[#64748B]">
            {config.center.bottomText}
          </span>

          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: config.colors.secondary,
            }}
          />

        </div>

      </div>
    </div>
  );
};

/* =========================================================
   MAIN REUSABLE COMPONENT
========================================================= */

const WhyChooseLoan = ({
  config,
  onPrimaryCTA,
  onSecondaryCTA,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-32">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="absolute -left-40 top-20 h-96 w-96 rounded-full blur-3xl"
          style={{
            backgroundColor: `${config.colors.primary}08`,
          }}
        />

        <div
          className="absolute -right-40 top-[40%] h-96 w-96 rounded-full blur-3xl"
          style={{
            backgroundColor: `${config.colors.secondary}08`,
          }}
        />

        <div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full blur-3xl"
          style={{
            backgroundColor: `${config.colors.primary}08`,
          }}
        />

        {/* Subtle Grid */}

  

      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center animate-fade-up">

          {/* Eyebrow */}

          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm"
            style={{
              borderColor: `${config.colors.primary}25`,
            }}
          >

            <span className="relative flex h-2 w-2">

              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                style={{
                  backgroundColor: config.colors.primary,
                }}
              />

              <span
                className="relative h-2 w-2 rounded-full"
                style={{
                  backgroundColor: config.colors.primary,
                }}
              />

            </span>

            <span
              className="text-[10px] font-bold tracking-[0.22em] sm:text-xs"
              style={{
                color: config.colors.secondary,
              }}
            >
              {config.eyebrow}
            </span>

          </div>

          {/* Heading */}

          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-[#0F172A] sm:text-4xl lg:text-[44px]">

            {config.heading}

            <span
              className="mt-2 block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${config.colors.accent}, ${config.colors.primary}, ${config.colors.secondary})`,
              }}
            >
              {config.highlight}
            </span>

          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
            {config.description}
          </p>

        </div>

        {/* =====================================================
            ORBITAL BENEFIT SYSTEM
        ===================================================== */}

        <div className="relative mx-auto mt-20 max-w-6xl lg:mt-24">

          {/* ===================================================
              DESKTOP
          =================================================== */}

          <div className="relative hidden min-h-[720px] lg:block">

            {/* Outer Orbit */}

            <div
              className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{
                borderColor: `${config.colors.primary}18`,
              }}
            />

            {/* Dashed Orbit */}

            <div
              className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed animate-slow-spin"
              style={{
                borderColor: `${config.colors.primary}30`,
              }}
            />

            {/* Inner Orbit */}

            <div
              className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{
                borderColor: `${config.colors.secondary}18`,
              }} 
            />

            {/* Orbiting Dots */}

             <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 animate-orbit">

              <span
                className="absolute left-1/2 top-[-5px] h-3 w-3 -translate-x-1/2 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.6)]"
                style={{
                  backgroundColor: config.colors.primary,
                }}
              />

              <span
                className="absolute bottom-[10%] right-[11%] h-2 w-2 rounded-full"
                style={{
                  backgroundColor: config.colors.secondary,
                }}
              />

              <span
                className="absolute left-[8%] top-[30%] h-2 w-2 rounded-full"
                style={{
                  backgroundColor: config.colors.accent,
                }}
              />

            </div> *

            {/* =================================================
                BENEFIT CARDS
            ================================================= */}

            {config.benefits.slice(0, 5).map((benefit, index) => {

              const positions = [
                "absolute left-[1%] top-[7%] w-[290px]",
                "absolute right-[1%] top-[7%] w-[290px]",
                "absolute bottom-[12%] left-[4%] w-[290px]",
                "absolute bottom-[12%] right-[4%] w-[290px]",
                "absolute bottom-[-3%] left-1/2 w-[310px] -translate-x-1/2",
              ];

              const animations = [
                "animate-card-one",
                "animate-card-two",
                "animate-card-three",
                "animate-card-four",
                "animate-card-five",
              ];

              return (
                <div
                  key={benefit.id}
                  className={`${positions[index]} ${animations[index]}`}
                >
                  <BenefitCard benefit={benefit} />
                </div>
              );
            })}

            {/* Central Orb */}

            <CentralOrb config={config} />

          </div>

          {/* ===================================================
              MOBILE
          =================================================== */}

          <div className="lg:hidden">

            <CentralOrb config={config} />

            <div className="mt-14 grid gap-4">

              {config.benefits.map((benefit, index) => (
                <div
                  key={benefit.id}
                  className="animate-fade-up"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <BenefitCard benefit={benefit} />
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* =====================================================
            JOURNEY
        ===================================================== */}

        <div className="mt-24 lg:mt-32">

          <div className="mx-auto max-w-2xl text-center animate-fade-up">

            <span
              className="text-[10px] font-bold tracking-[0.22em] sm:text-xs"
              style={{
                color: config.colors.accent,
              }}
            >
              {config.journey.eyebrow}
            </span>

            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
              {config.journey.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#64748B]">
              {config.journey.description}
            </p>

          </div>

          {/* Journey Items */}

          <div className="relative mt-14">

            {/* Desktop Line */}

            <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-[#E2E8F0] lg:block">

              <div
                className="h-full origin-left animate-line-grow"
                style={{
                  background: `linear-gradient(to right, ${config.colors.primary}, ${config.colors.primary}, ${config.colors.secondary})`,
                }}
              />

            </div>

            <div className="grid gap-8 lg:grid-cols-4">

              {config.journey.items.map((item, index) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative z-10 text-center animate-fade-up"
                    style={{
                      animationDelay: `${index * 120}ms`,
                    }}
                  >

                    {/* Icon Circle */}

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-[#F8FAFC] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-500 group-hover:-translate-y-2">

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          transition-all
                          duration-300
                          ease-out
                          group-hover:scale-110
                        group-hover:text-white
                        "
                        style={{
                          backgroundColor: `${config.colors.primary}12`,
                          color: config.colors.accent,

                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            config.colors.accent;
                             e.currentTarget.style.color ="white";
                            
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor =
                            `${config.colors.primary}12`;
                            e.currentTarget.style.color=config.colors.accent;
                        }}
                      >
                        <Icon size={22} />
                      </div>

                    </div>

                    <span className="mt-5 block text-[10px] font-bold tracking-[0.2em] text-[#94A3B8]">
                      STEP {String(index + 1).padStart(2, "0")}
                    </span>

                    <h4 className="mt-1 font-bold text-[#0F172A]">
                      {item.title}
                    </h4>

                    <p className="mx-auto mt-2 max-w-[210px] text-xs leading-5 text-[#64748B]">
                      {item.text}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>
        </div>

        {/* =====================================================
            CTA
        ===================================================== */}

        <div
          className="
            relative
            mt-20
            overflow-hidden
            rounded-[32px]
            px-6
            py-12
            sm:px-10
            lg:mt-28
            lg:px-16
            lg:py-14
          "
          style={{
            background: `linear-gradient(135deg, ${config.colors.secondary}, ${config.colors.secondary}, ${config.colors.accent})`,
          }}
        >

          {/* Glow */}

          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#10B981]/20 blur-3xl" />

          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#10B981]/10 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* CTA Content */}

            <div className="max-w-2xl">

              <div className="mb-4 flex items-center gap-2">

                <Sparkles
                  size={16}
                  className="text-[#6EE7B7]"
                />

                <span className="text-[10px] font-bold tracking-[0.2em] text-[#A7F3D0]">
                  {config.cta.eyebrow}
                </span>

              </div>

              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                {config.cta.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                {config.cta.description}
              </p>

            </div>

            {/* CTA Buttons */}

            <div className="flex flex-col gap-3 sm:flex-row">

              <button
                onClick={onPrimaryCTA}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-[#10B981]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_12px_30px_rgba(16,185,129,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#0EA472]
                "
              >
                {config.cta.primaryButton}

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={onSecondaryCTA}
                className="
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/5
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/10
                "
              >
                {config.cta.secondaryButton}
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseLoan;

