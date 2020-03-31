import React, { createContext, useState, useEffect } from "react";

export const AuctionContext = createContext();

const AuctionContextProvider = props => {
  const [allAuctions, setAllAuctions] = useState([]);

  useEffect(() => {
    (async () => {
      let uri = "http://nackowskis.azurewebsites.net/api/Auktion/2220";
      let fetchedData = await fetch(uri).then(res => res.json());
      setAllAuctions(fetchedData);
    })();
  }, []);

  const [search, setSearch] = useState("");

  const listAuctions = searchParam => {
    setSearch(searchParam);

    console.log("It went thisss farrr");
  };
  const [bids, setBids] = useState([]);

  async function getBids(auctionID) {
    let uri = "http://nackowskis.azurewebsites.net/api/bud/2220/" + auctionID;
    let fetchedData = await fetch(uri).then(res => res.json());
    setBids(fetchedData);
  }

  async function returnBids(auctionID) {
    let uri = "http://nackowskis.azurewebsites.net/api/bud/2220/" + auctionID;
    let fetchedData = await fetch(uri).then(res => res.json());
    return fetchedData;
  }

  const updateAuction = auction => {
    let uri = "http://nackowskis.azurewebsites.net/api/Auktion/2220";
    fetch(uri, {
      method: "PUT",
      body: JSON.stringify(auction),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }).then(() => console.log("Auction Updated"));
  };

  const createAuction = auction => {
    let uri = "http://nackowskis.azurewebsites.net/api/Auktion/2220";
    fetch(uri, {
      method: "POST",
      body: JSON.stringify(auction),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }).then(() => console.log("Auction Created"));
  };

  const deleteAuction = id => {
    let uri = "http://nackowskis.azurewebsites.net/api/Auktion/2220/" + id;
    fetch(uri, {
      method: "DELETE"
      }).then(() => console.log("Auction Deleted"));
  };

  const appendLeadingZeroes = n => {
    if (n <= 9) {
      return "0" + n;
    }
    return n;
  }

  const copyDetails = (auction) => {

    var title = document.getElementById("name").value = auction.Titel;
    var description = document.getElementById("description").value = auction.Beskrivning;
    var price = document.getElementById("price").value = auction.Pris;
    var start = document.getElementById("start").value = auction.StartDatum;
    var end = document.getElementById("end").value = auction.SlutDatum;

  }
  

  return (
    <AuctionContext.Provider
      value={{
        allAuctions,
        search,
        listAuctions,
        updateAuction,
        createAuction,
        deleteAuction,
        appendLeadingZeroes,
        bids,
        getBids,
        copyDetails,
        returnBids        
      }}
    >
      {props.children}
    </AuctionContext.Provider>
  );
};

export default AuctionContextProvider;
