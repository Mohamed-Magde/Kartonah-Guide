import React from "react";
import NavDown from "./nav-components/NavDown";
import NavMid from "./nav-components/NavMid";
import NavTop from "./nav-components/NavTop";
import "./scss/main.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <NavTop />
      <NavMid />
      <NavDown />
    </nav>
  );
};

export default Navbar;
