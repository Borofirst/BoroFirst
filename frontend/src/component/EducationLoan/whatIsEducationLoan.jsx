

import {
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Globe2,
  Laptop,
  TrendingUp,
  WalletCards,
    GraduationCap,
  Award,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const educationJourney = [
  {
    number: "01",
    label: "LEARN",
    title: "Gain Knowledge",
    description: "Build the skills that shape your future.",
    icon: BookOpen,
  },
  {
    number: "02",
    label: "GRADUATE",
    title: "Earn Your Degree",
    description: "Turn years of learning into meaningful qualifications.",
    icon: GraduationCap,
  },
  {
    number: "03",
    label: "LAUNCH",
    title: "Start Your Career",
    description: "Take your knowledge into the professional world.",
    icon: BriefcaseBusiness,
  },
  {
    number: "04",
    label: "GROW",
    title: "Build Your Future",
    description: "Turn education into long-term opportunity.",
    icon: TrendingUp,
  },
];

const educationExpenses = [
  {
    icon: GraduationCap,
    title: "Tuition Fees",
    description: "May help cover eligible course and tuition expenses.",
  },
  {
    icon: BookOpen,
    title: "Books & Materials",
    description: "May help manage essential academic resources.",
  },
  {
    icon: Building2,
    title: "Accommodation",
    description: "May support eligible living or accommodation expenses.",
  },
  {
    icon: Globe2,
    title: "Education Abroad",
    description: "May support eligible international education expenses.",
  },
    {

    icon: GraduationCap,
    title: "Higher Education",
    description:
      "Finance tuition and other eligible expenses for undergraduate, postgraduate, professional, and specialized degree programs in India or abroad.",
  },
    {
    icon: Laptop,
    title: "Laptop & Learning Equipment",
    description:
      "Finance eligible educational equipment such as laptops, computers, and other technology required for your academic program.",
  },
    {
    icon: BriefcaseBusiness,
    title: "Professional Courses",
    description:
      "Fund career-focused programs such as management, engineering, medicine, technology, and other recognized professional courses.",
  },
    {
    icon: Award,
    title: "Skill & Career Development",
    description:
      "Invest in recognized certification and skill-development programs that can help build stronger career opportunities and professional growth.",
  }
];



/* =========================================================
   JOURNEY ITEM
========================================================= */

const JourneyItem = ({
  number,
  label,
  title,
  description,
  icon: Icon,
  isLast,
}) => {
  return (
    <div className="group relative flex gap-4 sm:gap-5">
      {/* Timeline */}

      <div className="relative flex shrink-0 flex-col items-center">
        <div
          className="
            relative
            z-10
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-[#DCE7FF]
            bg-white
            shadow-[0_8px_25px_rgba(15,23,42,0.07)]
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:border-[#10B981]/30
            group-hover:shadow-[0_12px_30px_rgba(16,185,129,0.12)]
            sm:h-14
            sm:w-14
          "
        >
          <Icon
            size={20}
            className="
              text-[#0B2578]
              transition-transform
              duration-300
              group-hover:scale-110
              group-hover:text-[#2c8e18]
            "
          />
        </div>

        {!isLast && (
          <div className="mt-2 h-full min-h-[58px] w-px bg-gradient-to-b from-[#C7D2FE] to-[#D1FAE5]" />
        )}
      </div>

      {/* Content */}

      <div className="pb-7 pt-0.5 sm:pb-8">
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-extrabold tracking-[0.2em] text-[#2c8e18]">
            {number}
          </span>

          <span className="h-1 w-1 rounded-full bg-[#CBD5E1]" />

          <span className="text-[9px] font-extrabold tracking-[0.16em] text-[#64748B]">
            {label}
          </span>
        </div>

        <h3 className="mt-1 text-base font-extrabold tracking-tight text-[#0F172A] sm:text-lg">
          {title}
        </h3>

        <p className="mt-1 max-w-[310px] text-xs leading-5 text-[#64748B]">
          {description}
        </p>
      </div>
    </div>
  );
};

/* =========================================================
   EXPENSE ITEM
========================================================= */
const ExpenseItem = ({ icon: Icon, title, description }) => {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-[#E2E8F0]
        bg-white
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#10B981]/30
        hover:shadow-[0_12px_30px_rgba(15,23,42,0.07)]
        sm:p-5
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
        bg-emerald-50
                     text-[#2c8e18]
                     transition-all
                     duration-300
                     ease-out
                     group-hover:scale-110
                     group-hover:bg-[#118A09]
                     group-hover:text-white
                    group-hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)] 

        "
      >
        <Icon
          size={18}
          className="
            text-[#059669]
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:text-white
          "
        />
      </div>

      <h3 className="mt-4 text-sm font-extrabold text-[#0F172A]">
        {title}
      </h3>

      <p className="mt-1.5 text-xs leading-5 text-[#64748B]">
        {description}
      </p>
    </div>
  );
};


/* =========================================================
   WHY IT MATTERS CARD
========================================================= */

const WhyItMattersCard = ({
  number,
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-[#E2E8F0]
        bg-white
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_18px_40px_rgba(15,23,42,0.07)]
      "
    >
      {/* Decorative corner */}

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-24
          w-24
          rounded-full
          bg-[#ECFDF5]
          opacity-0
          blur-2xl
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <div className="relative flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF2FF]">
          <Icon
            size={19}
            className="text-[#0B2578]"
          />
        </div>

        <span className="text-[10px] font-extrabold tracking-[0.16em] text-[#CBD5E1]">
          {number}
        </span>
      </div>

      <h3 className="relative mt-5 text-base font-extrabold tracking-tight text-[#0F172A]">
        {title}
      </h3>

      <p className="relative mt-2 text-sm leading-6 text-[#64748B]">
        {description}
      </p>
    </div>
  );
};

/* =========================================================
   EDUCATION JOURNEY VISUAL
========================================================= */

const EducationJourney = () => {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-[#E2E8F0] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] sm:p-8 lg:p-9">
      {/* Background decoration */}

      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#EEF2FF] opacity-60 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-52 w-52 rounded-full bg-[#ECFDF5] opacity-70 blur-3xl" />

      {/* Grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(#0B2578_1px,transparent_1px),linear-gradient(90deg,#0B2578_1px,transparent_1px)]
          [background-size:35px_35px]
        "
      />

      <div className="relative">
        {/* Header */}

        <div className="mb-7 flex items-end justify-between border-b border-[#E2E8F0] pb-5">
          <div>
            <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#2c8e18]">
              THE JOURNEY
            </p>

            <h3 className="mt-1 text-xl font-extrabold tracking-tight text-[#0F172A] sm:text-2xl">
              Education becomes opportunity.
            </h3>
          </div>

          <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-[#0B2578] sm:flex">
            <GraduationCap
              size={19}
              className="text-white"
            />
          </div>
        </div>

        {/* Journey */}

        <div>
          {educationJourney.map((item, index) => (
            <JourneyItem
              key={item.number}
              {...item}
              isLast={index === educationJourney.length - 1}
            />
          ))}
        </div>

        {/* Bottom statement */}

        <div className="mt-1 rounded-2xl bg-gradient-to-r from-[#ECFDF5] via-white to-[#EEF2FF] p-4">
          <div className="flex items-start gap-3">
            <CheckCircle2
              size={17}
              className="mt-0.5 shrink-0 text-[#2c8e18]"
            />

            <p className="text-xs font-semibold leading-5 text-[#475569]">
              The right education can become the foundation for the career
              you want to build.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const EducationLoanWhatIs = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          GLOBAL BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}


        {/* Emerald glow */}

        <div className="absolute -left-40 top-32 h-80 w-80 rounded-full bg-[#10B981]/10 blur-[120px]" />

        {/* Navy glow */}

        <div className="absolute -right-40 top-[20%] h-96 w-96 rounded-full bg-[#0B2578]/10 blur-[130px]" />

        {/* Decorative dots */}

        <div className="absolute right-[12%] top-24 h-2 w-2 rounded-full bg-[#10B981]/30" />

        <div className="absolute right-[18%] top-32 h-1.5 w-1.5 rounded-full bg-[#0B2578]/20" />

        <div className="absolute left-[8%] bottom-32 h-1.5 w-1.5 rounded-full bg-[#10B981]/30" />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ===================================================
            INTRO
        =================================================== */}

        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}

          <div className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/20 bg-white px-3.5 py-2 shadow-sm">
            <GraduationCap
              size={15}
              className="text-[#10B981]"
            />

            <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#0B2578] sm:text-[10px]">
              Understand Your Education Loan
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              mt-5
             text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] tracking-tight
            "
          >
            What Is an{" "}
            <span className="bg-linear-to-r from-[#186A07] via-[#10B981] to-[#0B2578] bg-clip-text text-transparent">
              Education Loan?
            </span>
          </h2>

          {/* Subheading */}

          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-[#64748B] sm:text-lg">
            Because your future deserves more than a
            <span className="font-bold text-[#2c8e18]">
              financial compromise.
            </span>
          </p>
        </div>

        {/* ===================================================
            MAIN STORY
        =================================================== */}

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:mt-16">
          {/* =================================================
              LEFT — CONTENT
          ================================================= */}

          <div>
            {/* Main explanation */}

            <div className="max-w-xl">
              <p className="text-xl font-bold leading-8 tracking-tight text-[#0F172A] sm:text-2xl sm:leading-9">
                An education loan is financial support designed to help
                students pursue higher education without letting the immediate
                cost stand between them and their ambitions.
              </p>

              <div className="mt-6 space-y-5 text-sm leading-7 text-[#64748B] sm:text-base">
                <p>
                  Whether you're planning a professional degree, higher
                  studies in India, or an international education, the right
                  education loan can help you manage major education-related
                  expenses while you focus on learning, growing and preparing
                  for your future career.
                </p>

                <p>
                  In simple words: you focus on your education today, while
                  structured financing helps you plan for the costs along the
                  way.
                </p>
              </div>
            </div>

            {/* Philosophy panel */}

            <div className="relative mt-9 overflow-hidden rounded-[26px] bg-gradient-to-br from-[#ECFDF5] via-white to-[#F0F4FF] p-6 sm:p-7">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#10B981]/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                  <WalletCards
                    size={18}
                    className="text-[#0B2578]"
                  />
                </div>

                <blockquote className="mt-5 text-lg font-extrabold leading-7 tracking-tight text-[#0F172A] sm:text-xl">
                  “Your family's financial situation shouldn't decide how far
                  your ambition can take you.”
                </blockquote>

                <div className="mt-4 flex items-center gap-2">
                  <div className="h-px w-7 bg-[#10B981]" />

                  <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#64748B]">
                    BOROFIRST Education Loan
                  </span>
                </div>
              </div>
            </div>

            {/* Quick reassurance */}

            <div className="mt-6 flex items-center gap-2.5">
              <CheckCircle2
                size={17}
                className="shrink-0 text-[#2c8e18]"
              />

              <p className="text-xs font-semibold text-[#64748B]">
                Designed to help students pursue meaningful education goals
                with structured financial support.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT — JOURNEY
          ================================================= */}

          <EducationJourney />
        </div>

        {/* ===================================================
            EXPENSE SECTION
        =================================================== */}

        <div className="mt-20 sm:mt-24 lg:mt-28">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#2c8e18]">
                WHERE IT CAN HELP
              </p>

              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl">
                What can education financing help with?
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#64748B]">
                Depending on the loan and lender terms, education financing
                may help manage several eligible costs associated with your
                academic journey.
              </p>
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 shadow-sm md:flex">
              <Laptop
                size={14}
                className="text-[#0B2578]"
              />

              <span className="text-[9px] font-bold text-[#64748B]">
                Built around your education journey
              </span>
            </div>
          </div>

          {/* Expense cards */}

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {educationExpenses.map((expense) => (
              <ExpenseItem
                key={expense.title}
                {...expense}
              />
            ))}
          </div>
        </div>

  

      
      </div>
    </section>
  );
};

export default EducationLoanWhatIs;