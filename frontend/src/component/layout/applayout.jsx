

import { Outlet, useNavigation } from "react-router"


import Footer from "./footer";
import Header from "./header";


export const Applayout=()=>{
   const Navigation=useNavigation()

   if(Navigation.state==="loading")return <Loader/>


    return(
        <>
        <Header/>
       <Outlet/>    {/*an outlet should be used in parent rout element to render their child element */}
        <Footer/>

        </>
    )
}