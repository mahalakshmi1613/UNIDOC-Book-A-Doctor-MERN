import React from 'react'
import "../css/doctor.css"

const Doctor4 = () => {
    function bookAppointment(doctorName) {
        // Redirect to the book appointment page with doctor name as a query parameter
        window.location.href = `book.html?doctor=${encodeURIComponent(doctorName)}`;
    }
    return (
        <div>
          <div className="background-image">
            <div className="doctor-details-page">
              <div className="doctor-profile">
                <img src="../images/doctor4.jpg" alt="Doctor Profile Picture" className="doctor-img" />
                <div className="doctor-info">
                  <h1 className="name">Dr. Sarah Miller</h1>
                  <p className="specialization">Pediatrician</p>
                  <p className="experience"><strong>Experience:</strong> 10 years</p>
                  <p className="location"><strong>Location:</strong> KidsCare Clinic</p>
                  <p className="availability"><strong>Availability:</strong> Monday, Wednesday, Thursday, Sunday</p>
                  <p className="email"><strong>Email:</strong> sarah.miller@gmail.com</p>
                  <p className="phone"><strong>Phone:</strong> +91 8767564539</p>
                  <div className="rating">
                    ⭐️⭐️⭐️⭐️⭐️ <span>(5)</span>
                  </div>
                  <p className="fee"><strong>Consultation Fee:</strong> ₹1500</p>
                  <button className="book-appointment-btn" onClick={() => bookAppointment('Sarah Miller')}>Book Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Doctor4;