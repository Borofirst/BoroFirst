import React from "react";
import {
  ShieldCheck,
  HeartHandshake,
  Users,
  Target,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  Quote,
} from "lucide-react";
import CommenCar2 from "../common/CommenCar2";

const cultureValues = [
  {
    number: "01",
    title: "Trust",
    description:
      "We value transparency, responsible decision-making, and relationships built on confidence and integrity.",
    icon: ShieldCheck,
    accent: "green",
  },
  {
    number: "02",
    title: "Customer First",
    description:
      "We keep customer needs at the heart of our work and strive to create better financial experiences.",
    icon: HeartHandshake,
    accent: "blue",
  },
  {
    number: "03",
    title: "Collaboration",
    description:
      "We believe better ideas come from working together, sharing perspectives, and supporting one another.",
    icon: Users,
    accent: "green",
  },
  {
    number: "04",
    title: "Ownership",
    description:
      "We encourage people to take responsibility, make thoughtful decisions, and contribute meaningfully.",
    icon: Target,
    accent: "blue",
  },
  {
    number: "05",
    title: "Continuous Improvement",
    description:
      "We keep learning, adapting, and looking for better ways to work, serve customers, and grow.",
    icon: TrendingUp,
    accent: "green",
  },
];

// const CultureCard = ({ number, title, description, icon: Icon, accent }) => {
//   const isBlue = accent === "blue";

//   return (
//     <article
//       className="
//         group relative flex min-h-[330px] flex-col overflow-hidden
//         rounded-[2rem] border border-slate-200/80
//         bg-white/90 p-6
//         shadow-[0_10px_35px_rgba(15,23,42,0.045)]
//         backdrop-blur-xl
//         transition-all duration-300
//         hover:-translate-y-1.5
//         hover:shadow-[0_22px_55px_rgba(15,23,42,0.10)]
//       "
//     >
//       {/* Hover glow */}
//       <div
//         className={`
//           pointer-events-none absolute -right-16 -top-16
//           h-40 w-40 rounded-full blur-3xl
//           opacity-0 transition-opacity duration-500
//           group-hover:opacity-100
//           ${isBlue ? "bg-blue-100/70" : "bg-emerald-100/70"}
//         `}
//       />

//       {/* Subtle bottom glow */}
//       <div
//         className="
//           pointer-events-none absolute -bottom-24 -left-16
//           h-44 w-44 rounded-full
//           bg-slate-100/70 blur-3xl
//           opacity-0 transition-opacity duration-500
//           group-hover:opacity-100
//         "
//       />

//       <div className="relative flex items-center justify-between">
//         <span
//           className="
//             text-4xl font-black tracking-[-0.06em]
//             text-slate-100
//             transition-colors duration-300
//             group-hover:text-slate-200
//           "
//         >
//           {number}
//         </span>

//         <div
//           className="
//             flex h-9 w-9 items-center justify-center
//             rounded-full border border-slate-100
//             bg-slate-50 text-slate-300
//             transition-all duration-300
//             group-hover:border-[#EAF5E8]
//             group-hover:bg-[#EAF5E8]
//             group-hover:text-[#186A07]
//           "
//         >
//           <ArrowUpRight
//             size={17}
//             strokeWidth={1.8}
//             className="
//               transition-transform duration-300
//               group-hover:-translate-y-0.5
//               group-hover:translate-x-0.5
//             "
//             aria-hidden="true"
//           />
//         </div>
//       </div>

//       <div className="relative mt-8">
//         <div
//           className="
//             flex h-14 w-14 items-center justify-center
//             rounded-2xl
//             bg-[#EAF5E8]
//             text-[#186A07]
//             shadow-sm
//             transition-all duration-300
//             group-hover:bg-linear-to-br
//             group-hover:from-[#186A07]
//             group-hover:to-[#0B2578]
//             group-hover:text-white
//             group-hover:shadow-lg
//           "
//         >
//           <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
//         </div>
//       </div>

//       <div className="relative mt-7">
//         <h3
//           className="
//             text-xl font-extrabold tracking-tight text-slate-900
//             transition-colors duration-300
//             group-hover:text-[#186A07]
//           "
//         >
//           {title}
//         </h3>

//         <p className="mt-3 text-sm leading-6 text-slate-500">
//           {description}
//         </p>
//       </div>

//       <div className="relative mt-auto pt-7">
//         <div
//           className="
//             h-px w-full bg-slate-100
//             transition-all duration-300
//             group-hover:bg-linear-to-r
//             group-hover:from-[#186A07]
//             group-hover:to-[#0B2578]
//           "
//         />

//         <div className="mt-4 flex items-center justify-between">
//           <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
//             People • Purpose • Progress
//           </span>

//           <ArrowUpRight
//             size={15}
//             className="
//               text-slate-300
//               transition-all duration-300
//               group-hover:-translate-y-0.5
//               group-hover:translate-x-0.5
//               group-hover:text-[#186A07]
//             "
//             aria-hidden="true"
//           />
//         </div>
//       </div>
//     </article>
//   );
// };

