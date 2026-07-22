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
        <h2 className="fs-4">Charges explained</h2>

        <div className="charges-grid">
          <div className="charges-column">
            <div className="charge-card">
              <h4>Securities/Commodities transaction tax</h4>
              <p>
                Tax by the government when transacting on the exchanges. Charged
                as above on both buy and sell sides when trading equity
                delivery. Charged only on selling side when trading intraday or
                on F&O.
              </p>
              <p>
                When trading at Zerodha, STT/CTT can be a lot more than the
                brokerage we charge. Important to keep a tab.
              </p>
            </div>

            <div className="charge-card">
              <h4>Transaction/Turnover Charges</h4>
              <p>
                Charged by exchanges (NSE, BSE, MCX) on the value of your
                transactions.
              </p>
              <p>
                BSE has revised transaction charges in XC, XD, XT, Z and ZP
                groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups
                have been merged into a new group X w.e.f 01.12.2017)
              </p>
              <p>
                BSE has revised transaction charges in SS and ST groups to
                ₹1,00,000 per crore of gross turnover.
              </p>
              <p>
                BSE has revised transaction charges for group A, B and other non
                exclusive scrips (non-exclusive scrips from group E, F, FC, G,
                GC, W, T) at ₹375 per crore of turnover on flat rate basis
                w.e.f. December 1, 2022.
              </p>
              <p>
                BSE has revised transaction charges in M, MT, TS and MS groups
                to ₹275 per crore of gross turnover.
              </p>
            </div>

            <div className="charge-card">
              <h4>Call & trade</h4>
              <p>
                Additional charges of ₹50 per order for orders placed through a
                dealer at Zerodha including auto square off orders.
              </p>
            </div>

            <div className="charge-card">
              <h4>Stamp charges</h4>
              <p>
                Stamp charges by the Government of India as per the Indian Stamp
                Act of 1899 for transacting in instruments on the stock
                exchanges and depositories.
              </p>
            </div>

            <div className="charge-card">
              <h4>NRI brokerage charges</h4>
              <ul>
                <li>
                  For a non-PIS account, 0.5% or ₹50 per executed order for
                  equity and F&O (whichever is lower).
                </li>
                <li>
                  For a PIS account, 0.5% or ₹200 per executed order for equity
                  (whichever is lower).
                </li>
                <li>
                  ₹500 + GST as yearly account maintenance charges (AMC)
                  charges.
                </li>
              </ul>
            </div>

            <div className="charge-card">
              <h4>Account with debit balance</h4>
              <p>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </p>
            </div>

            <div className="charge-card">
              <h4>
                Charges for Investor's Protection Fund Trust (IPFT) by NSE
              </h4>
              <ul>
                <li>
                  Equity and Futures - ₹0.01 per crore + GST of the traded
                  value.
                </li>
                <li>
                  Options - ₹0.01 per crore + GST traded value (premium value).
                </li>
                <li>
                  Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                  per lakh + GST of premium for Options.
                </li>
              </ul>
            </div>

            <div className="charge-card">
              <h4>Margin Trading Facility (MTF)</h4>
              <ul>
                <li>
                  MTF Interest: 0.04% per day (₹40 per lakh) on the funded
                  amount. The interest is applied from T+1 day until the day MTF
                  stocks are sold.
                </li>
                <li>
                  MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                  lower.
                </li>
                <li>
                  MTF pledge charge: ₹15 + GST per pledge and unpledge request
                  per ISIN.
                </li>
              </ul>
            </div>
          </div>

          <div className="charges-column">
            <div className="charge-card">
              <h4>GST</h4>
              <p>
                Tax levied by the government on the services rendered. 18% of (
                brokerage + SEBI charges + transaction charges)
              </p>
            </div>

            <div className="charge-card">
              <h4>SEBI Charges</h4>
              <p>
                Charged at ₹10 per crore + GST by Securities and Exchange Board
                of India for regulating the markets.
              </p>
            </div>

            <div className="charge-card">
              <h4>DP (Depository Participant) Charges</h4>
              <p>
                ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST)
                is charged on the trading account ledger when stocks are sold,
                irrespective of quantity.
              </p>
              <p>
                Female demat account holders (as first holder) will enjoy a
                discount of ₹0.25 per transaction on the CDSL fee.
              </p>
              <p>
                Debit transactions of mutual funds & bonds get an additional
                discount of ₹0.25 on the CDSL fee.
              </p>
            </div>

            <div className="charge-card">
              <h4>DP (Depository Participant) Charges</h4>
              <p>
                Charged whenever shares are sold from your Demat account.
                Applicable once per ISIN per day.
              </p>
            </div>

            <div className="charge-card">
              <h4>Pledging charges</h4>
              <p>₹30 + GST per pledge request per ISIN.</p>
            </div>

            <div className="charge-card">
              <h4>AMC (Account maintenance charges)</h4>
              <p>
                Free for the first year on all new resident individual accounts.
              </p>
              <p>
                For BSDA demat account: Zero charges if the holding value is
                less than ₹4,00,000. To learn more about BSDA, Click here
              </p>
              <p>
                For non-BSDA demat accounts: ₹300/year + 18% GST charged
                quarterly (90 days). To learn more about AMC, Click here
              </p>
            </div>

            <div className="charge-card">
              <h4>Corporate action order charges</h4>
              <p>
                ₹20 plus GST will be charged for OFS / buyback / takeover /
                delisting orders placed through Console.
              </p>
            </div>

            <div className="charge-card">
              <h4>Off-market transfer charges</h4>
              <p>₹25 per transaction.</p>
            </div>

            <div className="charge-card">
              <h4>Physical CMR request</h4>
              <p>
                First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
                for subsequent requests.
              </p>
            </div>

            <div className="charge-card">
              <h4>Payment gateway charges</h4>
              <p>₹9 + GST (Not levied on transfers done via UPI)</p>
            </div>

            <div className="charge-card">
              <h4>Delayed Payment Charges</h4>
              <p>
                Interest is levied at 18% a year or 0.05% per day on the debit
                balance in your trading account. Learn more.
              </p>
            </div>

            <div className="charge-card">
              <h4>Trading using 3-in-1 account with block functionality</h4>
              <ul>
                <li>
                  <b>Delivery & MTF Brokerage</b>: 0.5% per executed order.
                </li>
                <li>
                  <b>Intraday Brokerage</b>: 0.05% per executed order.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <h4 className="mt-4 mb-3" style={{ fontSize: "1rem" }}>
        Disclaimer
      </h4>
      <p className="mb-5 pb-5" style={{ fontSize: ".75rem" }}>
        For Delivery based trades, a minimum of ₹0.01 will be charged per
        contract note. Clients who opt to receive physical contract notes will
        be charged ₹20 per contract note plus courier charges. Brokerage will
        not exceed the rates specified by SEBI and the exchanges. All statutory
        and regulatory charges will be levied at actuals. Brokerage is also
        charged on expired, exercised, and assigned options contracts. Free
        investments are available only for our retail individual clients.
        Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
        (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
        contract value will be charged for contracts where physical delivery
        happens. For netted off positions in physically settled contracts, a
        brokerage of 0.1% will be charged.
      </p>
    </div>
  );
}

export default Brokerage;
