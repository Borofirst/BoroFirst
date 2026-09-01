import React from "react";
import {
  FaLandmark,
  FaHeartbeat,
  FaShoppingCart,
  FaGraduationCap,
  FaBuilding,
  FaBriefcase,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const IndustriesWeServe = () => {
  // =========================================
  // Industry Data
  // =========================================

  const industries = [
    {
      title: "Financial Services",
      shortTitle: "Finance",
      description:
        "Build secure, scalable and intelligent digital solutions for lending, financial operations, customer engagement and business automation.",
      icon: FaLandmark,
      features: [
        "Digital Lending",
        "Financial Automation",
        "Customer Platforms",
      ],
      accent: "green",
    },
    {
      title: "Healthcare",
      shortTitle: "Healthcare",
      description:
        "Modernize healthcare operations with connected digital platforms, workflow automation, data solutions and intelligent systems.",
      icon: FaHeartbeat,
      features: [
        "Digital Workflows",
        "Data Management",
        "Process Automation",
      ],
      accent: "blue",
    },
    {
      title: "Retail & E-commerce",
      shortTitle: "Retail",
      description:
        "Create connected retail experiences with custom platforms, automation, analytics, integrations and intelligent customer solutions.",
      icon: FaShoppingCart,
      features: [
        "E-commerce Platforms",
        "CRM Integration",
        "Business Analytics",
      ],
      accent: "green",
    },
    {
      title: "Education",
      shortTitle: "Education",
      description:
        "Enable smarter learning and administration through custom software, digital platforms, automation and data-driven solutions.",
      icon: FaGraduationCap,
      features: [
        "Learning Platforms",
        "Process Automation",
        "Student Management",
      ],
      accent: "blue",
    },
    {
      title: "Real Estate",
      shortTitle: "Real Estate",
      description:
        "Digitize property operations, customer journeys, lead management and business workflows with scalable technology solutions.",
      icon: FaBuilding,
      features: [
        "Lead Management",
        "Property Platforms",
        "CRM Automation",
      ],
      accent: "green",
    },
    {
      title: "Professional Services",
      shortTitle: "Professional",
      description:
        "Improve service delivery and operational efficiency with customized software, integrations, automation and intelligent workflows.",
      icon: FaBriefcase,
      features: [
        "Custom Software",
        "Workflow Automation",
        "System Integration",
      ],
      accent: "blue",
    },
  ];

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================
          Background Decoration
      ========================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 top-20 h-[420px] w-[420px] rounded-full bg-[#186A07]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 bottom-10 h-[450px] w-[450px] rounded-full bg-[#0B2578]/5 blur-3xl"
      />

      {/* Subtle Grid */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(#0B2578 1px, transparent 1px), linear-gradient(90deg, #186A07 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =========================================
            Section Header
        ========================================= */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Badge */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/30" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#186A07]" />
            </span>

            <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
              INDUSTRIES WE SERVE
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Technology Designed for{" "}
            <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
              Real Business
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            BOROFIRST combines industry understanding with modern technology
            to build digital solutions that adapt to the unique needs of
            different businesses.
          </p>
        </div>

        {/* =========================================
            Industry Grid
        ========================================= */}

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isGreen = industry.accent === "green";

            return (
              <article
                key={industry.title}
                className="
                  group relative overflow-hidden
                  rounded-[28px]
                  border border-slate-200/80
                  bg-white
                  p-6
                  shadow-[0_12px_40px_rgba(11,37,120,0.055)]
                  transition-all duration-500 ease-out
                  hover:-translate-y-2
                  hover:border-[#186A07]/20
                  hover:shadow-[0_25px_65px_rgba(11,37,120,0.12)]
                "
              >

                {/* =========================================
                    Top Gradient Line
                ========================================= */}

                <div
                  className={`absolute left-0 right-0 top-0 h-[3px] ${
                    isGreen
                      ? "bg-gradient-to-r from-[#186A07] to-[#0B2578]"
                      : "bg-gradient-to-r from-[#0B2578] to-[#186A07]"
                  }`}
                />

                {/* =========================================
                    Background Number
                ========================================= */}

                <span
                  aria-hidden="true"
                  className="
                    absolute -right-2 -top-7
                    select-none
                    text-[100px]
                    font-black
                    leading-none
                    text-slate-100
                    transition-all duration-500
                    group-hover:text-slate-200
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative">

                  {/* =========================================
                      Icon
                  ========================================= */}

                  <div
                    className={`
                      flex h-14 w-14 items-center justify-center
                      rounded-2xl
                      transition-all duration-500
                      group-hover:scale-105
                      group-hover:rotate-2
                      ${
                        isGreen
                          ? "bg-[#F4FAF1] text-[#186A07] ring-1 ring-[#186A07]/10"
                          : "bg-[#F2F5FC] text-[#0B2578] ring-1 ring-[#0B2578]/10"
                      }
                    `}
                  >
                    <Icon size={22} />
                  </div>

                  {/* =========================================
                      Industry Label
                  ========================================= */}

                  <div className="mt-6 flex items-center gap-2">

                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                        isGreen
                          ? "text-[#186A07]"
                          : "text-[#0B2578]"
                      }`}
                    >
                      INDUSTRY {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-8 bg-slate-200 transition-all duration-300 group-hover:w-12" />

                  </div>

                  {/* =========================================
                      Title
                  ========================================= */}

                  <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900">
                    {industry.title}
                  </h3>

                  {/* =========================================
                      Description
                  ========================================= */}

                  <p className="mt-3 min-h-[84px] text-sm leading-6 text-slate-500">
                    {industry.description}
                  </p>

                  {/* =========================================
                      Capabilities
                  ========================================= */}

                  <div className="mt-5 space-y-2.5">

                    {industry.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2.5 text-xs font-medium text-slate-600"
                      >
                        <FaCheckCircle
                          size={12}
                          className={`shrink-0 ${
                            isGreen
                              ? "text-[#186A07]"
                              : "text-[#0B2578]"
                          }`}
                        />

                        <span>{feature}</span>
                      </div>
                    ))}

                  </div>

                  {/* =========================================
                      Explore Link
                  ========================================= */}

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      BOROFIRST IT
                    </span>

                    <a
                      href="/contact"
                      aria-label={`Explore ${industry.title} solutions`}
                      className={`
                        group/link inline-flex items-center gap-2
                        text-xs font-bold
                        transition-all duration-300
                        ${
                          isGreen
                            ? "text-[#186A07]"
                            : "text-[#0B2578]"
                        }
                      `}
                    >
                      Explore Solutions

                      <span
                        className="
                          flex h-7 w-7
                          items-center justify-center
                          rounded-full
                          bg-slate-50
                          transition-all duration-300
                          group-hover/link:bg-[#F4FAF1]
                        "
                      >
                        <FaArrowRight
                          size={10}
                          className="
                            transition-transform duration-300
                            group-hover/link:translate-x-1
                          "
                        />
                      </span>
                    </a>

                  </div>
                </div>

                {/* =========================================
                    Hover Glow
                ========================================= */}

                <div
                  aria-hidden="true"
                  className={`
                    pointer-events-none
                    absolute -bottom-24 -right-24
                    h-44 w-44 rounded-full
                    blur-3xl
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                    ${
                      isGreen
                        ? "bg-[#186A07]/10"
                        : "bg-[#0B2578]/10"
                    }
                  `}
                />

              </article>
            );
          })}
        </div>

        {/* =========================================
            Bottom Enterprise Statement
        ========================================= */}

        <div className="mt-16">

          <div
            className="
              relative overflow-hidden
              rounded-[30px]
              border border-slate-200
              bg-gradient-to-br
              from-[#F4FAF1]
              via-white
              to-[#F2F5FC]
              px-6 py-8
              shadow-[0_20px_60px_rgba(11,37,120,0.06)]
              sm:px-10
              sm:py-9
            "
          >

            {/* Decorative Circles */}

            <div
              aria-hidden="true"
              className="
                absolute -right-16 -top-20
                h-48 w-48
                rounded-full
                border border-[#0B2578]/5
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute -right-8 -top-12
                h-32 w-32
                rounded-full
                border border-[#186A07]/5
              "
            />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              {/* Statement */}

              <div className="max-w-2xl">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#186A07] shadow-sm ring-1 ring-[#186A07]/10">
                    <FaBriefcase size={16} />
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#186A07]">
                    Built For Your Industry
                  </p>

                </div>

                <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  Technology That Adapts to the Way You Work
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  From financial platforms and healthcare workflows to retail,
                  education, real estate and professional services, we build
                  technology around your business—not the other way around.
                </p>

              </div>

              {/* CTA */}

              <a
                href="/contact"
                className="
                  group inline-flex shrink-0 items-center justify-center gap-3
                  rounded-xl
                  bg-gradient-to-r
                  from-[#186A07]
                  to-[#0B2578]
                  px-6 py-3.5
                  text-sm font-bold
                  text-white
                  shadow-[0_10px_30px_rgba(24,106,7,0.16)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_16px_40px_rgba(11,37,120,0.20)]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#186A07]/30
                  focus:ring-offset-2
                "
              >
                Discuss Your Project

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                  <FaArrowRight
                    size={10}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </a>

            </div>
          </div>
        </div>

        {/* =========================================
            Bottom Statement
        ========================================= */}

        <div className="mt-12 flex items-center justify-center gap-3">

          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#186A07]/30 sm:w-20" />

          <p className="text-center text-xs font-medium text-slate-400">
            Industry Understanding
            <span className="mx-1.5 text-[#186A07]">•</span>
            Technology Expertise
            <span className="mx-1.5 text-[#0B2578]">•</span>
            Business Growth
          </p>

          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#0B2578]/30 sm:w-20" />

        </div>

      </div>
    </section>
  );
};

export default IndustriesWeServe;