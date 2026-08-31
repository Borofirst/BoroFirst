import { ShieldCheck } from "lucide-react";
import { features, stats } from "../data/whyChooseus";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-[#186A07]">
            WHY CHOOSE US?
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Why Thousands of Customers Trust Us
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine financial expertise, transparent processes, and modern
            technology to deliver secure and reliable financial solutions for
            individuals and businesses.
          </p>
        </div>

        {/* Content */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-3">
          {/* Left Cards */}
          <div className="space-y-6">
            {features.slice(0, 3).map((item, index) => (
              <FeatureCard key={index} item={item} />
            ))}
          </div>

          {/* Center */}
          <div className="flex justify-center">
            <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-linear-to-r from-[#186A07] to-[#0B2578] shadow-2xl">
              <div className="absolute h-72 w-72 rounded-full border-2 border-white/30"></div>

              <ShieldCheck size={90} className="text-white" />

              <div className="absolute -top-5 right-8 rounded-full bg-white px-4 py-2 shadow-lg">
                <p className="text-sm font-semibold text-gray-700">
                  Secure Finance
                </p>
              </div>

              <div className="absolute bottom-8 -left-5 rounded-full bg-white px-4 py-2 shadow-lg">
                <p className="text-sm font-semibold text-gray-700">
                  Trusted Service
                </p>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="space-y-6">
            {features.slice(3).map((item, index) => (
              <FeatureCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-24 grid grid-cols-2 gap-6 rounded-3xl bg-white p-8 shadow-lg md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl font-bold text-[#186A07]">
                {stat.number}
              </h3>

              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mx-auto mt-20 max-w-4xl text-center">
          <p className="text-2xl font-semibold italic leading-relaxed text-gray-800">
            "Your financial goals deserve a trusted partner. We are committed to
            providing transparent guidance, reliable financial solutions, and
            long-term success."
          </p>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-start gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-full text-white/90 group-hover:rotate-6
                
                hover:text-white/90
                        transition-all duration-300 ease-out
                      bg-[#118A09]
                      group-hover:text-white
                        group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]
                        group-hover:scale-110 
        ">
          <Icon size={28} />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>

          <p className="mt-3 text-gray-600 leading-7">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
