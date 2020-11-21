import React from "react";
import imgLogo from "../../../../assets/img/others/logo-w.png";
import imgGoggle from "../../../../assets/img/others/g-play.png";
import imgApple from "../../../../assets/img/others/app-store.png";
const FooterMid = () => {
  return (
    <div className="footer-mid">
      <div className="container">
        <div className="footer-mid-block first ">
          <figure className="title">
            {" "}
            <img src={imgLogo} alt="" />
          </figure>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            totam illum aliquid doloremque fuga? Libero error dolorem
            necessitatibus exercitationem recusandae, magni doloremque deleniti,
            possimus dolore quos distinctio totam. Quibusdam, voluptate.
          </p>
        </div>
        <ul className="footer-mid-block">
          <div className="title">
            <p>Links</p>
          </div>
          <li>
            <a href="" className="footer-mid-block-item">
              Anothor Link Here
            </a>
          </li>{" "}
          <li>
            <a href="" className="footer-mid-block-item">
              Anothor Link Here
            </a>
          </li>{" "}
          <li>
            <a href="" className="footer-mid-block-item">
              Anothor Link Here
            </a>
          </li>{" "}
          <li>
            <a href="" className="footer-mid-block-item">
              Anothor Link Here
            </a>
          </li>
        </ul>
        <ul className="footer-mid-block">
          <div className="title"></div>
          <li>
            <a href="" className="footer-mid-block-item">
              Anothor Link Here
            </a>
          </li>{" "}
          <li>
            <a href="" className="footer-mid-block-item">
              Anothor Link Here
            </a>
          </li>{" "}
          <li>
            <a href="" className="footer-mid-block-item">
              Anothor Link Here
            </a>
          </li>
        </ul>
        <div className="footer-mid-block">
          <div className="title">
            <p>Download App</p>
          </div>
          <figure className="app">
            <img src={imgGoggle} alt="" />
          </figure>
          <figure className="app">
            <img src={imgApple} alt="" />
          </figure>
        </div>{" "}
      </div>
    </div>
  );
};

export default FooterMid;
