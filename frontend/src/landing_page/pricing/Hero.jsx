import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 text-center  border-bottom">
        <h1 className="fs-3 pt-5 mt-1">Charges</h1>
        <p className="fs-5 charges-desc">List of all charges and taxes</p>
      </div>

      <div className="row">
        <div className="col-4"></div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default Hero;
