import React from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Headphones,
  Megaphone,
  Settings2,
  Sparkles,
  TrendingUp,
  Upload,
  Users,
} from "lucide-react";

const careerAreas = [
  { label: "Marketing", icon: Megaphone },
  { label: "Sales", icon: TrendingUp },
  { label: "BPO", icon: Headphones },
  { label: "Technology", icon: Code2 },
  { label: "Management", icon: Users },
  { label: "Operations", icon: Settings2 },
];

const floatingCards = [
  {
    title: "Career Growth",
    text: "Learn • Grow • Contribute",
    icon: TrendingUp,
    position:
      "right-[-1rem] top-[5%] sm:right-[-2rem] sm:top-[7%] lg:right-[-3rem]",
  },
  {
    title: "Great Teams",
    text: "Collaborate & innovate",
    icon: Users,
    position: "left-[-1rem] bottom-[8%] sm:left-[-2rem] lg:left-[-3rem]",
  },
  {
    title: "Your Opportunity",
    text: "Find your next role",
    icon: BriefcaseBusiness,
    position:
      "right-[-0.75rem] bottom-[-1rem] sm:right-[-1.5rem] lg:right-[-2rem]",
  },
];

const CareerHero = () => {
  const scrollToOpportunities = () => {
    document
      .getElementById("career-opportunities")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToResume = () => {
    document
      .getElementById("send-resume")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      aria-labelledby="career-hero-title"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-linear(circle_at_8%_20%,rgba(24,106,7,0.09),transparent_30%),radial-linear(circle_at_90%_20%,rgba(11,37,120,0.08),transparent_32%),linear-linear(to_bottom,#ffffff,#f7fbf6_58%,#ffffff)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.18] bg-[linear-linear(rgba(24,106,7,0.13)_1px,transparent_1px),linear-linear(90deg,rgba(24,106,7,0.13)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-linear(to_bottom,black,transparent_75%)]"
      />

      <div
        aria-hidden="true"
        className="absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 top-28 -z-10 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-24 lg:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-[0.94fr_1.06fr] lg:gap-10 xl:gap-16">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/85 px-3.5 py-2 shadow-sm backdrop-blur-md">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EAF5E8] text-[#186A07]">
                <Sparkles size={13} strokeWidth={2} />
              </span>

              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#186A07]">
                Careers at Borofirst
              </span>
            </div>

            <h1
              id="career-hero-title"
              className="max-w-3xl text-[2.7rem] font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-5xl md:text-6xl lg:text-[4.15rem] xl:text-[4.55rem]"
            >
              Build Your Career.
              <span className="mt-1 block">
                Shape{" "}
                <span className="bg-linear-to-r from-[#186A07] via-[#16813c] to-[#0B2578] bg-clip-text text-transparent">
                  Better Financial Journeys.
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-500 sm:text-base sm:leading-8 lg:text-[17px]">
              Join a growing financial services team where your ideas, skills,
              and ambition can contribute to better experiences for customers
              and stronger financial solutions.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={scrollToOpportunities}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(11,37,120,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(11,37,120,0.22)] focus:outline-none focus:ring-4 focus:ring-emerald-100"
              >
                Explore Opportunities
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={scrollToResume}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-5 py-3.5 text-sm font-bold text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#186A07]/20 hover:bg-[#F7FBF6] hover:text-[#186A07] focus:outline-none focus:ring-4 focus:ring-emerald-100"
              >
                <Upload
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                Send Your Resume
              </button>
            </div>

            {/* Career areas */}
            <div className="mt-9 border-t border-slate-200/70 pt-6">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Explore career areas
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                {careerAreas.map(({ label, icon: Icon }, index) => (
                  <React.Fragment key={label}>
                    <div className="group inline-flex items-center gap-2 text-xs font-semibold text-slate-600 transition-colors duration-200 hover:text-[#186A07]">
                      <Icon
                        size={15}
                        strokeWidth={1.8}
                        className="text-[#186A07] transition-transform duration-200 group-hover:scale-110"
                      />
                      {label}
                    </div>

                    {index < careerAreas.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="hidden h-4 w-px bg-slate-200 sm:block"
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-[650px] lg:max-w-none">
            {/* Decorative glow */}

            <img
              src="/opportunity.png"
              alt="Happy couple outside their home"
              className="h-[500px] scale-x-[-1] w-full rounded-[26px] object-cover"
            />

            {/* Floating cards */}
            {floatingCards.map(({ title, text, icon: Icon, position }) => (
              <div
                key={title}
                className={`absolute z-50 ${position} hidden min-w-[175px] rounded-2xl border border-white/80 bg-white/90 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:flex sm:items-center sm:gap-3 lg:min-w-[195px]`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF5E8] text-[#186A07]">
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-extrabold text-slate-900">
                    {title}
                  </p>
                  <p className="mt-1 text-[10px] font-medium text-slate-400">
                    {text}
                  </p>
                </div>
              </div>
            ))}

            {/* Mobile visual badge */}
            <div className="absolute bottom-[-0.5rem] left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white bg-white/95 px-3 py-2 text-[10px] font-bold text-slate-600 shadow-lg backdrop-blur sm:hidden">
              <span className="h-2 w-2 rounded-full bg-[#186A07]" />
              People • Technology • Finance • Growth
            </div>
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 lg:px-10">
        <div className="h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </section>
  );
};

export default CareerHero;
