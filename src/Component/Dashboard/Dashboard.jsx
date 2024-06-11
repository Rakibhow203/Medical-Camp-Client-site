

import { FaBandcamp, FaHome, FaUserAlt } from "react-icons/fa";
import { GiArchiveRegister, GiEgyptianProfile, GiOrganigram } from "react-icons/gi";
import { MdAppRegistration, MdManageAccounts } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AdminDashboardBanner from "./AdminDashboardBanner";
import { SiGoogleanalytics } from "react-icons/si";
import useAdmin from "../Hook/useAdmin";





const Dashboard = () => {
  const [isAdmin] = useAdmin();



  return (
    <>
      <Helmet>

        <title> CampAid || Dashboard </title>
      </Helmet>
      <div>



        <AdminDashboardBanner></AdminDashboardBanner>
        <div className="lg:flex gap-8">

          <div className="mb-5 w-64 h-[90vh] bg-orange-400  rounded-lg">

            <ul className="menu space-y-3">

              {/* Admin Role */}

              {
                isAdmin ? <>
                  <li>
                    <NavLink to="/dashboard/adminHome">
                      <FaHome></FaHome> Admin Home
                    </NavLink>

                  </li>

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
                  <li className="text-base text-black font-medium " >
                    <NavLink to="/dashboard/allUsers">
                      <FaUserAlt></FaUserAlt>
                      All Users
                    </NavLink>
                  </li>
                </> :






                  // Participant Role

                  <>

                    <li>
                      <NavLink to="/dashboard/userHome">
                        <FaHome></FaHome> User Home
                      </NavLink>

                    </li>

                    <li className="text-lg text-black font-medium ">
                      <NavLink to="/dashboard/analytics">
                        <SiGoogleanalytics /> Analytics
                      </NavLink>
                    </li>
                    <li className="text-lg text-black font-medium " >
                      <NavLink to="/dashboard/profile">
                        <GiEgyptianProfile /> Participant Profile
                      </NavLink>
                    </li>
                    <li className="text-lg text-black font-medium " >
                      <NavLink to="/dashboard/ParticipantRegisteredCamps">
                        <MdManageAccounts></MdManageAccounts>
                        Registered Camps
                      </NavLink>

                    </li>
                    <li className="text-base text-black font-medium " >
                      <NavLink to="/dashboard/payment">
                        <MdAppRegistration ></MdAppRegistration>
                        Payment History
                      </NavLink>
                    </li>
                  </>
              }




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




