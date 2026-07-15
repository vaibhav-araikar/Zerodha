import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img src="media/homeHero.png" alt="Home Hero" className="mb-5"></img>
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          moree
        </p>
        <div className="text-center mb-5">
          <button className="signup-button btn btn-primary fs-5">
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
