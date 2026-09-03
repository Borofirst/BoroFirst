import { useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  GraduationCap,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Target,
  TrendingUp,
  Upload,
  UserRound,
  Users,
  X,
} from "lucide-react";

const departmentPositions = {
  Marketing: [
    "Digital Marketing Executive",
    "Marketing Associate",
    "Content Specialist",
    "Social Media Executive",
    "Performance Marketing Executive",
    "Brand Executive",
  ],
  "BPO & Customer Support": [
    "Customer Support Executive",
    "BPO Executive",
    "Telecalling Executive",
    "Customer Relationship Executive",
    "Process Associate",
    "Customer Experience Executive",
  ],
  Sales: [
    "Sales Executive",
    "Relationship Manager",
    "Business Development Executive",
    "Field Sales Executive",
    "Loan Sales Executive",
    "Area Sales Manager",
  ],
  "Software Engineering": [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Software Engineer",
    "QA Engineer",
    "DevOps Engineer",
  ],
  "Management & Leadership": [
    "Team Leader",
    "Sales Manager",
    "Operations Manager",
    "Branch Manager",
    "Business Manager",
    "Department Manager",
  ],
  Other: ["Other"],
};

const departments = [
  "Marketing",
  "BPO & Customer Support",
  "Sales",
  "Software Engineering",
  "Management & Leadership",
  "Other",
];

const benefits = [
  {
    title: "Growth Opportunities",
    description:
      "Develop your skills and take on meaningful responsibilities as your career evolves.",
    icon: TrendingUp,
  },
  {
    title: "Continuous Learning",
    description:
      "Build knowledge across financial services, technology, sales, and business operations.",
    icon: GraduationCap,
  },
  {
    title: "Collaborative Environment",
    description:
      "Work with people across different functions and teams to solve meaningful challenges.",
    icon: Users,
  },
  {
    title: "Meaningful Impact",
    description:
      "Contribute to better customer experiences and more accessible financial journeys.",
    icon: Target,
  },
];

const applicationSteps = [
  {
    number: "01",
    title: "Apply",
    description: "Submit your application and share your professional profile.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Our team reviews your profile and connects when there is a suitable opportunity.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Grow",
    description:
      "Explore the right opportunity for your skills and aspirations.",
    icon: Award,
  },
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  department: "",
  position: "",
  message: "",
};

const CareerBenefit = ({ title, description, icon: Icon }) => (
  <div className="group flex gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_8px_30px_rgba(15,23,42,0.035)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#186A07]/20 hover:bg-white hover:shadow-[0_18px_40px_rgba(15,23,42,0.07)]">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF5E8] text-[#186A07] transition-all duration-300 group-hover:bg-[#186A07] group-hover:text-white">
      <Icon size={19} strokeWidth={1.8} />
    </div>

    <div>
      <h3 className="text-sm font-bold text-slate-900">{title}</h3>
      <p className="mt-1.5 text-xs leading-5 text-slate-500">{description}</p>
    </div>
  </div>
);

