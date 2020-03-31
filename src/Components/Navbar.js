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
                        <NavLink to="/Historic"> 
                            <span className="lead">Avslutade auktioner</span>
                        </NavLink>
                    </li>
                    <li className="nav-link rightItems">
                        <NavLink to="/Admin">
                            <span className="lead">Admin</span>
                        </NavLink>
                    </li>
                </ul>
                <form  onSubmit={handleSubmit} className="form-inline">
                    <input className="form-inline form-control mr-sm-2" 
                        type="search" 
                        value={auction}
                        placeholder="Search for auction" 
                        aria-label="Search" 
                        onChange={(e) => setAuctions(e.target.value)}
                    />
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