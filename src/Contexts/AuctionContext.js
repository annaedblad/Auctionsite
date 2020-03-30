import React, { createContext, useState, useEffect } from "react";

export const AuctionContext = createContext();

const AuctionContextProvider = props => {

  const [allAuctions, setAllAuctions] = useState([]);

  useEffect(() => {
    (async () => {
      let uri = 'http://nackowskis.azurewebsites.net/api/Auktion/2220';
      let fetchedData = await fetch(uri).then(res => res.json());
      setAllAuctions(fetchedData);
    })();
  }, [])

  const [search, setSearch] = useState('');

  const listAuctions = (searchParam) => {
    setSearch(searchParam);
    console.log("It went thisss farrr");

  }
  const [bids, setBids] = useState([]);

  async function getBids(auctionID) {
    let uri = 'http://nackowskis.azurewebsites.net/api/bud/2220/' + auctionID;
    let fetchedData = await fetch(uri).then(res => res.json());
    setBids(fetchedData);
  }

  const updateAuction = (auction) => {
    let uri = 'http://nackowskis.azurewebsites.net/api/Auktion/2220';
    fetch(uri, {
      method: 'PUT',
      body: JSON.stringify(auction),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(() => console.log("Auction Updated"));
  }

  //Här börjar anna koda ta bort om något fuckar ur
  const fetchBids = (bids) => {
    let url = "";
  }
<<<<<<< HEAD
  //Här slutar anna koda sitt styckeeee



  return (
    <AuctionContext.Provider value={{ allAuctions, search, listAuctions, updateAuction, getBids, bids }}>
=======
 
  const appendLeadingZeroes = (n) =>{
    if(n <= 9){
      return "0" + n;
    }
    return n;
  }
  
  return (
    <AuctionContext.Provider value={{ allAuctions, search, listAuctions, updateAuction, appendLeadingZeroes}}>
>>>>>>> a674c16b234698285584dd8ed068b2d175419092
      {props.children}
    </AuctionContext.Provider>
  );
};

export default AuctionContextProvider;
