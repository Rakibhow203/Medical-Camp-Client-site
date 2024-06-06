
import { GiOrganigram } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="lg:flex gap-8">

        <div className="mb-5 w-64 min-h-screen bg-orange-400 rounded-lg">

          <ul className="menu space-y-3">
            <li>
              <NavLink to="/dashboard/organizer">
                <GiOrganigram />   Organizer Profile
              </NavLink>
            </li>
            <li>
              <NavLink>Add A Camp</NavLink>
            </li>
            <li>
              <NavLink>

                Manage Camp
              </NavLink>

            </li>
            <li>
              <NavLink>Manage Register Camp</NavLink>
            </li>













          </ul>



        </div>
        <div>

          <Outlet></Outlet>

        </div>



      </div>

    </div>
  );
};

export default Dashboard;