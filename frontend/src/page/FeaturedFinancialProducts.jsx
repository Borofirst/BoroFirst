import ProductCard from "../component/layout/ProductCard.jsx";
import {products} from "../data/Futureproduct.js"
const FeaturedFinancialProducts = () => {   
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">

      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-40"></div>

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-40"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            FEATURED PRODUCTS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Featured Financial
            <span className="bg-gradient-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
              {" "}
              Products
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Explore our most trusted financial solutions designed to help you
            achieve your personal and financial goals with confidence.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedFinancialProducts;