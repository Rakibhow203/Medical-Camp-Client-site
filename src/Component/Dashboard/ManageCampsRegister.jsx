
import { useQuery } from "@tanstack/react-query";
import UseAxiosCommon from "../Hook/UseAxiosCommon";
import Swal from "sweetalert2";
import useAuth from "../Hook/UseAuth";
import { useState } from "react";
import Loading from "../../Loding/Loading";


const ManageCampsRegister = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true)
  const axiosCommon = UseAxiosCommon();
  const {
    data: camps = [],
    isPending: isLoading,
    refetch,
  } = useQuery({
    queryKey: ['camp'],
    queryFn: async () => {
      const res = await axiosCommon.get('/allParticipantDash');
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
    setLoading(false)
  };

  const handleCancel = async (id, isPaid, isConfirmed) => {
    if (isPaid && isConfirmed) {
      Swal.fire('Cannot Cancel', 'This registration cannot be cancelled because payment is already made and confirmed.', 'warning');
      return;
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, cancel it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Send request to backend to cancel registration
          await axiosCommon.delete(`/cancel/${id}`);
          refetch(); // Refetch data to reflect changes
          Swal.fire('Cancelled!', 'The registration has been cancelled.', 'success');
        } catch (error) {
          console.error('Error cancelling registration:', error);
        }
        setLoading(false)
      }
    });
  };


  if (isLoading) return <div> <Loading></Loading> </div>;

  return (

    <>



      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Manage Registered Camps</h1>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Camp Name</th>
              <th className="border px-4 py-2">Camp Fees</th>
              <th className="border px-4 py-2">Participant Name</th>
              <th className="border px-4 py-2">Payment Status</th>
              <th className="border px-4 py-2">Confirmation Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {camps.map((camp) => (
              <tr key={camp._id} className="hover:bg-gray-100">
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
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleCancel(camp._id, camp.paymentStatus === 'Paid', camp.confirmationStatus === 'Confirmed')}
                    className="px-4 py-2 text-white bg-red-600 rounded"
                    disabled={camp.paymentStatus === 'Paid' && camp.confirmationStatus === 'Confirmed'}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageCampsRegister;