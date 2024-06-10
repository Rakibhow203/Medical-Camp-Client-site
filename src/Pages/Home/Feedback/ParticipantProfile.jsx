import useAuth from "../../../Component/Hook/UseAuth";


const ParticipantProfile = () => {
  const { user } = useAuth();
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Participant Profile</h2>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Age: {user?.age}</p>
      <p>Phone: {user?.phone}</p>
      <p>Gender: {user?.gender}</p>
      <p>Emergency Contact: {user?.emergencyContact}</p>
    </div>
  );
};

export default ParticipantProfile;