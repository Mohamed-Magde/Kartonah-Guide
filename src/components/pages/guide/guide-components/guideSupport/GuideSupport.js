import React from "react";
import "./scss/main.css";
import img1 from "../../../../../assets/img/guide/support/support-campaigns@3x.png";
import img2 from "../../../../../assets/img/guide/support/support-delivery-box@3x.png";
import img3 from "../../../../../assets/img/guide/support/support-meeting@3x.png";
import img4 from "../../../../../assets/img/guide/support/support-products@3x.png";
import img5 from "../../../../../assets/img/guide/support/support-sharing@3x.png";
import img6 from "../../../../../assets/img/guide/support/support-team@3x.png";
import bg from "../../../../../assets/img/guide/backgrounds/curved-shape-bg@3x.png";

import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import { useTranslation } from "react-i18next";

const GuideSupport = () => {
  const [t] = useTranslation("common");

  const data = {
    first: [
      {
        id: 1,
        title: "continuousSupport.name1",
        desc: "continuousSupport.p1",
        img: img1,
      },
      {
        id: 2,
        title: "continuousSupport.name2",
        desc: "continuousSupport.p2",
        img: img2,
      },
      {
        id: 3,
        title: "continuousSupport.name3",
        desc: "continuousSupport.p3",
        img: img3,
      },
    ],
    second: [
      {
        id: 1,
        title: "continuousMarketing.name1",
        desc: "continuousMarketing.p1",
        img: img4,
      },
      {
        id: 2,
        title: "continuousMarketing.name2",
        desc: "continuousMarketing.p2",
        img: img5,
      },
      {
        id: 3,
        title: "continuousMarketing.name3",
        desc: "continuousMarketing.p3",
        img: img6,
      },
    ],
  };
  return (
    <div className="guide-support">
      <Zoom>
        <h2 className="guide-title">{t("continuousSupport.title")}</h2>
      </Zoom>
      <Slide left cascade>
        <div className="container">
          {data.first.map((item) => {
            const { id, title, desc, img } = item;
            return (
              <div className="guide-support-block" key={id}>
                <img src={img} alt="" />
                <span>{t(title)}</span>
                <p>{t(desc)}</p>
              </div>
            );
          })}
        </div>
      </Slide>
      <Zoom>
        <h2 className="guide-title">{t("continuousMarketing.title")}</h2>
      </Zoom>
      <Slide right cascade>
        <div className="container">
          {data.second.map((item) => {
            const { id, title, desc, img } = item;
            return (
              <div className="guide-support-block" key={id}>
                <img src={img} alt="" />
                <span>{t(title)}</span>
                <p>{t(desc)}</p>
              </div>
            );
          })}
        </div>
      </Slide>

      <img src={bg} alt="" className="guide-support-bg" />
    </div>
  );
};

export default GuideSupport;
