import React from "react";
import "./Hero.css";

function HeroSupport() {
  return (
    <section className="support-hero">
      <div className="container">
        <div className="support-header">
          {/* Left Side */}
          <div className="support-left">
            <a href="/support" className="support-text">
              Support Portal
            </a>

            <h2 className="support-heading">
              Search for an answer or browse help topics to create a ticket
            </h2>

            <div className="input-group search-box">
              <span className="input-group-text search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Eg: How do I open my account, How do I activate F&O..."
              />
            </div>
          </div>

          {/* Right Side */}

          <div className="support-right">
            <button type="button" className="btn my-ticket">
              My Tickets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSupport;
