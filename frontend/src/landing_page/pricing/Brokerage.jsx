import React, { useState } from "react";
import "./Brokerage.css";
import brokerageData from "./brokerageData";

function Brokerage() {
  const [activeTab, setActiveTab] = useState("equity");

  const currentData = brokerageData[activeTab];

  return (
    <div className="container brokerage-section">
      {/* Tabs */}
      <div className="brokerage-tabs text-center">
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
      {/* Table */}
      <div className="table-responsive mt-4 border">
        <table className="table brokerage-table">
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
      <p className="brokerage-calculator text-center">
        <a
          href="https://zerodha.com/brokerage-calculator/"
          target="_blank"
          rel="noreferrer"
          className="brokerage-link"
        >
          Calculate your costs upfront{" "}
        </a>{" "}
        using our brokerage calculator
      </p>
      <div className="account-opening-section">
        <h2 className="account-heading">Charges for account opening</h2>

        <table className="account-table">
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
      </div>

      {/* Demat AMC section = Annual Maintenance Charge  */}
      <div className="demat-amc-section mt-5 pt-4">
        <h2 className="mb-5">Demat AMC (Annual Maintenance Charge)</h2>
        <p className="mb-5">Free for first year*</p>
        <p>From second year onwards, for BSDA accounts:</p>
        <table className="account-table">
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
      </div>
    </div>
  );
}

export default Brokerage;
