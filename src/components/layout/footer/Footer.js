import React from "react";
import FooterDown from "./footer-component/FooterDown";
import FooterMid from "./footer-component/FooterMid";
import FooterTop from "./footer-component/FooterTop";
import "./scss/main.css"
const Footer = () => {
  return (
    <footer className="footer">
      <FooterTop />
      <FooterMid />
      <FooterDown />
    </footer>
  );
};

export default Footer;
