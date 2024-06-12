
// import useAuth from "../Hook/UseAuth";
// import RequestCampBanner from "../../Pages/Home/RequestCampBanner/RequestCampBanner";
// import CartUse from "../Hook/CartUse";
// import { Link } from "react-router-dom";
// import useCart from "../Hook/useCart";
// import useAxiosSecure from "../Hook/useAxiosSecure";
// import Swal from "sweetalert2";
// import { FaTrashAlt } from "react-icons/fa";

// const MyRequestCamps = () => {
//   const { user } = useAuth();
//   const [carts] = CartUse();

//   const [cart, refetch] = useCart();
//   const totalPrice = cart.reduce((total, item) => total + item.price, 0);
//   const axiosSecure = useAxiosSecure();

//   const handleDelete = id => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//       if (result.isConfirmed) {

//         axiosSecure.delete(`/carts/${id}`)
//           .then(res => {
//             if (res.data.deletedCount > 0) {
//               refetch();
//               Swal.fire({
//                 title: "Deleted!",
//                 text: "Your file has been deleted.",
//                 icon: "success"
//               });
//             }
//           })
//       }
//     });
//   }

//   return (
//     <>
//       <RequestCampBanner />


//       <div className="container mx-auto p-6 mt-10">
//         <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">
//           My Requested Camps
//         </h1>
//         <div className="flex justify-evenly mb-8">
//           <h2 className="text-4xl">Items: {cart.length}</h2>
//           <h2 className="text-4xl">Total Price: {totalPrice}</h2>
//           <button className="btn btn-primary">Pay</button>

//         </div>
//         <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
//           <table className="min-w-full table-auto border-collapse">
//             <thead>
//               <tr className="bg-gray-200 text-gray-700">
//                 <th className="bg-slate-100 px-4 py-3 border border-gray-300">SL</th>
//                 <th className="bg-slate-100 px-4 py-3 border border-gray-300">Camp Name</th>
//                 <th className="bg-slate-100 px-4 py-3 border border-gray-300">Camp Fees</th>
//                 <th className="bg-slate-100 px-4 py-3 border border-gray-300">Participant Name</th>
//                 <th className="bg-slate-100 px-4 py-3 border border-gray-300">Action</th>
//                 {/* <th className="bg-slate-100 px-4 py-3 border border-gray-300">Confirmation Status</th> */}
//               </tr>
//             </thead>
//             <tbody>
//               {carts.map((camp, index) => (
//                 <tr key={camp?._id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
//                   <td className="border px-4 py-3 text-center">{index + 1}</td>
//                   <td className="border px-4 py-3 text-center">{camp?.name}</td>
//                   <td className="border px-4 py-3 text-center">{camp?.campFees}</td>
//                   <td className="border px-4 py-3 text-center">{user?.displayName}</td>

//                   <th>
//                     <button
//                       onClick={() => handleDelete(camp?._id)}
//                       className="btn btn-ghost btn-lg">
//                       <FaTrashAlt className="text-red-600"></FaTrashAlt>
//                     </button>
//                   </th>
//                   {/* <td className={`border px-4 py-3 text-center ${camp?.paymentStatus === 'Paid' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}`}>
//                     {camp?.paymentStatus}
//                   </td> */}
//                   {/* <td className="border px-4 py-3 text-center">
//                     {camp.confirmationStatus}
//                     {camp.confirmationStatus === 'Pending' && (
//                       <button
//                         onClick={() => handleConfirm(camp?._id)}
//                         className="ml-4 px-3 py-1 text-white bg-blue-500 hover:bg-blue-700 rounded transition duration-300"
//                       >
//                         Confirm
//                       </button>
//                     )}
//                   </td> */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="text-center mt-6">
//           <Link to="/payNow" ><button className="btn btn-outline btn-secondary">Pay Now</button></Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyRequestCamps;


// import useAuth from "../Hook/UseAuth";
// import RequestCampBanner from "../../Pages/Home/RequestCampBanner/RequestCampBanner";
// import CartUse from "../Hook/CartUse";
// import { Link } from "react-router-dom";
// import useCart from "../Hook/useCart";
// import useAxiosSecure from "../Hook/useAxiosSecure";
// import Swal from "sweetalert2";
// import { FaTrashAlt } from "react-icons/fa";

