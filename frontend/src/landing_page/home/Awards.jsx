import React from "react";

function Awards() {
  return (
    <div className="container p-5 mb-10">
      <div className="row">
        <div className="col-6">
          <img
            src="media/largestBroker.svg"
            alt="Award 1"
            className="mb-3"
          ></img>
        </div>
        <div className="col-6 mt-2">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ millions Zerodha clients contribute to over 50% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
            <img
              src="media/pressLogos.png"
              alt="Press Logos"
              className="img-fluid mt-4"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
