import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Loading from "../../../../Loding/Loading";
import UseAxiosCommon from "../../../../Component/Hook/UseAxiosCommon";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../../../Component/Hook/UseAuth";








const CampDetails = () => {

  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth()
  const [participantInfo, setParticipantInfo] = useState({
    name: '',
    email: '',
    age: '',
    phone: '',
    gender: '',
    emergencyContact: ''
  });
  console.log(user);

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




  if (!camp) {
    return <div> <Loading></Loading>  </div>;

  }


  const { campName, image, campFees, dateTime, location, healthcareProfessionalName, participantCount, description } = camp;

  const addPerticipent = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const campFees = form.campFees.value;
    const location = form.location.value;
    const health = form.health.value;
    // const user = loggedInUser.name;
    // const email = loggedInUser.email;
    const age = form.age.value;
    const phone = form.phone.value;
    const gender = form.gender.value;
    const emergencyContact = form.emergencyContact.value;
    const email = user.email;
    const addAll = {
      name, campFees, location, health, email, age, phone, gender, emergencyContact
    }
    fetch('http://localhost:5000/participant', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addAll),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: `${name}Has Join SuccessFull`,
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
          });
        }
      }
      )


  }
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
            <form onSubmit={addPerticipent}>
              <div className="mb-4">
                <label className="block text-gray-700">Camp Name</label>
                <input
                  name="name"
                  type="text" value={campName} readOnly className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price</label>
                <input
                  name="campFees"
                  type="text" value={campFees} readOnly className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input
                  name="location"
                  type="text" value={location} readOnly className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Professional</label>
                <input
                  name="health"
                  type="text" value={healthcareProfessionalName} readOnly className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Participant Name</label>
                <input

                  type="text" value={loggedInUser.name} readOnly className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Participant Email</label>
                <input

                  type="email" value={loggedInUser.email} readOnly className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label

                  className="block text-gray-700">Age</label>
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
              <div className="flex justify-end gap-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 w-full py-2 mt-4 rounded hover:bg-[#FF0000] hover:text-white  bg-orange-300 duration-200 text-red-500 cursor-pointer font-bold">Cancel</button>
                <input
                  className="px-4 w-full py-2 mt-4 rounded hover:bg-green-500  bg-[#ffd5496b] duration-200 text-green-600 hover:text-white cursor-pointer font-bold"
                  type="submit"
                  value="Join Camp"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default CampDetails;