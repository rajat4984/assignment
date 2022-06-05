import React from "react";
import logo from "../images/logo.png";
import aboutUsHeader from "../images/about-us.jpg";
import Card from "./Card";
import Logo from "./Logo";

function AboutUs() {
  return (
    <>
      <div className="about-us-container ">
        <div className="about-us-header">
          <p className="about-heading">ABOUT US</p>
          <Logo/>
        </div>
        <img src={aboutUsHeader} alt="" className="about-us-header-img" />
        <div className="about-us-info">
          <h3 className="about-us-info-heading">
            <em>
              we endeavour to build home which make it's residents happy and
              proud of <br /> their address. Residents are at heart of
              everything we do, we build <br /> home to live in,not houses to
              stay
            </em>
          </h3>
          <Logo/>
        </div>
        <div className="about-us-grid">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
