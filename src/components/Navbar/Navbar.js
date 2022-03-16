import React from "react";
import "./Navbar.scss";
import menu from "../../assets/menu.svg";
import logo from "../../assets/logo.png";
import monster from "../../assets/monster.png";
import www from "../../assets/www.png";

const Navbar = () => {
  return (
    <div className="nav container">
      <div className="menu">
        <img src={menu} alt="menu" />
      </div>
      <div className="logo-side">
        <a href="/" className="logo">
          <img src={logo} className="ducati" alt="logo" />
          <img src={monster} alt="alt" />
        </a>
        <div className="int">
          <img src={www} className="www" alt="img" />
          <a href="/">International website</a>
          <a href="/">My Ducati</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
