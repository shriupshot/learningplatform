import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Feature.css"; // Custom CSS for the outer border

const Features = () => {
    const features = [
        {
          icon: "bi-clipboard-check",
          title: "Seamless Enrollment",
          description: "Quick and easy online registration, saving you time and hassle.",
        },
        {
          icon: "bi-clock",
          title: "24/7 Accessibility",
          description: "Enroll anytime, anywhere, without visiting in person.",
        },
        {
          icon: "bi-shield-lock",
          title: "Secure & Reliable",
          description: "Advanced security ensures your personal data is protected.",
        },
        {
          icon: "bi-ui-checks", // Updated icon
          title: "User-Friendly Interface",
          description: "Simple and intuitive platform for all users.",
        },
        {
          icon: "bi-check-circle",
          title: "Instant Confirmation",
          description: "Receive real-time updates and enrollment status.",
        },
        {
          icon: "bi-headset",
          title: "Dedicated Support",
          description: "Receive real-time updates and enrollment status.",
        },
      ];
      
  return (
    <div className="features-container">
      <h2 className="title">Why We Choose Us</h2>
      <hr className="divider" />
      <div className="row g-4">
        {features.map((feature, index) => (
          <div key={index} className="col-md-4">
            <div className={`card feature-card ${index === 5 ? "highlighted" : ""}`}>
              <div className="card-body text-center">
                <i className={`bi ${feature.icon} icon`}></i>
                <h5 className="card-title">{feature.title}</h5>
                <p className="card-text">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