// const MyRequestCamps = () => {
//   const { user } = useAuth();
//   const [carts] = CartUse();

//   const [cart, refetch] = useCart();

//   // Ensure total price is calculated from the correct property and is a number
//   const totalPrice = cart.reduce((total, item) => total + (Number(item.campFees) || 0), 0);

//   const axiosSecure = useAxiosSecure();

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosSecure.delete(`/carts/${id}`)
//           .then(res => {
//             if (res.data.deletedCount > 0) {
//               refetch();
//               Swal.fire({
//                 title: "Deleted!",
//                 text: "Your file has been deleted.",
//                 icon: "success"
//               });
//             }
//           })
//       }
//     });
//   }

//   return (
//     <>
//       <RequestCampBanner />

//       <div className="container mx-auto p-6 mt-10">
//         <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">
//           My Requested Camps
//         </h1>
//         <div className="flex justify-evenly mb-8">
//           <h2 className="text-4xl">Items: {cart.length}</h2>
//           <h2 className="text-4xl">Total Price: ${totalPrice.toFixed(2)}</h2>
//           <Link to="/payNow" >
//             <button className="btn btn-outline btn-secondary">Pay Now</button>
//           </Link>
//         </div>
//         <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
//           <table className="min-w-full table-auto border-collapse">
//             <thead>
//               <tr className="bg-gray-200 text-gray-700">
//                 <th className="bg-slate-100 px-4 py-3 border border-gray-300">SL</th>
//                 <th className="bg-slate-100 px-4 py-3 border border-gray-300">Camp Name</th>
//                 <th className="bg-slate-100 px-4 py-3 border border-gray-300">Camp Fees</th>
//                 <th className="bg-slate-100 px-4 py-3 border border-gray-300">Participant Name</th>
//                 <th className="bg-slate-100 px-4 py-3 border border-gray-300">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {carts.map((camp, index) => (
//                 <tr key={camp?._id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
//                   <td className="border px-4 py-3 text-center">{index + 1}</td>
//                   <td className="border px-4 py-3 text-center">{camp?.name}</td>
//                   <td className="border px-4 py-3 text-center">${Number(camp?.campFees).toFixed(2)}</td>
//                   <td className="border px-4 py-3 text-center">{user?.displayName}</td>
//                   <td className="border px-4 py-3 text-center">
//                     <button
//                       onClick={() => handleDelete(camp?._id)}
//                       className="btn btn-ghost btn-lg">
//                       <FaTrashAlt className="text-red-600"></FaTrashAlt>
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyRequestCamps;


// import useAuth from "../Hook/UseAuth";
// import RequestCampBanner from "../../Pages/Home/RequestCampBanner/RequestCampBanner";
// import CartUse from "../Hook/CartUse";
// import { Link } from "react-router-dom";
// import useCart from "../Hook/useCart";
// import useAxiosSecure from "../Hook/useAxiosSecure";
// import Swal from "sweetalert2";
// import { FaTrashAlt } from "react-icons/fa";

// const MyRequestCamps = () => {
//   const { user } = useAuth();
//   const [carts] = CartUse();

//   const [cart, refetch] = useCart();

//   // Debugging: Log cart data to check the structure and campFees
//   console.log("Cart Data:", cart);

//   // Ensure campFees is correctly calculated as a number
//   const totalPrice = cart.reduce((total, item) => {
//     // Check and convert campFees to a number, with a fallback to 0
//     const fee = Number(item.campFees) || 0;
//     console.log("Processing fee:", fee);  // Debugging: Log each fee
//     return total + fee;
//   }, 0);

//   const axiosSecure = useAxiosSecure();

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosSecure.delete(`/carts/${id}`)
//           .then(res => {
//             if (res.data.deletedCount > 0) {
//               refetch();
//               Swal.fire({
//                 title: "Deleted!",
//                 text: "Your file has been deleted.",
//                 icon: "success"
//               });
//             }
//           })
//       }
//     });
//   }

//   return (
//     <>
//       <RequestCampBanner />

