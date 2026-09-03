
import React from "react";
import { educationLoanHero } from "../../data/loanHeroData";
import LoanHero from "../common/HeroAll";


const EducationLoanHero = () => {
  const handleEligibilityClick = () => {
    document
      .getElementById("loan-eligibility")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const handleEmiClick = () => {
    document
      .getElementById("emi-calculator")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <LoanHero
      config={educationLoanHero}
      onEligibilityClick={handleEligibilityClick}
      onEmiClick={handleEmiClick}
    />
  );
};

export default EducationLoanHero;

