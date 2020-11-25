import React from "react";
import "./scss/main.css";
import img from "../../../../../assets/img/guide/banner/banner-bg@3x.png";
import imgAr from "../../../../../assets/img/guide/banner/banner-bg-arabic.png";
import imgBottom from "../../../../../assets/img/guide/guide-banner-bottom.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { useTranslation } from "react-i18next";

const GuideBanner = ({ lang }) => {
  const [t] = useTranslation("common");
  return (
    <div
      id="home"
      className={lang === "ar" ? "guide-banner ar" : "guide-banner"}
    >
      <div
        className={
          lang === "ar" ? "guide-banner-top ar-top" : "guide-banner-top"
        }
      >
        <div className="guide-banner-top-left">
          <Zoom right cascade>
            {" "}
            <div className="container">
              <span>{t("banner.span")}</span>

              <h1>
                {t("banner.first")} <span>{t("banner.second")}</span>
              </h1>

              <p>{t("banner.p")}</p>
              <a href="#contact" className="btn-primary">
                {t("banner.btn")}
              </a>
            </div>
          </Zoom>
        </div>

        <Fade right>
          <figure className="guide-banner-top-right">
            {lang === "ar" ? (
              <img src={imgAr} alt="" />
            ) : (
              <img src={img} alt="" />
            )}
          </figure>
        </Fade>
      </div>
      <div className="guide-banner-bottom">
        <div className="container">
          <p className="guide-banner-bottom-block first">
            {t("banner.bottom-first")}
          </p>

          <p className="guide-banner-bottom-block">
            {" "}
            <span></span> {t("banner.bottom-second")}
          </p>

          <p className="guide-banner-bottom-block">
            {" "}
            <span></span> {t("banner.bottom-third")}
          </p>
        </div>
      </div>
      <img src={imgBottom} alt="" className="guide-banner-img" />
    </div>
  );
};

export default GuideBanner;
