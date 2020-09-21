import React from "react";
import Image from "./Image";
import Logos from "../Logos";

function Logo({ span__one, span__two, color_one, color_two, color_three }) {
  return (
    <div>
      <span className={span__one}>
        <svg
          width="41"
          height="44"
          viewBox="0 0 41 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.77202 43.2585C2.56886 43.2585 0 40.6579 0 37.4865V5.77203C0 2.56887 2.60058 0 5.77202 0C8.97518 0 11.5441 2.60059 11.5441 5.77203V37.4865C11.5758 40.6896 8.97518 43.2585 5.77202 43.2585Z"
            fill={color_one}
          />
          <path
            d="M29.1773 43.2585C25.9741 43.2585 23.4053 40.6579 23.4053 37.4865V5.77203C23.4053 2.56887 26.0059 0 29.1773 0C32.3805 0 34.9493 2.60059 34.9493 5.77203V37.4865C34.9493 40.6896 32.3488 43.2585 29.1773 43.2585Z"
            fill={color_two}
          />
          <path
            d="M17.3478 15.3816H34.981C38.1525 15.3816 40.7531 17.9505 40.7531 21.1536C40.7531 24.3568 38.1842 26.9257 34.981 26.9257H17.3478C14.1446 26.9257 11.5758 29.5262 11.5758 32.7611V37.55C11.5758 40.7214 8.94347 43.322 5.77202 43.322C2.60058 43.322 0 40.7532 0 37.55V32.7294C0 23.1833 7.77003 15.3816 17.3478 15.3816Z"
            fill={color_three}
          />
        </svg>
      </span>
      <span className={span__two}>
        {Logos.map((logo, index) => (
          <Image key={index} src={logo.src} alt={logo.alt} />
        ))}
      </span>
    </div>
  );
}

export default Logo;
