import { NavLink } from "react-router-dom";


const Dashboard = () => {
  const isAuthenticated = true; // Placeholder for authentication status

  // if (!isAuthenticated) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <div>
      <h1>Organizer Dashboard</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/organizer/profile">Organizer Profile</NavLink>
          </li>
          <li>
            <NavLink to="/organizer/add-camp">Add A Camp</NavLink>
          </li>
          <li>
            <NavLink to="/organizer/manage-camps">Manage Camps</NavLink>
          </li>
          <li>
            <NavLink to="/organizer/manage-registered-camps">Manage Registered Camps</NavLink>
          </li>
        </ul>
      </nav>
      {/* <Routes>
        <Route path="/organizer/profile" element={<OrganizerProfile />} />
        <Route path="/organizer/add-camp" element={<AddCamp />} />
        <Route path="/organizer/manage-camps" element={<ManageCamps />} />
        <Route path="/organizer/manage-registered-camps" element={<ManageRegisteredCamps />} />
        <Route path="*" element={<Navigate to="/organizer/profile" />} />
      </Routes> */}
    </div>
  );
};

export default Dashboard;
