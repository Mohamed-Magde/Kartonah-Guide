import React from "react";
import "./scss/main.css";
import imgRight from "../../../../../assets/img/guide/offer/img-right@3x.png";
import imgLeft from "../../../../../assets/img/guide/offer/img-left@3x.png";
import bgDark from "../../../../../assets/img/guide/backgrounds/bg-left-dark@3x.png";
import bgLight from "../../../../../assets/img/guide/backgrounds/bg-right-light@3x.png";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
const GuideOffer = () => {
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
      title1: "What would I offer as a franchised investor",
      title2: "with Kartonah brand?",
      desc:
        "When you sign the franchise contract with Kartonah Company, you have some commitment like cost of products  , inventory, show room and all operations cost, whether in the pre-operation period or after the start of work. Our carefully crafted program is a turnkey program, where we do everything and let you focus on growing sales and maximizing profits.",
      list: [
        { id: 1, text: "Franchise" },
        { id: 2, text: "Operation" },
        { id: 3, text: "Foundation" },
        { id: 4, text: "Rentals" },
        { id: 5, text: "Products" },
        { id: 6, text: "Advertisement" },
      ],
    },
    second: {
      title1: "What would we offer as",
      title2: "Kartonah brand",
      desc:
        "When you sign the franchise contract with Kartonah Company, you directly enjoy a number of support services .",
      list: [
        { id: 1, text: "Feasibility study" },
        { id: 2, text: "Professional conselling" },
        { id: 3, text: "Financial study" },
        { id: 4, text: "goods Supply" },
        { id: 5, text: "PrTrademark/ Brandingoducts" },
        { id: 6, text: "Marketing and spread" },
        { id: 7, text: "Accounting" },
        { id: 8, text: "Help" },
        { id: 9, text: "Professional training" },
        { id: 10, text: "fast delivery" },
        { id: 11, text: "Support tools" },
        { id: 12, text: "follow-up" },
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
                {data.first.title1} <span>{data.first.title2}</span>
              </h2>
              <p>{data.first.desc}</p>
              <ul>
                {data.first.list.map((item) => {
                  const { id, text } = item;
                  return (
                    <li key={id}>
                      {" "}
                      <span> {data.icon} </span>
                      <p>{text}</p>
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
                {data.second.title1} <span>{data.second.title2}</span>
              </h2>
              <p>{data.second.desc}</p>
              <ul>
                {data.second.list.map((item) => {
                  const { id, text } = item;
                  return (
                    <li key={id}>
                      {" "}
                      <span>{data.icon}</span> <p>{text}</p>
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
