import React from "react";

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-4">
          <h2 className="mb-4">Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="">
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col-6 border p-5">
              <h2 className="mb-3">{"\u20B9"}0</h2>
              <p>
                Free equity delivery and<br></br> direct mutual funds
              </p>
            </div>
            <div className="col-6 border p-5">
              <h2 className="mb-3">{"\u20B9"}20</h2>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
