import React from "react";
import logo from "../images/logo.png";
import missionImage from "../images/mission-image.jpg";
import Logo from "./Logo";

function Mission() {
  return (
    <div>
      <div className="mission-wrapper">
        <div className="mission-header">
          <p className="about-heading">Mission</p>
          <Logo/>
        </div>
        <div className="mission-flex-container">
          <img src={missionImage} alt="" className="mission-image" />

          <div className="mission-grid">
            <div className="mission-grid-item">
              <h3 className="mission-grid-heading">Personalised</h3>
              <p>
                Our core idealogy is to provide personalised <br /> homes to meet the
                very specifice needs of residents.
              </p>
            </div>
            <div className="mission-grid-item">
              <h3 className="mission-grid-heading">Committed</h3>
            </div>
            <div className="mission-grid-item">
              <h3 className="mission-grid-heading">
                Quality & Service Oriented
              </h3>
            </div>
            <div className="mission-grid-item">
              <h3 className="mission-grid-heading">Timely</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
