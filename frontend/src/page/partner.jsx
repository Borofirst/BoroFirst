import { ShieldCheck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

// ================================
// Partner Data
// ================================

const partners = [
  // {
  //   id: 1,
  //   companyName: "IDBI Bank of India",
  //   logo: "IDBI-Bank.png",
  //   website: "#",
  // },
  {
    id: 2,
    companyName: "HDFC Bank",
    logo: "HDFC.png",
    website: "#",
  },
  // {
  //   id: 3,
  //   companyName: "ICICI Bank",
  //   logo: "icici.webp",
  //   website: "#",
  // },
  {
    id: 4,
    companyName: "Axis Bank",
    logo: "axisb.webp",
    website: "#",
  },
  // {
  //   id: 5,
  //   companyName: "Kotak Mahindra Bank",
  //   logo: "Kotak_Mahindra_Bank_logo.png",
  //   website: "#",
  // },

  // {
  //   id: 6,
  //   companyName: "Punjab Natonal Bank",
  //   logo: "pnbHousing.webp",
  //   website: "#",
  // },
  // {
  //   id: 7,
  //   companyName: "RBL Bank",
  //   logo: "RBL.jpg",
  //   website: "#",
  // },
  // {
  //   id: 8,
  //   companyName: "Cental Finance Limited",
  //   logo: "centralfinanceLTD.png",
  //   website: "#",
  // },
  // {
  //   id: 9,
  //   companyName: "DCB Bank",
  //   logo: "dcb.jpg",
  //   website: "#",
  // },
  // {
  //   id: 10,
  //   companyName: "Bandhan Bank",
  //   logo: "bandhan-bank-personal-loan-services.webp",
  //   website: "#",
  // },
  {
    id: 18,
    companyName: "Bandhan Bank",
    logo: "BND.png",
    website: "#",
  },
  // {
  //   id: 11,
  //   companyName: "Aditya Birla Group",
  //   logo: "adityaB.jfif",
  //   website: "#",
  // },
  // {
  //   id: 12,
  //   companyName: "cholamandalam Finance",
  //   logo: "cholamandalam.webp",
  //   website: "#",
  // },
  // {
  //   id: 13,
  //   companyName: "TATA Capital ",
  //   logo: "Tata_Capital_Logo-01.jpg.webp",
  //   website: "#",
  // },
  // {
  //   id: 14,
  //   companyName: "L&T Finance ",
  //   logo: "L&T.png",
  //   website: "#",
  // },
  // {
  //   id: 15,
  //   companyName: "Ujjivan finance ",
  //   logo: "ujjivan-small-finance.png",
  //   website: "#",
  // },
  {
    id: 16,
    companyName: "IDFC",
    logo: "IDFC.png",
    website: "#",
  },
];

const BankingPartners = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">
      {/* Background Decoration */}

      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-emerald-100 blur-3xl opacity-40"></div>

      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-40"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Trust Badge */}

        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2">
            <ShieldCheck size={18} className="text-emerald-600" />

            <span className="text-sm font-semibold text-emerald-700">
              Trusted Financial Network
            </span>
          </div>
        </div>

        {/* Heading */}

        <div className="mx-auto mt-8 max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Our Banking &
            <span className="bg-linear-to-r from-[#186A07] to-[#0B2578] bg-clip-text text-transparent">
              {" "}
              Financial Partners
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We collaborate with trusted banks and financial institutions to
            provide secure, transparent, and reliable financial solutions
            tailored to every customer's financial journey.
          </p>
        </div>

        <div className="mt-16">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              // pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
              1280: {
                slidesPerView: 6,
              },
            }}
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div
                  className="
           w-full
           flex
          h-full
          items-center
          justify-center
         bg-blue-400
     
        "
                >
                  <img
                    src={partner.logo}
                    alt={partner.companyName}
                    className="
              h-full
              w-full
              object-contain
              transition-all
              duration-300
        
            "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Bottom Note */}

        <div className="mx-auto mt-16 max-w-4xl text-center">
          <p className="text-lg leading-8 text-gray-600">
            Our partnerships with leading financial institutions enable us to
            deliver trusted financial solutions, competitive offers, faster
            approvals, and a seamless customer experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BankingPartners;
    //    rounded-2xl
            //  bg-blue-700