//       <div className="container mx-auto p-6 mt-10">
//         <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">
//           My Requested Camps
//         </h1>
//         <div className="flex justify-evenly mb-8">
//           <h2 className="text-4xl">Items: {cart.length}</h2>
//           <h2 className="text-4xl">Total Price: ${totalPrice.toFixed(2)}</h2>
//           <Link to="/payNow">
//             <button className="btn btn-outline btn-secondary">Pay Now</button>
//           </Link>
//         </div>
//         <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
//           <table className="min-w-full table-auto border-collapse">
//             <thead>
//               <tr className="bg-gray-200 text-gray-700">
//                 <th className="bg-slate-100 px-4 py-3 border border-gray-300">SL</th>
//                 <th className="bg-slate-100 px-4 py-3 border border-gray-300">Camp Name</th>
//                 <th className="bg-slate-100 px-4 py-3 border border-gray-300">Camp Fees</th>
//                 <th className="bg-slate-100 px-4 py-3 border border-gray-300">Participant Name</th>
//                 <th className="bg-slate-100 px-4 py-3 border border-gray-300">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {carts.map((camp, index) => (
//                 <tr key={camp?._id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
//                   <td className="border px-4 py-3 text-center">{index + 1}</td>
//                   <td className="border px-4 py-3 text-center">{camp?.name}</td>
//                   <td className="border px-4 py-3 text-center">${Number(camp?.campFees).toFixed(2)}</td>
//                   <td className="border px-4 py-3 text-center">{user?.displayName}</td>
//                   <td className="border px-4 py-3 text-center">
//                     <button
//                       onClick={() => handleDelete(camp?._id)}
//                       className="btn btn-ghost btn-lg">
//                       <FaTrashAlt className="text-red-600"></FaTrashAlt>
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//       </div>
//     </>
//   );
// };

// export default MyRequestCamps;
import useAuth from "../Hook/UseAuth";
import RequestCampBanner from "../../Pages/Home/RequestCampBanner/RequestCampBanner";
import CartUse from "../Hook/CartUse";
import { Link } from "react-router-dom";
import useCart from "../Hook/useCart";
import useAxiosSecure from "../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

const MyRequestCamps = () => {
  const { user } = useAuth();
  const [carts] = CartUse();

  const [cart, refetch] = useCart();

  // Debugging: Log cart data to check the structure and campFees
  console.log("Cart Data:", cart);

  // Ensure campFees is correctly calculated as a number
  const totalPrice = cart.reduce((total, item) => {
    // Log each item's campFees to ensure it's available and correctly formatted
    console.log("Camp Fees for item:", item?.name, item?.campFees);

    // Check and convert campFees to a number, with a fallback to 0 if it's not a valid number
    const fee = parseFloat(item?.campFees) || 0;
    console.log("Processed fee:", fee);  // Debugging: Log each fee after conversion

    // Sum the valid fees
    return total + fee;
  }, 0);

  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  }

  return (
    <>
      <RequestCampBanner />

      <div className="container mx-auto p-6 mt-10">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">
          My Requested Camps
        </h1>
        <div className="flex justify-evenly mb-8">
          <h2 className="text-4xl">Items: {cart.length}</h2>
          <h2 className="text-4xl">Total Price: ${totalPrice.toFixed(2)}</h2>
          <Link to="/payNow">
            <button className="btn btn-outline btn-secondary">Pay Now</button>
          </Link>
        </div>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="bg-slate-100 px-4 py-3 border border-gray-300">SL</th>
                <th className="bg-slate-100 px-4 py-3 border border-gray-300">Camp Name</th>
                <th className="bg-slate-100 px-4 py-3 border border-gray-300">Camp Fees</th>
                <th className="bg-slate-100 px-4 py-3 border border-gray-300">Participant Name</th>
                <th className="bg-slate-100 px-4 py-3 border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((camp, index) => (
                <tr key={camp?._id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="border px-4 py-3 text-center">{index + 1}</td>
                  <td className="border px-4 py-3 text-center">{camp?.name}</td>
                  <td className="border px-4 py-3 text-center">${parseFloat(camp?.campFees).toFixed(2)}</td>
                  <td className="border px-4 py-3 text-center">{user?.displayName}</td>
                  <td className="border px-4 py-3 text-center">
                    <button
                      onClick={() => handleDelete(camp?._id)}
                      className="btn btn-ghost btn-lg">
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyRequestCamps;
