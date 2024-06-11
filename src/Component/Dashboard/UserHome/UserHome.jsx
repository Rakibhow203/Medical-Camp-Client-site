import useAuth from "../../Hook/UseAuth";


const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl">


        <span>Hi, Welcome</span>
        {

          User?.displayName ? user.displayName : 'Back'
        }

      </h2>

    </div>
  );
};

export default UserHome;