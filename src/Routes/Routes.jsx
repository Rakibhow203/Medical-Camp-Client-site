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
import PrivateRoute from "./PrivateRoute";
import OrganizerProfile from "../Component/Dashboard/OrganizerProfile";
import AddCamp from "../Component/Dashboard/AddCamp";
import ManageCamps from "../Component/Dashboard/ManageCamps";
import UpdateCamp from "../Component/Dashboard/UpdateCamp";
import ManageCampsRegister from "../Component/Dashboard/ManageCampsRegister"
import MyRequestCamps from "../Component/AvailableCamps/MyRequestCamps";
import Pay from "../Component/Dashboard/Pay";
import ParticipantAnalytics from "../Component/Dashboard/ParticipantAnalytics";
import ParticipantPaymentHistory from "../Component/Dashboard/ParticipantPaymentHistory";
import ParticipantProfile from "../Component/Dashboard/ParticipantProfile";
import ParticipantRegisteredCamps from "../Component/Dashboard/ParticipantRegisteredCamps";
import UserHome from "../Component/Dashboard/UserHome/UserHome";
import AdminHome from "../Component/Dashboard/AdminHome/AdminHome";
import AllUsers from "../Component/Dashboard/AllUsers";





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
        loader: () => fetch('https://madical-camp-server.vercel.app/allData')
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
        element: <PrivateRoute>
          <AvailableCampPage></AvailableCampPage>
        </PrivateRoute>

      },
      {

        path: 'myRequestCamp',
        element: <MyRequestCamps></MyRequestCamps>

      },

      {

        path: 'payNow',
        element: <Pay></Pay>

      }

      // private routes




    ]


  },

  {

    path: 'dashboard',
    element: <PrivateRoute> <Dashboard></Dashboard>,</PrivateRoute>,
    errorElement: <Error></Error>,
    children: [

      {
        path: 'adminHome',
        element: <AdminHome></AdminHome>

      },

      {
        path: 'organizer',
        element: <OrganizerProfile></OrganizerProfile>
      },

      {

        path: 'addCamp',
        element: <AddCamp></AddCamp>
      },
      {
        path: 'ManageRegisterCamp',
        element: <ManageCampsRegister></ManageCampsRegister>

      },
      {
        path: 'manageCamp',
        element: <ManageCamps></ManageCamps>

      },
      {
        path: 'updated/:id',
        element: <UpdateCamp></UpdateCamp>,
        // loader: ({ params }) => fetch(`https://madical-camp-server.vercel.app/allData/${params.id}`)
        loader: ({ params }) => fetch(`https://madical-camp-server.vercel.app/allData/${params.id}`)

      },

      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>

      },



      // -------------------participant Route-------------------------------------------

      {
        path: 'userHome',
        element: <UserHome></UserHome>


      },


      {
        path: 'analytics',
        element: <ParticipantAnalytics></ParticipantAnalytics>

      },
      {
        path: 'payment',
        element: <ParticipantPaymentHistory></ParticipantPaymentHistory>

      },
      {
        path: 'profile',
        element: <ParticipantProfile></ParticipantProfile>

      },
      {
        path: 'ParticipantRegisteredCamps',
        element: <ParticipantRegisteredCamps></ParticipantRegisteredCamps>

      },



    ]

  }


]);