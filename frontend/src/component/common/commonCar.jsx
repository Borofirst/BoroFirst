
import React from 'react'

const CommonCard = ({item,index}) => {
     const Icon=item.icon;
       return (
              <article
                key={item.title}
                className="
                  group relative
                  overflow-hidden
                  rounded-3xl
                  border border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-emerald-200
                  hover:shadow-xl
                  hover:shadow-slate-200/60
                "
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Top glow */}
                <div
                  className="
                    pointer-events-none
                    absolute -right-10 -top-10
                    h-28 w-28
                    rounded-full
                    bg-emerald-400/10
                    blur-2xl
                    transition-all duration-500
                    group-hover:bg-emerald-400/20
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    flex h-14 w-14
                    items-center justify-center
                    rounded-2xl
                    bg-emerald-50
                                text-[#2c8e18]
                        transition-all duration-300 ease-out
  group-hover:bg-[#118A09]
  group-hover:text-white
  group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]
  group-hover:scale-110
                  "
                >
                  < Icon size={25} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="relative mt-6">

                  <p
                    className="
                      text-[10px]
                      font-bold
                      tracking-[0.16em]
                      text-emerald-600
                    "
                  >
                    {item.label}
                  </p>

                  <h3
                    className="
                      mt-2
                      text-xl font-bold
                      tracking-tight
                      text-[#0F172A]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-[#64748B]
                    "
                  >
                    {item.description}
                  </p>

                  {   item.tag &&
                   (<div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-3 py-1.5 transition-colors duration-300 group-hover:border-[#10B981]/20">
                     <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />

                     <span className="text-[10px] font-semibold text-[#64748B]">
                       { item.tag}
                    </span>
                  </div>)
                  }

                </div>

                {/* Bottom accent */}
                <div
                  className="
                    absolute bottom-0 left-0
                    h-1 w-0
                    bg-[#118A09]
                    transition-all duration-500
                    group-hover:w-full
                  "
                />
              </article>
            );
          }


export default CommonCard;
