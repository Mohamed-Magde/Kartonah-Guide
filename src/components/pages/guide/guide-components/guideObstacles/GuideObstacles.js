import React from "react";
import "./scss/main.css";
import img from "../../../../../assets/img/guide/guide-banner-bottom-right.png";
import img1 from "../../../../../assets/img/guide/obs/delivery-box@3x.png";
import img2 from "../../../../../assets/img/guide/obs/fashion@3x.png";
import img3 from "../../../../../assets/img/guide/obs/price-tag@3x.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
const GuideObstacles = () => {
  const data = [
    {
      id: 1,
      title: "Qunatity",
      desc:
        "The difficulty of making a successful deal in small quantities in the Turkish trade",
      img: img1,
    },
    {
      id: 2,
      title: "Diversity",
      desc:
        "We offer Lack of diversity between Catagories , products, items and prices",
      img: img2,
    },
    {
      id: 3,
      title: "Prices",
      desc:
        "One of the most important problems facing customers and wholesale clothing merchants",
      img: img3,
    },
  ];
  return (
    <div className="guide-obs">
      <Flip right>
        <img src={img} alt="" className="guide-obs-img" />
      </Flip>
      <Zoom>
        <h2 className="guide-title">The obstacles (Difficulties)</h2>
      </Zoom>
      <div className="container">
        {data.map((item) => {
          const { id, title, desc, img } = item;
          return (
            <Zoom>
              <div className="guide-obs-block" key={id}>
                <img src={img} alt="" />

                <span>{title}</span>

                <Fade left>
                  <p>{desc}</p>
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
