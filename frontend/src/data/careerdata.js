
import {

  BriefcaseBusiness,
  Code2,
  Handshake,
  Headset,
  Megaphone,

} from "lucide-react";

export const careerCategories = [
  {
    id: "marketing",
    title: "Marketing",
    description:
      "Help Borofirst connect with customers through creative campaigns, digital marketing, content, branding, and market initiatives.",
    icon: Megaphone,
    image: "/market.png",
    roles: [
      "Digital Marketing Executive",
      "Marketing Associate",
      "Content Specialist",
      "Social Media Executive",
      "Performance Marketing Executive",
      "Brand Executive",
    ],
    accent: "from-emerald-500/20 to-blue-500/20",
  },
  {
    id: "customer-support",
    title: "BPO & Customer Support",
    description:
      "Be the voice of Borofirst and help customers understand financial products, resolve queries, and navigate their financial journey.",
    icon: Headset,
    image: "/BPO.png",
    roles: [
      "Customer Support Executive",
      "BPO Executive",
      "Telecalling Executive",
      "Customer Relationship Executive",
      "Process Associate",
      "Customer Experience Executive",
    ],
    accent: "from-blue-500/20 to-emerald-500/20",
  },
  {
    id: "sales",
    title: "Sales",
    description:
      "Build relationships, understand customer needs, and help customers discover suitable financial solutions.",
    icon: Handshake,
    image: "/sale.png",
    roles: [
      "Sales Executive",
      "Relationship Manager",
      "Business Development Executive",
      "Field Sales Executive",
      "Loan Sales Executive",
      "Area Sales Manager",
    ],
    accent: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    id: "software",
    title: "Software Engineering",
    description:
      "Build the technology that powers better digital financial experiences for our customers and teams.",
    icon: Code2,
    image: "/software.png",
    roles: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "React Developer",
      "Node.js Developer",
      "Software Engineer",
      "QA Engineer",
      "DevOps Engineer",
    ],
    technologies: [
      "React",
      "Node.js",
      "APIs",
      "Cloud",
      "Databases",
      "Automation",
    ],
    accent: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: "management",
    title: "Management & Leadership",
    description:
      "Lead teams, develop strategies, improve operations, and help drive Borofirst toward its next stage of growth.",
    icon: BriefcaseBusiness,
    image: "/management.png ",
    roles: [
      "Team Leader",
      "Sales Manager",
      "Operations Manager",
      "Branch Manager",
      "Business Manager",
      "Department Manager",
      "Senior Management",
    ],
    accent: "from-indigo-500/20 to-emerald-500/20",
  },
];