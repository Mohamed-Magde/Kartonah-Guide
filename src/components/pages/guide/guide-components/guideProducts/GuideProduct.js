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
import { useTranslation } from "react-i18next";

const GuideProduct = () => {
  const [t] = useTranslation("common");

  const data = [
    {
      id: 1,
      img: img1,
      title: "products.product1",
    },
    {
      id: 2,
      img: img2,
      title: "products.product2",
    },
    {
      id: 3,
      img: img3,
      title: "products.product3",
    },
    {
      id: 4,
      img: img4,
      title: "products.product4",
    },
    {
      id: 5,
      img: img5,
      title: "products.product5",
    },
    {
      id: 6,
      img: img6,
      title: "products.product6",
    },
  ];

  return (
    <div className="guide-product">
      <img src={bgRight} alt="" className="guide-product-bg" />
      <Flip left>
        <h2 className="guide-title">{t("products.title")}</h2>
      </Flip>
      <Zoom>
        <p className="guide-desc">{t("products.desc")}</p>
      </Zoom>
      <Slide right cascade>
        <div className="container">
          {data.map((item) => {
            const { id, img, title } = item;
            return (
              <div className="guide-product-block" key={id}>
                <div className="guide-product-block-content">
                  <img src={img} alt="" />
                  <p>{t(title)}</p>
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
