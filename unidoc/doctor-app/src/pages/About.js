import React from 'react'
import "../css/aboutus.css"

const About = () => {
    // Toggle the "open" class to show/hide the menu
    function toggleMenu() {
        document.querySelector('.menu-container').classList.toggle('open');
    }
    const text = "Your Health, Your Schedule, Your Choice";
    let index = 0;

    function typeEffect() {
        document.getElementById("h2").innerHTML = text.substring(0, index);
        index++;
        if (index <= text.length) {
            setTimeout(typeEffect, 100); // Adjust the speed by changing 100ms
        }
    }

    typeEffect();
    return (
        <div>
            <div className="aboutus">
                <div className="logo-text-container">
                    <img src="../images/logo UNIDOC.webp" alt="Unidoc logo" className="logo" />
                    <span className="text">Unidoc</span>
                </div>
                <div className="menu-container" onClick={() => toggleMenu()}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="nav-menu">
                    <a href="home.html">Home</a>
                    <a href="aboutus.html">About</a>
                    <a href="aboutus.html#contact">Contact</a>
                </div>
                <h2 id="h2">Your Health, Your Schedule, Your Choice</h2>
                <h1 className="goal">Our Goal</h1>
                <p className="mission">
                    Our mission is to simplify healthcare access by providing a seamless, user-friendly platform for patients to connect with trusted healthcare professionals. We aim to empower individuals to take control of their health by offering convenient, timely, and reliable appointment booking services, ensuring that quality care is always within reach.
                </p>
                <div className="main">
                    <p className="well">
                        Welcome to UniDoc, a comprehensive healthcare platform designed to simplify the way you connect with medical professionals. We believe that quality healthcare should be accessible to everyone, and we’re committed to providing a seamless experience that empowers patients to take control of their health journey. <br /><br />
                        Our platform allows you to find trusted doctors, book appointments with ease. Founded with a vision to transform healthcare access, UniDoc provides access to medical professionals across various specialties, including general physicians, gynecologists, dermatologists, and pediatricians. With us, you can easily search for doctors based on their expertise, location, patient reviews, and availability. The platform is especially valuable for those seeking in-clinic consultations or specialized care. <br /><br />
                        UniDoc's integrated system supports users by offering health-related articles, keeping appointment records.
                    </p>
                </div>
                <div className="whywe">
                    <p>
                        <span className="why">Why</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="we">We’re the Right</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="fit">Fit for You ?</span>
                    </p>
                </div>
                <ul className="ul">
                    <li><strong>Easy Scheduling:</strong> Book and manage appointments with just a few clicks.</li>
                    <li><strong>Verified Doctors:</strong> Access a network of certified, experienced healthcare providers.</li>
                    <li><strong>Confidential:</strong> Your privacy is our priority. We comply with the highest standards of data security.</li>
                    <li><strong>Option:</strong> Receive the care you need wherever you are.</li>
                    <li><strong>Patient Support:</strong> Our support team is here to help you every step of the way.</li>
                </ul>
                <hr className="line" />
                <div className="section">
                    <div className="left">
                        <h2 className="core">Core <span className="strikethrough">values</span> behaviors</h2>
                        <p>We see every day as an opportunity to turn values into action through our 4 core behaviors.</p>
                    </div>
                    <div className="right">
                        <ol>
                            <li>Obsess over customer experience</li>
                            <li>Move with heartfelt urgency</li>
                            <li>Say the hard thing with care</li>
                            <li>Make your mark</li>
                        </ol>
                    </div>
                </div>
                <hr className="line" />
                <span className="last">
                    <p>
                        At UniDoc, our mission is to ensure that healthcare is within reach for all. By providing a platform that’s easy to use, trustworthy, and tailored to your healthcare needs, we’re changing the way patients and doctors connect.<br />
                        Join us on the path to a healthier, more connected future.
                    </p>
                </span>
                <hr className="line" />
                <div className="call" id="contact">
                    <h2 className="contactus">Contact Us</h2>
                    <p>For inquiries or support, feel free to reach out:</p>
                    <ul>
                        <li><span>&#9993;</span> Email: <a href="mailto:support@UniDoc.com">support@UniDoc.com</a></li>
                        <li><span>&#x260E;</span> Phone: +91 89564 01299</li>
                        <li><span>&#x1F4CD;</span> Address: 123 Health St, Wellness City, 10001</li>
                    </ul>
                    <p>Our support team is available Monday to Friday from 9 AM to 6 PM.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
