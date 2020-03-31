
import React, {useContext} from 'react';
import {AuctionContext} from '../../Contexts/AuctionContext';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Auctions = () => {
  const { allAuctions, search } = useContext(AuctionContext);
  let { id } = useParams();

  console.log(search);

  const filter = allAuctions.filter(auction => auction.Titel.includes(search));
  console.log(filter);

  if (id === "all") {
    return (
      <div className="auctionContainer">
        <h1>All/Search Auctions page</h1>
        <p>Detta är söksidan</p>
      </div>
    );
  } else if (id === "historic") {
    return (
      <div className="auctionContainer">
        <h1>Historical Auctions page</h1>
        <p>Detta är historiska sidan</p>
          <div className="container">
            let historicAuctions = allAuctions.map(auction => {

            })
          </div>

      </div>
    );
  } else {

    let actualAuctions = allAuctions.map(auction => {
        return(
      <div className="col-md-4">
        <div className="card" key={auction.AuktionID}>
            <Link to={`/Details/${auction.AuktionID}`}>
            <div id="auction_card">
                <div className="card-body">
                    <h5 className="card-title text-sm-center">{auction.Titel}</h5>
                    <p className="card-text text-center">{auction.Beskrivning}</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Start: {auction.StartDatum}</li>
                        <li className="list-group-item">Slut: {auction.StartDatum}</li>
                        <li className="list-group-item">Utropspris: {auction.Utropspris} kr</li>
                        <li className="list-group-item">Nuvarande pris: xx kr</li>
                    </ul>
                </div>
            </div>
            </Link>
        </div>
        </div>
        );
    })
    return (
        <div className="auctionContainer container">
          <h1 className="text-center">Actual Auctions page</h1>
          <div className="row">
            {actualAuctions}
          </div>
        </div>
      );
  }
};

export default Auctions;
