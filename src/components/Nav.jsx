import React, {useState} from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from '@material-ui/icons/Close';
import Logo from "./Logo";


function Nav() {
    const [toggle, setToggle] = useState(false)

  function handleClick() {
      setToggle(true)
  }

  function handleClose(){
      setToggle(false)
  }

  return (
    <nav className="nav flex space-between">
      <div className="nav_svgs">
        <Logo span__one="nav__company-logo" span__two="nav__company-tagline"/>
      </div>
      <ul className="nav__links flex space-around">
        <li>Who we are</li>
        <li>Packages</li>
        <li>Blog</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
      <div onClick={handleClick} className="nav__icon">
        <MenuIcon />
      </div>
      <div style={{display: toggle ? 'block' : 'none'}} className="nav__mobile">
      <ul className="nav__mobile--links">
      <CloseIcon className="close--icon" onClick={handleClose}/>
        <li>Who we are</li>
        <li>Packages</li>
        <li>Blog</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
      </div>
    </nav>
  );
}

export default Nav;
