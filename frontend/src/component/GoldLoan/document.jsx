import React from "react";
import {
  Fingerprint,
  MapPin,
  Camera,
  Check,
  ArrowRight,
} from "lucide-react";

const documents = [
  {
    id: 1,
    icon: Fingerprint,
    title: "Identity Proof",
    description: "Any one valid government-issued ID.",
    items: [
      "Aadhaar Card",
      "PAN / Form 60",
      "Passport",
      "Driving Licence",
      "Voter ID",
    ],
  },
  {
    id: 2,
    icon: MapPin,
    title: "Address Proof",
    description: "A valid document confirming your address.",
    items: [
      "Aadhaar Card",
      "Passport",
      "Driving Licence",
      "Voter ID",
      "Other accepted address proof",
    ],
  },
  {
    id: 3,
    icon: Camera,
    title: "Photograph",
    description: "A recent photograph may be required.",
    items: [
      "Recent passport-size photo",
      "Clear and recent image",
      "As per KYC requirements",
    ],
  },
];

const GoldLoanDocuments = () => {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
            Simple Documentation
          </span>

       
        <h2
            id="gold-loan-heading"
            className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-[#186A07] sm:text-5xl lg:text-[3.7rem]"
          >
            Documents{" "}
            <span className="relative inline-block text-[#0F172A]">
               You'll Need
         
            </span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
            Keep your basic KYC documents ready for a smooth Gold Loan
            application with BOROFIRST.
          </p>
        </div>

        {/* Document Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {documents.map((document) => {
            const Icon = document.icon;

            return (
              <div
                key={document.id}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl group-hover:scale-110 bg-emerald-50 text-[#2c8e18] transition-colors duration-300 group-hover:bg-[#118A09] group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-semibold text-slate-300">
                    0{document.id}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900">
                  {document.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {document.description}
                </p>

                {/* Documents */}
                <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                  {document.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        <Check size={12} strokeWidth={3} />
                      </span>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 sm:flex-row">
          <div>
            <p className="text-sm font-semibold text-slate-800">
              Have your documents ready?
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Final documentation requirements may vary as per applicable KYC
              and product requirements.
            </p>
          </div>

          <button
            type="button"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg"
          >
            Apply for Gold Loan
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GoldLoanDocuments;