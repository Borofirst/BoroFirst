import {
  Award,
  GraduationCap,
  Lightbulb,
  Link,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import CommenCar2 from "../common/CommenCar2";

const reasons = [
  {
    number: "01",
    title: "Grow With Opportunity",
    description:
      "Work in an environment where you can develop your skills and take on new responsibilities.",
    icon: TrendingUp,
  },
  {
    number: "02",
    title: "Keep Learning",
    description:
      "Gain exposure to financial services, technology, customer experience, sales, and business operations.",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Work Together",
    description:
      "Collaborate with people across different functions to solve real customer and business challenges.",
    icon: Users,
  },
  {
    number: "04",
    title: "Make an Impact",
    description:
      "Your work contributes to creating smoother and more accessible financial experiences.",
    icon: Target,
  },
  {
    number: "05",
    title: "Think & Innovate",
    description:
      "Bring new ideas and better ways of working to a fast-moving financial services environment.",
    icon: Lightbulb,
  },
  {
    number: "06",
    title: "Build Your Career",
    description:
      "Take opportunities to strengthen your expertise and grow with the organization.",
    icon: Award,
  },
];

const WhyJoinBorofirst = () => {
  return (
    <section
      id="why-join-borofirst"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.16]
          bg-[linear-linear(rgba(24,106,7,0.10)_1px,transparent_1px),linear-linear(90deg,rgba(24,106,7,0.10)_1px,transparent_1px)]
          bg-size-[52px_52px]
          mask-[linear-linear(to_bottom,black,transparent_85%)]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-100
              bg-[#EAF5E8]
              px-4
              py-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#186A07]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#186A07]" />
            Why Join Borofirst
          </div>

          {/* Heading */}
          <h2
            className="
              text-3xl
              font-extrabold
              leading-tight
              tracking-[-0.035em]
              text-slate-950
              sm:text-4xl
              lg:text-5xl
            "
          >
            More Than a Job.{" "}
            <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
              Build Your Future With Us.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            At Borofirst, we believe meaningful careers are built through
            continuous learning, collaboration, responsibility, and the
            opportunity to make a real difference.
          </p>
        </div>

        {/* Reasons Grid */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:mt-16
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {reasons.map((reason) => {
            return (
              <>
                <CommenCar2 reason={reason} key={reason.number} />
              </>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-linear-to-r from-[#F7FBF6] via-white to-[#F5F8FF] p-5 sm:mt-12 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#186A07] shadow-sm ring-1 ring-slate-100">
                <Users size={19} strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-800">
                  A place to learn, contribute and grow
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Explore opportunities across different teams and career paths
                  at Borofirst.
                </p>
              </div>
            </div>

            <a
              href="#career-opportunities"
              className="
                group
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-linear-to-r
                from-[#186A07]
                to-[#0B2578]
                px-5
                py-3
                text-xs
                font-bold
                text-white
                shadow-lg
                shadow-emerald-900/10
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-xl
              "
            >
              Explore Opportunities
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinBorofirst;
