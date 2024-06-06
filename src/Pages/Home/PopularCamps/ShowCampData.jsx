import { Link } from "react-router-dom";
import PopularCamp from "./PopularCamp";


const ShowCampData = () => {
  return (
    <div>

      <PopularCamp></PopularCamp>
      <div className="text-center mt-4">
        <Link to='/AvailableCamps' className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          See All Camps
        </Link>
      </div>

    </div>
  );
};

export default ShowCampData;