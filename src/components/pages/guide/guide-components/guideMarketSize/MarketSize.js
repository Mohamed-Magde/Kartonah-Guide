import React from "react";
import "./scss/main.css";
import img from "../../../../../assets/img/guide/market/ship@3x.png";
import worldRight from "../../../../../assets/img/guide/market/world-right@3x.png";
import worldLeft from "../../../../../assets/img/guide/market/world-left@3x.png";
import Slide from "react-reveal/Slide";

import Zoom from "react-reveal/Zoom";

const MarketSize = () => {
  return (
    <div className="guide-market">
      <Zoom>
        <img className="guide-market-img" src={img} alt="" />
      </Zoom>
      <h2 className="guide-title">
        Market size
        <span> (Market potential)</span>
      </h2>
      <div className="container">
        <Slide left cascade>
          <div className="guide-market-block">
            <img src={worldLeft} alt="" />
            <p>
              15.2B <span className="border"> 15.2B</span>
              <span className="market-us-dollars">$US Dollar</span>
            </p>
          </div>
          <div className="guide-market-block">
            <img src={worldRight} alt="" />
            <p>
              {" "}
              03.2B<span className="border"> 03.2B</span>
              <span className="market-us-dollars">$US Dollar</span>
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default MarketSize;
