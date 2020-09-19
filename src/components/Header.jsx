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
  const bgStyle = {
    background: `linear-gradient(black, rgba(0, 0, 0, 0.5)), url(${HeaderImage})`
  };

  return (
    <div className="header" style={bgStyle}>
      <Nav />
      <div className="grid template-col-one">
        <div className="icons">
          <FacebookIcon className="icon" />
          <InstagramIcon className="icon" />
          <TwitterIcon className="icon" />
          <LinkedInIcon className="icon" />
        </div>
        <div className="text">
          <p>
            We know that you are busy with deadlines and customer demands and
            this consumes all your time and as your business expands.
          </p>
          <h1>We are HR Experts we can help</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
