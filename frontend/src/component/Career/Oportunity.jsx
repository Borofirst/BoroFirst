import {careerCategories} from "../../data/careerdata"


import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Handshake,
  Headset,
  Megaphone,
  TrendingUp,
} from "lucide-react";

const CareerCard = ({
  title,
  description,
  icon: Icon,
  image,
  roles,
  technologies,
  accent,
}) => {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#186A07]/20 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
      {/* Image */}
      <div className="relative h-56 overflow-hidden sm:h-60">
        <img
          src={image}
          alt={`${title} career opportunities at Borofirst`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />

        {/* Color Glow */}
        <div
          className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${accent} blur-3xl`}
        />

        {/* Icon */}
        <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/90 text-[#186A07] shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:bg-white">
          <Icon size={21} strokeWidth={1.8} />
        </div>

        {/* Arrow */}
        <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/90 text-slate-700 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#186A07] group-hover:text-white">
          <ArrowUpRight size={17} />
        </div>

        {/* Image Bottom Title */}
        <div className="absolute bottom-5 left-5 right-5">
          <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
            Career Path
          </div>

          <h3 className="text-2xl font-extrabold tracking-tight text-white">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-sm leading-6 text-slate-500">
          {description}
        </p>

        {/* Career Count */}
        <div className="mt-5 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF5E8] text-[#186A07]">
            <TrendingUp size={15} />
          </div>

          <span className="text-xs font-bold text-slate-700">
            {roles.length}+ Career Paths
          </span>

        </div>

        {/* Roles */}
        <div className="mt-5">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Possible Roles
          </p>

          <div className="flex flex-wrap gap-2">
            {roles.slice(0, 4).map((role) => (
              <span
                key={role}
                className="rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1.5 text-[10px] font-semibold text-slate-600 transition-colors duration-300 group-hover:border-emerald-100 group-hover:bg-[#F7FBF6]"
              >
                {role}
              </span>
            ))}
          </div>

          {roles.length > 4 && (
            <p className="mt-2 text-[10px] font-semibold text-[#186A07]">
              +{roles.length - 4} more opportunities
            </p>
          )}
        </div>

        {/* Technologies */}
        {technologies && (
          <div className="mt-5">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Technology
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg bg-[#EAF5E8] px-2.5 py-1.5 text-[10px] font-bold text-[#186A07]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
};



const CareerOpportunities = () => {
  return (
    <section
      id="career-opportunities"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(24,106,7,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(24,106,7,0.1)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-[#F7FBF6] px-3.5 py-2 shadow-sm">
            <Award
              size={14}
              className="text-[#186A07]"
              strokeWidth={2}
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#186A07]">
              Career Opportunities
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            Find Your{" "}
            <span className="bg-gradient-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
              Opportunity
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Explore career paths across business, customer experience,
            technology, sales, marketing, and leadership at Borofirst.
          </p>
        </header>

        {/* Career Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careerCategories.map((career,index) => (
            <CareerCard key={index} {...career} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#186A07] to-[#0B2578] px-6 py-8 shadow-[0_25px_60px_rgba(11,37,120,0.16)] sm:px-10 sm:py-10">
          {/* Decorations */}
          <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10" />

          <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:35px_35px]" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                Don't See Your Role?
              </div>

              <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Your next opportunity could start here.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
                Send us your resume and let us know how your skills could
                contribute to the Borofirst team.
              </p>
            </div>

            <a
              href="#send-resume"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#0B2578] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Send Your Resume
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;