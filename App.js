import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Banner from "./Banner";
import ImageSlider from "./ImageSlider";
import CareerGuidance from "./CareerGuidance";
import DemoSession from "./DemoSession";
import LoginForm from "./LoginForm";
import HelpCentre from "./HelpCentre";
import UserTypes from "./UserTypes";
import ProfessorRegistration from "./ProfessorRegistration";
import StudentRegistration from "./StudentRegistration";
import Profile from "./Profile";
import StuProfile from "./StuProfile";
import Course from "./Course"; // Ensure correct import
import Contact from "./Contact"; // Ensure correct import
import Features from "./Features";
import Footer from "./Footer";
function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      <div>
        <Navbar handleLoginClick={() => setShowLogin(true)} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                showLogin ? (
                  <LoginForm closeLoginForm={() => setShowLogin(false)} />
                ) : (
                  <>
                    <Hero />
                    <Banner />
                    <ImageSlider />
                    <CareerGuidance />
                    <DemoSession />
                    <Features />
                    <Footer />
                  </>
                )
                
              }
            />
            <Route path="/course" element={<Course />} />
            <Route path="/help-centre" element={<HelpCentre />} />
            <Route path="/contact" element={<Contact />} /> {/* Added Contact Route */}
            <Route path="/user-types" element={<UserTypes />} />
            <Route path="/register-professor" element={<ProfessorRegistration />} />
            <Route path="/register-student" element={<StudentRegistration />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/stu-profile" element={<StuProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
