import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ArrowRight } from 'lucide-react';
import LoanNeedSection from '../../component/layout/landneedSection';
import WhyChooseUs from '../whyChooseuse';
import LoanApplicationProcess from '../LoanApplicationProcess';
import FeaturedFinancialProducts from '../FeaturedFinancialProducts';
import BankingPartners from '../partner';
import ContactSection from '../ContactSection';
import { Header } from '../../component/header/header';
import Product from '../../component/product/product';
import LoanCalculator from '../LoanCalculator';
import FAQSection from '../../component/common/FAQSection';
import {HomePagefaqData} from "../../data/HomePageFAQDATA";
const Home = () => {
  return (
    <>
{/* hero */}
<Header/>
{/* card */}
<Product/>
<LoanNeedSection/>
<LoanCalculator/>
<WhyChooseUs/>
<LoanApplicationProcess/>
<FeaturedFinancialProducts/>
<BankingPartners/>
<ContactSection/>
<FAQSection faqs={HomePagefaqData}/>
     </>
  )
}

export default Home


