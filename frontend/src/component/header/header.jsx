import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Pagination,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";


export const Header = () => {
        const handleCalculationEmi = () => {
    // Replace with your eligibility section ID or route.
    document
      .getElementById("loan-EMI")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };
  return (
    <>
      <section className="hero">
        <Swiper
          modules={[Pagination,Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay
          pagination={{ clickable: true }}
        >
           <SwiperSlide>
            <div className="relative 
             h-[550px]
  sm:h-[600px]
  md:h-[680px]
  lg:h-[750px]
  2xl:h-[760px] w-full overflow-hidden rounded-b-2xl">
              {/* Banner Image */}
              <img
                src="/homeL.png"
                alt="Home Loan"
                className="h-full w-full object-cover"
              />

              {/* Content */}
              <div className="mt-8 absolute inset-0 flex items-center">
                <div className="max-w-7xl  px-8 md:px-16 ">
                  
                    <span className="inline-block rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-[#1A5E04]">
                      🏡 Trusted Home Loan Partner
                    </span>

                    <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
                      Turn Your
                      <span className="block text-[#1A5E04]">Dream Home</span>
                      Into Reality
                    </h1>

                    <p className=" hidden md:block mt-6 max-w-xl lg:max-w-2xl xl:max-w-3xl  leading-6 text-slate-700 sm:mt-5 sm:leading-7 text-lg md:leading-8">
                      Get your home loan approved faster with competitive
                      interest rates, minimal documentation, flexible EMI
                      options, and expert financial guidance every step of the
                      way.
                    </p>
                    <p class="block mt-3 md:hidden text-slate-700 max-w-sm text-base">
 Get your home loan approved faster with competitive
                      interest rates, minimal documentation, flexible EMI
                      options
                                        </p>


                    <div className="mt-6 flex flex-wrap gap-4">
                      <Link to="contact">
                      <button className="rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-3 py-2 sm:px-8 sm:py-4 font-semibold text-white shadow-lg transition duration-300 hover:bg-emerald-700 hover:scale-105">
                        Apply Now
                      </button>
                      </Link>

                      <button onClick={handleCalculationEmi} className="rounded-xl border-2 border-emerald-600 bg-white px-3 py-2 sm:px-8 sm:py-2 font-semibold text-emerald-600 transition duration-300 hover:bg-emerald-50">
                        Calculate EMI
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative 
 h-[550px]
  sm:h-[600px]
  md:h-[680px]
  lg:h-[750px]
  2xl:h-[760px]
   overflow-hidden
    rounded-b-2xl">
              {/* Background Image */}
              <img
                src="/homeLoan.png"
                alt="Loan Against Property"
                className="w-full h-full object-cover  "
              />

              {/* Overlay Content */}

              <div className="mt-8 absolute inset-0 flex items-center">
                <div className="max-w-7xl  px-8 md:px-16">
                  <span className="inline-block rounded-full  bg-emerald-100 px-4 py-1 text-sm font-semibold text-[#1A5E04]">
                    Trusted Financial Solutions
                  </span>

                  <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
                    Loan Against
                    <span className="block text-[#1A5E04]">Property</span>
                  </h1>
      <p className="hidden md:block mt-6 max-w-sm lg:max-w-2xl   leading-6 text-slate-700 sm:mt-5 sm:leading-7 text-lg md:leading-8">
                    Unlock the value of your residential or commercial property
                    with quick approvals, competitive interest rates, flexible
                    repayment options, and minimal documentation.
                  </p>
                  <p class="block mt-3 md:hidden text-slate-700 max-w-sm text-base pr-3">
                    Unlock your property’s value with flexible financing,quick approvals,competitive rates, and easy repayment options.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4">
                                        <Link to="contact">
                      <button className="rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-3 py-2 sm:px-8 sm:py-4 font-semibold text-white shadow-lg transition duration-300 hover:bg-emerald-700 hover:scale-105">
                        Apply Now
                      </button>
                      </Link>
                     <Link to="/loan-againt-property">
                    <button className="rounded-lg border border-emerald-600 bg-white px-3 py-2 sm:px-8 sm:py-3 font-semibold text-emerald-600 transition hover:bg-emerald-50">
                      Learn More
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
         
          <SwiperSlide>
            <div className="relative   
               h-[550px]
  sm:h-[600px]
  md:h-[680px]
  lg:h-[750px]
  2xl:h-[760px]
   w-full overflow-hidden">
              {/* Background Image */}
              <img
                src="/bLoan.png"
                alt="Business Loan"
                className="h-full w-full object-cover"
              />

              {/* Light Overlay */}

              {/* Content */}
              <div className="mt-6 absolute inset-0 flex items-center">
                <div className="container mx-auto  px-8 md:px-16">
                  <div className="max-w-xl">
                    {/* Badge */}
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-[#1A5E04] shadow">
                      🚀 Business Financing
                    </span>

                    {/* Heading */}
                    <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                      Fuel Your
                      <span className="block text-[#1A5E04]">
                        Business Growth
                      </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                      Expand your business with quick approvals, flexible
                      repayment options, competitive interest rates, and
                      hassle-free documentation tailored to your financial
                      needs.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                                         <Link to="contact">
                      <button className="rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-3 py-2 sm:px-8 sm:py-4 font-semibold text-white shadow-lg transition duration-300 hover:bg-emerald-700 hover:scale-105">
                        Apply Now
                      </button>
                      </Link>
                        <Link to="/business-loan">
                           <button className="rounded-xl border-2 border-emerald-600 bg-white px-3 py-2 sm:px-8 sm:py-4 font-semibold text-emerald-600 transition-all duration-300 hover:bg-emerald-50">
                        Learn More
                      </button>
                        </Link>
                   
                    </div>

                    {/* Features */}
                    <div className="hidden md:block mt-10 flex-wrap gap-6 text-sm font-medium text-slate-700">
                      <div className="flex items-center gap-2">
                        ✅ Fast Approval
                      </div>

                      <div className="flex items-center gap-2">
                        ✅ Low Interest Rate
                      </div>

                      <div className="flex items-center gap-2">
                        ✅ Minimal Documentation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative 
    h-[550px]
  sm:h-[600px]
  md:h-[680px]
  lg:h-[750px]
  2xl:h-[760px]
    w-full overflow-hidden">
              {/* Banner Image */}
              <img
                src="/personal.png"
                alt="Personal Loan"
                className="h-full w-full object-cover"
              />

              {/* Content */}
              <div className="absolute inset-0 flex mt-15 items-center">
                <div className=" container mx-auto  px-8 md:px-16">
                  <div className="max-w-2xl">
                    {/* Badge */}
                    <div className="inline-flex items-center rounded-full border border-emerald-200 bg-white/90 px-5 py-2 shadow-md backdrop-blur-sm">
                      <span className="mr-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                      <span className="text-sm font-semibold tracking-wide text-[#1A5E04]">
                        Instant Personal Loan
                      </span>
                    </div>

                    {/* Heading */}
                    <h1 className="hidden md:block mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
                      Achieve Your Goals
                      <span className="mt-2 block text-[#1A5E04]">
                        With Instant Personal Loans
                      </span>
                    </h1>
                    <h1 className=" md:hidden mt-8 text-4xl font-extrabold leading-tight text-[#1A5E04] lg:text-6xl">
               
                       Instant Personal Loans
                  
                    </h1>

                    {/* Description */}
                   <p className=" hidden md:block mt-6 max-w-xl lg:max-w-2xl xl:max-w-3xl  leading-6 text-slate-700 sm:mt-5 sm:leading-7 text-lg md:leading-8">
                      Whether it's for education, travel, medical emergencies,
                      home renovation, or any personal need, get fast approvals,
                      competitive interest rates, flexible repayment options,
                      and minimal paperwork.
                    </p>
                    <p class="block mt-3 md:hidden text-slate-700 max-w-sm text-base">
                      Whether it's for education, travel, medical emergencies,
                      home renovation, or any personal need, get fast approvals.
                     
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-wrap gap-5">
                      <Link to="contact">
                      <button className="rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-3 py-2 sm:px-8 sm:py-4 font-semibold text-white shadow-lg transition duration-300 hover:bg-emerald-700 hover:scale-105">
                        Apply Now
                      </button>
                      </Link>
                    <Link to="/personal-loan#loan-eligibility">
                     <button className="rounded-xl border-2 border-slate-300 bg-white px-3 py-2 sm:px-8 sm:py-4 text-base font-semibold text-slate-700 transition-all duration-300 hover:border-emerald-600 hover:text-emerald-600">
                        Check Eligibility
                      </button>
                    </Link>
                     
                    </div>

                 
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
