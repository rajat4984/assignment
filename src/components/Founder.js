import React from "react";
import logo from "../images/logo.png";
import founder from "../images/founder-image.jpg";
import Logo from "./Logo";

function Founder() {
  return (
    <div>
      <div className="founder-wrapper">
        <div className="founder-container">
          <p className="founder-heading about-heading">FOUNDER'S MESSAGE</p>
          <img src={founder} alt="founder-image" className="founder-image" />
          <Logo/>
          <h2 className="founder-name">Mr. Jayesh H. Pandya</h2>
          <h4 className="founder-content">
            <em>
              "When a customer buys a home, he is giving up a major chunk of his
              life's saving to do so. It is imperative to give him exactly what
              he looks for in his home"
            </em>
          </h4>
          <div className="founder-terms-container">

          <p className="founder-terms">
            We bring to our clients much wanted human values, integrity, trust
            and an assurance of responsibility all coupled without our expertise
            in construction, engineering & management. Our biggest assets ahve
            always been our small but highly trained team of progessional
            managers and engineers who are backed by a very able team of
            admistrators. We have a clear vision about building on our strengths
            and our achievements while holding dear to us our basic principles.
          </p>
          </div>
        </div>
        <Logo/>
      </div>
    </div>
  );
}

export default Founder;
