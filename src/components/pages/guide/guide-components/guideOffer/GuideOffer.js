import React from "react";
import "./scss/main.css";
import imgRight from "../../../../../assets/img/guide/offer/img-right@3x.png";
import imgLeft from "../../../../../assets/img/guide/offer/img-left@3x.png";
import bgDark from "../../../../../assets/img/guide/backgrounds/bg-left-dark@3x.png";
import bgLight from "../../../../../assets/img/guide/backgrounds/bg-right-light@3x.png";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import { useTranslation } from "react-i18next";

const GuideOffer = () => {
  const [t] = useTranslation("common");

  const data = {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21.438"
        height="21.048"
        viewBox="0 0 21.438 21.048"
      >
        <g
          id="Icon_feather-check-circle"
          data-name="Icon feather-check-circle"
          transform="translate(-1.998 -1.979)"
        >
          <path
            id="Path_5792"
            data-name="Path 5792"
            d="M22.022,11.632v.875a9.511,9.511,0,1,1-5.64-8.693"
            transform="translate(0 0)"
            fill="none"
            stroke="#fdda2a"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            id="Path_5793"
            data-name="Path 5793"
            d="M25.864,6l-9.511,9.52L13.5,12.667"
            transform="translate(-3.842 -1.101)"
            fill="none"
            stroke="#fdda2a"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </g>
      </svg>
    ),
    first: {
      title1: "offerFirst.title1",
      title2: "offerFirst.title2",
      desc: "offerFirst.desc",
      list: [
        { id: 1, text: "offerFirst.p1" },
        { id: 2, text: "offerFirst.p2" },
        { id: 3, text: "offerFirst.p3" },
        { id: 4, text: "offerFirst.p4" },
        { id: 5, text: "offerFirst.p5" },
        { id: 6, text: "offerFirst.p6" },
      ],
    },
    second: {
      title1: "offerSecond.title1",
      title2: "offerSecond.title2",
      desc: "offerSecond.desc",
      list: [
        { id: 1, text: "offerSecond.p1" },
        { id: 2, text: "offerSecond.p2" },
        { id: 3, text: "offerSecond.p3" },
        { id: 4, text: "offerSecond.p3" },
        { id: 5, text: "offerSecond.p5" },
        { id: 6, text: "offerSecond.p6" },
        { id: 7, text: "offerSecond.p7" },
        { id: 8, text: "offerSecond.p8" },
        { id: 9, text: "offerSecond.p9" },
        { id: 10, text: "offerSecond.p10" },
        { id: 11, text: "offerSecond.p11" },
        { id: 12, text: "offerSecond.p12" },
      ],
    },
  };
  return (
    <div className="guide-offer">
      <div className="guide-offer-top">
        <div className="container">
          <Fade right>
            <div className="guide-offer-top-left">
              <h2 className="guide-offer-title">
                {t(data.first.title1)} <span>{t(data.first.title2)}</span>
              </h2>
              <p>{t(data.first.desc)}</p>
              <ul>
                {data.first.list.map((item) => {
                  const { id, text } = item;
                  return (
                    <li key={id}>
                      {" "}
                      <span> {data.icon} </span>
                      <p>{t(text)}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Fade>{" "}
          <Zoom>
            {" "}
            <img className="guide-offer-top-right" src={imgRight} alt="" />
          </Zoom>
        </div>
      </div>
      <Zoom>
        <img src={bgLight} alt="" className="guide-offer-bg-light" />
      </Zoom>

      <Fade left>
        <img src={bgDark} alt="" className="guide-offer-bg-dark" />
      </Fade>
      <div className="guide-offer-bottom">
        <div className="container">
          <Fade left>
            <img src={imgLeft} className="guide-offer-bottom-left" alt="" />
          </Fade>
          <Zoom>
            <div className="guide-offer-bottom-right">
              <h2 className="guide-offer-title">
                {t(data.second.title1)} <span>{t(data.second.title2)}</span>
              </h2>
              <p>{t(data.second.desc)}</p>
              <ul>
                {data.second.list.map((item) => {
                  const { id, text } = item;
                  return (
                    <li key={id}>
                      {" "}
                      <span>{data.icon}</span> <p>{t(text)}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Zoom>{" "}
        </div>
      </div>
    </div>
  );
};

export default GuideOffer;
