import React, { useState, useEffect } from 'react';

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch doctors data from the API
    const fetchDoctors = async () => {
      try {
        const response = await fetch('/api/doctors'); // Ensure the endpoint is correct
        if (!response.ok) {
          throw new Error('Failed to fetch doctors');
        }
        const data = await response.json();
        setDoctors(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return <p>Loading doctors...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>NEMCH Doctors</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor._id}>
            <h3>{doctor.name}</h3>
            <p><strong>Specialty:</strong> {doctor.department}</p>
            <p><strong>Experience:</strong> {doctor.experience} years</p>
            <p><strong>Qualifications:</strong> {doctor.degree}</p>
            <p><strong>Consultation Hours:</strong> {doctor.consultingDay}, {doctor.consultingTime}</p>
            <p><strong>Location:</strong> {doctor.location}</p>
            <p>{doctor.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorsList;
