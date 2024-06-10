
import { Link } from 'react-router-dom';
import axios from 'axios';

import useAuth from '../../../Component/Hook/UseAuth';
import UseAxiosCommon from '../../../Component/Hook/UseAxiosCommon';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Loading from '../../../Loding/Loading';





const PopularCamp = () => {
  const useAxiosCommon = UseAxiosCommon();


  const { data: topCamps = [], isPending: loading } = useQuery({
    queryKey: ['camp'],
    queryFn: async () => {
      const res = await useAxiosCommon.get('allData')
      return res.data;
    }
  })
  const topSixCamps = topCamps.slice(0, 6);


  if (loading) return <Loading></Loading>


  return (


    <div className='popular-camp my-8'>
      <h2 className='text-3xl font-bold text-center mb-10 text-blue-600'>
        Popular Medical Camps
        <span className='block h-1 w-24 bg-blue-600 mt-2 mx-auto'></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topSixCamps.map(camp => (
          <div key={camp.name} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
            <img src={camp.image} alt={camp.campName} className="w-full h-56 object-cover rounded-t-lg mb-4" />
            <div className="text-gray-700 space-y-2">
              <p className="font-semibold text-lg">Camp Name: <span className="font-normal">{camp.campName}</span></p>
              <p className="font-semibold text-lg">Fees: <span className="font-normal">{camp.campFees}</span></p>
              <p className="font-semibold text-lg">Date & Time: <span className="font-normal">{camp.dateTime}</span></p>
              <p className="font-semibold text-lg">Location: <span className="font-normal">{camp.location}</span></p>
              <p className="font-semibold text-lg">Healthcare Professional: <span className="font-normal">{camp.healthcareProfessionalName}</span></p>
              <p className="font-semibold text-lg">Participants: <span className="font-normal">{camp.participantCount}</span></p>
            </div>
            <Link to={`/camp-details/${camp._id}`} className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>

  );
};

export default PopularCamp;
