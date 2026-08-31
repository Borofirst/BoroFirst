
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Handshake,
  Landmark,
  Mail,
  MessageSquare,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { submitPartnerForm } from "../../service/contectService";

const partners = [
  { name: "HDFC", initials: "HDFC" },
  { name: "Punjab National Bank", initials: "PNB" },
  { name: "Axis Bank", initials: "AXIS" },
  { name: "IDBI", initials: "IDBI" },
  { name: "L&T Finance", initials: "L&T" },
  { name: "Kotak Mahindra", initials: "KMB" },
  { name: "RBL Bank", initials: "RBL" },
  { name: "Central Bank", initials: "CB" },
  { name: "BCB", initials: "BCB" },
  { name: "Bandhan Bank", initials: "BB" },
  { name: "Aditya Birla", initials: "AB" },
  { name: "Cholamandalam Finance", initials: "CHOLA" },
  { name: "Tata Capital", initials: "TATA" },
  { name: "PNB Housing", initials: "PNBH" },
  { name: "Jeevan", initials: "JEEVAN" },
  { name: "ICICI", initials: "ICICI" },
  { name: "IDFC", initials: "IDFC" },
];

const stats = [
  {
    value: "17+",
    label: "Financial Partners",
    icon: Handshake,
  },
  {
    value: "6+",
    label: "Loan Solutions",
    icon: Landmark,
  },
  {
    value: "Pan-India",
    label: "Financial Network",
    icon: Network,
  },
  {
    value: "Customer",
    label: "First Approach",
    icon: Users,
  },
];

const benefits = [
  {
    title: "Expand Your Reach",
    description:
      "Connect with more customers seeking suitable financial solutions.",
    icon: TrendingUp,
  },
  {
    title: "Strong Financial Network",
    description:
      "Become part of a growing ecosystem built around financial access.",
    icon: Network,
  },
  {
    title: "Collaborative Growth",
    description:
      "Build meaningful, long-term relationships with a customer-first approach.",
    icon: Handshake,
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Work together to create a smoother and more transparent customer journey.",
    icon: ShieldCheck,
  },
];

const partnershipTypes = [
  "Bank",
  "NBFC",
  "Financial Institution",
  "Fintech",
  "Insurance",
  "Other",
];

const initialFormData = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  partnershipType: "",
  message: "",
};

const PartnerStat = ({ value, label, icon: Icon }) => (
  <div className="group flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-md">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF5E8] text-[#186A07] transition-transform duration-300 group-hover:scale-105">
      <Icon size={20} strokeWidth={1.8} />
    </div>

    <div>
      <div className="text-lg font-bold tracking-tight text-slate-900">
        {value}
      </div>

      <div className="text-[11px] font-medium text-slate-500">
        {label}
      </div>
    </div>
  </div>
);

