
import "./App.css"
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router";
import Home from "./page/Home/Home";
import { Applayout } from "./component/layout/applayout";



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
  //   {
  //    path:"/about",
  //    element:<About/>
  // },
  //   {
  //    path:"/movies",
  //    element:<Movies/>,
  //    loader:getMoviesData,
  // },
    
  //   {
  //    path:"/movies/:movieID",
  //    element:<MoviesDetaile/>,
  //    loader:getMoviesDetail, 
  // },
  //   {
  //    path:"/contect",
  //    element:<Contect/>,
  //    action:contactData,
  // },
  // {
  //   path:"*",
  //   element:<Errorpage/>
  // }

        ]
      },
    
]
)

return <RouterProvider router={router}> </RouterProvider>
}
export default App;