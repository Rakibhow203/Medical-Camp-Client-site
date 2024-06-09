
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const AvailableCampPage = () => {
  const [camps, setCamps] = useState([]);

  useEffect(() => {
    const fetchCamps = async () => {
      try {
        // Fetch data from the API
        const response = await axios.get('http://localhost:5000/allData');

        // Sort the camps by participant count in descending order
        const sortedCamps = response.data.sort((a, b) => b.participantCount - a.participantCount);

        // Set the camps in the state
        setCamps(sortedCamps);
      } catch (error) {
        console.error('Error fetching camps:', error);
      }
    };

    fetchCamps();
  }, []);

  return (

    <>

      <Helmet>
        <title> CampAid || AbailableCamp</title>
      </Helmet>

      <div className="my-8">
        <h2 className="text-3xl font-bold text-center mb-6">Available Medical Camps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {camps.map(camp => (
            <div key={camp._id} className="bg-white rounded shadow p-4">
              <img src={camp.image} alt={camp.name} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">{camp.name}</h3>
              <p className="text-gray-600 mb-2 font-bold"> Fees: <span className="font-semibold">{camp.campFees}</span> </p>
              <p className="text-gray-600 mb-2"> <span className="font-bold">Date & Time:</span> {camp.dateTime}</p>
              {/* <p>Date & Time: {new Date(camp.dateTime).toLocaleString()}</p> */}

              <p className="text-gray-600 mb-2 font-bold">Location: <span className="font-medium"> {camp.location}</span> </p>
              <p className="text-gray-600 mb-2 font-bold">Healthcare Professional: <span className="font-semibold">{camp.healthcareProfessionalName}</span>  </p>
              <p className="text-gray-600 mb-2 font-bold">Participants: <span className="font-semibold">{camp.participantCount}</span> </p>
              <div className="">

                <Link to={`/camp-details/${camp._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">
                  View Details
                </Link>
                <Link to={`/camp-details/${camp._id}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Join Camp
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>

    </>

  );
};

export default AvailableCampPage;