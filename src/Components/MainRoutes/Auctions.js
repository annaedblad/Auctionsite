import React, {useContext} from 'react';
import {AuctionContext} from '../../Contexts/AuctionContext';
import {useParams} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const Auctions = () => {
  const { allAuctions, search, appendLeadingZeroes} = useContext(AuctionContext);
  let { id } = useParams();

  const now = new Date();
  var date = (now.getFullYear()+'-'+appendLeadingZeroes(now.getMonth()+1)+'-'+appendLeadingZeroes(now.getDate())+'T'+appendLeadingZeroes(now.getHours())+':'+appendLeadingZeroes(now.getMinutes())+':'+appendLeadingZeroes(now.getSeconds()));

  if (id === "all") {
    return (
      <div className="auctionContainer">
        <h1>All/Search Auctions page</h1>
        <p>Detta är söksidan</p>
      </div>
    );
  } 
  else if (id === "historic") {

    let historicAuctions = allAuctions.filter(auction => 
      auction.SlutDatum < date && (auction.Titel.toLowerCase().includes(search.toLowerCase()) || !search))
    .map(auction => {
      return (
        <div className="col-sm-4" key={auction.AuktionID}>
          <div className="card">
            <a className="link" href={`/Details/${auction.AuktionID}`}>
            <div id="auction_card">
                <div className="card-body">
                    <h5 className="card-title text-sm-center">{auction.Titel}</h5>
                    <p className="card-text text-center">{auction.Beskrivning}</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Start: {auction.StartDatum}</li>
                        <li className="list-group-item">Slut: {auction.SlutDatum}</li>
                        <li className="list-group-item">Utropspris: {auction.Utropspris} kr</li>
                        <li className="list-group-item">Nuvarande pris: xx kr</li>
                    </ul>
                </div>
            </div>
            </a>
          </div>
        </div>
      )
    })

    
    return (

      <div className="auctionContainer container text-center">
        <h1>Historical Auctions page</h1>
        <p className="lead">Detta är historiska sidan</p>
          <div className="row">
            {historicAuctions}
          </div>

      </div>
    );
 
  } else {

    let actualAuctions = allAuctions
        .filter(auction => auction.Titel.toLowerCase().includes(search.toLowerCase()) || !search)
        .map(auction => {
        return(
        <div className="col-sm-4" key={auction.AuktionID}>
        <div className="card">
            <NavLink className="link" to={`/Details/${auction.AuktionID}`}>
            <div id="auction_card">
                <div className="card-body">
                    <h5 className="card-title text-sm-center">{auction.Titel}</h5>
                    <p className="card-text text-center">{auction.Beskrivning}</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Start: {auction.StartDatum}</li>
                        <li className="list-group-item">Slut: {auction.SlutDatum}</li>
                        <li className="list-group-item">Utropspris: {auction.Utropspris} kr</li>
                        <li className="list-group-item">Nuvarande pris: xx kr</li>
                    </ul>
                </div>
            </div>
            </NavLink>
        </div>
        </div>
        );
    })
    return (
        <div className="auctionContainer container">
          <h1 className="text-center">Actual Auctions page</h1>
          <div className="row justify-content-center">
            {actualAuctions}
          </div>
        </div>
      );
  }
};

export default Auctions;
