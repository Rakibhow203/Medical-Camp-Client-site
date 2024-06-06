
import { useState, useEffect } from "react";
import axios from "axios";

const Feedback = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get("/api/feedback");
        setFeedback(response.data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchFeedback();
  }, []);
  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* <h2 className="text-2xl font-bold mb-4">Feedback and Ratings</h2>
      {feedback.map((item) => (
        <div key={item._id} className="bg-white rounded shadow p-4 mb-4">
          <p>Participant: {item.participantName}</p>
          <p>Rating: {item.rating}</p>
          <p>Feedback: {item.comment}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Feedback;