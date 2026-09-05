import React, { useState } from "react";
import {
  ArrowRight,
  CarFront,
  Check,
  FileText,
  IdCard,
  Landmark,
  Receipt,
  ShieldCheck,
} from "lucide-react";

const commonDocuments = [
  {
    icon: IdCard,
    title: "Identity & Address Proof",
    description: "Valid KYC and address proof for applicant verification.",
    documents: [
      "PAN Card",
      "Aadhaar Card or other valid KYC document",
      "Valid address proof",
    ],
  },
  {
    icon: Landmark,
    title: "Bank Statement",
    description:
      "Recent bank statements to assess your banking activity and repayment capacity.",
    documents: [
      "Recent bank statement",
      "Salary account statement, where applicable",
    ],
  },
  {
    icon: FileText,
    title: "Income Proof",
    description:
      "Income documents required to assess your repayment capacity.",
    documents: [
      "Latest salary slip for salaried applicants",
      "Form 16, where applicable",
      "ITR / financial documents for self-employed applicants",
    ],
  },
  {
    icon: Receipt,
    title: "Application & Photograph",
    description:
      "Basic documents required to initiate your car loan application.",
    documents: [
      "Completed loan application form",
      "Recent passport-size photograph",
    ],
  },
];

const vehicleDocuments = {
  new: {
    title: "New Car Documents",
    description: "Documents related to the vehicle you are planning to purchase.",
    items: [
      "Dealer quotation / Proforma Invoice",
      "Booking receipt, where applicable",
    ],
  },

  used: {
    title: "Used Car Documents",
    description:
      "Additional documents may be required to verify the pre-owned vehicle.",
    items: [
      "Vehicle Registration Certificate (RC)",
      "Valid motor insurance",
      "Dealer / seller details",
      "Vehicle valuation / inspection, where applicable",
    ],
  },
};

const DocumentsRequired = () => {
  const [loanType, setLoanType] = useState("new");

  const vehicle = vehicleDocuments[loanType];

                    const handleApplyCarLoan = () => {
    // Replace with your eligibility section ID or route.
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
   
                             <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2 shadow-sm">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/40" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#186A07]" />
                        </span>
          
                        <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
                               
            Simple Documentation
                        </span>
                      </div>

            {/* Heading */}


                   <h2 className=" text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.45rem]">
                              Documents Required for{" "}
                        <span className="block bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent ">
                            Your Car Loan
                            
                        </span>
                        
                      </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
            Keep your essential documents ready for a smooth and efficient
            car loan application process.
          </p>
        </div>

        {/* Loan Type Switch */}
        <div className="mx-auto mt-8 flex max-w-md rounded-xl border border-slate-200 bg-white p-1">
          <button
            type="button"
            onClick={() => setLoanType("new")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
              loanType === "new"
                ? "bg-linear-to-r from-[#186A07] to-[#0B2578] text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <CarFront size={17} />
            New Car Loan
          </button>

          <button
            type="button"
            onClick={() => setLoanType("used")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
              loanType === "used"
                ? "bg-[#186A07] text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <CarFront size={17} />
            Used Car Loan
          </button>
        </div>
           {/* Vehicle Documents */}
        <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#186A07] shadow-sm
                      transition-all duration-300 ease-o  ut
                      hover:bg-[#118A09]
                      hover:text-white
                       hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]

            
            ">
              <CarFront size={21} />
            </div>

            <div className="flex-1">
              <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                {vehicle.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {vehicle.description}
              </p>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {vehicle.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 rounded-lg bg-white px-3 py-2.5 text-sm text-slate-700"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-[#2c8e18]"
                      strokeWidth={2.5}
                    />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Documents */}
        <div className="mt-10   grid gap-5 md:grid-cols-2">
          {commonDocuments.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-2xl group border border-slate-200 bg-white p-5 transition-shadow duration-300 hover:shadow-[0_12px_35px_rgba(15,23,42,0.07)] sm:p-6"
              >
                <div className="flex items-start gap-4">

                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl 
                  bg-emerald-50 text-[#186A07]
                  
                   
                        transition-all duration-300 ease-out
                      group-hover:bg-[#118A09]
                      group-hover:text-white
                        group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]
                        group-hover:scale-110
                  ">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Checklist */}
                <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
                  {item.documents.map((document, documentIndex) => (
                    <div
                      key={documentIndex}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-emerald-600"
                        strokeWidth={2.5}
                      />

                      <span>{document}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

     

        {/* Note */}
        <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-5 text-slate-400">
          Document requirements may vary depending on your profile, income
          source, vehicle, credit assessment and lender policy. Additional
          documents may be requested where applicable.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:flex-row sm:p-6">
          <div>
            <h3 className="text-base font-bold text-slate-900 sm:text-lg">
              Have your documents ready?
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Start your car loan application today.
            </p>
          </div>

          <button
          onClick={handleApplyCarLoan}
            type="button"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-5 py-3 text-sm font-semibold text-white transition-all duration-300  sm:w-auto"
          >
            Apply for Car Loan

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

      </div>
    </section>
  );
};

export default DocumentsRequired;