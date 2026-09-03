import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Home,
  ShieldCheck,
  WalletCards,
  Building2,
  House,
  BriefcaseBusiness,
  CircleHelp,
} from "lucide-react";
import SEO from "../component/Seo";
import Navbar from "../component/navbar/navbar";
import Footer from "../component/footer/footer";

const solutions = [
  {
    title: "Personal Loans",
    description:
      "Flexible financial support designed around your personal needs.",
    icon: WalletCards,
    href: "/personal-loan",
  },
  {
    title: "Home Loans",
    description: "Move closer to owning the home you've imagined.",
    icon: House,
    href: "/home-loan",
  },
  {
    title: "Business Finance",
    description:
      "Financial solutions designed to support your business growth.",
    icon: BriefcaseBusiness,
    href: "/business-loan",
  },
  {
    title: "Loan Against Property",
    description: "Unlock the value of your property for your financial needs.",
    icon: Building2,
    href: "/loan-againt-property",
  },
];

function NavigationVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[540px]"
      aria-hidden="true"
    >
      {/* Background glow */}

      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-[#EAF4E7] via-white to-[#EEF2FF] blur-2xl" />

      {/* Circular rings */}

      <div className="absolute inset-[8%] rounded-full border border-[#186A07]/10" />
      <div className="absolute inset-[17%] rounded-full border border-[#0B2578]/10" />
      <div className="absolute inset-[27%] rounded-full border border-slate-200/80" />

      {/* Decorative dots */}

      <div className="absolute left-[15%] top-[24%] h-2 w-2 rounded-full bg-[#186A07] shadow-[0_0_18px_rgba(24,106,7,0.35)]" />
      <div className="absolute right-[18%] top-[30%] h-2.5 w-2.5 rounded-full bg-[#0B2578] shadow-[0_0_18px_rgba(11,37,120,0.35)]" />
      <div className="absolute bottom-[22%] left-[24%] h-2 w-2 rounded-full bg-[#0B2578]" />

      {/* Main glass panel */}

      <div className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-8">
        {/* Top label */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF4E7]">
              <ShieldCheck size={17} className="text-[#186A07]" />
            </div>

            <span className="text-xs font-semibold tracking-wide text-slate-600">
              FINANCIAL NAVIGATION
            </span>
          </div>

          <span className="rounded-full bg-[#F4F7F2] px-2.5 py-1 text-[10px] font-semibold text-[#186A07]">
            SECURE
          </span>
        </div>

        {/* 404 */}

        <div className="relative py-9 text-center">
          <div className="absolute inset-x-0 top-1/2 h-px bg-linear-to-r from-transparent via-[#186A07]/20 to-transparent" />

          <span className="relative bg-white/80 px-5 text-7xl font-black tracking-[-0.08em] text-transparent bg-clip-text bg-linear-to-r from-[#186A07] to-[#0B2578] sm:text-8xl">
            404
          </span>
        </div>

        {/* Navigation path */}

        <div className="space-y-2.5">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white/70 p-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50">
              <Home size={15} className="text-slate-600" />
            </div>

            <span className="text-xs font-medium text-slate-600">Home</span>

            <CheckCircle2 size={15} className="ml-auto text-[#186A07]" />
          </div>

          <div className="ml-5 h-3 w-px bg-linear-to-b from-[#186A07]/30 to-[#0B2578]/30" />

          <div className="flex items-center gap-3 rounded-xl border border-[#0B2578]/10 bg-[#EEF2FF]/50 p-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
              <ArrowRight size={15} className="text-[#0B2578]" />
            </div>

            <span className="text-xs font-medium text-slate-700">
              Requested page
            </span>

            <span className="ml-auto rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-[#0B2578]">
              NOT FOUND
            </span>
          </div>

          <div className="ml-5 h-3 w-px bg-linear-to-b from-[#0B2578]/30 to-[#186A07]/30" />

          <div className="flex items-center gap-3 rounded-xl border border-[#186A07]/10 bg-[#EAF4E7]/60 p-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
              <CheckCircle2 size={15} className="text-[#186A07]" />
            </div>

            <span className="text-xs font-medium text-slate-700">
              Back to safety
            </span>

            <span className="ml-auto text-[10px] font-semibold text-[#186A07]">
              READY
            </span>
          </div>
        </div>
      </div>

      {/* Floating card */}

      <div className="absolute -right-1 top-[13%] hidden rounded-2xl border border-white/80 bg-white/80 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:block">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF4E7]">
            <CheckCircle2 size={17} className="text-[#186A07]" />
          </div>

          <div>
            <p className="text-[10px] font-semibold text-slate-400">STATUS</p>

            <p className="text-xs font-bold text-slate-700">
              Let’s get you back on track
            </p>
          </div>
        </div>
      </div>

      {/* Floating data card */}

      <div className="absolute -bottom-1 -left-1 hidden rounded-2xl border border-white/80 bg-white/80 px-4 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:block">
        <div className="flex items-center gap-3">
          <div className="flex items-end gap-1">
            <span className="h-3 w-1.5 rounded-full bg-[#186A07]/30" />
            <span className="h-5 w-1.5 rounded-full bg-[#186A07]/50" />
            <span className="h-7 w-1.5 rounded-full bg-[#186A07]" />
            <span className="h-9 w-1.5 rounded-full bg-[#0B2578]" />
          </div>

          <div>
            <p className="text-[10px] font-semibold text-slate-400">
              NAVIGATION
            </p>

            <p className="text-xs font-bold text-slate-700">Path restored</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NotFound() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen overflow-x-hidden bg-linear-to-br from-[#F4F7F2] via-white to-[#EEF2FF] text-slate-900">
      <SEO
        title="404 | Page Not Found | BOROFIRST"
        description="The page you’re looking for could not be found. Explore BOROFIRST financial solutions or return to the homepage."
        noindex={true}
      />

      <Navbar />

      <main>
        {/* =========================================
            HERO
        ========================================== */}

        <section className="relative isolate overflow-hidden">
          {/* Background decoration */}

          <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-[#186A07]/5 blur-3xl" />

          <div className="pointer-events-none absolute -right-32 top-20 -z-10 h-80 w-80 rounded-full bg-[#0B2578]/5 blur-3xl" />

          <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
            {/* LEFT CONTENT */}

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#186A07]/10 bg-[#EAF4E7] px-4 py-2 text-xs font-bold tracking-wide text-[#186A07]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#186A07]" />
                404 • PAGE NOT FOUND
              </div>

              <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
                Looks Like You’ve Taken a{" "}
                <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
                  Wrong Turn.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                The page you’re looking for may have moved, changed, or no
                longer exists. Let’s get you back to the right financial
                solution.
              </p>

              {/* Buttons */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#186A07] to-[#0B2578] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_35px_rgba(24,106,7,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(11,37,120,0.20)]"
                >
                  Back to Home
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
                <span>Need help finding something?</span>

                <Link
                  to="/contact"
                  className="font-semibold text-[#186A07] underline decoration-[#186A07]/30 underline-offset-4 transition hover:text-[#0B2578]"
                >
                  Contact BOROFIRST Support →
                </Link>
              </div>
            </div>

            {/* RIGHT VISUAL */}

            <div className="relative flex items-center justify-center">
              <NavigationVisual />
            </div>
          </div>
        </section>

        {/* =========================================
            QUICK NAVIGATION
        ========================================== */}

        <section className="border-y border-slate-200/70 bg-white/70 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-[0.18em] text-[#186A07]">
                FIND YOUR WAY
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-[-0.025em] text-slate-950 sm:text-4xl">
                Where Would You Like to Go?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-500">
                Explore BOROFIRST services and find the financial solution that
                fits your needs.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {solutions.map((solution) => {
                const Icon = solution.icon;

                return (
                  <Link
                    key={solution.title}
                    to={solution.href}
                    className="group relative rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_15px_45px_rgba(15,23,42,0.045)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#186A07]/15 hover:shadow-[0_22px_55px_rgba(24,106,7,0.09)]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF4E7] transition-colors duration-300 group-hover:bg-[#186A07]">
                        <Icon
                          size={22}
                          className="text-[#186A07] transition-colors duration-300 group-hover:text-white"
                        />
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-[#186A07]/20 group-hover:text-[#186A07]">
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-900">
                      {solution.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {solution.description}
                    </p>

                    <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-[#186A07]">
                      Explore
                      <ChevronRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================
            SUPPORT CTA
        ========================================== */}

        <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-linear-to-br from-[#186A07] to-[#0B2578] px-7 py-12 text-white shadow-[0_25px_70px_rgba(11,37,120,0.18)] sm:px-12 sm:py-16">
            {/* Decorative elements */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-sm font-semibold text-white/75">
                  <CircleHelp size={17} />
                  BOROFIRST SUPPORT
                </div>

                <h2 className="mt-4 text-3xl font-bold tracking-[-0.025em] sm:text-4xl">
                  Still Need Help?
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                  Our team is here to help you find the right direction.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#0B2578] transition hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  Contact Us
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
