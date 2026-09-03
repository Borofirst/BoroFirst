import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Gem,
  IndianRupee,
  Percent,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/* =========================================================
   CONFIGURATION
   ========================================================= */

// Example values only.
// Replace these with the applicable lender/product configuration
// before using the calculator in production.
const DEFAULT_GOLD_RATE = 6500;
const DEFAULT_LTV = 75;

const purityOptions = [
  {
    value: 18,
    label: "18K",
    factor: 0.75,
  },
  {
    value: 20,
    label: "20K",
    factor: 0.8333,
  },
  {
    value: 22,
    label: "22K",
    factor: 0.9167,
  },
  {
    value: 24,
    label: "24K",
    factor: 1,
  },
];

/* =========================================================
   HELPERS
   ========================================================= */

const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.max(0, value || 0));
};

const calculateGoldValue = (weight, goldRate, purityFactor) => {
  return weight * goldRate * purityFactor;
};

const calculateEligibleLoanAmount = (goldValue, ltv) => {
  return goldValue * (ltv / 100);
};

/* =========================================================
   COMPONENT
   ========================================================= */

const GoldLoanAmountEstimator = () => {
  const [purity, setPurity] = useState(22);
  const [weight, setWeight] = useState(50);
  const [goldRate, setGoldRate] = useState(DEFAULT_GOLD_RATE);
  const [ltv, setLtv] = useState(DEFAULT_LTV);

  const selectedPurity = purityOptions.find(
    (item) => item.value === Number(purity),
  );

  /* =======================================================
     CALCULATIONS
  ======================================================= */

  const calculation = useMemo(() => {
    const safeWeight = Number(weight) || 0;
    const safeGoldRate = Number(goldRate) || 0;
    const safeLtv = Number(ltv) || 0;

    const goldValue = calculateGoldValue(
      safeWeight,
      safeGoldRate,
      selectedPurity?.factor || 1,
    );

    const eligibleLoanAmount = calculateEligibleLoanAmount(goldValue, safeLtv);

    return {
      goldValue,
      eligibleLoanAmount,
      isValid:
        safeWeight > 0 && safeGoldRate > 0 && safeLtv > 0 && safeLtv <= 100,
    };
  }, [weight, goldRate, ltv, selectedPurity]);

  /* =======================================================
     VALIDATION
  ======================================================= */

  const weightError =
    weight !== "" && (Number(weight) <= 0 || Number(weight) > 10000)
      ? "Enter a valid gold weight."
      : "";

  const goldRateError =
    goldRate !== "" && (Number(goldRate) <= 0 || Number(goldRate) > 1000000)
      ? "Enter a valid gold valuation."
      : "";

  const ltvError =
    ltv !== "" && (Number(ltv) <= 0 || Number(ltv) > 100)
      ? "LTV must be between 0% and 100%."
      : "";

  /* =======================================================
     INPUT HANDLERS
  ======================================================= */

  const handleWeightChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setWeight("");
      return;
    }

    setWeight(Math.min(Number(value), 10000));
  };

  const handleGoldRateChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setGoldRate("");
      return;
    }

    setGoldRate(Math.min(Number(value), 1000000));
  };

  const handleLtvChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setLtv("");
      return;
    }

    setLtv(Math.min(Number(value), 100));
  };

  return (
    <section
      id="gold-loan-calculator"
      aria-labelledby="gold-loan-estimator-title"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#10B981]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#0B2578]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[15%] top-10 h-24 w-24 rounded-full bg-[#D4AF37]/5 blur-2xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===================================================
            HEADER
        ==================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#186A07]" />
            </span>

            <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
              GOLD LOAN ESTIMATOR
            </span>
          </div>

          {/* Heading */}

          <h2 className=" text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.45rem]">
            How Much Gold Loan{" "}
            <span className="bg-linear-to-r block from-[#186A07] to-[#0B2578] bg-clip-text text-transparent ">
              Can I Get?
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base">
            Your estimated gold loan amount depends on the purity and weight of
            eligible gold, its applicable valuation and the lender's applicable
            LTV or policy.
          </p>
        </div>

        {/* ===================================================
            MAIN GRID
        ==================================================== */}

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="lg:sticky lg:top-24">
            {/* Formula Card */}

            <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,0.05)] sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B2578]/5 text-[#0B2578]">
                  <Calculator size={19} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#0F172A]">
                    How the estimate works
                  </p>

                  <p className="text-xs text-[#64748B]">
                    A simple way to understand your estimate
                  </p>
                </div>
              </div>

              {/* Formula */}

              <div className="mt-7 space-y-3">
                <FormulaItem
                  icon={Gem}
                  title="Gold Purity"
                  text="Higher purity can affect applicable gold valuation."
                />

                <FormulaOperator>+</FormulaOperator>

                <FormulaItem
                  icon={Scale}
                  title="Net Gold Weight"
                  text="Weight of eligible gold after applicable deductions."
                />

                <FormulaOperator>+</FormulaOperator>

                <FormulaItem
                  icon={IndianRupee}
                  title="Gold Valuation"
                  text="Applicable value used for eligible gold."
                />

                <FormulaOperator>×</FormulaOperator>

                <FormulaItem
                  icon={Percent}
                  title="Applicable LTV / Policy"
                  text="LTV depends on the lender and applicable product terms."
                />

                <div className="my-5 h-px bg-[#E2E8F0]" />

                <div className="flex items-center gap-3 rounded-2xl bg-linear-to-r from-[#0B2578] to-[#186A07] p-4 text-white">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Calculator size={19} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">
                      Result
                    </p>

                    <p className="mt-0.5 text-sm font-bold">
                      Estimated Eligible Loan Amount
                    </p>
                  </div>

                  <ArrowRight
                    size={18}
                    className="ml-auto shrink-0 text-[#6EE7B7]"
                  />
                </div>
              </div>
            </div>

            {/* Supporting information */}

            <div className="mt-5 flex gap-3 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-4">
              <ShieldCheck
                size={18}
                className="mt-0.5 shrink-0 text-[#D4AF37]"
              />

              <p className="text-xs leading-5 text-[#64748B]">
                Gold purity, valuation methods and applicable LTV can vary
                between lenders and products. The calculator provides an
                indicative estimate only.
              </p>
            </div>
          </div>

          {/* =================================================
              CALCULATOR
          ================================================== */}

          <div className="overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            {/* Calculator Header */}

            <div className="border-b border-[#E2E8F0] bg-linear-to-r from-[#F8FAFC] to-white p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-extrabold tracking-tight text-[#0F172A]">
                    Gold Loan Amount Estimator
                  </p>

                  <p className="mt-1 text-sm text-[#64748B]">
                    Adjust the details to see your indicative estimate.
                  </p>
                </div>

                <div className="hidden h-11 w-11 items-center justify-center rounded-2xl bg-[#10B981]/10 text-[#10B981] sm:flex">
                  <Sparkles size={20} />
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-7">
              {/* =================================================
                  INPUTS
              ================================================== */}

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Gold Purity */}

                <div>
                  <label
                    htmlFor="gold-purity"
                    className="mb-2 block text-sm font-bold text-[#0F172A]"
                  >
                    Gold Purity
                  </label>

                  <div className="relative">
                    <select
                      id="gold-purity"
                      value={purity}
                      onChange={(e) => setPurity(Number(e.target.value))}
                      className="h-12 w-full appearance-none rounded-xl border border-[#E2E8F0] bg-white px-4 pr-10 text-sm font-semibold text-[#0F172A] outline-none transition-all duration-200 focus:border-[#10B981] focus:ring-4 focus:ring-[#10B981]/10"
                    >
                      {purityOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>

                    <Gem
                      size={17}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                    />
                  </div>

                  <p className="mt-2 text-[11px] leading-5 text-[#94A3B8]">
                    Selected purity: {selectedPurity?.label}
                  </p>
                </div>

                {/* Net Weight */}

                <div>
                  <label
                    htmlFor="gold-weight"
                    className="mb-2 block text-sm font-bold text-[#0F172A]"
                  >
                    Net Gold Weight
                  </label>

                  <div className="relative">
                    <input
                      id="gold-weight"
                      type="number"
                      min="0.1"
                      max="10000"
                      step="0.1"
                      value={weight}
                      onChange={handleWeightChange}
                      placeholder="50"
                      aria-invalid={Boolean(weightError)}
                      className={`h-12 w-full rounded-xl border bg-white px-4 pr-16 text-sm font-semibold text-[#0F172A] outline-none transition-all duration-200 ${
                        weightError
                          ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                          : "border-[#E2E8F0] focus:border-[#10B981] focus:ring-4 focus:ring-[#10B981]/10"
                      }`}
                    />

                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#64748B]">
                      grams
                    </span>
                  </div>

                  <p className="mt-2 text-[11px] leading-5 text-[#94A3B8]">
                    Excluding stones or other non-gold components where
                    applicable.
                  </p>

                  {weightError && (
                    <p className="mt-1 text-xs font-medium text-red-500">
                      {weightError}
                    </p>
                  )}
                </div>

                {/* Gold Rate */}

                <div>
                  <label
                    htmlFor="gold-rate"
                    className="mb-2 block text-sm font-bold text-[#0F172A]"
                  >
                    Indicative Gold Value / Gram
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-[#64748B]">
                      ₹
                    </span>

                    <input
                      id="gold-rate"
                      type="number"
                      min="1"
                      max="1000000"
                      step="1"
                      value={goldRate}
                      onChange={handleGoldRateChange}
                      placeholder="6500"
                      aria-invalid={Boolean(goldRateError)}
                      className={`h-12 w-full rounded-xl border bg-white pl-9 pr-4 text-sm font-semibold text-[#0F172A] outline-none transition-all duration-200 ${
                        goldRateError
                          ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                          : "border-[#E2E8F0] focus:border-[#10B981] focus:ring-4 focus:ring-[#10B981]/10"
                      }`}
                    />
                  </div>

                  <p className="mt-2 text-[11px] leading-5 text-[#94A3B8]">
                    Not a live market price unless connected to a verified
                    pricing source.
                  </p>

                  {goldRateError && (
                    <p className="mt-1 text-xs font-medium text-red-500">
                      {goldRateError}
                    </p>
                  )}
                </div>

                {/* LTV */}

                <div>
                  <label
                    htmlFor="gold-ltv"
                    className="mb-2 block text-sm font-bold text-[#0F172A]"
                  >
                    Applicable LTV
                  </label>

                  <div className="relative">
                    <input
                      id="gold-ltv"
                      type="number"
                      min="1"
                      max="100"
                      step="0.1"
                      value={ltv}
                      onChange={handleLtvChange}
                      placeholder="75"
                      aria-invalid={Boolean(ltvError)}
                      className={`h-12 w-full rounded-xl border bg-white px-4 pr-12 text-sm font-semibold text-[#0F172A] outline-none transition-all duration-200 ${
                        ltvError
                          ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                          : "border-[#E2E8F0] focus:border-[#10B981] focus:ring-4 focus:ring-[#10B981]/10"
                      }`}
                    />

                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-[#64748B]">
                      %
                    </span>
                  </div>

                  <p className="mt-2 text-[11px] leading-5 text-[#94A3B8]">
                    May vary by lender, product and applicable policy.
                  </p>

                  {ltvError && (
                    <p className="mt-1 text-xs font-medium text-red-500">
                      {ltvError}
                    </p>
                  )}
                </div>
              </div>

              {/* =================================================
                  CALCULATION SUMMARY
              ================================================== */}

              <div className="my-7 h-px bg-[#E2E8F0]" />

              <div className="grid gap-3 sm:grid-cols-2">
                {/* Gold Value */}

                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">
                  <div className="flex items-center gap-2">
                    <IndianRupee size={15} className="text-[#10B981]" />

                    <span className="text-xs font-semibold text-[#64748B]">
                      Estimated Gold Value
                    </span>
                  </div>

                  <p className="mt-2 text-xl font-extrabold tracking-tight text-[#0F172A]">
                    {formatCurrency(calculation.goldValue)}
                  </p>
                </div>

                {/* LTV */}

                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">
                  <div className="flex items-center gap-2">
                    <Percent size={15} className="text-[#10B981]" />

                    <span className="text-xs font-semibold text-[#64748B]">
                      Applicable LTV
                    </span>
                  </div>

                  <p className="mt-2 text-xl font-extrabold tracking-tight text-[#0F172A]">
                    {ltv || 0}%
                  </p>
                </div>
              </div>

              {/* =================================================
                  MAIN RESULT
              ================================================== */}

              <div className="relative mt-4 overflow-hidden rounded-[24px] bg-linear-to-br from-[#0B2578] via-[#10347F] to-[#186A07] p-6 text-white sm:p-7">
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full border border-white/10"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full border border-[#6EE7B7]/10"
                />

                <div className="relative">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                      <Calculator size={15} />
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60">
                      Estimated Eligible Loan Amount
                    </span>
                  </div>

                  <p className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {calculation.isValid
                      ? formatCurrency(calculation.eligibleLoanAmount)
                      : "₹0"}
                  </p>

                  <p className="mt-2 max-w-md text-xs leading-5 text-white/60">
                    This is an indicative estimate, not a loan sanction.
                  </p>

                  <div className="mt-5 flex items-start gap-2 border-t border-white/10 pt-4">
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0 text-[#6EE7B7]"
                    />

                    <p className="text-[11px] leading-5 text-white/60">
                      Final loan amount depends on the lender's valuation,
                      eligibility assessment, applicable LTV/policy and other
                      terms.
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  CTA
              ================================================== */}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="/contact">
                  <button
                    type="button"
                    disabled={!calculation.isValid}
                    className="group inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#186A07]  to-[#0B2578] px-5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(16,185,129,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0ea371] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    Apply Now
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </a>

                <a
                  href="tel:+917060162526"
                  type="button"
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white px-5 text-sm font-bold text-[#0B2578] transition-all duration-300 hover:border-[#0B2578]/20 hover:bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#0B2578] focus:ring-offset-2"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            REGULATORY NOTE
        ==================================================== */}

        <div className="mx-auto mt-8 max-w-5xl text-center">
          <p className="text-[11px] leading-5 text-[#94A3B8]">
            Gold loan amount is indicative. Final eligibility and sanctioned
            amount depend on the lender's gold valuation, applicable LTV/policy,
            eligibility criteria, repayment capacity where applicable, and other
            applicable terms.
          </p>

          <p className="mt-1 text-[11px] leading-5 text-[#94A3B8]">
            Gold valuation and applicable LTV may vary by lender and product.
          </p>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   FORMULA ITEM
========================================================= */

const FormulaItem = ({ icon: Icon, title, text }) => {
  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 transition-all duration-300 hover:border-[#10B981]/30 hover:bg-white">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0B2578] shadow-sm transition-all duration-300 group-hover:bg-[#10B981] group-hover:text-white">
        <Icon size={18} strokeWidth={1.8} />
      </div>

      <div className="min-w-0">
        <p className="text-sm font-bold text-[#0F172A]">{title}</p>

        <p className="mt-0.5 text-[11px] leading-5 text-[#64748B]">{text}</p>
      </div>
    </div>
  );
};

/* =========================================================
   FORMULA OPERATOR
========================================================= */

const FormulaOperator = ({ children }) => {
  return (
    <div className="flex h-4 items-center justify-center">
      <span className="text-sm font-extrabold text-[#D4AF37]">{children}</span>
    </div>
  );
};

export default GoldLoanAmountEstimator;
