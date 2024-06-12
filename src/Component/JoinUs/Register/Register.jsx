



// // import { useState } from "react";
// // import { useNavigate, useLocation, NavLink } from "react-router-dom";
// // import Swal from "sweetalert2";
// // import backgroundVideo from '../../../assets/regiterpagebg.mp4';
// // import useAuth from "../../Hook/UseAuth"; // Custom authentication hook
// // import { FaEye, FaEyeSlash } from 'react-icons/fa';
// // import { useForm } from "react-hook-form";
// // import UseAxiosCommon from "../../Hook/UseAxiosCommon";
// // import { getAuth, updateProfile } from "firebase/auth"; // Import Firebase Auth

// // const Register = () => {
// //   const [showPassword, setShowPassword] = useState(false);
// //   const { createUser } = useAuth();
// //   const axiosCommon = UseAxiosCommon();
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const from = location?.state || '/';
// //   const {
// //     register,
// //     handleSubmit,
// //     reset,
// //     formState: { errors },
// //   } = useForm();

// //   const onSubmit = async (data) => {
// //     const { displayName, email, photoURL, password, phoneNumber } = data;
// //     console.log(data);

// //     // Password validation
// //     const uppercaseRegex = /[A-Z]/;
// //     const lowercaseRegex = /[a-z]/;
// //     if (
// //       !uppercaseRegex.test(password) ||
// //       !lowercaseRegex.test(password) ||
// //       password.length < 6
// //     ) {
// //       Swal.fire({
// //         icon: 'error',
// //         title: 'Oops...',
// //         text: 'Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long',
// //       });
// //       return;
// //     }

// //     try {
// //       // Create user
// //       const result = await createUser(email, password);
// //       const loggedUser = result.user;
// //       console.log('User created:', loggedUser);

// //       // Update user profile
// //       const auth = getAuth();
// //       await updateProfile(auth.currentUser, {
// //         displayName: displayName,
// //         photoURL: photoURL,
// //       });

// //       console.log('Profile updated:', {
// //         displayName: auth.currentUser.displayName,
// //         photoURL: auth.currentUser.photoURL,
// //       });

// //       // Prepare user info for database
// //       const userInfo = {
// //         displayName,
// //         email,
// //         photoURL,
// //         phoneNumber
// //       };

// //       // Add user to the database
// //       const res = await axiosCommon.post('/users', userInfo);

// //       if (res.data.insertedId) {
// //         reset();
// //         Swal.fire({
// //           icon: 'success',
// //           title: `${displayName}'s account created successfully`,
// //           text: 'Registration successful!',
// //         });
// //         navigate(from);
// //       }
// //     } catch (error) {
// //       console.error('Registration error:', error);
// //       Swal.fire({
// //         icon: 'error',
// //         title: 'Oops...',
// //         text: 'Registration failed. Please try again.',
// //       });
// //     }
// //   };

// //   return (
// //     <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
// //       <video
// //         className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg"
// //         src={backgroundVideo}
// //         autoPlay
// //         loop
// //         muted
// //       />
// //       <div className="relative z-10 bg-opacity-10 bg-blue-400 p-10 rounded-lg shadow-lg max-w-md w-full">
// //         <h2 className="text-center text-4xl font-extrabold text-yellow-600 mb-6">Register now!!</h2>
// //         <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
// //           <div className="form-control">
// //             <label className="label">
// //               <span className="label-text font-bold bg-blue-500 rounded text-black">User Name</span>
// //             </label>
// //             <input
// //               type="text"
// //               {...register("displayName", { required: true })}
// //               placeholder="Enter Your Name"
// //               className="input text-black font-bold input-bordered"
// //             />
// //             {errors.displayName && <span className="text-red-500">This field is required</span>}
// //           </div>
// //           <div className="form-control">
// //             <label className="label">
// //               <span className="label-text bg-blue-300 rounded text-black font-bold">Your Email</span>
// //             </label>
// //             <input
// //               type="email"
// //               {...register("email", { required: true })}
// //               placeholder="Email"
// //               className="input text-black font-bold input-bordered"
// //             />
// //             {errors.email && <span className="text-red-500">This field is required</span>}
// //           </div>
// //           <div className="form-control">
// //             <label className="label">
// //               <span className="label-text bg-blue-300 rounded text-black font-bold">Photo URL</span>
// //             </label>
// //             <input
// //               type="text"
// //               {...register("photoURL")}
// //               placeholder="Photo URL"
// //               className="input text-black font-bold input-bordered"
// //             />
// //           </div>
// //           <div className="form-control">
// //             <label className="label">
// //               <span className="label-text bg-blue-300 rounded text-black font-bold">Phone Number</span>
// //             </label>
// //             <input
// //               type="tel"
// //               {...register("phoneNumber", { required: true })}
// //               placeholder="Phone Number"
// //               className="input text-black font-bold input-bordered"
// //             />
// //             {errors.phoneNumber && <span className="text-red-500">This field is required</span>}
// //           </div>
// //           <div className="form-control">
// //             <div className="relative">
// //               <label className="label">
// //                 <span className="label-text bg-blue-300 rounded text-black font-bold">Password</span>
// //               </label>
// //               <input
// //                 type={showPassword ? 'text' : 'password'}
// //                 {...register("password", { required: true })}
// //                 placeholder="Password"
// //                 className="input text-black font-bold input-bordered"
// //               />
// //               <span
// //                 className="absolute mt-4 -ml-5 cursor-pointer"
// //                 onClick={() => setShowPassword(!showPassword)}
// //               >
// //                 {showPassword ? <FaEyeSlash /> : <FaEye />}
// //               </span>
// //             </div>
// //             <label className="label">
// //               <a href="#" className="label-text-alt link link-hover bg-blue-500 rounded text-black font-bold">
// //                 Forgot password?
// //               </a>
// //             </label>
// //           </div>
// //           <div className="text-center">
// //             <button className="btn btn-outline w-full btn-warning font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
// //               Register
// //             </button>
// //           </div>
// //         </form>
// //         <div className="text-center p-2">
// //           <p className="text-black font-serif bg-blue-500 rounded font-bold">
// //             Already have an account? <NavLink to="/login" className="text-yellow-400 hover:text-orange-500 font-bold font-serif">Login</NavLink>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;




