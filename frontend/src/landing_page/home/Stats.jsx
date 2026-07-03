import React from "react";
import "./Stats.css";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-6 p-5" style={{ color: "#424242" }}>
          <h2 className="mb-5 pb-3">Trust with confidence</h2>
          <h3 className="mb-2.5 mt-1 fs-4">Customer-first always</h3>
          <p style={{ color: "#666" }} className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h3 className="mb-2.5 fs-4">No spam or gimmicks</h3>
          <p style={{ color: "#666" }} className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            <a>philosophies</a>.
          </p>

          <h3 className="mb-2.5 fs-4">The Zerodha universe</h3>
          <p style={{ color: "#666" }} className="text-muted">
            With initiatives like <a>Nudge</a> and <a>Kill Switch</a>, we don't
            just facilitate transactions, but actively help you do better with
            your money.
          </p>

          <h3 className="mb-2.5 fs-4">Do better with money</h3>
          <p style={{ color: "#666" }} className="text-muted">
            We believe in empowering you to make informed financial decisions.
            Our tools and resources are designed to help you build wealth and
            achieve your financial goals.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="media/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid"
          />
          <div className="text-center mt-3">
            <a href="" className="mx-5 p-5">
              Explore Our Products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" className="">
              Try kite <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
