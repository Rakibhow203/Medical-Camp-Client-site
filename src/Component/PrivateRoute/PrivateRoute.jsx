import useAuth from "../Hook/UseAuth";
import LogIn from "../JoinUs/LogIn";



const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (!user) {
    return <LogIn></LogIn>;
  }
  if (loading) return <p>Loading....</p>;
  return <div>{children}</div>;


};

export default PrivateRoute;