import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import useData from '../Hook/useData';

import UseAxiosCommon from '../Hook/UseAxiosCommon';
import Swal from 'sweetalert2';
import useAuth from '../Hook/UseAuth';

const UpdateCamp = () => {

  const loaderData = useLoaderData()
  const [camps] = useData()
  // console.log(data, 'Loader data');
  const { loading } = useAuth()
  const axiosCommon = UseAxiosCommon();


  // console.log('Loader Data:', loaderData);
  // console.log('Camps Data:', camps);


  const _id = loaderData?._id || camps?._id;

  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmit = async (formData) => {
    console.log('Form Data:', formData);
    const campItem = {
      name: formData.campName,
      image: formData.image,
      campFees: formData.campFees,
      dateTime: formData.dateTime,
      location: formData.location,
      healthcareProfessional: formData.healthcareProfessional,
      description: formData.description
    };


    try {
      const response = await axiosCommon.patch(`/allData/${_id}`, campItem);
      console.log('Update Response:', response.data);
      Swal.fire('Success', 'Camp updated successfully!', 'success');
    } catch (error) {
      console.error('Update Error:', error);
      Swal.fire('Error', 'Failed to update camp', 'error');
    }
  };


  if (loading) {
    return <div>  <loading></loading> </div>;
  }

  if (loaderData.error) {
    return <div>Error loading data: {loaderData.error}</div>;
  }


  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Update Camp</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Form fields */}
        <div>
          <label className="block text-sm font-medium">Camp Name</label>
          <input
            {...register('campName', { required: 'Camp name is required' })}
            className="w-full px-4 py-2 border rounded"
            type="text"
            placeholder="Camp Name"
            defaultValue={loaderData.name} // Pre-fill form with loaded data
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
            defaultValue={loaderData.image} // Pre-fill form with loaded data
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
            defaultValue={loaderData.campFees} // Pre-fill form with loaded data
          />
          {errors.campFees && <p className="text-red-600">{errors.campFees.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Date & Time</label>
          <input
            {...register('dateTime', { required: 'Date & Time are required' })}
            className="w-full px-4 py-2 border rounded"
            type="datetime-local"
            defaultValue={loaderData.dateTime} // Pre-fill form with loaded data
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
            defaultValue={loaderData.location} // Pre-fill form with loaded data
          />
          {errors.location && <p className="text-red-600">{errors.location.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Healthcare Professional Name</label>
          <input
            {...register('healthcareProfessional', { required: 'Healthcare Professional Name is required' })}
            className="w-full px-4 py-2 border rounded"
            type="text"
            placeholder="Healthcare Professional Name"
            defaultValue={loaderData.healthcareProfessional} // Pre-fill form with loaded data
          />
          {errors.healthcareProfessional && <p className="text-red-600">{errors.healthcareProfessional.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            {...register('description', { required: 'Description is required' })}
            className="w-full px-4 py-2 border rounded"
            placeholder="Description"
            defaultValue={loaderData.description} // Pre-fill form with loaded data
          />
          {errors.description && <p className="text-red-600">{errors.description.message}</p>}
        </div>

        <button type="submit" className="px-6 py-2 text-white bg-blue-600 rounded">
          Update Camp
        </button>
      </form>
    </div>
  );
};

export default UpdateCamp;
