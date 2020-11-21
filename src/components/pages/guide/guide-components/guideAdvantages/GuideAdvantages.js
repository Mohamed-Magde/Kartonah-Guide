import React from "react";
import "./scss/main.css";
import img1 from "../../../../../assets/img/guide/investment/img-left@3x.png";
import img2 from "../../../../../assets/img/guide/investment/img-right@3x.png";
import icon from "../../../../../assets/img/icons/check.png";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
const GuideAdvantages = () => {
  const data = {
    first: {
      p:
        "In order to develop our expansion plan, we seek to present a model in the granting of a franchise for investments wishing to enter the clothing sector through the opportunity available in the markets to participate with us.Franchising within the Kartonah brand offers multiple opportunities and benefits from both the investment and operating sides.",
      list: [
        { id: 1, text: "Guaranteed Capital" },
        { id: 2, text: "Low Risks" },
        { id: 3, text: "Fast profits" },
      ],
    },
    second: {
      p:
        "In addition to the support we provide at the beginning of the investment, we continue to support to ensure that our brand is presented effectively and appropriately by:",
      list: [
        { id: 1, text: "sales and marketing" },
        { id: 2, text: "The support" },
        { id: 3, text: "The Development" },
      ],
    },
  };
  return (
    <div className="guide-adv">
      <div className="container">
        <div className="guide-adv-first">
          <Zoom>
            <img className="guide-adv-img" src={img1} alt="" />
          </Zoom>
          <Fade right>
            <div className="guide-adv-first-content">
              <h2 className="guide-title">Investment advantages</h2>
              <p>{data.first.p}</p>
              <ul>
                {data.first.list.map((item) => {
                  const { id, text } = item;
                  return (
                    <li key={id}>
                      <img src={icon} alt="" /> <span>{text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Fade>{" "}
        </div>
        <div className="guide-adv-first">
          <Zoom>
            {" "}
            <div className="guide-adv-first-content">
              <h2 className="guide-title">Operating features</h2>
              <p>{data.second.p}</p>
              <ul>
                {data.second.list.map((item) => {
                  const { id, text } = item;
                  return (
                    <li key={id}>
                      <img src={icon} alt="" /> <span>{text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Zoom>
          <Fade left>
            <img className="guide-adv-img" src={img2} alt="" />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default GuideAdvantages;