// import { useState } from "react";
// import { useNavigate, useLocation, NavLink } from "react-router-dom";
// import Swal from "sweetalert2";
// import backgroundVideo from '../../../assets/regiterpagebg.mp4';
// import useAuth from "../../Hook/UseAuth"; // Custom authentication hook
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useForm } from "react-hook-form";
// import UseAxiosCommon from "../../Hook/UseAxiosCommon";
// import { getAuth, updateProfile } from "firebase/auth"; // Import Firebase Auth

// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const { createUser } = useAuth();
//   const axiosCommon = UseAxiosCommon();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location?.state || '/';
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const { displayName, email, photoURL, password, phoneNumber } = data;
//     console.log(data);

//     // Password validation
//     const uppercaseRegex = /[A-Z]/;
//     const lowercaseRegex = /[a-z]/;
//     if (
//       !uppercaseRegex.test(password) ||
//       !lowercaseRegex.test(password) ||
//       password.length < 6
//     ) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long',
//       });
//       return;
//     }

//     try {
//       // Create user
//       const result = await createUser(email, password);
//       const loggedUser = result.user;
//       console.log('User created:', loggedUser);

//       // Update user profile
//       const auth = getAuth();
//       await updateProfile(auth.currentUser, {
//         displayName: displayName,
//         photoURL: photoURL,
//       });

//       console.log('Profile updated:', {
//         displayName: auth.currentUser.displayName,
//         photoURL: auth.currentUser.photoURL,
//       });

//       // Prepare user info for database
//       const userInfo = {
//         displayName,
//         email,
//         photoURL,
//         phoneNumber
//       };

//       // Add user to the database
//       const res = await axiosCommon.post('/users', userInfo);

