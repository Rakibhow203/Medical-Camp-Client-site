
import useAuth from "../Hook/UseAuth";

import RequestCampBanner from "../../Pages/Home/RequestCampBanner/RequestCampBanner";
import CartUse from "../Hook/CartUse";

const MyRequestCamps = () => {
  const { user } = useAuth();
  const [carts] = CartUse()

  return (

    <>
      <RequestCampBanner />

      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-600 mt-20">My Registered Camps</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="bg-slate-100 px-4 py-2 border">SL</th>
                <th className="bg-slate-100 px-4 py-2 border">Camp Name</th>
                <th className="bg-slate-100 px-4 py-2 border">Camp Fees</th>
                <th className="bg-slate-100 px-4 py-2 border">Participant Name</th>
                <th className="bg-slate-100 px-4 py-2 border">Payment Status</th>
                <th className="bg-slate-100 px-4 py-2 border">Confirmation Status</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((camp, index) => (
                <tr key={camp?._id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="border px-4 py-2 text-center">{index + 1}</td>
                  <td className="border px-4 py-2 text-center">{camp?.name}</td>
                  <td className="border px-4 py-2 text-center">{camp?.campFees}</td>
                  <td className="border px-4 py-2 text-center">{user?.displayName}</td>
                  <td className={`border px-4 py-2 text-center ${camp?.paymentStatus === 'Paid' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}`}>
                    {camp?.paymentStatus}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {camp.confirmationStatus}
                    {camp.confirmationStatus === 'Pending' && (
                      <button
                        onClick={() => handleConfirm(camp?._id)}
                        className="ml-4 px-3 py-1 text-white bg-blue-500 hover:bg-blue-700 rounded transition duration-300"
                      >
                        Confirm
                      </button>
                    )}
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