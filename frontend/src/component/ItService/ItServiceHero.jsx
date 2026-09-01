import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaRobot,
  FaCode,
  FaCloud,
  FaDatabase,
  FaCogs,
  FaPlug,
  FaHeadset,
  FaShieldAlt,
  FaLayerGroup,
  FaBriefcase,
  FaBrain,
} from "react-icons/fa";


const ITServicesHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft Green Glow */}
        <div
          className="
            absolute
            -left-32
            top-20
            h-96
            w-96
            rounded-full
            bg-[#186A07]/5
            blur-3xl
          "
        />

        {/* Soft Blue Glow */}
        <div
          className="
            absolute
            right-0
            top-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#0B2578]/5
            blur-3xl
          "
        />

        {/* Subtle Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(#0B2578_1px,transparent_1px),linear-gradient(90deg,#0B2578_1px,transparent_1px)]
            bg-size-[60px_60px]
          "
        />
      </div>

      {/* =====================================================
          MAIN HERO
      ====================================================== */}

      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          pb-16
          pt-28
          sm:px-8
          sm:pb-20
          sm:pt-32
          lg:px-8
          lg:pb-24
          lg:pt-36
        "
      >
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative z-20 lg:col-span-5">
            {/* Small Badge */}

            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#186A07]/15
                bg-[#F4FAF1]
                px-4
                py-2
                text-xs
                font-semibold
                text-[#186A07]
                shadow-[0_5px_20px_rgba(24,106,7,0.06)]
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[#186A07]
                    opacity-50
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-[#186A07]
                  "
                />
              </span>

              IT Services & Digital Solutions
            </div>

            {/* Heading */}

            <h1
              className="
                max-w-2xl
                text-4xl
                font-bold
                leading-[1.08]
                tracking-tight
                text-slate-900
                sm:text-5xl
                lg:text-6xl
                xl:text-[64px]
              "
            >
              Build Smarter.
              <br />

              <span
                className="
                  bg-linear-to-r
                  from-[#186A07]
                  via-[#16830B]
                  to-[#0B2578]
                  bg-clip-text
                  text-transparent
                "
              >
                Automate Faster.
              </span>

              <br />

              Grow Better.
            </h1>

            {/* Description */}

            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-7
                text-slate-600
                sm:text-lg
                sm:leading-8
              "
            >
              From custom software development to AI-powered automation,
              BOROFIRST helps businesses build modern digital solutions that
              improve efficiency, simplify operations, and accelerate growth.
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {/* Primary CTA */}

              <Link
                to="/it-services"
                className="
                  group
                  inline-flex
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
                  font-semibold
                  text-white
                  shadow-[0_10px_25px_rgba(24,106,7,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_35px_rgba(11,37,120,0.22)]
                "
              >
                Explore IT Services

                <FaArrowRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* Secondary CTA */}

              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-[#186A07]/25
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-[#186A07]
                  shadow-[0_5px_20px_rgba(24,106,7,0.06)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#0B2578]/40
                  hover:text-[#0B2578]
                  hover:shadow-[0_12px_30px_rgba(11,37,120,0.10)]
                "
              >
                Talk to Our Experts

                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#0B2578]
                    transition-transform
                    duration-300
                    group-hover:scale-125
                  "
                />
              </Link>
            </div>

            {/* =================================================
                MINI TRUST POINTS
            ================================================== */}

            <div
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-3
                text-xs
                font-medium
                text-slate-500
              "
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#186A07]" />
                Custom Software
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0B2578]" />
                AI Automation
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#186A07]" />
                Cloud Solutions
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT TECHNOLOGY VISUAL
          ================================================== */}

          <div className="relative lg:col-span-7">
            {/* Main Glow */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[420px]
                w-[420px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-gradient-to-br
                from-[#186A07]/10
                to-[#0B2578]/10
                blur-3xl
              "
            />

            {/* Hero Image Container */}

            <div
              className="
                relative
                mx-auto
                w-full
                max-w-[700px]
                overflow-hidden
                rounded-[32px]
                border
                border-slate-200/70
                bg-white/60
                p-2
                shadow-[0_25px_70px_rgba(11,37,120,0.10)]
                backdrop-blur-sm
              "
            >
              <div className="relative overflow-hidden rounded-[26px]">
                <img
                  src="/itservise.png"
                  alt="BOROFIRST AI automation and software technology solutions"
                  className="
                    h-auto
                    w-full
                    object-cover
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-tr
                    from-[#186A07]/5
                    via-transparent
                    to-[#0B2578]/10
                  "
                />
              </div>
            </div>

            {/* =================================================
                FLOATING AI CARD
            ================================================== */}

            <div
              className="
                absolute
                -left-2
                top-8
                hidden
                animate-[float_5s_ease-in-out_infinite]
                rounded-2xl
                border
                border-white
                bg-white/90
                p-3
                shadow-[0_15px_35px_rgba(11,37,120,0.12)]
                backdrop-blur-xl
                sm:block
                lg:-left-6
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-[#186A07]
                    to-[#0B2578]
                    text-white
                  "
                >
                  <FaRobot size={17} />
                </div>

                <div>
                  <p className="text-[10px] font-medium text-slate-400">
                    INTELLIGENT SYSTEM
                  </p>

                  <p className="text-xs font-bold text-slate-800">
                    AI Automation
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING SOFTWARE CARD
            ================================================== */}

            <div
              className="
                absolute
                -right-2
                bottom-12
                hidden
                animate-[float_6s_ease-in-out_infinite_reverse]
                rounded-2xl
                border
                border-white
                bg-white/90
                p-3
                shadow-[0_15px_35px_rgba(24,106,7,0.12)]
                backdrop-blur-xl
                sm:block
                lg:-right-5
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#F4FAF1]
                    text-[#186A07]
                  "
                >
                  <FaCode size={16} />
                </div>

                <div>
                  <p className="text-[10px] font-medium text-slate-400">
                    DIGITAL SOLUTIONS
                  </p>

                  <p className="text-xs font-bold text-slate-800">
                    Smart Software
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                TECHNOLOGY NODES
            ================================================== */}

            <div
              className="
                absolute
                bottom-0
                left-1/2
                hidden
                -translate-x-1/2
                translate-y-1/2
                items-center
                gap-2
                rounded-2xl
                border
                border-slate-200
                bg-white/90
                p-2
                shadow-[0_15px_35px_rgba(11,37,120,0.10)]
                backdrop-blur-xl
                md:flex
              "
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F4FAF1] text-[#186A07]">
                <FaCogs size={15} />
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F2F5FC] text-[#0B2578]">
                <FaCloud size={15} />
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F4FAF1] text-[#186A07]">
                <FaDatabase size={15} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM TECHNOLOGY STRIP
      ====================================================== */}

      <div className="border-t border-slate-100 bg-slate-50/50">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-wrap
            items-center
            justify-center
            gap-x-8
            gap-y-3
            px-5
            py-5
            text-xs
            font-medium
            text-slate-500
            sm:gap-x-12
          "
        >
          <span>Software Development</span>

          <span className="h-1 w-1 rounded-full bg-[#186A07]" />

          <span>AI Solutions</span>

          <span className="h-1 w-1 rounded-full bg-[#0B2578]" />

          <span>Business Automation</span>

          <span className="h-1 w-1 rounded-full bg-[#186A07]" />

          <span>API Integration</span>

          <span className="h-1 w-1 rounded-full bg-[#0B2578]" />

          <span>Cloud Technology</span>
        </div>
      </div>

<TechnologyTrustStrip/>

    </section>
  );
};



const TechnologyTrustStrip = () => {
  const technologies = [
    {
      title: "Custom Software",
      icon: FaCode,
    },
    {
      title: "AI Automation",
      icon: FaRobot,
    },
    {
      title: "Cloud Solutions",
      icon: FaCloud,
    },
    {
      title: "API Integration",
      icon: FaPlug,
    },
    {
      title: "Data Solutions",
      icon: FaDatabase,
    },
    {
      title: "Technical Support",
      icon: FaHeadset,
    },
  ];

  const trustPoints = [
    {
      title: "Secure Development",
      icon: FaShieldAlt,
    },
    {
      title: "Scalable Architecture",
      icon: FaLayerGroup,
    },
    {
      title: "Business-Focused Solutions",
      icon: FaBriefcase,
    },
    {
      title: "AI-Ready Technology",
      icon: FaBrain,
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-slate-200/70 bg-white">
      {/* =====================================================
          SUBTLE BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/4
            top-0
            h-32
            w-72
            rounded-full
            bg-[#186A07]/5
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-1/4
            bottom-0
            h-32
            w-72
            rounded-full
            bg-[#0B2578]/5
            blur-3xl
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-8">

        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#186A07]" />

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-slate-500
              sm:text-xs
            "
          >
            Technology & Expertise
          </p>

          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#0B2578]" />
        </div>

        {/* =====================================================
            TECHNOLOGY SERVICES
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            lg:grid-cols-6
          "
        >
          {technologies.map((technology, index) => {
            const Icon = technology.icon;

            return (
              <div
                key={technology.title}
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-3
                  py-3
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#186A07]/25
                  hover:shadow-[0_10px_25px_rgba(24,106,7,0.08)]
                "
              >
                {/* Gradient Accent */}

                <span
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-gradient-to-r
                    from-[#186A07]
                    to-[#0B2578]
                    transition-all
                    duration-300
                    group-hover:w-3/4
                  "
                />

                {/* Icon */}

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#F4FAF1]
                    text-[#186A07]
                    transition-all
                    duration-300
                    group-hover:bg-gradient-to-br
                    group-hover:from-[#186A07]
                    group-hover:to-[#0B2578]
                    group-hover:text-white
                  "
                >
                  <Icon size={14} />
                </div>

                {/* Text */}

                <span
                  className="
                    text-[11px]
                    font-semibold
                    leading-4
                    text-slate-700
                    transition-colors
                    duration-300
                    group-hover:text-[#186A07]
                    sm:text-xs
                  "
                >
                  {technology.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="my-7 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200" />

          <div
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-gradient-to-br
              from-[#186A07]
              to-[#0B2578]
            "
          />

          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* =====================================================
            TRUST POINTS
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-2
            gap-x-6
            gap-y-4
            sm:grid-cols-4
          "
        >
          {trustPoints.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.title}
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-2.5
                  text-center
                  sm:justify-start
                  sm:text-left
                "
              >
                {/* Check / Icon */}

                <div
                  className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#186A07]/15
                    bg-[#F4FAF1]
                    text-[#186A07]
                    transition-all
                    duration-300
                    group-hover:border-transparent
                    group-hover:bg-gradient-to-br
                    group-hover:from-[#186A07]
                    group-hover:to-[#0B2578]
                    group-hover:text-white
                  "
                >
                  <Icon size={12} />
                </div>

                <span
                  className="
                    text-[11px]
                    font-semibold
                    text-slate-600
                    transition-colors
                    duration-300
                    group-hover:text-[#0B2578]
                    sm:text-xs
                  "
                >
                  {point.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ITServicesHero;