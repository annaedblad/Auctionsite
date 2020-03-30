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

  return (
    <AuctionContext.Provider value={{ allAuctions }}>
      {props.children}
    </AuctionContext.Provider>
  );
};

export default AuctionContextProvider;
