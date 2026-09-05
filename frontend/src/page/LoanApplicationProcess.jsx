import { ArrowRight } from "lucide-react";
import { ProcessCard } from "../component/layout/processCard";
import { processSteps } from "../data/LoanApplicationProcess";
import { Link } from "react-router-dom";

const LoanApplicationProcess = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-24 h-52 w-52 rounded-full bg-emerald-100 blur-3xl opacity-40"></div>

        <div className="absolute right-10 bottom-24 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-40"></div>

        <div className="absolute left-1/2 top-1/3 h-8 w-8 rounded-full bg-emerald-200"></div>

        <div className="absolute right-1/4 top-20 h-5 w-5 rounded-full bg-blue-200"></div>

        <div className="absolute left-20 bottom-20 h-6 w-6 rounded-full bg-emerald-300"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
                                      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#186A07]" />
            </span>

            <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
             How It Works
            </span>
          </div>

          {/* Heading */}

          <h2 className=" text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.45rem]">
              Apply for Your Loan in {" "}
            <span className="lg:block bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent ">
              Just 5 Simple Steps
            </span>
           
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our streamlined application process ensures a fast, secure, and
            hassle-free borrowing experience from start to finish.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-24">
          {/* Desktop Timeline Line */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-1 -translate-y-1/2 rounded-full bg-linear-to-r from-[#186A07] to-[#0B2578] lg:block"></div>

          {/* Mobile Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 rounded-full bg-linear-to-r from-[#186A07] to-[#0B2578] to-blue-500 lg:hidden"></div>

          {/* Timeline Grid */}
          <div className="grid gap-5 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`
                  relative
                  ${index % 2 === 0 ? "lg:mt-0" : "lg:mt-24"}
                `}
              >
                {/* ProcessCard will be added in Part 2 */}
                <ProcessCard step={step} />
              </div>
            ))}
          </div>
        </div>
        {/* Bottom CTA */}
        <div className="mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-linear-to-r from-[bg-linear-to-r from-[#186A07] to-[#0B2578]] to-[#0B2578] px-8 py-12 shadow-2xl">
            {/* Decorative Blur */}
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-white/10 blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
              {/* CTA Content */}
              <div className="max-w-2xl text-center lg:text-left">
                <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white">
                  Start Today
                </span>

                <h3 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                  Ready to Get Started?
                </h3>

                <p className="mt-4 text-lg leading-8 text-emerald-50">
                  Apply today and receive expert guidance throughout your loan
                  journey. Our team is here to make the process simple, secure,
                  and stress-free.
                </p>
              </div>

              {/* CTA Button */}
              <Link to="contact">
                            <button className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-emerald-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                Apply for Loan
                <ArrowRight className="transition-transform w-5 h-5 duration-300 group-hover:translate-x-1"/>
              </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanApplicationProcess;
