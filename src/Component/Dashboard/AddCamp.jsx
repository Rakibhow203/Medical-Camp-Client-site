
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import UseAxiosCommon from '../Hook/UseAxiosCommon';

const AddCamp = () => {
  const axiosCommon = UseAxiosCommon();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // Initialize participant count to 0
      data.participantCount = 0;

      // Post the form data to the database
      const response = await axiosCommon.post('/allData', data);
      console.log('Response:', response);

      if (response.status === 201) {
        reset();
        Swal.fire({
          title: 'Success!',
          text: 'Camp has been added successfully.',
          icon: 'success',
          timer: 2000,
        });
        // Reset the form after successful submission

        // Redirect to available camps page
        navigate('/dashboard/manageCamp');
      }
    } catch (error) {
      console.error('Error adding camp:', error);
      Swal.fire({
        title: 'Error!',
        text: 'There was an error adding the camp. Please try again.',
        icon: 'error',
      });
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add a New Camp</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Camp Name</label>
          <input
            {...register('campName', { required: 'Camp name is required' })}
            className="w-full px-4 py-2 border rounded"
            type="text"
            placeholder="Camp Name"
          />
          {errors.campName && <p className="text-red-600">{errors.campName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Image URL</label>
          <input
            {...register('image', { required: 'Image URL is required' })}
            className="w-full px-4 py-2 border rounded"
            type="url"
            placeholder="Image URL"
          />
          {errors.image && <p className="text-red-600">{errors.image.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Camp Fees</label>
          <input
            {...register('campFees', {
              required: 'Camp fees are required',
              validate: value => value > 0 || 'Fees must be greater than zero'
            })}
            className="w-full px-4 py-2 border rounded"
            type="number"
            placeholder="Camp Fees"
          />
          {errors.campFees && <p className="text-red-600">{errors.campFees.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Date & Time</label>
          <input
            {...register('dateTime', { required: 'Date & Time are required' })}
            className="w-full px-4 py-2 border rounded"
            type="datetime-local"
          />
          {errors.dateTime && <p className="text-red-600">{errors.dateTime.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            {...register('location', { required: 'Location is required' })}
            className="w-full px-4 py-2 border rounded"
            type="text"
            placeholder="Location"
          />
          {errors.location && <p className="text-red-600">{errors.location.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Healthcare Professional Name</label>
          <input
            {...register('healthcareProfessionalName', { required: 'Healthcare Professional Name is required' })}
            className="w-full px-4 py-2 border rounded"
            type="text"
            placeholder="Healthcare Professional Name"
          />
          {errors.healthcareProfessionalName && <p className="text-red-600">{errors.healthcareProfessionalName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            {...register('description', { required: 'Description is required' })}
            className="w-full px-4 py-2 border rounded"
            placeholder="Description"
          />
          {errors.description && <p className="text-red-600">{errors.description.message}</p>}
        </div>

        <button type="submit" className="px-6 py-2 text-white bg-blue-600 rounded">
          Add Camp
        </button>
      </form>
    </div>
  );
};

export default AddCamp;
