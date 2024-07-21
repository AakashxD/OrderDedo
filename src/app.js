import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import { RouterProvider, createBrowserRouter ,Outlet} from "react-router-dom";
import About from "./components/About"
import Error from "./components/Error";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import RestaurantMenu from "./components/ResturantMenu";
const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      
      <Outlet/>
      <Footer/>

    </div>
  );
};
const appRoutes=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
   children: [
    {
      path:"/about",
      element:<About/>
    }
  ,
  {
    path:"/",
    element:<Body/>
  }
  ,{
    path:"/contact",
    element:<Contact/>
},{
  path:"/restaurants/:resId",
  element:<RestaurantMenu/>
}
],
errorElement:<Error/>
   }
  
 
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes} />);
