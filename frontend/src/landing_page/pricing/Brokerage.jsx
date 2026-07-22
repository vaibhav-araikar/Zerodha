import React, { useState } from "react";
import "./Brokerage.css";
import brokerageData from "./brokerageData";

function Brokerage() {
  const [activeTab, setActiveTab] = useState("equity");

  const currentData = brokerageData[activeTab];

  return (
    <div className="container brokerage-section">
      {/* ================= Brokerage Tabs ================= */}

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

      {/* ================= Brokerage Table ================= */}

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

      {/* ================= Brokerage Calculator ================= */}

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

      {/* ================= Account Opening ================= */}

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

      {/* ================= Demat AMC ================= */}

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
          <p className="description">
            For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless
            of the value of holdings, charged quarterly.
          </p>

          <p className="description">
            To learn more about BSDA,
            <a
              href="https://support.zerodha.com/"
              target="_blank"
              rel="noreferrer"
              className="amc-links"
            >
              {" "}
              click here
            </a>
            . To learn more about AMC,
            <a
              href="https://support.zerodha.com/"
              target="_blank"
              rel="noreferrer"
              className="amc-links"
            >
              {" "}
              click here
            </a>
            .
          </p>

          <p className="description">*Resident individual accounts only.</p>
        </div>
      </section>

      {/* ================= Optional Services ================= */}

      <section className="pricing-section">
        <h2>Charges for optional value added services</h2>

        <table className="pricing-table optional-table">
          <thead>
            <tr>
              <th>Service</th>

              <th>Billing frequency</th>

              <th>Charges</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Tickertape</td>

              <td>Monthly / Quarterly / Annual</td>

              <td>
                Free: ₹0 <br />
                Pro: ₹249 / ₹699 / ₹2399
              </td>
            </tr>

            <tr>
              <td>Smallcase</td>

              <td>Per transaction</td>

              <td>
                Buy & Invest More: ₹100 <br />
                SIP: ₹10
              </td>
            </tr>

            <tr>
              <td>Kite Connect</td>

              <td>Monthly</td>

              <td>
                Connect: ₹500 <br />
                Historical API: ₹500
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ================= Charges Explained ================= */}

      <section className="pricing-section">
        <h2>Charges explained</h2>

        <div className="charges-grid">
          <div className="charges-column">
            <div className="charge-card">
              <h4>Securities/Commodities transaction tax</h4>

              <p>
                Tax levied by the Government of India on the value of securities
                or commodities transacted through recognized stock exchanges.
              </p>
            </div>

            <div className="charge-card">
              <h4>Transaction/Turnover Charges</h4>

              <p>
                Charged by NSE, BSE and MCX on the total turnover of your
                trades.
              </p>
            </div>

            <div className="charge-card">
              <h4>GST</h4>

              <p>
                Goods & Services Tax of 18% is applicable on brokerage and
                transaction charges.
              </p>
            </div>
          </div>

          <div className="charges-column">
            <div className="charge-card">
              <h4>SEBI Charges</h4>

              <p>
                Regulatory fee charged by SEBI on every trade executed on Indian
                exchanges.
              </p>
            </div>

            <div className="charge-card">
              <h4>Stamp Duty</h4>

              <p>
                State government tax applicable only on the buy side of equity,
                derivatives and commodity transactions.
              </p>
            </div>

            <div className="charge-card">
              <h4>DP (Depository Participant) Charges</h4>

              <p>
                Charged whenever shares are sold from your Demat account.
                Applicable once per ISIN per day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Brokerage;
