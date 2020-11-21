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
const GuideCompetitive = () => {
  const data = [
    {
      id: 1,
      title: "The first in the market",
      p: "The first in the online wholesale marketplace",
      img: img1,
    },
    {
      id: 2,
      title: "1000+ factories",
      p: "Contract and cooperation with more than 1000 factories",
      img: img2,
    },
    {
      id: 3,
      title: "Ease of use",
      p: "Easy to search and to access to what you want",
      img: img3,
    },
    {
      id: 4,
      title: "Categories",
      p: "A list displaying different varieties and species",
      img: img4,
    },
    {
      id: 5,
      title: "Handling speed",
      p: "Through the presence of a safe and secure",
      img: img5,
    },
    {
      id: 6,
      title: "order tracking",
      p:
        "The possibility of tracking the order from the beginning until it reaches ",
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
        <h2 className="guide-title">Competitive advantages</h2>
      </Flip>
      <div className="container">
        <Zoom left cascade>
          {data.map((item) => {
            const { id, title, p, img } = item;

            return (
              <div key={id} className="guide-competitive-block">
                <img src={img} alt="" />
                <div className="guide-competitive-block-content">
                  <span>{title}</span> <p>{p}</p>
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
