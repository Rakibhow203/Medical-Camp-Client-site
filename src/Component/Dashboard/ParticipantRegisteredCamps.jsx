import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import UseAxiosCommon from '../Hook/UseAxiosCommon';

const ParticipantRegisteredCamps = () => {
  const queryClient = useQueryClient();

  // Define a query to fetch registered camps data for the current participant
  const { data: registeredCamps, isLoading, isError } = useQuery('registeredCamps', async () => {
    const response = await UseAxiosCommon.get('/registered-camps'); // Adjust the endpoint URL
    return response.data;
  });

  // Define a mutation to handle payment
  const payMutation = useMutation(
    campId => UseAxiosCommon.post(`/pay/${campId}`), // Adjust the endpoint URL
    {
      onSuccess: () => {
        queryClient.invalidateQueries('registeredCamps');
        // Additional logic after successful payment (e.g., display transaction ID)
      },
    }
  );

  // Define a mutation to handle cancellation
  const cancelMutation = useMutation(
    campId => UseAxiosCommon.post(`/cancel/${campId}`), // Adjust the endpoint URL
    {
      onSuccess: () => {
        queryClient.invalidateQueries('registeredCamps');
        // Additional logic after successful cancellation
      },
    }
  );

  // Define a mutation to handle feedback submission
  const feedbackMutation = useMutation(
    feedbackData => UseAxiosCommon.post('/feedback', feedbackData), // Adjust the endpoint URL
    {
      onSuccess: () => {
        queryClient.invalidateQueries('registeredCamps');
        // Additional logic after successful feedback submission
      },
    }
  );

  const handlePay = async campId => {
    try {
      await payMutation.mutateAsync(campId);
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  const handleCancel = async campId => {
    try {
      await cancelMutation.mutateAsync(campId);
    } catch (error) {
      console.error('Cancellation error:', error);
    }
  };

  const handleFeedback = async campId => {
    try {
      await feedbackMutation.mutateAsync({ campId, feedback: 'Your feedback message' }); // Adjust the feedback message
    } catch (error) {
      console.error('Feedback submission error:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <h2>Registered Camps</h2>
      <table>
        <thead>
          <tr>
            <th>Camp Name</th>
            <th>Camp Fees</th>
            <th>Participant Name</th>
            <th>Payment Status</th>
            <th>Confirmation Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {registeredCamps.map(camp => (
            <tr key={camp.id}>
              <td>{camp.name}</td>
              <td>${camp.fees}</td>
              <td>{camp.participantName}</td>
              <td>{camp.paymentStatus}</td>
              <td>{camp.confirmationStatus}</td>
              <td>
                {camp.paymentStatus === 'unpaid' && (
                  <button onClick={() => handlePay(camp.id)}>Pay</button>
                )}
                {camp.paymentStatus === 'paid' && (
                  <button disabled>Paid</button>
                )}
                <button onClick={() => handleCancel(camp.id)}>Cancel</button>
                {camp.paymentStatus === 'paid' && (
                  <button onClick={() => handleFeedback(camp.id)}>Provide Feedback</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParticipantRegisteredCamps;
