import useAuth from "../../../Component/Hook/UseAuth";


const ParticipantProfile = () => {
  const { currentUser } = useAuth();
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Participant Profile</h2>
      <p>Name: {currentUser?.name}</p>
      <p>Email: {currentUser?.email}</p>
      <p>Age: {currentUser?.age}</p>
      <p>Phone: {currentUser?.phone}</p>
      <p>Gender: {currentUser?.gender}</p>
      <p>Emergency Contact: {currentUser?.emergencyContact}</p>
    </div>
  );
};

export default ParticipantProfile;