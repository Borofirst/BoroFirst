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
                  <h2 className=" text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.45rem]">
               Trusted by Customers on Their{" "}
            <span className="lg:block bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent ">
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

 

      </div>

      {/* Custom animation + Swiper styling */}
   
    </section>
  );
};


export default TestimonialsSection;