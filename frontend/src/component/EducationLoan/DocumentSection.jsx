

import React from "react";
import {
  ArrowRight,
  Check,
  FileCheck2,
  GraduationCap,
  IdCard,
  Landmark,
  MapPin,
  UserRound,
  WalletCards,
} from "lucide-react";
import { BsPassport } from "react-icons/bs";

const essentialDocuments = [
  {
    title: "Identity Proof",
    description: "Aadhaar Card / Valid Government ID",
    icon: IdCard,
  },
  {
    title: "PAN Card",
    description: "Student / Co-applicant, where applicable",
    icon: FileCheck2,
  },
  {
    title: "Address Proof",
    description: "Valid residential address proof",
    icon: MapPin,
  },
  {
    title: "Academic Documents",
    description: "Latest mark sheets and academic certificates",
    icon: GraduationCap,
  },
  {
    title: "Admission / Offer Letter",
    description: "Proof of admission from the institution",
    icon: FileCheck2,
  },
  {
    title: "Fee Structure",
    description: "Official course or institution fee details",
    icon: Landmark,
  },
  {
    title: "Income Proof of Co-Applicant",
    description: "Salary slips / ITR / bank statements, as applicable",
    icon: WalletCards,
  },
];

const additionalDocuments = [
  {
    title: "Overseas Education",
    description: "Passport / Visa-related documents",
    icon: BsPassport,
  },
  {
    title: "Secured Education Loan",
    description: "Property / collateral documents",
    icon: Landmark,
  },
  {
    title: "Self-Employed Co-Applicant",
    description: "ITR / business income documents",
    icon: UserRound,
  },
];

const preparationPoints = [
  "Keep documents updated",
  "Keep clear digital copies",
  "Ensure details match across documents",
];

function DocumentRow({ document, isLast }) {
  const Icon = document.icon;

  return (
    <div
      className={`group flex items-center gap-4 py-4 sm:py-[18px] ${
        !isLast ? "border-b border-slate-100" : ""
      }`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl 
      bg-emerald-50
         text-[#2c8e18]
                     transition-all
                     duration-300
                     ease-out
                     group-hover:scale-110
                     group-hover:bg-[#118A09]
                     group-hover:text-white
                    group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]">
          
        <Icon size={18} strokeWidth={1.8} />
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-semibold text-[#0F172A] sm:text-[15px]">
          {document.title}
        </h4>

        <p className="mt-0.5 text-xs leading-5 text-[#64748B] sm:text-sm">
          {document.description}
        </p>
      </div>

      <div className="hidden h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#2c8e18] sm:flex">
        <Check size={13} strokeWidth={2.5} />
      </div>
    </div>
  );
}

function AdditionalDocument({ document }) {
  const Icon = document.icon;

  return (
    <div className="group flex gap-4 border-b border-white/10 py-4 last:border-b-0">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10
       text-emerald-300
        transition-all
         duration-300
          group-hover:bg-[#10B981] 
          group-hover:text-white
          ">
            
        <Icon size={18} strokeWidth={1.8} />
      </div>

      <div>
        <h4 className="text-sm font-semibold text-white">
          {document.title}
        </h4>

        <p className="mt-1 text-xs leading-5 text-blue-100/70 sm:text-sm">
          {document.description}
        </p>
      </div>
    </div>
  );
}

export default function EducationLoanDocuments() {
  return (
    <section className="bg-[#F8FAFC] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-100 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0B2578] shadow-sm">
            Loan Documentation
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] tracking-tight">
            Documents Required for an{" "}
            <span className=" bg-clip-text text-transparent  bg-linear-to-r from-[#186A07] via-[#10B981] to-[#0B2578]">Education Loan</span>
          </h2>
        

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#64748B] sm:text-base sm:leading-7">
            Keep these basic documents ready to make your education loan
            application process smoother. Additional documents may be required
            depending on your profile and lender requirements.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
            <span>Simple Documentation</span>
            <span className="text-slate-300">•</span>
            <span>Secure Process</span>
            <span className="text-slate-300">•</span>
            <span>Transparent Requirements</span>
          </div>
        </div>

        {/* ================= DOCUMENTS ================= */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[3fr_2fr]">

          {/* ESSENTIAL DOCUMENTS */}
          <div className="rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)] sm:p-7">

            <div className="flex items-start justify-between border-b border-slate-100 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#2c8e18]" />

                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#2c8e18]">
                    Typically Required
                  </span>
                </div>

                <h3 className="mt-2 text-xl font-bold text-[#0F172A]">
                  Essential Documents
                </h3>

                <p className="mt-1 text-sm text-[#64748B]">
                  Basic documents generally needed for an application.
                </p>
              </div>

              <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-[#2c8e18] sm:flex">
                <FileCheck2 size={21} />
              </div>
            </div>

            <div>
              {essentialDocuments.map((document, index) => (
                <DocumentRow
                  key={document.title}
                  document={document}
                  isLast={index === essentialDocuments.length - 1}
                />
              ))}
            </div>
          </div>

          {/* ADDITIONAL DOCUMENTS */}
          <div className="relative overflow-hidden rounded-[20px] bg-[#0B2578] p-5 shadow-[0_12px_35px_rgba(11,37,120,0.14)] sm:p-7">

            {/* subtle decorative lines */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full border border-white/10" />

            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
                <FileCheck2 size={21} />
              </div>

              <span className="mt-5 block text-xs font-bold uppercase tracking-[0.1em] text-emerald-300">
                If Applicable
              </span>

              <h3 className="mt-2 text-xl font-bold text-white">
                Additional Documents
              </h3>

              <p className="mt-2 text-sm leading-6 text-blue-100/70">
                Some applicants may need additional documents based on their
                education, employment, or loan requirement.
              </p>

              <div className="mt-5">
                {additionalDocuments.map((document) => (
                  <AdditionalDocument
                    key={document.title}
                    document={document}
                  />
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs leading-5 text-blue-100/75">
                  <span className="font-semibold text-white">
                    Important:
                  </span>{" "}
                  Not every applicant will need these documents.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= REQUIREMENT NOTE ================= */}
        <div className="mt-6 rounded-[18px] border border-slate-200 bg-white px-5 py-4 sm:px-6">
          <div className="flex gap-3">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#2c8e18]">
              <FileCheck2 size={14} />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[#0F172A]">
                Your exact requirements may vary
              </h4>

              <p className="mt-1 text-xs leading-5 text-[#64748B] sm:text-sm">
                Document requirements depend on the lender, course,
                institution, loan amount, applicant profile, and whether
                collateral is involved.
              </p>
            </div>
          </div>
        </div>

        {/* ================= PREPARATION STRIP ================= */}
        <div className="mt-6 rounded-[20px] border border-emerald-100 bg-emerald-50/50 p-5 sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">
                Keep Your Documents Ready
              </h3>

              <p className="mt-1 text-sm text-[#64748B]">
                Clear and valid documents can help make verification smoother.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              {preparationPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-xs font-medium text-slate-600"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981] text-white">
                    <Check size={11} strokeWidth={3} />
                  </span>

                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

