

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  House,
  Building2,
  CreditCard,
  Target,
  GraduationCap,
  BriefcaseBusiness,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    // { name: "Blogs", path: "/blogs" },
    { name: "Career", path: "/career" },
    { name: "Become Partner", path: "/partner" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    {
      name: "Home Loan",
      description: "Make your dream home a reality",
      path: "/home-loan",
      icon: House,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-700",
    },
    {
      name: "LAP",
      description: "Unlock funds against your property",
      path: "/loan-againt-property",
      icon: Building2,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-700",
    },
    {
      name: "Personal Loan",
      description: "Flexible funds for your needs",
      path: "/personal-loan",
      icon: CreditCard,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-700",
    },
    {
      name: "Gold Loan",
      description: "Finance your important life goals",
      path: "/gold-loan",
      icon: Target,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-700",
    },
    {
      name: "Education Loan",
      description: "Invest in your education and future",
      path: "/education-loan",
      icon: GraduationCap,
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-700",
    },
    {
      name: "Business Loan",
      description: "Fuel your business growth",
      path: "/business-loan",
      icon: BriefcaseBusiness,
      iconBg: "bg-teal-50",
      iconColor: "text-teal-700",
    },
  ];

  return (

  <header
  className="
    fixed
    top-5
    left-1/2
    -translate-x-1/2
    z-50
    w-[calc(100%-2rem)]
    max-w-8xl
    rounded-2xl

    border
    border-white/60

    bg-white/85
    backdrop-blur-md

    shadow-[0_2px_4px_0_rgba(14,30,37,0.12),0_2px_16px_0_rgba(14,30,37,0.20)]

    transition-all
    duration-300

    hover:border-2
    hover:border-[#DFF2D8]
    hover:bg-[#FBFEFA]/90

    hover:shadow-[0_4px_6px_rgba(24,106,7,0.08),0_10px_25px_rgba(24,106,7,0.12),0_20px_45px_rgba(24,106,7,0.10)]

    hover:scale-[1.01]
  "
>
      
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center mt-3">
            <img
              src="/Borofirst-Logos-1-1.webp"
              alt="Borofirst Logo"
              className="
                h-12
                w-auto
                object-contain
                transition-transform
                duration-300
                hover:scale-105
              "
            />
          </div>
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="hidden lg:flex items-center gap-9">

          {/* Home */}
          <Link
            to="/"
            className="
              relative
              font-medium
              text-slate-700
              hover:text-[#186A07]
              transition-colors
              duration-200
              group
            "
          >
            Home

            <span
              className="
                absolute
                -bottom-1
                left-0
                h-0.5
                w-0
                bg-linear-to-r
                from-[#186A07]
                to-[#0B2578]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </Link>


          {/* ================= SERVICES ================= */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >

            {/* Services Button */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="
                group
                flex
                items-center
                gap-1.5
                font-medium
                text-slate-700
                hover:text-[#186A07]
                transition-colors
                duration-200
              "
            >
             Loan-Services

              <ChevronDown
                size={15}
                className={`
                  transition-transform
                  duration-300
                  ${servicesOpen ? "rotate-180" : ""}
                `}
              />

              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-0.5
                  w-0
                  bg-linear-to-r
                  from-[#186A07]
                  to-[#0B2578]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </button>


            {/* ================= SERVICES MEGA MENU ================= */}
            <div
              className={`
                absolute
                left-1/2
                top-full
                -translate-x-1/2
                pt-5
                transition-all
                duration-200
                ${
                  servicesOpen
                    ? "pointer-events-auto opacity-100 translate-y-0"
                    : "pointer-events-none opacity-0 -translate-y-2"
                }
              `}
            >

              <div
                className="
                  w-[680px]
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200/80
                  bg-white/95
                  shadow-[0_25px_70px_rgba(15,23,42,0.16)]
                  backdrop-blur-2xl
                "
              >

                {/* Header */}
                <div
                  className="
                    relative
                    overflow-hidden
                    border-b
                    border-slate-100
                    px-7
                    py-6
                  "
                >

                  {/* Decorative glow */}
                  <div
                    className="
                      absolute
                      -right-10
                      -top-16
                      h-40
                      w-40
                      rounded-full
                      bg-emerald-100/60
                      blur-3xl
                    "
                  />

                  <div className="relative flex items-start justify-between">

                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <Sparkles
                          size={15}
                          className="text-[#186A07]"
                        />

                        <span
                          className="
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.16em]
                            text-[#186A07]
                          "
                        >
                          Financial Services
                        </span>
                      </div>

                      <h3
                        className="
                          text-xl
                          font-bold
                          tracking-tight
                          text-slate-900
                        "
                      >
                        Solutions designed around you
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Choose the right financial solution for your goals.
                      </p>
                    </div>

                    <Link
                      to="/"
                      onClick={() => setServicesOpen(false)}
                      className="
                        group
                        flex
                        items-center
                        gap-1
                        rounded-lg
                        px-3
                        py-2
                        text-xs
                        font-semibold
                        text-[#0B2578]
                        transition
                        hover:bg-blue-50
                      "
                    >
                      View all

                      <ArrowUpRight
                        size={14}
                        className="
                          transition-transform
                          duration-200
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />
                    </Link>

                  </div>
                </div>


                {/* Services Grid */}
                <div className="grid grid-cols-2 gap-2 p-5">

                  {services.map((service) => {
                    const Icon = service.icon;

                    return (
                      <Link
                        key={service.name}
                        to={service.path}
                        onClick={() => setServicesOpen(false)}
                        className="
                          group
                          flex
                          items-center
                          gap-4
                          rounded-2xl
                          p-4
                          transition-all
                          duration-200
                          hover:bg-[#F5FAF4]
                          hover:shadow-sm
                        "
                      >

                        {/* Icon */}
                        <div
                          className={`
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            ${service.iconBg}
                            transition-transform
                            duration-200
                            group-hover:scale-110
                          `}
                        >
                          <Icon
                            size={20}
                            className={service.iconColor}
                          />
                        </div>


                        {/* Content */}
                        <div className="min-w-0 flex-1">

                          <div className="flex items-center justify-between">

                            <h4
                              className="
                                text-xl
                                font-bold
                                text-slate-800
                                transition-colors
                                group-hover:text-[#186A07]
                              "
                            >
                              {service.name}
                            </h4>

                            <ChevronRight
                              size={20}
                              className="
                                text-slate-300
                                transition-all
                                duration-200
                                group-hover:translate-x-1
                                group-hover:text-[#186A07]
                              "
                            />

                          </div>

                          <p
                            className="
                              mt-0.5
                              text-[11px]
                              leading-4
                              text-slate-500
                            "
                          >
                            {service.description}
                          </p>

                        </div>

                      </Link>
                    );
                  })}

                </div>




              </div>

            </div>
          </div>


          {/* Other Navigation Links */}
          {navLinks.slice(1).map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="
                relative
                font-medium
                text-slate-700
                hover:text-[#186A07]
                transition-colors
                duration-200
                group
              "
            >
              {item.name}

              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-0.5
                  w-0
                  bg-linear-to-r
                  from-[#186A07]
                  to-[#0B2578]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </Link>
          ))}

        </nav>


        {/* ================= DESKTOP BUTTON ================= */}
        <div className="hidden lg:flex items-center gap-4">

          <Link
            to="/contact"
            className="
              rounded-xl
              bg-linear-to-r
              from-[#186A07]
              to-[#0B2578]
              px-6
              py-2.5
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-200
              hover:scale-105
              hover:shadow-xl
            "
          >
            Get Started
          </Link>

        </div>


        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-7 w-7 text-slate-700" />
          ) : (
            <Menu className="h-7 w-7 text-slate-700" />
          )}
        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          rounded-b-2xl
          bg-white/95
          transition-all
          duration-300
          ease-out
          ${
            isOpen
              ? "max-h-[800px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div className="border-t border-slate-100">

          <div className="px-5 py-5">

            <div className="space-y-1">

              {/* Home */}
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  px-4
                  py-3.5
                  text-[15px]
                  font-medium
                  text-slate-800
                  transition
                  hover:bg-[#EAF5E8]
                  hover:text-[#186A07]
                "
              >
                Home
                <ChevronRight size={15} />
              </Link>


              {/* Mobile Services */}
              <div>

                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3.5
                    text-[15px]
                    font-semibold
                    text-slate-800
                    transition
                    hover:bg-[#EAF5E8]
                    hover:text-[#186A07]
                  "
                >
                  <span>Services</span>

                  <ChevronDown
                    size={17}
                    className={`
                      transition-transform
                      duration-200
                      ${servicesOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>


                {/* Mobile Services List */}
                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                      servicesOpen
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >

                  <div className="ml-3 space-y-1 border-l border-slate-200 pl-3">

                    {services.map((service) => {
                      const Icon = service.icon;

                      return (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={() => {
                            setIsOpen(false);
                            setServicesOpen(false);
                          }}
                          className="
                            group
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            px-3
                            py-3
                            transition
                            hover:bg-[#F5FAF4]
                          "
                        >

                          <div
                            className={`
                              flex
                              h-9
                              w-9
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              ${service.iconBg}
                            `}
                          >
                            <Icon
                              size={17}
                              className={service.iconColor}
                            />
                          </div>

                          <div className="flex-1">
                            <p className="text-sm font-semibold text-slate-800">
                              {service.name}
                            </p>

                            <p className="text-[10px] text-slate-500">
                              {service.description}
                            </p>
                          </div>

                          <ChevronRight
                            size={14}
                            className="text-slate-300"
                          />

                        </Link>
                      );
                    })}

                  </div>

                </div>

              </div>


              {/* Other Links */}
              {navLinks.slice(2).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3.5
                    text-[15px]
                    font-medium
                    text-slate-800
                    transition
                    hover:bg-[#EAF5E8]
                    hover:text-[#186A07]
                  "
                >
                  <span>{item.name}</span>
                  <ChevronRight size={15} />
                </Link>
              ))}

            </div>


            {/* Divider */}
            <div className="my-4 border-t border-slate-100" />


            {/* Mobile CTA */}
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="
                flex
                items-center
                justify-center
                rounded-xl
                bg-linear-to-r
                from-[#186A07]
                to-[#0B2578]
                px-4
                py-3
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-200
                hover:shadow-md
                active:scale-[0.98]
              "
            >
              Get Started
            </Link>


            {/* Trust Line */}
            <div className="mt-4 flex items-center justify-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

              <span
                className="
                  text-[11px]
                  font-medium
                  tracking-wide
                  text-slate-400
                "
              >
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