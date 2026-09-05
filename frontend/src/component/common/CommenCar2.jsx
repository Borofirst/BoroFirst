import React from "react";

const CommenCar2 = ({ reason }) => {
 
  const Icon = reason.icon;
  return (
    <article
      key={reason.number}
      className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-slate-200/80
                  bg-white
                  p-6
                  shadow-[0_8px_30px_rgba(15,23,42,0.04)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#186A07]/20
                  hover:shadow-[0_20px_45px_rgba(15,23,42,0.09)]
                  sm:p-7
                "
    >
      {/* Card Glow */}
      <div
        className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-[#EAF5E8]
                    opacity-60
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
      />

      {/* Top Row */}
      <div className="relative flex items-start justify-between">
        {/* Number */}
        <span
          className="
                      text-[11px]
                      font-extrabold
                      tracking-[0.16em]
                      text-slate-300
                      transition-colors
                      duration-300
                      group-hover:text-[#186A07]/60
                    "
        >
          {reason.number}
        </span>

        {/* Icon */}
        <div
          className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-emerald-100
                      bg-[#EAF5E8]
                      text-[#186A07]
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:border-[#186A07]/20
                      group-hover:bg-[#186A07]
                      group-hover:text-white
                    "
        >
          <Icon size={21} strokeWidth={1.8} />
        </div>
      </div>

      {/* Content */}
      <div className="relative mt-8">
        <h3
          className="
                      text-xl
                      font-extrabold
                      tracking-tight
                      text-slate-900
                      transition-colors
                      duration-300
                      group-hover:text-[#186A07]
                    "
        >
          {reason.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          {reason.description}
        </p>
      </div>

      {/* Bottom Accent */}
      <div className="relative mt-7 flex items-center gap-2">
        <div className="h-px flex-1 bg-slate-100 transition-colors duration-300 group-hover:bg-emerald-100" />

        <div
          className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-slate-200
                      transition-all
                      duration-300
                      group-hover:w-8
                      group-hover:bg-linear-to-r
                      group-hover:from-[#186A07]
                      group-hover:to-[#0B2578]
                    "
        />
      </div>
    </article>
  );
};

export default CommenCar2;
