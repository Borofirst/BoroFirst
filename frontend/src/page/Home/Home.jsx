import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// import {loanProduct} from "../../assets/productData"
import { ArrowRight } from 'lucide-react';
import LoanNeedSection from '../../component/layout/landneedSection';
import WhyChooseUs from '../whyChooseuse';
import LoanApplicationProcess from '../LoanApplicationProcess';
import FeaturedFinancialProducts from '../FeaturedFinancialProducts';
import BankingPartners from '../partner';
import FAQSection from '../freaquestAskedQ';
import ContactSection from '../ContactSection';
import { Header } from '../../component/header/header';
import Product from '../../component/product/product';
const Home = () => {
  return (
    <>
{/* hero */}
<Header/>
{/* card */}
<Product/>
<LoanNeedSection/>
<WhyChooseUs/>
<LoanApplicationProcess/>
<FeaturedFinancialProducts/>
<BankingPartners/>
<FAQSection/>
<ContactSection/>
     </>
  )
}

export default Home


