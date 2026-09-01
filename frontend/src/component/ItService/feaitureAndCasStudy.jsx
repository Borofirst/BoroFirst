import React, { useState } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaRobot,
  FaChartLine,
  FaCloud,
  FaDatabase,
  FaPlug,
  FaShieldAlt,
  FaLandmark,
  FaShoppingCart,
  FaBuilding,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  // =========================================
  // Case Study Data
  // =========================================

  const caseStudies = [
    {
      category: "FINANCIAL TECHNOLOGY",
      title: "Intelligent Financial Operations Platform",
      description:
        "A technology ecosystem designed to simplify financial workflows, connect business systems, automate repetitive operations and provide teams with better operational visibility.",

      challenge:
        "Disconnected processes, repetitive manual tasks and limited visibility across business operations.",

      solution:
        "A connected digital workflow combining custom software, automation, APIs, data management and intelligent decision support.",

      technologies: [
        "Custom Software",
        "AI Automation",
        "API Integration",
        "Cloud",
        "Data Solutions",
      ],

      outcomes: [
        "Connected business workflows",
        "Reduced manual intervention",
        "Centralized operational visibility",
        "Scalable technology foundation",
      ],

      icon: FaLandmark,
      accent: "green",
    },

    {
      category: "AI & BUSINESS AUTOMATION",
      title: "AI-Powered Customer Workflow",
      description:
        "An intelligent workflow designed to help businesses process customer requests, automate repetitive tasks and route information between connected systems.",

      challenge:
        "Customer requests required multiple manual steps across different teams and systems.",

      solution:
        "AI-assisted processing connected with business logic, CRM systems and automated actions.",

      technologies: [
        "Artificial Intelligence",
        "Workflow Automation",
        "CRM Integration",
        "APIs",
        "Analytics",
      ],

      outcomes: [
        "Faster request processing",
        "Automated repetitive workflows",
        "Improved customer experience",
        "Better operational consistency",
      ],

      icon: FaRobot,
      accent: "blue",
    },

    {
      category: "DATA & ANALYTICS",
      title: "Connected Business Intelligence",
      description:
        "A centralized analytics environment that brings operational data together to help businesses understand performance and make more informed decisions.",

      challenge:
        "Business information was distributed across multiple systems, making analysis and reporting difficult.",

      solution:
        "A connected data architecture combining APIs, databases, cloud infrastructure and analytics dashboards.",

      technologies: [
        "Data Integration",
        "Cloud Infrastructure",
        "Dashboards",
        "APIs",
        "Database Systems",
      ],

      outcomes: [
        "Centralized business information",
        "Improved reporting visibility",
        "Connected data sources",
        "Better decision support",
      ],

      icon: FaChartLine,
      accent: "green",
    },

    {
      category: "DIGITAL TRANSFORMATION",
      title: "Scalable Digital Business Platform",
      description:
        "A modern software foundation designed to bring customer experiences, internal workflows and business systems into one scalable digital ecosystem.",

      challenge:
        "Legacy processes and disconnected tools limited efficiency and made future expansion difficult.",

      solution:
        "A modular digital platform designed around scalable architecture, integrations, automation and secure data management.",

      technologies: [
        "Custom Development",
        "Cloud",
        "API Architecture",
        "Database",
        "Security",
      ],

      outcomes: [
        "Modern digital infrastructure",
        "Scalable architecture",
        "Improved system connectivity",
        "Future-ready technology foundation",
      ],

      icon: FaCloud,
      accent: "blue",
    },
  ];

  // =========================================
  // Helper
  // =========================================

  const active = caseStudies[activeCase];
  const ActiveIcon = active.icon;

  // =========================================
  // Navigation
  // =========================================

  const nextCase = () => {
    setActiveCase((current) => (current + 1) % caseStudies.length);
  };

  const previousCase = () => {
    setActiveCase(
      (current) =>
        (current - 1 + caseStudies.length) % caseStudies.length
    );
  };

  const isGreen = active.accent === "green";

  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================
          Background Decoration
      ========================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-[#186A07]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-20 h-[450px] w-[450px] rounded-full bg-[#0B2578]/5 blur-3xl"
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
              FEATURED SOLUTIONS
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Technology Applied to{" "}
            <span className="bg-gradient-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
              Real Business Problems
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            Explore how BOROFIRST combines software, AI, automation, cloud,
            data and integrations to create practical digital solutions for
            modern businesses.
          </p>
        </div>

        {/* =========================================
            Case Study Navigation
        ========================================= */}

        <div className="mt-12 flex flex-wrap justify-center gap-2.5">

          {caseStudies.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveCase(index)}
              aria-label={`View case study ${index + 1}: ${item.title}`}
              aria-pressed={activeCase === index}
              className={`
                rounded-full
                border
                px-4 py-2.5
                text-xs font-bold
                transition-all duration-300
                ${
                  activeCase === index
                    ? "border-[#186A07] bg-[#186A07] text-white shadow-[0_8px_20px_rgba(24,106,7,0.18)]"
                    : "border-slate-200 bg-white text-slate-500 hover:border-[#186A07]/30 hover:text-[#186A07]"
                }
              `}
            >
              {item.category}
            </button>
          ))}

        </div>

        {/* =========================================
            Main Case Study
        ========================================= */}

        <div className="mt-10">

          <div
            className="
              relative overflow-hidden
              rounded-[32px]
              border border-slate-200
              bg-white
              shadow-[0_25px_80px_rgba(11,37,120,0.09)]
            "
          >

            {/* Top Gradient Line */}

            <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#186A07] to-[#0B2578]" />

            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">

              {/* =========================================
                  LEFT — Case Study Information
              ========================================= */}

              <div className="relative p-7 sm:p-10 lg:p-12">

                {/* Number */}

                <span
                  aria-hidden="true"
                  className="
                    absolute right-6 top-2
                    text-[100px]
                    font-black
                    leading-none
                    text-slate-100
                  "
                >
                  {String(activeCase + 1).padStart(2, "0")}
                </span>

                <div className="relative">

                  {/* Category */}

                  <div className="flex items-center gap-3">

                    <div
                      className={`
                        flex h-12 w-12 items-center justify-center
                        rounded-2xl
                        ${
                          isGreen
                            ? "bg-[#F4FAF1] text-[#186A07]"
                            : "bg-[#F2F5FC] text-[#0B2578]"
                        }
                      `}
                    >
                      <ActiveIcon size={20} />
                    </div>

                    <div>

                      <p
                        className={`
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          ${
                            isGreen
                              ? "text-[#186A07]"
                              : "text-[#0B2578]"
                          }
                        `}
                      >
                        {active.category}
                      </p>

                      <p className="mt-1 text-xs font-medium text-slate-400">
                        Featured Solution
                      </p>

                    </div>
                  </div>

                  {/* Title */}

                  <h3 className="mt-8 max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                    {active.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                    {active.description}
                  </p>

                  {/* Challenge */}

                  <div className="mt-8">

                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      THE CHALLENGE
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {active.challenge}
                    </p>

                  </div>

                  {/* Solution */}

                  <div className="mt-6">

                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      BOROFIRST SOLUTION
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {active.solution}
                    </p>

                  </div>

                  {/* CTA */}

                  <div className="mt-8 flex flex-wrap items-center gap-4">

                    <a
                      href="/contact"
                      className="
                        group inline-flex items-center gap-3
                        rounded-xl
                        bg-gradient-to-r
                        from-[#186A07]
                        to-[#0B2578]
                        px-5 py-3.5
                        text-sm font-bold
                        text-white
                        shadow-[0_10px_30px_rgba(24,106,7,0.16)]
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:shadow-[0_16px_40px_rgba(11,37,120,0.20)]
                      "
                    >
                      Discuss Your Project

                      <FaArrowRight
                        size={11}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>

                    <span className="text-xs font-semibold text-slate-400">
                      Solution-focused technology
                    </span>

                  </div>

                </div>
              </div>

              {/* =========================================
                  RIGHT — Solution Visualization
              ========================================= */}

              <div className="relative min-h-[520px] overflow-hidden bg-gradient-to-br from-[#F4FAF1] via-white to-[#F2F5FC] p-6 sm:p-10">

                {/* Decorative Rings */}

                <div
                  aria-hidden="true"
                  className="
                    absolute -right-24 -top-24
                    h-72 w-72
                    rounded-full
                    border border-[#0B2578]/5
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    absolute -right-10 -top-10
                    h-44 w-44
                    rounded-full
                    border border-[#186A07]/10
                  "
                />

                {/* =========================================
                    Solution Architecture Visual
                ========================================= */}

                <div className="relative flex h-full min-h-[470px] items-center justify-center">

                  {/* Central System */}

                  <div
                    className="
                      relative z-20
                      flex h-36 w-36
                      flex-col items-center justify-center
                      rounded-[28px]
                      border border-white
                      bg-white/90
                      shadow-[0_20px_60px_rgba(11,37,120,0.14)]
                      backdrop-blur-xl
                    "
                  >

                    {/* Glow */}

                    <div
                      aria-hidden="true"
                      className="
                        absolute -inset-3
                        -z-10
                        rounded-[32px]
                        bg-gradient-to-br
                        from-[#186A07]/15
                        to-[#0B2578]/15
                        blur-xl
                      "
                    />

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#186A07] to-[#0B2578] text-white shadow-lg">
                      <ActiveIcon size={21} />
                    </div>

                    <span className="mt-3 text-xs font-bold text-slate-800">
                      BOROFIRST
                    </span>

                    <span className="mt-1 text-[9px] font-medium uppercase tracking-wider text-slate-400">
                      Digital Solution
                    </span>

                  </div>

                  {/* =========================================
                      Connection Lines
                  ========================================= */}

                  <div
                    aria-hidden="true"
                    className="absolute left-[17%] right-[17%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#186A07]/25 to-transparent"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-[17%] bottom-[17%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#0B2578]/25 to-transparent"
                  />

                  {/* Moving Data Dots */}

                  <span className="absolute left-[29%] top-1/2 h-2 w-2 -translate-y-1/2 animate-pulse rounded-full bg-[#186A07]" />

                  <span className="absolute right-[29%] top-1/2 h-2 w-2 -translate-y-1/2 animate-pulse rounded-full bg-[#0B2578]" />

                  <span className="absolute left-1/2 top-[29%] h-2 w-2 -translate-x-1/2 rounded-full bg-[#186A07] animate-pulse" />

                  <span className="absolute bottom-[29%] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#0B2578] animate-pulse" />

                  {/* =========================================
                      Input Node
                  ========================================= */}

                  <div className="group absolute left-2 top-1/2 -translate-y-1/2 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(11,37,120,0.08)] transition-all duration-300 hover:-translate-y-[calc(50%+4px)] hover:shadow-lg sm:left-8">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2F5FC] text-[#0B2578]">
                        <FaDatabase size={15} />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-slate-800">
                          Business Data
                        </p>

                        <p className="mt-0.5 text-[9px] text-slate-400">
                          Connected Sources
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* =========================================
                      AI Node
                  ========================================= */}

                  <div className="group absolute left-1/2 top-2 -translate-x-1/2 rounded-2xl border border-[#186A07]/15 bg-white p-4 shadow-[0_12px_35px_rgba(24,106,7,0.10)] transition-all duration-300 hover:-translate-x-1/2 hover:-translate-y-1 hover:shadow-lg">

                    <div className="flex items-center gap-3">

                      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4FAF1] text-[#186A07]">
                        <FaRobot size={17} />

                        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 animate-pulse rounded-full bg-[#186A07] ring-2 ring-white" />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-slate-800">
                          AI Engine
                        </p>

                        <p className="mt-0.5 text-[9px] text-[#186A07]">
                          Intelligent Processing
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* =========================================
                      API Node
                  ========================================= */}

                  <div className="group absolute right-2 top-1/2 -translate-y-1/2 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(11,37,120,0.08)] transition-all duration-300 hover:-translate-y-[calc(50%+4px)] hover:shadow-lg sm:right-8">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2F5FC] text-[#0B2578]">
                        <FaPlug size={15} />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-slate-800">
                          API Layer
                        </p>

                        <p className="mt-0.5 text-[9px] text-slate-400">
                          Connected Systems
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* =========================================
                      Cloud Node
                  ========================================= */}

                  <div className="group absolute bottom-2 left-1/2 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(11,37,120,0.08)] transition-all duration-300 hover:-translate-x-1/2 hover:-translate-y-1 hover:shadow-lg">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4FAF1] text-[#186A07]">
                        <FaCloud size={16} />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-slate-800">
                          Cloud Infrastructure
                        </p>

                        <p className="mt-0.5 text-[9px] text-slate-400">
                          Scalable & Connected
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* =========================================
                      Security Badge
                  ========================================= */}

                  <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-[#186A07]/10 bg-white/90 px-3 py-2 shadow-sm backdrop-blur-md">

                    <FaShieldAlt
                      size={11}
                      className="text-[#186A07]"
                    />

                    <span className="text-[9px] font-bold text-slate-500">
                      Security First
                    </span>

                  </div>

                </div>

                {/* =========================================
                    Technology Tags
                ========================================= */}

                <div className="absolute bottom-5 left-1/2 flex w-[90%] -translate-x-1/2 flex-wrap justify-center gap-2">

                  {active.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border border-white/80
                        bg-white/80
                        px-3 py-1.5
                        text-[9px]
                        font-semibold
                        text-slate-500
                        shadow-sm
                        backdrop-blur-md
                      "
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </div>
            </div>

            {/* =========================================
                Outcomes Bar
            ========================================= */}

            <div className="border-t border-slate-100 bg-slate-50/50 px-7 py-6 sm:px-10">

              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#186A07]">
                    SOLUTION OUTCOMES
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Designed around practical business improvement
                  </p>

                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">

                  {active.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="flex items-center gap-2"
                    >
                      <FaCheckCircle
                        size={12}
                        className="shrink-0 text-[#186A07]"
                      />

                      <span className="text-[10px] font-semibold text-slate-600">
                        {outcome}
                      </span>
                    </div>
                  ))}

                </div>

              </div>
            </div>

          </div>
        </div>

        {/* =========================================
            Case Navigation Controls
        ========================================= */}

        <div className="mt-7 flex items-center justify-center gap-3">

          <button
            type="button"
            onClick={previousCase}
            aria-label="Previous case study"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-slate-200
              bg-white
              text-slate-500
              shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-[#186A07]/30
              hover:text-[#186A07]
              hover:shadow-md
            "
          >
            <FaChevronLeft size={12} />
          </button>

          {/* Indicators */}

          <div className="flex items-center gap-2">

            {caseStudies.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveCase(index)}
                aria-label={`Select case study ${index + 1}`}
                className={`
                  h-1.5 rounded-full transition-all duration-300
                  ${
                    activeCase === index
                      ? "w-8 bg-gradient-to-r from-[#186A07] to-[#0B2578]"
                      : "w-1.5 bg-slate-200 hover:bg-slate-300"
                  }
                `}
              />
            ))}

          </div>

          <button
            type="button"
            onClick={nextCase}
            aria-label="Next case study"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-slate-200
              bg-white
              text-slate-500
              shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-[#0B2578]/30
              hover:text-[#0B2578]
              hover:shadow-md
            "
          >
            <FaChevronRight size={12} />
          </button>

        </div>

        {/* =========================================
            Bottom Statement
        ========================================= */}

        <div className="mt-14 flex items-center justify-center gap-3">

          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#186A07]/30 sm:w-20" />

          <p className="text-center text-xs font-medium text-slate-400">
            Business Challenge
            <span className="mx-1.5 text-[#186A07]">→</span>
            Technology
            <span className="mx-1.5 text-[#0B2578]">→</span>
            Business Outcome
          </p>

          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#0B2578]/30 sm:w-20" />

        </div>

      </div>
    </section>
  );
};

export default CaseStudies;