import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Logo from "./Logo";

function Nav() {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <nav className="nav flex space-between">
      <div className="nav_svgs">
        <Logo
          color_one="#F99BAD"
          color_two="#EF0633"
          color_three="#B30526"
          span__one="nav__company-logo"
          span__two="nav__company-tagline"
        />
      </div>
      <ul className="nav__links flex space-around">
        <li>Who we are</li>
        <li>Packages</li>
        <li>Blog</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
      <div onClick={handleClick} className="nav__icon">
        {toggle ? <MenuIcon /> : <CloseIcon />}
      </div>
      <div
        // style={{ display: toggle ? "block" : "none" }}
        className={`nav__mobile ${
          toggle ? "nav__mobile--out" : "nav__mobile--in"
        }`}
      >
        <ul className="nav__mobile--links">
          <li>Who we are</li>
          <li>Packages</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
