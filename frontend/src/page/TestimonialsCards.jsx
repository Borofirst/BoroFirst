import {
  Building2,
  Home,
  Landmark,
  BriefcaseBusiness,
  UserRound,
} from "lucide-react";

const loanIcons = {
  "Home Loan": Home,
  "Personal Loan": UserRound,
  "Business Loan": BriefcaseBusiness,
  "Loan Against Property": Landmark,
};

const TestimonialCard = ({ testimonial }) => {
  const LoanIcon = loanIcons[testimonial.loanType] || Building2;

  return (
    <article
      className="
        group relative h-full min-h-[340px]
        overflow-hidden rounded-[24px]
        border border-[#E2E8F0]
        bg-white
        p-6 sm:p-7
        shadow-[0_8px_30px_rgba(15,23,42,0.06)]
        transition-all duration-300 ease-out
        hover:-translate-y-1.5
        hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]
      "
    >
      {/* Emerald accent */}
      <div
        className="
          absolute left-0 top-0 h-1 w-0
          bg-[#118A09]
          transition-all duration-300
          group-hover:w-full
        "
      />

      {/* Top section */}
      <div className="mb-6 flex items-center justify-between">
        {/* Stars */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              viewBox="0 0 20 20"
              className="h-[17px] w-[17px] fill-[#c1c113]"
            >
              <path d="M10 1.5l2.63 5.32 5.87.85-4.25 4.14 1 5.85L10 14.9l-5.25 2.76 1-5.85L1.5 7.67l5.87-.85L10 1.5z" />
            </svg>
          ))}
        </div>

        {/* Rating */}
        <span className="text-sm font-bold text-[#0F172A]">
          {testimonial.rating}.0
        </span>
      </div>

      {/* Review */}
      <div className="flex min-h-[145px] flex-col">
        <span className="mb-3 text-3xl font-bold leading-none text-[#10B981]/20">
          “
        </span>

        <p className="text-[15px] leading-7 text-[#475569]">
          {testimonial.review}
        </p>
      </div>

      {/* Divider */}
      <div className="my-5 h-px bg-[#E2E8F0]" />

      {/* Customer */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          {/* Avatar */}
          <div
            className="
              flex h-12 w-12 shrink-0 items-center justify-center
              rounded-full
              bg-[#ECFDF5]
              text-sm font-bold text-[#2c8e18]
              transition-transform duration-300
              group-hover:scale-105
            "
          >
            {testimonial.avatar}
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-sm font-bold text-[#0F172A]">
              {testimonial.name}
            </h3>

            <p className="mt-0.5 text-xs text-[#64748B]">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Loan Type */}
        <div
          className="
            hidden shrink-0 items-center gap-1.5
            rounded-full bg-[#F8FAFC]
            px-3 py-1.5
            text-xs font-semibold text-[#475569]
            sm:flex
          "
        >
          <LoanIcon className="h-3.5 w-3.5 text-[#2c8e18]" />

          <span>{testimonial.loanType}</span>
        </div>
      </div>

      {/* Mobile loan type */}
      <div className="mt-4 flex sm:hidden">
        <span
          className="
            inline-flex items-center gap-1.5
            rounded-full bg-[#F0FDF4]
            px-3 py-1.5
            text-xs font-semibold text-[#047857]
          "
        >
          <LoanIcon className="h-3.5 w-3.5" />
          {testimonial.loanType}
        </span>
      </div>
    </article>
  );
};

export default TestimonialCard;