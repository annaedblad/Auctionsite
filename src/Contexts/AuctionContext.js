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
  
    const GetActual = () => {
    const data = "FakeFetchAllActual";
    console.log("fetching");
    return data;
  };


  return (
    <AuctionContext.Provider value={{ GetActual, allAuctions }}>
      {props.children}
    </AuctionContext.Provider>
  );
};

export default AuctionContextProvider;
