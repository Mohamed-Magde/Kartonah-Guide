import React from "react";
import "./scss/main.css";
import bg from "../../../../../assets/img/guide/backgrounds/investing.png";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

const GuideInvesting = () => {
  return (
    <div className="guide-investing">
      <Zoom>
        <img className="guide-investing-bg" src={bg} alt="" />
      </Zoom>
      <Slide right>
        <div className="container">
          <h2 className="guide-investing-title">
            Investing in <span>Kartonah</span> company
          </h2>
          <p className="guide-investing-desc">
            In order to provide a wide base of options for franchise applicants
            in Kartonah Company, we have proposed an investment model according
            to the nature of the site and the target market segment in the
            region. It features an attractive and unified design and identity to
            create the overall impression of professionalism and quality
            associated with Kartonah Brand.
          </p>
        </div>
      </Slide>
    </div>
  );
};

export default GuideInvesting;
