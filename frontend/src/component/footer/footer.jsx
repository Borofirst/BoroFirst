import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaCheckCircle,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {

  MdOpenInNew,
} from "react-icons/md";

const Footer = () => {


  const companyLinks = [
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Why Choose Us",
      path: "/about",
    },
        {
      name: "Loan Against Property",
      path: "/loan-againt-property",
    },
    {
      name: "Our Partners",
      path: "/partner",
    },
    {
      name: "Careers",
      path: "/career",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];
  


  const loanProducts = [
    {
      name: "Personal Loan",
      path: "/personal-loan",
    },
    {
      name: "Home Loan",
      path: "home-loan",
    },
    {
      name: "Business Loan",
      path: "/business-loan",
    },
    {
      name: "Vehicle Loan",
      path: "#",
    },
    {
      name: "Education Loan",
      path: "/education-loan",
    },
    {
      name: "Gold Loan",
      path: "/gold-loan",
    },
  ];

  const financialServices = [
    {
      name: "Health Insurance",
   
    },
    {
      name: "Home Insurance",
      
    },
    {
      name: "SIP Investment",
     
    },
    {
      name: "Credit Card",
  
    },

    {
      name: "Financial Consultation",
   
    },
  ];

  const resourceLinks = [
    {
      name: "Loan EMI Calculator",
      path: "/emi-calculator",
    },
    {
      name: "Loan Eligibility",
      path: "/loan-eligibility",
    },
    {
      name: "Interest Rates",
      path: "/interest-rates",
    },

    {
      name: "Financial Guides",
      path: "/financial-guides",
    },
    {
      name: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      name: "Terms & Conditions",
      path: "/terms-conditions",
    },
  ];

  // =========================================
  // Social Links
  // =========================================

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url:"https://www.facebook.com/profile.php?id=61593126121262",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/borofirst_official/",
    },

    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/borofirst-finance-8a4b11428/",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "#",
    },
    {
      name: "X",
      icon: FaXTwitter,
      url: "#",
    },
  ];

  // =========================================
  // Trust Points
  // =========================================

  const trustPoints = [
    "Secure & Confidential",
    "Transparent Process",
    "Customer First",
    "Trusted Financial Network",
  ];

  return (
 <footer className="relative overflow-hidden  bg-[#F8FAFC] ">
<div className="bg-linear-to-br
from-[#D8EBD1]
via-[#F1F5F0]
to-[#D9E2F5] text-black w-[98%] m-auto mb-4 rounded-2xl  shadow-[inset_0_4px_12px_rgba(24,106,7,0.14),inset_0_-4px_12px_rgba(11,37,120,0.12),inset_2px_0_8px_rgba(24,106,7,0.05),inset_-2px_0_8px_rgba(11,37,120,0.05)]">

 

      {/* =========================================
          Main Footer Content
      ========================================= */}

      <section className="relative px-2 pb-8 pt-8 sm:px-6 lg:px-6">
        <div className="mx-auto max-w-7xl">
          {/* =========================================
    Main Footer Navigation
========================================= */}

          

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">

  {/* =========================================
      Brand Column
  ========================================= */}

  <div className="lg:col-span-4">
              {/* Logo */}

              <Link to="/" className="group inline-flex items-center">
                <img
                  src="/Borofirst-Logos-1-1.webp"
                  alt="BoroFirst"
                  className="h-12 w-auto"
                />
              </Link>

              {/* Description */}

              <p className="mt-6 max-w-sm text-sm leading-7 ">
                Helping individuals and businesses access smarter financial
                solutions with transparency, simplicity, and confidence.
              </p>

              {/* Trust Badge */}

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900/70 px-4 py-2.5">
                <FaShieldAlt size={17} className="text-[#2c8e18]" />

                <span className="text-xs font-medium text-gray-300">
                  Secure & Confidential
                </span>
              </div>

              {/* Social Media */}

              <div className="mt-7">
                <p className="mb-4 text-sm font-semibold text-[#186A07] ">
                  Follow Us
                </p>

                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                  
<a
  key={social.name}
  href={social.url}
  aria-label={`Follow BoroFirst on ${social.name}`}
  target="_blank"
  rel="noopener noreferrer"
  className="
    group relative flex h-11 w-11 items-center justify-center
    overflow-hidden rounded-xl
    border border-[#186A07]/40
    bg-[#186A07]
    text-white
    shadow-sm
    transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:border-[#0B2578]
    hover:bg-linear-to-br
    hover:from-[#186A07]
    hover:to-[#0B2578]
    hover:shadow-lg
    hover:shadow-[#186A07]/20
    active:translate-y-0
  "
>
  {/* Hover Shine */}
  <span
    className="
      absolute inset-0
      -translate-x-full
      bg-linear -to-r
      from-transparent
      via-white/20
      to-transparent
      transition-transform duration-700
      group-hover:translate-x-full
    "
  />

  {/* Icon */}
  <Icon
    size={17}
    className="
      relative z-10
      transition-all duration-300
      group-hover:scale-110
      group-hover:rotate-3
    "
  />
</a>
                    );
                  })}
                </div>
              </div>
            </div>

  {/* =========================================
      Navigation Columns Background
  ========================================= */}

<div
  className="
    group/footer
    relative
    lg:col-span-8
    grid
    grid-cols-2
    gap-5
    overflow-hidden
    rounded-3xl
    border
    border-[#DCEBD8]
    bg-linear-to-br
    from-[#DCEFD5]
    via-[#F4F7F2]
    to-[#DDE5F7]
    p-5
    shadow-[0_8px_15px_rgba(24,106,7,0.08),0_20px_35px_rgba(11,37,120,0.10),0_2px_4px_rgba(0,0,0,0.08)]
    transition-all
    duration-700
    hover:-translate-y-3
    hover:scale-103
    hover:shadow-[0_15px_30px_rgba(24,106,7,0.12),0_30px_55px_rgba(11,37,120,0.14)]
       hover:bg-linear-to-br
hover:from-[#C9DFC2]
hover:via-[#E8ECE6]
hover:to-[#CBD5E8]
    sm:p-6
    lg:grid-cols-4
    lg:p-7
    motion-reduce:transition-none

  "
>
  {/* =========================================================
      BACKGROUND DECORATIVE GLOW
  ========================================================= */}

  <div
    className="
      pointer-events-none
      absolute
      -right-24
      -top-24
      h-64
      w-64
      rounded-full
      bg-[#186A07]/10
      blur-3xl
      transition-all
      duration-1000
      group-hover/footer:scale-150
      group-hover/footer:bg-[#186A07]/15
      motion-reduce:transition-none
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -bottom-28
      -left-24
      h-64
      w-64
      rounded-full
      bg-[#0B2578]/10
      blur-3xl
      transition-all
      duration-1000
      group-hover/footer:scale-125
      group-hover/footer:bg-[#0B2578]/15
      motion-reduce:transition-none
    "
  />

  {/* =========================================================
      COMPANY
  ========================================================= */}

  <div
    className="
      relative
      animate-[footerFadeUp_0.7s_ease-out_0.05s_both]
      motion-reduce:animate-none
    "
  >
    <h3
      className="
        group/title
        relative
        mb-6
        inline-flex
        flex-col
        text-sm
        font-bold
        uppercase
        tracking-[0.14em]
        text-[#0B2578]
      "
    >
      <span
        className="
          transition-all
          duration-300
          group-hover/title:translate-x-0.5
        "
      >
        Company
      </span>

      {/* Animated heading line */}
      <span
        className="
          mt-2
          h-0.5
          w-0
          origin-left
          rounded-full
          bg-linear-to-r
          from-[#186A07]
          to-[#0B2578]
          transition-all
          duration-500
          group-hover/title:w-full
        "
      />
    </h3>

    <nav aria-label="Company navigation">
      <ul className="space-y-3">
        {companyLinks.map((link, index) => (
          <li
            key={link.name}
            className="
              animate-[footerFadeUp_0.6s_ease-out_both]
              motion-reduce:animate-none
            "
            style={{
              animationDelay: `${150 + index * 70}ms`,
            }}
          >
            <Link
              to={link.path}
              className="
                group/link
                relative
                inline-flex
                items-center
                gap-2.5
                overflow-hidden
                rounded-lg
                px-1
                py-1
                text-sm
                text-gray-600
                transition-all
                duration-300
                hover:translate-x-1.5
                hover:text-[#186A07]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#186A07]/30
                motion-reduce:transition-none
              "
            >
              {/* Animated left indicator */}
              <span
                className="
                  absolute
                  left-0
                  h-4
                  w-0.5
                  -translate-x-2
                  rounded-full
                  bg-[#186A07]
                  opacity-0
                  transition-all
                  duration-300
                  group-hover/link:translate-x-0
                  group-hover/link:opacity-100
                "
              />

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover/link:translate-x-1
                "
              >
                {link.name}
              </span>

              <MdOpenInNew
                size={14}
                className="
                  -translate-x-2
                  opacity-0
                  transition-all
                  duration-300
                  group-hover/link:translate-x-0
                  group-hover/link:rotate-6
                  group-hover/link:opacity-100
                "
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>

  {/* =========================================================
      LOAN PRODUCTS
  ========================================================= */}

  <div
    className="
      relative
      animate-[footerFadeUp_0.7s_ease-out_0.15s_both]
      motion-reduce:animate-none
    "
  >
    <h3
      className="
        group/title
        relative
        mb-6
        inline-flex
        flex-col
        text-sm
        font-bold
        uppercase
        tracking-[0.14em]
        text-[#0B2578]
      "
    >
      <span
        className="
          transition-all
          duration-300
          group-hover/title:translate-x-0.5
        "
      >
        Loan Products
      </span>

      <span
        className="
          mt-2
          h-0.5
          w-0
          origin-left
          rounded-full
          bg-linear-to-r
          from-[#186A07]
          to-[#0B2578]
          transition-all
          duration-500
          group-hover/title:w-full
        "
      />
    </h3>

    <nav aria-label="Loan products navigation">
      <ul className="space-y-3">
        {loanProducts.map((loan, index) => (
          <li
            key={loan.name}
            className="
              animate-[footerFadeUp_0.6s_ease-out_both]
              motion-reduce:animate-none
            "
            style={{
              animationDelay: `${250 + index * 70}ms`,
            }}
          >
            <Link
              to={loan.path}
              className="
                group/link
                relative
                inline-flex
                items-center
                gap-2.5
                overflow-hidden
                rounded-lg
                px-1
                py-1
                text-sm
                text-gray-600
                transition-all
                duration-300
                hover:translate-x-1.5
                hover:text-[#186A07]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#186A07]/30
              "
            >
              <span
                className="
                  absolute
                  left-0
                  h-4
                  w-0.5
                  -translate-x-2
                  rounded-full
                  bg-[#186A07]
                  opacity-0
                  transition-all
                  duration-300
                  group-hover/link:translate-x-0
                  group-hover/link:opacity-100
                "
              />

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover/link:translate-x-1
                "
              >
                {loan.name}
              </span>

              <MdOpenInNew
                size={14}
                className="
                  -translate-x-2
                  opacity-0
                  transition-all
                  duration-300
                  group-hover/link:translate-x-0
                  group-hover/link:rotate-6
                  group-hover/link:opacity-100
                "
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>

  {/* =========================================================
      FINANCIAL SERVICES
  ========================================================= */}

  <div
    className="
      relative
      animate-[footerFadeUp_0.7s_ease-out_0.25s_both]
      motion-reduce:animate-none
    "
  >
    <h3
      className="
        group/title
        relative
        mb-6
        inline-flex
        flex-col
        text-sm
        font-bold
        uppercase
        tracking-[0.14em]
        text-[#0B2578]
      "
    >

    <span
        className="
          transition-all
          duration-300
          group-hover/title:translate-x-0.5
        "
      > 
        Financial Services
       </span> 
      <span
        className="
          mt-2
          h-0.5
          w-0
          origin-left
          rounded-full
          bg-linear-to-r
          from-[#186A07]
          to-[#0B2578]
          transition-all
          duration-500
          group-hover/title:w-full
        "
      />
    </h3>

    <nav aria-label="Financial services navigation">
      <ul className="space-y-3">
        {financialServices.map((service, index) => (
          <li
            key={service.name}
            className="
              animate-[footerFadeUp_0.6s_ease-out_both]
              motion-reduce:animate-none
            "
            style={{
              animationDelay: `${350 + index * 70}ms`,
            }}
          >
            <Link
              to={service.path}
              className="
                group/link
                relative
                inline-flex
                items-center
                gap-2.5
                overflow-hidden
                rounded-lg
                px-1
                py-1
                text-sm
                text-gray-600
                transition-all
                duration-300
                hover:translate-x-1.5
                hover:text-[#186A07]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#186A07]/30
              "
            >
              <span
                className="
                  absolute
                  left-0
                  h-4
                  w-0.5
                  -translate-x-2
                  rounded-full
                  bg-[#186A07]
                  opacity-0
                  transition-all
                  duration-300
                  group-hover/link:translate-x-0
                  group-hover/link:opacity-100
                "
              />

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover/link:translate-x-1
                "
              >
                {service.name}
              </span>

              <MdOpenInNew
                size={14}
                className="
                  -translate-x-2
                  opacity-0
                  transition-all
                  duration-300
                  group-hover/link:translate-x-0
                  group-hover/link:rotate-6
                  group-hover/link:opacity-100
                "
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>

  {/* =========================================================
      RESOURCES
  ========================================================= */}

  <div
    className="
      relative
      animate-[footerFadeUp_0.7s_ease-out_0.35s_both]
      motion-reduce:animate-none
    "
  >
    <h3
      className="
        group/title
        relative
        mb-6
        inline-flex
        flex-col
        text-sm
        font-bold
        uppercase
        tracking-[0.14em]
        text-[#0B2578]
      "
    >
      <span
        className="
          transition-all
          duration-300
          group-hover/title:translate-x-0.5
        "
      >
        Resources
      </span>

      <span
        className="
          mt-2
          h-0.5
          w-0
          origin-left
          rounded-full
          bg-linear-to-r
          from-[#186A07]
          to-[#0B2578]
          transition-all
          duration-500
          group-hover/title:w-full
        "
      />
    </h3>

    <nav aria-label="Resources navigation">
      <ul className="space-y-3">
        {resourceLinks.map((resource, index) => (
          <li
            key={resource.name}
            className="
              animate-[footerFadeUp_0.6s_ease-out_both]
              motion-reduce:animate-none
            "
            style={{
              animationDelay: `${450 + index * 70}ms`,
            }}
          >
            <Link
              to={resource.path}
              className="
                group/link
                relative
                inline-flex
                items-center
                gap-2.5
                overflow-hidden
                rounded-lg
                px-1
                py-1
                text-sm
                text-gray-600
                transition-all
                duration-300
                hover:translate-x-1.5
                hover:text-[#186A07]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#186A07]/30
              "
            >
              <span
                className="
                  absolute
                  left-0
                  h-4
                  w-0.5
                  -translate-x-2
                  rounded-full
                  bg-[#186A07]
                  opacity-0
                  transition-all
                  duration-300
                  group-hover/link:translate-x-0
                  group-hover/link:opacity-100
                "
              />

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover/link:translate-x-1
                "
              >
                {resource.name}
              </span>

              <MdOpenInNew
                size={14}
                className="
                  -translate-x-2
                  opacity-0
                  transition-all
                  duration-300
                  group-hover/link:translate-x-0
                  group-hover/link:rotate-6
                  group-hover/link:opacity-100
                "
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
</div>

</div>
          

          {/* =========================================
      Trust & Security
  ========================================= */}
      <div className="mt-7">
  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
    {trustPoints.map((point) => (
      <div
        key={point}
        className="
          group relative flex items-center gap-3
          overflow-hidden
          rounded-2xl
          border border-[#DFF2D8]
          bg-white/70
          px-4 py-3.5
          shadow-[0_4px_15px_rgba(24,106,7,0.06)]
          backdrop-blur-sm
          transition-all duration-300 ease-out

          hover:-translate-y-1
          hover:border-[#BFE3B5]
          hover:bg-[#F8FCF7]
          hover:shadow-[0_10px_25px_rgba(24,106,7,0.12)]
        "
      >
        {/* Subtle gradient accent */}
        <span
          className="
            absolute left-0 top-0 h-full w-[3px]
            bg-gradient-to-b
            from-[#186A07]
            to-[#0B2578]
            opacity-70
            transition-all duration-300
            group-hover:w-1
            group-hover:opacity-100
          "
        />

        {/* Check Icon */}
        <div
          className="
            relative flex h-8 w-8 shrink-0
            items-center justify-center
            rounded-full
            bg-[#EAF5E8]
            text-[#186A07]
            ring-1 ring-[#186A07]/10
            transition-all duration-300
            group-hover:bg-gradient-to-br
            group-hover:from-[#186A07]
            group-hover:to-[#0B2578]
            group-hover:text-white
            group-hover:ring-transparent
            group-hover:scale-105
          "
        >
          <FaCheckCircle size={16} />
        </div>

        {/* Text */}
        <span
          className="
            text-xs
            font-semibold
            leading-5
            text-gray-700
            transition-colors duration-300
            group-hover:text-[#186A07]
          "
        >
          {point}
        </span>
      </div>
    ))}
  </div>
</div>

          {/* =========================================
    Bottom Footer
========================================= */}

          <div className="mt-5 border-t border-gray-800 pt-3">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              {/* Copyright */}

              <div className="text-center lg:text-left">
                <p className="text-xs text-gray-500 sm:text-sm">
                  © {new Date().getFullYear()} BoroFirst. All Rights Reserved.
                </p>
              </div>

              {/* Legal Navigation */}

              <nav aria-label="Legal navigation">
                <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-end">
                  <li>
                    <Link
                      to="/privacy-policy"
                      className="text-xs text-gray-500 transition-colors duration-300 hover:text-emerald-400 sm:text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>

                  <li className="hidden h-3 w-px bg-gray-800 sm:block" />

                  <li>
                    <Link
                      to="/terms-conditions"
                      className="text-xs text-gray-500 transition-colors duration-300 hover:text-emerald-400 sm:text-sm"
                    >
                      Terms & Conditions
                    </Link>
                  </li>

                  <li className="hidden h-3 w-px bg-gray-800 sm:block" />
                  <li>
                    <Link
                      to="/disclaimer"
                      className="text-xs text-gray-500 transition-colors duration-300 hover:text-emerald-400 sm:text-sm"
                    >
                      Disclaimer
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Bottom Brand Statement */}

            <div className="flex flex-col items-center justify-center gap-2 sm:flex-row mt-3">
              <span className="text-xs text-gray-600">
                Financial Freedom Starts Here
              </span>

              <span className="hidden text-gray-700 sm:block">•</span>

              <span className="text-xs text-gray-600">
                Built around transparency and customer-first financial
                solutions.
              </span>
            </div>
          </div>
        </div>
      </section>

 </div>
     </footer>
  );
};

export default Footer;
