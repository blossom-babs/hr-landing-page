// eslint-disable-next-line

import React from "react";
// import images
import HeaderImage from "../assets/header_img.png";
// import Nav component
import Nav from "./Nav";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Header() {
  const backgroundStyle = {
    backgroundImage: `url(${HeaderImage})`,
  };

  // className="header"
  return (
    <header >
      <div style={backgroundStyle} className="header"></div>
      <Nav />
      <div className="grid">
        <div className="icons">
          <FacebookIcon className="icon" />
          <InstagramIcon className="icon" />
          <TwitterIcon className="icon" />
          <LinkedInIcon className="icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
