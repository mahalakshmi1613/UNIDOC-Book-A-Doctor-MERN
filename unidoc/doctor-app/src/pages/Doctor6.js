import React from 'react'
import "../css/doctor.css"

const Doctor6 = () => {
    function bookAppointment(doctorName) {
        // Redirect to the book appointment page with doctor name as a query parameter
        window.location.href = `book.html?doctor=${encodeURIComponent(doctorName)}`;
    }
    return (
        <div>
          <div className="background-image">
            <div className="doctor-details-page">
              <div className="doctor-profile">
                <img src="../images/doctor6.jpg" alt="Doctor Profile Picture" className="doctor-img" />
                <div className="doctor-info">
                  <h1 className="name">Dr. Elizabeth Clark</h1>
                  <p className="specialization">Dermatologist</p>
                  <p className="experience"><strong>Experience:</strong> 10 years</p>
                  <p className="location"><strong>Location:</strong> Skin Solutions Clinic</p>
                  <p className="availability"><strong>Availability:</strong> Wednesday, Saturday</p>
                  <p className="email"><strong>Email:</strong> elizabeth.clark@gmail.com</p>
                  <p className="phone"><strong>Phone:</strong> +91 76548 90765</p>
                  <div className="rating">
                    ⭐️⭐️⭐️⭐️☆  <span>(4.5)</span>
                  </div>
                  <p className="fee"><strong>Consultation Fee:</strong> ₹1000</p>
                  <button className="book-appointment-btn" onClick={() => bookAppointment('Elizabeth Clark')}>Book Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Doctor6;