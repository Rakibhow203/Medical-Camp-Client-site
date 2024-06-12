

import { FaGoogle } from 'react-icons/fa';


import { useNavigate } from 'react-router-dom';
import useAuth from './UseAuth';

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const handleSignInWithGoogle = () => {
    signInWithGoogle().then(result => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        photoURL: result.user?.photoURL,

      };
      fetch('https://madical-camp-server.vercel.app/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
      navigate('/');
    });
  };

  return (



    <div className="flex justify-center items-center my-8">
      <div className="w-full max-w-sm">
        <div className="divider h-px bg-gray-300 my-4"></div>
        <div className="text-center">
          <button
            onClick={handleSignInWithGoogle}
            className="flex items-center justify-center w-full px-4 py-2 text-white bg-orange-500 hover:bg-blue-500 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>

  );
};

export default SocialLogin;