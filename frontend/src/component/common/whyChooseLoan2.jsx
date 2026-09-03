import React from "react";

const WhyChooseLoanBlue = ({ content }) => {
  console.log(content);

  const CenterIcon = content.centerIcon;

  return (
    <section
      id={`why-loan`}
      className="
        relative
        overflow-hidden
        bg-[#F8FAFC]
        
        py-16
        sm:py-20
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
            -left-40
            top-20
            h-80
            w-80
            rounded-full
            bg-[#10B981]/5
            blur-3xl
            animate-[softGlow_8s_ease-in-out_infinite]
          "
        />

        {/* Navy glow */}
        <div
          className="
            absolute
            -right-40
            bottom-10
            h-80
            w-80
            rounded-full
            bg-[#0B2578]/5
            blur-3xl
            animate-[softGlowReverse_10s_ease-in-out_infinite]
          "
        />

        {/* Fine grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            bg-[linear-linear(#0B2578_1px,transparent_1px),linear-linear(90deg,#0B2578_1px,transparent_1px)]
            bg-size-[60px_60px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            mx-auto
            max-w-3xl
            text-center
            animate-[fadeUp_700ms_ease-out_both]
          "
        >
          {/* Eyebrow */}

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#186A07]" />
              </span>

              <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
                {content.eyebrow}
              </span>
            </div>

            {/* Heading */}

            <h2 className=" text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.45rem]">
              {content.title}{" "}
              <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent ">
                {content.highlight}
              </span>
            </h2>

            {/* Description */}
            <p
              className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-[#64748B]
              sm:text-base
            "
            >
              {content.description}
            </p>
          </div>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div
          className="
            mt-14
            grid
            items-center
            gap-10
            lg:grid-cols-[1fr_0.8fr_1fr]
            lg:gap-8
          "
        >
          {/* =================================================
              LEFT BENEFITS
          ================================================= */}

          <div className="space-y-5">
            {content.advantages.slice(0, 3).map((item, index) => {
              const Icon = item.icon;

              return <BenefitItem key={item.title} item={item} index={index} />;
            })}
          </div>

          {/* =================================================
              CENTER VISUAL
          ================================================= */}

          <div
            className="
              relative
              mx-auto
              flex
              h-72.5
              w-72.5
              items-center
              justify-center
              animate-[centerFloat_6s_ease-in-out_infinite]
              sm:h-80
              sm:w-[320px]
            "
          >
            {/* Outer circle */}
            <div
              className="
                absolute
                inset-0
                rounded-full
                border
                border-[#E2E8F0]
                animate-[spinSlow_35s_linear_infinite]
              "
            />

            {/* Dashed circle */}
            <div
              className="
                absolute
                inset-7
                rounded-full
                border
                border-dashed
                border-[#10B981]/20
                animate-[spinReverse_28s_linear_infinite]
              "
            />

            {/* Inner circle */}
            <div
              className="
                absolute
                inset-14
                rounded-full
                bg-[#F0FDF9]
                shadow-inner
              "
            />

            {/* Orbit dots */}
            <div
              className="
                absolute
                left-1
                top-1/2
                h-3
                w-3
                -translate-y-1/2
                rounded-full
                bg-[#186A07]
                shadow-[0_0_0_6px_rgba(16,185,129,0.08)]
              "
            />

            <div
              className="
                absolute
                right-1
                top-1/2
                h-3
                w-3
                -translate-y-1/2
                rounded-full
                bg-[#186A07]
                shadow-[0_0_0_6px_rgba(16,185,129,0.08)]
              "
            />

            <div
              className="
                absolute
                left-1/2
                top-1
                h-3
                w-3
                -translate-x-1/2
                rounded-full
                bg-[#186A07]
                shadow-[0_0_0_6px_rgba(16,185,129,0.08)]
              "
            />

            <div
              className="
                absolute
                bottom-1
                left-1/2
                h-3
                w-3
                -translate-x-1/2
                rounded-full
                bg-[#186A07]
                shadow-[0_0_0_6px_rgba(16,185,129,0.08)]
              "
            />

            {/* Center */}
            <div
              className="
                relative
                z-10
                flex
                h-36
                w-36
                flex-col
                items-center
                justify-center
                rounded-4xl
                bg-linear-to-r
                from-[#186A07]
                to-[#0B2578]
                text-center
                shadow-[0_20px_50px_rgba(11,37,120,0.18)]
                transition-transform
                duration-500
                hover:scale-105
              "
            >
              <CenterIcon size={30} className="text-[#2c8e18]" />

              <p className="mt-3 text-sm font-bold uppercase tracking-wider text-white">
                {content.centerLabel}
              </p>

              <p className="text-lg font-extrabold text-[#2c8e18]">
                {content.centerHighlight}
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT BENEFITS
          ================================================= */}

          <div className="space-y-5">
            {content.advantages.slice(3).map((item, index) => {
              return (
                <BenefitItem key={item.title} item={item} index={index + 3} />
              );
            })}
          </div>
        </div>

        {/* =====================================================
            DISCLAIMER
        ====================================================== */}

        <p
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-center
            text-[11px]
            leading-5
            text-[#94A3B8]
            animate-[fadeUp_800ms_500ms_ease-out_both]
          "
        >
          Loan approval, amount, interest rate, tenure, and other terms are
          subject to the respective lender's eligibility criteria, policies, and
          terms.
        </p>
      </div>
    </section>
  );
};

/* =========================================================
   REUSABLE BENEFIT ITEM
========================================================= */

const BenefitItem = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-[#E2E8F0]
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        animate-[fadeUp_600ms_ease-out_both]
        hover:-translate-y-1
        hover:border-[#10B981]/30
        hover:shadow-[0_15px_35px_rgba(15,23,42,0.08)]
      "
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex gap-4">
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
            bg-[#10B981]/10
            text-[#186A07]
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:bg-[#186A07]
            group-hover:text-white
            group-hover:shadow-[0_8px_20px_rgba(16,185,129,0.2)]
          "
        >
          <Icon size={20} />
        </div>

        {/* Content */}
        <div>
          <div className="flex items-start gap-2">
            <span className="mt-0.5 text-[10px] font-bold text-[#CBD5E1]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="text-base font-bold leading-5 text-[#0F172A]">
              {item.title}
            </h3>
          </div>

          <p className="mt-2 text-sm leading-6 text-[#64748B]">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseLoanBlue;
