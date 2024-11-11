import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';  
import Image from "../images/logo UNIDOC.webp"; // Ensure the path is correct

function Navbar() { 
  const [active, setActive] = useState('nav_menu'); 
  const [toggleIcon, setToggleIcon] = useState("nav_toggler"); 

  // Function to toggle navigation menu visibility and the icon style
  const navToggle = () => { 
    setActive(active === 'nav_menu' ? 'nav_menu nav_active' : 'nav_menu');
    setToggleIcon(toggleIcon === 'nav_toggler' ? 'nav_toggler toggle' : 'nav_toggler');
  }; 

  return ( 
    <nav className="nav-bar">
      <ul className={active} style={{ display: 'flex', flexDirection: "row", listStyleType: "none", gap: "30px" }}>
        <li> 
          <Link to="/home">
            <img src={Image} alt="UNIDOC Logo" /> {/* Added alt for accessibility */}
          </Link> 
        </li> 
        <li> 
          <Link to="/" className="nav-link" onMouseEnter={() => console.log("Hovered")} onClick={() => console.log("Clicked!")}> 
            Home 
          </Link> 
        </li> 
        <li> 
          <Link to="/Login" className="nav-link"> 
            Login
          </Link> 
        </li>   
        <li> 
          <Link to="/About" className="nav-link"> 
            About 
          </Link> 
        </li> 
        <li> 
          <Link to="/SignUp" className="nav-link"> 
            SignUp
          </Link> 
        </li>   
        <li> 
          <Link to="/Resetpass" className="nav-link"> 
            Resetpass
          </Link> 
        </li>   
        <li> 
          <Link to="/Doctor1" className="nav-link"> 
            Doctor1
          </Link> 
        </li>  
        <li> 
          <Link to="/Doctor2" className="nav-link"> 
            Doctor2
          </Link> 
        </li>    
        <li> 
          <Link to="/Doctor3" className="nav-link"> 
            Doctor3
          </Link> 
        </li>  
        <li> 
          <Link to="/Doctor4" className="nav-link"> 
            Doctor4
          </Link> 
        </li> 
        <li> 
          <Link to="/Doctor5" className="nav-link"> 
            Doctor5
          </Link> 
        </li>     
        <li> 
          <Link to="/Doctor6" className="nav-link"> {/* Corrected typo here */}
            Doctor6
          </Link> 
        </li>   
        <li> 
          <Link to="/Doctor7" className="nav-link"> 
            Doctor7
          </Link> 
        </li> 
        <li> 
          <Link to="/Bookappointment" className="nav-link"> 
            Book Appointment
          </Link> 
        </li>  
        <li> 
          <Link to="/Payment" className="nav-link"> 
            Payment
          </Link> 
        </li>       
      </ul> 
      
      {/* Toggle Icon for Mobile Menu */}
      <div onClick={navToggle} className={toggleIcon}> 
        <div className='line1' /> 
        <div className='line2' /> 
        <div className='line3' /> 
      </div> 
    </nav> 
  ); 
}

export default Navbar;
