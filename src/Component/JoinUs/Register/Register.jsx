import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/UseAuth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from "sweetalert2";
import backgroundVideo from '../../../assets/regiterpagebg.mp4'

const Register = () => {

  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || '/';

  const onSubmit = async data => {
    const { email, password } = data;

    // Password validation
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    if (
      !uppercaseRegex.test(password) ||
      !lowercaseRegex.test(password) ||
      password.length < 6
    ) {
      // Show sweet alert for password requirements not met
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long',
      });
      return;
    }

    try {
      // Call your createUser function
      const result = await createUser(email, password);

      if (result.user) {
        // Show success sweet alert or redirect
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Registration successful!',
        }).then(() => {
          navigate(form);
        });
      }
    } catch (error) {
      // Handle registration error
      console.error('Registration error:', error);
      // Show error sweet alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Registration failed. Please try again.',
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 my-8 ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10  bg-opacity-10 bg-blue-400 p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-center text-4xl font-extrabold text-yellow-600 mb-6">Register now!!</h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold bg-blue-500 rounded text-black"> User Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input"
              {...register('fullName', { required: true })}
            />
            {errors.fullName && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text bg-blue-300 rounded text-black font-bold">Your Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered rounded w-full p-2 items-center"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text  bg-blue-300 rounded text-black font-bold">Image URL</span>
            </label>
            <input
              type="text"
              placeholder="Image URL"
              className="input input-bordered p-2 w-full rounded items-center"
              {...register('image')}
            />
          </div>
          <div className="form-control">
            <div className="relative">
              <label className="label">
                <span className="label-text  bg-blue-300 rounded text-black font-bold">Password</span>
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="password"
                className="input input-bordered w-full p-2 rounded items-center"
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
              <span
                className="absolute mt-4 -ml-5 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover  bg-blue-500 rounded text-black font-bold">
                Forgot password?
              </a>
            </label>
            <p className="font-bold text-center ">
              Have an Account?
              <NavLink to="/login" className=" bg-blue-500 rounded text-black font-bold ml-3">
                Login
              </NavLink>
            </p>
          </div>
          <div className="text-center">
            <button className="btn btn-outline w-full btn-warning font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
              Registration
            </button>
          </div>
        </form>
        <div className="text-center p-2">
          <p className="text-black font-serif  bg-blue-500 rounded  font-bold">
            Already have an account? <a href="/login" className="text-yellow-400 hover:text-orange-500 font-bold font-serif ">Login</a>
          </p>
        </div>
      </div>
    </div>

  );
};

export default Register;