import React, { createContext, useState, useEffect } from "react";
import Admin from "../Components/MainRoutes/Admin";

export const AuctionContext = createContext();

const AuctionContextProvider = props => {
  const [allAuctions, setAllAuctions] = useState([]);

  useEffect(() => {
    (async () => {
      let uri = "http://nackowskis.azurewebsites.net/api/Auktion/2220";
      let fetchedData = await fetch(uri).then(res => res.json()).then(data => {
        console.log(data);
        return data;
      });
      setAllAuctions(fetchedData);
    })();
  },[]);

  const updateAllAuctions = async () =>{
    let uri = "http://nackowskis.azurewebsites.net/api/Auktion/2220";
      let fetchedData = await fetch(uri).then(res => res.json()).then(data => {
        console.log(data);
        return data;
      });
      setAllAuctions(fetchedData);
  }

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
    let fetchedData = await fetch(uri)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data;
    });
    return fetchedData;
  }

  const updateAuction = (auction) => {
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

  const createAuction = (auction) => {
    let uri = "http://nackowskis.azurewebsites.net/api/Auktion/2220";
    auction.StartDatum = new Date();
    auction.Gruppkod = 2200;
    fetch(uri, {
      method: "POST",
      body: JSON.stringify(auction),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }).then(() => console.log("Auction Created"));
  };

  async function setNewBid (bid) {
    let uri = 'http://nackowskis.azurewebsites.net/api/bud/2220/';
    await fetch(uri, {
      method: 'POST',
      body: JSON.stringify(bid),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(() => console.log("Updated"));
  }

  const deleteAuction = id => {
    let uri = "http://nackowskis.azurewebsites.net/api/Auktion/2220/" + id;
    fetch(uri, {
      method: "DELETE"
      }).then(() => {
        console.log(`Auction with id ${id} deleted`);
        updateAllAuctions();
      });
  };

  const copyDetails = inId => {
    let id = allAuctions.filter(on => on.AuktionID == inId);
    
    document.getElementById("name").value = id[0].Titel;
    document.getElementById("description").value = id[0].Beskrivning;
    document.getElementById("price").value = id[0].Utropspris + ' kr';
    document.getElementById("start").value = new Date(Date.parse(id[0].StartDatum)).toLocaleString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).replace(',','');
    document.getElementById("end").value = id[0].SlutDatum;
    document.getElementById("creator").value = id[0].SkapadAv;  
    document.getElementById("update").removeAttribute("disabled");
    document.getElementById("addNew").setAttribute("disabled", true);    
  }

  const clearForm = () =>{
    document.getElementById("addNew").removeAttribute("disabled");
    document.getElementById("update").setAttribute("disabled", true);
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
        bids,
        getBids,
        copyDetails,
        setNewBid,
        returnBids,
        clearForm,
        updateAllAuctions      
      }}
    >
      {props.children}
    </AuctionContext.Provider>
  );
};

export default AuctionContextProvider;
