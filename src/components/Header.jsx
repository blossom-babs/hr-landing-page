import React from 'react';
import HeaderImage from '../assets/header_img.png'

function Header(){
     const bgStyle = {
        background: `url(${HeaderImage})`,
        backgroundSize: 'fill',
        backgroundRepeat: 'no-repeat',
        borderBottomRadius: '200px',
//         backgroundColor: 'rgba(0, 0, 0, 0.86)',
// clipPath: 'polygon(50% 0%, 100% 0, 100% 35%, 100% 65%, 83% 78%, 55% 84%, 28% 79%, 0% 70%, 0% 35%, 0 0)'
clipPath: `polygon(50% 0%, 
    100% 0, 100% 55%, 100% 65%, 60% 84%, 60% 84%, 
    30% 79%, 0% 70%, 0% 35%, 0 0)`

    }
    return(
        <header className="header">
            <img className="header__image" style={bgStyle} src={`${HeaderImage}`} alt=""/>
        </header>
    )
}

export default Header;