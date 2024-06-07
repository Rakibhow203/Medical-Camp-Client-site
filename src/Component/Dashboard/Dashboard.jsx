
import { BiSolidRegistered } from "react-icons/bi";
import { FaBandcamp } from "react-icons/fa";
import { GiOrganigram } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";

const Dashboard = () => {
  return (
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
              <NavLink to="/dashboard/registerCamp">
                <BiSolidRegistered></BiSolidRegistered>
                Manage Register Camp
              </NavLink>
            </li>


          </ul>



        </div>
        <div>

          <Outlet></Outlet>

        </div>



      </div>

    </div >
  );
};

export default Dashboard;