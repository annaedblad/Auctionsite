import React, { createContext, useState, useEffect } from "react";

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
      setBidFlag(fetchedData);
      setAllAuctions(fetchedData);
    })();
  },[]);

  const updateAllAuctions = async () =>{
    let uri = "http://nackowskis.azurewebsites.net/api/Auktion/2220";
      let fetchedData = await fetch(uri).then(res => res.json()).then(data => {
        console.log(data);
        return data;
      });
      setBidFlag(fetchedData);
      setAllAuctions(fetchedData);
  }

  const setBidFlag = (data) =>{
    data.forEach(auction => {
      hasBids(auction.AuktionID).then(bids => {
        if(bids){
          auction.hasBid = true;
        }
        else{
          auction.hasBid = false;
        }
      })
    });
  }

  const [search, setSearch] = useState("");

  const listAuctions = searchParam => {
    setSearch(searchParam);
    console.log({searchParam})
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

  const hasBids = async (auctionID) =>{
    let uri = "http://nackowskis.azurewebsites.net/api/bud/2220/" + auctionID;
    let bidBool = await fetch(uri)
    .then(res => res.json())
    .then(data => {
      if(data.length > 0){
        return true;
      }
      else{
        return false;
      }
    });
    return bidBool;
  }

  const updateAuction = (auction) => {
    let uri = "http://nackowskis.azurewebsites.net/api/Auktion/2220/";
    fetch(uri, {
      method: "PUT",
      body: JSON.stringify(auction),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }).then(() => console.log(
      auction));
      updateAllAuctions();
  };

  const createAuction = (auction) => {
    let uri = "http://nackowskis.azurewebsites.net/api/Auktion/2220";
    fetch(uri, {
      method: "POST",
      body: JSON.stringify(auction),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }).then(() => {
      console.log("Auction Created");
      updateAllAuctions();
    });
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
    document.getElementById("price").value = id[0].Utropspris;
    document.getElementById("start").value = new Date(Date.parse(id[0].StartDatum)).toLocaleString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).replace(',','');
    document.getElementById("end").value = id[0].SlutDatum;
    document.getElementById("creator").value = id[0].SkapadAv;  
    document.getElementById("update").removeAttribute("hidden");
    document.getElementById("addNew").setAttribute("hidden", true);    
  }

  const clearForm = () =>{
    document.getElementById("addNew").removeAttribute("hidden");
    document.getElementById("update").setAttribute("hidden", true);
    
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
        updateAllAuctions,
        hasBids     
      }}
    >
      {props.children}
    </AuctionContext.Provider>
  );
};

export default AuctionContextProvider;
