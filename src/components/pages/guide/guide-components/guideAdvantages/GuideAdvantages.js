import React from "react";
import "./scss/main.css";
import img1 from "../../../../../assets/img/guide/investment/img-left@3x.png";
import img2 from "../../../../../assets/img/guide/investment/img-right@3x.png";
import icon from "../../../../../assets/img/icons/check.png";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import { useTranslation } from "react-i18next";

const GuideAdvantages = () => {
  const [t] = useTranslation("common");

  const data = {
    first: {
      p: "advantages.desc",
      list: [
        { id: 1, text: "advantages.p1" },
        { id: 2, text: "advantages.p2" },
        { id: 3, text: "advantages.p3" },
      ],
    },
    second: {
      p: "features.desc",
      list: [
        { id: 1, text: "features.p1" },
        { id: 2, text: "features.p2" },
        { id: 3, text: "features.p3" },
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
              <h2 className="guide-title">{t("advantages.title")}</h2>
              <p>{t(data.first.p)}</p>
              <ul>
                {data.first.list.map((item) => {
                  const { id, text } = item;
                  return (
                    <li key={id}>
                      <img src={icon} alt="" /> <span>{t(text)}</span>
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
              <h2 className="guide-title">{t("features.title")}</h2>
              <p>{t(data.second.p)}</p>
              <ul>
                {data.second.list.map((item) => {
                  const { id, text } = item;
                  return (
                    <li key={id}>
                      <img src={icon} alt="" /> <span>{t(text)}</span>
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
