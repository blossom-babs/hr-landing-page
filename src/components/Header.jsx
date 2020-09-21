// eslint-disable-next-line

import React from "react";
import HeaderImage from "../assets/header_img.png";
import Nav from "./Nav";
import Social from "./Social";

function Header() {
  const bgStyle = {
    background: `linear-gradient(black, rgba(0, 0, 0, 0.5)), url(${HeaderImage})`
  };

  return (
    <div className="header" style={bgStyle}>
      <Nav />
      <div className="grid template-col-one">
       <Social holder="icons" item="icon"/>
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
