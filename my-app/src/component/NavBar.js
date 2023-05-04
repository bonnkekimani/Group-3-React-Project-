import React from "react";
import { Link } from "react-router-dom";

const NavBar=()=>{
    console.log("Navbar Page")
  return (
    <div className="nav">
        <ul>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/About" className="nav-link">About</Link></li>
            <li><Link to="/Work" className="nav-link">Work</Link></li>
            <li><Link to="/Services" className="nav-link">Services</Link></li>
            <li><Link to="/Reviews" className="nav-link">Reviews</Link></li>
            <li><Link to="/Contacts" className="nav-link">Contacts</Link></li>
            <li><Link to="/SignUpForm" className="nav-link">SignUpForm</Link></li>
            
        </ul>
    </div>
  );
}

export default NavBar;



