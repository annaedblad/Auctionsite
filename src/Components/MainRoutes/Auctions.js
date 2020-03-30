import React, { useContext } from "react";
import { AuctionContext } from "../../Contexts/AuctionContext";
import { useParams } from "react-router-dom";

const Auctions = () => {
  const { GetActual, allAuctions } = useContext(AuctionContext);
  let { id } = useParams();
  let fetchedData = GetActual();

  if (id === "all") {
    return (
      <div className="auctionContainer">
        <h1>All/Search Auctions page</h1>
        <p>{fetchedData}</p>
      </div>
    );
  } else if (id === "historic") {
    return (
      <div className="auctionContainer">
        <h1>Historical Auctions page</h1>
        <p>{fetchedData}</p>
      </div>
    );
  } else {
    return (
        <div className="auctionContainer">
          <h1>Actual Auctions page</h1>
          <p>{fetchedData}</p>
        </div>
      );
  }
};

export default Auctions;
