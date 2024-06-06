import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Main/Main";
import Error from "../Pages/Error";
import HomePageLayout from "../Pages/Home/HomePageLayout/HomePageLayout";
import CampDetails from "../Pages/Home/PopularCamps/CampDetails/CampDetails";
import AvailableCampPage from "../Component/Shared/AvailableCampPage/AvailableCampPage";
import LogIn from "../Component/JoinUs/LogIn";
import Register from "../Component/JoinUs/Register/Register";

import Dashboard from "../Component/Dashboard/Dashboard";


export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,


    children: [
      {
        path: '/',
        element: <HomePageLayout></HomePageLayout>
      },
      {
        path: '/camp-details/:id',
        element: <CampDetails></CampDetails>,
        loader: () => fetch('http://localhost:5000/allData')
      },

      {

        path: 'abailableCamps',
        element: <AvailableCampPage></AvailableCampPage>

      },
      {
        path: 'login',
        element: <LogIn></LogIn>
      },
      {
        path: 'register',
        element: <Register></Register>
      },

      {
        path: 'AvailableCamps',
        element: <AvailableCampPage></AvailableCampPage>

      },


      // private routes

      {

        path: 'dashboard',
        element: (
          <Dashboard></Dashboard>

        )

      }


    ]


  },




]);