import React from "react";
import groupImage1 from "../images/group-image-1.jpg";
import groupImage2 from "../images/group-image-2.jpg";
import groupImage3 from "../images/group-image-3.jpg";
import logo from "../images/logo.png";
import Logo from "./Logo";

function Groups() {
  return (
    <div>
      <div className="groups-wrapper">
        <div className="groups-container">
          <p className="about-heading">GROUP COMPANIES</p>
          <Logo/>
          <div className="groups-grid-container">
            <div className="grid-item">
              <img src={groupImage1} alt="mountains-image-1" />
              <h2>Agriculture</h2>
            </div>
            <div className="grid-item">
              <img src={groupImage2} alt="mountains-image-2" />
              <h2>Fuel</h2>
            </div>
            <div className="grid-item">
              <img src={groupImage3} alt="mountains-image-3" />
              <h2>Food</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups;
