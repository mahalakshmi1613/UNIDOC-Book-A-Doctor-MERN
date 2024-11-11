import React, { useState } from 'react';
import "../css/book.css";

const BookAppointment = () => {
    // Initialize form data state
    const [formData, setFormData] = useState({
        patientName: '',
        email: '',
        phone: '',
        appointmentDate: '',
        appointmentTime: ''
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value, // Dynamically set the field value in the state
        });
    };

    // Confirm and redirect logic
    const confirmAndRedirect = () => {
        // Get values from the form
        const { patientName, email, phone, appointmentDate, appointmentTime } = formData;

        // Show the confirmation dialog for booking
        const confirmBooking = window.confirm(`Confirm appointment for ${patientName} on ${appointmentDate} at ${appointmentTime}?`);

        // Check if the user confirmed the booking
        if (confirmBooking) {
            // Show confirmation dialog for the code sent to the email
            const confirmation = window.confirm(`Confirmation code sent to ${email} and ${phone}. Do you want to proceed?`);

            // If the user confirms the second step (confirmation code sent)
            if (confirmation) {
                alert('Appointment confirmed and booking complete!');
                // Optionally, redirect to a confirmation page
                // window.location.href = '/confirmation';  // Example redirect
            } else {
                alert('Appointment not confirmed. Please try again.');
            }
        } else {
            alert('Appointment booking canceled.');
        }
    };

    return (
        <div>
            <div className="container">
                <h1>Book an Appointment</h1>
                <form id="appointment-form">
                    <label htmlFor="patient-name">Patient name</label>
                    <input
                        type="text"
                        id="patient-name"
                        name="patientName" // Match the name with the state field
                        value={formData.patientName}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="appointment-date">Select Date</label>
                    <input
                        type="date"
                        id="appointment-date"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="appointment-time">Select Time</label>
                    <input
                        type="time"
                        id="appointment-time"
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleChange}
                        required
                    />

                    <button type="button" onClick={confirmAndRedirect}>Book Appointment</button>
                </form>
            </div>
        </div>
    );
};

export default BookAppointment;
