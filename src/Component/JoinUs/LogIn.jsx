import { useEffect, useRef, useState } from "react";
import logInIMG from '../../assets/loginlogo2.png';
import logInPageBg from '../../assets/loginpagebg.jpg';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import { Helmet } from "react-helmet-async";
import SocialLogin from "../Hook/SocialLogin";
import useAuth from "../Hook/UseAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {

  const { signIn } = useAuth()

  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);


  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';


  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then(result => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: 'User Logged In Successful',
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
      });
      navigate(from);
    });
  };




  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (


    <>
      <Helmet>
        <title>CampAid || LogIn</title>
      </Helmet>

      <div className="hero min-h-screen my-8 rounded-lg" style={{ backgroundImage: `url(${logInPageBg})`, backgroundSize: 'cover' }}>
        <div className="hero-content flex-col rounded-2xl lg:flex-row-reverse bg-gradient-to-r from-orange-600 from-10% via-yellow-500 via-30% to-red-500 to-90%">
          <div className="text-center lg:text-left">
            <img src={logInIMG} alt="" />
            <p className="font-extrabold text-3xl text-white lg:hidden">
              Welcome to my website
              <br />
              Please log in
            </p>
          </div>
          <div className="card shrink-0 w-full lg:max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body bg-white rounded-xl">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input type="text" ref={captchaRef} name="captcha" placeholder="Type the Captcha above" className="input input-bordered" />
                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">VALIDATE</button>
              </div>
              <div className="form-control mt-6">
                <input disabled={disabled} className="btn btn-primary text-xl text-white bg-gradient-to-r from-orange to-blue-500 hover:from-pink-500 hover:to-yellow-500" type="submit" value="Login" />
              </div>
              <div className="text-center mb-4">
                <p className="text-black font-serif">Don't have an account? <a href="/register" className="text-yellow-400 hover:text-green-500 font-bold font-serif">Register</a></p>
              </div>
            </form>
            <div className="text-center">
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default LogIn;
