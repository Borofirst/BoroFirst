import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, TrendingUp, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky m-5 rounded-2xl top-5 z-50 bg-white/90 backdrop-blur-md  shadow-[0_2px_4px_0_rgba(14,30,37,0.12),0_2px_16px_0_rgba(14,30,37,0.32)] transition-transform duration-300 hover:scale-101">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center mt-3">
            <img
              src="/Borofirst-Logos-1-1.webp"
              alt="Borofirst Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative font-medium text-slate-700 hover:text-[#186A07] transition group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#186A07] to-[#0B2578] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            
            className="px-6 py-2.5 rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? (
            <X className="w-7 h-7 text-slate-700" />
          ) : (
            <Menu className="w-7 h-7 text-slate-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
<div
  className={`lg:hidden overflow-hidden transition-all duration-300 ease-out rounded-b-2xl bg-white/90 ${
    isOpen
      ? "max-h-[520px] opacity-100"
      : "max-h-0 opacity-0"
  }`}
>
  <div className="border-t border-slate-100 bg-white/90">
    <div className="px-5 py-5">

      {/* Navigation */}
      <div className="space-y-1">
        {navLinks.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className="
              group flex items-center justify-between
              rounded-xl
              px-4 py-3.5
              text-[15px]
              font-medium
              text-slate-700
              transition-all duration-200
              hover:bg-[#EAF5E8]
            hover:text-[#186A07]
              active:scale-[1]
            "
          >
            <span>{item.name}</span>

            <ChevronRight size={15}/>
          </Link>
        ))}
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-slate-100" />

      {/* Authentication */}
      <div className="">

        {/* Get Started */}
        <Link
          to="/signup"
          onClick={() => setIsOpen(false)}
          className="
            flex items-center justify-center
            rounded-xl
           bg-linear-to-r 
           from-[#186A07] 
           to-[#0B2578]
            px-4 py-3
            text-sm
            font-semibold
            text-white
            shadow-sm
            shadow-emerald-500/20
            transition-all duration-200
            hover:from-emerald-700
            hover:to-emerald-600
            hover:shadow-md
            hover:shadow-emerald-500/20
            active:scale-[0.98]
          "
        >
          Get Started
        </Link>

      </div>

      {/* Trust Line */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <span className="text-[11px] font-medium tracking-wide text-slate-400">
          Trusted Financial Solutions
        </span>
      </div>

    </div>
  </div>
</div>
    </header>
  );
};

export default Navbar;
