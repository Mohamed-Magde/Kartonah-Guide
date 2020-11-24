import React, { useState } from "react";
import "./scss/main.css";
import logo from "../../../assets/img/global/logo.png";
import Slide from "react-reveal/Slide";
import { useTranslation } from "react-i18next";

import Zoom from "react-reveal/Zoom";
const Navbar = () => {
  const [t] = useTranslation("common");
  const [state, setState] = useState(false);
  const handleChange = () => {
    setState(!state);
    console.log(state);
  };

  const data = [
    { id: 1, route: "#home", text: "nav.name1" },
    { id: 1, route: "#about", text: "nav.name2" },
    { id: 1, route: "#service", text: "nav.name3" },
    { id: 1, route: "#contact", text: "nav.name4" },
  ];
  return (
    <>
      <div onClick={handleChange} className={state ? "menu bright" : "menu"}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={state ? "nav-mobile nav" : "nav"}>
        <div className="container">
          <div className="nav-left">
            <img src={logo} alt="" />
          </div>
          <ul className="nav-list">
            {data.map((item) => {
              const { id, route, text } = item;
              return (
                <li key={id}>
                  <a className="nav-list-item" href={route}>
                    {t(text)}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>{" "}
    </>
  );
};

export default Navbar;
