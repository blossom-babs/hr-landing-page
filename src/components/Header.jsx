// eslint-disable-next-line

import React from "react";
// import images
import HeaderImage from "../assets/header_img.png";
// import Nav component
import Nav from "./Nav";

function Header() {

    const backgroundStyle = {
        backgroundImage: `url(${HeaderImage})`
    }

  return (
    <header style={backgroundStyle} className="header">
      <Nav />
    </header>
  );
}

export default Header;
