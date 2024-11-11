import React from 'react'
import "../css/doctor.css"

const Doctor2 = () => {
    function bookAppointment(doctorName) {
        // Redirect to the book appointment page with doctor name as a query parameter
        window.location.href = `book.html?doctor=${encodeURIComponent(doctorName)}`;
    }
    return (
        <div>
          <div className="background-image">
            <div className="doctor-details-page">
              <div className="doctor-profile">
                <img src="../images/doctor2.jpg" alt="Doctor Profile Picture" className="doctor-img" />
                <div className="doctor-info">
                  <h1 className="name">Dr. Mark Thompson</h1>
                  <p className="specialization">Orthopedic Surgeon</p>
                  <p className="experience"><strong>Experience:</strong> 13 years</p>
                  <p className="location"><strong>Location:</strong> MIET Surgery Center</p>
                  <p className="availability"><strong>Availability:</strong> Thursday, Sunday</p>
                  <p className="email"><strong>Email:</strong> mark.thompson@gmail.com</p>
                  <p className="phone"><strong>Phone:</strong> +91 6567894534</p>
                  <div className="rating">
                    ⭐️⭐️⭐️⭐️☆ <span>(4.5)</span>
                  </div>
                  <p className="fee"><strong>Consultation Fee:</strong> ₹800</p>
                  <button className="book-appointment-btn" onClick={() => bookAppointment('Mark Thompson')}>Book Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Doctor2;