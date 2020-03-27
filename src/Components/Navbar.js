import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {

    //Just for testing routing remove and replace with Bootstrap
    
    return (
        <div className="navbarContainer">
            <ul>
                <li className="rightItems"><NavLink to="/">Auctions</NavLink></li>
                <li className="rightItems"><NavLink to="/Details">Details</NavLink></li>
                <li className="rightItems"><NavLink to="/Admin">Admin</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;