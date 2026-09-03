import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Landmark,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";

const financialNetwork = [
  {
    icon: Landmark,
    title: "Banks",
    description: "Access to established banking institutions.",
  },
  {
    icon: Building2,
    title: "NBFCs",
    description: "Explore solutions across a wider financial network.",
  },
  {
    icon: WalletCards,
    title: "Housing Finance",
    description: "Financial solutions for home ownership and related needs.",
  },
  {
    icon: Users,
    title: "Financial Institutions",
    description: "A growing ecosystem built around customer requirements.",
  },
];

const purposePoints = [
  "Simpler access to financial solutions",
  "Clear and transparent communication",
  "Customer-focused financial guidance",
];

export default function WhoIsBorofirst() {
  return (
    <section
      id="who-is-borofirst"
      aria-labelledby="who-is-borofirst-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-14 max-w-3xl lg:mb-20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#186A07]">
            <ShieldCheck size={14} />
            Who Is Borofirst?
          </div>

          <h2
            id="who-is-borofirst-heading"
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] tracking-tight"
          >
            Connecting people with
            <span className="block bg-linear-to-r from-[#0B2578] to-[#186A07] bg-clip-text text-transparent">
              better financial possibilities.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            Borofirst brings customers and financial solutions closer through a
            modern, transparent and customer-focused financial services
            experience.
          </p>
        </div>

        {/* Main split layout */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* LEFT — Visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              {/* Decorative glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2.75rem] bg-linear-to-br from-emerald-100/70 via-transparent to-blue-100/70 blur-2xl"
              />

              {/* Main visual card */}
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-linear-to-br from-slate-50 via-white to-blue-50 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
                <div className="relative min-h-[480px] overflow-hidden rounded-[1.5rem] bg-linear-to-br from-[#f2faf3] via-white to-[#eff4ff] sm:min-h-[540px]">
                  {/* Decorative financial network graphic */}
                  <div className="absolute inset-0">
                    <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-100 bg-white/70 shadow-[0_20px_60px_rgba(15,23,42,0.06)]" />

                    <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] bg-linear-to-br from-[#0B2578] to-[#186A07] text-white shadow-[0_20px_45px_rgba(11,37,120,0.25)]">
                      <div className="text-center">
                        <div className="text-xl font-black tracking-tight">
                          BORO
                        </div>
                        <div className="text-xl font-black tracking-tight">
                          FIRST
                        </div>
                      </div>
                    </div>

                    {/* Connecting lines */}
                    <div className="absolute left-1/2 top-[28%] h-[22%] w-px -translate-x-1/2 bg-linear-to-b from-emerald-200 to-[#0B2578]/20" />
                    <div className="absolute left-[27%] top-1/2 h-px w-[23%] bg-linear-to-r from-emerald-200 to-[#0B2578]/20" />
                    <div className="absolute right-[27%] top-1/2 h-px w-[23%] bg-linear-to-l from-emerald-200 to-[#0B2578]/20" />
                    <div className="absolute bottom-[28%] left-1/2 h-[22%] w-px -translate-x-1/2 bg-linear-to-t from-emerald-200 to-[#0B2578]/20" />

                    {/* Network nodes */}
                    <div className="absolute left-1/2 top-[15%] -translate-x-1/2">
                      <NetworkNode icon={Landmark} label="Banks" />
                    </div>

                    <div className="absolute left-[8%] top-1/2 -translate-y-1/2">
                      <NetworkNode icon={Building2} label="NBFCs" />
                    </div>

                    <div className="absolute right-[8%] top-1/2 -translate-y-1/2">
                      <NetworkNode icon={WalletCards} label="Housing" />
                    </div>

                    <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2">
                      <NetworkNode icon={Users} label="Customers" />
                    </div>
                  </div>

                  {/* Bottom linear */}
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-white/90 to-transparent" />

                  {/* Small trust badge */}
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/90 bg-white/90 p-4 shadow-[0_15px_35px_rgba(15,23,42,0.08)] backdrop-blur-md sm:left-6 sm:right-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#186A07]">
                        <ShieldCheck size={20} />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Our approach
                        </p>
                        <p className="text-sm font-semibold text-slate-800">
                          Finance with clarity and confidence
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat */}
              <div className="absolute -right-3 top-12 hidden rounded-2xl border border-white bg-white p-4 shadow-[0_20px_45px_rgba(15,23,42,0.12)] sm:block lg:-right-8">
                <p className="text-2xl font-bold text-[#0B2578]">17+</p>
                <p className="mt-0.5 text-xs font-medium text-slate-500">
                  Financial Partners
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div>
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#186A07]">
                BOROFIRST
              </span>
              <h3 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl">
                Making financial decisions{" "}
                <span className="text-[#0B2578]">simpler, clearer</span> and
                more confident.
              </h3>

              <div className="mt-6 space-y-4 text-base leading-7 text-slate-500">
                <p>
                  Borofirst is a modern financial services platform that
                  connects customers with suitable financial solutions through a
                  growing network of banks, NBFCs, housing finance companies and
                  other financial institutions.
                </p>

                <p>
                  We aim to make the financial journey easier to understand by
                  helping individuals, families and businesses explore available
                  options based on their requirements.
                </p>
              </div>

              {/* Purpose */}
              <div className="relative mt-8 overflow-hidden rounded-3xl border border-emerald-100 bg-linear-to-br from-emerald-50/80 via-white to-blue-50/50 p-6 sm:p-7">
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-100/60 blur-2xl"
                />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#186A07] text-white shadow-lg shadow-emerald-900/10">
                      <ShieldCheck size={21} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#186A07]">
                        Our Purpose
                      </p>

                      <h4 className="mt-0.5 text-lg font-bold text-slate-900">
                        Making finance easier to navigate.
                      </h4>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-slate-600 sm:text-base">
                    To make financial access simpler, more transparent and more
                    convenient for individuals, families and businesses.
                  </p>

                  <div className="mt-5 space-y-3">
                    {purposePoints.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 text-sm font-medium text-slate-700"
                      >
                        <CheckCircle2
                          size={17}
                          className="shrink-0 text-[#186A07]"
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold text-slate-600 transition-colors duration-300 hover:text-[#186A07]"
                >
                  Speak With Our Team
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Financial ecosystem cards */}
        <div className="mt-20 border-t border-slate-100 pt-14 lg:mt-28 lg:pt-16">
          <div className="mb-8 ">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#186A07]">
                Our Financial Network
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                One platform. A growing financial ecosystem.
              </h3>
            </div>

            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
              We work across a growing network of financial institutions to help
              customers explore relevant financial possibilities.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {financialNetwork.map(
              ({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_18px_40px_rgba(24,106,7,0.08)]"
                >
                  <span className="absolute right-4 top-4 text-xs font-bold text-slate-200">
                    0{index + 1}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-[#0B2578] transition-all duration-300 group-hover:bg-[#0B2578] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <h4 className="mt-5 text-base font-bold text-slate-900">
                    {title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {description}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex flex-col gap-5 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="max-w-2xl">
            <p className="text-lg font-bold text-slate-900">
              Finance should be easier to understand.
            </p>

            <p className="mt-1.5 text-sm leading-6 text-slate-500">
              Borofirst is committed to creating a more transparent and
              customer-focused financial experience.
            </p>
          </div>

          <a
            href="/services"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#0B2578] shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:ring-blue-200"
          >
            Explore Our Solutions
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------
   Supporting component
------------------------------ */

function NetworkNode({ icon: Icon, label }) {
  return (
    <div className="flex min-w-[82px] flex-col items-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white text-[#0B2578] shadow-[0_10px_25px_rgba(15,23,42,0.10)]">
        <Icon size={20} strokeWidth={1.7} />
      </div>

      <span className="mt-2 text-[11px] font-bold text-slate-500">{label}</span>
    </div>
  );
}
