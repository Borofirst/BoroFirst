import {
  House,
  Hammer,
  ArrowLeftRight,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import { RevealCard } from "../../hook/RevealCard";

const LoanUses = () => {
  const items = [
    {
      icon: House,
      title: "Buy a New Home",
      text: "Finance your dream residential property.",
    },
    {
      icon: Hammer,
      title: "Build Your Home",
      text: "Build a new house on a plot of land you already own, subject to the lender's terms.",
    },
    {
      icon: ArrowLeftRight,
      title: "Transfer Existing Loan",
      text: "Explore options for transferring an existing home loan.",
    },
    {
      icon: Wrench,
      title: "Home Improvement",
      text: "Finance eligible renovation and improvement requirements.",
    },
  ];

  return (
    <section id="loan-uses" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl reveal visible">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2c8e18]">
            Built Around Your Goals
          </p>

         
            <h2 className="mt-5 text-3xl font-extrabold text-slate-900 leading-tight tracking-tight  sm:text-4xl lg:text-[48px]">
            What Can You Use a
            <span className="block text-[#186A07]">
               Home Loan For?
            </span>
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Different homeownership goals may require different financing
            solutions. Explore the possibilities based on your needs.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((card, index) => {
            // const Icon = item.icon;

            return (
                <RevealCard
                            key={card.title}
                            card={card}
                            index={index}
                          />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LoanUses;