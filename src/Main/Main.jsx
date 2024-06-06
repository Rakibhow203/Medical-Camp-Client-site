import { Outlet } from "react-router-dom";
import NavBar from "../Component/Shared/NavBar";
import Footer from "../Component/Shared/Footer";


const Main = () => {
  return (
    <div>
      <NavBar></NavBar>

      <Outlet></Outlet>
      <Footer></Footer>


    </div>
  );
};

export default Main;