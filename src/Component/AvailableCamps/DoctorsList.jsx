// components/DoctorsList.js
import { useState, useEffect } from 'react';

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctors data from the API
    const fetchDoctors = async () => {
      const response = await fetch('/api/doctors');
      const data = await response.json();
      setDoctors(data);
    };

    fetchDoctors();
  }, []);

  return (
    <div>
      <h2>Medical Camp Doctors</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor._id}>
            <h3>{doctor.name}</h3>
            <p><strong>Specialty:</strong> {doctor.specialty}</p>
            <p><strong>Experience:</strong> {doctor.experience} years</p>
            <p><strong>Qualifications:</strong> {doctor.qualifications}</p>
            <p><strong>Consultation Hours:</strong> {doctor.consultationHours}</p>
            <p>{doctor.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorsList;
