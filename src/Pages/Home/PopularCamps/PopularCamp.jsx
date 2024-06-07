
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../../Loding/Loading';
import useAuth from '../../../Component/Hook/UseAuth';
import UseAxiosCommon from '../../../Component/Hook/UseAxiosCommon';
import { useQuery } from '@tanstack/react-query';





const PopularCamp = () => {
  const useAxiosCommon = UseAxiosCommon();
  const { Loading } = useAuth();

  const { data: topCamps = [] } = useQuery({
    queryKey: ['camp'],
    queryFn: async () => {
      const res = await useAxiosCommon.get('allData')
      return res.data;
    }
  })
  const topSixCamps = topCamps.slice(0, 6);




  if (Loading) return <div>  <Loading></Loading> </div >;
  return (
    <div className='popular-camp by-8'>
      <h2 className='text-2xl font-bold text-center mb-6' >Popular Medical Camps  </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topSixCamps.map(camp => (
          <div key={camp.name} className="bg-white rounded shadow p-4">
            <img src={camp.image} alt={camp.campName} className="w-full h-48 object-cover rounded mb-4" />
            <p className="text-gray-600 mb-2">Fees: {camp.campFees}</p>
            <p className="text-gray-600 mb-2">Date & Time: {camp.dateTime}</p>
            <p className="text-gray-600 mb-2">Location: {camp.location}</p>
            <p className="text-gray-600 mb-2">Healthcare Professional: {camp.healthcareProfessionalName}</p>
            <p className="text-gray-600 mb-2">Participants: {camp.participantCount}</p>
            <Link to={`/camp-details/${camp._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Details
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PopularCamp;
