import React from "react";
import "./Universe.css";

function Universe() {
  return (
    <div className="container universe-section">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="universe-title">The Zerodha Universe</h2>

          <p className="universe-subtitle">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>

      <div className="row">
        {/* Card 1 */}

        <div className="col-lg-4 col-md-6 universe-card">
          <img src="media/zerodhaFundhouse.png" className="fundhouse" alt="" />

          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        {/* Card 2 */}

        <div className="col-lg-4 col-md-6 universe-card">
          <img src="media/sensibullLogo.svg" className="sensibull" alt="" />

          <p>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        {/* Card 3 */}

        <div className="col-lg-4 col-md-6 universe-card">
          <img src="media/tijori.svg" className="tijori" alt="" />

          <p>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        {/* Card 4 */}

        <div className="col-lg-4 col-md-6 universe-card">
          <img src="media/streakLogo.png" className="streak" alt="" />

          <p>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        {/* Card 5 */}

        <div className="col-lg-4 col-md-6 universe-card">
          <img src="media/smallcaseLogo.png" className="smallcase" alt="" />

          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks and ETFs.
          </p>
        </div>

        {/* Card 6 */}

        <div className="col-lg-4 col-md-6 universe-card">
          <img src="media/dittoLogo.png" className="ditto" alt="" />

          <p>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>

      <div className="text-center">
        <button className="btn universe-btn">Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
