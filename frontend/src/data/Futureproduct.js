import {
  ArrowRight,
  BadgeIndianRupee,
  TrendingUp,
  HeartPulse,
  Home,
  CreditCard,
} from "lucide-react";
import ProductCard from "../component/layout/ProductCard";

export const products = [
  {
    id: 1,
    title: "Personal Loan",
    badge: "Popular",
    icon: BadgeIndianRupee,
    description:
      "Quick approvals with flexible repayment options and competitive interest rates.",
  },

  {
    id: 2,
    title: "SIP Investment",
    badge: "Recommended",
    icon: TrendingUp,
    description:
      "Build long-term wealth with disciplined monthly investments starting small.",
  },

  {
    id: 3,
    title: "Health Insurance",
    badge: "Best Value",
    icon: HeartPulse,
    description:
      "Comprehensive medical coverage to protect you and your family's future.",
  },

  {
    id: 4,
    title: "Home Insurance",
    badge: "Secure",
    icon: Home,
    description:
      "Protect your home against unexpected damages with reliable insurance plans.",
  },

  {
    id: 5,
    title: "Credit Card",
    badge: "Exclusive",
    icon: CreditCard,
    description:
      "Enjoy premium rewards, cashback, travel benefits, and exclusive offers.",
  },
];