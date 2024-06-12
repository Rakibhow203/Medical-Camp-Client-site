import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import UseAxiosCommon from '../Hook/UseAxiosCommon';
import { MdDeleteSweep } from 'react-icons/md';
import { FaPenToSquare } from 'react-icons/fa6';
import useData from '../Hook/useData';
import Loading from '../../Loding/Loading';

const ManageCamps = () => {
  const axiosCommon = UseAxiosCommon();

  const [camps, loading, refetch] = useData()
  const navigate = useNavigate();





  const handleDelete = camp => {
    console.log(camp);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async result => {
      if (result.isConfirmed) {
        const res = await axiosCommon.delete(`/carts/${camp._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: 'Has been Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          });
        }
      }
    });
  };

  if (loading) return <Loading></Loading>



  return (
    <div className="overflow-x-auto">
      <table className="table">

        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date & Time</th>
            <th>Location</th>
            <th>Profession</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className='bg-white'>
          {
            camps.map((camp, index) =>

              <tr key={camp?._id} className="bg-white">
                <th>{index + 1}</th>
                <td>{camp?.campName
                }</td>
                <td>{camp?.dateTime}</td>
                <td>{camp?.location}</td>
                <td>{camp?.healthcareProfessionalName}</td>
                <td>
                  <Link to={`/dashboard/updated/${camp?._id}`}>

                    <button

                      className='text-2xl text-orange-300'>
                      <FaPenToSquare />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(camp)}
                    className='text-2xl text-red-500'>
                    <MdDeleteSweep />
                  </button>
                </td>
              </tr>
            )
          }


        </tbody>
      </table>
    </div>

  );
};

export default ManageCamps;
