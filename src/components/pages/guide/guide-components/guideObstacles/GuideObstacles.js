import React from "react";
import "./scss/main.css";
import img from "../../../../../assets/img/guide/guide-banner-bottom-right.png";
import img1 from "../../../../../assets/img/guide/obs/delivery-box@3x.png";
import img2 from "../../../../../assets/img/guide/obs/fashion@3x.png";
import img3 from "../../../../../assets/img/guide/obs/price-tag@3x.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";

import { useTranslation } from "react-i18next";
const GuideObstacles = () => {
  const [t] = useTranslation("common");

  const data = [
    {
      id: 1,
      title: "obs.first-name",
      desc: "obs.first-p",
      img: img1,
    },
    {
      id: 2,
      title: "obs.second-name",
      desc: "obs.second-p",
      img: img2,
    },
    {
      id: 3,
      title: "obs.third-name",
      desc: "obs.third-p",
      img: img3,
    },
  ];
  return (
    <div className="guide-obs">
      <Flip right>
        <img src={img} alt="" className="guide-obs-img" />
      </Flip>
      <Zoom>
        <h2 className="guide-title">{t("obs.title")}</h2>
      </Zoom>
      <div className="container">
        {data.map((item) => {
          const { id, title, desc, img } = item;
          return (
            <Zoom>
              <div className="guide-obs-block" key={id}>
                <img src={img} alt="" />

                <span>{t(title)}</span>

                <Fade left>
                  <p>{t(desc)}</p>
                </Fade>
              </div>
            </Zoom>
          );
        })}
      </div>
    </div>
  );
};

export default GuideObstacles;
