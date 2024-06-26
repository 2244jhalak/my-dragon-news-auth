import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import NewsCard from "../pages/NewsCard/NewsCard";
import PrivateRoute from "./PrivateRoute";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader:()=>fetch('/news.json')
        },
        { 
          path:"/details/:id",
          element:<PrivateRoute><NewsCard></NewsCard></PrivateRoute>

        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
  ]);

export default Router;