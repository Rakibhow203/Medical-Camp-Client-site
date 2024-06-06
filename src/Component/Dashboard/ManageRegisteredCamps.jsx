import { useState, useEffect } from "react";
import axios from "axios";

const ManageRegisteredCamps = () => {
  const [registeredCamps, setRegisteredCamps] = useState([]);

  // Fetch registered camps data from the backend when the component mounts
  useEffect(() => {
    const fetchRegisteredCamps = async () => {
      try {
        const response = await axios.get("/api/registered-camps"); // Replace "/api/registered-camps" with your backend endpoint
        setRegisteredCamps(response.data);
      } catch (error) {
        console.error("Error fetching registered camps:", error);
      }
    };

    fetchRegisteredCamps();
  }, []);

  // Function to handle confirmation of payment
  const confirmPayment = async (campId, participantId) => {
    try {
      // Call your backend API to confirm payment
      // Example:
      await axios.put(`/api/confirm-payment/${campId}/${participantId}`);
      // Update the payment status in the state
      setRegisteredCamps(registeredCamps.map(camp => {
        if (camp._id === campId) {
          const updatedParticipants = camp.participants.map(participant => {
            if (participant._id === participantId) {
              return { ...participant, paymentConfirmationStatus: "Confirmed" };
            }
            return participant;
          });
          return { ...camp, participants: updatedParticipants };
        }
        return camp;
      }));
    } catch (error) {
      console.error("Error confirming payment:", error);
    }
  };

  // Function to handle cancellation of registration
  const cancelRegistration = async (campId, participantId) => {
    try {
      // Call your backend API to cancel registration
      // Example:
      await axios.delete(`/api/cancel-registration/${campId}/${participantId}`);
      // Update the state to remove the canceled participant
      setRegisteredCamps(registeredCamps.map(camp => {
        if (camp._id === campId) {
          const updatedParticipants = camp.participants.filter(participant => participant._id !== participantId);
          return { ...camp, participants: updatedParticipants };
        }
        return camp;
      }));
    } catch (error) {
      console.error("Error canceling registration:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Registered Camps</h2>
      {registeredCamps.map(camp => (
        <div key={camp._id} className="mb-8">
          <h3 className="text-xl font-semibold mb-2">{camp.campName}</h3>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Participant Name</th>
                <th className="px-4 py-2">Payment Status</th>
                <th className="px-4 py-2">Confirmation Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {camp.participants.map(participant => (
                <tr key={participant._id}>
                  <td className="border px-4 py-2">{participant.name}</td>
                  <td className="border px-4 py-2">{participant.paymentStatus}</td>
                  <td className="border px-4 py-2">{participant.paymentConfirmationStatus}</td>
                  <td className="border px-4 py-2">
                    {participant.paymentStatus === "Unpaid" && (
                      <button onClick={() => confirmPayment(camp._id, participant._id)} className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2">Confirm Payment</button>
                    )}
                    <button onClick={() => cancelRegistration(camp._id, participant._id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" disabled={participant.paymentStatus === "Paid" && participant.paymentConfirmationStatus === "Confirmed"}>Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ManageRegisteredCamps;
