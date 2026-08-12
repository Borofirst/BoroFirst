
import "./App.css"
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router";
import Home from "./page/Home/Home";
import { Applayout } from "./component/layout/applayout";
import HomeLoan from "./page/LoanCardPage/HomeLoan";




const App=()=>{
  const router=createBrowserRouter(
    [

      {
        path:"/",
        element:<Applayout/>,
        // errorElement:<Errorpage/>,
        children:[
 {
     path:"/",
     element:<Home/>
  },

    {
     path:"/home-loan",
     element:<HomeLoan/>
  },
    {
     path:"/loan-againt-property",
     element:<HomeLoan/>
  },
    {
     path:"/personal-loan",
     element:<HomeLoan/>
  },
    {
     path:"/business-loan",
     element:<HomeLoan/>
  },
    {
     path:"/education-loan",
     element:<HomeLoan/>
  },
    {
     path:"/car-loan",
     element:<HomeLoan/>
  },
    {
     path:"/general-insurance",
     element:<HomeLoan/>
  },
  
        ]
      },
    
]
)

return <RouterProvider router={router}> </RouterProvider>
}
export default App;