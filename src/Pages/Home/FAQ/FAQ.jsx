// import { useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import Loading from "../../../Loding/Loading";


// const FAQ = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [participantInfo, setParticipantInfo] = useState({
//     name: '',
//     email: '',
//     age: '',
//     phone: '',
//     gender: '',
//     emergencyContact: ''
//   });

//   const camps = useLoaderData();
//   const { id } = useParams();
//   const camp = camps?.find(camp => camp?._id === id);

//   if (!camp) {
//     return <Loading />;
//   }

//   const { campName, image, campFees, dateTime, location, healthcareProfessionalName, participantCount, description, feedback } = camp;

//   const loggedInUser = {
//     name: "John Doe",
//     email: "johndoe@example.com"
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setParticipantInfo({ ...participantInfo, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('https://madical-camp-server.vercel.app/allData', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         campId: id,
//         ...participantInfo,
//         name: loggedInUser.name,
//         email: loggedInUser.email
//       })
//     });

//     if (response.ok) {
//       setShowModal(false);
//       camp.participantCount += 1;
//     }
//   };



//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">{campName}</h1>
//       <img src={image} className="w-full h-60 object-cover rounded-lg mb-4" alt={campName} />
//       <p className="text-xl font-semibold mb-2">Price: {campFees}</p>
//       <p className="mb-2"><strong>Date:</strong> {dateTime}</p>
//       <p className="mb-2"><strong>Location:</strong> {location}</p>
//       <p className="mb-2"><strong>Professional:</strong> {healthcareProfessionalName}</p>
//       <p className="mb-2"><strong>Participant Count:</strong> {participantCount}</p>
//       <p className="mb-4"><strong>Description:</strong> {description}</p>
//       <button onClick={() => setShowModal(true)} className="bg-blue-500 text-white py-2 px-4 rounded">
//         Join Camp
//       </button>


//       {/* Feedback and Ratings Section */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Feedback and Ratings</h2>
//         {feedback?.length ? (
//           feedback.map((item, index) => (
//             <div key={index} className="mb-4">
//               <p className="font-semibold">{item.participantName}</p>
//               <p className="text-sm text-gray-600">{item.rating} stars</p>
//               <p>{item.comment}</p>
//             </div>
//           ))
//         ) : (
//           <p>No feedback available yet.</p>
//         )}
//       </div>

//       {/* FAQs Section */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
//         <div className="mb-4">
//           <h3 className="font-semibold">What should I bring to the camp?</h3>
//           <p>Bring comfortable clothing, a water bottle, and any personal items you may need.</p>
//         </div>
//         <div className="mb-4">
//           <h3 className="font-semibold">Are meals provided?</h3>
//           <p>Yes, all meals are provided during the camp.</p>
//         </div>
//         <div className="mb-4">
//           <h3 className="font-semibold">Can I get a refund if I can't attend?</h3>
//           <p>Refunds are available up to 7 days before the camp start date.</p>
//         </div>
//       </div>
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
//             <h2 className="text-2xl font-bold mb-4">Join Camp</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Camp Name</label>
//                 <input type="text" value={campName} readOnly className="mt-1 block w-full" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Price</label>
//                 <input type="text" value={campFees} readOnly className="mt-1 block w-full" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Location</label>
//                 <input type="text" value={location} readOnly className="mt-1 block w-full" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Professional</label>
//                 <input type="text" value={healthcareProfessionalName} readOnly className="mt-1 block w-full" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Participant Name</label>
//                 <input type="text" value={loggedInUser.name} readOnly className="mt-1 block w-full" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Participant Email</label>
//                 <input type="email" value={loggedInUser.email} readOnly className="mt-1 block w-full" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Age</label>
//                 <input type="number" name="age" value={participantInfo.age} onChange={handleInputChange} className="mt-1 block w-full" required />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Phone Number</label>
//                 <input type="tel" name="phone" value={participantInfo.phone} onChange={handleInputChange} className="mt-1 block w-full" required />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Gender</label>
//                 <select name="gender" value={participantInfo.gender} onChange={handleInputChange} className="mt-1 block w-full" required>
//                   <option value="" disabled>Select Gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Emergency Contact</label>
//                 <input type="tel" name="emergencyContact" value={participantInfo.emergencyContact} onChange={handleInputChange} className="mt-1 block w-full" required />
//               </div>
//               <div className="flex justify-end">
//                 <button type="button" onClick={() => setShowModal(false)} className="mr-4 px-4 py-2 bg-gray-300 text-gray-800 rounded">Cancel</button>
//                 <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FAQ;