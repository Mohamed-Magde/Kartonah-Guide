import React from "react";
import "./scss/main.css";
import img from "../../../../../assets/img/guide/market/ship@3x.png";
import img1 from "../../../../../assets/img/guide/market/repeat_grid_154.png";
import img2 from "../../../../../assets/img/guide/market/path_6284.png";
import worldRight from "../../../../../assets/img/guide/market/world-right@3x.png";
import worldLeft from "../../../../../assets/img/guide/market/world-left@3x.png";
import Slide from "react-reveal/Slide";
import { useTranslation } from "react-i18next";

import Zoom from "react-reveal/Zoom";

const MarketSize = () => {
  const [t] = useTranslation("common");

  return (
    <div className="guide-market">
      <Zoom>
        {" "}
        <h2 className="guide-title">{t("market.title")}</h2>
      </Zoom>
      <div className="guide-market-desc">
        <img className="guide-market-square" src={img1} alt="" />
        <img className="guide-market-shape" src={img2} alt="" />
        <div className="guide-market-desc-left">
          <p>
            {t("market.desc")} <span>{t("market.desc2")}</span>
          </p>
        </div>
        <div className="guide-market-desc-right">
          <p>
            <span>$</span> 21.7B
          </p>
        </div>
      </div>
      <img className="guide-market-img" src={img} alt="" />
      <h2 className="guide-title">{t("market.title2")}</h2>
      <Slide left cascade>
        <div className="container">
          <div className="guide-market-block">
            <img className="guide-market-block-shape" src={img2} alt="" />
            <img src={worldLeft} alt="" />
            <div className="guide-market-block-wrapper">
              <p>15.2B </p>
              <span className="guide-market-block-border"> 15.2B</span>
              <span className="market-us-dollars">$US Dollar</span>
              <span className="market-area">{t("market.subtitle2")}</span>
            </div>
          </div>

          <div className="guide-market-block">
            <img className="guide-market-block-shape" src={img2} alt="" />
            <img src={worldRight} alt="" />
            <div className="guide-market-block-wrapper">
              {" "}
              <p>03.2B</p>
              <span className="guide-market-block-border"> 03.2B</span>
              <span className="market-us-dollars">$US Dollar</span>
              <span className="market-area">{t("market.subtitle")}</span>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default MarketSize;
