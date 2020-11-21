import React from "react";
import logo from "../../../../assets/img/others/logo.png";
import { Link } from "react-router-dom";

import heart from "../../../../assets/img/icons/heart-o-icon.png";
import cart from "../../../../assets/img/icons/cart-o-icon.png";
import log from "../../../../assets/img/icons/log-icon.png";

const NavMid = () => {
  return (
    <>
      <div className="nav-mid">
        <div class="container">
          <figure class="nav-mid-logo">
            <Link to="/">
              <img src={logo} />
            </Link>
          </figure>
          <div class="nav-mid-search">
            <select className="nav-mid-search-select">
              <option selected="">All Categories</option>
              <option>Fashion</option>
              <option>Electronic</option>
              <option>Toys &amp; Games</option>
              <option>Furniture</option>
            </select>
            <input type="search" className="nav-mid-search-item" />
            <button class="btn-search">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <ul class="nav-mid-info">
            <li>
              <Link to="/login" class="nav-mid-info-item auth">
                <p>Login</p>
              </Link>
            </li>
            <li>
              <Link class="nav-mid-info-item ">
                <img src={cart} alt="" />
              </Link>
            </li>
            <li>
              <Link class="nav-mid-info-item ">
                <img src={heart} alt="" />
              </Link>
            </li>

            <li>
              <Link class="nav-mid-info-item">
                {" "}
                <img src={log} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavMid;
