import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hook/UseAuth";
import UseAxiosCommon from "../Hook/UseAxiosCommon";
import Banner from "../../Pages/Home/Banner/Banner";
import RequestCampBanner from "../../Pages/Home/RequestCampBanner/RequestCampBanner";

const MyRequestCamps = () => {
  const { user } = useAuth();

  const axiosCommon = UseAxiosCommon();
  const {
    data: camps = [],
    isPending: isLoading,

  } = useQuery({
    queryKey: ['camp'],
    queryFn: async () => {
      const res = await axiosCommon.get('/allParticipant');
      return res.data;
    },
  });


  const handleConfirm = async (id) => {
    try {
      // Send request to backend to update confirmation status
      await axiosCommon.patch(`/confirm/${id}`, { confirmationStatus: 'Confirmed' });
      refetch(); // Refetch data to reflect changes
    } catch (error) {
      console.error('Error confirming payment:', error);
    }
  };
  return (

    <>
      <RequestCampBanner></RequestCampBanner>

      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-orange-500">My Registered Camps</h1>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="bg-slate-100">SL</th>
              <th className="border px-4 py-2 bg-slate-100">Camp Name</th>
              <th className="border px-4 py-2 bg-slate-100" >Camp Fees</th>
              <th className="border px-4 py-2 bg-slate-100">Participant Name</th>
              <th className="border px-4 py-2 bg-slate-100">Payment Status</th>
              <th className="border px-4 py-2 bg-slate-100">Confirmation Status</th>
            </tr>
          </thead>
          <tbody>
            {camps.map((camp, index) => (
              <tr key={camp._id} className="hover:bg-gray-100">
                <th>{index + 1}</th>
                <td className="border px-4 py-2">{camp.name}</td>
                <td className="border px-4 py-2">{camp.campFees}</td>
                <td className="border px-4 py-2">{user.displayName}</td>
                <td className="border px-4 py-2">{camp.paymentStatus}</td>
                <td className="border px-4 py-2">
                  {camp.confirmationStatus}
                  {camp.confirmationStatus === 'Pending' && (
                    <button
                      onClick={() => handleConfirm(camp._id)}
                      className="ml-2 px-2 py-1 text-white bg-blue-500 rounded"
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

    </>


  );
};

export default MyRequestCamps;