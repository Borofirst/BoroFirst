import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const defaultReasons = [
  {
    number: "01",
    title: "Multiple Lending Options",
    text: "Explore suitable loan options based on your requirements and profile.",
  },
  {
    number: "02",
    title: "Personalised Guidance",
    text: "Get help understanding your options, requirements and next steps.",
  },
  {
    number: "03",
    title: "Clear Process",
    text: "Understand the application and document process without unnecessary complexity.",
  },
  {
    number: "04",
    title: "End-to-End Support",
    text: "Get guidance throughout your journey, from enquiry to the next stages.",
  },
];

const   WhyChooseSection = ({
  title = "Why Choose BOROFIRST?",
  highlight = "",
  description = "",
  image = "",
  imageAlt = "BOROFIRST financial solution",
  eyebrow = "Why BOROFIRST",

  reasons = defaultReasons,

  brandMessage = "Clear information, suitable options and support throughout your journey.",

  highlightTitle = "Your Goals. Your Options. Clearer Guidance.",
  highlightText = "Our focus is to help you understand your options and take your next step with confidence.",

  trustItems = [
    "Clear Information",
    "Personalised Guidance",
    "Customer-Focused Support",
  ],

  showCta = true,
  ctaTitle = "Ready to Explore Your Options?",
  ctaDescription = "Take the first step toward finding a financial solution that fits your needs.",
  ctaText = "Talk to an Expert",
  ctaHref = "#contact",
}) => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F8FAFC]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Green glow */}
        <div
          className="
            absolute
            -left-40
            top-20
            h-80
            w-80
            rounded-full
            bg-emerald-100/50
            blur-3xl
          "
        />

        {/* Blue glow */}
        <div
          className="
            absolute
            -right-40
            bottom-0
            h-96
            w-96
            rounded-full
            bg-blue-100/40
            blur-3xl
          "
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#0B2578 1px, transparent 1px),
              linear-gradient(90deg, #0B2578 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =======================================================
            MAIN LAYOUT
        ======================================================== */}

        <div className="grid items-stretch gap-8 lg:grid-cols-2">

          {/* =====================================================
              LEFT — IMAGE
          ====================================================== */}

          <div className="relative min-h-[560px] overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white shadow-xl lg:min-h-[680px]">

            {image && (
              <img
                src={image}
                alt={imageAlt}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-700
                  ease-out
                  hover:scale-[1.01]
                "
              />
            )}

            {/* Image overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#0B2578]/75
                via-[#0B2578]/10
                to-transparent
              "
            />

            {/* Emerald glow */}
            <div
              className="
                absolute
                -bottom-24
                -left-20
                h-72
                w-72
                rounded-full
                bg-emerald-400/20
                blur-3xl
              "
            />

            {/* =================================================
                BRAND CARD
            ================================================== */}

            <div
              className="
                absolute
                bottom-7
                left-6
                right-6
                sm:left-8
                sm:right-auto
                sm:max-w-sm
              "
            >
              <div
                className="
                  rounded-[20px]
                  border
                  border-white/20
                  bg-white/95
                  p-5
                  shadow-2xl
                  backdrop-blur-md
                "
              >

                <div className="flex items-start gap-3">

                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-emerald-50
                      text-[#10B981]
                    "
                  >
                    <ShieldCheck size={21} />
                  </div>

                  <div>

                    {/* Logo */}
                    <img
                      src="/Borofirst-Logos-1-1.webp"
                      alt="Borofirst Logo"
                      width="150"
                      height="50"
                      className="
                        h-12
                        w-auto
                        object-contain
                        transition-transform
                        duration-300
                        hover:scale-105
                      "
                    />

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-slate-500
                      "
                    >
                      {brandMessage}
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT — CONTENT
          ====================================================== */}

          <div
            className="
              flex
              min-h-[560px]
              flex-col
              justify-center
              lg:min-h-[680px]
            "
          >

            {/* =================================================
                EYEBROW
            ================================================== */}

            <div className="mb-6 inline-flex w-fit">

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#186A07]/15
                  bg-[#F4FAF1]
                  px-4
                  py-2
                  shadow-sm
                "
              >

                <span className="relative flex h-2.5 w-2.5">

                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-[#186A07]/40
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-[#186A07]
                    "
                  />

                </span>

                <span
                  className="
                    text-xs
                    font-bold
                    tracking-[0.16em]
                    text-[#186A07]
                  "
                >
                  {eyebrow}
                </span>

              </div>
            </div>

            {/* =================================================
                TITLE
            ================================================== */}

            <h2
              className="
                max-w-3xl
                text-3xl
                font-bold
                leading-[1.08]
                tracking-[-0.035em]
                text-slate-900
                sm:text-4xl
                lg:text-[3.45rem]
              "
            >
              {title}{" "}

              {highlight && (
                <span
                  className="
                    bg-gradient-to-r
                    from-[#186A07]
                    via-[#3E8B25]
                    to-[#0B2578]
                    bg-clip-text
                    text-transparent
                  "
                >
                  {highlight}
                </span>
              )}
            </h2>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            {description && (
              <p
                className="
                  mt-5
                  max-w-xl
                  text-base
                  leading-8
                  text-[#64748B]
                  sm:text-lg
                "
              >
                {description}
              </p>
            )}

            {/* =================================================
                REASONS
            ================================================== */}

            <div className="mt-7 border-t border-[#E2E8F0]">

              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.number}
                    className="
                      group
                      border-b
                      border-[#E2E8F0]
                      py-4
                      transition
                      duration-300
                      hover:bg-emerald-50/50
                      sm:py-5
                    "
                  >

                    <div className="flex items-start gap-4">

                      {/* Number */}
                      <span
                        className="
                          pt-1
                          text-xs
                          font-extrabold
                          tracking-widest
                          text-slate-300
                          transition
                          duration-300
                          group-hover:text-[#186A07]
                        "
                      >
                        {reason.number}
                      </span>

                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                         
                          shadow-sm
                          ring-1
                          ring-slate-100
                          bg-emerald-50
                    text-[#2c8e18]
                        transition-all duration-300 ease-o  ut
                      group-hover:bg-[#118A09]
                      group-hover:text-white
                        group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]
                        group-hover:scale-110 
                        "
                      >
                        <Icon size={21} />
                      </div>

                      {/* Text */}
                      <div className="min-w-0 flex-1">

                        <div className="flex items-start justify-between gap-4">

                          <h3
                            className="
                              text-[16px]
                              font-extrabold
                              text-slate-700
                              sm:text-lg
                            "
                          >
                            {reason.title}
                          </h3>

                          <ArrowRight
                            size={18}
                            className="
                              mt-0.5
                              shrink-0
                              text-slate-300
                              transition
                              duration-300
                              group-hover:translate-x-1
                              group-hover:text-[#10B981]
                            "
                          />

                        </div>

                        <p
                          className="
                            mt-1.5
                            max-w-lg
                            text-sm
                            leading-6
                            text-slate-500
                          "
                        >
                          {reason.text}
                        </p>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =================================================
                HIGHLIGHT
            ================================================== */}

        

       
            
                   <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
                 
                mt-7
               
                p-5
                sm:p-6
              
          rounded-[32px]
          border
          border-[#DDEAD9]
          bg-linear-to-br
          from-[#F4FAF1]
          via-white
          to-[#F2F5FC]
          shadow-[0_25px_80px_rgba(11,37,120,0.10)]
        "
      >
        {/* =====================================================
            PREMIUM linear BORDER ACCENT
        ====================================================== */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            h-[3px]
            bg-linear-to-r
            from-[#186A07]
            via-[#186A07]
            to-[#0B2578]
          "
        />

        {/* =====================================================
            DECORATIVE ORBIT ELEMENTS
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            border
            border-[#0B2578]/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-12
            -top-12
            h-48
            w-48
            rounded-full
            border
            border-[#186A07]/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-100px]
            left-[-80px]
            h-64
            w-64
            rounded-full
            border
            border-[#186A07]/10
          "
        />
         <div className="flex items-start gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-white
                    text-[#10B981]
                    shadow-sm
                  "
                >
                  <ShieldCheck size={20} />
                </div>

                <div>

                  <h3
                    className="
                      text-sm
                      font-extrabold
                      text-slate-800
                      sm:text-base
                    "
                  >
                    {highlightTitle}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-xs
                      leading-6
                      text-slate-500
                      sm:text-sm
                    "
                  >
                    {highlightText}
                  </p>

                </div>
              </div>


        </div>


             
         

            {/* =================================================
                TRUST INDICATORS
            ================================================== */}

            {trustItems?.length > 0 && (
              <div
                className="
                  mt-6
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:flex-wrap
                  sm:gap-x-4
                "
              >
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-emerald-100
                       bg-linear-to-br
          from-[#F4FAF1]
          via-white
          to-[#F2F5FC]
                      px-3
                      py-2.5
                      text-xs
                      font-semibold
                      text-slate-800
                    "
                  >
                    <CheckCircle2
                      size={16}
                      className="text-[#186A07]"
                    />

                    {item}
                  </div>
                ))}
              </div>
            )}

            {/* =================================================
                CTA
            ================================================== */}

            {showCta && (
              <div className="mt-8">

                <p
                  className="
                    text-xl
                    font-extrabold
                    text-slate-700
                    sm:text-2xl
                  "
                >
                  {ctaTitle}
                </p>

                <p
                  className="
                    mt-2
                    max-w-lg
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  {ctaDescription}
                </p>

                <div className="mt-5">

                  <a
                    href={ctaHref}
                    className="
                      inline-flex
                      min-h-[50px]
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-gradient-to-r
                      from-[#186A07]
                      to-[#0B2578]
                      px-6
                      py-3.5
                      text-sm
                      font-extrabold
                      text-white
                      shadow-[0_10px_30px_rgba(24,106,7,0.18)]
                      transition
                      duration-300
                      hover:-translate-y-0.5
                      hover:shadow-[0_15px_40px_rgba(24,106,7,0.25)]
                    "
                  >
                    {ctaText}

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;