import useReveal from "./useReveal";

export const RevealCard = ({ card, index }) => {
  const [ref, visible] = useReveal();

  const Icon = card.icon;

  return (
    <div
      ref={ref}
      className={`reveal group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
        visible ? "visible" : ""
      }`}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl  hover:bg-emerald-100 bg-[#EAF5E8]  text-[#186A07] transition duration-300 group-hover:scale-110">
        <Icon size={27} />
      </div>

      <h3 className="mt-6 text-xl font-bold ">
        {card.title}
      </h3>

      <p className="mt-3 leading-7 text-slate-500">
        {card.text}
      </p>
    </div>
  );
};
