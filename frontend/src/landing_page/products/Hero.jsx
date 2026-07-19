import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="container border-bottom mb-4">
        <div className="text-center">
          <h1 className="fs-3 pt-5 mt-5">Zerodha Products</h1>
          <p className="tech-desc">
            Sleek, modern, and intuitive trading platforms
          </p>
          <p className="tech-info pb-5 mb-5">
            Check out our{" "}
            <a href="" className="text-link">
              investment offerings
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>

      <LeftSection
        imageURL="media/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="/trydemo"
        learnMore="/learnmore"
        googlePlay="/googleplaystore"
        appStore="/appleappstore"
      />

      <RightSection
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="/learnmore"
        imageURL="media/console.png"
      />

      <LeftSection
        imageURL="media/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        coinLink="/coin"
        googlePlay="/googleplaystore"
        appStore="/appleappstore"
      />

      <RightSection
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        kiteConnect="/kiteConnect"
        imageURL="media/kiteconnect.png"
      />

      <LeftSection
        imageURL="media/kite.png"
        productName="Varsity Mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="/googleplaystore"
        appStore="/appleappstore"
      />

      <p className="text-center fs-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="" className="text-link">
          Zerodha.tech{" "}
        </a>
        blog.
      </p>

      <Universe />
    </>
  );
}

export default Hero;
