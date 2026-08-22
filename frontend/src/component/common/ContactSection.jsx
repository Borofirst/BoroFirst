import { useState } from "react";
import axios from "axios";

import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowRight,
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";

import {
  MdEmail,
  MdLocationOn,
  MdAccessTime,
  MdOutlineSupportAgent,
} from "react-icons/md";

import { BsPatchQuestionFill } from "react-icons/bs";
import { submitContactForm } from "../../service/contectService";
import WhatsAppButton from "../../page/whatupbuttonn";
import { href } from "react-router-dom";

// =========================================
// Loan Types
// =========================================

const loanTypes = [
  "Personal Loan",
  "Home Loan",
  "Business Loan",
  "Vehicle Loan",
  "Education Loan",
  "Gold Loan",
  "Insurance",
  "Investment",
];

// =========================================
// Contact Information
// =========================================

const contactInfo = [
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    value: "+91 7060162526",
    description: "Mon - Sat (9:00 AM - 7:00 PM)",
    href: "tel:+917060162526",
  },

  {
    icon: MdLocationOn,
    title: "Visit Office",
    value: "323 SEC-12/A, AVAS VIKAS SIKANDRA, Avas Vikas Colony, Sadar, ",
    description: "Agra, Uttar Pradesh- 282007",
    href: "https://www.google.com/maps/search/?api=1&query=323+SEC-12%2FA%2C+AVAS+VIKAS+SIKANDRA%2C+Avas+Vikas+Colony%2C+Sadar%2C+Agra%2C+Uttar+Pradesh+282007",
  },

  {
    icon: MdAccessTime,
    title: "Working Hours",
    value: "Monday - Saturday",
    description: "9:00 AM - 7:00 PM",
    href: "/",
  },
];

