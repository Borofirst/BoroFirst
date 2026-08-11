import { ArrowRight } from "lucide-react";

const badgeColors = {
  Popular: "bg-emerald-100 text-emerald-700",
  Recommended: "bg-blue-100 text-blue-700",
  "Best Value": "bg-amber-100 text-amber-700",
  Secure: "bg-purple-100 text-purple-700",
  Exclusive: "bg-rose-100 text-rose-700",
};

const ProductCard = ({ product }) => {
  const Icon = product.icon;

  return (
    <div
      className="
      group
      relative
      flex
      h-full
      flex-col
      overflow-hidden
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-6
      shadow-sm
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-emerald-300
      hover:shadow-2xl
    "
    >
      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-[#186A07] to-[#0B2578]"></div>

      {/* Badge */}

      <div
        className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
          badgeColors[product.badge]
        }`}
      >
        {product.badge}
      </div>

      {/* Icon */}

      <div
        className="
        mt-6
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
       bg-linear-to-r
        from-[#186A07] 
        to-[#0B2578]
        text-white
        shadow-lg
        transition-all
        duration-300
        group-hover:scale-110
        group-hover:rotate-6
      "
      >
        <Icon size={30} />
      </div>

      {/* Content */}

      <div className="mt-8">
        <h3
          className="
          text-xl
          font-bold
          text-gray-900
          transition-colors
          duration-300
          group-hover:text-emerald-600
        "
        >
          {product.title}
        </h3>

        <p className="mt-4 text-gray-600 leading-7">{product.description}</p>
      </div>

      {/* Spacer */}

      <div className="flex-grow"></div>

      {/* Learn More */}

      {/* <button
        className="
        mt-8
        flex
        items-center
        gap-2
        font-semibold
        text-emerald-600
        transition-all
        duration-300
        group-hover:gap-4
      "
      >
        Learn More

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button> */}
      <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 font-semibold text-gray-700 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600">
        Learn More
        <ArrowRight size={18} />
      </button>

      {/* Hover Glow */}

      <div
        className="
        absolute
        inset-0
        rounded-3xl
        ring-1
        ring-transparent
        transition-all
        duration-500
        group-hover:ring-emerald-200
      "
      ></div>
    </div>
  );
};

export default ProductCard;
