import React from "react";
import Image from "../assets/building.png";

function NewsCard() {
  return (
    <div className="flex">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="news__highlight"
      >
        <p className="text-red news__highlight--first-p">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit
        </p>
        <p className="news__highlight--second-p">30th Oct 2019</p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="news__img"
      >
        <img src={`${Image}`} alt="" />
      </div>
    </div>
  );
}

export default NewsCard;
