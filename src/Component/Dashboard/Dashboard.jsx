

import { FaBandcamp, FaHome } from "react-icons/fa";
import { GiArchiveRegister, GiOrganigram } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <>

      <Helmet>

        <title> CampAid || Dashboard </title>
      </Helmet>
      <div>
        <NavBar></NavBar>
        <div className="lg:flex gap-8">

          <div className="mb-5 w-64 h-[90vh] bg-orange-400  rounded-lg">

            <ul className="menu space-y-3">
              <li className="text-lg text-black font-medium ">
                <NavLink to="/dashboard/organizer">
                  <GiOrganigram />   Organizer Profile
                </NavLink>
              </li>
              <li className="text-lg text-black font-medium " >
                <NavLink to="/dashboard/addCamp">
                  <FaBandcamp></FaBandcamp> Add A Camp
                </NavLink>
              </li>
              <li className="text-lg text-black font-medium " >
                <NavLink to="/dashboard/manageCamp">
                  <MdManageAccounts></MdManageAccounts>
                  Manage Camp
                </NavLink>

              </li>
              <li className="text-base text-black font-medium " >
                <NavLink to="/dashboard/ManageRegisterCamp">
                  <GiArchiveRegister></GiArchiveRegister>
                  Manage Register Camp
                </NavLink>
              </li>

              <div className="divider divider-secondary"></div>


              <li className="text-lg text-black font-medium "  >
                <NavLink to="/">
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>
              <li className="text-lg text-black font-medium ">
                <NavLink to="/abailableCamps">
                  <FaBandcamp></FaBandcamp>
                  Abailable Camps
                </NavLink>
              </li>

            </ul>



          </div>




          {/* dashboard content */}

          <div className="flex-1">

            <Outlet></Outlet>

          </div>



        </div>

      </div >


    </>

  );
};

export default Dashboard;