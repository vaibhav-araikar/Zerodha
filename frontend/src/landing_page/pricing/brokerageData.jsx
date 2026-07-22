import React from "react";

const brokerageData = {
  equity: {
    headers: [
      "Charges",
      "Equity Delivery",
      "Equity Intraday",
      "F&O - Futures",
      "F&O - Options",
    ],

    rows: [
      [
        "Brokerage",
        <span className="text-success fw-semibold">Zero Brokerage</span>,
        <>0.03% or ₹20/executed order whichever is lower</>,
        <>0.03% or ₹20/executed order whichever is lower</>,
        <>Flat ₹20 per executed order</>,
      ],

      [
        "STT / CTT",
        "0.1% on buy & sell",
        "0.025% on sell side",
        "0.02% on sell side",
        <>
          <ul className="mb-0 ps-3">
            <li>0.125% of intrinsic value on exercised options</li>
            <li>0.1% on sell side (premium)</li>
          </ul>
        </>,
      ],

      [
        "Transaction Charges",
        <>
          NSE: 0.00297%
          <br />
          BSE: 0.00375%
        </>,
        <>
          NSE: 0.00297%
          <br />
          BSE: 0.00375%
        </>,
        <>
          NSE: 0.00173%
          <br />
          BSE: 0
        </>,
        <>
          NSE: 0.03503%
          <br />
          BSE: 0.0325%
        </>,
      ],

      [
        "GST",
        "18% on (Brokerage + SEBI charges + Transaction charges)",
        "18% on (Brokerage + SEBI charges + Transaction charges)",
        "18% on (Brokerage + SEBI charges + Transaction charges)",
        "18% on (Brokerage + SEBI charges + Transaction charges)",
      ],

      [
        "SEBI Charges",
        "₹10 / crore",
        "₹10 / crore",
        "₹10 / crore",
        "₹10 / crore",
      ],

      [
        "Stamp Charges",
        "0.015% or ₹1500/crore on buy side",
        "0.003% or ₹300/crore on buy side",
        "0.002% or ₹200/crore on buy side",
        "0.003% or ₹300/crore on buy side",
      ],
    ],
  },

  currency: {
    headers: ["Charges", "Currency Futures", "Currency Options"],

    rows: [
      [
        "Brokerage",
        <>0.03% or ₹20/executed order whichever is lower</>,
        <>Flat ₹20 per executed order</>,
      ],

      ["STT", "No STT", "No STT"],

      ["Transaction Charges", "NSE: 0.00035%", "NSE: 0.0311%"],

      [
        "GST",
        "18% on (Brokerage + SEBI charges + Transaction charges)",
        "18% on (Brokerage + SEBI charges + Transaction charges)",
      ],

      ["SEBI Charges", "₹10 / crore", "₹10 / crore"],

      ["Stamp Charges", "0.0001% on buy side", "0.0001% on buy side"],
    ],
  },

  commodity: {
    headers: ["Charges", "Commodity Futures", "Commodity Options"],

    rows: [
      [
        "Brokerage",
        <>0.03% or ₹20/executed order whichever is lower</>,
        <>Flat ₹20 per executed order</>,
      ],

      ["CTT", "0.01% on sell side", "0.05% on sell side"],

      ["Transaction Charges", "MCX: 0.0021%", "MCX: 0.0418%"],

      [
        "GST",
        "18% on (Brokerage + SEBI charges + Transaction charges)",
        "18% on (Brokerage + SEBI charges + Transaction charges)",
      ],

      ["SEBI Charges", "₹10 / crore", "₹10 / crore"],

      ["Stamp Charges", "0.002% on buy side", "0.003% on buy side"],
    ],
  },
};

export default brokerageData;