const CultureValues = () => {
  return (
    <section
      id="our-culture"
      aria-labelledby="culture-values-heading"
      className="
        relative isolate overflow-hidden
        bg-linear-to-b from-[#F9FCF8] via-white to-[#F8FBFF]
        py-20 sm:py-24 lg:py-28
      "
    >
      {/* Background decoration */}
      <div
        className="
          pointer-events-none absolute -left-40 top-20
          -z-10 h-96 w-96 rounded-full
          bg-emerald-100/45 blur-3xl
        "
      />

      <div
        className="
          pointer-events-none absolute -right-40 top-32
          -z-10 h-96 w-96 rounded-full
          bg-blue-100/40 blur-3xl
        "
      />

      <div
        className="
          pointer-events-none absolute left-1/2 top-0
          -z-10 h-72 w-72 -translate-x-1/2
          rounded-full bg-white blur-3xl
        "
      />

      {/* Very subtle grid */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          opacity-[0.18]
          [background-image:linear-linear(rgba(24,106,7,0.10)_1px,transparent_1px),linear-linear(90deg,rgba(24,106,7,0.10)_1px,transparent_1px)]
          [background-size:52px_52px]
          [mask-image:linear-linear(to_bottom,black,transparent_80%)]
        "
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center">
          <div
            className="
              mb-5 inline-flex items-center gap-2
              rounded-full border border-emerald-100
              bg-white/80 px-4 py-2
              shadow-sm backdrop-blur-md
            "
          >
            <Sparkles size={14} className="text-[#186A07]" aria-hidden="true" />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#186A07]">
              Our Culture &amp; Values
            </span>
          </div>

          <h2
            id="culture-values-heading"
            className="
              text-3xl font-extrabold tracking-[-0.045em]
              text-slate-950
              sm:text-4xl
              lg:text-5xl
            "
          >
            A Culture Built Around{" "}
            <span
              className="
                bg-linear-to-r from-[#186A07] to-[#0B2578]
                bg-clip-text text-transparent
              "
            >
              People, Purpose &amp; Progress
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
            At Borofirst, we believe great financial solutions begin with great
            people. We are building a culture where people can collaborate, take
            ownership, keep learning, and create meaningful value for customers
            and the organization.
          </p>
        </header>

        {/* Intro Culture Statement */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div
            className="
              relative overflow-hidden
              rounded-[2rem]
              border border-slate-200/80
              bg-white/80
              p-6
              shadow-[0_18px_55px_rgba(15,23,42,0.06)]
              backdrop-blur-xl
              sm:p-7
              lg:p-8
            "
          >
            <div
              className="
                pointer-events-none absolute -right-20 -top-20
                h-48 w-48 rounded-full
                bg-emerald-100/50 blur-3xl
              "
            />

            <div
              className="
                pointer-events-none absolute -bottom-24 -left-16
                h-48 w-48 rounded-full
                bg-blue-100/40 blur-3xl
              "
            />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
              <div
                className="
                  flex h-14 w-14 shrink-0 items-center justify-center
                  rounded-2xl
                  bg-linear-to-br from-[#186A07] to-[#0B2578]
                  text-white
                  shadow-lg shadow-blue-900/10
                "
              >
                <HeartHandshake
                  size={25}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-extrabold tracking-tight text-slate-900">
                    People Make the Difference
                  </h3>

                  <span className="rounded-full bg-[#EAF5E8] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#186A07]">
                    Our Approach
                  </span>
                </div>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                  We want every person at Borofirst to have the opportunity to
                  learn, contribute, and grow. Our culture is shaped by how we
                  work with each other and how we create value for our
                  customers.
                </p>
              </div>

              <div className="hidden shrink-0 lg:block">
                <div className="flex -space-x-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#EAF5E8] text-[#186A07]">
                    <Users size={14} aria-hidden="true" />
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-50 text-[#0B2578]">
                    <Target size={14} aria-hidden="true" />
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-slate-600">
                    <TrendingUp size={14} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-12">
          <div className="grid grid-cols-1< gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-5">
            {cultureValues.map((value) => {
              return (
                <>
                  <CommenCar2 reason={value} key={value.number} />
                </>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div
            className="
              relative overflow-hidden
              rounded-[2rem]
              border border-slate-200/80
              bg-white/70
              px-6 py-7
              shadow-sm
              backdrop-blur-xl
              sm:px-8
            "
          >
            <div
              className="
                pointer-events-none absolute left-1/2 top-0
                h-32 w-64 -translate-x-1/2
                rounded-full bg-emerald-100/30 blur-3xl
              "
            />

            <div className="relative flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <div
                className="
                  flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-xl
                  bg-[#EAF5E8]
                  text-[#186A07]
                "
              >
                <Quote size={19} strokeWidth={1.8} aria-hidden="true" />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold leading-6 text-slate-700 sm:text-base">
                  People grow when they have the opportunity to learn,
                  contribute, and make an impact.
                </p>
              </div>

              <div className="hidden h-px w-12 bg-linear-to-r from-[#186A07] to-[#0B2578] sm:block" />

              <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                People • Purpose • Progress
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureValues;
