export const ProcessCard = ({ step }) => {
  const Icon = step.icon;

  return (
    <div className="group relative">
      {/* Step Badge */}
      <div className="absolute -top-5 left-1/2 z-20 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-gray-50 bg-[#0B2578] text-sm font-bold text-white shadow-lg lg:left-1/2">
        {step.id}
      </div>

      {/* Mobile Timeline Dot */}
      <div className="absolute left-8 top-10 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-4 border-gray-50 bg-emerald-500 shadow-md lg:hidden"></div>

      {/* Card */}
      <div className="ml-16 rounded-3xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl lg:ml-0 lg:mt-8">
        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#186A07] shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          <Icon className="h-10 w-10 text-white" />
        </div>

        {/* Content */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>

          <p className="mt-4 leading-7 text-gray-600  whitespace-pre-wrap">{step.description}</p>
        </div>

        {/* Bottom Accent */}
        <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-linear-to-r from-emerald-500 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
      </div>
    </div>
  );
};
