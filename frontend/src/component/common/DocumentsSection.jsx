import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  FileText,
  House,
  IndianRupee,
  MapPin,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
const DocumentCard = ({ document }) => {
  const Icon = document.icon;

  return (
    <div
      className={`
        group relative rounded-[20px] border bg-white p-5
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
        ${
          document.important
            ? "border-emerald-200 bg-emerald-50/40"
            : "border-[#E2E8F0] hover:border-emerald-200"
        }
      `}
    >
      {/* Important label */}

      {document.important && (
        <span className="absolute right-4 bottom-4 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2c8e18]">
          Important
        </span>
      )}

      <div className="flex items-start gap-4">

        {/* Icon */}

        <div
          className={`
            flex h-11 w-11 shrink-0 items-center justify-center
            rounded-xl transition duration-300
            group-hover:scale-105
            ${
              document.important
                ? "bg-[#118A09] text-white"
                : "bg-emerald-50 text-[#2c8e18]"
            }
          `}
        >
          
          <Icon size={21} />
        </div>

        {/* Content */}

        <div className="min-w-0 pr-8">

          <div className="flex items-center gap-2">
            <h3 className="text-[16px] font-extrabold text-slate-700">
              {document.title}
            </h3>

            <Check
              size={16}
              className="text-[#2c8e18]"
            />
          </div>

          <p className="mt-1.5 text-sm leading-6 text-slate-500">
            {document.description}
          </p>

          <p className="mt-2 text-xs leading-5 text-slate-400">
            <span className="font-semibold text-slate-500">
              Examples:
            </span>{" "}
            {document.examples}
          </p>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const LoanDocuments = ({salariedDocuments,selfEmployedDocuments}) => {
  const [activeTab, setActiveTab] = useState("Salaried");

  const documents =
    activeTab === "Salaried"
      ? salariedDocuments
      : selfEmployedDocuments;

  return (
    <section
      id="lap-documents"
      className="relative bg-[#F8FAFC] overflow-hidden  py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">

      
                                       <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2 shadow-sm">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/40" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#186A07]" />
                        </span>
          
                        <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
                           Documents Required
                        </span>
                      </div>

           <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.45rem]">
             Keep Your{" "}
            <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
              Documents Ready.{" "}
            </span>
            
          </h2>    


          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
            Having commonly requested documents ready can help make
            your Loan Against Property application process smoother.
          </p>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">

          {/* ===================================================
              LEFT INFORMATION PANEL
          ==================================================== */}

          <div className="flex h-full min-h-[610px] flex-col justify-between rounded-[28px] bg-[#F8FAFC] p-7 ring-1 ring-[#E2E8F0] sm:p-9">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2c8e18]">
                Before You Apply
              </p>

              <h3 className="mt-4 text-2xl font-extrabold leading-tight text-slate-800 sm:text-3xl">
                Prepare the Basics First.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                The exact documents you need can differ based on your
                work profile, property and lender. Start with the
                commonly requested documents below.
              </p>
            </div>

            {/* Why keep ready */}

            <div className="mt-10 rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#2c8e18]">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <h4 className="text-sm font-extrabold text-slate-800">
                    Why keep them ready?
                  </h4>

                  <p className="mt-1.5 text-xs leading-6 text-slate-500">
                    Having your commonly requested documents ready
                    can help keep your application process more
                    organised.
                  </p>
                </div>

              </div>
            </div>

            {/* Common checklist */}

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                Commonly Requested
              </p>

              <div className="mt-4 space-y-3">

                {[
                  "Identity Proof",
                  "Address Proof",
                  "Income Proof",
                  "Bank Statements",
                  " Documents",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-[#2c8e18]">
                      <Check size={15} />
                    </div>

                    <span className="text-sm font-semibold text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}

              </div>
            </div>

            {/* Property highlight */}

            <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#2c8e18] shadow-sm">
                  <House size={20} />
                </div>

                <div>
                  <h4 className="text-sm font-extrabold text-slate-800">
                    Property Documents Matter
                  </h4>

                  <p className="mt-1.5 text-xs leading-6 text-slate-500">
                    Since the property may be used as security,
                    the lender may ask for documents related to
                    ownership, value and other property details.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ===================================================
              RIGHT DOCUMENT PANEL
          ==================================================== */}

          <div className="flex h-full min-h-[610px] flex-col rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8">

            {/* Header */}

            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2c8e18]">
                  Choose Your Profile
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-slate-800">
                  Documents You May Need
                </h3>
              </div>

              {/* Tabs */}

              <div
                role="tablist"
                aria-label="Applicant type"
                className="grid grid-cols-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-1"
              >

                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "Salaried"}
                  onClick={() => setActiveTab("Salaried")}
                  className={`
                    min-h-[44px]
                    rounded-lg
                    px-4
                    text-xs
                    font-bold
                    transition-all
                    duration-300
                    sm:px-5
                    ${
                      activeTab === "Salaried"
                        ? "bg-linear-to-r from-[#186A07] to-[#0B2578] text-white shadow-sm"
                        : "text-slate-500 hover:text-[#0B2578]"
                    }
                  `}
                >
                  Salaried
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "Self-Employed"}
                  onClick={() => setActiveTab("Self-Employed")}
                  className={`
                    min-h-[44px]
                    rounded-lg
                    px-4
                    text-xs
                    font-bold
                    transition-all
                    duration-300
                    sm:px-5
                    ${
                      activeTab === "Self-Employed"
                        ? "bg-linear-to-r from-[#186A07] to-[#0B2578] text-white shadow-sm"
                        : "text-slate-500 hover:text-[#0B2578]"
                    }
                  `}
                >
                  Self-Employed
                </button>

              </div>
            </div>

            {/* Helper */}

            <div className="mt-5 rounded-xl bg-[#F8FAFC] px-4 py-3">
              <p className="text-xs leading-5 text-slate-500">
                Showing commonly requested documents for{" "}
                <span className="font-bold text-slate-800">
                  {activeTab}
                </span>{" "}
                applicants.
              </p>
            </div>


            {/* Document grid */}

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              {documents.map((document) => (
                <DocumentCard
                  key={document.title}
                  document={document}
                />
              ))}

            </div>

            {/* Disclaimer */}

            <div className="mt-auto border-t border-slate-100 pt-6">
              <p className="text-[11px] leading-5 text-slate-400">
                Document requirements may vary depending on the
                lender, applicant profile, property and loan
                structure. Additional documents may be requested
                during the assessment process.
              </p>
            </div>

          </div>
        </div>

      

      </div>
    </section>
  );
};

export default LoanDocuments;