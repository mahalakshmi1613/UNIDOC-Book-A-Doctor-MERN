import React from 'react'
import "../css/doctor.css"

const Doctor3 = () => {

    function bookAppointment(doctorName) {
        // Redirect to the book appointment page with doctor name as a query parameter
        window.location.href = `book.html?doctor=${encodeURIComponent(doctorName)}`;
    }
    return (
        <div>
          <div className="background-image">
            <div className="doctor-details-page">
              <div className="doctor-profile">
                <img src="../images/doctor3.jpg" alt="Doctor Profile Picture" className="doctor-img" />
                <div className="doctor-info">
                  <h1 className="name">Dr. James Walker</h1>
                  <p className="specialization">General Practitioner (GP)</p>
                  <p className="experience"><strong>Experience:</strong> 17 years</p>
                  <p className="location"><strong>Location:</strong> Family Health center</p>
                  <p className="availability"><strong>Availability:</strong> Tuesday, Thursday, Saturday</p>
                  <p className="email"><strong>Email:</strong> james.walker@gmail.com</p>
                  <p className="phone"><strong>Phone:</strong> +91 65798 03456</p>
                  <div className="rating">
                    ⭐️⭐️⭐️⭐️⭐️ <span>(5.0)</span>
                  </div>
                  <p className="fee"><strong>Consultation Fee:</strong> ₹1500</p>
                  <button className="book-appointment-btn" onClick={() => bookAppointment('James Walker')}>Book Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};
 
export default Doctor3;