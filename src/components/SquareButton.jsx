import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function SquareButton({content}) {
  return (
    <div>
      <a href="/" className="square-button">
        {content}
        <span className="arrow-icon">
          <ArrowRightIcon />
        </span>
      </a>
    </div>
  );
}

export default SquareButton;
