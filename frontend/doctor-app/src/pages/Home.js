import React from 'react';
import "../css/home.css"

const Home = () => {
    
function toggleMenu() {
    document.querySelector('.menu-container').classList.toggle('open');
}
function goToProfile(doctorId) {
    // Redirect to the specific profile page based on doctor ID
    window.location.href = `doctor${doctorId}.html`;
}
// Select the button by its ID
const loginButton = document.getElementById("loginBtn");

// Add a click event listener to redirect to the login page
loginButton.addEventListener("click", function () {
    window.location.href = "login.html";  // Replace "login.html" with the correct path to your login page
});

  return (
    <div>
      <div className="header">
        <div className="logo-text-container">
          <img
            src="../images/logo UNIDOC.webp"
            alt="Unidoc logo"
            className="logo"
          />
          <span className="text">Unidoc</span>
        </div>
        <h1>Welcome to Doctor Appointment Booking</h1>
        <p>Your health, our priority. Book an appointment with the best doctors around you.</p>
        <button id="loginBtn" className="login-btn">Login/Signup</button>
        <div className="menu-container" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="nav-menu">
          <a href="home.html">Home</a>
          <a href="aboutus.html">About</a>
          <a href="aboutus.html#contact">Contact</a>
        </div>
        <div className="search-container">
          <input type="text" id="doctorSearch" placeholder="Search..." />
          <button className="perform-search">Search</button>
        </div>
      </div>
      <div className="container">
        <h2>Available Doctors</h2>
        <div className="doctor-list">
          {[
            { id: 1, name: 'Dr. Jane Smith', specialization: 'Cardiology', experience: 13, rating: '★★★★★' },
            { id: 2, name: 'Dr. Mark Thompson', specialization: 'Orthopedic Surgeon', experience: 10, rating: '★★★★☆' },
            { id: 3, name: 'Dr. James Walker', specialization: 'General Practitioner (GP)', experience: 12, rating: '★★★★★' },
            { id: 4, name: 'Dr. Sarah Miller', specialization: 'Pediatrician', experience: 8, rating: '★★★★☆' },
            { id: 5, name: 'Dr. David Harris', specialization: 'Neurologist', experience: 15, rating: '★★★★☆' },
            { id: 6, name: 'Dr. Elizabeth Clark', specialization: 'Dermatologist', experience: 11, rating: '★★★★☆' },
            { id: 7, name: 'Dr. Olivia White', specialization: 'OBGYN (Obstetrician/Gynecologist)', experience: 13.5, rating: '★★★★★' },
          ].map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <h3>{doctor.name}</h3>
              <p>Specialization: {doctor.specialization}</p>
              <p>Experience: {doctor.experience} years</p>
              <p className="star">Rating: {doctor.rating}</p>
              <button
                className="goToDoctorProfile"
                onClick={() => goToProfile(doctor.id)}
              >
                Go to Profile
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="section" id="copyright">
        <p className="copy">&copy; 2024 UniDoc.</p>
        <p>
          All rights reserved. Unauthorized reproduction or distribution of content from this website is strictly prohibited.
          UniDoc, along with its logos and trademarks, are the property of UniDoc Inc.
        </p>
        <p>
          This website and all related content are protected by copyright and other intellectual property laws. For any
          inquiries about using our materials, <br />
          please contact our legal team at{' '}
          <a href="mailto:legal@UniDoc.com">legal@unidoc.com</a>.
        </p>
      </div>
    </div>
  );
};

export default Home;
