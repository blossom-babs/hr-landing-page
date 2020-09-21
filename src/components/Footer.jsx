import React from "react";
import Logo from "./Logo";
import Social from "./Social";
import ForumIcon from '@material-ui/icons/Forum';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__button">Chat with us 
      <span><ForumIcon/></span></div>
      <div className="footer__group-one">
        <Logo span__one="footer__logo--one" span__two="footer__logo--two" />
        <div className="footer__links">
          About | Our Packages | Blog | Careers | Contact
        </div>
        <div className="footer__contact">
          <span className="footer__contact--heading">CONTACT US</span> 11 Deji Olamiju Street, Soluyi-Gbagada, Lagos Call:
          07034417961 Email: info@alphaduxconsulting.com
        </div>
      </div>
      <div className="footer__group-two">
        <div className="footer__copyright">
          © 2019 HR Work All right reserved
        </div>
        <div className="footer__terms">Terms & Conditions | Privacy Policy</div>
        <div className="footer__socials">
          <Social holder="footer__icons" item="footer__icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
