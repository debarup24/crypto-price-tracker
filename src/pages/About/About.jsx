import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>About CryptoTracker</h1>
      <div className="about-body">
        <p>
          CryptoTracker is a web application to track the price of crypto
          currencies in real time. It also shows historical data and price chart
          of indivdual coin and their daily movement in prices including 24 hour
          high/low prices. User can check the market cap of every coin as well.
          All the price can be converted into three different currencies such as
          USD, EUR and INR.
          <br /> <br />
          As digital currencies proliferate and mature, the range and quality of
          services that support users is increasing. Founded in 2024 and
          headquartered in Gurgaon, India, CryptoTracker provides a digital
          currency market tracking website. The website started by ranking
          digital currencies by fundamental metrics such as developer activity,
          community size, and liquidity. We benchmark digital currencies such as
          Bitcoin, Ethereum, and 100+ other cryptocurrencies. We do this by
          using CoinGeko API which collects data to quantitatively and
          qualitatively rank the potential of each coin.
          <br /> <br />
          Our aim is to become the most comprehensive data provider for the open
          financial market — which we believe will be facilitated by blockchain.
          <br /> <br /> — Thanks, Team CryptoTracker
        </p>
      </div>
    </div>
  );
};

export default About;
