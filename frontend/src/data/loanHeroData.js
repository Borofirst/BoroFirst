
import {
  BookOpen,
  Clock3,
  GraduationCap,
  Home,
  IndianRupee,
  Percent,
  WalletCards,
} from "lucide-react";

/* =========================================================
   COMMON BOROFIRST THEME
========================================================= */

const borofirstTheme = {
  primary: "#0B2578",
  secondary: "#2563EB",
  navy: "#0B2578",

  green: "#186A07",
  mid: "#147342",

  soft: "#EEF2FF",
  softGreen: "#ECFDF5",

  backgroundFrom: "#EEF4FF",
  backgroundVia: "#F5F3FF",
  backgroundTo: "#ECFDF5",
};

/* =========================================================
   EDUCATION LOAN
========================================================= */

export const educationLoanHero = {
  theme: borofirstTheme,

  loanIcon: GraduationCap,
  miniIcon: BookOpen,

  eyebrow: "Invest in Your Future",

  heading: "Your Education Dreams,",
  highlight: "Now Within Reach.",

  description:
    "Get flexible education loans with competitive interest rates, simple documentation, and quick approval — so you can focus on building your future.",

  primaryCTA: "Check Your Eligibility",
  secondaryCTA: "Calculate EMI",

  reassurance:
    "Checking eligibility will not affect your credit score.",

  image: "/EducatinLoan.png",
  imageAlt: "Student pursuing higher education",

  cardTitle: "Education Loan",
  loanAmount: "Up to ₹50L",
  cardBottomText: "Quick Approval",

  miniLabel: "Study Anywhere",
  miniTitle: "India & Abroad",

  badgeText: "Build Your Future",

  trustedText: "10,000+ students",

  avatars: ["AK", "RS", "PM", "NV"],

  trustPoints: [
    {
      icon: IndianRupee,
      text: "Loans up to ₹50 Lakhs",
    },
    {
      icon: Percent,
      text: "Competitive interest rates",
    },
    {
      icon: Clock3,
      text: "Quick approval",
    },
    {
      icon: WalletCards,
      text: "Flexible repayment options",
    },
  ],

  stats: [
    {
      number: "10K+",
      label: "Students",
    },
    {
      number: "4.8/5",
      label: "Experience",
    },
    {
      number: "India",
      label: "& Abroad",
    },
  ],

  disclosure: "Terms and conditions apply.",
};

/* =========================================================
   HOME LOAN
========================================================= */

export const homeLoanHero = {
  theme: {
    ...borofirstTheme,

    backgroundFrom: "#ECFDF5",
    backgroundVia: "#F0FDF4",
    backgroundTo: "#EFF6FF",
  },

  loanIcon: Home,
  miniIcon: Home,

  eyebrow: "Make Your Dream Home Real",

  heading: "Your Dream Home,",
  highlight: "Closer Than You Think.",

  description:
    "Turn your dream of owning a home into reality with flexible home loans, competitive interest rates, easy documentation, and a smooth application process.",

  primaryCTA: "Check Your Eligibility",
  secondaryCTA: "Calculate EMI",

  reassurance:
    "Checking eligibility will not affect your credit score.",

  image: "/homeloan (2).png",
  imageAlt: "Family planning their dream home",

  cardTitle: "Home Loan",
  loanAmount: "Up to ₹2 Cr",
  cardBottomText: "Flexible Tenure",

  miniLabel: "Your Dream Home",
  miniTitle: "Own It With Confidence",

  badgeText: "Build Your Home",

  trustedText: "10,000+ customers",

  avatars: ["RK", "PS", "AM", "VK"],

  trustPoints: [
    {
      icon: IndianRupee,
      text: "Loans up to ₹2 Crore",
    },
    {
      icon: Percent,
      text: "Competitive interest rates",
    },
    {
      icon: Clock3,
      text: "Quick processing",
    },
    {
      icon: WalletCards,
      text: "Flexible repayment options",
    },
  ],

  stats: [
    {
      number: "10K+",
      label: "Customers",
    },
    {
      number: "4.8/5",
      label: "Experience",
    },
    {
      number: "₹2 Cr",
      label: "Loan Amount",
    },
  ],

  disclosure: "Terms and conditions apply.",
};