const PartnerCard = ({ name, initials }) => (
  <div className="group relative flex min-h-[142px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#186A07]/25 hover:shadow-[0_18px_40px_rgba(15,23,42,0.09)]">
    <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#EAF5E8]/70 blur-2xl transition-all duration-500 group-hover:bg-blue-50" />

    <div className="relative flex items-start justify-between">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white text-[11px] font-extrabold tracking-tight text-slate-700 shadow-sm transition-all duration-300 group-hover:border-emerald-100 group-hover:bg-[#EAF5E8] group-hover:text-[#186A07]">
        {initials}
      </div>

      <ArrowUpRight
        size={16}
        className="text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#186A07]"
      />
    </div>

    <div className="relative mt-5">
      <h3 className="line-clamp-2 text-sm font-bold leading-5 text-slate-800 transition-colors duration-300 group-hover:text-[#186A07]">
        {name}
      </h3>

      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400">
        Financial Partner
      </p>
    </div>
  </div>
);

const BenefitCard = ({ title, description, icon: Icon }) => (
  <div className="group flex gap-4 rounded-2xl border border-slate-200/70 bg-white/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:bg-white hover:shadow-md">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF5E8] text-[#186A07] transition-all duration-300 group-hover:bg-[#186A07] group-hover:text-white">
      <Icon size={18} strokeWidth={1.8} />
    </div>

    <div>
      <h3 className="text-sm font-bold text-slate-800">
        {title}
      </h3>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {description}
      </p>
    </div>
  </div>
);

const BecomePartner = () => {
  const [formData, setFormData] = useState(initialFormData);

  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [error, setError] = useState("");

  /*
  |--------------------------------------------------------------------------
  | Handle Input Changes
  |--------------------------------------------------------------------------
  */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Remove previous error when user starts editing
    if (error) {
      setError("");
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Validate Form
  |--------------------------------------------------------------------------
  */

  const validateForm = () => {
    const {
      fullName,
      company,
      email,
      phone,
      partnershipType,
      message,
    } = formData;

    if (!fullName.trim()) {
      return "Please enter your full name.";
    }

    if (!company.trim()) {
      return "Please enter your company or organization name.";
    }

    if (!email.trim()) {
      return "Please enter your business email.";
    }

    // Basic email validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return "Please enter a valid business email.";
    }

    if (!phone.trim()) {
      return "Please enter your phone number.";
    }

    // Allow Indian and international phone formats
    const phoneRegex =
      /^[+]?[\d\s()-]{8,15}$/;

    if (!phoneRegex.test(phone)) {
      return "Please enter a valid phone number.";
    }

    if (!partnershipType) {
      return "Please select a partnership type.";
    }

    if (!message.trim()) {
      return "Please enter a message.";
    }

    if (message.trim().length < 10) {
      return "Please provide a little more information in your message.";
    }

    return null;
  };

  /*
  |--------------------------------------------------------------------------
  | Handle Form Submit
  |--------------------------------------------------------------------------
  */

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prevent duplicate requests
    if (isSubmitting) {
      return;
    }

    setError("");

    // Validate
    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      /*
      |--------------------------------------------------------------------------
      | Send data to Node / Express backend
      |--------------------------------------------------------------------------
      |
      | Backend endpoint:
      |
      | POST /api/partners
      |
      */
     console.log(formData)
      const response = await submitPartnerForm(formData);
      console.log(response);
      /*submitPartnerForm
      |--------------------------------------------------------------------------
      | Parse backend response
      |--------------------------------------------------------------------------
      */

     
      /*
      |--------------------------------------------------------------------------
      | Handle backend errors
      |--------------------------------------------------------------------------
      */

      // if (!response.ok) {
      //   throw new Error(
      //     data.message ||
      //       "Unable to submit your partnership request."
      //   );
      // }

      /*
      |--------------------------------------------------------------------------
      | Success
      |--------------------------------------------------------------------------
      */

      setSubmitted(true);
      // Clear form after successful submission
      setFormData(initialFormData);
    } catch (submitError) {
      console.error(
        "Partner form submission error:",
        submitError
      );

      setError(
        submitError.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Submit Another Request
  |--------------------------------------------------------------------------
  */

  const handleNewRequest = () => {
    setSubmitted(false);
    setError("");
    setFormData(initialFormData);
  };

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#F7FBF6] via-white to-white">
        <div className="absolute -left-32 top-10 -z-10 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="absolute -right-32 top-20 -z-10 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute inset-0 -z-10 opacity-[0.22] [background-image:linear-gradient(rgba(24,106,7,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(24,106,7,0.12)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-20 lg:pt-36">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/80 px-3.5 py-2 shadow-sm backdrop-blur">
                <Sparkles
                  size={14}
                  className="text-[#186A07]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#186A07]">
                  Trusted Financial Network
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
                Become a{" "}
                <span className="bg-gradient-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
                  Borofirst Partner
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
                Borofirst brings together customers and trusted financial
                institutions to create simpler, more accessible financial
                journeys. We welcome institutions that share our commitment
                to responsible, customer-focused financial solutions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#become-partner"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#186A07] to-[#0B2578] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Become a New Partner

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#our-partners"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:border-emerald-100 hover:bg-[#F7FBF6]"
                >
                  Meet Our Partners

                  <ChevronRight size={16} />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-emerald-100/60 to-blue-100/60 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-7">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-100/50 blur-3xl" />

                <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-blue-100/50 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#186A07] to-[#0B2578] text-white shadow-lg">
                      <Handshake size={23} />
                    </div>

                    <div className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#186A07]">
                      Partnership
                    </div>
                  </div>

                  <h2 className="mt-8 text-2xl font-extrabold tracking-tight text-slate-900">
                    Stronger together
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Build meaningful financial partnerships that create value
                    for institutions and customers.
                  </p>

                  <div className="mt-7 space-y-3">
                    {[
                      "Trusted financial network",
                      "Customer-focused approach",
                      "Long-term collaboration",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white/80 px-3.5 py-3"
                      >
                        <CheckCircle2
                          size={17}
                          className="shrink-0 text-[#186A07]"
                        />

                        <span className="text-xs font-semibold text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#186A07] to-[#0B2578]" />
                  </div>

                  <div className="mt-2 flex justify-between text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                    <span>Network</span>
                    <span>Growing together</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((stat) => (
              <PartnerStat
                key={stat.label}
                {...stat}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section
        id="our-partners"
        className="relative bg-slate-50/70 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EAF5E8] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#186A07]">
              <Landmark size={13} />
              Our Network
            </div>

            <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Our Trusted Partners
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
              Working together with leading financial institutions to create
              better opportunities for our customers.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {partners.map((partner) => (
              <PartnerCard
                key={partner.name}
                {...partner}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Grow With Borofirst */}
      <section className="px-6 py-16 sm:px-8 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#186A07] to-[#0B2578] px-7 py-10 shadow-[0_25px_70px_rgba(11,37,120,0.18)] sm:px-10 lg:px-14 lg:py-12">
          <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full border border-white/10" />

          <div className="absolute -right-8 -top-20 h-48 w-48 rounded-full border border-white/10" />

          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:36px_36px]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur">
                <Handshake size={13} />
                Partnership Opportunity
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Grow With Borofirst
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
                We welcome banks, NBFCs, financial institutions, fintech
                companies, insurance organizations, and other businesses
                interested in building meaningful financial partnerships.
              </p>
            </div>

            <a
              href="#become-partner"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#0B2578] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Become a New Partner

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Become Partner */}
      <section
        id="become-partner"
        className="relative overflow-hidden bg-gradient-to-b from-white to-[#F7FBF6] py-20 sm:py-24"
      >
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            {/* Benefits */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#186A07] shadow-sm">
                <Target size={13} />
                Partner With Us
              </div>

              <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Become a New Partner
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Let's build better financial opportunities together. Share
                your details with us and our team can connect with you to
                explore a potential partnership.
              </p>

              <div className="mt-8 space-y-3">
                {benefits.map((benefit) => (
                  <BenefitCard
                    key={benefit.title}
                    {...benefit}
                  />
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-emerald-100/40 to-blue-100/40 blur-2xl" />

              <div className="relative rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.09)] backdrop-blur-xl sm:p-8">

                {/* ================= SUCCESS ================= */}
                {submitted ? (
                  <div className="flex min-h-[480px] flex-col items-center justify-center text-center">

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF5E8] text-[#186A07]">
                      <CheckCircle2 size={30} />
                    </div>

                    <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-slate-900">
                      Thank You
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                      Your partnership request has been received. Our team
                      will review your details and connect with you regarding
                      the next steps.
                    </p>

                    <button
                      type="button"
                      onClick={handleNewRequest}
                      className="mt-7 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-emerald-100 hover:bg-[#F7FBF6]"
                    >
                      Submit Another Request

                      <ArrowRight size={15} />
                    </button>
                  </div>
                ) : (
                  <>
                    {/* ================= FORM HEADER ================= */}

                    <div className="mb-7">
                      <div className="flex items-center justify-between gap-4">

                        <div>
                          <h3 className="text-xl font-extrabold tracking-tight text-slate-900">
                            Let's Start a Conversation
                          </h3>

                          <p className="mt-1.5 text-xs leading-5 text-slate-500">
                            Tell us a little about your organization and
                            partnership interest.
                          </p>
                        </div>

                        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF5E8] text-[#186A07] sm:flex">
                          <MessageSquare size={19} />
                        </div>

                      </div>
                    </div>

                    {/* ================= ERROR MESSAGE ================= */}

                    {error && (
                      <div
                        role="alert"
                        className="mb-5 flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3"
                      >
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                          !
                        </div>

                        <p className="text-xs font-medium leading-5 text-red-600">
                          {error}
                        </p>
                      </div>
                    )}

                    {/* ================= FORM ================= */}

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      noValidate
                    >

                      {/* Full Name + Company */}

                      <div className="grid gap-5 sm:grid-cols-2">

                        <div>
                          <label
                            htmlFor="fullName"
                            className="mb-2 block text-xs font-bold text-slate-700"
                          >
                            Full Name
                          </label>

                          <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            required
                            autoComplete="name"
                            value={formData.fullName}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#186A07] focus:bg-white focus:ring-4 focus:ring-emerald-100/60 disabled:cursor-not-allowed disabled:opacity-60"
                            placeholder="Enter your name"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="company"
                            className="mb-2 block text-xs font-bold text-slate-700"
                          >
                            Company / Organization
                          </label>

                          <input
                            id="company"
                            name="company"
                            type="text"
                            required
                            autoComplete="organization"
                            value={formData.company}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#186A07] focus:bg-white focus:ring-4 focus:ring-emerald-100/60 disabled:cursor-not-allowed disabled:opacity-60"
                            placeholder="Organization name"
                          />
                        </div>

                      </div>

                      {/* Email + Phone */}

                      <div className="grid gap-5 sm:grid-cols-2">

                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-xs font-bold text-slate-700"
                          >
                            Business Email
                          </label>

                          <div className="relative">

                            <Mail
                              size={16}
                              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              autoComplete="email"
                              value={formData.email}
                              onChange={handleChange}
                              disabled={isSubmitting}
                              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#186A07] focus:bg-white focus:ring-4 focus:ring-emerald-100/60 disabled:cursor-not-allowed disabled:opacity-60"
                              placeholder="name@company.com"
                            />

                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="mb-2 block text-xs font-bold text-slate-700"
                          >
                            Phone Number
                          </label>

                          <div className="relative">

                            <Phone
                              size={16}
                              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              required
                              autoComplete="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              disabled={isSubmitting}
                              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#186A07] focus:bg-white focus:ring-4 focus:ring-emerald-100/60 disabled:cursor-not-allowed disabled:opacity-60"
                              placeholder="Enter phone number"
                            />

                          </div>
                        </div>

                      </div>

                      {/* Partnership Type */}

                      <div>
                        <label
                          htmlFor="partnershipType"
                          className="mb-2 block text-xs font-bold text-slate-700"
                        >
                          Partnership Type
                        </label>

                        <select
                          id="partnershipType"
                          name="partnershipType"
                          required
                          value={formData.partnershipType}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-700 outline-none transition-all focus:border-[#186A07] focus:bg-white focus:ring-4 focus:ring-emerald-100/60 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          <option value="" disabled>
                            Select partnership type
                          </option>

                          {partnershipTypes.map((type) => (
                            <option
                              key={type}
                              value={type}
                            >
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}

                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-xs font-bold text-slate-700"
                        >
                          Message
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#186A07] focus:bg-white focus:ring-4 focus:ring-emerald-100/60 disabled:cursor-not-allowed disabled:opacity-60"
                          placeholder="Tell us briefly about your partnership interest..."
                        />
                      </div>

                      {/* Submit */}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#186A07] to-[#0B2578] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                      >

                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Partnership Request

                            <ArrowRight
                              size={17}
                              className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </>
                        )}

                      </button>

                      {/* Privacy */}

                      <div className="flex items-start gap-2 rounded-xl bg-slate-50 px-3.5 py-3">
                        <ShieldCheck
                          size={15}
                          className="mt-0.5 shrink-0 text-[#186A07]"
                        />

                        <p className="text-[10px] leading-4 text-slate-400">
                          Your information will only be used to contact you
                          regarding partnership opportunities.
                        </p>
                      </div>

                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Trust Strip */}
      <section className="border-t border-slate-100 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-6 text-center sm:flex-row sm:px-8 lg:px-10">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF5E8] text-[#186A07]">
            <Building2 size={16} />
          </div>

          <p className="text-xs font-medium text-slate-500">
            Building stronger connections across the financial ecosystem with
            a focus on trust, transparency, and collaboration.
          </p>

        </div>
      </section>
    </main>
  );
};

export default BecomePartner;