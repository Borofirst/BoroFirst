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
      path: "/why-choose-us",
    },
    {
      name: "Our Partners",
      path: "/partners",
    },
    {
      name: "Careers",
      path: "/careers",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  const loanProducts = [
    {
      name: "Personal Loan",
      path: "/loans/personal-loan",
    },
    {
      name: "Home Loan",
      path: "/loans/home-loan",
    },
    {
      name: "Business Loan",
      path: "/loans/business-loan",
    },
    {
      name: "Vehicle Loan",
      path: "/loans/vehicle-loan",
    },
    {
      name: "Education Loan",
      path: "/loans/education-loan",
    },
    {
      name: "Gold Loan",
      path: "/loans/gold-loan",
    },
  ];

  const financialServices = [
    {
      name: "Health Insurance",
      path: "/services/health-insurance",
    },
    {
      name: "Home Insurance",
      path: "/services/home-insurance",
    },
    {
      name: "SIP Investment",
      path: "/services/sip-investment",
    },
    {
      name: "Credit Card",
      path: "/services/credit-card",
    },
    {
      name: "Loan Against Property",
      path: "/services/loan-against-property",
    },
    {
      name: "Financial Consultation",
      path: "/services/financial-consultation",
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
    <footer className="relative overflow-hidden bg-linear-to-b from-slate-300 via-slate-900 to-slate-950 text-white">
      {/* =========================================
          Main Footer Content
      ========================================= */}

      <section className="relative px-2 pb-5 pt-5 sm:px-6 lg:px-6">
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

              <p className="mt-6 max-w-sm text-sm leading-7 text-white">
                Helping individuals and businesses access smarter financial
                solutions with transparency, simplicity, and confidence.
              </p>

              {/* Trust Badge */}

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900/70 px-4 py-2.5">
                <FaShieldAlt size={17} className="text-emerald-400" />

                <span className="text-xs font-medium text-gray-300">
                  Secure & Confidential
                </span>
              </div>

              {/* Social Media */}

              <div className="mt-7">
                <p className="mb-4 text-sm font-semibold text-white">
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
                        className="group flex h-10 w-10 items-center justify-center rounded-xl border border-gray-800 bg-gray-900 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-linear-to-br hover:from-emerald-500 hover:to-blue-600 hover:text-white hover:shadow-lg hover:shadow-emerald-500/10"
                      >
                        <Icon
                          size={16}
                          className="transition-transform duration-300 group-hover:scale-110"
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
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
                Company
              </h3>

              <nav aria-label="Company navigation">
                <ul className="space-y-3.5">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="group inline-flex items-center gap-2 text-sm text-white transition-all duration-300 hover:translate-x-1 hover:text-emerald-400"
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
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
                Loan Products
              </h3>

              <nav aria-label="Loan products navigation">
                <ul className="space-y-3.5">
                  {loanProducts.map((loan) => (
                    <li key={loan.name}>
                      <Link
                        to={loan.path}
                        className="group inline-flex items-center gap-2 text-sm text-white transition-all duration-300 hover:translate-x-1 hover:text-emerald-400"
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
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
                Financial Services
              </h3>

              <nav aria-label="Financial services navigation">
                <ul className="space-y-3.5">
                  {financialServices.map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.path}
                        className="group inline-flex items-center gap-2 text-sm text-white transition-all duration-300 hover:translate-x-1 hover:text-emerald-400"
                      >
                        <span>{service.name}</span>

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
      Resources
  ========================================= */}

            <div className="lg:col-span-2">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
                Resources
              </h3>

              <nav aria-label="Resources navigation">
                <ul className="space-y-3.5">
                  {resourceLinks.map((resource) => (
                    <li key={resource.name}>
                      <Link
                        to={resource.path}
                        className="group inline-flex items-center gap-2 text-sm text-white transition-all duration-300 hover:translate-x-1 hover:text-emerald-400"
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
          <div className="mt-5 border-gray-800 ">
            <div className=" grid grid-cols-2 gap-3 sm:grid-cols-4">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 rounded-xl border border-gray-800 bg-gray-900/40 px-3 py-3"
                >
                  <FaCheckCircle
                    size={14}
                    className="shrink-0 text-emerald-400"
                  />

                  <span className="text-xs font-medium text-gray-400">
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
