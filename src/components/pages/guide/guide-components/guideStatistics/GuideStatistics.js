import React from "react";
import img1 from "../../../../../assets/img/guide/statistics/img-1@3x.png";
import img2 from "../../../../../assets/img/guide/statistics/img-2@3x.png";
import img3 from "../../../../../assets/img/guide/statistics/img-3@3x.png";
import bg from "../../../../../assets/img/guide/world-bg.png";
import "./scss/main.css";

import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
const GuideStatistics = () => {
  const data = [
    {
      id: 1,
      title: "Monthly access rate",
      number: "1.50",
      type: "Million",
      img: img1,
    },
    {
      id: 2,
      title: "Number of factories",
      number: "1000+",
      type: "factory",
      img: img2,
    },
    {
      id: 3,
      title: "Number of clients",
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
        <h2 className="guide-title">Kartonah company statistics</h2>
      </Flip>
      <div className="container">
        {data.map((item) => {
          const { id, title, img, type, number } = item;
          return (
            <Slide right cascade>
              <div className="guide-statistics-block" key={id}>
                <h6>{title}</h6>
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
