import React, { createContext } from "react";


export const AuctionContext = createContext();

const AuctionContextProvider = props => {
  
    const GetActual = () => {
    const data = "FakeFetchAllActual";
    console.log("fetching");
    return data;
  };


  return (
    <AuctionContext.Provider value={{ GetActual }}>
      {props.children}
    </AuctionContext.Provider>
  );
};

export default AuctionContextProvider;
