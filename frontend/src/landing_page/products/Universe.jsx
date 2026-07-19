import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center mt-5 p-5">
        <h1 className="fs-3 mb-4">The Zerodha Universe</h1>
        <p className="" style={{ fontSize: "1.1rem" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3">
          <img src="media/zerodhaFundhouse.png" alt="" />
          <p className="text-small text-muted">
            Our asset management venture <br />
            that is creating simple and transparent index <br></br>
            funds to save for your goals
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/sensibullLogo.svg" alt="" />
          <p className="text-small text-muted"></p>
        </div>
        <div className="col-4 p-3">
          <img src="media/tijori.svg" alt="" />
          <p className="text-small text-muted"></p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
