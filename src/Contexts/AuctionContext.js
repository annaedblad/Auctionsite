import React, { createContext, useState, useEffect } from "react";

export const AuctionContext = createContext();

const AuctionContextProvider = props => {

  const[allAuctions, setAllAuctions] = useState([]);

  useEffect(()=>{
    (async () =>{
      let uri = 'http://nackowskis.azurewebsites.net/api/Auktion/2220';
      let fetchedData = await fetch(uri).then(res => res.json());
      setAllAuctions(fetchedData);
    })();
  },[])

  const [search, setSearch] = useState('');

  const listAuctions = (searchParam) => {
    setSearch(searchParam);
  }

  const updateAuction = (auction) =>{
    let uri = 'http://nackowskis.azurewebsites.net/api/Auktion/2220';
    fetch(uri,{
     method: 'PUT',
     body: JSON.stringify(auction),
     headers: {
     'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json'
     }
     }).then(() => console.log("Auction Updated"));
  }
 
  
  return (
    <AuctionContext.Provider value={{ allAuctions, search, listAuctions, updateAuction}}>
      {props.children}
    </AuctionContext.Provider>
  );
};

export default AuctionContextProvider;
