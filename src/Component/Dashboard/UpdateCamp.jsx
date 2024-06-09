import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import UseAxiosCommon from '../Hook/UseAxiosCommon';

const UpdateCamp = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(true);
  const axiosCommon = UseAxiosCommon();

  

  const onSubmit = async (data) => {
   
    
  }

  if (loading) {
    return <div> <loading></loading>  </div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Update Camp</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Camp Name</label>
          <input
            {...register('name', { required: 'Camp name is required' })}
            className="w-full px-4 py-2 border rounded"
            type="text"
            placeholder="Camp Name"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
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
            {...register('fees', {
              required: 'Camp fees are required',
              validate: value => value > 0 || 'Fees must be greater than zero'
            })}
            className="w-full px-4 py-2 border rounded"
            type="number"
            placeholder="Camp Fees"
          />
          {errors.fees && <p className="text-red-600">{errors.fees.message}</p>}
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
            {...register('healthcareProfessional', { required: 'Healthcare Professional Name is required' })}
            className="w-full px-4 py-2 border rounded"
            type="text"
            placeholder="Healthcare Professional Name"
          />
          {errors.healthcareProfessional && <p className="text-red-600">{errors.healthcareProfessional.message}</p>}
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
          Update Camp
        </button>
      </form>
    </div>
  );
};

export default UpdateCamp;
