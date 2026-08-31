
import {
  BookOpenCheck,
  CheckCircle2,
  GraduationCap,
  Home,
  PiggyBank,
  TrendingUp,
  WalletCards,
} from "lucide-react";

/* =========================================================
   COMMON COLORS
========================================================= */

const colors = {
  primary: "#10B981",
  secondary: "#0B2578",
  accent: "#186A07",
};

/* =========================================================
   EDUCATION LOAN
========================================================= */

export const educationWhyChoose = {
  colors,

  eyebrow: "WHY EDUCATION LOANS?",

  heading: "Invest in Education Today.",
  highlight: "Build a Stronger Tomorrow.",

  description:
    "A well-planned education loan can help students pursue quality education while giving families greater flexibility to manage eligible academic expenses.",

  benefits: [
    {
      id: "01",
      icon: WalletCards,
      title: "Manage Education Costs",
      description:
        "A suitable education loan can help spread eligible tuition, accommodation, books and other approved education expenses through a structured repayment plan.",
    },
    {
      id: "02",
      icon: PiggyBank,
      title: "Preserve Family Savings",
      description:
        "Instead of using a large portion of family savings upfront, financing can help maintain liquidity for other important financial priorities.",
    },
    {
      id: "03",
      icon: GraduationCap,
      title: "Access Better Opportunities",
      description:
        "Education financing may help eligible students explore reputed institutions, professional courses and academic opportunities that align with their goals.",
    },
    {
      id: "04",
      icon: BookOpenCheck,
      title: "Cover Eligible Expenses",
      description:
        "Depending on lender policy, eligible financing may support tuition, accommodation, books, equipment and other approved academic expenses.",
    },
    {
      id: "05",
      icon: TrendingUp,
      title: "Invest in Your Future",
      description:
        "Quality education can help build knowledge, professional skills and career opportunities that may support your long-term financial goals.",
    },
  ],

  center: {
    icon: GraduationCap,
    title: "Your Education.",
    highlight: "Your Future.",
    bottomText: "Plan • Learn • Grow",
  },

  journey: {
    eyebrow: "YOUR JOURNEY FORWARD",
    title: "From Education to a Stronger Future",
    description:
      "Education can be an important step toward developing skills, building a career and working toward long-term goals.",

    items: [
      {
        icon: GraduationCap,
        title: "Education",
        text: "Choose the right academic opportunity.",
      },
      {
        icon: BookOpenCheck,
        title: "Skills",
        text: "Build knowledge and capabilities.",
      },
      {
        icon: CheckCircle2,
        title: "Career",
        text: "Prepare for professional opportunities.",
      },
      {
        icon: TrendingUp,
        title: "Future",
        text: "Work toward long-term goals.",
      },
    ],
  },

  cta: {
    eyebrow: "START YOUR JOURNEY",

    title:
      "Ready to plan your education without putting your goals on hold?",

    description:
      "Explore your education loan options and understand the financing possibilities available for your academic journey.",

    primaryButton: "Check Education Loan Options",
    secondaryButton: "Talk to an Expert",
  },
};

/* =========================================================
   HOME LOAN
========================================================= */

export const homeWhyChoose = {
  colors,

  eyebrow: "WHY CHOOSE A HOME LOAN?",

  heading: "Turn Your Home Dreams",
  highlight: "Into a Place to Call Your Own.",

  description:
    "A well-planned home loan can help you finance your property while maintaining financial flexibility and working toward long-term homeownership goals.",

  benefits: [
    {
      id: "01",
      icon: Home,
      title: "Buy Your Dream Home",
      description:
        "A home loan can help eligible borrowers finance the purchase of a house or apartment without paying the entire property cost upfront.",
    },
    {
      id: "02",
      icon: WalletCards,
      title: "Manage Your Finances",
      description:
        "Structured monthly repayments can help you spread the cost of your home purchase over a suitable repayment tenure.",
    },
    {
      id: "03",
      icon: PiggyBank,
      title: "Preserve Your Savings",
      description:
        "Home financing can help you avoid using a significant portion of your savings for the entire property cost upfront.",
    },
    {
      id: "04",
      icon: CheckCircle2,
      title: "Choose Flexible Tenures",
      description:
        "Depending on lender policies and eligibility, borrowers may have access to different repayment tenures to suit their financial plans.",
    },
    {
      id: "05",
      icon: TrendingUp,
      title: "Build Long-Term Wealth",
      description:
        "Owning a property can become an important part of a long-term financial plan while providing a place for you and your family.",
    },
  ],

  center: {
    icon: Home,
    title: "Your Home.",
    highlight: "Your Future.",
    bottomText: "Plan • Own • Grow",
  },

  journey: {
    eyebrow: "YOUR HOMEOWNERSHIP JOURNEY",
    title: "From Dream Home to Homeowner",

    description:
      "A thoughtful home-buying plan can help you move from choosing a property to building a secure foundation for the future.",

    items: [
      {
        icon: Home,
        title: "Dream",
        text: "Define the home you want to own.",
      },
      {
        icon: WalletCards,
        title: "Plan",
        text: "Understand your budget and financing needs.",
      },
      {
        icon: CheckCircle2,
        title: "Finance",
        text: "Explore suitable home loan options.",
      },
      {
        icon: TrendingUp,
        title: "Own",
        text: "Work toward long-term homeownership.",
      },
    ],
  },

  cta: {
    eyebrow: "MAKE IT YOURS",

    title:
      "Ready to take the next step toward owning your dream home?",

    description:
      "Explore your home loan options and understand the financing possibilities available for your property goals.",

    primaryButton: "Check Home Loan Options",
    secondaryButton: "Talk to an Expert",
  },
};

