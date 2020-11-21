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

const GuideSupport = () => {
  const data = {
    first: [
      {
        id: 1,
        title: "Continuous supply",
        desc: "Continuous supply to provide products continuously",
        img: img1,
      },
      {
        id: 2,
        title: "Supervision",
        desc: "Continuous operational supervision and control of sites",
        img: img2,
      },
      {
        id: 3,
        title: "Meetings",
        desc: "Regular meetings with franchisees (weekly / monthly)",
        img: img3,
      },
    ],
    second: [
      {
        id: 1,
        title: "marketing campaigns",
        desc: "We are create and management all Campaigns on all channels",
        img: img4,
      },
      {
        id: 2,
        title: "Creating new products",
        desc: "We are working on developing a new products. ",
        img: img5,
      },
      {
        id: 3,
        title: "Community participation",
        desc: "We will create interaction community on social media",
        img: img6,
      },
    ],
  };
  return (
    <div className="guide-support">
      <Zoom>
        <h2 className="guide-title">Continuous support</h2>
      </Zoom>
      <Slide left cascade>
        <div className="container">
          {data.first.map((item) => {
            const { id, title, desc, img } = item;
            return (
              <div className="guide-support-block" key={id}>
                <img src={img} alt="" />
                <span>{title}</span>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </Slide>
      <Zoom>
        <h2 className="guide-title">marketing support</h2>
      </Zoom>
      <Slide right cascade>
        <div className="container">
          {data.second.map((item) => {
            const { id, title, desc, img } = item;
            return (
              <div className="guide-support-block" key={id}>
                <img src={img} alt="" />
                <span>{title}</span>
                <p>{desc}</p>
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
