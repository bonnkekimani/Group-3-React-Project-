import React from "react";
import { Link } from "react-router-dom";

const NavBar=()=>{
    console.log("Navbar Page")
  return (
    <div className="nav">
        <ul>
            <li><Link to="/" className="nav-link">About</Link></li>
            <li><Link to="/Work" className="nav-link">Work</Link></li>
            <li><Link to="/Gallery" className="nav-link">Gallery</Link></li>
            <li><Link to="/Reviews" className="nav-link">Reviews</Link></li>
        </ul>
    </div>
  );
}

export default NavBar;