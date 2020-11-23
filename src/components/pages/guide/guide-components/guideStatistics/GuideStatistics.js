import React from "react";
import img1 from "../../../../../assets/img/guide/statistics/img-1@3x.png";
import img2 from "../../../../../assets/img/guide/statistics/img-2@3x.png";
import img3 from "../../../../../assets/img/guide/statistics/img-3@3x.png";
import bg from "../../../../../assets/img/guide/world-bg.png";
import "./scss/main.css";

import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";

import { useTranslation } from "react-i18next";

const GuideStatistics = () => {
  const [t] = useTranslation("common");

  const data = [
    {
      id: 1,
      title: "statistics.name1",
      number: "1.50",
      type: "Million",
      img: img1,
    },
    {
      id: 2,
      title: "statistics.name2",
      number: "1000+",
      type: "factory",
      img: img2,
    },
    {
      id: 3,
      title: "statistics.name3",
      number: "3000+",
      type: "Trader",
      img: img3,
    },
  ];
  return (
    <div className="guide-statistics">
      <Zoom>
        <img src={bg} alt="" className="guide-statistics-bg" />
      </Zoom>
      <Flip left>
        <h2 className="guide-title">{t("statistics.title")}</h2>
      </Flip>
      <div className="container">
        {data.map((item) => {
          const { id, title, img, type, number } = item;
          return (
            <Slide right cascade>
              <div className="guide-statistics-block" key={id}>
                <h6>{t(title)}</h6>
                <img src={img} alt="" />
                <span>{number}</span>
                <p>{type}</p>
              </div>
            </Slide>
          );
        })}
      </div>
    </div>
  );
};

export default GuideStatistics;
