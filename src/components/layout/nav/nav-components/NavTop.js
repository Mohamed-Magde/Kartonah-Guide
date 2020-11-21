import React from "react";
import { Link } from "react-router-dom";

const NavTop = () => {
  const lan = [
    {
      id: 1,
      title: "Language:",
      titleSpan: "En",
      icon: "fas fa-caret-down",
      items: [
        { id: 1, text: "Language", type: "[En]" },
        { id: 2, text: "Language", type: "[Ar]" },
        { id: 3, text: "Language", type: "[Fr]" },
      ],
    },
    {
      id: 2,
      title: "Currency:",
      titleSpan: "USD",
      icon: "fas fa-caret-down",
      items: [
        { id: 1, text: "US Dollor", type: "[USD]" },
        { id: 2, text: "SAR", type: "[SR]" },
        { id: 3, text: "Pound", type: "[EGP]" },
      ],
    },
  ];
  const list = [
    { id: 1, title: "Our Services", route: "/services", seller: false },
    {
      id: 2,
      title: " Get Quote",
      route: "/quote",
      seller: false,
    },
    {
      id: 3,
      title: " Help & Support",
      route: "/support",
      seller: false,
    },
    {
      id: 4,
      title: " Become A Seller",
      route: "/seller",
      seller: true,
    },
  ];
  return (
    <section className="nav-top">
      <div className="container">
        <div className="lan">
          {lan.map((item) => {
            const { id, title, titleSpan, icon, items } = item;
            return (
              <div className="lan-block" key={id}>
                <div className="lan-block-title">
                  <div className="desc">
                    <p> {title}</p> <span>{titleSpan} </span>{" "}
                    <i className={icon}></i>
                  </div>
                  <ul className="lan-block-list">
                    {items.map((item) => {
                      const { id, text, type } = item;
                      return (
                        <li key={id}>
                          <div className="lan-block-list-item">
                            <span>{text} </span>
                            <span>{type} </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <ul className="nav-top-list">
          {list.map((item) => {
            const { id, title, route, seller } = item;
            return (
              <li key={id}>
                <Link className="nav-top-list-item seller" to={route}>
                  {title}{" "}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default NavTop;
