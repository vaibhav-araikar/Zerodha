import React from "react";
import Hero from "./Hero";
import "./Team.css";

export default function AboutPage() {
  return (
    <div className="container about-page">
      {/* Founder Details */}
      <div className="row pt-5 pb-1 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>
      <div className="row p-5" style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
        <div className="col-6 p-5 text-center">
          <img
            src="/media/nithinKamath.jpg"
            alt="Founder Image"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h5 className="mt-5">Nithin Kamath</h5>
          <p className="text-muted">Founder, CEO</p>
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" className="rainmatter-link">
              Homepage
            </a>
            &nbsp; /
            <a href="" className="rainmatter-link">
              &nbsp;TradingQnA
            </a>
            &nbsp; /
            <a href="" className="rainmatter-link">
              &nbsp;Twitter
            </a>
          </p>
        </div>
      </div>

      {/* Other team members - row 1 */}
      <div
        className="row p-5 fs-6"
        style={{ lineHeight: "1.5", fontSize: "1.1em" }}
      >
        {/* member 1 */}
        <div className="col-4 text-center">
          <img
            src="/media/nikhilKamath.png"
            alt="Co-Founder & CFO Image"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h5 className="mt-3">Nikhil Kamath</h5>
          <p className="text-muted">Co-founder & CFO</p>
        </div>
        {/* member 2 */}
        <div className="col-4 text-center">
          <img
            src="/media/kailashNadh.png"
            alt="CTO Image"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h5 className="mt-3">Dr. Kailash Nadh</h5>
          <p className="text-muted">CTO</p>
        </div>
        {/* member 3 */}
        <div className="col-4 text-center">
          <img
            src="/media/venuMadhav.png"
            alt="COO"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h5 className="mt-3">Venu Madhav</h5>
          <p className="text-muted">COO</p>
        </div>
      </div>

      {/* Other team members - row 2 */}
      <div
        className="row p-5 fs-6"
        style={{ lineHeight: "1.5", fontSize: "1.1em" }}
      >
        {/* member 4 */}
        <div className="col-4 text-center">
          <img
            src="/media/seemaPatil.png"
            alt="Director"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h5 className="mt-3">Seema Patil</h5>
          <p className="text-muted">Director</p>
        </div>
        {/* member 5 */}
        <div className="col-4 text-center">
          <img
            src="/media/karthikRangappa.png"
            alt="Chief of Education"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h5 className="mt-3">Karthik Rangappa</h5>
          <p className="text-muted">Chief of Education</p>
        </div>
        {/* member 6 */}
        <div className="col-4 text-center">
          <img
            src="/media/austinPrakesh.png"
            alt="Director Strategy"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h5 className="mt-3">Austin Prakesh</h5>
          <p className="text-muted">Director Strategy</p>
        </div>
      </div>
    </div>
  );
}
