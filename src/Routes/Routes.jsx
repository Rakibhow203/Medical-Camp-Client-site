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
        element: <PrivateRoute>
          <AvailableCampPage></AvailableCampPage>
        </PrivateRoute>

      },
      {

        path: 'myRequestCamp',
        element: <MyRequestCamps></MyRequestCamps>

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
        // loader: ({ params }) => fetch(`http://localhost:5000/allData/${params.id}`)
        loader: ({ params }) => fetch(`http://localhost:5000/allData/${params.id}`)



      },






    ]

  }


]);