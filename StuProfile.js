import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StuProfile = () => {
  const [studentData, setStudentData] = useState(null);
  const navigate = useNavigate();

  // Load student data from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("studentData"));
    if (data) {
      setStudentData(data);
    }
  }, []);

  const handleDelete = () => {
    localStorage.removeItem("studentData"); // Remove data from localStorage
    setStudentData(null); // Clear the state
    navigate("/"); // Redirect to home or other page
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Student Profile</h2>
      {studentData ? (
        <div className="border p-4 rounded shadow bg-white">
          <h4>Basic Details</h4>
          <p><strong>Full Name:</strong> {studentData.fullName}</p>
          <p><strong>Date of Birth:</strong> {studentData.dob}</p>
          <p><strong>Gender:</strong> {studentData.gender}</p>
          <p><strong>Email:</strong> {studentData.email}</p>
          <p><strong>Phone Number:</strong> {studentData.phone}</p>

          {/* Display School Details */}
          {studentData.class && (
            <>
              <h4>School Details</h4>
              <p><strong>Class:</strong> {studentData.class}</p>
              <p><strong>School Name:</strong> {studentData.schoolName}</p>
            </>
          )}

          {/* Display BE Student Details */}
          {studentData.course && (
            <>
              <h4>Engineering Details</h4>
              <p><strong>Course:</strong> {studentData.course}</p>
              <p><strong>Branch:</strong> {studentData.branch}</p>
              <p><strong>College Name:</strong> {studentData.collegeName}</p>
            </>
          )}

          {/* Delete Button */}
          <button onClick={handleDelete} className="btn btn-danger mt-3">
            Delete Profile
          </button>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default StuProfile;
