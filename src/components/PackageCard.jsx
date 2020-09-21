import React from "react";
import PackageImage from "../assets/packages_img.png";

function PackageCard(props) {
  return (
    <div className="package-cards">
      <div className="package-cards__img">
        <div className="the--img">
          <img src={`${PackageImage}`} alt="" />
          <div style={props.style} className="round-edge-buttton">
            Retainership Category
          </div>
        </div>
      </div>
      <div className="package-cards__content">
        <h3 className="package-cards__content--title">HR Remote Manager</h3>
        <p className="package-cards__content--price">₦3,480</p>
        <p className="package-cards__content--items">
          Basic, Bronze, Foundation
        </p>
        <button className="round-button">Add to cart</button>
      </div>
    </div>
  );
}

export default PackageCard;
