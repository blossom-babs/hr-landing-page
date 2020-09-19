import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

function Nav(){

    function handleClick(){

    }

    return(
        <nav className="nav flex space-between">
            <h1 className="nav__logo">HR<span className="nav__span">WORK</span></h1>
            <div onClick={handleClick} className="nav__icon"><MenuIcon/></div>
            <ul className="nav__links flex space-around">
                <li>Who we are</li>
               <li>Packages</li>
               <li>Blog</li>
               <li>Careers</li>
                <li>Contact</li>
            </ul>
           
        </nav>
    )
}

export default Nav;