import React from "react";
import "./scss/main.css";
import img1 from "../../../../../assets/img/guide/franchise/img-1@3x.png";
import img2 from "../../../../../assets/img/guide/franchise/img-2@3x.png";
import img3 from "../../../../../assets/img/guide/franchise/img-3@3x.png";
import bg from "../../../../../assets/img/guide/franchise/img-right@3x.png";

import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const GuideFranchise = () => {
  const data = [
    {
      id: 1,
      title: "Our Success",
      p:
        "After the success of the Kartonah experience, we developed an integrated system for granting and managing the franchise to ensure that our organization supports franchisees and to ensure that they succeed in presenting our brand adequately.",
      img: img1,
    },
    {
      id: 2,
      title: "Our Vision",
      p:
        "Kartonah aspires to transfer its own and practically tested idea (brand) to independent companies and institutions, and these small companies establishes its own project under the same",
      img: img2,
    },
    {
      id: 3,
      title: "Our Goal",
      p:
        "The goal is to open new horizons for growth and reach new target markets. In addition to that it gives the investor many advantages such as support, products and training.",
      img: img3,
    },
  ];
  return (
    <div className="guide-franchise">
      <div className="guide-franchise-left">
        <h3 className="guide-title">Franchise</h3>
        <Slide right cascade>
          {data.map((item) => {
            const { id, title, p, img } = item;
            return (
              <div className="guide-franchise-left-block" key={id}>
                <img src={img} alt="" />

                <div className="guide-franchise-left-block-content">
                  <span>{title}</span>
                  <p>{p}</p>
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