const ApplicationStep = ({ number, title, description, icon: Icon }) => (
  <div className="group relative flex flex-1 items-start gap-4">
    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-white text-[#186A07] shadow-sm transition-all duration-300 group-hover:border-[#186A07]/30 group-hover:bg-[#EAF5E8]">
      <Icon size={18} strokeWidth={1.8} />
    </div>

    <div className="min-w-0">
      <div className="text-[10px] font-bold tracking-[0.16em] text-[#186A07]">
        {number}
      </div>
      <h3 className="mt-1 text-sm font-extrabold text-slate-900">{title}</h3>
      <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
    </div>
  </div>
);

const FieldIcon = ({ children }) => (
  <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
    {children}
  </div>
);

const JoinOurTeam = () => {
  const [form, setForm] = useState(initialForm);
  const [resume, setResume] = useState(null);
  const [resumeError, setResumeError] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const positions = useMemo(() => {
    if (!form.department) return ["Select a department first"];

    return departmentPositions[form.department] || ["Other"];
  }, [form.department]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
      ...(name === "department" ? { position: "" } : {}),
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    } else if (!/^[+]?[\d\s()-]{10,15}$/.test(form.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.department) {
      nextErrors.department = "Please select a department.";
    }

    if (!form.position) {
      nextErrors.position = "Please select a position.";
    }

    if (!resume) {
      setResumeError("Please upload your resume.");
    } else {
      setResumeError("");
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0 && Boolean(resume);
  };

  const handleResumeChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const allowedExtensions = [".pdf", ".doc", ".docx"];
    const extension = file.name.toLowerCase().slice(file.name.lastIndexOf("."));

    if (
      !allowedTypes.includes(file.type) &&
      !allowedExtensions.includes(extension)
    ) {
      setResume(null);
      setResumeError("Please upload a PDF, DOC, or DOCX file.");
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setResume(null);
      setResumeError("Resume size must be 5MB or less.");
      event.target.value = "";
      return;
    }

    setResume(file);
    setResumeError("");
  };

  const removeResume = () => {
    setResume(null);
    setResumeError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const scrollToApplication = () => {
    document
      .getElementById("career-application")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsSubmitting(false);
    setSubmitted(true);

    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const resetForm = () => {
    setForm(initialForm);
    setResume(null);
    setResumeError("");
    setErrors({});
    setSubmitted(false);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section
      id="join-our-team"
      className="relative isolate overflow-hidden bg-linear-to-b from-white via-[#F9FCF8] to-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-blue-100/40 blur-3xl" />

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 opacity-[0.22] [background-image:linear-linear(rgba(24,106,7,0.1)_1px,transparent_1px),linear-linear(90deg,rgba(24,106,7,0.1)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-linear(to_bottom,black,transparent)]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-100
              bg-[#EAF5E8]
              px-4
              py-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#186A07]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#186A07]" />
            Join Our Team
          </div>

          {/* Heading */}
          <h2
            className="
              text-3xl
              font-extrabold
              leading-tight
              tracking-[-0.035em]
              text-slate-950
              sm:text-4xl
              lg:text-5xl
            "
          >
            Ready to Build Your Future With{" "}
            <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
              Borofirst?
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Explore our current opportunities or share your resume with us. We
            would be happy to learn more about your skills, experience, and
            aspirations.
          </p>
        </div>

        {/* Application Area */}
        <div id="career-application" className="scroll-mt-24 pt-20 sm:pt-24">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-12">
            {/* Left Content */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#186A07] shadow-sm">
                <Target size={13} />
                Start Your Journey
              </div>

              <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-slate-950 sm:text-4xl">
                Why Start Your Journey With{" "}
                <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
                  Borofirst?
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                We value people who bring curiosity, ownership, collaboration,
                and a willingness to learn. Explore opportunities where your
                skills can contribute to meaningful work.
              </p>

              <div className="mt-8 space-y-3">
                {benefits.map((benefit) => (
                  <CareerBenefit key={benefit.title} {...benefit} />
                ))}
              </div>

              {/* Mini trust card */}
              <div className="mt-6 rounded-2xl border border-emerald-100 bg-[#F7FBF6] p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#186A07] shadow-sm">
                    <ShieldCheck size={18} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-800">
                      A thoughtful application process
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Share accurate information about your experience and the
                      kind of opportunity you are looking for.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-linear-to-br from-emerald-100/40 to-blue-100/40 blur-2xl" />

              <div className="relative rounded-[2rem] border border-slate-200/80 bg-white/95 p-5 shadow-[0_25px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-7 lg:p-8">
                {!submitted ? (
                  <>
                    <div className="mb-7 flex items-start justify-between gap-4">
                      <div>
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF5E8] text-[#186A07]">
                          <BriefcaseBusiness size={19} />
                        </div>

                        <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
                          Start Your Career Journey
                        </h3>

                        <p className="mt-2 max-w-xl text-xs leading-5 text-slate-500 sm:text-sm">
                          Share your details with us and let’s explore where
                          your skills could fit at Borofirst.
                        </p>
                      </div>
                    </div>

                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-5"
                    >
                      {/* Name + Email */}
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="career-full-name"
                            className="mb-2 block text-xs font-bold text-slate-700"
                          >
                            Full Name
                          </label>

                          <div className="relative">
                            <FieldIcon>
                              <UserRound size={16} />
                            </FieldIcon>

                            <input
                              id="career-full-name"
                              name="fullName"
                              type="text"
                              value={form.fullName}
                              onChange={handleChange}
                              autoComplete="name"
                              aria-invalid={Boolean(errors.fullName)}
                              aria-describedby={
                                errors.fullName
                                  ? "career-full-name-error"
                                  : undefined
                              }
                              className={`w-full rounded-xl border bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                                errors.fullName
                                  ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                                  : "border-slate-200 focus:border-[#186A07] focus:ring-emerald-100/60"
                              }`}
                              placeholder="Enter your full name"
                            />
                          </div>

                          {errors.fullName && (
                            <p
                              id="career-full-name-error"
                              className="mt-1.5 text-[11px] font-medium text-red-600"
                            >
                              {errors.fullName}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="career-email"
                            className="mb-2 block text-xs font-bold text-slate-700"
                          >
                            Email Address
                          </label>

                          <div className="relative">
                            <FieldIcon>
                              <Mail size={16} />
                            </FieldIcon>

                            <input
                              id="career-email"
                              name="email"
                              type="email"
                              value={form.email}
                              onChange={handleChange}
                              autoComplete="email"
                              aria-invalid={Boolean(errors.email)}
                              aria-describedby={
                                errors.email ? "career-email-error" : undefined
                              }
                              className={`w-full rounded-xl border bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                                errors.email
                                  ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                                  : "border-slate-200 focus:border-[#186A07] focus:ring-emerald-100/60"
                              }`}
                              placeholder="name@example.com"
                            />
                          </div>

                          {errors.email && (
                            <p
                              id="career-email-error"
                              className="mt-1.5 text-[11px] font-medium text-red-600"
                            >
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Phone + Department */}
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="career-phone"
                            className="mb-2 block text-xs font-bold text-slate-700"
                          >
                            Phone Number
                          </label>

                          <div className="relative">
                            <FieldIcon>
                              <Phone size={16} />
                            </FieldIcon>

                            <input
                              id="career-phone"
                              name="phone"
                              type="tel"
                              value={form.phone}
                              onChange={handleChange}
                              autoComplete="tel"
                              inputMode="tel"
                              aria-invalid={Boolean(errors.phone)}
                              aria-describedby={
                                errors.phone ? "career-phone-error" : undefined
                              }
                              className={`w-full rounded-xl border bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                                errors.phone
                                  ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                                  : "border-slate-200 focus:border-[#186A07] focus:ring-emerald-100/60"
                              }`}
                              placeholder="Enter phone number"
                            />
                          </div>

                          {errors.phone && (
                            <p
                              id="career-phone-error"
                              className="mt-1.5 text-[11px] font-medium text-red-600"
                            >
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="career-department"
                            className="mb-2 block text-xs font-bold text-slate-700"
                          >
                            Preferred Department
                          </label>

                          <select
                            id="career-department"
                            name="department"
                            value={form.department}
                            onChange={handleChange}
                            aria-invalid={Boolean(errors.department)}
                            aria-describedby={
                              errors.department
                                ? "career-department-error"
                                : undefined
                            }
                            className={`w-full appearance-none rounded-xl border bg-slate-50/50 px-4 py-3 text-sm text-slate-700 outline-none transition-all focus:bg-white focus:ring-4 ${
                              errors.department
                                ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                                : "border-slate-200 focus:border-[#186A07] focus:ring-emerald-100/60"
                            }`}
                          >
                            <option value="">Select a department</option>

                            {departments.map((department) => (
                              <option key={department} value={department}>
                                {department}
                              </option>
                            ))}
                          </select>

                          {errors.department && (
                            <p
                              id="career-department-error"
                              className="mt-1.5 text-[11px] font-medium text-red-600"
                            >
                              {errors.department}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Position */}
                      <div>
                        <label
                          htmlFor="career-position"
                          className="mb-2 block text-xs font-bold text-slate-700"
                        >
                          Position
                        </label>

                        <select
                          id="career-position"
                          name="position"
                          value={form.position}
                          onChange={handleChange}
                          disabled={!form.department}
                          aria-invalid={Boolean(errors.position)}
                          aria-describedby={
                            errors.position
                              ? "career-position-error"
                              : undefined
                          }
                          className={`w-full appearance-none rounded-xl border px-4 py-3 text-sm outline-none transition-all focus:bg-white focus:ring-4 ${
                            !form.department
                              ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400"
                              : errors.position
                                ? "border-red-300 bg-slate-50/50 text-slate-700 focus:border-red-400 focus:ring-red-100"
                                : "border-slate-200 bg-slate-50/50 text-slate-700 focus:border-[#186A07] focus:ring-emerald-100/60"
                          }`}
                        >
                          <option value="">
                            {form.department
                              ? "Select a position"
                              : "Select a department first"}
                          </option>

                          {positions.map((position) => (
                            <option key={position} value={position}>
                              {position}
                            </option>
                          ))}
                        </select>

                        {errors.position && (
                          <p
                            id="career-position-error"
                            className="mt-1.5 text-[11px] font-medium text-red-600"
                          >
                            {errors.position}
                          </p>
                        )}
                      </div>

                      {/* Resume Upload */}
                      <div>
                        <label
                          htmlFor="career-resume"
                          className="mb-2 block text-xs font-bold text-slate-700"
                        >
                          Upload Resume
                        </label>

                        <input
                          ref={fileInputRef}
                          id="career-resume"
                          name="resume"
                          type="file"
                          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          onChange={handleResumeChange}
                          className="sr-only"
                          aria-describedby="career-resume-help career-resume-error"
                        />

                        {!resume ? (
                          <label
                            htmlFor="career-resume"
                            className={`group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed px-5 py-7 text-center transition-all duration-300 ${
                              resumeError
                                ? "border-red-300 bg-red-50/40 hover:border-red-400"
                                : "border-slate-300 bg-slate-50/50 hover:border-[#186A07]/40 hover:bg-[#F7FBF6]"
                            }`}
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#186A07] shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                              <Upload size={20} />
                            </div>

                            <span className="mt-3 text-sm font-bold text-slate-700">
                              Upload your resume
                            </span>

                            <span
                              id="career-resume-help"
                              className="mt-1 text-[11px] text-slate-400"
                            >
                              PDF, DOC or DOCX • Maximum 5MB
                            </span>
                          </label>
                        ) : (
                          <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-[#F7FBF6] p-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#186A07] shadow-sm">
                              <FileText size={19} />
                            </div>

                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-bold text-slate-800">
                                {resume.name}
                              </p>

                              <p className="mt-0.5 text-[10px] text-slate-400">
                                {(resume.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={removeResume}
                              aria-label="Remove selected resume"
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white hover:text-red-500"
                            >
                              <X size={17} />
                            </button>
                          </div>
                        )}

                        {resumeError && (
                          <p
                            id="career-resume-error"
                            className="mt-1.5 text-[11px] font-medium text-red-600"
                          >
                            {resumeError}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="career-message"
                          className="mb-2 block text-xs font-bold text-slate-700"
                        >
                          Message
                        </label>

                        <textarea
                          id="career-message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#186A07] focus:bg-white focus:ring-4 focus:ring-emerald-100/60"
                          placeholder="Tell us about yourself, your experience, or the opportunity you are looking for..."
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Submitting Application...
                          </>
                        ) : (
                          <>
                            Submit Application
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
                          Your information will be used only for recruitment and
                          career-related communication.
                        </p>
                      </div>
                    </form>
                  </>
                ) : (
                  <div
                    ref={formRef}
                    className="flex min-h-[620px] flex-col items-center justify-center px-4 py-10 text-center"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-emerald-100 blur-2xl" />

                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#EAF5E8] text-[#186A07]">
                        <CheckCircle2 size={38} strokeWidth={1.8} />
                      </div>
                    </div>

                    <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#F7FBF6] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#186A07]">
                      <ShieldCheck size={13} />
                      Application Received
                    </div>

                    <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">
                      Thank You
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                      Thank you for your interest in joining Borofirst. We’ve
                      received your application details and appreciate the
                      opportunity to learn more about you.
                    </p>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:bg-[#F7FBF6] hover:shadow-md"
                    >
                      Submit Another Application
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="mt-20 border-t border-slate-200/70 pt-16 sm:mt-24 sm:pt-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EAF5E8] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#186A07]">
              <ArrowRight size={13} />
              How It Works
            </div>

            <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-3xl">
              Your Career Journey
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              A simple path to share your profile and explore potential
              opportunities.
            </p>
          </div>

          <div className="relative mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3 md:gap-8">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-5 hidden h-px bg-linear-to-r from-transparent via-emerald-200 to-transparent md:block" />

            {applicationSteps.map((step) => (
              <ApplicationStep key={step.number} {...step} />
            ))}
          </div>
        </div>

        {/* Secondary CTA */}
        <div className=" mt-20 px-3 sm:px-8 lg:px-16">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/95 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.09)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-100/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-52 w-52 rounded-full bg-blue-100/30 blur-3xl" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#EAF5E8] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#186A07]">
                  <BriefcaseBusiness size={13} />
                  Career Opportunities
                </div>

                <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-3xl">
                  Your Next Opportunity Starts Here.
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                  Bring your skills, ideas, and ambition to a team building
                  better financial experiences.
                </p>
              </div>

              <button
                type="button"
                onClick={scrollToApplication}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#186A07] to-[#0B2578] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Start Your Application
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;
