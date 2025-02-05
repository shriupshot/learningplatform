import React from "react";

const DemoSession = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid gray",
        borderRadius: "10px",
        padding: "15px",
        maxWidth: "900px",
        backgroundColor: "white",
        boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)",
        margin: "20px auto",
      }}
    >
      {/* Top Label */}
      <div
        style={{
          backgroundColor: "#fdf4a6",
          padding: "8px 20px",
          borderRadius: "15px",
          fontWeight: "bold",
          marginBottom: "15px",
        }}
      >
        Classes for 1 to 12
      </div>

      {/* Main Content - Image & Text */}
      <div
        style={{
          display: "flex", // Aligns children side by side
          justifyContent: "space-between", // Ensure space between image and text
          alignItems: "center", // Aligns image and text vertically in the center
          width: "100%",
        }}
      >
        {/* Left Side - Image */}
        <div style={{ flex: "1", maxWidth: "45%" }}>
          <img
            src="/demosession.jpg" // Image is in the public folder
            alt="Demo Session"
            style={{
              width: "100%", // Makes image width flexible
              borderRadius: "10px",
              objectFit: "cover", // Makes sure the image doesn't stretch awkwardly
            }}
          />
        </div>

        {/* Right Side - Text Sections */}
        <div style={{ flex: "2", paddingLeft: "20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between", // Makes sections inside text container have space between
              borderBottom: "2px solid gray",
              paddingBottom: "10px",
            }}
          >
            {/* Attend Demo Session */}
            <div style={{ flex: "1", paddingRight: "15px" }}>
              <h3 style={{ color: "rgb(219, 39, 119)", fontWeight: "bold" }}>
                Attend Demo Session
              </h3>
              <p>
                Offer demo classes for students to explore subjects and
                teaching styles.
              </p>
            </div>

            {/* Mentor Support */}
            <div
              style={{
                flex: "1",
                paddingLeft: "15px",
                borderLeft: "2px solid gray",
              }}
            >
              <h3 style={{ color: "rgb(102, 0, 153)", fontWeight: "bold" }}>
                Mentor Support
              </h3>
              <p>
                Include live classes, Q&A sessions, and interactive
                discussions. Provide access to additional study resources and
                materials.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Enroll Button */}
      <button
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          backgroundColor: "#fdf4a6",
          color: "black",
          borderRadius: "5px",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Enroll Now
      </button>
    </div>
  );
};

export default DemoSession;
