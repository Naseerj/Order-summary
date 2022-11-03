import React from "react";
import music from "./images/icon-music.svg";
import "./Section3.css";

const Section3 = () => {
  return (
    <div className="section3">
      <div className="parentdiv">
        <div>
        <img className="img1" src={music} alt="" />
        </div>
        <div className="headerdiv">
          <h5>Annual plan</h5>
          <p>$59.9/year</p>
        </div>
        <div>
        <div className="change">
        <a href="">change</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
