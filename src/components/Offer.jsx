import React from "react";
import OfferBox from "./OfferBox";
import whyHr from "../assets/why_hr_img.png";
import { GridOneContent, GridTwoContent } from "../Offer";

function Offer() {
  const bgImg = {
    background: `linear-gradient(#002147, rgba(0, 33, 71, 0.5)), url(${whyHr})`,
  };
  return (
    <div className="offer" style={bgImg}>
      <p className="offer__desc">
        We bring a wealth of local market knowledge…
      </p>
      <h1 className="offer__heading">Why HR Work</h1>

      <div className="grid--one">
        {GridOneContent.map((item, index) => (
          <OfferBox
            key={index}
            title={item.title}
            main={item.main}
            content={item.content}
          />
        ))}
      </div>

      <div className="grid--two">
        {GridTwoContent.map((item, index) => (
          <OfferBox
            key={index}
            title={item.title}
            main={item.main}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Offer;
