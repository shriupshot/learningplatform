import React from "react";

const CareerGuidance = () => {
  return (
    <div 
      style={{
        display: "flex",
        alignItems: "flex-start",  // ✅ Moves the container to the top
        justifyContent: "center",  // ✅ Keeps it centered horizontally
        minHeight: "50vh", // ✅ Ensures no extra space below
        paddingTop: "10px", // ✅ Adds some space from the top
        backgroundColor: "#f9f9f9" // Optional: Light background for better visibility
      }}
    >
      <div 
        style={{
          display: "flex",
          alignItems: "center",
          border: "2px solid gray",
          borderRadius: "10px",
          padding: "20px",
          maxWidth: "900px",
          backgroundColor: "white",
          boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)"
        }}
      >
        {/* Left Side - Image */}
        <div style={{ flex: "1" }}>
          <img 
            src="/CareerGuidance.jpg" 
            alt="Career Guidance" 
            style={{ width: "100%", borderRadius: "10px" }} 
          />
        </div>

        {/* Right Side - Text Content */}
        <div style={{ flex: "1", paddingLeft: "20px", color: "rgb(219, 39, 119)" }}>
          <h2 
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              borderBottom: "2px solid rgb(219, 39, 119)",
              paddingBottom: "5px"
            }}
          >
            CAREER GUIDANCE
          </h2>
          <ul style={{ marginTop: "10px", lineHeight: "1.6" }}>
            <li>Online Internship opportunities and how to gain work experience</li>
            <li>Skill development opportunities (e.g., certifications, online courses).</li>
            <li>Switching careers or upskilling for promotions.</li>
            <li>Highlight people who benefited from career guidance to inspire users.</li>
            <li>Forms to connect users with mentors or career counselors.</li>
          </ul>
          <button 
            style={{
              marginTop: "15px",
              padding: "10px 15px",
              backgroundColor: "#facc15",
              color: "black",
              borderRadius: "5px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Explore Career
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerGuidance;
