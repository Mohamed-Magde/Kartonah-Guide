import React from "react";
import "./scss/main.css";
import img1 from "../../../../../assets/img/guide/franchise/img-1@3x.png";
import img2 from "../../../../../assets/img/guide/franchise/img-2@3x.png";
import img3 from "../../../../../assets/img/guide/franchise/img-3@3x.png";
import bg from "../../../../../assets/img/guide/franchise/img-right@3x.png";

import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

const GuideFranchise = () => {
  const [t] = useTranslation("common");

  const data = [
    {
      id: 1,
      title: "franchise.name1",
      p: "franchise.p1",
      img: img1,
    },
    {
      id: 2,
      title: "franchise.name2",
      p: "franchise.p2",
      img: img2,
    },
    {
      id: 3,
      title: "franchise.name3",
      p: "franchise.p3",
      img: img3,
    },
  ];
  return (
    <div className="guide-franchise">
      <div className="guide-franchise-left">
        <h3 className="guide-title">{t("franchise.title")}</h3>
        <Slide right cascade>
          {data.map((item) => {
            const { id, title, p, img } = item;
            return (
              <div className="guide-franchise-left-block" key={id}>
                <img src={img} alt="" />

                <div className="guide-franchise-left-block-content">
                  <span>{t(title)}</span>
                  <p>{t(p)}</p>
                </div>
              </div>
            );
          })}
        </Slide>
      </div>
      <Fade left>
        <div className="guide-franchise-right">
          <img src={bg} alt="" />
        </div>
      </Fade>
    </div>
  );
};

export default GuideFranchise;
