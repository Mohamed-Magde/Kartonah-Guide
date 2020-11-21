import React from "react";
import "./scss/main.css";
import img from "../../../../../assets/img/guide/banner/banner-bg@3x.png";
import imgBottom from "../../../../../assets/img/guide/guide-banner-bottom.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
const GuideBanner = () => {
  return (
    <div className="guide-banner">
      <div className="guide-banner-top">
        <div className="guide-banner-top-left">
          <Fade left>
            {" "}
            <div className="container">
              <span>Franchise Guide</span>

              <h1>
                kartonah Franchise <span>Guide</span>
              </h1>

              <Zoom>
                <p>
                  Kartonah Foundation belongs to one of the oldest commercial
                  establishments in Turkey, which has over 8 years of experience
                  in the fields of business and commercial activities. The
                  institution is spread throughout the Middle East and North
                  Africa.
                </p>
              </Zoom>
            </div>
          </Fade>
        </div>

        <Fade right>
          <figure className="guide-banner-top-right">
            <img src={img} alt="" />
          </figure>
        </Fade>
      </div>
      <div className="guide-banner-bottom">
        <div className="container">
          <Fade left>
            <p className="guide-banner-bottom-block first">
              However, this is <br />
              not the end of <br />
              our horizons
            </p>
          </Fade>
          <Zoom>
            <p className="guide-banner-bottom-block">
              {" "}
              <span></span> (this is not our limit), as we are looking to
              establish new branches by granting the franchise of the Kartonah
              brand to investors looking to spread and meet the worldwide market
              needs.
            </p>
          </Zoom>
          <Fade right>
            <p className="guide-banner-bottom-block">
              {" "}
              <span></span> As a commitment to our society, we have put in place
              a franchise system that helps create job opportunities for young
              people with limited funding .
            </p>
          </Fade>
        </div>
      </div>
      <img src={imgBottom} alt="" className="guide-banner-img" />
    </div>
  );
};

export default GuideBanner;
