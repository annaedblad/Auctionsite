import React, {useContext} from 'react';
import {AuctionContext} from '../../Contexts/AuctionContext';

const Auctions = () => {
    const {GetActual} = useContext(AuctionContext);

    let fetchedData = GetActual();

    return (
        <div className="auctionContainer">
            <h1>Auctions page</h1>
            <p>{fetchedData}</p>
        </div>
    );
}

export default Auctions;