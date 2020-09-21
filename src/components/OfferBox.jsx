import React from "react";

function OfferBox({ title, main, content }) {
    return (
        <div className="offer-box">
        <h1 className="offer-box__title">{title}</h1>
        <span className="offer-box__main">{main}</span>
        <p className="offer-box__content">{content}</p>
      </div>
    )

}

export default OfferBox;
