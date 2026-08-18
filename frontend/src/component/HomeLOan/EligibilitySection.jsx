
import React, { useMemo, useState } from "react";
import {
  IndianRupee,
  Wallet,
  CreditCard,
  UserRound,
  CalendarDays,
  Gauge,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calculator,
  TrendingUp,
  Info,
  RotateCcw,
} from "lucide-react";

const loanConfig = {
  "Personal Loan": {
    interestRate: 12,
    foir: 0.50,

  },

  "Home Loan": {
    interestRate: 8.5,
    foir: 0.60,

  },

  "Loan Against Property": {
    interestRate: 10,
    foir: 0.60,

  },

  "Business Loan": {
    interestRate: 14,
    foir: 0.50,
   
  },

  "Education Loan": {
    interestRate: 9,
    foir: 0.50,
   
  },
};




const LoanEligibilityChecker = () => {
  const [formData, setFormData] = useState({
    monthlyNetSalary: "30000",
    otherMonthlyIncome: "0",
    existingEmi: "5000",
    loanType: "Personal Loan",
    cibilScore: "750",
    tenureYears: "20",
    age: "32",
  });

  const [showResult, setShowResult] = useState(false);

  const interestRate =
  loanConfig[formData.loanType].interestRate;
  const foir =loanConfig[formData.loanType].foir;

  const formatCurrency = (amount) => {
    if (!Number.isFinite(amount)) return "₹0";

    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (amount) => {
    if (!Number.isFinite(amount)) return "0";

    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setShowResult(false);
  };

  const calculation = useMemo(() => {
    const monthlySalary =
      Number(formData.monthlyNetSalary) || 0;

    const otherIncome =
      Number(formData.otherMonthlyIncome) || 0;

    const existingEmi =
      Number(formData.existingEmi) || 0;

    const tenureYears =
      Number(formData.tenureYears) || 0;

    const age =
      Number(formData.age) || 0;

    const cibil =
      Number(formData.cibilScore) || 0;

    // Total monthly income
    const totalMonthlyIncome =
      monthlySalary + otherIncome;

    // Maximum total EMI based on FOIR
    const maximumTotalEmi =
      totalMonthlyIncome * foir;

    // EMI available for the new loan
    const maximumNewEmi =
      maximumTotalEmi - existingEmi;

    // Number of months
    const numberOfMonths =
      tenureYears * 12;

    // Monthly interest rate
    const monthlyRate =
      interestRate / 12 / 100;

        if (totalMonthlyIncome < 20000) {
    return {
      eligible: false,
      reason: "LOW_INCOME",

      message: `You are not eligible for this loan because your monthly income is less than ${formatCurrency(
        20000
      )}.`,

      totalMonthlyIncome,
      minimumIncome:20000,

      maximumLoanAmount: 0,
      maximumNewEmi: 0,

    };
  }

    let maximumLoanAmount = 0;

    if (
      maximumNewEmi > 0 &&
      numberOfMonths > 0
    ) {
      const powerFactor = Math.pow(
        1 + monthlyRate,
        numberOfMonths
      );

      maximumLoanAmount =
        maximumNewEmi *
        ((powerFactor - 1) /
          (monthlyRate * powerFactor));
    }

    const maturityAge =
      age + tenureYears;

    const eligible =
      totalMonthlyIncome > 25000 &&
      maximumNewEmi > 0 &&
      age >= 21 &&
      age <= 60 &&
      cibil >= 650 &&
      tenureYears > 0;

    return {
      monthlySalary,
      otherIncome,
      existingEmi,
      totalMonthlyIncome,
      maximumTotalEmi,
      maximumNewEmi,
      maximumLoanAmount,
      tenureYears,
      interestRate,
      age,
      cibil,
      maturityAge,
      eligible,
    };
  }, [formData]);

  const handleSubmit = (e) => {
    console.log("veeke")
    e.preventDefault();
    setShowResult(true);
  };

  const handleReset = () => {
    setFormData({
      monthlyNetSalary: "",
      otherMonthlyIncome: "",
      existingEmi: "",
      loanType: "Personal Loan",
      cibilScore: "750",
      tenureYears: "20",
      age: "",
    });

    setShowResult(false);
  };

  const inputClasses =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pl-11 text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10";

  const labelClasses =
    "mb-2 block text-sm font-semibold text-slate-700";

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            <Calculator size={16} />
            Smart Loan Eligibility Calculator
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Check Your{" "}
            <span className="text-emerald-600">
              Loan Eligibility
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
            Enter a few basic details to get an estimated loan
            amount and monthly EMI you may qualify for.
          </p>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">

          <div className="grid lg:grid-cols-12">

            {/* LEFT - FORM */}
            <div className="p-6 sm:p-8 lg:col-span-7 lg:p-10">

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900">
                  Enter Your Details
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Provide accurate information for a better
                  eligibility estimate.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Salary */}
                <div>
                  <label
                    htmlFor="monthlyNetSalary"
                    className={labelClasses}
                  >
                    Monthly Net Salary (₹)
                  </label>

                  <div className="relative">
                    <IndianRupee
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="monthlyNetSalary"
                      name="monthlyNetSalary"
                      type="number"
                      min="0"
                      value={formData.monthlyNetSalary}
                      onChange={handleChange}
                      placeholder="e.g. 54790"
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Other Income */}
                <div>
                  <label
                    htmlFor="otherMonthlyIncome"
                    className={labelClasses}
                  >
                    Other Monthly Income (₹)
                    <span className="ml-2 font-normal text-slate-400">
                      Optional
                    </span>
                  </label>

                  <div className="relative">
                    <Wallet
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="otherMonthlyIncome"
                      name="otherMonthlyIncome"
                      type="number"
                      min="0"
                      value={formData.otherMonthlyIncome}
                      onChange={handleChange}
                      placeholder="e.g. 10000"
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Existing EMI */}
                <div>
                  <label
                    htmlFor="existingEmi"
                    className={labelClasses}
                  >
                    Existing EMIs Per Month (₹)
                  </label>

                  <div className="relative">
                    <CreditCard
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="existingEmi"
                      name="existingEmi"
                      type="number"
                      min="0"
                      value={formData.existingEmi}
                      onChange={handleChange}
                      placeholder="e.g. 5000"
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Loan Type */}
                <div>
                  <label
                    htmlFor="loanType"
                    className={labelClasses}
                  >
                    Loan Type
                  </label>

                  <div className="relative">
                    <Wallet
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <select
                      id="loanType"
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none`}
                    >
                      <option>Personal Loan</option>
                      <option>Home Loan</option>
                      <option>Loan Against Property</option>
                      <option>Business Loan</option>
                      <option>Education Loan</option>
                    </select>
                  </div>
                </div>

                {/* CIBIL + Age */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="cibilScore"
                      className={labelClasses}
                    >
                      CIBIL Score
                    </label>

                    <div className="relative">
                      <Gauge
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <select
                        id="cibilScore"
                        name="cibilScore"
                        value={formData.cibilScore}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none`}
                      >
                        <option value="800">
                          800+ (Exceptional)
                        </option>
                        <option value="750">
                          750+ (Excellent)
                        </option>
                        <option value="700">
                          700–749 (Good)
                        </option>
                        <option value="650">
                          650–699 (Fair)
                        </option>
                        <option value="600">
                          Below 650
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="age"
                      className={labelClasses}
                    >
                      Age (Years)
                    </label>

                    <div className="relative">
                      <UserRound
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        id="age"
                        name="age"
                        type="number"
                        min="18"
                        max="100"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="e.g. 32"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                </div>

                {/* Tenure */}
                <div>
                  <label
                    htmlFor="tenureYears"
                    className={labelClasses}
                  >
                    Loan Tenure
                  </label>

                  <div className="relative">
                    <CalendarDays
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <select
                      id="tenureYears"
                      name="tenureYears"
                      value={formData.tenureYears}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none`}
                    >
                      <option value="1">1 Year</option>
                      <option value="2">2 Years</option>
                      <option value="3">3 Years</option>
                      <option value="5">5 Years</option>
                      <option value="7">7 Years</option>
                      <option value="10">10 Years</option>
                      <option value="15">15 Years</option>
                      <option value="20">20 Years</option>
                      <option value="25">25 Years</option>
                      <option value="30">30 Years</option>
                    </select>
                  </div>
                </div>

                {/* Rate */}
                <div className="flex items-center justify-between rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                      <TrendingUp size={18} />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        Applicable Interest Rate
                      </p>

                      <p className="text-sm font-bold text-slate-900">
                        {interestRate}% p.a.
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
                    Fixed for calculation
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 pt-2 sm:flex-row">

                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                  >
                    <RotateCcw size={16} />
                    Reset
                  </button>

                </div>

              </form>
            </div>

            {/* RIGHT - RESULT */}
            <div className="relative overflow-hidden bg-linear-to-r from-[#186A07] to-[#0B2578]  p-6 text-white sm:p-8 lg:col-span-5 lg:p-10">

              {/* Decorative circles */}
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-2xl" />
              <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative flex h-full flex-col">

{ calculation.reason === "LOW_INCOME" ? (
  <div className="flex  h-full flex-col justify-center">
    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
      <Info
        size={30}
        className="text-red-400"
      />
    </div>

    <p className="text-sm font-semibold text-red-400">
      Eligibility Update
    </p>

    <h3 className="mt-2 text-2xl font-bold text-white">
      You are currently not eligible
    </h3>

    <p className="mt-4 text-sm leading-6 text-slate-400">
      Your monthly income is below the minimum income
      requirement for this loan.
    </p>

    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-5">

      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-400">
          Your Monthly Income
        </span>

        <span className="font-bold text-white">
          {formatCurrency(
            calculation.totalMonthlyIncome
          )}
        </span>
      </div>

      <div className="my-4 border-t border-white/10" />

      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-400">
          Minimum Required Income
        </span>

        <span className="font-bold text-emerald-400">
          {formatCurrency(
            calculation.minimumIncome
          )}
        </span>
      </div>

    </div>

    <div className="mt-5 rounded-xl border border-red-500/10 bg-red-500/5 p-4">
      <p className="text-sm leading-6 text-slate-400">
        You are not eligible for this loan because your
        monthly income is less than{" "}
        <span className="font-semibold text-white">
          {formatCurrency(
            calculation.minimumIncome
          )}
        </span>.
      </p>
    </div>

  </div>
) : (

                 <>
                    <div className="mb-8">

                      <div className="mb-3 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15">
                          <CheckCircle2
                            size={18}
                            className="text-emerald-400"
                          />
                        </div>

                        <span className="text-sm font-semibold text-emerald-400">
                          Estimated Eligibility
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold sm:text-3xl">
                        Your Estimated
                        <span className="block text-emerald-400">
                          Loan Amount
                        </span>
                      </h3>

                    </div>

                    {/* Maximum Amount */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">

                      <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                        Maximum Estimated Loan Amount
                      </p>

                      <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        {formatCurrency(
                          calculation.maximumLoanAmount
                        )}
                      </p>

                      <div className="mt-3 flex items-center gap-2 text-xs text-emerald-400">
                        <CheckCircle2 size={14} />
                        Based on provided information
                      </div>

                    </div>

                    {/* Stats */}
                    <div className="mt-4 grid grid-cols-2 gap-3">

                      <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                        <p className="text-xs text-slate-400">
                          Maximum New EMI
                        </p>

                        <p className="mt-1 text-lg font-bold text-white">
                          {formatCurrency(
                            calculation.maximumNewEmi
                          )}
                        </p>

                        <p className="mt-1 text-[11px] text-slate-500">
                          Per month
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                        <p className="text-xs text-slate-400">
                          Interest Rate
                        </p>

                        <p className="mt-1 text-lg font-bold text-white">
                          {interestRate}%
                        </p>

                        <p className="mt-1 text-[11px] text-slate-500">
                          Per annum
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                        <p className="text-xs text-slate-400">
                          Loan Tenure
                        </p>

                        <p className="mt-1 text-lg font-bold text-white">
                          {calculation.tenureYears}
                        </p>

                        <p className="mt-1 text-[11px] text-slate-500">
                          Years
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                        <p className="text-xs text-slate-400">
                          Total Income
                        </p>

                        <p className="mt-1 text-lg font-bold text-white">
                          {formatCurrency(
                            calculation.totalMonthlyIncome
                          )}
                        </p>

                        <p className="mt-1 text-[11px] text-slate-500">
                          Per month
                        </p>
                      </div>

                    </div>

                    {/* Breakdown */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-[12px] leading-5 ">
                    This calculator provides an indicative estimate
                    based on the information entered and selected
                    assumptions. Actual loan eligibility, interest
                    rate, loan amount and approval are subject to
                    lender-specific policies and verification.
                  </p>

                </div>

                  </>
)}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default LoanEligibilityChecker;
