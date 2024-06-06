

import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../Hook/UseAuth';
import logo from '../../assets/logo.png'

const NavBar = () => {
  const { user, logOut } = useAuth()
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // Initialize with stored value or 'light'

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]); // Add theme to the dependency array

  const handleChange = (e) => {
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  // const handleChange = (e) => {
  //   // Toggle between light and dark themes
  //   setTheme(e.target.checked ? 'dark' : 'light');
  // };


  const handleLogOut = () => {
    Swal.fire({
      title: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log me out!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with logout if confirmed
        logOut();
      }
    });
  };

  return (
    <div className='navbar fixed  mb-10  container px-4 mx-auto z-10 bg-opacity-30  bg-green-500  max-w-screen-xl'>
      <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-14 rounded-full bg-white' src={logo} alt='' />
          <span className='font-bold hover:bg-orange-100 rounded-lg active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-30 font-sans text-xl text-black'>CampAid</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1 font-serif font-semibold'>


          <li className='text-black hover:bg-orange-100 rounded-lg'>
            {/* Use NavLink for Home with activeClassName */}
            <NavLink exact to='/' active ClassName='active'>Home</NavLink>
          </li>

          <li className='text-black hover:bg-orange-100 rounded-lg'>
            <NavLink to='/AvailableCamps'>Available Camps</NavLink>
          </li>
          {/* <li className='text-black hover:bg-orange-100 rounded-lg'>
            <NavLink to='/gallery' activeClassName='active'>Gallery</NavLink>
          </li> */}
          <li className="h-full w-14 mr-2">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                onChange={handleChange}
                type="checkbox"
                className="theme-controller"
                value="sunset"
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-10 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-10 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </li>

          {!user && (
            <li className='text-black hover:bg-orange-100 rounded-lg'>
              <NavLink to='login' activeClassName='active'>Join Us</NavLink>
            </li>
          )}
        </ul>

        {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-300 rounded-box w-52 text-black font-bold'
            >

              <li>
                {user.displayName}
              </li>
              <li>
                <Link to='/dashboard' className='justify-between'>
                  Dashboard
                </Link>
              </li>

              <li className='mt-2'>
                <button
                  onClick={handleLogOut}
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>


  );
};

export default NavBar;