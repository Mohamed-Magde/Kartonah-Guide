import React from "react";
import "./scss/main.css";
import search from "../../../../../assets/img/guide/solution/img-1@3x.png";

import easiness from "../../../../../assets/img/guide/solution/img-2@3x.png";
import comfort from "../../../../../assets/img/guide/solution/img-3@3x.png";
import time from "../../../../../assets/img/guide/solution/img-4@3x.png";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const GuideSolution = () => {
  const data = [
    {
      id: 1,
      title: "Search",
      desc: "The possibility of searching easily in addition to a variety of",
      img: search,
    },
    {
      id: 2,
      title: "Easiness",
      desc: "Possibility to select small quantities",
      img: easiness,
    },
    {
      id: 3,
      title: "Comfort",
      desc: "Close deals from your office",
      img: comfort,
    },
    {
      id: 4,
      title: "Time",
      desc: "Save time and money needed to travel",
      img: time,
    },
  ];

  const curveUp = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="169.5"
      height="28.697"
      viewBox="0 0 169.5 28.697"
    >
      <g
        id="Group_4709"
        data-name="Group 4709"
        transform="translate(-270.45 -1789.214)"
      >
        <path
          id="Path_5151"
          data-name="Path 5151"
          d="M9243.821,14138.868s73.788-44.035,159.479,0"
          transform="translate(-8972 -12329)"
          fill="none"
          stroke="#41484f"
          stroke-linecap="round"
          stroke-width="2"
          stroke-dasharray="6"
        />
        <path
          id="Icon_feather-chevron-right"
          data-name="Icon feather-chevron-right"
          d="M13.5,18.146l4.573-4.573L13.5,9"
          transform="translate(427.226 1791.435) rotate(30)"
          fill="none"
          stroke="#41484f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </g>
    </svg>
  );

  const curveDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="169.5"
      height="28.706"
      viewBox="0 0 169.5 28.706"
    >
      <g
        id="Group_4711"
        data-name="Group 4711"
        transform="translate(1.371 1.725)"
      >
        <path
          id="Path_5151"
          data-name="Path 5151"
          d="M9243.821,14119.3s73.788,44.035,159.479,0"
          transform="translate(-9243.821 -14112.98)"
          fill="none"
          stroke="#41484f"
          stroke-linecap="round"
          stroke-width="2"
          stroke-dasharray="6"
        />
        <path
          id="Icon_feather-chevron-right"
          data-name="Icon feather-chevron-right"
          d="M0,0,4.573,4.573,0,9.146"
          transform="translate(158.022 2.287) rotate(-30)"
          fill="none"
          stroke="#41484f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </g>
    </svg>
  );

  return (
    <div className="guide-solution">
      <Fade right>
        {" "}
        <h2 className="guide-title">The Solution</h2>
      </Fade>

      <Zoom left cascade>
        <div className="container">
          {data.map((item) => {
            const { id, title, desc, img } = item;
            return (
              <div className="guide-solution-block" key={id}>
                <img src={img} alt="" />
                <span>{title}</span>
                <p>{desc}</p>
              </div>
            );
          })}{" "}
          <span className="curve-first">{curveUp}</span>
          <span className="curve-second">{curveDown}</span>
          <span className="curve-third">{curveUp}</span>
        </div>
      </Zoom>
    </div>
  );
};

export default GuideSolution;
