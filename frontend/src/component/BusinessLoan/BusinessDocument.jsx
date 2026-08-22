
import React, { useState } from "react";
import {
  Store,
  Users,
  Building2,
  BriefcaseBusiness,
  CheckCircle2,
  ArrowRight,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";

/* =========================================================
   BUSINESS LOAN DOCUMENT DATA
========================================================= */

const documentCategories = [
  {
    id: "proprietorship",
    title: "Proprietorship",
    shortTitle: "Business owned by one person.",
    icon: Store,

    documents: [
      {
        category: "Identity & Address",
        title: "PAN Card",
        description: "PAN of the proprietor.",
      },
      {
        category: "Identity & Address",
        title: "Identity & Address Proof",
        description:
          "Valid government-issued identity and address proof of the proprietor.",
      },
      {
        category: "Business Proof",
        title: "Business Registration Proof",
        description:
          "Applicable document establishing the existence of the business.",
      },
      {
        category: "Business Proof",
        title: "GST Registration Certificate",
        description:
          "GST registration certificate, where applicable.",
      },
      {
        category: "Financial Documents",
        title: "Income Tax Returns",
        description:
          "Recent ITRs of the proprietor, as required by the lender.",
      },
      {
        category: "Banking",
        title: "Bank Statements",
        description:
          "Recent business or current account statements.",
      },
      {
        category: "Financial Documents",
        title: "Business Financials",
        description:
          "Profit & loss statement, balance sheet or other financial documents, where applicable.",
      },
    ],
  },

  {
    id: "partnership",
    title: "Partnership Firm",
    shortTitle: "Business owned by two or more partners.",
    icon: Users,

    documents: [
      {
        category: "Identity & Address",
        title: "PAN Card",
        description:
          "PAN of the partnership firm and relevant partners.",
      },
      {
        category: "Identity & Address",
        title: "KYC Documents",
        description:
          "Identity and address proof of partners / authorised signatories.",
      },
      {
        category: "Business Proof",
        title: "Partnership Deed",
        description:
          "Valid partnership deed establishing the constitution of the firm.",
      },
      {
        category: "Business Proof",
        title: "Business Registration Proof",
        description:
          "Applicable registration or licence establishing the business.",
      },
      {
        category: "Tax & GST",
        title: "GST Registration & Returns",
        description:
          "GST certificate and returns, where applicable.",
      },
      {
        category: "Financial Documents",
        title: "Income Tax Returns",
        description:
          "Recent ITRs of the firm and/or partners, as applicable.",
      },
      {
        category: "Banking",
        title: "Bank Statements",
        description:
          "Recent current account or business bank statements.",
      },
      {
        category: "Financial Documents",
        title: "Financial Statements",
        description:
          "Profit & loss statement, balance sheet and other applicable financials.",
      },
    ],
  },

  {
    id: "company",
    title: "Private / Public Limited",
    shortTitle: "Registered company owned by shareholders.",
    icon: Building2,

    documents: [
      {
        category: "Identity & Address",
        title: "Company PAN",
        description:
          "PAN of the company.",
      },
      {
        category: "Identity & Address",
        title: "KYC of Directors",
        description:
          "Identity and address proof of directors / authorised signatories.",
      },
      {
        category: "Business Proof",
        title: "Certificate of Incorporation",
        description:
          "Certificate establishing the legal existence of the company.",
      },
      {
        category: "Business Proof",
        title: "MOA & AOA",
        description:
          "Memorandum and Articles of Association, where applicable.",
      },
      {
        category: "Corporate Documents",
        title: "Board Resolution",
        description:
          "Applicable board resolution authorising the borrowing.",
      },
      {
        category: "Tax & GST",
        title: "GST Documents",
        description:
          "GST registration and applicable GST returns.",
      },
      {
        category: "Financial Documents",
        title: "ITRs & Financial Statements",
        description:
          "Recent income tax returns, audited financials and other applicable statements.",
      },
      {
        category: "Banking",
        title: "Company Bank Statements",
        description:
          "Recent current account or business bank statements.",
      },
    ],
  },

  {
    id: "llp",
    title: "LLP / Other Entity",
    shortTitle: "Registered business operated by partners.",
    icon: BriefcaseBusiness,

    documents: [
      {
        category: "Identity & Address",
        title: "PAN Card",
        description:
          "PAN of the LLP / applicable business entity.",
      },
      {
        category: "Identity & Address",
        title: "KYC Documents",
        description:
          "Identity and address proof of designated partners / authorised signatories.",
      },
      {
        category: "Business Proof",
        title: "Certificate of Incorporation",
        description:
          "Applicable incorporation or registration document.",
      },
      {
        category: "Business Proof",
        title: "LLP Agreement",
        description:
          "Valid LLP agreement establishing the constitution of the entity.",
      },
      {
        category: "Tax & GST",
        title: "GST Registration & Returns",
        description:
          "GST certificate and applicable returns.",
      },
      {
        category: "Financial Documents",
        title: "Income Tax Returns",
        description:
          "Recent ITRs as required by the lender.",
      },
      {
        category: "Financial Documents",
        title: "Financial Statements",
        description:
          "Applicable profit & loss statements, balance sheets or audited financials.",
      },
      {
        category: "Banking",
        title: "Bank Statements",
        description:
          "Recent business or current account statements.",
      },
    ],
  },
];

/* =========================================================
   DOCUMENT CATEGORIES
========================================================= */

const documentSteps = [
  "Identity & Address",
  "Business Proof",
  "Financial Documents",
  "Banking Details",
  "Tax / GST Documents",
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const BusinessLoanDocuments = () => {
  const [activeCategory, setActiveCategory] =
    useState("proprietorship");

  const activeBusiness = documentCategories.find(
    (category) => category.id === activeCategory
  );

  return (
    <section
      id="business-loan-documents"
      className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-[#10B981]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#0B2578]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />

            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B2578]">
              Documents Required
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Keep Your{" "}
            <span className="text-[#118A09]">
              Documents Ready
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base">
            Having the required documents ready can help make the loan
            application process smoother. Requirements may vary depending
            on the lender, loan product, applicant profile and business
            structure.
          </p>
        </div>

        {/* =====================================================
            MAIN DOCUMENT AREA
        ====================================================== */}

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.38fr_0.62fr] lg:gap-8">

          {/* ===================================================
              LEFT — BUSINESS TYPE
          ==================================================== */}

          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-6">

            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Step 01
              </p>

              <h3 className="mt-1 text-xl font-extrabold text-slate-800">
                Tell us about your business
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Select your business structure to see commonly requested
                documents.
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Business type"
              className="space-y-3"
            >
              {documentCategories.map((category) => {
                const Icon = category.icon;
                const isActive =
                  activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() =>
                      setActiveCategory(category.id)
                    }
                    className={`
                      group flex w-full items-center gap-4
                      rounded-2xl border p-4 text-left
                      transition-all duration-300 ease-out
                      focus:outline-none focus:ring-2
                      focus:ring-[#10B981]/40
                      ${
                        isActive
                          ? "border-emerald-200 bg-emerald-50"
                          : "border-[#E2E8F0] bg-white hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-slate-50"
                      }
                    `}
                  >
                    <span
                      className={`
                        flex h-11 w-11 shrink-0 items-center
                        justify-center rounded-xl
                        transition-all duration-300
                        ${
                          isActive
                            ? " transition-all duration-300 ease-out group-hover:scale-110 text-white group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)] bg-[#118A09] "
                  
                            : "bg-[#F1F5F9] text-[#64748B] group-hover:bg-emerald-50 group-hover:text-[#2c8e18]"
                        }
                      `}
                    >
                      <Icon size={20} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`
                          block text-sm font-bold
                          ${
                            isActive
                              ? "text-[#0B2578]"
                              : "text-[#0F172A]"
                          }
                        `}
                      >
                        {category.title}
                      </span>
                      
                      <span className="mt-0.5 block text-xs text-slate-700">
                         {category.shortTitle}
                      </span>
                      <span className="mt-2 block text-xs text-[#94A3B8]">
                        View required documents
                      </span>
                    </span>

                    <ArrowRight
                      size={17}
                      className={`
                        shrink-0 transition-all duration-300
                        ${
                          isActive
                            ? "translate-x-0 text-[#10B981]"
                            : "-translate-x-1 text-[#CBD5E1] group-hover:translate-x-0 group-hover:text-[#10B981]"
                        }
                      `}
                    />
                  </button>
                );
              })}
            </div>

    {/* CTA */}
     <div className="mt-8 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-6">

            <div className="flex-row items-center justify-center gap-4">
              <div className="flex h-11 w-11  shrink-0 items-center justify-center rounded-xl bg-[#0B2578] text-white">
                <FileCheck2 size={20} />
              </div>

              <div>
                <h3 className="text-base font-extrabold text-[#0F172A] sm:text-lg">
                  Not sure which documents apply to you?
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-[#64748B]">
                  Our team can help you understand the documentation
                  generally required for your business profile before
                  you proceed with your application.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="
                group inline-flex shrink-0 items-center
                justify-center gap-2 rounded-xl
                bg-linear-to-r from-[#186A07] to-[#0B2578] px-6 py-3
                text-sm font-bold text-white
                shadow-sm
              
              "
            >
              Check Eligibility

              <ArrowRight
                size={17}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
      
        </div>




            {/* Small helper */}
            <div className="mt-6 flex gap-3 rounded-2xl bg-[#F8FAFC] p-4">
              <ShieldCheck
                size={19}
                className="mt-0.5 shrink-0 text-[#10B981]"
              />
              <p className="text-xs leading-5 text-[#64748B]">
                The final document list depends on the lender,
                business type, loan amount and applicant profile.
              </p>
            </div>
          </div>

          {/* ===================================================
              RIGHT — DOCUMENT PANEL
          ==================================================== */}

          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-7">

            {/* Panel Header */}

            <div className="flex flex-col gap-4 border-b border-[#E2E8F0] pb-6 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Step 02
                </p>

                <h3 className="mt-1 text-xl font-extrabold text-[#0F172A]">
                  Documents for{" "}
                  <span className="text-[#0B2578]">
                    {activeBusiness?.shortTitle}
                  </span>
                </h3>
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#10B981]" />

                <span className="text-xs font-semibold text-emerald-700">
                  Commonly Required
                </span>
              </div>
            </div>

            {/* =================================================
                DOCUMENT PROGRESS
            ================================================== */}

            <div className="mt-7 hidden md:block">
              <div className="relative flex justify-between">

                <div className="absolute left-0 right-0 top-2.5 h-px bg-[#E2E8F0]" />

                <div className="absolute left-0 top-2.5 h-px w-[72%] bg-[#10B981]" />

                {documentSteps.map((step, index) => (
                  <div
                    key={step}
                    className="relative z-10 flex max-w-[100px] flex-col items-center text-center"
                  >
                    <span
                      className={`
                        flex h-5 w-5 items-center justify-center
                        rounded-full border-4 border-white
                        ${
                          index < 4
                            ? "bg-[#2c8e18]"
                            : "bg-[#CBD5E1]"
                        }
                      `}
                    />

                    <span className="mt-2 text-[10px] font-medium leading-4 text-[#64748B]">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================
                DOCUMENT LIST
            ================================================== */}

            <div
              key={activeCategory}
              className="mt-8 space-y-3"
            >
              {activeBusiness?.documents.map((document, index) => (
                <div
                  key={`${activeCategory}-${document.title}`}
                  className="
                    group flex gap-4
                    rounded-2xl border border-[#E2E8F0]
                    bg-white p-4
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-emerald-100
                    hover:bg-[#F8FFFC]
                    hover:shadow-sm
                  "
                  style={{
                    animationDelay: `${index * 40}ms`,
                  }}
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-[#2c8e18]"
                  />

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm font-bold text-[#0F172A]">
                        {document.title}
                      </h4>

                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-[#64748B]">
                        {document.category}
                      </span>
                    </div>

                    <p className="mt-1 text-xs leading-5 text-[#64748B]">
                      {document.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* =================================================
                PANEL NOTE
            ================================================== */}

            <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
              <div className="flex gap-3">
                <FileCheck2
                  size={19}
                  className="mt-0.5 shrink-0 text-[#10B981]"
                />

                <div>
                  <p className="text-sm font-bold text-[#0F172A]">
                    Prepare → Verify → Apply
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#64748B]">
                    Keeping your commonly requested documents ready
                    can help reduce delays during the application and
                    verification process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM HELP / CTA
        ====================================================== */}

       

        {/* =====================================================
            DISCLAIMER
        ====================================================== */}

        <p className="mx-auto mt-6 max-w-4xl text-center text-[11px] leading-5 text-[#94A3B8]">
          Document requirements may vary by lender, loan product,
          business constitution, applicant profile, loan amount,
          and applicable regulatory requirements. Additional
          documents may be requested during the application or
          verification process.
        </p>
      </div>
    </section>
  );
};

export default BusinessLoanDocuments;