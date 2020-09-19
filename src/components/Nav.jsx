import React from 'react';


function Nav(){
    return(
        <nav className="nav flex space-between">
            <h1 className="nav__logo">HR<span className="nav__span">WORK</span></h1>
            <ul className="nav__links flex space-around">
                <li className="nav__link">Who we are</li>
               <li className="nav__link">Packages</li>
               <li className="nav__link">Blog</li>
               <li className="nav__link">Careers</li>
                <li className="nav__link">Contact</li>
            </ul>
        </nav>
    )
}

export default Nav;