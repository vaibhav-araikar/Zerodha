import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

import { holdings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/allholdings")
      .then((res) => {
        console.log(res.data);
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.log("Error fetching holdings:", err);
      });
  }, []);

  // labels are derived from the allHoldings state, specifically the name of each stock. The map function is used to iterate over the allHoldings array and extract the name property from each stock object.
  // we are extracting the titles of the stocks from the allHoldings state and storing them in the labels array. This array will be used as the x-axis labels for the bar chart.
  // name naam ka subarray create hoga jo ki allHoldings ke andar ke har ek stock ka name hoga. Ye labels array ko chart ke x-axis ke liye use kiya jayega.
  const labels = allHoldings.map((subArray) => subArray["name"]);

  // this data object is used to configure the chart, including the labels and datasets. The datasets array contains an object that defines the label, data, and background color for the bar chart. The data for the chart is derived from the allHoldings state, specifically the price of each stock.
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>{" "}
                {/* this will go upto 2 decimal places */}
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      {/* Vertical Bar Graph */}
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
