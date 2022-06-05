import React from "react";
import blueIcon from "../images/blue-icon.png";

function Card({ text }) {
  return (
    <>
      <div className="card">
        <img src={blueIcon} alt="blue-icon" className="card-image" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolorum
          at magni architecto velit sunt corrupti doloremque pariatur eligendi?
          Iusto excepturi nisi minus id, tempora soluta officia modi! At,
          laborum.
        </p>
      </div>
    </>
  );
}

export default Card;
