import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {loanProduct} from "../../assets/productData"
import { ArrowRight } from 'lucide-react';
import LoanNeedSection from '../../component/layout/landneedSection';
import WhyChooseUs from '../whyChooseuse';
import LoanApplicationProcess from '../LoanApplicationProcess';
import FeaturedFinancialProducts from '../FeaturedFinancialProducts';
import BankingPartners from '../partner';
import FAQSection from '../freaquestAskedQ';
import ContactSection from '../ContactSection';


const Home = () => {
  return (
    <>
    {/* hero */}
    <section className='hero'>
 <Swiper
      modules={[Pagination,Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay
      pagination={{ clickable: true }}
   
    >
      <SwiperSlide>
  <div className="relative h-[600px] w-full overflow-hidden rounded-2xl">

    {/* Background Image */}
    <img
      src="/homeLoan.png"
      alt="Loan Against Property"
      className="h-full w-full object-cover"
    />

    {/* Overlay Content */}
    
    <div className="absolute inset-0 flex items-center">
      <div className="max-w-2xl px-8 md:px-16">

        <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-[#1A5E04]">
          Trusted Financial Solutions
        </span>

        <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
          Loan Against
          <span className="block text-[#1A5E04]">
            Property
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
          Unlock the value of your residential or commercial property with
          quick approvals, competitive interest rates, flexible repayment
          options, and minimal documentation.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-lg bg-gradient-to-r from-[#186A07] to-[#0B2578] px-8 py-3 font-semibold text-white transition hover:bg-emerald-700">
            Apply Now
          </button>

          <button className="rounded-lg border border-emerald-600 bg-white px-8 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-50">
            Learn More
          </button>
        </div>

      </div>
    </div>

  </div>
</SwiperSlide>
 <SwiperSlide>
        <div className="relative h-[600px] w-full overflow-hidden">

          {/* Banner Image */}
          <img
            src="/homeL.png"
            alt="Home Loan"
            className="h-full w-full object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 lg:px-12">

              <div className="max-w-xl">

                <span className="inline-block rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-[#1A5E04]">
                  🏡 Trusted Home Loan Partner
                </span>

                <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
                  Turn Your
                  <span className="block text-[#1A5E04]">
                    Dream Home
                  </span>
                  Into Reality
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Get your home loan approved faster with competitive interest
                  rates, minimal documentation, flexible EMI options, and expert
                  financial guidance every step of the way.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button className="rounded-xl bg-gradient-to-r from-[#186A07] to-[#0B2578] px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:bg-emerald-700 hover:scale-105">
                    Apply Now
                  </button>

                  <button className="rounded-xl border-2 border-emerald-600 bg-white px-8 py-4 font-semibold text-emerald-600 transition duration-300 hover:bg-emerald-50">
                    Calculate EMI
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </SwiperSlide>
 <SwiperSlide>
        <div className="relative h-[650px] sm:h-[450px] lg:h-[600px] w-full overflow-hidden">

          {/* Background Image */}
          <img
            src="/bLoan.png"
            alt="Business Loan"
            className="h-full w-full object-cover"
          />

          {/* Light Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">

              <div className="max-w-xl">

                {/* Badge */}
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-[#1A5E04] shadow">
                  🚀 Business Financing
                </span>

                {/* Heading */}
                <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Fuel Your
                  <span className="block text-[#1A5E04]">
                    Business Growth
                  </span>
                </h1>

                {/* Description */}
                <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                  Expand your business with quick approvals, flexible repayment
                  options, competitive interest rates, and hassle-free
                  documentation tailored to your financial needs.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">

                  <button className="rounded-xl bg-gradient-to-r from-[#186A07] to-[#0B2578] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700">
                    Apply Now
                  </button>

                  <button className="rounded-xl border-2 border-emerald-600 bg-white px-8 py-4 font-semibold text-emerald-600 transition-all duration-300 hover:bg-emerald-50">
                    Learn More
                  </button>

                </div>

                {/* Features */}
                <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-slate-700">

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
  <div className="relative h-[600px] w-full overflow-hidden">

    {/* Banner Image */}
    <img
      src="/personal.png"
      alt="Personal Loan"
      className="h-full w-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent"></div>

    {/* Content */}
    <div className="absolute inset-0 flex items-center">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">

        <div className="max-w-2xl">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-emerald-200 bg-white/90 px-5 py-2 shadow-md backdrop-blur-sm">
            <span className="mr-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-sm font-semibold tracking-wide text-[#1A5E04]">
              Instant Personal Loan
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Achieve Your Goals
            <span className="mt-2 block text-[#1A5E04]">
              With Instant Personal Loans
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Whether it's for education, travel, medical emergencies, home
            renovation, or any personal need, get fast approvals, competitive
            interest rates, flexible repayment options, and minimal paperwork.
          </p>

          {/* Buttons */}
          <div className="mt-3 flex flex-wrap gap-5">

            <button className="rounded-xl bg-gradient-to-r from-[#186A07] to-[#0B2578] px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700">
              Apply Now
            </button>

            <button className="rounded-xl border-2 border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-all duration-300 hover:border-emerald-600 hover:text-emerald-600">
              Check Eligibility
            </button>

          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-2 gap-6 text-sm md:grid-cols-4">

            <div>
              <h3 className="text-2xl font-bold text-slate-900">₹25L</h3>
              <p className="mt-1 text-slate-600">
                Loan Amount
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">10 Min</h3>
              <p className="mt-1 text-slate-600">
                Approval
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">9.99%</h3>
              <p className="mt-1 text-slate-600">
                Interest
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">84 Months</h3>
              <p className="mt-1 text-slate-600">
                Repayment
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>

  </div>
</SwiperSlide>
    
    </Swiper>
    </section>
 {/* card */}
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
        const Icon = item.icon;
        return (

            <div
                key={index}
                className="group  rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#1A5E04] hover:shadow-2xl"
            >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-r from-emerald-200/40 to-blue-200/40 blur-3xl transition-all duration-500 group-hover:scale-150"></div>

                <div className={`flex h-20 w-20 items-center justify-center rounded-2xl  ${item.color} text-white transition group-hover:bg-emerald-600 group-hover:text-white`}>

                    <Icon size={38} />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                </p>

                <div className="mt-6 rounded-xl bg-slate-50 p-4">

                    <p className="text-sm text-slate-500">
                        Maximum Coverage
                    </p>

                    <h4 className="mt-1 text-lg font-bold text-emerald-600">
                        {item.amount}
                    </h4>

                </div>
                <div>
                    <div className='flex justify-between '>
                     <button className="mt-8 flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#186A07] to-[#0B2578] px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
                    Apply Now
                </button>
                     <button className="mt-8 flex items-center gap-2 rounded-xl bg-[#0B2578] px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
                    Know More
                </button>
                    </div>
                 

                </div>
              
            </div>

        );

    })}

</div> 
  </div>
</section>
{/* find for loan */}
<LoanNeedSection/>
<WhyChooseUs/>
<LoanApplicationProcess/>
<FeaturedFinancialProducts/>
<BankingPartners/>
<FAQSection/>
<ContactSection/>
     </>
  )
}

export default Home


