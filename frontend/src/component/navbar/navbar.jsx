import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, TrendingUp } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
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
              className="relative font-medium text-slate-700 hover:text-emerald-600 transition group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-emerald-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/signup"
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
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-slate-200 px-6 py-6 space-y-5">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 font-medium hover:text-emerald-600"
            >
              {item.name}
            </Link>
          ))}

          <div className="flex flex-col gap-3 pt-5">
            <Link
              to="/login"
              className="text-center border border-emerald-500 text-emerald-600 py-3 rounded-xl font-semibold"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="text-center py-3 rounded-xl bg-linear-to-r from-emerald-500 to-blue-600 text-white font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
