import { useEffect, useRef } from "react";

import {
  ArrowRight,
  Check,
  Headphones,
  FileCheck2,
  Layers3,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TestimonialCard from "./TestimonialsCards";
import { testimonials } from "../data/testimonial";


const TestimonialsSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Prevent any unwanted scroll behavior from navigation buttons.
    const buttons = [prevRef.current, nextRef.current];

    buttons.forEach((button) => {
      if (button) {
        button.setAttribute("type", "button");
      }
    });
  }, []);

  return (
    <section
      className="
        relative overflow-hidden
        bg-[#F8FAFC]
        py-20 sm:py-24 lg:py-28
      "
    >
      {/* Background decoration */}
      <div
        className="
          pointer-events-none absolute
          -right-32 -top-32
          h-72 w-72
          rounded-full
          bg-[#10B981]/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none absolute
          -bottom-40 -left-32
          h-80 w-80
          rounded-full
          bg-[#0B2578]/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================================
            HEADER
        ========================================= */}
        <div
          className="
            mx-auto mb-12 max-w-3xl text-center
            animate-[fadeUp_0.7s_ease-out]
          "
        >
          {/* Eyebrow */}
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-7 bg-[#10B981]" />

            <span
              className="
                text-xs font-bold tracking-[0.2em]
                text-[#059669]
              "
            >
              CUSTOMER STORIES
            </span>

            <span className="h-px w-7 bg-[#10B981]" />
          </div>

          {/* Heading */}
          <h2
            className="
              text-3xl font-extrabold
              tracking-tight text-[#0F172A]
              sm:text-4xl
              lg:text-[44px]
              lg:leading-[1.15]
            "
          >
            Trusted by Customers on Their{" "}
            <span className="text-[#186A07]">
              Financial Journey
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto mt-5 max-w-2xl
              text-sm leading-7
              text-[#64748B]
              sm:text-base
            "
          >
            From choosing the right loan to completing the
            documentation process, our customers value transparent
            guidance, responsive support and a simple borrowing
            experience.
          </p>

     
        </div> 

        {/* =========================================
            TESTIMONIAL CAROUSEL
        ========================================= */}
        <div className="relative">

          <Swiper
            modules={[
              Navigation,
              Pagination,
              Autoplay,
              A11y,
            ]}
            loop={true}
            grabCursor={true}
            centeredSlides={false}
            speed={700}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="overflow-visible pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="
                  h-auto
                  transition-all duration-500
                "
              >
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* =========================================
              DESKTOP NAVIGATION
          ========================================= */}
          <button
            ref={prevRef}
            aria-label="Previous testimonial"
            className="
              absolute -left-5 top-1/2 z-20
              hidden h-11 w-11
              -translate-y-1/2
              items-center justify-center
              rounded-full
              border border-[#E2E8F0]
              bg-white
              text-[#0F172A]
              shadow-lg
              transition-all duration-300
              hover:border-[#10B981]
              hover:bg-[#10B981]
              hover:text-white
              lg:flex
          "
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            ref={nextRef}
            aria-label="Next testimonial"
            className="
              absolute -right-5 top-1/2 z-20
              hidden h-11 w-11
              -translate-y-1/2
              items-center justify-center
              rounded-full
              border border-[#E2E8F0]
              bg-white
              text-[#0F172A]
              shadow-lg
              transition-all duration-300
              hover:border-[#10B981]
              hover:bg-[#10B981]
              hover:text-white
              lg:flex
          "
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

 
        {/* =========================================
            CTA
        ========================================= */}
        <div
          className="
            relative mt-10
            overflow-hidden
            rounded-[28px]
            bg-[#0B2578]
            px-6 py-10
            sm:px-10
            lg:px-12 lg:py-11
          "
        >
          {/* CTA decoration */}
          <div
            className="
              pointer-events-none absolute
              -right-16 -top-20
              h-56 w-56
              rounded-full
              bg-[#10B981]/20
              blur-2xl
            "
          />

          <div
            className="
              pointer-events-none absolute
              -bottom-20 -left-10
              h-48 w-48
              rounded-full
              bg-white/5
              blur-2xl
            "
          />

          <div
            className="
              relative z-10
              flex flex-col
              items-center justify-between
              gap-7
              text-center
              lg:flex-row
              lg:text-left
            "
          >
            <div>
              <h3
                className="
                  text-2xl font-bold
                  text-white
                  sm:text-3xl
                "
              >
                Ready to Find the Right
                <br className="hidden sm:block" />
                <span className="text-[#6EE7B7]">
                  {" "}Financial Solution?
                </span>
              </h3>

              <p
                className="
                  mt-3 max-w-2xl
                  text-sm leading-6
                  text-white/70
                "
              >
                Tell us what you need and let our team help
                you explore suitable loan options.
              </p>
            </div>

            <div
              className="
                flex w-full flex-col
                gap-3
                sm:w-auto sm:flex-row
              "
            >
              {/* Primary CTA */}
              <button
                className="
                  group inline-flex
                  items-center justify-center
                  gap-2
                  rounded-xl
                  bg-[#10B981]
                  px-6 py-3.5
                  text-sm font-bold
                  text-white
                  shadow-lg
                  shadow-[#10B981]/20
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#059669]
                  hover:shadow-xl
                "
              >
                Explore Loan Options

                <ArrowRight
                  className="
                    h-4 w-4
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              {/* Secondary CTA */}
              <button
                className="
                  inline-flex
                  items-center justify-center
                  rounded-xl
                  border border-white/20
                  bg-white/10
                  px-6 py-3.5
                  text-sm font-bold
                  text-white
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:border-white/40
                  hover:bg-white/15
                "
              >
                Talk to Our Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animation + Swiper styling */}
   
    </section>
  );
};


export default TestimonialsSection;