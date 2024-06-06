import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Loading from "../../../../Loding/Loading";








const CampDetails = () => {

  const [showModal, setShowModal] = useState(false);

  const [participantInfo, setParticipantInfo] = useState({
    name: '',
    email: '',
    age: '',
    phone: '',
    gender: '',
    emergencyContact: ''
  });


  const camps = useLoaderData()
  // console.log(camps);
  const { id } = useParams();
  const camp = camps?.find(camp => camp?._id === id)
  // console.log(camp);



  const loggedInUser = {
    name: "John Doe",
    email: "johndoe@example.com"
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setParticipantInfo({ ...participantInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/register-participant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        campId: id,
        ...participantInfo,
        name: loggedInUser.name,
        email: loggedInUser.email
      })
    });

    if (response.ok) {
      setShowModal(false);
      // Update the participant count in the UI
      camp.participantCount += 1;
    }
  };


  if (!camp) {
    return <div> <Loading></Loading>  </div>;

  }


  const { campName, image, campFees, dateTime, location, healthcareProfessionalName, participantCount, description } = camp;



  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{campName}</h1>
      <img src={image} className="w-full h-60 object-cover rounded-lg mb-4" alt={campName} />
      <p className="text-xl font-semibold mb-2">Price: {campFees}</p>
      <p className="mb-2"><strong>Date:</strong> {dateTime}</p>
      <p className="mb-2"><strong>Location:</strong> {location}</p>
      <p className="mb-2"><strong>Professional:</strong> {healthcareProfessionalName}</p>
      <p className="mb-2"><strong>Participant Count:</strong> {participantCount}</p>
      <p className="mb-4"><strong>Description:</strong> {description}</p>
      <button onClick={() => setShowModal(true)} className="bg-blue-500 text-white py-2 px-4 rounded">
        Join Camp
      </button>


      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Join Camp</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Camp Name</label>
                <input type="text" value={campName} readOnly className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price</label>
                <input type="text" value={campFees} readOnly className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input type="text" value={location} readOnly className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Professional</label>
                <input type="text" value={healthcareProfessionalName} readOnly className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Participant Name</label>
                <input type="text" value={loggedInUser.name} readOnly className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Participant Email</label>
                <input type="email" value={loggedInUser.email} readOnly className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Age</label>
                <input type="number" name="age" value={participantInfo.age} onChange={handleInputChange} className="mt-1 block w-full" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input type="tel" name="phone" value={participantInfo.phone} onChange={handleInputChange} className="mt-1 block w-full" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Gender</label>
                <select name="gender" value={participantInfo.gender} onChange={handleInputChange} className="mt-1 block w-full" required>
                  <option value="" disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Emergency Contact</label>
                <input type="tel" name="emergencyContact" value={participantInfo.emergencyContact} onChange={handleInputChange} className="mt-1 block w-full" required />
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={() => setShowModal(false)} className="mr-4 px-4 py-2 bg-gray-300 text-gray-800 rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default CampDetails;