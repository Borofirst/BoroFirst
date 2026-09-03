import React from "react";
import {
  ArrowRight,
  Award,
  Building2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

/* =========================================================
   BOROFIRST — LEADERSHIP / MANAGEMENT SECTION
   React + Tailwind CSS
   ========================================================= */

const leadershipFocus = [
  "Strategic Growth",
  "Customer Experience",
  "Financial Partnerships",
  "Business Development",
  "Digital Transformation",
];

const philosophy = [
  {
    number: "01",
    icon: Users,
    title: "Customer First",
    description:
      "Financial services should be built around real customer needs, clarity and convenience.",
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Responsible Growth",
    description:
      "Build sustainably while maintaining professionalism, accountability and long-term relationships.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Long-Term Trust",
    description:
      "Create lasting relationships through transparency, responsible communication and consistent service.",
  },
];

const priorities = [
  {
    icon: ShieldCheck,
    title: "Customer Trust",
    description: "Creating transparent and dependable financial experiences.",
  },
  {
    icon: Target,
    title: "Financial Accessibility",
    description: "Making financial solutions easier to understand and explore.",
  },
  {
    icon: Building2,
    title: "Strong Partnerships",
    description:
      "Building meaningful relationships across the financial ecosystem.",
  },
  {
    icon: Sparkles,
    title: "Sustainable Innovation",
    description:
      "Using technology and better processes to create simpler experiences.",
  },
];

function LeadershipImage({ src, alt, className = "", priority = false }) {
  return (
    <div
      className={`relative overflow-hidden bg-linear-to-br from-slate-100 via-white to-blue-50 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />

      {/* Elegant fallback surface */}
      <div className="absolute inset-0 -z-0 flex items-center justify-center bg-linear-to-br from-slate-100 via-white to-emerald-50">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#0B2578] shadow-lg">
            <Users size={28} strokeWidth={1.5} />
          </div>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
            Leadership Portrait
          </p>
        </div>
      </div>
    </div>
  );
}

function PhilosophyCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
      <div className="absolute right-5 top-4 text-4xl font-black tracking-tighter text-slate-100 transition-colors duration-300 group-hover:text-emerald-50">
        {item.number}
      </div>

      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#eef8f0] to-[#eff4ff] text-[#0B2578] transition-all duration-300 group-hover:from-[#0B2578] group-hover:to-[#186A07] group-hover:text-white">
          <Icon size={21} strokeWidth={1.7} />
        </div>

        <h4 className="mt-6 text-lg font-bold tracking-tight text-slate-900">
          {item.title}
        </h4>

        <p className="mt-2.5 text-sm leading-6 text-slate-500">
          {item.description}
        </p>
      </div>
    </article>
  );
}

function PriorityCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="group flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-[#0B2578] transition-all duration-300 group-hover:bg-[#0B2578] group-hover:text-white">
        <Icon size={20} strokeWidth={1.7} />
      </div>

      <div>
        <h4 className="font-bold text-slate-900">{item.title}</h4>
        <p className="mt-1.5 text-sm leading-6 text-slate-500">
          {item.description}
        </p>
      </div>
    </article>
  );
}

function FounderCard({ name, role, image, alt, focus = [] }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <LeadershipImage
          src={image}
          alt={alt}
          className="absolute inset-0 h-full w-full"
        />

        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-slate-950/35 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0B2578] shadow-lg backdrop-blur-md">
          {role}
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#186A07]">
          Founding Leadership
        </p>

        <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
          {name}
        </h3>

        <p className="mt-1 text-sm font-semibold text-slate-500">{role}</p>

        <div className="mt-5 rounded-2xl bg-slate-50 p-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
            Leadership Profile
          </p>
          {name == "Sachin Rathore" ? (
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Sachin Rathore is the Founder of BOROFIRST, providing the vision
              and strategic direction behind the organization. His focus is on
              building a trusted, customer-centric financial services platform
              that makes access to financial solutions simpler, more
              transparent, and more accessible.
            </p>
          ) : (
            <p className="mt-2 text-sm leading-6 text-slate-500">
       As Co-Founder of BOROFIRST Services Private Limited, Mohit Rathore leads initiatives across Innovation, Business Development, and Growth. His focus is on identifying new opportunities, building strategic partnerships, developing scalable solutions, and driving sustainable business expansion. Through a forward-thinking and technology-driven approach, he contributes to shaping BOROFIRST into a modern, customer-focused financial services platform.
            </p>
          )}
        </div>

        {focus.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {focus.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function BorofirstLeadership() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="relative overflow-hidden bg-white py-15 sm:py-20 lg:pt-25 lg:pb-5"
    >
      <div className="relative mx-auto max-w-[1380px] px-5 ">
        {/* =====================================================
            SECTION INTRO
            ===================================================== */}
        <header className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#186A07]">
            <Award size={14} />
            Leadership
          </div>

          <h2
            id="leadership-heading"
            className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Leadership
            <span className="bg-linear-to-r from-[#0B2578] via-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
              {" "}
              With Purpose
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            Building a trusted financial platform through vision, responsibility
            and long-term commitment.
          </p>
        </header>

        {/* =====================================================
            PRIMARY EXECUTIVE — ATUL RATHORE
            ===================================================== */}

        <div className="mt-16 lg:mt-20">
          <div className="mb-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-100" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Executive Leadership
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>

          <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white  lg:rounded-[2.5rem]">
            <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">
              {/* Portrait */}
              <div className="relative min-h-[440px] overflow-hidden bg-linear-to-br from-slate-100 via-white to-emerald-50 sm:min-h-[560px] lg:min-h-[650px]">
                <LeadershipImage
                  src="/images/leadership/atul-rathore.jpg"
                  alt="Atul Rathore, MD & CEO of BOROFIRST"
                  priority
                  className="absolute inset-0 h-full w-full"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#0B2578] shadow-lg backdrop-blur-md">
                    <ShieldCheck size={14} />
                    Executive Leadership
                  </div>
                </div>
              </div>

              {/* Profile content */}
              <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14 xl:p-16">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#186A07]">
                  Managing Director & Chief Executive Officer
                </p>

                <h3 className="mt-3 text-4xl font-bold tracking-[-0.035em] text-slate-950 sm:text-5xl">
                  Atul Rathore
                </h3>

                <div className="mt-5 h-1 w-16 rounded-full bg-linear-to-r from-[#0B2578] to-[#10B981]" />

                {/* Leadership Perspective */}
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    Leadership Perspective
                  </p>

                  <blockquote className="mt-3 border-l-2 border-emerald-300 pl-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                    “At BOROFIRST, our focus is to make financial solutions more
                    accessible, transparent, and customer-centric. We are
                    committed to building lasting relationships by combining
                    responsible financial practices with simple, dependable
                    experiences for every customer.”
                  </blockquote>
                </div>

                {/* Profile */}
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    Leadership Profile
                  </p>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                    Atul Rathore serves as the Managing Director & Chief
                    Executive Officer of BOROFIRST, providing strategic
                    direction and leadership for the organization. His focus is
                    on building a customer-first financial services business
                    driven by transparency, responsible growth, and better
                    financial experiences.
                  </p>
                </div>

                {/* Focus */}
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    Leadership Focus
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {leadershipFocus.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-600 transition-colors hover:border-emerald-200 hover:bg-emerald-50 hover:text-[#186A07]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Executive metadata */}
                <div className="mt-9 grid grid-cols-2 gap-3 border-t border-slate-100 pt-7">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Position
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-slate-800">
                      MD & CEO
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Organization
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-slate-800">
                      BOROFIRST
                    </p>
                  </div>
                </div>

                {/* Professional profile */}
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <a
                    href="/about/leadership/atul-rathore"
                    className="group/link inline-flex items-center gap-2 rounded-xl bg-[#0B2578] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#092064] focus:outline-none focus:ring-4 focus:ring-blue-100"
                  >
                    View Leadership Profile
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </a>

                  <a href="#" aria-label="Atul Rathore professional profile">
                    <FaLinkedin
                      size={18}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-500 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-[#0B2578] focus:outline-none focus:ring-4 focus:ring-blue-100"
                    />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* =====================================================
            FOUNDING LEADERSHIP
            ===================================================== */}
        <div className="mt-24 lg:mt-32">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#186A07]">
              Founding Leadership
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-[-0.025em] text-slate-950 sm:text-4xl">
              The People Behind BOROFIRST
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              The founding leadership team contributes to the vision, direction
              and continued development of BOROFIRST.
            </p>
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-2">
            <FounderCard
              name="Sachin Rathore"
              role="Co-Founder"
              image="/images/leadership/sachin-rathore.jpg"
              alt="Sachin Rathore, Founder of BOROFIRST"
              focus={["Vision", "Business Strategy", "Organizational Growth"]}
            />

            <FounderCard
              name="Mohit Rathore"
              role="Co-Founder"
              image="/images/leadership/mohit.jpg"
              alt="Mohit Rathore, Co-Founder of BOROFIRST"
              focus={["Innovation", "Business Development", "Growth"]}
            />
          </div>
        </div>

        {/* =====================================================
            LEADERSHIP PHILOSOPHY
            ===================================================== */}
        <div className="mt-24 lg:mt-32">
          <div className="rounded-[2rem] bg-linear-to-br from-slate-50 via-white to-emerald-50/50 p-6 sm:p-9 lg:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#186A07]">
                What We Believe
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-[-0.025em] text-slate-950 sm:text-4xl">
                Our Leadership Philosophy
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                The way we lead shapes the way we serve our customers, partners
                and communities.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {philosophy.map((item) => (
                <PhilosophyCard key={item.number} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            LEADERSHIP PRIORITIES
            ===================================================== */}
        <div className="mt-24 lg:mt-32">
          <div className="rounded-4xl bg-linear-to-br from-slate-50 via-white to-emerald-50/50 p-6 sm:p-9 lg:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#186A07]">
                What Guides Us
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Leadership Priorities
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                The principles that help shape our approach to customers,
                partnerships, growth and innovation.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {priorities.map((item) => (
                <PriorityCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
