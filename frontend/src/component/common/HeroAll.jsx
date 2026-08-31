
import React from "react";
import {
  BookOpen,
  Check,
  Clock3,
  GraduationCap,
  Home,
  IndianRupee,
  Percent,
  ShieldCheck,
  Sparkles,
  Star,
  WalletCards,
} from "lucide-react";

/* =========================================================
   TRUST POINT
========================================================= */

const TrustPoint = ({ icon: Icon, text, theme }) => {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: theme.soft }}
      >
        <Icon
          size={14}
          style={{ color: theme.primary }}
          strokeWidth={2.2}
        />
      </span>

      <span className="text-xs font-semibold text-[#475569]">
        {text}
      </span>
    </div>
  );
};

/* =========================================================
   FLOATING LOAN CARD
========================================================= */

const LoanCard = ({ config, theme }) => {
  const Icon = config.loanIcon;

  return (
    <div
      className="
        absolute
        left-[10px]
        top-[0%]
        z-30
        w-[220px]
        rounded-2xl
        border
        border-white/80
        bg-white/90
        p-4
        shadow-[0_20px_50px_rgba(15,23,42,0.13)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        sm:right-[2%]
        sm:w-[235px]
      "
    >
      <div className="flex items-start justify-between">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${theme.secondary}, ${theme.primary})`,
            boxShadow: `0 8px 20px ${theme.primary}25`,
          }}
        >
          <Icon size={20} className="text-white" />
        </div>

        <span
          className="rounded-full px-2 py-1 text-[8px] font-bold"
          style={{
            backgroundColor: theme.softGreen,
            color: theme.green,
          }}
        >
          AVAILABLE
        </span>
      </div>

      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[#94A3B8]">
        {config.cardTitle}
      </p>

      <div className="mt-1">
        <span className="text-2xl font-extrabold tracking-tight text-[#0F172A]">
          {config.loanAmount}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2 border-t border-[#E2E8F0] pt-3">
        <span
          className="flex h-5 w-5 items-center justify-center rounded-full"
          style={{ backgroundColor: theme.softGreen }}
        >
          <Check
            size={11}
            style={{ color: theme.green }}
          />
        </span>

        <span className="text-[10px] font-bold text-[#475569]">
          {config.cardBottomText}
        </span>
      </div>
    </div>
  );
};

/* =========================================================
   SMALL FLOATING CARD
========================================================= */

const MiniLoanCard = ({ config, theme }) => {
  const Icon = config.miniIcon;

  return (
    <div
      className="
        absolute
        bottom-[17%]
        left-[-12px]
        z-30
        hidden
        items-center
        gap-3
        rounded-2xl
        border
        border-white/80
        bg-white/90
        px-4
        py-3
        shadow-[0_18px_40px_rgba(15,23,42,0.12)]
        backdrop-blur-xl
        sm:flex
        lg:left-[-20px]
      "
    >
      <div
        className="flex h-9 w-9 items-center justify-center rounded-xl"
        style={{ backgroundColor: theme.soft }}
      >
        <Icon
          size={17}
          style={{ color: theme.primary }}
        />
      </div>

      <div>
        <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#94A3B8]">
          {config.miniLabel}
        </p>

        <p className="mt-0.5 text-xs font-extrabold text-[#0F172A]">
          {config.miniTitle}
        </p>
      </div>
    </div>
  );
};

/* =========================================================
   LOAN VISUAL
========================================================= */

const LoanVisual = ({ config, theme }) => {
  const LoanIcon = config.loanIcon;


  return (
    <div className="relative mx-auto h-[470px] w-full max-w-[600px] sm:h-[540px] lg:h-[620px]">

      {/* Main visual background */}

      <div
        className="
          absolute
          bottom-[4%]
          right-[3%]
          h-[88%]
          w-[87%]
          overflow-hidden
          rounded-[3rem]
        "
        style={{
          background: `linear-gradient(135deg, ${theme.backgroundFrom}, ${theme.backgroundVia}, ${theme.backgroundTo})`,
        }}
      >

        {/* Decorative grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.28]
            bg-[linear-gradient(#6366F1_1px,transparent_1px),linear-gradient(90deg,#6366F1_1px,transparent_1px)]
            bg-size-[45px_45px]
            mask-[linear-gradient(to_bottom,black,transparent)]
          "
        />

        {/* Soft circles */}

         <div
          className="absolute -right-20 top-10 h-64 w-64 rounded-full blur-3xl"
          style={{ backgroundColor: `${theme.primary}18` }}
        />

        <div
          className="absolute -bottom-20 left-0 h-64 w-64 rounded-full blur-3xl"
          style={{ backgroundColor: `${theme.green}18` }}
        /> 

        {/* Decorative rings */}

        <div
          className="absolute right-[12%] top-[14%] h-32 w-32 rounded-full border"
          style={{ borderColor: `${theme.primary}18` }}
        />

        <div
          className="absolute right-[17%] top-[19%] h-20 w-20 rounded-full border border-dashed"
          style={{ borderColor: `${theme.secondary}20` }}
        />

        {/* Bottom decoration */}

        <div
          className="absolute bottom-0 left-0 h-[34%] w-full bg-linear-to-t to-transparent"
          style={{
            backgroundImage: `linear-gradient(to top, ${theme.primary}10, transparent)`,
          }}
        />

        <div className="absolute bottom-[15%] right-[8%] h-20 w-[60%] rounded-t-4xl bg-white/35 backdrop-blur-sm" />

        <div className="absolute bottom-[15%] right-[14%] flex gap-2 opacity-40">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-14 w-5 rounded-t-full"
              style={{
                backgroundColor: `${theme.primary}15`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main image */}

 
      <div className="absolute inset-0 z-20 flex items-center justify-center  h-full w-full">
  <img
    src={config.image}
    alt={config.imageAlt}

    className={`${confirm.image=="/homeloan (2).png"? "h-ful w-[115%] max-w-[650px] object-contain drop-shadow-[0_25px_35px_rgba(15,23,42,0.15)] -translate-x-15":"h-ful w-[115%] max-w-[550px] object-contain drop-shadow-[0_25px_35px_rgba(15,23,42,0.15)] translate-x-2"}`}
  />
</div>

      {/* Top card */}

      <LoanCard
        config={config}
        theme={theme}
      />

      {/* Bottom card */}

      <MiniLoanCard
        config={config}
        theme={theme}
      />

      {/* Bottom badge */}

      <div
        className="
          absolute
          bottom-[7%]
          right-[1%]
          z-40
          flex
          items-center
          gap-2
          rounded-full
          border
          border-white
          bg-white/90
          px-3
          py-2
          shadow-[0_12px_30px_rgba(15,23,42,0.1)]
          backdrop-blur-xl
        "
      >
        <span
          className="flex h-6 w-6 items-center justify-center rounded-full"
          style={{ backgroundColor: "#FFF7ED" }}
        >
          <Sparkles
            size={12}
            className="text-[#F59E0B]"
          />
        </span>

        <span className="text-[9px] font-bold text-[#475569]">
          {config.badgeText}
        </span>
      </div>
    </div>
  );
};

/* =========================================================
   TRUSTED CUSTOMERS
========================================================= */

const TrustedCustomers = ({ config }) => {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-4">

      <div className="flex -space-x-2">
        {config.avatars.map((initials) => (
          <div
            key={initials}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border-2
              border-white
              bg-gradient-to-br
              from-[#DBEAFE]
              to-[#E0E7FF]
              text-[8px]
              font-extrabold
              text-[#3730A3]
            "
          >
            {initials}
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={11}
              fill="currentColor"
              className="text-[#F59E0B]"
            />
          ))}
        </div>

        <p className="mt-0.5 text-[10px] font-semibold text-[#64748B]">
          Trusted by{" "}
          <span className="font-extrabold text-[#0F172A]">
            {config.trustedText}
          </span>
        </p>
      </div>
    </div>
  );
};

/* =========================================================
   MAIN REUSABLE COMPONENT
========================================================= */

const LoanHero = ({
  config,
  onEligibilityClick,
  onEmiClick,
}) => {
  const theme = config.theme;
  const LoanIcon = config.loanIcon;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: config.sectionBackground || "#F8FAFF",
      }}
    >

      {/* =====================================================
          GLOBAL DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(#2563EB_1px,transparent_1px),linear-gradient(90deg,#2563EB_1px,transparent_1px)]
            [background-size:55px_55px]
          "
        />

        <div
          className="absolute -left-40 top-20 h-80 w-80 rounded-full blur-[100px]"
          style={{
            backgroundColor: `${theme.primary}15`,
          }}
        />

        <div
          className="absolute right-[-100px] top-[25%] h-96 w-96 rounded-full blur-[120px]"
          style={{
            backgroundColor: `${theme.secondary}15`,
          }}
        />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1440px] px-5 pb-8 pt-28 sm:px-8 sm:pb-10 sm:pt-32 lg:px-12 lg:pt-36 xl:px-16">

        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4 xl:gap-10">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-30 max-w-[650px]">

            {/* Brand */}

            <div className="mb-6 animate-[fadeInUp_0.6s_ease-out] flex items-center gap-3">

              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{
                  backgroundColor: theme.navy,
                }}
              >
                <LoanIcon
                  size={18}
                  className="text-white"
                />
              </div>

              <div>
                <p
                  className="bg-clip-text text-sm font-extrabold tracking-tight text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${theme.green}, ${theme.navy})`,
                  }}
                >
                  BOROFIRST
                </p>

                <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#94A3B8]">
                  Financial Freedom Starts Here
                </p>
              </div>

            </div>

            {/* Eyebrow */}

            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm"
              style={{
                borderColor: `${theme.primary}25`,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: theme.primary,
                }}
              />

              <span
                className="text-[9px] font-extrabold animate-[fadeInUp_0.7s_ease-out] uppercase tracking-[0.18em] sm:text-[10px]"
                style={{
                  color: theme.primary,
                }}
              >
                {config.eyebrow}
              </span>
            </div>

            {/* Headline */}

            <h1
              className="
                max-w-[650px]
                text-[2.8rem]
                font-extrabold
                animate-[fadeInUp_0.8s_ease-out_0.5s_both]
                leading-[1]
                tracking-[-0.055em]
                text-[#0F172A]
                sm:text-5xl
                md:text-6xl
                lg:text-[4.15rem]
                xl:text-[4.75rem]
              "
            >
              {config.heading}

              <br />

              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${theme.green}, ${theme.mid}, ${theme.navy})`,
                }}
              >
                {config.highlight}
              </span>
            </h1>

            {/* Supporting text */}

            <p className="mt-6 max-w-[570px]  animate-[fadeInUp_0.8s_ease-out_0.4s_both] text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
              {config.description}
            </p>

            {/* CTA */}

            <div className="mt-7 flex flex-col gap-3 animate-[fadeInUp_0.8s_ease-out_0.4s_both] sm:mt-8 sm:flex-row">

              <button
                onClick={onEligibilityClick}
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg
                "
                style={{
                  backgroundImage: `linear-gradient(to right, ${theme.green}, ${theme.navy})`,
                }}
              >
                {config.primaryCTA}
              </button>

              <button
                onClick={onEmiClick}
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#E2E8F0]
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  transition-all
                  duration-300
                  hover:border-[#10B981]/40
                  hover:bg-[#10B981]/5
                "
                style={{
                  color: theme.navy,
                }}
              >
                {config.secondaryCTA}
              </button>

            </div>

            {/* Reassurance */}

            <div className="mt-4 flex animate-[fadeInUp_0.8s_ease-out_0.4s_both] items-center gap-2">

              <ShieldCheck
                size={15}
                style={{
                  color: theme.green,
                }}
              />

              <p className="text-[10px] font-medium text-[#64748B]">
                {config.reassurance}
              </p>

            </div>

            {/* Trust Points */}

            <div className="mt-8 grid max-w-[590px] animate-[fadeInUp_0.8s_ease-out_0.3s_both] grid-cols-1 gap-y-3 border-t border-[#E2E8F0] pt-6 sm:grid-cols-2">

              {config.trustPoints.map((point) => (
                <TrustPoint
                  key={point.text}
                  icon={point.icon}
                  text={point.text}
                  theme={theme}
                />
              ))}

            </div>

            {/* Trusted Customers */}

            <TrustedCustomers config={config} />

          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <div className="relative z-20 lg:-ml-4 xl:-ml-8">

            <LoanVisual
              config={config}
              theme={theme}
            />

            {/* Stats */}

            <div className="relative z-40 mx-auto -mt-3 grid max-w-[510px] grid-cols-3 overflow-hidden rounded-2xl border border-white/80 bg-white/90 shadow-[0_15px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">

              {config.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    px-3
                    py-3
                    text-center
                    sm:px-5
                    sm:py-4
                    ${
                      index !== config.stats.length - 1
                        ? "border-r border-[#E2E8F0]"
                        : ""
                    }
                  `}
                >
                  <p
                    className="text-sm font-extrabold sm:text-base"
                    style={{
                      color: theme.navy,
                    }}
                  >
                    {stat.number}
                  </p>

                  <p className="mt-0.5 text-[8px] font-semibold text-[#94A3B8] sm:text-[9px]">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Disclosure */}

        <div className="mt-7 flex justify-center lg:justify-start">
          <p className="text-[9px] font-medium text-[#94A3B8]">
            {config.disclosure}
          </p>
        </div>

      </div>
    </section>
  );
};

export default LoanHero;

