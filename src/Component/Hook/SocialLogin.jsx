

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
      fetch('http://localhost:5000/users', {
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
    <div className="">
      <div className="divider divider-secondary"></div>
      <div className="text-center">
        <button
          onClick={handleSignInWithGoogle}
          className="btn bg-orange-200 hover:bg-blue-300"
        >
          Google
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;