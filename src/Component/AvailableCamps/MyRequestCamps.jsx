
import useAuth from "../Hook/UseAuth";
import RequestCampBanner from "../../Pages/Home/RequestCampBanner/RequestCampBanner";
import CartUse from "../Hook/CartUse";
import { Link } from "react-router-dom";

const MyRequestCamps = () => {
  const { user } = useAuth();
  const [carts] = CartUse();

  return (
    <>
      <RequestCampBanner />

      <div className="container mx-auto p-6 mt-10">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">
          My Requested Camps
        </h1>

        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="bg-slate-100 px-4 py-3 border border-gray-300">SL</th>
                <th className="bg-slate-100 px-4 py-3 border border-gray-300">Camp Name</th>
                <th className="bg-slate-100 px-4 py-3 border border-gray-300">Camp Fees</th>
                <th className="bg-slate-100 px-4 py-3 border border-gray-300">Participant Name</th>
                <th className="bg-slate-100 px-4 py-3 border border-gray-300">Payment Status</th>
                <th className="bg-slate-100 px-4 py-3 border border-gray-300">Confirmation Status</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((camp, index) => (
                <tr key={camp?._id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="border px-4 py-3 text-center">{index + 1}</td>
                  <td className="border px-4 py-3 text-center">{camp?.name}</td>
                  <td className="border px-4 py-3 text-center">{camp?.campFees}</td>
                  <td className="border px-4 py-3 text-center">{user?.displayName}</td>
                  <td className={`border px-4 py-3 text-center ${camp?.paymentStatus === 'Paid' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}`}>
                    {camp?.paymentStatus}
                  </td>
                  <td className="border px-4 py-3 text-center">
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
        <div className="text-center mt-6">
          <Link to="/payNow" ><button className="btn btn-outline btn-secondary">Pay Now</button></Link>
        </div>
      </div>
    </>
  );
};

export default MyRequestCamps;
