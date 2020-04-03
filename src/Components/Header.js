import React from 'react';
import logo from '../Styling/imgs/header.svg'
const Header = () => {
    return (
        <div className="headerContainer">
            <img src={logo} alt="logo" className="logo"/>
        </div>
    );
}

export default Header;