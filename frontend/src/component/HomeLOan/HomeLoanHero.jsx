
import React from "react";


import LoanHero from "../common/HeroAll";
import { homeLoanHero } from "../../data/loanHeroData";

const HomeLoanHero = () => {
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
      config={homeLoanHero}
      onEligibilityClick={handleEligibilityClick}
      onEmiClick={handleEmiClick}
    />
  );
};

export default HomeLoanHero;

