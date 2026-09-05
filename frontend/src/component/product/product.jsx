import React from "react";
import { loanProduct } from "../../assets/productData";
import { Link } from "react-router-dom";
import {   MdOutlineYard } from "react-icons/md";
const Product = () => {

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
      
        
                
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#186A07]" />
            </span>

            <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
              Our Financial Solutions
            </span>
          </div>

          {/* Heading */}

          <h2 className=" text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.45rem]">
            Loans & Financial {" "}
            <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent ">
              Services
            </span>
           
          </h2>

          <p className="mt-5 text-lg text-slate-600 leading-8">
            Explore our comprehensive range of financial products designed to
            support your personal, educational, business, and investment goals.
          </p>
        </div>
        {/* Cards Here */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {loanProduct.map((item, index) => {
          
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group  rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-3 hover:border-[#1A5E04] hover:shadow-2xl"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-linear-to-r from-emerald-200/40 to-blue-200/40 blur-3xl transition-all duration-500 group-hover:scale-150"></div>

                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl  ${item.color} text-white transition group-hover:bg-emerald-600 group-hover:text-white`}
                >
                  <Icon size={38} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6 rounded-xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Maximum Coverage</p>

                  <h4 className="mt-1 text-lg font-bold text-emerald-600">
                    {item.amount}
                  </h4>
                </div>
                <div>
                  <div className="flex justify-between ">
                    <Link to="contact">
                                        <button className="mt-8 flex items-center gap-2 rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
                      Apply Now
                    </button>
                    </Link>

                    <Link to={`${item.service}`} className="mt-8 flex items-center gap-2 rounded-xl bg-[#0B2578] px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;
