

import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../Hook/UseAuth';
import logo from '../../assets/logo.png';
import { Helmet } from 'react-helmet-async';
import { FaShoppingCart } from 'react-icons/fa';
import CartUse from '../Hook/CartUse';

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [carts] = CartUse();

  // Apply theme on initial load and whenever it changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChange = (e) => {
    setTheme(e.target.checked ? 'dark' : 'light');
  };

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
        logOut();
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>CampAid || Home</title>
      </Helmet>

      <nav className="navbar container mx-auto p-4 flex justify-between items-center bg-gradient-to-r from-blue-600 via-purple-500 to-green-500 rounded-lg shadow-lg">
        {/* Logo and Brand Name */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img className="w-auto h-14 rounded-full bg-white p-1" src={logo} alt="CampAid Logo" />
            <span className="text-2xl font-bold text-white">CampAid</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <NavLink exact to="/" className="text-white text-xl hover:text-yellow-400 transition">Home</NavLink>
          <NavLink exact to="/consultants" className="text-white text-xl hover:text-yellow-400 transition">Consultants Info</NavLink>
          <NavLink to="/AvailableCamps" className="text-white text-xl hover:text-yellow-400 transition">Available Camps</NavLink>

          {user && (
            <NavLink to="/myRequestCamp" className="text-white text-xl relative">
              Request
              <FaShoppingCart className="ml-2 mr-1 inline" />
              {carts.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full px-2 py-1 text-xs">
                  {carts.length}
                </span>
              )}
            </NavLink>
          )}

          {/* Theme Toggle */}
          <div className="flex items-center">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onChange={handleChange}
                checked={theme === 'dark'}
                className="hidden"
              />
              <svg className="swap-off fill-current w-8 h-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              <svg className="swap-on fill-current w-8 h-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>

          {/* User Profile */}
          {user ? (
            <div className="dropdown dropdown-end ml-4 relative">
              <button
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'
              >
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  className='w-10 rounded-full'
                  src={user?.photoURL || user?.image}
                  title={user?.displayName || user?.name}
                />
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 text-black font-bold absolute right-0 top-12 z-50"
              >
                <li className="px-4 py-2 text-gray-700">{user.displayName}</li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink to="/login" className="text-white hover:text-yellow-400 transition">
              Join Us
            </NavLink>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
