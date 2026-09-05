import React from "react";
import {
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaRobot,
  FaCogs,
  FaPlug,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ITServicesOverview = () => {
  const services = [
    {
      id: "01",
      title: "Software Development",
      description:
        "Build powerful, scalable and secure software tailored around your unique business requirements.",
      icon: FaCode,
      features: [
        "Custom Business Software",
        "Enterprise Applications",
        "Web Applications",
      ],
      linear: "from-[#186A07] to-[#0B2578]",
      softBg: "bg-[#F4FAF1]",
      iconColor: "text-[#186A07]",
    },

    {
      id: "02",
      title: "Web Development",
      description:
        "Create modern, responsive and high-performance websites and web applications designed for growth.",
      icon: FaGlobe,
      features: ["Business Websites", "Web Applications", "Customer Portals"],
      linear: "from-[#0B2578] to-[#186A07]",
      softBg: "bg-[#F2F5FC]",
      iconColor: "text-[#0B2578]",
    },

    {
      id: "03",
      title: "Mobile App Development",
      description:
        "Deliver intuitive mobile experiences that connect your customers, teams and business services.",
      icon: FaMobileAlt,
      features: [
        "Android Applications",
        "iOS Applications",
        "Cross-Platform Apps",
      ],
      linear: "from-[#186A07] to-[#0B2578]",
      softBg: "bg-[#F4FAF1]",
      iconColor: "text-[#186A07]",
    },

    {
      id: "04",
      title: "AI Solutions",
      description:
        "Bring intelligent technology into your business with practical AI solutions designed around real-world needs.",
      icon: FaRobot,
      features: [
        "AI Assistants",
        "Intelligent Data Processing",
        "AI Integration",
      ],
      linear: "from-[#0B2578] to-[#186A07]",
      softBg: "bg-[#F2F5FC]",
      iconColor: "text-[#0B2578]",
      featured: true,
    },

    {
      id: "05",
      title: "AI & Business Automation",
      description:
        "Automate repetitive processes, workflows and business operations to save time and improve productivity.",
      icon: FaCogs,
      features: [
        "Workflow Automation",
        "Process Automation",
        "Intelligent Workflows",
      ],
      linear: "from-[#186A07] to-[#0B2578]",
      softBg: "bg-[#F4FAF1]",
      iconColor: "text-[#186A07]",
    },

    {
      id: "06",
      title: "API & System Integration",
      description:
        "Connect your business platforms, applications and services through reliable and scalable integrations.",
      icon: FaPlug,
      features: [
        "REST API Integration",
        "Third-Party Integration",
        "System Connectivity",
      ],
      linear: "from-[#0B2578] to-[#186A07]",
      softBg: "bg-[#F2F5FC]",
      iconColor: "text-[#0B2578]",
    },
  ];

  return (
    <section id="It-Service" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Green Glow */}
        <div
          className="
            absolute
            -left-40
            top-20
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#186A07]/5
            blur-[100px]
          "
        />

        {/* Blue Glow */}
        <div
          className="
            absolute
            -right-40
            bottom-10
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#0B2578]/5
            blur-[100px]
          "
        />

        {/* Very subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            [background-image:linear-linear(#0B2578_1px,transparent_1px),linear-linear(90deg,#0B2578_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Small Label */}

          <div
            className="
              mb-5
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
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#186A07]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#186A07]" />
            What We Do
          </div>

          {/* Heading */}

          <h2
            className="
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-slate-900
              sm:text-4xl
              lg:text-5xl
            "
          >
            Technology That Solves
            <span
              className="
                ml-2
                bg-linear-to-r
                from-[#186A07]
                to-[#0B2578]
                bg-clip-text
                text-transparent
              "
            >
              Real Business Problems
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            From custom software and modern web applications to AI-powered
            automation, BOROFIRST helps businesses turn technology into
            meaningful business outcomes.
          </p>
        </div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-slate-200/80
                  bg-white
                  p-6
                  shadow-[0_8px_30px_rgba(15,23,42,0.05)]
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-2
                  hover:border-[#186A07]/20
                  hover:shadow-[0_20px_45px_rgba(11,37,120,0.10)]
                "
              >
                {/* =================================================
                    TOP linear LINE
                ================================================== */}

                <div
                  className={`
                    absolute
                    left-0
                    top-0
                    h-[3px]
                    w-0
                    bg-linear-to-r
                    ${service.linear}
                    transition-all
                    duration-500
                    group-hover:w-full
                  `}
                />

                {/* =================================================
                    BACKGROUND GLOW
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-36
                    w-36
                    rounded-full
                    bg-[#186A07]/5
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:scale-150
                    group-hover:bg-[#0B2578]/5
                  "
                />

                {/* =================================================
                    CARD TOP
                ================================================== */}

                <div className="relative flex items-start justify-between">
                  {/* Icon */}

                  <div
                    className={`
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      ${service.softBg}
                      ${service.iconColor}
                      ring-1
                      ring-black/5
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:bg-linear-to-br
                      group-hover:from-[#186A07]
                      group-hover:to-[#0B2578]
                      group-hover:text-white
                      group-hover:shadow-[0_10px_20px_rgba(11,37,120,0.15)]
                    `}
                  >
                    <Icon size={21} />
                  </div>

                  {/* Number */}

                  <span
                    className="
                      text-xs
                      font-bold
                      tracking-widest
                      text-slate-300
                      transition-colors
                      duration-300
                      group-hover:text-[#186A07]/40
                    "
                  >
                    {service.id}
                  </span>
                </div>

                {/* =================================================
                    TITLE
                ================================================== */}

                <h3
                  className="
                    relative
                    mt-6
                    text-xl
                    font-bold
                    tracking-tight
                    text-slate-900
                    transition-colors
                    duration-300
                    group-hover:text-[#186A07]
                  "
                >
                  {service.title}
                </h3>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <p
                  className="
                    relative
                    mt-3
                    text-sm
                    leading-6
                    text-slate-600
                  "
                >
                  {service.description}
                </p>

                {/* =================================================
                    FEATURES
                ================================================== */}

                <div className="relative mt-6 space-y-2.5">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="
                        flex
                        items-center
                        gap-2.5
                        text-xs
                        font-medium
                        text-slate-600
                      "
                    >
                      <FaCheckCircle
                        size={13}
                        className="shrink-0 text-[#186A07]"
                      />

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* =================================================
                    CARD LINK
                ================================================== */}

                <Link
                  to="/contact"
                  className="
                    group/link
                    relative
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-bold
                    text-[#0B2578]
                    transition-all
                    duration-300
                  "
                >
                  Explore Service
                  <FaArrowRight
                    size={12}
                    className="
                      transition-transform
                      duration-300
                      group-hover/link:translate-x-1
                    "
                  />
                </Link>

                {/* =================================================
                    BOTTOM DECORATION
                ================================================== */}

                <div
                  className="
                    absolute
                    -bottom-16
                    -right-16
                    h-32
                    w-32
                    rounded-full
                    border
                    border-[#186A07]/5
                    transition-transform
                    duration-700
                    group-hover:scale-150
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-20
                    -right-20
                    h-40
                    w-40
                    rounded-full
                    border
                    border-[#0B2578]/5
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />
              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div
          className="
            relative
            mt-12
            overflow-hidden
            rounded-3xl
            border
            border-[#186A07]/10
            bg-linear-to-br
            from-[#F4FAF1]
            via-white
            to-[#F2F5FC]
            px-6
            py-7
            shadow-[0_10px_35px_rgba(11,37,120,0.06)]
            sm:px-8
            lg:flex
            lg:items-center
            lg:justify-between
            lg:px-10
          "
        >
          {/* Decorative linear */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-[#0B2578]/5
              blur-3xl
            "
          />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#186A07]">
              Have a technology challenge?
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
              Let's build the right solution for your business.
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
              Tell us what you want to build, automate or improve and our team
              can help you explore the right technology approach.
            </p>
          </div>

          {/* CTA */}

          <Link
            to="/contact"
            className="
              group
              relative
              mt-5
              inline-flex
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-linear-to-r
              from-[#186A07]
              to-[#0B2578]
              px-6
              py-3.5
              text-sm
              font-bold
              text-white
              shadow-[0_10px_25px_rgba(24,106,7,0.16)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_15px_35px_rgba(11,37,120,0.20)]
              lg:mt-0
            "
          >
            Start a Conversation
            <FaArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ITServicesOverview;
