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
    <section id="loan-uses" className="bg-[#F8FAFC] pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className=" reveal visible">
      
                  

                     <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#186A07]/15 bg-[#F4FAF1] px-4 py-2 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#186A07]/40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#186A07]" />
              </span>

              <span className="text-xs font-bold tracking-[0.16em] text-[#186A07]">
                 Built Around Your Goals
              </span>
            </div>

         
            <h2 className=" text-3xl font-semibold text-slate-900 leading-tight tracking-tight   lg:text-4xl">
            What Can You Use a {" "}
            <span className=" ">
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