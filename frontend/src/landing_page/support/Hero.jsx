import React from "react";
import "./Hero.css";

function HeroSupport() {
  return (
    <section className="support-hero">
      <div className="container">
        <div className="support-header">
          {/* First Row */}
          <div className="support-top">
            <a href="/support" className="support-text">
              Support Portal
            </a>

            <button type="button" className="btn btn-primary my-ticket">
              My Tickets
            </button>
          </div>

          {/* Second Row */}
          <div className="input-group search-box border">
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
      </div>
    </section>
  );
}

export default HeroSupport;
