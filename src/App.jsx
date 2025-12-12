import { createBrowserRouter , RouterProvider } from "react-router";
import Navbar from "./Navbar"
import Window from "./window"
import Scroll from "./scroll"
import About from "./about"

import Home from "./Home"
import { Children } from "react";

const router=createBrowserRouter([
  {path:"/",
    element:<Home/>,
  },
  {
    path:"/about/:id",
    element:<About/>
  }]

)

export default function App(){
  return(
    <RouterProvider router={router}></RouterProvider>

  )
}