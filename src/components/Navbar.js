import React from "react";
import logo from "../images/logo.png"

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" className="brand " />
        <div className="link">ABOUT US</div>
        <div className="link">PROJECTS</div>
        <div className="link">DIVERSIFICATION</div>
        <div className="link">OUR PROCESS</div>
        <div className="link">TESTIMONALS</div>
        <div className="link">CAREERS</div>
        <div className="link">CONTACT US</div>
      </nav>
    </>
  );
}

export default Navbar;
