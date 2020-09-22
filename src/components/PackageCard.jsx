import React from "react";
import PackageImage from "../assets/packages_img.png";

function PackageCard({
  style,
  data_aos,
  data_aos_delay,
  data_aos_duration,
  data_aos_easing,
}) {
  return (
    <div
      data-aos={data_aos}
      data-aos-delay={data_aos_delay}
      data-aos-duration={data_aos_duration}
      data-aos-easing={data_aos_easing}
      className="package-cards"
    >
      <div className="package-cards__img">
        <div className="the--img">
          <img src={`${PackageImage}`} alt="" />
          <div style={style} className="round-edge-buttton">
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
