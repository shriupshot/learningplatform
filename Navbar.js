import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Importing profile icon
import "./Navbar.css";

const Navbar = ({ handleLoginClick }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" className="logo-image" />
        <span className="logo-text">Cube</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/course">Courses & Certifications</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/help-centre">Help Centre</Link></li>
        <li className="nav-actions">
          <button className="login-button" onClick={handleLoginClick}>Login</button>
          <FaUserCircle className="profile-icon" title="Profile" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
