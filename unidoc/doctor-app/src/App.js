import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from '../src/images/logo UNIDOC.webp'; // Assuming this is correct
import Home from "./pages/Home";
import About from "./pages/About";
import Bookappointment from "./pages/Bookappointment";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Resetpass from "./pages/Resetpass";
import Doctor1 from "./pages/Doctor1";
import Doctor2 from "./pages/Doctor2";
import Doctor3 from "./pages/Doctor3";
import Doctor4 from "./pages/Doctor4";
import Doctor5 from "./pages/Doctor5";
import Doctor6 from "./pages/Doctor6";
import Doctor7 from "./pages/Doctor7";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <BrowserRouter>
        <div>
          {/* Navbar should be present for all pages */}
          <Navbar />
          
          {/* Define Routes for all your pages */}
          <Routes>
          <Route path="/Navbar" element={<Navbar />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Resetpass" element={<Resetpass />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/About" element={<About />} />
            <Route path="/Doctor1" element={<Doctor1 />} />
            <Route path="/Doctor2" element={<Doctor2 />} />
            <Route path="/Doctor3" element={<Doctor3 />} />
            <Route path="/Doctor4" element={<Doctor4 />} />
            <Route path="/Doctor5" element={<Doctor5 />} />
            <Route path="/Doctor6" element={<Doctor6 />} />
            <Route path="/Doctor7" element={<Doctor7 />} />
            <Route path="/Bookappointment" element={<Bookappointment />} />
            <Route path="/Payment" element={<Payment />} />
            
            {/* You can also set a default route for the homepage */}
            <Route path="/" element={<Home />} />  {/* Home page as the default route */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
