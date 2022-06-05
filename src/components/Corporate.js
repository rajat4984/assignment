import React from "react";
import logo from "../images/logo.png";
import corporateImage from "../images/corporate-image.jpg";
import Logo from "./Logo";

function Corporate() {
  return (
    <div>
      <div className="mission-wrapper corporate-wrapper">
        <div className="mission-header">
          <p className="about-heading">CORPORATE SOCIAL RESPONSIBILITY</p>
          <Logo/>
        </div>
        <div className="corporate-flex-container">
          <img src={corporateImage} alt="" className="mission-image" />

          <div className="mission-grid">
            <div className="mission-grid-item">
              <h3 className="mission-grid-heading">
                Education for the under-privileged
              </h3>
              <p>
                We believe that out future lies in the holistic educational
                foundation of the youth and we have nurtured that cause by
                providing the necessary books and monetary support to the
                under-privileged children of Mumbai & also at several villages
                in Gujarat. As the Trustees of the H A Desai Boarding School in
                Matunga, Mumbai, we have been providing living and hospitality
                services to the academically bright students from the weaker
                monetary sections of the society.
              </p>
            </div>
            <div className="mission-grid-item">
              <h3 className="mission-grid-heading">Support for rural Farmers</h3>
            </div>
            <div className="mission-grid-item">
              <h3 className="mission-grid-heading">
                Spiritual
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Corporate;
