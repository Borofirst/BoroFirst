import { useState } from "react";
import {
  HelpCircle,
  Headphones,
  PhoneCall,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";
import { FiPlus, FiMinus } from "react-icons/fi";


// ======================================
// FAQ DATA
// ======================================

const faqData = [
  {
    id: 1,
    question: "Who can apply for a loan?",
    answer:
      "Individuals aged 21–65 years with a stable source of income, valid identity proof, address proof, and the required financial documents can apply for a loan. Eligibility may vary depending on the loan product and lender policies.",
  },

  {
    id: 2,
    question: "What documents are required for loan approval?",
    answer:
      "Typically, you will need your Aadhaar Card, PAN Card, address proof, income proof, salary slips or business financial statements, recent bank statements, and passport-size photographs.",
  },

  {
    id: 3,
    question: "How long does the loan approval process take?",
    answer:
      "Most loan applications are reviewed within 24 to 72 hours after successful document verification. Some instant loan products may be approved even faster.",
  },
  
  {
    id: 4,
    question: "How can I contact customer support?",
    answer:
      "Our customer support team is available through phone, email, and live chat during business hours to assist you with any queries regarding our financial products and services.",
  },


  {
    id: 5,
    question: "How are EMI payments calculated?",
    answer:
      "EMIs are calculated using the loan amount, interest rate, and repayment tenure. Our EMI calculator can help you estimate your monthly repayments before applying.",
  },

  {
    id: 6,
    question: "Can I repay my loan before the tenure ends?",
    answer:
      "Yes. Most lenders allow part-prepayment or complete foreclosure of loans. Applicable charges, if any, depend on the lender's terms and conditions.",
  },

  {
    id: 7,
    question: "Are there any hidden charges?",
    answer:
      "No. We believe in complete transparency. All applicable processing fees, documentation charges, and taxes are clearly communicated before loan approval.",
  },

  {
    id: 8,
    question: "Why should I choose health insurance?",
    answer:
      "Health insurance helps protect you and your family from unexpected medical expenses while ensuring access to quality healthcare without financial stress.",
  },

  {
    id: 9,
    question: "What are the benefits of SIP investments?",
    answer:
      "Systematic Investment Plans (SIPs) help build long-term wealth through disciplined investing, rupee cost averaging, and the power of compounding.",
  },

  {
    id: 10,
    question: "Is my personal information secure?",
    answer:
      "Absolutely. We use industry-standard encryption, secure servers, and strict privacy practices to ensure your personal and financial information remains protected.",
  },


];

const FAQSection = () => {
  const [activeFAQ, setActiveFAQ] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">

      {/* Background */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-40"></div>

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-40"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-[420px_1fr]">

          {/* ===================== */}
          {/* LEFT SIDE */}
          {/* ===================== */}

          <div className="lg:sticky lg:top-28 h-fit">

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2">

              <HelpCircle
                size={18}
                className="text-emerald-600"
              />

              <span className="font-semibold text-emerald-700">
                Need Help?
              </span>

            </div>

            {/* Heading */}

            <h2 className="mt-8 text-4xl font-bold leading-tight text-gray-900">

              Frequently Asked

              <span className="bg-gradient-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
                {" "}
                Questions
              </span>

            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">

              Find quick answers to the most commonly asked questions about
              loans, investments, insurance, eligibility, repayments,
              documentation, and customer support.

            </p>

            {/* Support Card */}

            <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#186A07] to-[#0B2578] text-white">

                <Headphones size={30} />

              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Still have questions?
              </h3>

              <p className="mt-4 leading-7 text-gray-600">

                Our financial experts are always ready to guide you through
                every step of your loan or investment journey.

              </p>

              <button
                className="
                mt-8
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-gradient-to-r 
                from-[#186A07]
                 to-[#0B2578]
                px-6
                py-4
                font-semibold
                text-white
                transition
                duration-300
                hover:scale-[1.02]
                hover:shadow-xl
              "
              >
                <PhoneCall size={20} />

                Contact Support

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

          {/* ===================== */}
          {/* RIGHT SIDE */}
       
          {/* ===================== */}

        <div className="space-y-2">

  {faqData.map((faq, index) => {

    const isOpen = activeFAQ === index;

    return (

      <div
        key={faq.id}
        className={`
          group
          overflow-hidden
          rounded-3xl
          border
          bg-white
          shadow-sm
          transition-all
          duration-300

          ${
            isOpen
              ? "border-emerald-300 shadow-xl"
              : "border-gray-200 hover:border-emerald-200 hover:shadow-lg"
          }
        `}
      >

        {/* Header */}

        <button
          onClick={() =>
            setActiveFAQ(isOpen ? null : index)
          }
          className="
            flex
            w-full
            items-center
            justify-between
            gap-6
            p-4
            text-left
          "
        >

          <div className="flex items-center gap-5">

            <div
              className={`
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-2xl
                transition-all
                duration-300

                ${
                  isOpen
                    ? "bg-gradient-to-r from-[#186A07] to-[#0B2578] text-white"
                    : "bg-gray-100 text-gray-500 group-hover:bg-[#EAF5E8] group-hover:text-[#186A07]"
                }
              `}
            >
              <HelpCircle size={22} />
            </div>

            <h3
              className={`
                text-lg
                font-semibold
                transition-colors
                duration-300

                ${
                  isOpen
                    ? "text-[#186A07]"
                    : "text-gray-900"
                }
              `}
            >
              {faq.question}
            </h3>

          </div>

          <div
            className={`
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              transition-all
              duration-300

              ${
                isOpen
                  ? "bg-gradient-to-r from-[#186A07] to-[#0B2578] rotate-180 text-white"
                  : "bg-gray-100"
              }
            `}
          >

<div>
  {isOpen ? (
    <FiMinus className="h-5 w-5" />
  ) : (
    <FiPlus className="h-5 w-5" />
  )}
</div>

      </div>

        </button>

        {/* Answer */}

        <div
          className={`
            grid
            transition-all
            duration-500

            ${
              isOpen
                ? "grid-rows-[1fr]"
                : "grid-rows-[0fr]"
            }
          `}
        >

          <div className="overflow-hidden">

            <div className="border-t border-gray-100 px-5 pb-5 pt-6">

              <p className="leading-6 text-gray-600">

                {faq.answer}

              </p>

            </div>

          </div>

        </div>

      </div>

    );

  })}

</div>
        </div>

      </div>

    </section>
  );
};

export default FAQSection;