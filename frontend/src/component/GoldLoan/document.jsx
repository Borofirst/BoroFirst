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
                                 Documents{" "}
                        <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent ">
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
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300  hover:shadow-lg"
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