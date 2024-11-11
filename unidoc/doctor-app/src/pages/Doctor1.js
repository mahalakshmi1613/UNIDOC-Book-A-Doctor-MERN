import React from 'react'
import "../css/doctor.css"

const Doctor1 = () => {

    function bookAppointment(doctorName) {
        // Redirect to the book appointment page with doctor name as a query parameter
        window.location.href = `book.html?doctor=${encodeURIComponent(doctorName)}`;
    }
    return (
        <div>
          <div className="background-image">
            <div className="doctor-details-page">
              <div className="doctor-profile">
                <img src="../images/doctor1.jpg" alt="Doctor Profile Picture" className="doctor-img" />
                <div className="doctor-info">
                  <h1 className="name">Dr. Jane Smith</h1>
                  <p className="specialization">Cardiologist</p>
                  <p className="experience"><strong>Experience:</strong> 15 years</p>
                  <p className="location"><strong>Location:</strong> City Hospital</p>
                  <p className="availability"><strong>Availability:</strong> Wednesday, Friday, Saturday</p>
                  <p className="email"><strong>Email:</strong> dr.jane.smith@gmail.com</p>
                  <p className="phone"><strong>Phone:</strong> +91 98765 43210</p>
                  <div className="rating">
                    ⭐️⭐️⭐️⭐️⭐️ <span>(5)</span>
                  </div>
                  <p className="fee"><strong>Consultation Fee:</strong> ₹1500</p>
                  <button className="book-appointment-btn" onClick={() => bookAppointment('Jane Smith')}>Book Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Doctor1;