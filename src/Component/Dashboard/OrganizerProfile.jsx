import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hook/UseAuth";

const OrganizerProfile = () => {
  const { user } = useAuth();
  const [organizer, setOrganizer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    image: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/organizer/profile');
        setOrganizer(response.data);
        setFormData({
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
          image: response.data.image,
        });
      } catch (error) {
        console.error('Error fetching profile', error);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await axios.put('/api/organizer/profile', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setOrganizer(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  if (!organizer) return <div>Loading...</div>;


  return (
    <div className="organizer-profile p-8">
      <h1 className="text-3xl font-bold mb-4">Organizer Profile</h1>
      <div className="profile-details mb-8">
        <img src={user?.photoURL} alt={user?.name} className="w-24 h-24 rounded-full mb-4" />
        <p>Name: {user?.displayName}</p>
        <p>Email: {user?.email}</p>
        <p>Phone: {user?.phoneNumber}</p>
        <button
          onClick={() => setIsEditing(true)}
          className="text-white bg-blue-500 px-4 py-2 rounded mt-4"
        >
          Update Profile
        </button>
      </div>

      {isEditing && (
        <form onSubmit={handleFormSubmit} className="profile-edit-form bg-white p-4 rounded shadow-lg">
          <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="block w-full mb-4 p-2"
          />
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="block w-full mb-4 p-2"
          />
          <label className="block mb-2">Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="block w-full mb-4 p-2"
          />
          <label className="block mb-2">Profile Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="block w-full mb-4 p-2"
          />
          <button type="submit" className="text-white bg-blue-500 px-4 py-2 rounded">
            Save Changes
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="text-red-500 mt-4"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default OrganizerProfile;