import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import useReveal from "../../hook/useReveal";

const WhyBoroFirst = () => {
      const [headingRef, headingVisible] = useReveal();
  const [contentRef, contentVisible] = useReveal();

  const reasons = [
    {
      number: "01",
      title: "Multiple Lending Options",
      text: "Explore suitable loan solutions through our lending network.",
    },
    {
      number: "02",
      title: "Personalized Guidance",
      text: "Get assistance based on your financial requirements.",
    },
    {
      number: "03",
      title: "Transparent Process",
      text: "Understand the process, documentation and requirements clearly.",
    },
    {
      number: "04",
      title: "End-to-End Support",
      text: "From application to disbursal, get guided throughout the journey.",
    },
  ];

  return (
    <section id="why-borofirst" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        
        {/* Visual */}
         <div
            ref={headingRef}
            className={`reveal-left relative ${
              headingVisible ? "visible" : ""
            }`}
          >
          <div className="absolute -left-8 top-8 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-linear-to-r from-[#186A07] to-[#0B2578] p-3 shadow-2xl">
            <img
              src="/home-loan-family-keys.png"
              alt="Happy couple outside their home"
              className="h-[520px] w-full rounded-[26px] object-cover"
            />

            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-[#0B2578]/85 p-5 text-white backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
                BoroFirst
              </p>

              <p className="mt-2 text-xl font-extrabold">
                Your Dream Home Starts Here.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
         <div
            ref={contentRef}
            className={`reveal-right ${
              contentVisible ? "visible" : ""
            }`}
          >
  
                 <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2 shadow-sm">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/40" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#186A07]" />
                        </span>
          
                        <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
                            Why BoroFirst
                        </span>
                      </div>
     
                    
                                  <h2 className=" text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.45rem]">
                              Why Thousands  Of Peaple {" "}
                        <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent block">
                              Trust  BoroFirst?{" "}
                        </span>
                      </h2>


          <p className="mt-5 leading-8 text-slate-500">
            Our goal is to simplify your financing journey with clear
            information, suitable options and support throughout the process.
          </p>

          <div className="mt-8 space-y-6">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="group flex gap-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-extrabold text-[#10B981] transition group-hover:bg-[#10B981] group-hover:text-white">
                  {reason.number}
                </div>

                <div>
                  <h3 className="font-bold text-[#0B2578]">
                    {reason.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {reason.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#eligibility"
            className="group mt-9 inline-flex items-center gap-2 font-bold text-[#10B981]"
          >
            Start Your Home Loan Journey
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyBoroFirst;