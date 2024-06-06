import React, { useState } from "react";

const OrganizerProfile = () => {
  const [name, setName] = useState("John Doe"); // Example initial name
  const [image, setImage] = useState(""); // Example initial image URL
  const [contact, setContact] = useState("john.doe@example.com"); // Example initial contact

  const handleUpdateProfile = () => {
    // Logic to update profile information
    // You can send the updated data to the backend or update it directly in the frontend state
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Organizer Profile</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Contact:</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      <button
        onClick={handleUpdateProfile}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Update
      </button>
    </div>
  );
};

export default OrganizerProfile;
