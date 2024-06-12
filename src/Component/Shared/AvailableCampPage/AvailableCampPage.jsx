
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Loading from "../../../Loding/Loading";


const AvailableCampPage = () => {
  const [camps, setCamps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCamps = async () => {
      try {
        // Fetch data from the API
        const response = await axios.get('https://madical-camp-server.vercel.app/allData');

        // Sort the camps by participant count in descending order
        const sortedCamps = response.data.sort((a, b) => b.participantCount - a.participantCount);
        setLoading(false)
        // Set the camps in the state
        setCamps(sortedCamps);
      } catch (error) {
        console.error('Error fetching camps:', error);
      }
    };

    fetchCamps();
  }, []);
  if (loading) return <Loading></Loading>
  return (


    <>
      <Helmet>
        <title>CampAid || Available Camp</title>
      </Helmet>

      {loading ? (
        <div className="flex justify-center items-center h-screen">

        </div>
      ) : (
        <div className="my-8 px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Available Medical Camps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {camps.map(camp => (
              <div key={camp._id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <img src={camp.image} alt={camp.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{camp.name}</h3>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Fees:</span> {camp.campFees}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Date & Time:</span> {camp.dateTime}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Location:</span> {camp.location}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Healthcare Professional:</span> {camp.healthcareProfessionalName}</p>
                <p className="text-gray-700 mb-4"><span className="font-semibold">Participants:</span> {camp.participantCount}</p>
                <div className="flex justify-between">
                  <Link to={`/camp-details/${camp._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
                    View Details
                  </Link>
                  <Link to={`/camp-details/${camp._id}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
                    Join Camp
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>

  );
};

export default AvailableCampPage;