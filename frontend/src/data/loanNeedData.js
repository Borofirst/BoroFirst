import {
  Home,
  Plane,
  HeartPulse,
  Wallet,
  CarFront,
  GraduationCap,
  Building2,
  Landmark,
  HandCoins,
  ShieldCheck,
  BriefcaseBusiness,
  Bike,
  Bus,
  ArrowRight,
} from "lucide-react";

/* ================================
   NEED BUTTONS
================================ */

export const loanNeeds = [
  {
    id: "home",
    title: "Buy a House",
    icon: Home,
  },
  {
    id: "vacation",
    title: "Vacation",
    icon: Plane,
  },
  {
    id: "medical",
    title: "Medical Emergency",
    icon: HeartPulse,
  },
  {
    id: "cash",
    title: "Need Urgent Cash",
    icon: Wallet,
  },
  {
    id: "vehicle",
    title: "Buy a Vehicle",
    icon: CarFront,
  },
  {
    id: "education",
    title: "Higher Studies",
    icon: GraduationCap,
  },
];

/* ================================
   LOAN PRODUCTS
================================ */

export const loanNeedData = {
  home: [
    {
      id: 1,
      icon: Home,
      title: "Home Loan",
      description:
        "Turn your dream home into reality with affordable EMIs, attractive interest rates, and hassle-free approvals.",

      amount: "Up to ₹5 Crore",
      tenure: "30 Years",
      interest: "Starting 8.35%*",

      features: [
        "Low Interest Rates",
        "Quick Approval",
        "Minimal Documentation",
      ],

      primaryBtn: "Apply Now",
      secondaryBtn: "View Details",

      color: "from-emerald-500 to-cyan-500",
      badge: "Popular",
    },

    {
      id: 2,
      icon: Building2,
      title: "Loan Against Property",

      description:
        "Unlock the value of your residential or commercial property while retaining ownership.",

      amount: "Up to 80% Property Value",
      tenure: "20 Years",
      interest: "Starting 9.10%*",

      features: [
        "Higher Loan Amount",
        "Flexible Repayment",
        "Fast Processing",
      ],

      primaryBtn: "Apply Now",
      secondaryBtn: "View Details",

      color: "from-blue-500 to-cyan-500",

      badge: "Recommended",
    },

    {
      id: 3,
      icon: Landmark,

      title: "Mortgage Loan",

      description:
        "Secure high-value financing for business expansion or personal needs using your property.",

      amount: "Up to ₹10 Crore",

      tenure: "15 Years",

      interest: "Starting 9.50%*",

      features: [
        "Large Loan Amount",
        "Simple Eligibility",
        "Easy EMI",
      ],

      primaryBtn: "Apply Now",

      secondaryBtn: "View Details",

      color: "from-cyan-500 to-blue-700",

      badge: "Best Seller",
    },
  ],

  vacation: [
    {
      id: 4,
      icon: Plane,

      title: "Travel Loan",

      description:
        "Travel anywhere in the world with easy financing and flexible monthly repayments.",

      amount: "Up to ₹15 Lakhs",

      tenure: "5 Years",

      interest: "Starting 10.25%*",

      features: [
        "Instant Approval",
        "Low EMI",
        "No Collateral",
      ],

      primaryBtn: "Apply Now",

      secondaryBtn: "View Details",

      color: "from-blue-600 to-cyan-500",

      badge: "Trending",
    },

    {
      id: 5,
      icon: HandCoins,

      title: "Personal Loan",

      description:
        "Finance your dream vacation without disturbing your savings.",

      amount: "Up to ₹25 Lakhs",

      tenure: "7 Years",

      interest: "Starting 10.75%*",

      features: [
        "100% Digital",
        "Quick Disbursal",
        "Low Interest",
      ],

      primaryBtn: "Apply Now",

      secondaryBtn: "View Details",

      color: "from-emerald-500 to-blue-600",

      badge: "Popular",
    },

    {
      id: 6,
      icon: ShieldCheck,

      title: "Travel Insurance",

      description:
        "Stay protected against trip cancellations, baggage loss, and medical emergencies.",

      amount: "Affordable Plans",

      tenure: "Worldwide",

      interest: "24×7 Support",

      features: [
        "Global Coverage",
        "Medical Protection",
        "Instant Policy",
      ],

      primaryBtn: "Buy Policy",

      secondaryBtn: "View Details",

      color: "from-cyan-500 to-blue-600",

      badge: "Secure",
    },
  ],

  medical: [
    {
      id: 7,
      icon: HeartPulse,

      title: "Medical Loan",

      description:
        "Receive financial assistance immediately during unexpected medical emergencies.",

      amount: "Up to ₹20 Lakhs",

      tenure: "6 Years",

      interest: "Starting 9.99%*",

      features: [
        "Instant Approval",
        "Zero Hidden Charges",
        "Quick Disbursal",
      ],

      primaryBtn: "Apply Now",

      secondaryBtn: "View Details",

      color: "from-emerald-500 to-blue-500",

      badge: "Fast",
    },

    {
      id: 8,
      icon: ShieldCheck,

      title: "Health Insurance",

      description:
        "Protect your family from rising healthcare costs with comprehensive coverage.",

      amount: "Cashless Treatment",

      tenure: "Lifetime Renewal",

      interest: "Affordable Premium",

      features: [
        "Cashless Hospitals",
        "Family Cover",
        "Tax Benefits",
      ],

      primaryBtn: "Buy Policy",

      secondaryBtn: "View Details",

      color: "from-cyan-500 to-blue-600",

      badge: "Trusted",
    },

    {
      id: 9,
      icon: HandCoins,

      title: "Personal Loan",

      description:
        "Meet medical expenses instantly without pledging any collateral.",

      amount: "Up to ₹25 Lakhs",

      tenure: "7 Years",

      interest: "Starting 10.50%*",

      features: [
        "Instant Funds",
        "Easy EMI",
        "Paperless Process",
      ],

      primaryBtn: "Apply Now",

      secondaryBtn: "View Details",

      color: "from-blue-500 to-emerald-500",

      badge: "Recommended",
    },
  ],

  cash: [
    {
      id: 10,
      icon: Wallet,

      title: "Instant Personal Loan",

      description:
        "Get funds credited to your bank account within hours for urgent financial needs.",

      amount: "Up to ₹25 Lakhs",

      tenure: "7 Years",

      interest: "Starting 10.75%*",

      features: [
        "Instant Approval",
        "No Security",
        "100% Online",
      ],

      primaryBtn: "Apply Now",

      secondaryBtn: "View Details",

      color: "from-emerald-500 to-blue-500",

      badge: "Instant",
    },

    {
      id: 11,
      icon: Building2,

      title: "Loan Against Property",

      description:
        "Need a large amount? Use your property to get high-value financing quickly.",

      amount: "Up to ₹10 Crore",

      tenure: "20 Years",

      interest: "Starting 9.25%*",

      features: [
        "Large Amount",
        "Fast Processing",
        "Easy Repayment",
      ],

      primaryBtn: "Apply Now",

      secondaryBtn: "View Details",

      color: "from-blue-500 to-cyan-500",

      badge: "Popular",
    },

    {
      id: 12,
      icon: BriefcaseBusiness,

      title: "Business Loan",

      description:
        "Meet urgent business cash flow requirements without collateral.",

      amount: "Up to ₹1 Crore",

      tenure: "10 Years",

      interest: "Starting 11.25%*",

      features: [
        "Collateral Free",
        "Fast Approval",
        "Flexible EMI",
      ],

      primaryBtn: "Apply Now",

      secondaryBtn: "View Details",

      color: "from-cyan-500 to-blue-700",

      badge: "Business",
    },
  ],

  vehicle: [
    {
      id: 13,
      icon: CarFront,

      title: "Used Car Loan",

      description:
        "Buy your dream pre-owned vehicle with easy financing and attractive EMIs.",

      amount: "90% Financing",

      tenure: "7 Years",

      interest: "Starting 8.95%*",

      features: [
        "Quick Loan",
        "Low EMI",
        "Doorstep Service",
      ],

      primaryBtn: "Apply Now",

      secondaryBtn: "View Details",

      color: "from-blue-500 to-cyan-500",

      badge: "Popular",
    },

    {
      id: 14,
      icon: Bike,

      title: "Two Wheeler Loan",

      description:
        "Ride home your dream bike with minimum down payment and instant approvals.",

      amount: "95% Financing",

      tenure: "5 Years",

      interest: "Starting 8.50%*",

      features: [
        "Minimal Documentation",
        "Instant Approval",
        "Affordable EMI",
      ],

      primaryBtn: "Apply Now",

      secondaryBtn: "View Details",

      color: "from-emerald-500 to-blue-600",

      badge: "Fast",
    },

    {
      id: 15,
      icon: Bus,

      title: "Commercial Vehicle Loan",

      description:
        "Expand your business fleet with affordable commercial vehicle financing.",

      amount: "Up to ₹2 Crore",

      tenure: "8 Years",

      interest: "Starting 9.85%*",

      features: [
        "Business Support",
        "Flexible EMI",
        "High Loan Amount",
      ],

      primaryBtn: "Apply Now",

      secondaryBtn: "View Details",

      color: "from-cyan-500 to-blue-700",

      badge: "Business",
    },
  ],

  education: [
    {
      id: 16,
      icon: GraduationCap,

      title: "Education Loan",

      description:
        "Study in India or abroad with attractive education loans and flexible repayment.",

      amount: "Up to ₹75 Lakhs",

      tenure: "15 Years",

      interest: "Starting 8.75%*",

      features: [
        "No Prepayment Charges",
        "Moratorium Period",
        "Easy Approval",
      ],

      primaryBtn: "Apply Now",

      secondaryBtn: "View Details",

      color: "from-blue-500 to-cyan-500",

      badge: "Top Choice",
    },

    {
      id: 17,
      icon: GraduationCap,

      title: "Study Abroad Loan",

      description:
        "Finance tuition fees, accommodation, travel, and other education expenses overseas.",

      amount: "Up to ₹1.5 Crore",

      tenure: "15 Years",

      interest: "Starting 9.10%*",

      features: [
        "Global Universities",
        "Easy Repayment",
        "Fast Processing",
      ],

      primaryBtn: "Apply Now",

      secondaryBtn: "View Details",

      color: "from-emerald-500 to-blue-500",

      badge: "Global",
    },

    {
      id: 18,
      icon: HandCoins,

      title: "Skill Development Loan",

      description:
        "Fund professional certifications, technical courses, and career development programs.",

      amount: "Up to ₹10 Lakhs",

      tenure: "5 Years",

      interest: "Starting 9.50%*",

      features: [
        "Career Growth",
        "Flexible EMI",
        "Quick Approval",
      ],

      primaryBtn: "Apply Now",

      secondaryBtn: "View Details",

      color: "from-cyan-500 to-blue-700",

      badge: "Career",
    },
  ],
};