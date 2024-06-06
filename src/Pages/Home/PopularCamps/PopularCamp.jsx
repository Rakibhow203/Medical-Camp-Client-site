import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const PopularCamp = () => {
  const [topCamps, setTopCamps] = useState([]);

  useEffect(() => {
    const fetchTopCamps = async () => {
      try {
        // Fetch data from the API
        const response = await axios.get('http://localhost:5000/allData');
        console.log('Response data:', response.data); // Add this line for debugging

        // Sort the camps by participant count in descending order and take up to six camps
        const sortedCamps = response.data.sort((a, b) => b.participantCount - a.participantCount);
        const topSixCamps = sortedCamps.slice(0, 6);

        // Set the top camps in the state
        setTopCamps(topSixCamps);
      } catch (error) {
        console.error('Error fetching top camps:', error);
      }
    };

    fetchTopCamps();
  }, []);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {topCamps.map(camp => (
        <div key={camp.name} className="bg-white rounded shadow p-4">
          <img src={camp.image} alt={camp.campName} className="w-full h-48 object-cover rounded mb-4" />

          <p className="text-gray-600 mb-2">Fees: {camp.campFees}</p>
          <p className="text-gray-600 mb-2">Date & Time: {camp.dateTime}</p>
          <p className="text-gray-600 mb-2">Location: {camp.location}</p>
          <p className="text-gray-600 mb-2">Healthcare Professional: {camp.healthcareProfessionalName}</p>
          <p className="text-gray-600 mb-2">Participants: {camp.participantCount}</p>
          <Link to={`/camp-details/${camp._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PopularCamp;