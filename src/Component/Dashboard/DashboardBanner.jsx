import useAuth from "../Hook/UseAuth";

const DashboardBanner = () => {
  const { user } = useAuth();

  return (
    <div className="relative w-full h-80 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-lg overflow-hidden">
      <img
        src="https://i.ibb.co/5kbx1Vp/3d-abstract-techno-background-with-connecting-lines-dots.jpg"
        alt="Banner Background"
        className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-50"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-6 space-y-6">
        <div className="flex items-center space-x-4">
          {user?.photoURL && (
            <img
              src={user.photoURL}
              alt="User Profile"
              className="w-16 h-16 rounded-full shadow-lg border-2 border-white"
            />
          )}
          <p className="text-center font-bold text-2xl lg:text-3xl">
            {user?.displayName || "User"}
          </p>
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold mb-2">
          Welcome to Your Dashboard
        </h1>

        <p className="text-lg lg:text-xl mb-6 text-center max-w-xl mx-auto">
          Manage your camps, view stats, and explore more features tailored for you!
        </p>

        <div className="flex space-x-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105">
            Get Started
          </button>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardBanner;