//       if (res.data.insertedId) {
//         reset();
//         Swal.fire({
//           icon: 'success',
//           title: `${displayName}'s account created successfully`,
//           text: 'Registration successful!',
//         });
//         navigate(from);
//       }
//     } catch (error) {
//       console.error('Registration error:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Registration failed. Please try again.',
//       });
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg"
//         src={backgroundVideo}
//         autoPlay
//         loop
//         muted
//       />
//       <div className="relative z-10 bg-opacity-10 bg-blue-400 p-10 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-center text-4xl font-extrabold text-yellow-600 mb-6">Register now!!</h2>
//         <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text font-bold bg-blue-500 rounded text-black">User Name</span>
//             </label>
//             <input
//               type="text"
//               {...register("displayName", { required: true })}
//               placeholder="Enter Your Name"
//               className="input text-black font-bold input-bordered"
//             />
//             {errors.displayName && <span className="text-red-500">This field is required</span>}
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text bg-blue-300 rounded text-black font-bold">Your Email</span>
//             </label>
//             <input
//               type="email"
//               {...register("email", { required: true })}
//               placeholder="Email"
//               className="input text-black font-bold input-bordered"
//             />
//             {errors.email && <span className="text-red-500">This field is required</span>}
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text bg-blue-300 rounded text-black font-bold">Photo URL</span>
//             </label>
//             <input
//               type="text"
//               {...register("photoURL")}
//               placeholder="Photo URL"
//               className="input text-black font-bold input-bordered"
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text bg-blue-300 rounded text-black font-bold">Phone Number</span>
//             </label>
//             <input
//               type="tel"
//               {...register("phoneNumber", { required: true })}
//               placeholder="Phone Number"
//               className="input text-black font-bold input-bordered"
//             />
//             {errors.phoneNumber && <span className="text-red-500">This field is required</span>}
//           </div>
//           <div className="form-control">
//             <div className="relative">
//               <label className="label">
//                 <span className="label-text bg-blue-300 rounded text-black font-bold">Password</span>
//               </label>
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 {...register("password", { required: true })}
//                 placeholder="Password"
//                 className="input text-black font-bold input-bordered"
//               />
//               <span
//                 className="absolute mt-4 -ml-5 cursor-pointer"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>
//             <label className="label">
//               <a href="#" className="label-text-alt link link-hover bg-blue-500 rounded text-black font-bold">
//                 Forgot password?
//               </a>
//             </label>
//           </div>
//           <div className="text-center">
//             <button className="btn btn-outline w-full btn-warning font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
//               Register
//             </button>
//           </div>
//         </form>
//         <div className="text-center p-2">
//           <p className="text-black font-serif bg-blue-500 rounded font-bold">
//             Already have an account? <NavLink to="/login" className="text-yellow-400 hover:text-orange-500 font-bold font-serif">Login</NavLink>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import { useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import backgroundVideo from '../../../assets/regiterpagebg.mp4';
import useAuth from "../../Hook/UseAuth"; // Custom authentication hook
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import UseAxiosCommon from "../../Hook/UseAxiosCommon";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useAuth();
  const axiosCommon = UseAxiosCommon();
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || '/';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    const { displayName, email, photoURL, password, phoneNumber } = data;
    console.log(data);
    // Password validation
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    if (
      !uppercaseRegex.test(password) ||
      !lowercaseRegex.test(password) ||
      password.length < 6
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long',
      });
      return;
    }

    try {
      // Create user
      const result = await createUser(email, password);
      const loggedUser = result.user;
      console.log(loggedUser);
      // Prepare user info for database
      const userInfo = {
        displayName,
        email,
        photoURL,
        phoneNumber
      };

      // Add user to the database
      const res = await axiosCommon.post('/users', userInfo);

      if (res.data.insertedId) {
        reset();
        Swal.fire({
          icon: 'success',
          title: `${data?.displayName}'created successfully'`,
          text: 'Registration successful!',
        });
        navigate(form);
      }
    } catch (error) {
      console.error('Registration error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Registration failed. Please try again.',
      });
    }
  };

  return (


    <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 bg-opacity-10 bg-blue-400 p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-center text-4xl font-extrabold text-yellow-600 mb-6">Register now!!</h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold bg-blue-500 rounded text-black">User Name</span>
            </label>
            <input
              type="text"
              {...register("displayName", { required: true })}
              placeholder="Enter Your Name"
              className="input text-black font-bold input-bordered"
            />
            {errors.displayName && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text bg-blue-300 rounded text-black font-bold">Your Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="input text-black font-bold input-bordered"
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text bg-blue-300 rounded text-black font-bold">photoURL</span>
            </label>
            <input
              type="text"
              {...register("photoURL")}
              placeholder="photoURL"
              className="input text-black font-bold input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text bg-blue-300 rounded text-black font-bold">phoneNumber</span>
            </label>
            <input
              type="tel"
              {...register("phoneNumber", { required: true })}
              placeholder="phoneNumber "
              className="input text-black font-bold input-bordered"
            />
            {errors.phoneNumber && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <div className="relative">
              <label className="label">
                <span className="label-text bg-blue-300 rounded text-black font-bold">Password</span>
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                {...register("password", { required: true })}
                placeholder="Password"
                className="input text-black font-bold input-bordered"
              />
              <span
                className="absolute mt-4 -ml-5 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover bg-blue-500 rounded text-black font-bold">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="text-center">
            <button className="btn btn-outline w-full btn-warning font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
              Register
            </button>
          </div>
        </form>
        <div className="text-center p-2">
          <p className="text-black font-serif bg-blue-500 rounded font-bold">
            Already have an account? <a href="/login" className="text-yellow-400 hover:text-orange-500 font-bold font-serif">Login</a>
          </p>
        </div>
      </div>
    </div>


  );
};

export default Register;