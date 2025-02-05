import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [message, setMessage] = useState("Welcome to the Student Enrollment Portal");

  // Function to toggle the message
  const toggleMessage = () => {
    setMessage((prevMessage) =>
      prevMessage === "Welcome to the Student Enrollment Portal"
        ? "Achieve your career goals with SCUBE"
        : "Welcome to the Student Enrollment Portal"
    );
  };

  return (
    <div className="hero-container">
      <section className="hero">
        <div className="hero-text">
          {/* Toggle the text when clicked */}
          <h1 onClick={toggleMessage} className="hero-clickable">
            {message}
          </h1>
          <p>Explore courses, get certified, and enhance your skills!</p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
