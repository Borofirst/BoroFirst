

import { Outlet, useNavigation } from "react-router"


import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";


export const Applayout=()=>{
   const Navigation=useNavigation()

   if(Navigation.state==="loading")return <Loader/>


    return(
        <>
        <Navbar/>
       <Outlet/>    {/*an outlet should be used in parent rout element to render their child element */}
        <Footer/>

        </>
    )
}