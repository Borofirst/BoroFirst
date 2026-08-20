

import { Outlet, useNavigation } from "react-router"



import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";


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