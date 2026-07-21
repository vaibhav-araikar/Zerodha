import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 text-center  border-bottom">
        <h1 className="fs-3 pt-4 mt-1">Charges</h1>
        <p className="fs-5 pb-5 charges-desc">List of all charges and taxes</p>
      </div>

      <div className="row text-center p-5 currency-desc">
        <div className="col-4">
          <img src="media/pricingEquity.svg" className="currency-image"></img>
          <h2 className="mb-4">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media/intradayTrades.svg" className="currency-image"></img>
          <h2 className="mb-4">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/pricingMF.svg" className="currency-image"></img>
          <h2 className="mb-4">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
