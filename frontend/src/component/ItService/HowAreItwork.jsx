import React from "react";
import {
  FaComments,
  FaSearch,
  FaCode,
  FaRocket,
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaCogs,
  FaShieldAlt,
} from "react-icons/fa";

const HowOurITSolutionsWork = () => {
  // =========================================
  // Process Steps
  // =========================================

  const processSteps = [
    {
      number: "01",
      title: "Discover",
      shortTitle: "Understand",
      description:
        "We understand your business, challenges, goals, workflows, and technology requirements before defining the right solution.",
      icon: FaComments,
      accent: "green",
      highlights: [
        "Business Requirements",
        "Process Analysis",
        "Technology Assessment",
      ],
    },
    {
      number: "02",
      title: "Design",
      shortTitle: "Plan",
      description:
        "Our team transforms business requirements into a scalable technology strategy, architecture, user experience, and implementation roadmap.",
      icon: FaSearch,
      accent: "blue",
      highlights: [
        "Solution Architecture",
        "UX & UI Planning",
        "Technology Roadmap",
      ],
    },
    {
      number: "03",
      title: "Build",
      shortTitle: "Develop",
      description:
        "We develop secure, scalable software and automation solutions using modern technologies, APIs, cloud infrastructure, and AI.",
      icon: FaCode,
      accent: "green",
      highlights: [
        "Software Development",
        "AI & Automation",
        "API Integration",
      ],
    },
    {
      number: "04",
      title: "Launch & Grow",
      shortTitle: "Scale",
      description:
        "We deploy, monitor, optimize, and continuously improve your technology so your solution can evolve as your business grows.",
      icon: FaRocket,
      accent: "blue",
      highlights: [
        "Deployment & Support",
        "Performance Optimization",
        "Continuous Improvement",
      ],
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================
          Background Decoration
      ========================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#186A07]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#0B2578]/5 blur-3xl"
      />

      {/* Subtle Grid */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-linear(#0B2578 1px, transparent 1px), linear-linear(90deg, #186A07 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-linear(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-linear(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =========================================
            Section Header
        ========================================= */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/30" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#186A07]" />
            </span>

            <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
              HOW IT WORKS
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            From Business Challenge to{" "}
            <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
              Digital Solution
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            A structured, transparent and technology-driven approach that turns
            your ideas and business challenges into scalable digital solutions.
          </p>
        </div>

        {/* =========================================
            Process Timeline
        ========================================= */}

        <div className="relative mt-16 lg:mt-20">
          {/* Desktop Connecting Line */}

          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-[54px] hidden h-px bg-linear-to-r from-[#186A07]/20 via-[#0B2578]/35 to-[#186A07]/20 lg:block"
          />

          {/* Animated line */}

          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-[54px] hidden h-px bg-linear-to-r from-[#186A07] via-[#0B2578] to-[#186A07] opacity-20 lg:block"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isGreen = step.accent === "green";

              return (
                <article key={step.number} className="group relative">
                  {/* =========================================
                      Step Number / Icon
                  ========================================= */}

                  <div className="relative z-20 mx-auto mb-7 flex w-fit items-center justify-center">
                    {/* Outer Glow */}

                    <div
                      className={`absolute h-[84px] w-[84px] rounded-full blur-xl transition-all duration-500 group-hover:scale-125 ${
                        isGreen ? "bg-[#186A07]/10" : "bg-[#0B2578]/10"
                      }`}
                    />

                    {/* Outer Ring */}

                    <div
                      className={`relative flex h-[76px] w-[76px] items-center justify-center rounded-full border bg-white shadow-[0_12px_35px_rgba(11,37,120,0.09)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_18px_45px_rgba(11,37,120,0.14)] ${
                        isGreen ? "border-[#186A07]/15" : "border-[#0B2578]/15"
                      }`}
                    >
                      {/* linear Inner Circle */}

                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all duration-500 group-hover:scale-105 ${
                          isGreen
                            ? "bg-linear-to-br from-[#186A07] to-[#2c8e18]"
                            : "bg-linear-to-br from-[#0B2578] to-[#2545a0]"
                        }`}
                      >
                        <Icon size={20} />
                      </div>

                      {/* Number */}

                      <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-[9px] font-bold text-white shadow-md">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* =========================================
                      Process Card
                  ========================================= */}

                  <div
                    className="
                      relative h-full overflow-hidden rounded-[24px]
                      border border-slate-200/80
                      bg-white/90
                      p-6
                      shadow-[0_12px_40px_rgba(11,37,120,0.06)]
                      backdrop-blur-sm
                      transition-all duration-500 ease-out
                      hover:-translate-y-2
                      hover:border-[#186A07]/20
                      hover:shadow-[0_22px_55px_rgba(11,37,120,0.11)]
                    "
                  >
                    {/* Top linear Accent */}

                    <div
                      className={`absolute left-0 right-0 top-0 h-[3px] ${
                        isGreen
                          ? "bg-linear-to-r from-[#186A07] to-[#0B2578]"
                          : "bg-linear-to-r from-[#0B2578] to-[#186A07]"
                      }`}
                    />

                    {/* Background Number */}

                    <span
                      aria-hidden="true"
                      className="absolute -right-2 -top-7 select-none text-[100px] font-black leading-none text-slate-100/80"
                    >
                      {step.number}
                    </span>

                    <div className="relative">
                      {/* Step Label */}

                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                            isGreen ? "text-[#186A07]" : "text-[#0B2578]"
                          }`}
                        >
                          Step {step.number}
                        </span>

                        <span className="rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-[9px] font-semibold text-slate-400">
                          {step.shortTitle}
                        </span>
                      </div>

                      {/* Title */}

                      <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900">
                        {step.title}
                      </h3>

                      {/* Description */}

                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {step.description}
                      </p>

                      {/* Highlights */}

                      <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                        {step.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="group/item flex items-center gap-2.5"
                          >
                            <FaCheckCircle
                              size={12}
                              className={`shrink-0 transition-transform duration-300 group-hover/item:scale-110 ${
                                isGreen ? "text-[#186A07]" : "text-[#0B2578]"
                              }`}
                            />

                            <span className="text-xs font-medium text-slate-600">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hover Glow */}

                    <div
                      aria-hidden="true"
                      className={`pointer-events-none absolute -bottom-20 -right-20 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
                        isGreen ? "bg-[#186A07]/10" : "bg-[#0B2578]/10"
                      }`}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =========================================
            Technology Philosophy Strip
        ========================================= */}

        <div className="mt-14 lg:mt-16">
          <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-linear-to-r from-[#F4FAF1] via-white to-[#F2F5FC] p-6 shadow-[0_15px_45px_rgba(11,37,120,0.06)] sm:p-7">
            {/* Decorative linear */}

            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-full w-1/3 bg-linear-to-l from-[#0B2578]/5 to-transparent"
            />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Left */}

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#186A07] shadow-sm ring-1 ring-[#186A07]/10">
                  <FaLightbulb size={17} />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Technology Built Around Your Business
                  </p>

                  <p className="mt-1 max-w-xl text-xs leading-5 text-slate-500 sm:text-sm">
                    We combine business understanding, modern engineering,
                    automation and security to create technology that delivers
                    long-term value.
                  </p>
                </div>
              </div>

              {/* Right Benefits */}

              <div className="flex flex-wrap gap-2.5">
                <MiniBenefit icon={FaCogs} text="Scalable" />

                <MiniBenefit icon={FaShieldAlt} text="Secure" />

                <MiniBenefit icon={FaRocket} text="Future Ready" />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            Bottom CTA
        ========================================= */}

        <div className="mt-14 text-center">
          <p className="text-sm font-medium text-slate-500">
            Have a business challenge that technology can solve?
          </p>

          <a
            href="/contact"
            className="group mt-4 inline-flex items-center gap-3 rounded-xl border border-[#186A07]/15 bg-white px-5 py-3 text-sm font-semibold text-[#186A07] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#186A07]/30 hover:shadow-[0_12px_30px_rgba(24,106,7,0.10)]"
          >
            Start a Conversation
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F4FAF1] transition-all duration-300 group-hover:bg-[#186A07] group-hover:text-white">
              <FaArrowRight
                size={10}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </div>

        {/* =========================================
            Bottom Statement
        ========================================= */}

        <div className="mt-14 flex items-center justify-center gap-3 text-center">
          <span className="h-px w-10 bg-linear-to-r from-transparent to-[#186A07]/30 sm:w-20" />

          <p className="text-xs font-medium text-slate-400">
            Discover <span className="text-[#186A07]">. Design</span> · Build{" "}
            <span className="text-[#0B2578]">. Automate</span> · Grow
          </p>

          <span className="h-px w-10 bg-linear-to-l from-transparent to-[#0B2578]/30 sm:w-20" />
        </div>
      </div>
    </section>
  );
};

// =========================================
// Mini Benefit Component
// =========================================

const MiniBenefit = ({ icon: Icon, text }) => {
  return (
    <div className="group flex items-center gap-2 rounded-full border border-white bg-white/80 px-3 py-2 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <Icon
        size={11}
        className="text-[#186A07] transition-transform duration-300 group-hover:scale-110"
      />

      <span className="text-[10px] font-semibold text-slate-600 sm:text-xs">
        {text}
      </span>
    </div>
  );
};

export default HowOurITSolutionsWork;
