import React from "react";
import "./LeftSection.css";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  coinLink,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container product-section">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-lg-6 text-center">
          <img
            src={imageURL}
            className="img-fluid product-image"
            alt={productName}
          />
        </div>

        {/* Right Content */}
        <div className="col-lg-5 offset-lg-1 product-content">
          <h2 className="product-title">{productName}</h2>

          <p className="product-description">{productDescription}</p>

          {/* Product Links */}
          {(tryDemo || learnMore || coinLink) && (
            <div className="product-links">
              {tryDemo && (
                <a href={tryDemo} className="text-link">
                  Try Demo
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              )}

              {learnMore && (
                <a href={learnMore} className="text-link">
                  Learn More
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              )}

              {coinLink && (
                <a href={coinLink} className="text-link">
                  Coin
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              )}
            </div>
          )}

          {/* Store Badges */}
          {(googlePlay || appStore) && (
            <div className="store-links">
              {googlePlay && (
                <a href={googlePlay}>
                  <img src="media/googlePlayBadge.svg" alt="Google Play" />
                </a>
              )}

              {appStore && (
                <a href={appStore}>
                  <img src="media/appstoreBadge.svg" alt="App Store" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
