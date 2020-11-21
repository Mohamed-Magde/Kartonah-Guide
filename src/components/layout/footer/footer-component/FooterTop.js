import React from "react";
import img from "../../../../assets/img/icons/support-icon.png";
const FooterTop = () => {
  return (
    <div className="footer-top">
      <div className="container">
        <div className="footer-top-left">
          <img src={img} alt="" />
          <p>FOR MORE HELP</p>
        </div>
        <div className="footer-top-right">
          <p>+44 20 3287 3802</p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
