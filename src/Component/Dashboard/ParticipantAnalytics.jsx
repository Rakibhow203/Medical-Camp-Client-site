import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { useQuery } from '@tanstack/react-query';
import UseAxiosCommon from '../Hook/UseAxiosCommon';
import Loading from '../../Loding/Loading';

const ParticipantAnalytics = () => {
  const axiosCommon = UseAxiosCommon();

  // Fetch participant's registered camps data
  const { data: camps = [], isLoading } = useQuery({
    queryKey: ['camps'],
    queryFn: async () => {
      const res = await axiosCommon.get('/allParticipantDash');
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  // Prepare data for the chart
  const chartData = camps.map((camp, index) => ({
    name: camp.name,
    fees: camp.campFees,
    age: camp.age,
  }));

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Participant Camps Analytics</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="fees" fill="#82ca9d" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ParticipantAnalytics;
