import React from "react";
import {
  FaArrowRight,
  FaComments,
  FaCheckCircle,
  FaCode,
  FaRobot,
  FaCloud,
  FaShieldAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const FinalITCTA = () => {
  const capabilities = [
    {
      icon: FaCode,
      title: "Custom Software",
    },
    {
      icon: FaRobot,
      title: "AI & Automation",
    },
    {
      icon: FaCloud,
      title: "Cloud Solutions",
    },
    {
      icon: FaShieldAlt,
      title: "Secure Technology",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-28
        px-4
        sm:px-6
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft Green Glow */}
        <div
          className="
            absolute
            -left-32
            top-10
            h-72
            w-72
            rounded-full
            bg-[#186A07]/10
            blur-3xl
          "
        />

        {/* Soft Blue Glow */}
        <div
          className="
            absolute
            -right-32
            bottom-0
            h-80
            w-80
            rounded-full
            bg-[#0B2578]/10
            blur-3xl
          "
        />

        {/* Subtle Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(#0B2578_1px,transparent_1px),linear-gradient(90deg,#0B2578_1px,transparent_1px)]
            [background-size:42px_42px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CTA CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[32px]
          border
          border-[#DDEAD9]
          bg-gradient-to-br
          from-[#F4FAF1]
          via-white
          to-[#F2F5FC]
          shadow-[0_25px_80px_rgba(11,37,120,0.10)]
        "
      >
        {/* =====================================================
            PREMIUM GRADIENT BORDER ACCENT
        ====================================================== */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            h-[3px]
            bg-gradient-to-r
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

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div
          className="
            relative
            grid
            grid-cols-1
            items-center
            gap-12
            px-6
            py-12
            sm:px-10
            sm:py-14
            lg:grid-cols-12
            lg:gap-16
            lg:px-16
            lg:py-16
          "
        >
          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}

          <div className="lg:col-span-7">
            {/* Badge */}

            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#186A07]/20
                bg-white/80
                px-4
                py-2
                shadow-sm
                backdrop-blur-sm
              "
            >
              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-[#186A07]
                  shadow-[0_0_10px_rgba(24,106,7,0.45)]
                "
              />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#186A07]
                "
              >
                Start Your Digital Journey
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                max-w-3xl
                text-4xl
                font-bold
                leading-[1.08]
                tracking-tight
                text-slate-900
                sm:text-5xl
                lg:text-6xl
              "
            >
              Let’s Build Something{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#186A07]
                  to-[#0B2578]
                  bg-clip-text
                  text-transparent
                "
              >
                Smarter.
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-slate-600
                sm:text-lg
                sm:leading-8
              "
            >
              Have an idea, a process that needs automation, or a business
              challenge that technology can solve? Let’s turn it into a
              secure, scalable and intelligent digital solution.
            </p>

            {/* Supporting Message */}

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-slate-500
              "
            >
              From custom software and AI automation to cloud integration and
              enterprise technology, BOROFIRST helps businesses move from
              manual processes to smarter digital operations.
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* Primary CTA */}

              <a
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-gradient-to-r
                  from-[#186A07]
                  to-[#0B2578]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_30px_rgba(11,37,120,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_16px_40px_rgba(11,37,120,0.24)]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#186A07]
                  focus:ring-offset-2
                "
              >
                Talk to Our Experts

                <FaArrowRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>

              {/* Secondary CTA */}

              <a
                href="/it-services"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-[#0B2578]/20
                  bg-white/80
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-[#0B2578]
                  shadow-sm
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#186A07]/30
                  hover:bg-[#F4FAF1]
                  hover:shadow-md
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#186A07]
                  focus:ring-offset-2
                "
              >
                <FaComments
                  size={15}
                  className="
                    text-[#186A07]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                Discuss Your Project
              </a>
            </div>

            {/* =================================================
                TRUST MESSAGE
            ================================================== */}

            <div className="mt-7 flex items-center gap-2">
              <FaCheckCircle
                size={15}
                className="shrink-0 text-[#186A07]"
              />

              <span className="text-xs font-medium text-slate-500 sm:text-sm">
                Let's explore the right technology approach for your business.
              </span>
            </div>
          </div>

          {/* ===================================================
              RIGHT — TECHNOLOGY CAPABILITY PANEL
          ==================================================== */}

          <div className="relative lg:col-span-5">
            {/* Main Technology Card */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/80
                bg-white/75
                p-5
                shadow-[0_20px_60px_rgba(11,37,120,0.12)]
                backdrop-blur-xl
                sm:p-6
              "
            >
              {/* Card Header */}

              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[#186A07]
                    "
                  >
                    Technology Capabilities
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    Built for What's Next
                  </h3>
                </div>

                {/* Status */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#186A07]/15
                    bg-[#F4FAF1]
                    px-3
                    py-1.5
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      animate-pulse
                      rounded-full
                      bg-[#186A07]
                    "
                  />

                  <span className="text-[10px] font-semibold text-[#186A07]">
                    Ready
                  </span>
                </div>
              </div>

              {/* Capability Grid */}

              <div className="mt-6 grid grid-cols-2 gap-3">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                        group
                        rounded-2xl
                        border
                        border-slate-200/80
                        bg-gradient-to-br
                        from-white
                        to-slate-50
                        p-4
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#186A07]/20
                        hover:shadow-[0_10px_25px_rgba(24,106,7,0.08)]
                      "
                    >
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#F4FAF1]
                          text-[#186A07]
                          transition-all
                          duration-300
                          group-hover:bg-gradient-to-br
                          group-hover:from-[#186A07]
                          group-hover:to-[#0B2578]
                          group-hover:text-white
                          group-hover:shadow-md
                        "
                      >
                        <Icon
                          size={15}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      <p className="mt-3 text-xs font-semibold text-slate-700">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* =================================================
                  CONSULTATION PANEL
              ================================================== */}

              <div
                className="
                  mt-4
                  rounded-2xl
                  border
                  border-[#0B2578]/10
                  bg-gradient-to-r
                  from-[#F4FAF1]
                  to-[#F2F5FC]
                  p-4
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-br
                      from-[#186A07]
                      to-[#0B2578]
                      text-white
                      shadow-md
                    "
                  >
                    <FaPhoneAlt size={14} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      Have a technology challenge?
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-500">
                      Let’s discuss your requirements.
                    </p>
                  </div>

                  <FaArrowRight
                    size={13}
                    className="
                      ml-auto
                      text-[#0B2578]
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  DECORATIVE DATA NODES
              ================================================== */}

              <span
                className="
                  pointer-events-none
                  absolute
                  right-5
                  top-5
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#186A07]/40
                "
              />

              <span
                className="
                  pointer-events-none
                  absolute
                  bottom-8
                  right-8
                  h-2
                  w-2
                  rounded-full
                  bg-[#0B2578]/30
                "
              />
            </div>

            {/* Floating Green Accent */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-4
                -left-4
                h-20
                w-20
                rounded-2xl
                bg-[#186A07]/10
                blur-xl
              "
            />

            {/* Floating Blue Accent */}

            <div
              className="
                pointer-events-none
                absolute
                -right-5
                top-12
                h-24
                w-24
                rounded-full
                bg-[#0B2578]/10
                blur-2xl
              "
            />
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div
          className="
            relative
            border-t
            border-slate-200/70
            px-6
            py-5
            sm:px-10
            lg:px-16
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-3
              text-center
              sm:flex-row
              sm:text-left
            "
          >
            <p className="text-xs font-medium text-slate-500 sm:text-sm">
              From idea to implementation — build technology that works for
              your business.
            </p>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#186A07]" />
              <span className="text-xs font-semibold text-[#186A07]">
                BOROFIRST IT Solutions
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FINAL TAGLINE
      ====================================================== */}

      <div className="relative mx-auto mt-8 max-w-3xl text-center">
        <p className="text-sm font-medium text-slate-500">
          Connect your{" "}
          <span className="font-semibold text-[#186A07]">people</span>,{" "}
          <span className="font-semibold text-[#0B2578]">processes</span>,{" "}
          <span className="font-semibold text-[#186A07]">systems</span> and{" "}
          <span className="font-semibold text-[#0B2578]">intelligence</span>.
        </p>
      </div>
    </section>
  );
};

export default FinalITCTA;