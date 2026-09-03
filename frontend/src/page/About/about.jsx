import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Handshake,
  Landmark,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
} from "lucide-react";

import BorofirstLeadership from "./Lidership";
import WhoIsBorofirst from "./Intruduction";
import SEO from "../../component/Seo";

const aboutStats = [
  {
    value: "17+",
    label: "Financial Partners",
    icon: Handshake,
  },
  {
    value: "6+",
    label: "Loan Solutions",
    icon: Landmark,
  },
  {
    value: "Pan-India",
    label: "Financial Network",
    icon: Building2,
  },
  {
    value: "Customer",
    label: "First Approach",
    icon: Users,
  },
];

const financialSolutions = [
  "Home Loans",
  "Personal Loans",
  "Business Finance",
  "Loan Against Property",
  "Car loan",
  "Gold Loan",
];

const partners = [
  "HDFC",
  "PNB",
  "Axis Bank",
  "IDBI",
  "Kotak",
  "Tata Capital",
  "Punjab National Bank",
  "Kotak Mahindra",
  "Cholamandalam Finance",
  "PNB Housing",
];

function StatCard({ value, label, icon: Icon }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_18px_45px_rgba(24,106,7,0.10)]">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-50 transition-transform duration-500 group-hover:scale-150" />

      <div className="relative">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-[#0B2578] to-[#186A07] text-white shadow-lg shadow-blue-900/10">
          <Icon size={20} strokeWidth={1.8} />
        </div>

        <div className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          {value}
        </div>

        <p className="mt-1 text-sm font-medium text-slate-500">{label}</p>
      </div>
    </div>
  );
}

export default function AboutBorofirst() {
  return (
    <>
      <SEO
        title="About Borofirst | Building Smarter Financial Solutions"
        description="Learn more about Borofirst, our approach to financial solutions, customer experience and responsible lending."
        canonical="https://borofirst.com/about"
      />

      <main>
        <section
          id="about"
          aria-labelledby="about-borofirst-title"
          className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
        >
          {/* Background decoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-50/70 blur-3xl" />
            <div className="absolute right-[-180px] top-[30%] h-[500px] w-[500px] rounded-full bg-blue-50/70 blur-3xl" />

            <div className="absolute left-[8%] top-[18%] hidden h-2 w-2 rounded-full bg-emerald-400/40 lg:block" />
            <div className="absolute left-[12%] top-[48%] hidden h-1.5 w-1.5 rounded-full bg-blue-500/30 lg:block" />
            <div className="absolute right-[10%] top-[18%] hidden h-2 w-2 rounded-full bg-emerald-400/40 lg:block" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#186A07]">
                <Sparkles size={14} />
                About Borofirst
              </div>

              <h2
                id="about-borofirst-title"
                className="text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl"
              >
                Financial Solutions
                <span className="block bg-linear-to-r from-[#0B2578] via-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
                  Built Around Your Future.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
                Borofirst is a modern financial services platform focused on
                helping individuals, families and businesses explore suitable
                financial solutions with greater clarity, confidence and
                convenience.
              </p>
            </div>
            <WhoIsBorofirst />

            {/* Stats */}
            <div className="mt-24 border-t border-slate-100 pt-12 lg:mt-28 lg:pt-16">
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#186A07]">
                    Borofirst at a Glance
                  </p>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    Built to make finance more accessible.
                  </h3>
                </div>

                <p className="max-w-md text-sm leading-6 text-slate-500">
                  A customer-focused approach backed by a growing financial
                  ecosystem.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {aboutStats.map((stat) => (
                  <StatCard key={stat.label} {...stat} />
                ))}
              </div>
            </div>

            {/* Financial Solutions Strip */}
            <div className="mt-20 overflow-hidden rounded-[2rem] bg-linear-to-r from-[#071a59] via-[#0B2578] to-[#123f86] shadow-[0_25px_70px_rgba(11,37,120,0.16)] lg:mt-24">
              <div className="relative px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-28 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl"
                />

                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-xl">
                    <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
                      <Landmark size={15} />
                      Financial Solutions
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      Solutions for the milestones that matter.
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-blue-100/75 sm:text-base">
                      Explore financial solutions designed to support your
                      personal goals, family aspirations and business ambitions.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5 lg:max-w-xl lg:justify-end">
                    {financialSolutions.map((solution) => (
                      <span
                        key={solution}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-emerald-300"
                          strokeWidth={2}
                        />
                        {solution}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Partner / Trust Area */}
            <div className="mt-20 lg:mt-24 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#186A07]">
                  Our Financial Network
                </p>

                <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  Connected to a growing ecosystem of financial institutions.
                </h3>

                <p className=" mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
                  Borofirst brings together a broad network of financial
                  partners to help customers explore solutions with greater
                  choice and confidence.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {partners.map((partner) => (
                  <div
                    key={partner}
                    className="group flex min-h-[76px] items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_15px_35px_rgba(15,23,42,0.07)]"
                  >
                    <span className="text-sm font-bold tracking-wide text-slate-500 transition-colors group-hover:text-[#0B2578]">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <BorofirstLeadership />

            {/* Bottom Statement */}
             <div className="mt-20 overflow-hidden rounded-[2rem] bg-linear-to-r from-[#071a59] via-[#0B2578] to-[#123f86] shadow-[0_25px_70px_rgba(11,37,120,0.16)] lg:mt-24">
              <div className="relative px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-28 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl"
                />
                <div className="relative  mx-auto max-w-3xl text-center ">
                        {/* <div className=" "> */}
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-50 to-blue-50 text-[#0B2578]">
                  <ShieldCheck size={24} strokeWidth={1.7} />
                </div>

                <h3 className="text-2xl font-bold text-center tracking-tight text-white sm:text-3xl">
                  Your financial journey deserves clarity.
                </h3>
                       <p className="mt-4 text-sm leading-7 text-blue-100/75  text-center  sm:text-base">
                  From exploring your options to taking the next step, Borofirst
                  is committed to creating a financial experience that puts
                  people first.
                </p>

                <a
                  href="/contact"
                        className=" mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15"

                >
                  Start your journey
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 hover:translate-x-1"
                  />
                </a>

                {/* </div> */}
              </div>
            </div>
            </div>

          
          </div>
        </section>
      </main>
    </>
  );
}
