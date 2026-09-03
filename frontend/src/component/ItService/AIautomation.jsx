import React from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaUser,
  FaRobot,
  FaCogs,
  FaUsers,
  FaPlug,
  FaDatabase,
  FaCloud,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const AIBusinessAutomation = () => {
  // =========================================
  // Automation Features
  // =========================================

  const automationFeatures = [
    "Automated Workflows",
    "AI Assistants",
    "Document Processing",
    "Customer Support Automation",
    "Data-Driven Decision Making",
    "CRM & API Automation",
  ];

  // =========================================
  // Integration Nodes
  // =========================================

  const integrations = [
    {
      name: "CRM",
      description: "Customer Data",
      icon: FaUsers,
    },
    {
      name: "API",
      description: "Connected Systems",
      icon: FaPlug,
    },
    {
      name: "Database",
      description: "Secure Data",
      icon: FaDatabase,
    },
  ];

  return (
    <section
      id="ai-automation"
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
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#0B2578]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-linear(#0B2578 1px, transparent 1px), linear-linear(90deg, #0B2578 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-linear(to bottom, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-linear(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
          {/* =========================================
              LEFT — Content
          ========================================= */}

          <div className="max-w-xl">
            {/* Section Badge */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#186A07]" />
              </span>

              <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
                AI & BUSINESS AUTOMATION
              </span>
            </div>

            {/* Heading */}

            <h2 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.45rem]">
              Turn Manual Processes Into{" "}
              <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
                Intelligent Automation
              </span>
            </h2>

            {/* Description */}

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Automate repetitive operations, connect business systems, and use
              AI to make faster, smarter decisions.
            </p>

            {/* Value Proposition */}

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
              From intelligent assistants and automated workflows to document
              processing and API-driven operations, BOROFIRST helps businesses
              reduce manual work and build smarter digital processes.
            </p>

            {/* =========================================
                Feature List
            ========================================= */}

            <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {automationFeatures.map((feature) => (
                <div
                  key={feature}
                  className="group flex cursor-default items-center gap-3 rounded-lg py-2 transition-all duration-300 hover:translate-x-1"
                >
                  <FaCheckCircle
                    className="shrink-0 text-[#186A07] transition-transform duration-300 group-hover:scale-110"
                    size={15}
                  />

                  <span className="text-sm font-medium text-slate-700 transition-colors duration-300 group-hover:text-[#186A07]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* =========================================
                CTA
            ========================================= */}

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/ai-solutions"
                className="group inline-flex items-center gap-3 rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(24,106,7,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(11,37,120,0.22)]"
              >
                Explore AI Solutions
                <FaArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#186A07]/30 hover:text-[#186A07] hover:shadow-md"
              >
                Talk to Our Experts
                <FaArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* =========================================
              RIGHT — Automation Visualization
          ========================================= */}

          <div className="relative mx-auto w-full max-w-2xl">
            {/* Outer Glow */}

            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[36px] bg-linear-to-br from-[#186A07]/10 via-transparent to-[#0B2578]/10 blur-2xl"
            />

            {/* Main Automation Container */}

            <div className="relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-white/90 p-4 shadow-[0_25px_80px_rgba(11,37,120,0.12)] backdrop-blur-xl sm:p-6">
              {/* Top Bar */}

              <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-[#186A07] to-[#0B2578] text-white shadow-md">
                    <FaRobot size={16} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Automation Engine
                    </p>

                    <div className="mt-0.5 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#186A07]" />
                      <span className="text-[10px] font-medium text-slate-400">
                        Intelligent workflow active
                      </span>
                    </div>
                  </div>
                </div>

                <div className="hidden items-center gap-2 rounded-full border border-[#186A07]/10 bg-[#F4FAF1] px-3 py-1.5 sm:flex">
                  <FaShieldAlt className="text-[#186A07]" size={10} />
                  <span className="text-[10px] font-semibold text-[#186A07]">
                    Secure
                  </span>
                </div>
              </div>

              {/* =========================================
                  Workflow Area
              ========================================= */}

              <div className="relative min-h-[570px] overflow-hidden rounded-2xl bg-linear-to-br from-[#F4FAF1] via-white to-[#F2F5FC] p-4 sm:p-6">
                {/* Decorative Grid */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.035]"
                  style={{
                    backgroundImage:
                      "linear-linear(#186A07 1px, transparent 1px), linear-linear(90deg, #0B2578 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Decorative Orbs */}

                <div
                  aria-hidden="true"
                  className="absolute -right-10 top-10 h-36 w-36 rounded-full bg-[#0B2578]/5 blur-3xl"
                />

                <div
                  aria-hidden="true"
                  className="absolute -left-10 bottom-10 h-32 w-32 rounded-full bg-[#186A07]/5 blur-3xl"
                />

                {/* =========================================
                    Customer Request
                ========================================= */}

                <div className="relative z-20 mx-auto w-full max-w-[240px]">
                  <WorkflowCard
                    icon={FaUser}
                    title="Customer Request"
                    description="Incoming Request"
                    variant="blue"
                  />
                </div>

                {/* Vertical Connection */}

                <ConnectionLine direction="vertical" />

                {/* =========================================
                    AI Engine
                ========================================= */}

                <div className="relative z-20 mx-auto my-8 w-full max-w-[280px]">
                  <div className="group relative">
                    {/* AI Glow */}

                    <div className="absolute -inset-3 rounded-[25px] bg-linear-to-r from-[#186A07]/10 to-[#0B2578]/10 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Rotating Ring */}

                    <div className="absolute -inset-1 rounded-[23px] bg-linear-to-r from-[#186A07] via-[#0B2578] to-[#186A07] opacity-20 blur-[1px] transition-opacity duration-500 group-hover:opacity-50" />

                    <div className="relative overflow-hidden rounded-[22px] border border-[#186A07]/20 bg-white p-5 shadow-[0_18px_45px_rgba(24,106,7,0.12)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_55px_rgba(11,37,120,0.16)]">
                      {/* AI Decorative Ring */}

                      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-[#186A07]/10" />
                      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full border border-[#0B2578]/10" />

                      <div className="relative flex items-center gap-4">
                        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#186A07] to-[#0B2578] text-white shadow-lg">
                          <FaRobot size={21} />

                          <span className="absolute -right-1 -top-1 h-3 w-3 animate-pulse rounded-full border-2 border-white bg-[#186A07]" />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-slate-800">
                            AI Processing
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            AI Engine
                          </p>

                          <div className="mt-2 flex items-center gap-1">
                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#186A07]" />
                            <span
                              className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#186A07]"
                              style={{ animationDelay: "120ms" }}
                            />
                            <span
                              className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#0B2578]"
                              style={{ animationDelay: "240ms" }}
                            />
                            <span className="ml-1 text-[10px] font-medium text-slate-400">
                              Processing...
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* AI Progress */}

                      <div className="relative mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full w-[76%] rounded-full bg-linear-to-r from-[#186A07] to-[#0B2578]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vertical Connection */}

                <ConnectionLine direction="vertical" />

                {/* =========================================
                    Business Logic
                ========================================= */}

                <div className="relative z-20 mx-auto my-8 w-full max-w-[240px]">
                  <WorkflowCard
                    icon={FaCogs}
                    title="Business Logic"
                    description="Rules & Decisions"
                    variant="green"
                  />
                </div>

                {/* Branching Connector */}

                <div className="relative z-10 mx-auto h-12 max-w-[500px]">
                  {/* Vertical stem */}

                  <div className="absolute left-1/2 top-0 h-7 w-px -translate-x-1/2 bg-linear-to-b from-[#186A07] to-[#0B2578]" />

                  {/* Horizontal branch */}

                  <div className="absolute left-[16%] right-[16%] top-7 h-px bg-linear-to-r from-[#186A07]/30 via-[#0B2578]/50 to-[#186A07]/30" />

                  {/* Branch drops */}

                  <div className="absolute left-[16%] top-7 h-5 w-px bg-[#186A07]/50" />
                  <div className="absolute left-1/2 top-7 h-5 w-px -translate-x-1/2 bg-[#0B2578]/50" />
                  <div className="absolute right-[16%] top-7 h-5 w-px bg-[#186A07]/50" />

                  {/* Animated Nodes */}

                  <span className="absolute left-[16%] top-[25px] h-1.5 w-1.5 -translate-x-1/2 animate-pulse rounded-full bg-[#186A07]" />
                  <span className="absolute left-1/2 top-[25px] h-1.5 w-1.5 -translate-x-1/2 animate-pulse rounded-full bg-[#0B2578]" />
                  <span className="absolute right-[16%] top-[25px] h-1.5 w-1.5 translate-x-1/2 animate-pulse rounded-full bg-[#186A07]" />
                </div>

                {/* =========================================
                    Integration Nodes
                ========================================= */}

                <div className="relative z-20 grid grid-cols-3 gap-2 sm:gap-4">
                  {integrations.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.name}
                        className="group relative rounded-2xl border border-white/80 bg-white/90 p-3 text-center shadow-[0_10px_30px_rgba(11,37,120,0.07)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#186A07]/20 hover:shadow-[0_15px_35px_rgba(24,106,7,0.11)] sm:p-4"
                      >
                        <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-[#F4FAF1] to-[#F2F5FC] text-[#186A07] transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-[#186A07] group-hover:to-[#0B2578] group-hover:text-white">
                          <Icon size={15} />
                        </div>

                        <p className="mt-2 text-[11px] font-bold text-slate-700 sm:text-xs">
                          {item.name}
                        </p>

                        <p className="mt-0.5 text-[9px] text-slate-400 sm:text-[10px]">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* =========================================
                    Integration to Result Connector
                ========================================= */}

                <div className="relative z-10 mx-auto h-12 max-w-[500px]">
                  <div className="absolute left-1/2 top-0 h-7 w-px -translate-x-1/2 bg-linear-to-b from-[#0B2578] to-[#186A07]" />

                  <div className="absolute left-[16%] right-[16%] top-7 h-px bg-linear-to-r from-[#186A07]/20 via-[#0B2578]/40 to-[#186A07]/20" />

                  <div className="absolute left-1/2 top-7 h-5 w-px -translate-x-1/2 bg-[#186A07]/50" />

                  <span className="absolute left-1/2 top-[25px] h-1.5 w-1.5 -translate-x-1/2 animate-pulse rounded-full bg-[#186A07]" />
                </div>

                {/* =========================================
                    Automated Result
                ========================================= */}

                <div className="relative z-20 mx-auto w-full max-w-[250px]">
                  <div className="group rounded-2xl border border-[#186A07]/15 bg-white p-4 shadow-[0_14px_35px_rgba(24,106,7,0.09)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(24,106,7,0.14)]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F4FAF1] text-[#186A07] transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-[#186A07] group-hover:to-[#0B2578] group-hover:text-white">
                        <FaCheckCircle size={17} />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-slate-800 sm:text-sm">
                          Automated Result
                        </p>

                        <div className="mt-1 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#186A07]" />
                          <span className="text-[10px] font-medium text-[#186A07]">
                            Action Completed
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =========================================
                    Floating Analytics Card
                ========================================= */}

                <div className="absolute bottom-5 left-4 z-30 hidden w-[145px] rounded-2xl border border-white/80 bg-white/90 p-3 shadow-[0_15px_40px_rgba(11,37,120,0.10)] backdrop-blur-md sm:block">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                      Automation
                    </span>

                    <FaChartLine size={10} className="text-[#186A07]" />
                  </div>

                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-xl font-bold text-slate-800">
                      98%
                    </span>

                    <span className="mb-1 text-[8px] font-medium text-slate-400">
                      Demo UI
                    </span>
                  </div>

                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[78%] rounded-full bg-linear-to-r from-[#186A07] to-[#0B2578]" />
                  </div>
                </div>

                {/* =========================================
                    Floating API Status
                ========================================= */}

                <div className="absolute right-4 top-5 z-30 hidden w-[145px] rounded-2xl border border-white/80 bg-white/90 p-3 shadow-[0_15px_40px_rgba(24,106,7,0.09)] backdrop-blur-md sm:block">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F4FAF1] text-[#186A07]">
                        <FaPlug size={11} />
                      </div>

                      <span className="text-[10px] font-bold text-slate-700">
                        API
                      </span>
                    </div>

                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#186A07]" />
                  </div>

                  <p className="mt-2 text-[9px] font-semibold text-[#186A07]">
                    Connected
                  </p>

                  <div className="mt-2 space-y-1">
                    {["CRM", "Payment", "Database"].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-1.5 text-[8px] text-slate-400"
                      >
                        <span className="h-1 w-1 rounded-full bg-[#0B2578]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Status */}

              <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-3">
                <div className="flex items-center gap-2">
                  <FaCloud className="text-[#0B2578]" size={13} />

                  <span className="text-[10px] font-medium text-slate-500 sm:text-xs">
                    Cloud-connected automation
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#186A07]" />
                  <span className="text-[9px] font-semibold text-[#186A07]">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            Bottom Credibility Statement
        ========================================= */}

        <div className="mt-16 flex items-center justify-center gap-3 border-t border-slate-100 pt-7 text-center">
          <span className="h-px w-8 bg-linear-to-r from-transparent to-[#186A07]/40 sm:w-16" />

          <p className="text-xs font-medium text-slate-500 sm:text-sm">
            Designed to connect{" "}
            <span className="font-semibold text-[#186A07]">people</span>,{" "}
            <span className="font-semibold text-[#0B2578]">processes</span>,{" "}
            <span className="font-semibold text-[#186A07]">systems</span> and{" "}
            <span className="font-semibold text-[#0B2578]">intelligence.</span>
          </p>

          <span className="h-px w-8 bg-linear-to-l from-transparent to-[#0B2578]/40 sm:w-16" />
        </div>
      </div>
    </section>
  );
};

// =========================================
// Reusable Workflow Card
// =========================================

const WorkflowCard = ({
  icon: Icon,
  title,
  description,
  variant = "green",
}) => {
  const isBlue = variant === "blue";

  return (
    <div className="group rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_12px_32px_rgba(11,37,120,0.07)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#186A07]/20 hover:shadow-[0_18px_40px_rgba(24,106,7,0.10)]">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
            isBlue
              ? "bg-[#F2F5FC] text-[#0B2578] group-hover:bg-linear-to-br group-hover:from-[#186A07] group-hover:to-[#0B2578] group-hover:text-white"
              : "bg-[#F4FAF1] text-[#186A07] group-hover:bg-linear-to-br group-hover:from-[#186A07] group-hover:to-[#0B2578] group-hover:text-white"
          }`}
        >
          <Icon size={16} />
        </div>

        <div>
          <p className="text-xs font-bold text-slate-800 sm:text-sm">{title}</p>

          <p className="mt-1 text-[10px] text-slate-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

// =========================================
// Vertical Connection
// =========================================

const ConnectionLine = () => {
  return (
    <div className="relative mx-auto h-6 w-px bg-linear-to-b from-[#186A07]/30 to-[#0B2578]/40">
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#186A07]" />
    </div>
  );
};

export default AIBusinessAutomation;
