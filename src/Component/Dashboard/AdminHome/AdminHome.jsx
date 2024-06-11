import useAuth from "../../Hook/UseAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div className="text-3xl">
      <h1>Hi welcome</h1>

      {

        user?.displayName ? user.displayName : 'Back'
      }
    </div>
  );
};

export default AdminHome;
