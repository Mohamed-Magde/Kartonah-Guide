import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavDown = () => {
  const [state, setState] = useState(false);
  const handleChange = () => {
    setState(!state);
    console.log(state);
  };

  return (
    <>
      <div onClick={handleChange} className={state ? "menu bright" : "menu"}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={state ? "nav-down" : "hidden nav-down"}>
        <div className="container">
          <ul className="nav-down-list">
            <li>
              <Link className="nav-down-list-item">Dashboard</Link>
            </li>

            <li>
              <Link className="nav-down-list-item">Dükkanlarım</Link>
            </li>
            <li>
              <Link className="nav-down-list-item">Artırmalarım</Link>
            </li>

            <li>
              <Link className="nav-down-list-item">Profilim</Link>
            </li>
            <li>
              <button className="nav-down-list-item">Oturumu Kapat</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavDown;
