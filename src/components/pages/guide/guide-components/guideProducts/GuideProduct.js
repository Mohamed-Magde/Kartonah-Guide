import React from "react";
import "./scss/main.css";
import bgRight from "../../../../../assets/img/guide/bg-bottom-right-dark.png";
import img1 from "../../../../../assets/img/guide/products/product-1@3x.png";
import img2 from "../../../../../assets/img/guide/products/product-2@2x.png";
import img3 from "../../../../../assets/img/guide/products/product-3@3x.png";
import img4 from "../../../../../assets/img/guide/products/product-4@3x.png";
import img5 from "../../../../../assets/img/guide/products/product-5@3x.png";
import img6 from "../../../../../assets/img/guide/products/product-6@3x.png";

import Slide from "react-reveal/Slide";

import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
const GuideProduct = () => {
  const data = [
    {
      id: 1,
      img: img1,
      title: "Men Fashion",
    },
    {
      id: 2,
      img: img2,
      title: "Women Fashion",
    },
    {
      id: 3,
      img: img3,
      title: "Kids Fashion",
    },
    {
      id: 4,
      img: img4,
      title: "Winter Fashion",
    },
    {
      id: 5,
      img: img5,
      title: "Summer Fashion",
    },
    {
      id: 6,
      img: img6,
      title: "Accessories Fashion",
    },
  ];

  return (
    <div className="guide-product">
      <img src={bgRight} alt="" className="guide-product-bg" />
      <Flip left>
        <h2 className="guide-title">Products</h2>
      </Flip>
      <Zoom>
        <p className="guide-desc">
          In at iaculis lorem. Praesent tempor dictum tellus ut molestie. Sed
          sed ullamcorper lorem, id faucibus odio. Duis eu nisl ut ligula cursus
          molestie at
        </p>
      </Zoom>
      <Slide right cascade>
        <div className="container">
          {data.map((item) => {
            const { id, img, title } = item;
            return (
              <div className="guide-product-block" key={id}>
                <div className="guide-product-block-content">
                  <img src={img} alt="" />
                  <p>{title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Slide>
    </div>
  );
};

export default GuideProduct;
