
import { homeWhyChoose } from "../../data/WhyLoanUsedata";
import WhyChooseLoan from "../common/WhyChooseLoan";

const HomeLoanWhyChoose = () => {
  const handlePrimaryCTA = () => {
    document
      .getElementById("loan-eligibility")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const handleSecondaryCTA = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <WhyChooseLoan
      config={homeWhyChoose}
      onPrimaryCTA={handlePrimaryCTA}
      onSecondaryCTA={handleSecondaryCTA}
    />
  );
};

export default HomeLoanWhyChoose;