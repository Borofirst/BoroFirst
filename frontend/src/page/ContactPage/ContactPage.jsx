import React from "react";
import { Mail, Phone, Sparkles } from "lucide-react";
import ContactSection from "../../component/common/ContactSection";
import SEO from "../../component/Seo";

const ContactUs = () => {
  return (
    <>
      <SEO
        title="Contact Borofirst | Get in Touch"
        description="Contact Borofirst to learn more about our financial solutions and loan services."
        canonical="https://www.borofirst.com/contact"
      />

      <main>
        <section
          id="contact-us"
          className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
        >
          {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

          {/* Emerald glow */}
          <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-emerald-200/40 blur-[100px]" />

          {/* Navy glow */}
          <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-blue-100/50 blur-[120px]" />

          {/* Bottom green glow */}
          <div className="pointer-events-none absolute bottom-[-150px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-100/40 blur-[120px]" />

          {/* =====================================================
          SUBTLE GRID
      ====================================================== */}

          <div
            className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-linear(#0B2578_1px,transparent_1px),linear-linear(90deg,#0B2578_1px,transparent_1px)]
          [background-size:55px_55px]
        "
          />

          {/* =====================================================
          TOP DECORATIVE LINE
      ====================================================== */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-7xl -translate-x-1/2 bg-linear-to-r from-transparent via-[#10B981]/30 to-transparent" />

          {/* =====================================================
          FLOATING DECORATIVE ELEMENTS
      ====================================================== */}

          <div className="pointer-events-none absolute left-[8%] top-[18%] hidden h-12 w-12 rotate-12 rounded-2xl border border-emerald-200/60 bg-white/60 shadow-sm backdrop-blur-md lg:block">
            <div className="flex h-full items-center justify-center">
              <Mail size={18} className="text-[#10B981]" />
            </div>
          </div>

          <div className="pointer-events-none absolute right-[8%] top-[24%] hidden h-12 w-12 -rotate-12 rounded-2xl border border-blue-100 bg-white/60 shadow-sm backdrop-blur-md lg:block">
            <div className="flex h-full items-center justify-center">
              <Phone size={18} className="text-[#0B2578]" />
            </div>
          </div>

          {/* Small decorative dots */}
          <div className="pointer-events-none absolute left-[15%] bottom-[18%] hidden gap-1.5 lg:flex">
            {[1, 2, 3, 4, 5].map((item) => (
              <span
                key={item}
                className="h-1.5 w-1.5 rounded-full bg-[#10B981]/30"
              />
            ))}
          </div>

          <div className="pointer-events-none absolute right-[15%] bottom-[20%] hidden gap-1.5 lg:flex">
            {[1, 2, 3, 4, 5].map((item) => (
              <span
                key={item}
                className="h-1.5 w-1.5 rounded-full bg-[#0B2578]/20"
              />
            ))}
          </div>

          {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

          <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            {/* Premium section intro */}
            <div className="mb-10 text-center sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 shadow-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50">
                  <Sparkles size={13} className="text-[#10B981]" />
                </span>

                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#186A07] sm:text-xs">
                  We're Here to Help
                </span>
              </div>

              <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                Let’s Find the Right
                <span className="block bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
                  Financial Solution for You
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base">
                Have a question about loans, eligibility or our financial
                services? Our team is ready to guide you with clear,
                straightforward support.
              </p>
            </div>

            {/* =================================================
            CONTACT CARD WRAPPER
        ================================================= */}

            <div
              className="
            relative
            rounded-[28px]
            border
            border-white/80
            bg-white/70
            p-2
            shadow-[0_25px_80px_rgba(15,23,42,0.08)]
            backdrop-blur-xl
            sm:p-3
            lg:rounded-[32px]
          "
            >
              {/* Inner linear border */}
              <div
                className="
              pointer-events-none
              absolute
              inset-0
              rounded-[28px]
              bg-linear-to-br
              from-[#10B981]/10
              via-transparent
              to-[#0B2578]/10
            "
              />

              <div className="relative overflow-hidden rounded-[22px] bg-white lg:rounded-[26px]">
                {/* Top accent */}
                <div className="h-1 w-full bg-linear-to-r from-[#186A07] via-[#10B981] to-[#0B2578]" />

                <ContactSection />
              </div>
            </div>

            {/* =================================================
            BOTTOM TRUST MESSAGE
        ================================================= */}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
              {[
                "Clear Guidance",
                "Customer Focused",
                "Professional Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-semibold text-[#64748B]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactUs;
