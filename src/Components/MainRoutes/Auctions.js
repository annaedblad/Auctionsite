import React, {useContext, useEffect} from 'react';
import {AuctionContext} from '../../Contexts/AuctionContext';
import {useParams} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import SoldAuction from '../../Styling/imgs/SoldAuction.jpg';
import AuctionOpen from '../../Styling/imgs/AuctionOpen.png';

const Auctions = () => {
  const { allAuctions, search, updateAllAuctions} = useContext(AuctionContext);
  let { id } = useParams();
  
  useEffect(()=>{
    updateAllAuctions();
  },[id])

  var date = new Date();
  let ongoingAuctions = allAuctions.filter(on => Date.parse(on.SlutDatum) > date.getTime());

  function getOngoing() {
    return (
        ongoingAuctions
        .filter(auction => auction.Titel.toLowerCase().includes(search.toLowerCase()) || !search)
        .map(auction => {
        return(
        <div className="col-sm-4" key={auction.AuktionID}>
        <div className="card">
            <NavLink className="link" to={`/Details/${auction.AuktionID}`}>
            <div id="auction_card">
            <img src={AuctionOpen} id="imgSold" alt=""/>
                <div className="card-body">
                    <h5 className="card-title text-sm-center">{auction.Titel}</h5>
                    <p className="card-text text-center">{auction.Beskrivning}</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Start: {new Date(Date.parse(auction.StartDatum)).toLocaleString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).replace(',','')}</li>
                        <li className="list-group-item">Slut: {new Date(Date.parse(auction.SlutDatum)).toLocaleString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).replace(',','')}</li>
                        <li className="list-group-item">Utropspris: {auction.Utropspris} kr</li>
                    </ul>
                </div>
            </div>
            </NavLink>
        </div>
        </div>
        );
    })
    )
  }

  function getHistoric() {
    return (
        allAuctions.filter(auction => 
        Date.parse(auction.SlutDatum) < date.getTime() && (auction.Titel.toLowerCase().includes(search.toLowerCase()) || !search))
            .map(auction => {
              return (
                <div className="col-sm-4" key={auction.AuktionID}>
                  <div className="card">
                    <a className="link" href={`/Details/${auction.AuktionID}`}>
                    <div id="auction_card">
                      <img src={SoldAuction} id="imgSold" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title text-sm-center">{auction.Titel}</h5>
                            <p className="card-text text-center">{auction.Beskrivning}</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Start: {new Date(Date.parse(auction.StartDatum)).toLocaleString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).replace(',','')}</li>
                                <li className="list-group-item">Slut: {new Date(Date.parse(auction.SlutDatum)).toLocaleString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).replace(',','')}</li>
                                <li className="list-group-item">Utropspris: {auction.Utropspris} kr</li>
                            </ul>
                        </div>
                    </div>
                    </a>
                  </div>
                </div>
              )
            })
    )}
 
  if (id === "all") {

    return (
        <div className="auctionContainer container">
          <h1 className="text-center">All Auctions available here</h1>
          <div className="row justify-content-center">
            {getOngoing()}
            <div className="row justify-content-center">
            </div>
            {getHistoric()}
          </div>
        </div>
      );
  }
  else if (id === "historic") {
    return (
      <div className="auctionContainer container text-center">
        <h1>Historical Auctions page</h1>
        <p className="lead">Detta är historiska sidan</p>
          <div className="row">
            {getHistoric()}
          </div>

      </div>
    );
 
  } else {

    return (
        <div className="auctionContainer container">
          <h1 className="text-center">Actual Auctions page</h1>
          <div className="row justify-content-center">
            {getOngoing()}
          </div>
        </div>
      );
  }
};

export default Auctions;
