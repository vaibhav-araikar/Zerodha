const brokerageData = {
  equity: {
    headers: [
      "",
      "Equity delivery",
      "Equity intraday",
      "F&O - Futures",
      "F&O - Options",
    ],

    rows: [
      [
        "Brokerage",
        "Zero Brokerage",
        "0.03% or Rs. 20/executed order whichever is lower",
        "0.03% or Rs. 20/executed order whichever is lower",
        "Flat Rs. 20 per executed order",
      ],

      [
        "STT/CTT",
        "0.1% on buy & sell",
        "0.025% on the sell side",
        "0.02% on the sell side",
        <>
          <ul className="mb-0 ps-3">
            <li>0.125% of intrinsic value on exercised options</li>
            <li>0.1% on sell side (premium)</li>
          </ul>
        </>,
      ],

      [
        "Transaction charges",
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
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)",
      ],

      [
        "SEBI charges",
        "₹10 / crore",
        "₹10 / crore",
        "₹10 / crore",
        "₹10 / crore",
      ],

      [
        "Stamp charges",
        "0.015% or ₹1500 / crore on buy side",
        "0.003% or ₹300 / crore on buy side",
        "0.002% or ₹200 / crore on buy side",
        "0.003% or ₹300 / crore on buy side",
      ],
    ],
  },

  currency: {
    headers: ["", "Currency Futures", "Currency Options"],

    rows: [
      [
        "Brokerage",
        "0.03% or ₹20/executed order whichever is lower",
        "₹20 per executed order",
      ],

      ["STT", "No STT", "No STT"],

      ["Transaction charges", "NSE: 0.00035%", "NSE: 0.0311%"],

      ["GST", "18% on applicable charges", "18% on applicable charges"],

      ["SEBI charges", "₹10 / crore", "₹10 / crore"],
    ],
  },

  commodity: {
    headers: ["", "Commodity Futures", "Commodity Options"],

    rows: [
      [
        "Brokerage",
        "0.03% or ₹20/executed order whichever is lower",
        "₹20 per executed order",
      ],

      ["CTT", "0.01% on sell side", "0.05% on sell side"],

      ["Transaction charges", "MCX: 0.0021%", "MCX: 0.0418%"],

      ["GST", "18% on applicable charges", "18% on applicable charges"],

      ["SEBI charges", "₹10 / crore", "₹10 / crore"],
    ],
  },
};

export default brokerageData;
