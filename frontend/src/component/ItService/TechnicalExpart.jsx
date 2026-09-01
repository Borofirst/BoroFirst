import React from "react";
import {
  FaBrain,
  FaCloud,
  FaCode,
  FaDatabase,
  FaShieldAlt,
  FaPlug,
  FaServer,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const TechnologyExpertise = () => {
  // =========================================
  // Technology Categories
  // =========================================

  const technologies = [
    {
      id: "01",
      title: "Software Development",
      description:
        "Modern, scalable software solutions designed around your business processes and customer needs.",
      icon: FaCode,
      technologies: ["Web Applications", "Enterprise Software", "Custom Platforms"],
      accent: "green",
    },
    {
      id: "02",
      title: "AI & Intelligent Systems",
      description:
        "AI-powered solutions that help businesses automate decisions, workflows, communication, and operations.",
      icon: FaBrain,
      technologies: ["AI Automation", "AI Assistants", "Intelligent Workflows"],
      accent: "blue",
    },
    {
      id: "03",
      title: "Cloud Solutions",
      description:
        "Flexible and scalable cloud infrastructure designed for reliability, performance, and business growth.",
      icon: FaCloud,
      technologies: ["Cloud Infrastructure", "Cloud Applications", "Scalable Systems"],
      accent: "green",
    },
    {
      id: "04",
      title: "API & System Integration",
      description:
        "Connect your business applications, platforms, APIs, CRM systems, payment systems, and third-party services.",
      icon: FaPlug,
      technologies: ["REST APIs", "System Integration", "Third-Party APIs"],
      accent: "blue",
    },
    {
      id: "05",
      title: "Data & Database Solutions",
      description:
        "Structured and secure data systems that help businesses manage information and turn data into useful insights.",
      icon: FaDatabase,
      technologies: ["Database Systems", "Data Processing", "Business Analytics"],
      accent: "green",
    },
    {
      id: "06",
      title: "Security & Infrastructure",
      description:
        "Security-focused technology architecture designed to protect systems, data, applications, and business operations.",
      icon: FaShieldAlt,
      technologies: ["Secure Architecture", "Data Protection", "Infrastructure"],
      accent: "blue",
    },
  ];

  // =========================================
  // Technology Stack
  // =========================================

  const stack = [
    {
      name: "Frontend",
      icon: FaCode,
      items: ["React", "JavaScript", "Tailwind CSS", "Responsive UI"],
    },
    {
      name: "Backend",
      icon: FaServer,
      items: ["Node.js", "REST APIs", "Business Logic", "Scalable Services"],
    },
    {
      name: "AI & Automation",
      icon: FaBrain,
      items: ["AI Solutions", "Workflow Automation", "AI Assistants", "Intelligent Processing"],
    },
    {
      name: "Cloud & Data",
      icon: FaCloud,
      items: ["Cloud Infrastructure", "Databases", "Data Processing", "Analytics"],
    },
  ];

  // =========================================
  // Expertise Highlights
  // =========================================

  const expertiseHighlights = [
    "Scalable Architecture",
    "Secure Development",
    "API-First Integration",
    "AI-Ready Solutions",
    "Cloud-Ready Infrastructure",
    "Data-Driven Technology",
  ];

  return (
    <section
      id="technology-expertise"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================
          Background Decoration
      ========================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#186A07]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#0B2578]/5 blur-3xl"
      />

      {/* Subtle Grid */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#0B2578 1px, transparent 1px), linear-gradient(90deg, #186A07 1px, transparent 1px)",
          backgroundSize: "50px 50px",
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

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/30" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#186A07]" />
            </span>

            <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
              TECHNOLOGY & EXPERTISE
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Technology That{" "}
            <span className="bg-gradient-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
              Moves Business Forward
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            From software development and AI automation to cloud, APIs, data,
            and security, BOROFIRST brings the technology capabilities needed
            to build smarter digital businesses.
          </p>
        </div>

        {/* =========================================
            Expertise Highlights
        ========================================= */}

        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-2.5">
          {expertiseHighlights.map((item) => (
            <div
              key={item}
              className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#186A07]/20 hover:shadow-md"
            >
              <FaCheckCircle
                size={12}
                className="text-[#186A07] transition-transform duration-300 group-hover:scale-110"
              />

              <span className="text-xs font-semibold text-slate-600">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* =========================================
            Technology Capability Cards
        ========================================= */}

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => {
            const Icon = technology.icon;
            const isGreen = technology.accent === "green";

            return (
              <article
                key={technology.id}
                className="
                  group relative overflow-hidden rounded-[26px]
                  border border-slate-200/80
                  bg-white
                  p-6
                  shadow-[0_12px_40px_rgba(11,37,120,0.055)]
                  transition-all duration-500 ease-out
                  hover:-translate-y-2
                  hover:border-[#186A07]/20
                  hover:shadow-[0_22px_55px_rgba(11,37,120,0.11)]
                "
              >
                {/* Top Gradient Line */}

                <div
                  className={`absolute left-0 right-0 top-0 h-[3px] ${
                    isGreen
                      ? "bg-gradient-to-r from-[#186A07] to-[#0B2578]"
                      : "bg-gradient-to-r from-[#0B2578] to-[#186A07]"
                  }`}
                />

                {/* Large Background Number */}

                <span
                  aria-hidden="true"
                  className="absolute -right-1 -top-5 select-none text-[90px] font-black leading-none text-slate-100/80"
                >
                  {technology.id}
                </span>

                <div className="relative">
                  {/* Icon */}

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 ${
                      isGreen
                        ? "bg-[#F4FAF1] text-[#186A07] ring-1 ring-[#186A07]/10"
                        : "bg-[#F2F5FC] text-[#0B2578] ring-1 ring-[#0B2578]/10"
                    }`}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Title */}

                  <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">
                    {technology.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {technology.description}
                  </p>

                  {/* Technology Items */}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {technology.technologies.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1.5 text-[10px] font-semibold text-slate-500 transition-colors duration-300 group-hover:border-[#186A07]/10 group-hover:bg-[#F8FCF7] group-hover:text-[#186A07]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Explore */}

                  <div className="mt-6 flex items-center gap-2 text-xs font-bold text-slate-400 transition-all duration-300 group-hover:gap-3 group-hover:text-[#186A07]">
                    Explore Capability

                    <FaArrowRight
                      size={10}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>

                {/* Bottom Glow */}

                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -bottom-24 -right-24 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    isGreen ? "bg-[#186A07]/10" : "bg-[#0B2578]/10"
                  }`}
                />
              </article>
            );
          })}
        </div>

        {/* =========================================
            Technology Stack Panel
        ========================================= */}

        <div className="mt-16">
          <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-gradient-to-br from-[#F4FAF1] via-white to-[#F2F5FC] p-6 shadow-[0_20px_60px_rgba(11,37,120,0.07)] sm:p-8 lg:p-10">
            {/* Decorative Circles */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#0B2578]/5"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#186A07]/5"
            />

            <div className="relative">
              {/* Panel Header */}

              <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#186A07]">
                    Technology Stack
                  </span>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Built With Modern Technology
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                    We select technologies based on your business requirements,
                    scalability, security, integration needs, and long-term
                    objectives.
                  </p>
                </div>

                {/* Architecture Badge */}

                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#186A07]/15 bg-white/80 px-4 py-2.5 shadow-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#186A07]" />

                  <span className="text-xs font-semibold text-slate-600">
                    Enterprise Ready
                  </span>
                </div>
              </div>

              {/* Stack Grid */}

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stack.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.name}
                      className="group rounded-2xl border border-white bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      {/* Icon + Name */}

                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#F4FAF1] to-[#F2F5FC] text-[#186A07] ring-1 ring-[#186A07]/10 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#186A07] group-hover:to-[#0B2578] group-hover:text-white">
                          <Icon size={16} />
                        </div>

                        <h4 className="text-sm font-bold text-slate-800">
                          {item.name}
                        </h4>
                      </div>

                      {/* Stack Items */}

                      <div className="mt-5 space-y-2">
                        {item.items.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center gap-2 text-xs text-slate-500"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#186A07]/60" />

                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            Bottom Technology Statement
        ========================================= */}

        <div className="mt-14 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#186A07]/30 sm:w-20" />

            <FaChartLine
              size={14}
              className="text-[#186A07]"
            />

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#0B2578]/30 sm:w-20" />
          </div>

          <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-slate-500">
            Technology should not simply support your business — it should
            help your business{" "}
            <span className="font-semibold text-[#186A07]">
              operate smarter
            </span>
            ,{" "}
            <span className="font-semibold text-[#0B2578]">
              scale faster
            </span>
            , and stay ready for what comes next.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologyExpertise;