import React from "react";

const FooterDown = () => {
  return (
    <div className="footer-down">
      <div className="wrapper">
        <div className="container">
          <div className="footer-down-block">
            <p className="title">
              ENJOY <span>WITH KARTONAH</span>
            </p>
            <p>Subscribe to get latest offers and deals today</p>
          </div>
          <div className="footer-down-block second">
            <input type="text" />
            <button>
              <i className="fab fa-telegram-plane"></i>
            </button>
          </div>
          <div className="social">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDown;
