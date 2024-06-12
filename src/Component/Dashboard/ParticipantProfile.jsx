import useAuth from "../Hook/UseAuth";

const ParticipantProfile = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white p-8 shadow-lg rounded-lg max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Participant Profile</h1>
      <div className="profile-details flex flex-col items-center">
        <img
          src={user?.photoURL || user?.image} // Placeholder image if user photo is not available
          alt={user?.displayName}
          className="w-24 h-24 rounded-full mb-4 shadow-md border-2 border-blue-600"
        />
        <p className="text-lg font-semibold text-gray-800 mb-2">
          Name: <span className="font-normal text-gray-600">{user?.displayName || user?.name}</span>
        </p>
        <p className="text-lg font-semibold text-gray-800 mb-2">
          Email: <span className="font-normal text-gray-600">{user?.email || "N/A"}</span>
        </p>
        <p className="text-lg font-semibold text-gray-800">
          Phone: <span className="font-normal text-gray-600">{user?.phoneNumber || user?.phone}</span>
        </p>
      </div>
    </div>
  );
};

export default ParticipantProfile;
