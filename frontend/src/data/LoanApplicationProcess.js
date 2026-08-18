import {
  FileText,
  FileCheck,
  BadgeCheck,
  Wallet,
} from "lucide-react";

export const processSteps = [
  {
    id: "1",
    icon: FileText,
    title: "Share Your Requirements",
    description:
      "Tell us about your loan requirement, income, employment or business profile, and the amount you need. Our team helps you identify a suitable loan.",
  },
  {
    id: "2",
    icon: FileCheck,
    title: " Document Collection & Check Eligibility ",
    description:
      "We check your eligibility and collect the required KYC, income, banking, and supporting documents.",
  },
  {
    id: "3",
    icon: BadgeCheck,
    title: "Submit Application To Bank and document  verification ",
    description:
      "After successful verification,BoroFirst submit your application to bank and The lender evaluates your profile, documents, credit history, income, and repayment capacity.",
  },
  {
    id: "4",
    icon: Wallet,
    title: "Approval & Loan Sanction",
    description:
      "The lender evaluates your profile and, if approved, issues the loan sanction with applicable terms .",
  },
  {
    id: "5",
    icon: Wallet,
    title: "Disbursement / Fund Received",
    description:
      "Complete the final formalities, after which the approved loan amount is disbursed as per the lender's process                                                                                                                                     .",
  },
];
