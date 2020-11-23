import React from "react";
import "./scss/main.css";
import img1 from "../../../../../assets/img/guide/competitive/img-1@3x.png";
import img2 from "../../../../../assets/img/guide/competitive/img-2@3x.png";
import img3 from "../../../../../assets/img/guide/competitive/img-3@3x.png";
import img4 from "../../../../../assets/img/guide/competitive/img-4@3x.png";
import img5 from "../../../../../assets/img/guide/competitive/img-5@3x.png";
import img6 from "../../../../../assets/img/guide/competitive/img-6@3x.png";
import bg from "../../../../../assets/img/guide/bg-bottom-right-dark.png";

import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";

import { useTranslation } from "react-i18next";

const GuideCompetitive = () => {
  const [t] = useTranslation("common");

  const data = [
    {
      id: 1,
      title: "competitive.name1",
      p: "competitive.p1",
      img: img1,
    },
    {
      id: 2,
      title: "competitive.name2",
      p: "competitive.p2",
      img: img2,
    },
    {
      id: 3,
      title: "competitive.name3",
      p: "competitive.p3",
      img: img3,
    },
    {
      id: 4,
      title: "competitive.name4",
      p: "competitive.p4",
      img: img4,
    },
    {
      id: 5,
      title: "competitive.name5",
      p: "competitive.p5",
      img: img5,
    },
    {
      id: 6,
      title: "competitive.name6",
      p: "competitive.p6",
      img: img6,
    },
  ];
  return (
    <div className="guide-competitive">
      <Zoom>
        {" "}
        <img src={bg} alt="" className="guide-competitive-bg" />
      </Zoom>
      <Flip right>
        <h2 className="guide-title">{t("competitive.title")}</h2>
      </Flip>
      <div className="container">
        <Zoom left cascade>
          {data.map((item) => {
            const { id, title, p, img } = item;

            return (
              <div key={id} className="guide-competitive-block">
                <img src={img} alt="" />
                <div className="guide-competitive-block-content">
                  <span>{t(title)}</span> <p>{t(p)}</p>
                </div>
              </div>
            );
          })}
        </Zoom>
      </div>
    </div>
  );
};

export default GuideCompetitive;
