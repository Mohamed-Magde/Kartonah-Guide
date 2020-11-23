import React from "react";
import "./scss/main.css";
import bg from "../../../../../assets/img/guide/backgrounds/investing.png";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import { useTranslation } from "react-i18next";

const GuideInvesting = () => {
  const [t] = useTranslation("common");

  return (
    <div className="guide-investing">
      <Zoom>
        <img className="guide-investing-bg" src={bg} alt="" />
      </Zoom>
      <Slide right>
        <div className="container">
          <h2 className="guide-investing-title">
            {t("investing.title1")} <span>{t("investing.title2")}</span>
            {t("investing.title3")}
          </h2>
          <p className="guide-investing-desc">{t("investing.p")}</p>
        </div>
      </Slide>
    </div>
  );
};

export default GuideInvesting;
