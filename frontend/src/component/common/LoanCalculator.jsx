import { useMemo, useState } from "react";
import { Calculator, IndianRupee, Percent, CalendarDays } from "lucide-react";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(5);

  const calculation = useMemo(() => {
    const principal = Number(loanAmount);
    const annualRate = Number(interestRate);
    const years = Number(tenure);

    const monthlyRate = annualRate / 12 / 100;
    const numberOfMonths = years * 12;

    if (!principal || !years) {
      return {
        emi: 0,
        totalInterest: 0,
        totalPayment: 0,
      };
    }

    let emi;

    if (monthlyRate === 0) {
      emi = principal / numberOfMonths;
    } else {
      emi =
        (principal *
          monthlyRate *
          Math.pow(1 + monthlyRate, numberOfMonths)) /
        (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
    }

    const totalPayment = emi * numberOfMonths;
    const totalInterest = totalPayment - principal;

    return {
      emi,
      totalInterest,
      totalPayment,
    };
  }, [loanAmount, interestRate, tenure]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="loan-EMI" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            <Calculator size={18} />
            Loan Calculator
          </div>

          <h2 className=" text-4xl font-bold text-gray-900 md:text-5xl">
            Calculate Your Loan EMI
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Estimate your monthly EMI, total interest and repayment amount
            before applying for a loan.
          </p>
        </div>

        {/* Calculator */}
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">

          {/* Left - Inputs */}
          <div className="p-6 md:p-10">

            {/* Loan Amount */}
            <div className="mb-7">
              <div className="mb-2 flex items-center justify-between">
                <label className="font-semibold text-slate-800">
                  Loan Amount
                </label>

                <span className="font-bold text-emerald-600">
                  {formatCurrency(loanAmount)}
                </span>
              </div>

              <div className="relative">
                <IndianRupee
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  min="10000"
                  max="100000000"
                />
              </div>

              <input
                type="range"
                min="10000"
                max="100000000"
                step="10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="mt-4 w-full accent-[#186A07]"
              />

              <div className="mt-1 flex justify-between text-xs text-slate-400">
                <span>₹10K</span>
                <span>₹10 Cr</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mb-7">
              <div className="mb-2 flex items-center justify-between">
                <label className="font-semibold text-slate-800">
                  Interest Rate
                </label>

                <span className="font-bold text-emerald-600">
                  {interestRate}% p.a.
                </span>
              </div>

              <div className="relative">
                <Percent
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  min="0"
                  max="30"
                  step="0.1"
                />
              </div>

              <input
                type="range"
                min="1"
                max="30"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="mt-4 w-full accent-[#186A07]"
              />

              <div className="mt-1 flex justify-between text-xs text-slate-400">
                <span>1%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Tenure */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="font-semibold text-slate-800">
                  Loan Tenure
                </label>

                <span className="font-bold text-emerald-600">
                  {tenure} Years
                </span>
              </div>

              <div className="relative">
                <CalendarDays
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  min="1"
                  max="30"
                />
              </div>

              <input
                type="range"
                min="1"
                max="30"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                className="mt-4 w-full accent-[#186A07]"
              />

              <div className="mt-1 flex justify-between text-xs text-slate-400">
                <span>1 Year</span>
                <span>30 Years</span>
              </div>
            </div>
          </div>

          {/* Right - Results */}
          <div className="bg-linear-to-br from-[#186A07] to-emerald-950 p-6 text-white md:p-10">

            <p className="text-sm font-medium text-emerald-100">
              Your Estimated Monthly EMI
            </p>

            <h3 className="mt-2 text-4xl font-bold md:text-5xl">
              {formatCurrency(calculation.emi)}
            </h3>

            <div className="my-8 h-px bg-white/20" />

            {/* Results */}
            <div className="space-y-5">

              <div className="flex items-center justify-between">
                <span className="text-emerald-100">
                  Loan Amount
                </span>

                <span className="font-semibold">
                  {formatCurrency(Number(loanAmount))}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-emerald-100">
                  Total Interest
                </span>

                <span className="font-semibold">
                  {formatCurrency(calculation.totalInterest)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-emerald-100">
                  Total Payable
                </span>

                <span className="font-semibold">
                  {formatCurrency(calculation.totalPayment)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-emerald-100">
                  Tenure
                </span>

                <span className="font-semibold">
                  {tenure} Years
                </span>
              </div>

            </div>

            {/* Breakdown */}
            <div className="mt-8">
              <div className="mb-2 flex justify-between text-sm">
                <span>Principal</span>
                <span>
                  {formatCurrency(Number(loanAmount))}
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-white"
                  style={{
                    width: `${
                      (Number(loanAmount) /
                        calculation.totalPayment) *
                      100
                    }%`,
                  }}
                />
              </div>

              <div className="mt-2 flex justify-between text-xs text-emerald-100">
                <span>Principal</span>
                <span>Interest</span>
              </div>
            </div>

            {/* CTA */}
            <button
              type="button"
              className="mt-8 w-full rounded-xl bg-white px-6 py-3.5 font-semibold text-emerald-800 transition hover:bg-emerald-50"
            >
              Apply for a Loan
            </button>

            <p className="mt-4 text-center text-xs text-emerald-200">
              *This calculator provides an estimate. Actual EMI may vary
              based on lender terms and applicable charges.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;