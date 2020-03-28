import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {

    //Just for testing routing remove and replace with Bootstrap
    
    return (
        <div className="navbarContainer container">
            <nav className="navbar navbar-expand-sm justify-content-center">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-link rightItems">
                        <NavLink to="/">
                            <span className="lead"><i class="fa fa-home"></i> Auctions</span>
                        </NavLink>
                    </li>
                    <li className="nav-link rightItems">
                        <NavLink to="/Details"> 
                            <span className="lead">Details</span>
                        </NavLink>
                    </li>
                    <li className="nav-link rightItems">
                        <NavLink to="/Admin">
                            <span className="lead">Admin</span>
                        </NavLink>
                    </li>
                </ul>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Serach for auction" 
                        aria-label="Search" />
                    <button className="btn btn-outline-info my-2 my-sm-0" 
                        type="submit">
                        Search
                    </button>
                </form>   
            </nav>
        </div>
    );
}

export default Navbar;