import React from "react";
import logo from "../images/logo.png";

function Footer() {
  return (
    <div>
      <div className="footer-wrapper">
        <footer>
          <div className="footer-container">
            <img src={logo} alt="logo" className="about-us-logo footer-logo" />
            <div className="footer-grid-container">
              <div className="footer-grid-item">
                <h5>Quick Links</h5>
                <p>Contact Us</p>
                <p>About Us</p>
                <p>Testimonial</p>
                <p>Gallery</p>
                <p>Site Map</p>
              </div>
              <div className="footer-grid-item">
                <h5>Flats in Mumbai</h5>
                <p>1BHK Andheri West</p>
                <p>2BHk Andheri West</p>
                <p>3BHk Andheri West</p>
                <p>1BHk Gorgaon East</p>
                <p>2BHk Goregoan East</p>
              </div>
              <div className="footer-grid-item">
                <h5>Projects in Mumbai</h5>
                <p>Ongoing</p>
                <p>Upcoming</p>
                <p>Completed</p>
                <p>Hetali Blessing</p>
                <p>Hetali Anuchhaya</p>
              </div>
            </div>
          </div>
          <img src={logo} alt="logo" className="about-us-logo footer-second-logo" />
          <h6 className="footer-text">copyright © Hetali EnterPrises - All rights reserved</h6>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
