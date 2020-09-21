import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Social({ holder, item }) {
  return (
    <div className={holder}>
      <FacebookIcon className={item} />
      <InstagramIcon className={item} />
      <TwitterIcon className={item} />
      <LinkedInIcon className={item} />
    </div>
  );
}

export default Social;
