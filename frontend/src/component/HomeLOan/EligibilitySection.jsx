import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  House,
  IndianRupee,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

/* =========================================================
   REVEAL COMPONENT
========================================================= */

const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const directionClass = {
    up: "translate-y-8",
    left: "-translate-x-8",
    right: "translate-x-8",
  }[direction];

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${visible ? "translate-x-0 translate-y-0 opacity-100 blur-0" : `${directionClass} opacity-0 blur-[3px]`}
        ${className}
      `}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* =========================================================
   DATA
========================================================= */

const eligibilityFactors = [
  {
    number: "01",
    icon: CalendarDays,
    title: "Age",
    description:
      "Age can influence the available loan tenure and repayment structure.",
  },
  {
    number: "02",
    icon: IndianRupee,
    title: "Income",
    description:
      "Income helps lenders assess your repayment capacity.",
  },
  {
    number: "03",
    icon: BriefcaseBusiness,
    title: "Employment / Business Stability",
    description:
      "Stable income may support the lender's assessment.",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Credit Profile",
    description:
      "Credit history and repayment behaviour can influence eligibility.",
  },
  {
    number: "05",
    icon: WalletCards,
    title: "Existing Financial Obligations",
    description:
      "Current EMIs may affect your repayment capacity.",
  },
  {
    number: "06",
    icon: House,
    title: "Property Details",
    description:
      "Property value, type and documentation may form part of the assessment.",
  },
];

const employmentOptions = [
  "Salaried",
  "Self-Employed",
  "Business Owner",
  "Professional",
];

const propertyOptions = [
  "New Home",
  "Resale Home",
  "Construction",
  "Home Improvement",
];

/* =========================================================
   NUMBER FORMATTER
========================================================= */

const formatIndianNumber = (value) => {
  if (!value) return "";

  const number = String(value).replace(/\D/g, "");

  if (!number) return "";

  return new Intl.NumberFormat("en-IN").format(Number(number));
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const HomeLoanEligibility = () => {
  const [formData, setFormData] = useState({
    income: "",
    employment: "Salaried",
    age: "",
    existingEmi: "",
    loanAmount: "",
    propertyType: "New Home",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  /* =======================================================
     INPUT CHANGE
  ======================================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  /* =======================================================
     CURRENCY INPUT
  ======================================================= */

  const handleCurrencyChange = (event) => {
    const { name, value } = event.target;

    const numericValue = value.replace(/\D/g, "");

    setFormData((prev) => ({
      ...prev,
      [name]: numericValue,
    }));

    setSubmitted(false);

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  /* =======================================================
     VALIDATION
  ======================================================= */

  const validateForm = () => {
    const newErrors = {};

    if (!formData.income) {
      newErrors.income = "Please enter your monthly income.";
    }

    if (!formData.age) {
      newErrors.age = "Please enter your age.";
    }

    return newErrors;
  };

  /* =======================================================
     SUBMIT
  ======================================================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    // Simulated processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      console.log("Home Loan Eligibility Data:", formData);
    }, 700);
  };

  /* =======================================================
     RESET
  ======================================================= */

  const handleStartAgain = () => {
    setSubmitted(false);
  };

  return (
    <section
      id="eligibility"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative glow */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
           SECTION HEADING
        ===================================================== */}

        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#2c8e18]">
            <ShieldCheck size={15} />
            Home Loan Eligibility
          </div>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 leading-tight tracking-tight  sm:text-4xl lg:text-[48px]">
            Check If You're Eligible
            <span className="block text-[#186A07]">
              for a Home Loan
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
            Get a quick starting point based on a few basic details.
            Actual eligibility, loan amount, interest rate and terms
            depend on the lender and applicant profile.
          </p>
        </Reveal>

        {/* =====================================================
           EQUAL HEIGHT TWO COLUMN LAYOUT
        ===================================================== */}

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-7">

          {/* ===================================================
             LEFT PANEL
          =================================================== */}

          <Reveal direction="left" className="h-full">
            <div className="flex h-full min-h-[650px] flex-col overflow-hidden rounded-[28px] bg-linear-to-r from-[#186A07] to-[#0B2578] p-6 shadow-xl sm:p-8 lg:p-9">

              {/* Header */}

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                  Understand Eligibility
                </p>

                <h3 className="mt-4 max-w-lg text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  What May Influence Your Home Loan Eligibility?
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                  Home loan eligibility is generally assessed using
                  several financial and personal factors. Understanding
                  these can help you prepare for your application.
                </p>
              </div>

              {/* Factors */}

              <div className="mt-8 flex flex-1 flex-col justify-between gap-2">
                {eligibilityFactors.map((factor, index) => {
                  const Icon = factor.icon;

                  return (
                    <Reveal
                      key={factor.number}
                      delay={index * 90}
                    >
                      <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-white/[0.07]">

                        {/* Number */}

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-300/20 bg-white/5 text-xs font-extrabold text-emerald-300 transition duration-300 group-hover:bg-[#2c8e18] group-hover:text-white">
                          {factor.number}
                        </div>

                        {/* Content */}

                        <div className="min-w-0">
                          <div className="flex items-center text-[#2c8e18] gap-2">
                            <Icon
                              size={18}
                              className="shrink-0 text- transition group-hover:scale-110"
                            />

                            <h4 className="text-sm font-bold text-white sm:text-[15px]">
                              {factor.title}
                            </h4>
                          </div>

                          <p className="mt-1.5 text-xs leading-5 text-slate-200 sm:text-[13px]">
                            {factor.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              {/* Bottom trust message */}

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
                    <ShieldCheck size={18} />
                  </div>

                  <p className="text-xs leading-5 text-slate-400">
                    Eligibility varies by lender and applicant
                    profile. This section provides general guidance.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ===================================================
             RIGHT PANEL
          =================================================== */}

          <Reveal direction="right" className="h-full">
            <div className="flex h-full min-h-[650px] flex-col overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-xl sm:p-8 lg:p-9">

              {/* Form heading */}

              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#2c8e18]">
                  <House size={23} />
                </div>

                <h3 className="mt-5 text-2xl font-extrabold  sm:text-3xl">
                  Get Your Eligibility Started
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  Enter a few details to begin.
                </p>
              </div>

              {/* =================================================
                 RESULT STATE
              ================================================= */}

              {submitted ? (
                <div className="flex flex-1 flex-col justify-center">
                  <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-7 sm:p-8">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#10B981] text-white shadow-lg shadow-emerald-500/20">
                      <CheckCircle2 size={28} />
                    </div>

                    <h4 className="mt-5 text-2xl font-extrabold text-[#0B2578]">
                      Details Received
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-[#64748B]">
                      Your information has been captured successfully.
                      Our team can review your details and guide you
                      through the next steps.
                    </p>

                    <div className="mt-6 flex items-start gap-3 rounded-2xl bg-white p-4">
                      <ShieldCheck
                        size={18}
                        className="mt-0.5 shrink-0 text-[#10B981]"
                      />

                      <p className="text-xs leading-5 text-slate-500">
                        Your details are ready for further assessment.
                        This does not represent guaranteed loan approval.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleStartAgain}
                      className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-sm font-bold text-[#0B2578] transition hover:border-emerald-300 hover:bg-emerald-50"
                    >
                      Check Another Profile
                    </button>
                  </div>
                </div>
              ) : (
                /* =================================================
                   FORM
                ================================================= */

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 flex flex-1 flex-col"
                >

                  <div className="space-y-5">

                    {/* Monthly income */}

                    <div>
                      <label
                        htmlFor="income"
                        className="mb-2 block text-sm font-bold text-[#0F172A]"
                      >
                        Monthly Income
                      </label>

                      <div className="relative">
                        <IndianRupee
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <input
                          id="income"
                          name="income"
                          type="text"
                          inputMode="numeric"
                          value={formatIndianNumber(formData.income)}
                          onChange={handleCurrencyChange}
                          placeholder="₹ 75,000"
                          className={`h-12 w-full rounded-xl borde bg-white pl-11 pr-4 text-sm text-[#0F172A] outline-none transition placeholder:text-slate-400  ${
                            errors.income
                              ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                              : "border-[#b9bbbe] border-2 focus:border-[#2c8e18] "
                          }`}
                        />
                      </div>

                      {errors.income && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.income}
                        </p>
                      )}
                    </div>

                    {/* Employment */}

                    <div>
                      <label
                        htmlFor="employment"
                        className="mb-2 block text-sm font-bold text-[#0F172A]"
                      >
                        Employment Type
                      </label>

                      <div className="relative">
                        <BriefcaseBusiness
                          size={18}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <select
                          id="employment"
                          name="employment"
                          value={formData.employment}
                          onChange={handleChange}
                          className="h-12 w-full appearance-none rounded-xl border-2 border-[#b9bbbe] bg-white pl-11 pr-10 text-sm font-medium text-[#0F172A] outline-none transition focus:border-[#2c8e18] "
                        >
                          {employmentOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>

                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                          ▼
                        </span>
                      </div>
                    </div>

                    {/* Age + EMI */}

                    <div className="grid gap-5 sm:grid-cols-1">

                      <div>
                        <label
                          htmlFor="age"
                          className="mb-2 block text-sm font-bold text-[#0F172A]"
                        >
                          Age
                        </label>

                        <div className="relative">
                          <CalendarDays
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                          />

                          <input
                            id="age"
                            name="age"
                            type="number"
                            min="18"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="30"
                            className={`h-12 w-full rounded-xl border bg-white pl-11 pr-4 text-sm text-[#0F172A] outline-none transition placeholder:text-slate-500  ${
                              errors.age
                                ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                                : "border-[#b9bbbe] border-2 focus:border-[#2c8e18] "
                            }`}
                          />
                        </div>

                        {errors.age && (
                          <p className="mt-1.5 text-xs text-red-500">
                            {errors.age}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="existingEmi"
                          className="mb-2 block text-sm font-bold text-[#0F172A]"
                        >
                          Existing Monthly EMI
                        </label>

                        <div className="relative">
                          <IndianRupee
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                          />

                          <input
                            id="existingEmi"
                            name="existingEmi"
                            type="text"
                            inputMode="numeric"
                            value={formatIndianNumber(
                              formData.existingEmi
                            )}
                            onChange={handleCurrencyChange}
                            placeholder="₹ 10,000"
                            className="h-12 w-full rounded-xl  bg-white pl-11 pr-4 text-sm text-[#0F172A] outline-none transition placeholder:text-slate-400 border-[#b9bbbe] border-2 focus:border-[#2c8e18]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Loan amount + property */}

                    <div className="grid gap-5 sm:grid-cols-1">

                      <div>
                        <label
                          htmlFor="loanAmount"
                          className="mb-2 block text-sm font-bold text-[#0F172A]"
                        >
                          Desired Loan Amount
                          <span className="ml-1 text-xs font-medium text-slate-400">
                            Optional
                          </span>
                        </label>

                        <div className="relative">
                          <IndianRupee
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                          />

                          <input
                            id="loanAmount"
                            name="loanAmount"
                            type="text"
                            inputMode="numeric"
                            value={formatIndianNumber(
                              formData.loanAmount
                            )}
                            onChange={handleCurrencyChange}
                            placeholder="₹ 50,00,000"
                            className="h-12 w-full rounded-xl  bg-white pl-11 pr-4 text-sm text-[#0F172A] outline-none transition placeholder:text-slate-400 border-[#b9bbbe] border-2 focus:border-[#2c8e18]"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="propertyType"
                          className="mb-2 block text-sm font-bold text-[#0F172A]"
                        >
                          Property Type
                          <span className="ml-1 text-xs font-medium text-slate-400">
                            Optional
                          </span>
                        </label>

                        <div className="relative">
                          <House
                            size={18}
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                          />

                          <select
                            id="propertyType"
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleChange}
                            className="h-12 w-full appearance-none rounded-xl border-[#b9bbbe] border-2 bg-white pl-11 pr-10 text-sm font-medium text-[#0F172A] outline-none transition  focus:border-[#2c8e18]"
                          >
                            {propertyOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>

                          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                            ▼
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom area fills available height */}

                  <div className="mt-auto pt-6">

                    <button
                      type="submit"
                      disabled={loading}
                      className="group flex h-13 min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-6 text-sm font-extrabold text-white shadow-lg shadow-emerald-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                    >
                      {loading ? "Processing..." : "Check Eligibility"}

                      {!loading && (
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      )}
                    </button>

                    <div className="mt-4 flex items-start gap-2.5">
                      <ShieldCheck
                        size={16}
                        className="mt-0.5 shrink-0 text-[#10B981]"
                      />

                      <p className="text-[11px] leading-5 text-slate-400">
                        Eligibility, loan amount, interest rate and
                        final terms are subject to lender assessment,
                        applicable policies and your profile.
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* Bottom trust message */}

        <Reveal delay={250} className="mt-7">
          <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0B2578]">
              <CheckCircle2
                size={17}
                className="text-[#10B981]"
              />
              Guided Home Loan Journey
            </div>

            <span className="hidden text-slate-300 sm:block">
              •
            </span>

            <p className="text-xs text-slate-500">
              Clear information and support throughout the process.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HomeLoanEligibility;