import React, { useState } from "react";
import "./Brokerage.css";
import brokerageData from "./brokerageData";

function Brokerage() {
  const [activeTab, setActiveTab] = useState("equity");

  const currentData = brokerageData[activeTab];

  return (
    <div className="container brokerage-section">
      {/* Tabs */}

      <div className="brokerage-tabs">
        <button
          className={activeTab === "equity" ? "active" : ""}
          onClick={() => setActiveTab("equity")}
        >
          Equity
        </button>

        <button
          className={activeTab === "currency" ? "active" : ""}
          onClick={() => setActiveTab("currency")}
        >
          Currency
        </button>

        <button
          className={activeTab === "commodity" ? "active" : ""}
          onClick={() => setActiveTab("commodity")}
        >
          Commodity
        </button>
      </div>

      {/* Brokerage Table */}

      <div className="table-responsive">
        <table className="brokerage-table">
          <thead>
            <tr>
              {currentData.headers.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentData.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Brokerage Calculator */}

      <p className="brokerage-calculator">
        <a
          href="https://zerodha.com/brokerage-calculator/"
          target="_blank"
          rel="noreferrer"
          className="brokerage-link"
        >
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator.
      </p>

      {/* Account Opening */}

      <section className="pricing-section">
        <h2>Charges for account opening</h2>

        <table className="pricing-table">
          <thead>
            <tr>
              <th>Type of account</th>

              <th>Charges</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Individual account</td>

              <td>
                <span className="free-badge">FREE</span>
              </td>
            </tr>

            <tr>
              <td>Minor account</td>

              <td>
                <span className="free-badge">FREE</span>
              </td>
            </tr>

            <tr>
              <td>NRI account</td>

              <td>₹500</td>
            </tr>

            <tr>
              <td>HUF account</td>

              <td>
                <span className="free-badge">FREE</span> (online) / ₹500
                (offline)
              </td>
            </tr>

            <tr>
              <td>Partnership, LLP, and Corporate accounts (offline only)</td>

              <td>₹500</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Demat AMC */}

      <section className="pricing-section">
        <h2>Demat AMC (Annual Maintenance Charge)</h2>

        <div className="info-box">Free for first year*</div>

        <p className="section-text">
          From second year onwards, for BSDA accounts:
        </p>

        <table className="pricing-table">
          <thead>
            <tr>
              <th>Value of holdings</th>

              <th>AMC</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Up to ₹4 lakh</td>

              <td>
                <span className="free-badge">FREE</span>
              </td>
            </tr>

            <tr>
              <td>₹4 lakh – ₹10 lakh</td>

              <td>₹100 per year + 18% GST, charged quarterly</td>
            </tr>

            <tr>
              <td>Above ₹10 lakh</td>

              <td>₹300 per year + 18% GST, charged quarterly</td>
            </tr>
          </tbody>
        </table>

        <div className="DMC-other-info">
          <p className="mt-3 description">
            For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless
            of holdings value, charged quarterly.
          </p>
          <p className="description">
            To learn more about BSDA,{" "}
            <a href="" className="amc-links">
              click here
            </a>
            . To learn more about AMC,{" "}
            <a href="" className="amc-links">
              click here
            </a>
            .
          </p>
          <p className="description">*Resident individual accounts only.</p>
        </div>
      </section>

      {/* Demat AMC */}

      <section className="pricing-section">
        <h2>Charges for optional value added services</h2>

        <table className="pricing-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Billing Frequency</th>
              <th>Charges</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Quarterly / Annual</td>
              <td>Free: 0 | Pro: 249/699/2399</td>
            </tr>

            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>

            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 500 | Personal: Free</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Brokerage;
