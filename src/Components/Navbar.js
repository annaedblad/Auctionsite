import React, {useState, useContext} from 'react';
import {NavLink} from 'react-router-dom';
import { AuctionContext } from '../Contexts/AuctionContext';

const Navbar = () => {

    const { listAuctions } = useContext(AuctionContext);
    const[ auction, setAuctions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        listAuctions(auction);
        setAuctions('');
    }
    return (
        <div className="navbarContainer container">
            <nav className="navbar navbar-expand-sm justify-content-center">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-link rightItems">
                        <NavLink to="/">
                            <span className="lead"><i className="fa fa-home"></i> Auctions</span>
                        </NavLink>
                    </li>
                    <li className="nav-link rightItems">
                        <NavLink to="/historic"> 
                            <span className="lead">Avslutade auktioner</span>
                        </NavLink>
                    </li>
                    <li className="nav-link rightItems">
                        <NavLink to="/Admin">
                            <span className="lead">Admin</span>
                        </NavLink>
                    </li>
                </ul>
                <div>
                    <form  onSubmit={handleSubmit} className="form-inline">
                    <NavLink to="all" className="btn btn-outline-info my-2 my-sm-0" type="submit">

                        <input className="form-inline form-control mr-sm-2" 
                            type="search" 
                            value={auction}
                            placeholder="Search for auction..." 
                            aria-label="Search" 
                            onChange={(e) => setAuctions(e.target.value)}
                        />
                            Search              
                        </NavLink>
                    </form>  
                </div>
            </nav>
        </div>
    );
}

export default Navbar;