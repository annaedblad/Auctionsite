import React, { useContext } from "react";
import { AuctionContext } from "../../Contexts/AuctionContext";
import { useParams } from "react-router-dom";

const Auctions = () => {
  const { allAuctions } = useContext(AuctionContext);
  let { id } = useParams();

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
      </div>
    );
  } else {
    let actualAuctions = allAuctions.map(auction => {
        return(<div className="card" key={auction.AuktionID}>
            <p>{auction.Titel}</p>
            <p>Slutdatum:{auction.SlutDatum}</p>
            <p>Utropspris: {auction.Utropspris}</p>
        </div>);
    })
    return (
        <div className="auctionContainer">
          <h1>Actual Auctions page</h1>
          {actualAuctions}
        </div>
      );
  }
};

export default Auctions;
