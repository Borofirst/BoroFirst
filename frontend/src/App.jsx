import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./page/Home/Home";
import { Applayout } from "./component/layout/applayout";
import { HomeLoan } from "./page/LoanCardPage/HomeLoan";

import LoanAgaintProperty from "./page/LoanCardPage/LoanAgaintProperty";
import PersonalLoan from "./page/LoanCardPage/personalLoan";
import BusinessLoanPage from "./page/LoanCardPage/BusinessLoanPage";
import { EducationLoanPage } from "./page/LoanCardPage/EducationLoan";
import CarLoanPage from "./page/LoanCardPage/CarLoanPage";
import GeneralInsurance from "./page/LoanCardPage/GeneralInsurance";
import GoldLoanPage from "./page/LoanCardPage/GoldLoanPage";
import ContactUs from "./page/ContactPage/ContactPage";
import BecomePartner from "./page/BecomePartner/BecomePartner";
import CareersPage from "./page/LoanCardPage/Carrer";
import AboutBorofirst from "./page/About/about";
import ItService from "./page/Itservice/ItService ";
import NotFound from "./page/NotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/home-loan",
          element: <HomeLoan />,
        },
        {
          path: "/loan-againt-property",
          element: <LoanAgaintProperty />,
        },
        {
          path: "/personal-loan",
          element: <PersonalLoan />,
        },
        {
          path: "/business-loan",
          element: <BusinessLoanPage />,
        },
        {
          path: "/education-loan",
          element: <EducationLoanPage />,
        },
        {
          path: "/car-loan",
          element: <CarLoanPage />,
        },
        {
          path: "/general-insurance",
          element: <GeneralInsurance />,
        },
        {
          path: "/gold-loan",
          element: <GoldLoanPage />,
        },

        {
          path: "/contact",
          element: <ContactUs />,
        },
        {
          path: "/partner",
          element: <BecomePartner />,
        },
        {
          path: "/career",
          element: <CareersPage />,
        },

        {
          path: "/about",
          element: <AboutBorofirst />,
        },

        {
          path: "/techServices",
          element: <ItService />,
        },
        {
          path: "*",
          element: <NotFound />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router}> </RouterProvider>;
};
export default App;
