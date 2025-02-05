import React from "react";
import { useNavigate } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";

const UserTypes = () => {
  const navigate = useNavigate();

  console.log("UserTypes component loaded"); // ✅ Debugging

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 w-100 bg-light">
      {/* Professional Section */}
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center w-75 mb-4 border p-4 rounded shadow bg-white">
        <div className="w-100 w-md-50 text-center">
          <img
            src="professor.jpg"
            alt="Professional"
            className="img-fluid rounded shadow-lg"
            style={{ maxWidth: "250px" }}
          />
        </div>
        <div className="w-100 w-md-50 text-center p-3">
          <h2 className="fw-bold text-dark">For Professionals:</h2>
          <p className="text-muted">
            Upload your profile and showcase your expertise.
          </p>
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/register-professor")}
          >
            Register as Professional
          </button>
        </div>
      </div>

      {/* Student Section */}
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center w-75 mb-4 border p-4 rounded shadow bg-white">
        <div className="w-100 w-md-50 text-center">
          <img
            src="Studenttwo.jpg"
            alt="Student"
            className="img-fluid rounded shadow-lg"
            style={{ maxWidth: "250px" }}
          />
        </div>
        <div className="w-100 w-md-50 text-center p-3">
          <h2 className="fw-bold text-dark">For Students:</h2>
          <p className="text-muted">
            Log in and start learning on our Skill Learn website.
          </p>
          <button
            className="btn btn-success mt-3"
            onClick={() => navigate("/register-student")}
          >
            Register as Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTypes;
