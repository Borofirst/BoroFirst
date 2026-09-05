import React from "react";


import LoanNeedSection from "../../component/layout/landneedSection";
import WhyChooseUs from "../whyChooseuse";
import LoanApplicationProcess from "../LoanApplicationProcess";
import FeaturedFinancialProducts from "../FeaturedFinancialProducts";
import BankingPartners from "../partner";
import ContactSection from "../../component/common/ContactSection";
import { Header } from "../../component/header/header";
import Product from "../../component/product/product";
import LoanCalculator from "../../component/common/LoanCalculator";
import FAQSection from "../../component/common/FAQSection";
import { HomePagefaqData } from "../../data/HomePageFAQDATA";
import TestimonialsSection from "../TestimonialsSection";
import SEO from "../../component/Seo";
const Home = () => {
  return (
    <>
      {/* hero */}
         <SEO
        title="BOROFIRST | Smart Financial Solutions & Loans"
        description="BOROFIRST connects customers with smart, transparent and customer-focused financial solutions including personal loans, home loans and business loans."
        canonical="https://www.borofirst.com/"
      />

      <main>
       
      <Header/>
     
      <Product />
      <LoanNeedSection />
      <LoanCalculator />
      <WhyChooseUs />
      <LoanApplicationProcess />
      <FeaturedFinancialProducts />
      <BankingPartners />
      <ContactSection />
      <TestimonialsSection/>
      <FAQSection faqs={HomePagefaqData} />
      </main>

    </>
  );
};

export default Home;
