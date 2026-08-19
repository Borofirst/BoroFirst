import {
  Handshake,
  Eye,
  Headphones,
  ShieldCheck,
} from "lucide-react";

  const items = [
    {
      icon: Handshake,
      title: "Multiple Lending Options",
      text: "Explore suitable solutions",
    },
    {
      icon: Eye,
      title: "Transparent Process",
      text: "Clear guidance at every step",
    },
    {
      icon: Headphones,
      title: "Dedicated Assistance",
      text: "Support when you need it",
    },
    {
      icon: ShieldCheck,
      title: "End-to-End Support",
      text: "From application to disbursal",
    },
  ];

const TrustStrip = () => {


  return (
    <section className="border-y border-slate-200 bg-[#F8FAFC]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-3 border-b border-slate-200 px-5 py-6 last:border-b-0 sm:px-8 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <div className="rounded-xl bg-white p-3 text-[#186A07] shadow-sm">
                <Icon size={20} />
              </div>

              <div>
                <h3 className="text-xs font-bold text-[#0B2578] sm:text-sm">
                  {item.title}
                </h3>

                <p className="mt-1 hidden text-xs text-slate-500 sm:block">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustStrip;


