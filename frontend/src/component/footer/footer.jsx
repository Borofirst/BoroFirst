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
  MdEmail,
  MdLocationOn,
  MdAccessTime,
  MdOpenInNew,
} from "react-icons/md";

const Footer = () => {
  // =========================================
  // Newsletter State
  // =========================================

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");

  // =========================================
  // Navigation Data
  // =========================================

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
      path: "/loan-against-property",
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
      name: "FAQs",
      path: "/faq",
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
      url: "#",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "#",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "#",
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
 <footer className="relative overflow-hidden text-black w-[98%] m-auto mb-4 rounded-2xl border-4 border-transparent">
   <div
  className="pointer-events-none absolute inset-0 rounded-2xl"
  style={{
    padding: "3px",
    background: "linear-gradient(to right, #186A07, #0B2578)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  }}
/>
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
    hover:bg-gradient-to-br
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
      Company
  ========================================= */}

            <div className="lg:col-span-2">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider ">
                Company
              </h3>

              <nav aria-label="Company navigation">
                <ul className="space-y-3.5">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="group inline-flex items-center gap-2 text-sm  transition-all duration-300 hover:translate-x-1 hover:text-[#2c8e18]"
                      >
                        <span>{link.name}</span>

                        <MdOpenInNew
                          size={14}
                          className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* =========================================
      Loan Products
  ========================================= */}

            <div className="lg:col-span-2">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider">
                Loan Products
              </h3>

              <nav aria-label="Loan products navigation">
                <ul className="space-y-3.5">
                  {loanProducts.map((loan) => (
                    <li key={loan.name}>
                      <Link
                        to={loan.path}
                        className="group inline-flex items-center gap-2 text-sm  transition-all duration-300 hover:translate-x-1 hover:text-[#2c8e18]"
                      >
                        <span>{loan.name}</span>

                        <MdOpenInNew
                          size={14}
                          className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* =========================================
      Financial Services
  ========================================= */}

            <div className="lg:col-span-2">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider">
                Financial Services
              </h3>

              <nav aria-label="Financial services navigation">
                <ul className="space-y-3.5">
                  {financialServices.map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.path}
                        className="group inline-flex items-center gap-2 text-sm transition-all duration-300 hover:translate-x-1 hover:text-[#2c8e18]"
                      >
                        <span>{service.name}</span>

                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* =========================================
      Resources
  ========================================= */}

            <div className="lg:col-span-2">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider">
                Resources
              </h3>

              <nav aria-label="Resources navigation">
                <ul className="space-y-3.5">
                  {resourceLinks.map((resource) => (
                    <li key={resource.name}>
                      <Link
                        to={resource.path}
                        className="group inline-flex items-center gap-2 text-sm  transition-all duration-300 hover:translate-x-1 hover:text-[#2c8e18]"
                      >
                        <span>{resource.name}</span>

                        <MdOpenInNew
                          size={14}
                          className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
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


     </footer>
  );
};

export default Footer;
