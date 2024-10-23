import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features">
      <h1> Features of Crypto tracker!</h1>
      <ul>
        <p> 1. Live Crypto price tracking</p>
        <p> 2. Historical data and price chart of indivdual coin</p>
        <p> 3. Market cap of crypto coins</p>
        <p> 4. 24 hours high/low in crypto price</p>
        <p> 5. Currency conversion in USD, EUR, INR</p>
        <p> 6. Search functionality - to search Crypto coins</p>
      </ul>
    </div>
  );
};

export default Features;
