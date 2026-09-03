import React from "react";
import {
  FaBriefcase,
  FaShieldAlt,
  FaExpandArrowsAlt,
  FaEye,
  FaHeadset,
  FaLandmark,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const WhyChooseBoroFirstIT = () => {
  // =========================================
  // Why Choose BOROFIRST — Differentiators
  // =========================================

  const differentiators = [
    {
      number: "01",
      title: "Business + Technology Expertise",
      description:
        "We connect technology decisions with real business objectives, helping you build solutions that solve operational challenges and create measurable value.",
      icon: FaBriefcase,
      accent: "green",
    },
    {
      number: "02",
      title: "Security First",
      description:
        "Security is considered throughout the technology lifecycle, from architecture and development to data handling, integrations, deployment, and ongoing maintenance.",
      icon: FaShieldAlt,
      accent: "blue",
    },
    {
      number: "03",
      title: "Scalable Architecture",
      description:
        "We design flexible technology foundations that can evolve with your business, customers, data, integrations, and future requirements.",
      icon: FaExpandArrowsAlt,
      accent: "green",
    },
    {
      number: "04",
      title: "Transparent Process",
      description:
        "Clear communication, defined milestones, understandable technology decisions, and visibility throughout the development journey.",
      icon: FaEye,
      accent: "blue",
    },
    {
      number: "05",
      title: "Long-Term Support",
      description:
        "Our relationship does not end at deployment. We help maintain, optimize, improve, and evolve your technology as your business changes.",
      icon: FaHeadset,
      accent: "green",
    },
    {
      number: "06",
      title: "Financial Industry Understanding",
      description:
        "Our financial-services foundation gives us a strong understanding of secure, customer-focused and process-driven business environments.",
      icon: FaLandmark,
      accent: "blue",
    },
  ];

  // =========================================
  // Supporting Points
  // =========================================

  const supportingPoints = [
    "Business-first technology strategy",
    "Modern and scalable solutions",
    "Security-conscious development",
    "Transparent collaboration",
  ];

  return (
    <section
      id="why-borofirst-it"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
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
        className="pointer-events-none absolute -right-48 bottom-10 h-[450px] w-[450px] rounded-full bg-[#0B2578]/5 blur-3xl"
      />

      {/* Subtle Technology Grid */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-linear(#0B2578 1px, transparent 1px), linear-linear(90deg, #186A07 1px, transparent 1px)",
          backgroundSize: "52px 52px",
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
              WHY BOROFIRST
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Technology Built Around{" "}
            <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
              Your Business
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            We combine business understanding, modern technology, security, and
            long-term collaboration to create digital solutions designed for
            real-world business needs.
          </p>
        </div>

        {/* =========================================
            Supporting Points
        ========================================= */}

        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-2.5">
          {supportingPoints.map((point) => (
            <div
              key={point}
              className="
                group flex items-center gap-2
                rounded-full
                border border-slate-200
                bg-white
                px-4 py-2.5
                shadow-sm
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-[#186A07]/20
                hover:shadow-md
              "
            >
              <FaCheckCircle
                size={12}
                className="text-[#186A07] transition-transform duration-300 group-hover:scale-110"
              />

              <span className="text-xs font-semibold text-slate-600">
                {point}
              </span>
            </div>
          ))}
        </div>

        {/* =========================================
            Differentiator Grid
        ========================================= */}

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item) => {
            const Icon = item.icon;
            const isGreen = item.accent === "green";

            return (
              <article
                key={item.number}
                className="
                  group relative overflow-hidden
                  rounded-[26px]
                  border border-slate-200/80
                  bg-white
                  p-6
                  shadow-[0_12px_40px_rgba(11,37,120,0.055)]
                  transition-all duration-500 ease-out
                  hover:-translate-y-2
                  hover:border-[#186A07]/20
                  hover:shadow-[0_24px_60px_rgba(11,37,120,0.11)]
                "
              >
                {/* Top Accent */}

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
                  className="
                    absolute -right-2 -top-6
                    select-none
                    text-[95px]
                    font-black
                    leading-none
                    text-slate-100
                    transition-all duration-500
                    group-hover:text-slate-200
                  "
                >
                  {item.number}
                </span>

                <div className="relative">
                  {/* Icon */}

                  <div
                    className={`
                      flex h-14 w-14 items-center justify-center
                      rounded-2xl
                      shadow-sm
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
                    <Icon size={21} />
                  </div>

                  {/* Number Label */}

                  <div className="mt-6 flex items-center gap-2">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                        isGreen ? "text-[#186A07]" : "text-[#0B2578]"
                      }`}
                    >
                      Advantage {item.number}
                    </span>

                    <span className="h-px w-8 bg-slate-200 transition-all duration-300 group-hover:w-12" />
                  </div>

                  {/* Title */}

                  <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-slate-900">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  {/* Bottom Indicator */}

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      BOROFIRST IT
                    </span>

                    <div
                      className={`
                        flex h-7 w-7 items-center justify-center
                        rounded-full
                        transition-all duration-300
                        group-hover:text-white
                        ${
                          isGreen
                            ? "bg-[#F4FAF1] text-[#186A07] group-hover:bg-[#186A07]"
                            : "bg-[#F2F5FC] text-[#0B2578] group-hover:bg-[#0B2578]"
                        }
                      `}
                    >
                      <FaArrowRight
                        size={10}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Glow */}

                <div
                  aria-hidden="true"
                  className={`
                    pointer-events-none
                    absolute -bottom-24 -right-24
                    h-40 w-40 rounded-full
                    blur-3xl
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                    ${isGreen ? "bg-[#186A07]/10" : "bg-[#0B2578]/10"}
                  `}
                />
              </article>
            );
          })}
        </div>

        {/* =========================================
            Premium Trust Panel
        ========================================= */}

        <div className="mt-16">
          <div
            className="
              relative overflow-hidden
              rounded-[30px]
              border border-slate-200
              bg-linear-to-br
              from-[#F4FAF1]
              via-white
              to-[#F2F5FC]
              p-7
              shadow-[0_20px_60px_rgba(11,37,120,0.07)]
              sm:p-9
              lg:p-10
            "
          >
            {/* Decorative Circle */}

            <div
              aria-hidden="true"
              className="
                absolute -right-20 -top-20
                h-56 w-56
                rounded-full
                border border-[#0B2578]/5
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute -right-10 -top-10
                h-36 w-36
                rounded-full
                border border-[#186A07]/5
              "
            />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              {/* Left Content */}

              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#186A07] shadow-sm ring-1 ring-[#186A07]/10">
                    <FaShieldAlt size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#186A07]">
                      Built With Purpose
                    </p>

                    <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                      Technology That Works For Your Business
                    </h3>
                  </div>
                </div>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
                  Whether you need a custom software platform, AI automation,
                  system integration, or a scalable digital infrastructure,
                  BOROFIRST focuses on building technology that is practical,
                  secure, and ready for the future.
                </p>
              </div>

              {/* Right CTA */}

              <div className="lg:pr-2">
                <a
                  href="/contact"
                  className="
                    group inline-flex items-center gap-3
                    rounded-xl
                    bg-linear-to-r
                    from-[#186A07]
                    to-[#0B2578]
                    px-5 py-3.5
                    text-sm font-bold
                    text-white
                    shadow-[0_10px_30px_rgba(24,106,7,0.18)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_16px_40px_rgba(11,37,120,0.22)]
                  "
                >
                  Build With Us
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
        </div>

        {/* =========================================
            Bottom Statement
        ========================================= */}

        <div className="mt-14 flex items-center justify-center gap-3 text-center">
          <span className="h-px w-10 bg-linear-to-r from-transparent to-[#186A07]/30 sm:w-20" />

          <p className="text-xs font-medium text-slate-400">
            Business Understanding
            <span className="mx-1.5 text-[#186A07]">•</span>
            Technology
            <span className="mx-1.5 text-[#0B2578]">•</span>
            Trust
          </p>

          <span className="h-px w-10 bg-linear-to-l from-transparent to-[#0B2578]/30 sm:w-20" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBoroFirstIT;
