import React from 'react'
import "../css/doctor.css"

const Doctor7 = () => {
    function bookAppointment(doctorName) {
        // Redirect to the book appointment page with doctor name as a query parameter
        window.location.href = `book.html?doctor=${encodeURIComponent(doctorName)}`;
    }
    return (
        <div>
          <div className="background-image">
            <div className="doctor-details-page">
              <div className="doctor-profile">
                <img src="../images/doctor7.avif" alt="Doctor Profile Picture" className="doctor-img" />
                <div className="doctor-info">
                  <h1 className="name">Dr. Olivia White</h1>
                  <p className="specialization">OBGYN (Obstetrician/Gynecologist)</p>
                  <p className="experience"><strong>Experience:</strong> 15 years</p>
                  <p className="location"><strong>Location:</strong> Women's Health Center</p>
                  <p className="availability"><strong>Availability:</strong> Tuesday, Thursday, Saturday</p>
                  <p className="email"><strong>Email:</strong> olivia.white@gmail.com</p>
                  <p className="phone"><strong>Phone:</strong> +91 65798 03456</p>
                  <div className="rating">
                    ⭐️⭐️⭐️⭐️⭐️ <span>(5)</span>
                  </div>
                  <p className="fee"><strong>Consultation Fee:</strong> ₹1000</p>
                  <button className="book-appointment-btn" onClick={() => bookAppointment('Olivia White')}>Book Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Doctor7;
