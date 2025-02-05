import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentRegistration = () => {
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    parentGuardian: "",
    class: "",
    schoolName: "",
    board: "",
    medium: "",
    subjects: "",
    activities: "",
    course: "",
    branch: "",
    collegeName: "",
    university: "",
    year: "",
    cgpa: "",
    specialization: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered Student Details:", formData);
    // Save data to localStorage
    localStorage.setItem("studentData", JSON.stringify(formData));
    navigate("/stu-profile");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Student Registration</h2>

      {/* Selection Buttons */}
      <div className="d-flex justify-content-center gap-3 mb-4">
        <button
          className={`btn ${userType === "school" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setUserType("school")}
        >
          Register as School Student
        </button>
        <button
          className={`btn ${userType === "be" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => setUserType("be")}
        >
          Register as BE Student
        </button>
      </div>

      {userType && (
        <form onSubmit={handleSubmit} className="border p-4 rounded shadow bg-white">
          {/* Common Details */}
          <h4>Basic Details</h4>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" name="fullName" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input type="date" name="dob" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <select name="gender" className="form-control" onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="text" name="phone" className="form-control" onChange={handleChange} required />
          </div>

          {/* School Student Form */}
          {userType === "school" && (
            <>
              <h4>School Details</h4>
              <div className="mb-3">
                <label className="form-label">Class</label>
                <select name="class" className="form-control" onChange={handleChange} required>
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">School Name</label>
                <input type="text" name="schoolName" className="form-control" onChange={handleChange} required />
              </div>
            </>
          )}

          {/* BE Student Form */}
          {userType === "be" && (
            <>
              <h4>Engineering Details</h4>
              <div className="mb-3">
                <label className="form-label">Course</label>
                <input type="text" name="course" className="form-control" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Branch</label>
                <input type="text" name="branch" className="form-control" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">College Name</label>
                <input type="text" name="collegeName" className="form-control" onChange={handleChange} required />
              </div>
            </>
          )}

          <button type="submit" className="btn btn-primary mt-3 w-100">Register</button>
        </form>
      )}
    </div>
  );
};

export default StudentRegistration;
