import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ManageCamps = () => {
  const [camps, setCamps] = useState([]);

  // Fetch camps data from the backend when the component mounts
  useEffect(() => {
    const fetchCamps = async () => {
      try {
        const response = await axios.get("/api/camps"); // Replace "/api/camps" with your backend endpoint
        setCamps(response.data);
      } catch (error) {
        console.error("Error fetching camps:", error);
      }
    };

    fetchCamps();
  }, []);

  // Function to delete a camp
  const deleteCamp = async (campId) => {
    try {
      await axios.delete(`/api/delete-camp/${campId}`); // Replace "/api/delete-camp" with your backend endpoint
      // Filter out the deleted camp from the state
      setCamps(camps.filter(camp => camp._id !== campId));
    } catch (error) {
      console.error("Error deleting camp:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Camps</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Camp Name</th>
            <th className="px-4 py-2">Date & Time</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Healthcare Professional</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {camps.map(camp => (
            <tr key={camp._id}>
              <td className="border px-4 py-2">{camp.campName}</td>
              <td className="border px-4 py-2">{camp.dateTime}</td>
              <td className="border px-4 py-2">{camp.location}</td>
              <td className="border px-4 py-2">{camp.healthcareProfessionalName}</td>
              <td className="border px-4 py-2">
                <Link to={`/update-camp/${camp._id}`} className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">Update</Link>
                <button onClick={() => deleteCamp(camp._id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCamps;
