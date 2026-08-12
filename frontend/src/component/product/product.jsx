import React from "react";
import { loanProduct } from "../../assets/productData";
import { Link } from "react-router-dom";


const Product = () => {

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
            Our Financial Solutions
          </span>
          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900">
            Loans & Financial Services
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-8">
            Explore our comprehensive range of financial products designed to
            support your personal, educational, business, and investment goals.
          </p>
        </div>
        {/* Cards Here */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {loanProduct.map((item, index) => {
            console.log(loanProduct);
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group  rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#1A5E04] hover:shadow-2xl"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-linear-to-r from-emerald-200/40 to-blue-200/40 blur-3xl transition-all duration-500 group-hover:scale-150"></div>

                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl  ${item.color} text-white transition group-hover:bg-emerald-600 group-hover:text-white`}
                >
                  <Icon size={38} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
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
                    <button className="mt-8 flex items-center gap-2 rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
                      Apply Now
                    </button>
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
