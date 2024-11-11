import React from 'react'
import "../css/doctor.css"

const Doctor5 = () => {
    function bookAppointment(doctorName) {
        // Redirect to the book appointment page with doctor name as a query parameter
        window.location.href = `book.html?doctor=${encodeURIComponent(doctorName)}`;
    }
    return (
        <div>
          <div className="background-image">
            <div className="doctor-details-page">
              <div className="doctor-profile">
                <img src="../images/doctor5.avif" alt="Doctor Profile Picture" className="doctor-img" />
                <div className="doctor-info">
                  <h1 className="name">Dr. David Harris</h1>
                  <p className="specialization">Neurologist</p>
                  <p className="experience"><strong>Experience:</strong> 12 years</p>
                  <p className="location"><strong>Location:</strong> NeuroMed Institute</p>
                  <p className="availability"><strong>Availability:</strong> Wednesday, Saturday</p>
                  <p className="email"><strong>Email:</strong> david.harris@gmail.com</p>
                  <p className="phone"><strong>Phone:</strong> +91 98768 54534</p>
                  <div className="rating">
                    ⭐️⭐️⭐️⭐️ <span>(4)</span>
                  </div>
                  <p className="fee"><strong>Consultation Fee:</strong> ₹900</p>
                  <button className="book-appointment-btn" onClick={() => bookAppointment('David Harris')}>Book Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Doctor5;