// =========================================
// Social Media
// =========================================

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61593126121262",
  },

  {
    icon: FaInstagram,
    href: "https://www.instagram.com/borofirst_official/",
  },

  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/borofirst-finance-8a4b11428/",
  },

  {
    icon: FaYoutube,
    href: "#",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    loanType: "",
    loanAmount: "",
    purpose: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // =========================================
  // Handle Input Change
  // =========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error while typing

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Remove success message when editing

    if (success) {
      setSuccess("");
    }
  };

  // =========================================
  // Validation
  // =========================================

  const validateForm = () => {
    const newErrors = {};

    // Name

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    // Email

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone

    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    // City

    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    }

    // Loan Type

    if (!formData.loanType) {
      newErrors.loanType = "Please select a loan type.";
    }

    // Loan Amount

    if (!formData.loanAmount.trim()) {
      newErrors.loanAmount = "Please enter the required loan amount.";
    }

    // Purpose

    if (!formData.purpose.trim()) {
      newErrors.purpose = "Please tell us the purpose of your loan.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("vk");

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    try {
      setLoading(true);
      setSuccess("");

      // const response = await axios.post(
      //   "http://localhost:5000/api/contact",
      //   formData
      // );

      const response = await submitContactForm(formData);
      console.log(response);

      if (response.success) {
        setSuccess("success");

        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          loanType: "",
          loanAmount: "",
          purpose: "",
          message: "",
        });

        setErrors({});
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // =========================================
  // Reset Form
  // =========================================

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      loanType: "",
      loanAmount: "",
      purpose: "",
      message: "",
    });
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">
      {/* Background Decoration */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-40"></div>

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-40"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[430px_1fr]">
          {/* ================================= */}
          {/* LEFT SIDE */}
          {/* ================================= */}

          <div className="lg:sticky lg:top-24 h-fit">
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2">
              <BsPatchQuestionFill size={18} className="text-emerald-600" />

              <span className="font-semibold text-emerald-700">
                Need Financial Assistance?
              </span>
            </div>

            {/* Heading */}

            <h2 className="mt-8 text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] tracking-tight  text-[#0F172A]">
              Connect with us now
              <span className=" bg-linear-to-r from-[#186A07] via-[#10B981] to-[#0B2578] bg-clip-text text-transparent">
                {" "}
                Financial Goals
              </span>
            </h2>
           

            {/* Description */}

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you're looking for a personal loan, home loan, business
              financing, insurance, or investment guidance, our financial
              experts are here to help you choose the right solution with
              complete transparency.
            </p>

            {/* Contact Cards */}

            <div className="mt-10 space-y-5">
              <WhatsAppButton />
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.href}
                    className="
                      group
                      flex
                      items-start
                      gap-4
                      rounded-3xl
                      border
                      border-gray-200
                      bg-white
                      p-5
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-emerald-300
                      hover:shadow-xl
                    "
                  >
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                   bg-emerald-50
                    text-[#2c8e18]
                        transition-all duration-300 ease-out
                      group-hover:bg-[#118A09]
                      group-hover:text-white
                        group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)]
                        group-hover:scale-110
                      "
                    >
                      <Icon size={24} />
                    </div>
              

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 font-medium text-gray-800">
                        {item.value}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Trust Highlights */}

            <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900">
                Why Customers Trust Us
              </h3>

              <div className="mt-5 space-y-4">
                {[
                  "Secure & Confidential Consultation",
                  "Quick Response Within 24 Hours",
                  "RBI Guideline Compliant Process",
                  "100% Transparent Communication",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle size={20} className="text-[#186A07]" />

                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Icons */}

            <div className="mt-10">
              <h3 className="text-lg font-bold text-gray-900">
                Connect With Us:-
              </h3>

              <div className="mt-5 flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="
                        group
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-gray-200
                        bg-white
                        text-gray-600
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-transparent
                        hover:bg-linear-to-r
                        hover:from-[#186A07]
                        hover:to-[#0B2578]
                        hover:text-white
                        hover:shadow-lg
                      "
                    >
                      <Icon size={20} />
                    </a>
                    
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================================= */}
          {/* RIGHT SIDE */}

          {/* ================================= */}
          {/* ================================= */}
          {/* RIGHT SIDE - CONTACT FORM */}
          {/* ================================= */}

          <div className="rounded-4xl border border-gray-200 bg-white p-8 shadow-xl lg:p-10">
            {/* Form Heading */}

            <div>
              <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                Contact Form
              </span>

              <h3 className="mt-5 text-3xl font-bold text-gray-900">
                Send Us a Message
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Complete the form below and one of our financial experts will
                contact you shortly to discuss the best solution for your
                financial needs.
              </p>
            </div>

            {/* Form */}

            <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
              {/* Row 1 */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-2xl border-2 border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#186A07] "
                  />

                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className="w-full rounded-2xl border-2 border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#186A07]"
                  />

                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Row 2 */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full rounded-2xl border-2 border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#186A07]"
                  />

                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="New Delhi"
                    className="w-full rounded-2xl border-2 border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#186A07]"
                  />

                  {errors.city && (
                    <p className="mt-2 text-sm text-red-500">{errors.city}</p>
                  )}
                </div>
              </div>

              {/* Row 3 */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Loan Type
                  </label>

                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    className="w-full rounded-2xl border-2 border-gray-300 bg-white px-5 py-4 outline-none transition-all duration-300 focus:border-[#186A07]"
                  >
                    <option value="">Select Loan Type</option>

                    {loanTypes.map((loan) => (
                      <option key={loan} value={loan}>
                        {loan}
                      </option>
                    ))}
                  </select>

                  {errors.loanType && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.loanType}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Loan Amount
                  </label>

                  <input
                    type="text"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    placeholder="₹ 10,00,000"
                    className="w-full rounded-2xl border-2 border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#186A07]"
                  />
                </div>
                {errors.loanAmount && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.loanAmount}
                  </p>
                )}
              </div>

              {/* Purpose */}
              {errors.purpose && (
                <p className="mt-2 text-sm text-red-500">{errors.purpose}</p>
              )}

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Purpose
                </label>

                <textarea
                  rows={3}
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  placeholder="Tell us why you need financial assistance..."
                  className="w-full resize-none rounded-2xl border-2 border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#186A07]"
                />
              </div>

              {/* Message */}

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Message (Optional)
                </label>

                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-2xl border-2 border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#186A07]"
                />
              </div>

              {/* Info */}

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <p className="text-sm leading-7 text-emerald-700">
                  💬 Our financial advisors usually respond within
                  <span className="font-semibold"> one business day.</span>
                </p>
              </div>

              {/* Success */}

              {success && (
                <div className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-green-700">
                  {success}
                </div>
              )}

              {/* Error */}

              {errors.submit && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-600">
                  {errors.submit}
                </div>
              )}

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
      bg-linear-to-r 
      from-[#186A07] 
      to-[#0B2578]
        px-6
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-2xl
        disabled:cursor-not-allowed
        disabled:opacity-70
      "
              >
                {loading ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Request a Free Consultation
                    <FaArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
