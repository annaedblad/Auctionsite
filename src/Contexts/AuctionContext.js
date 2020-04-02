import React, { createContext, useState, useEffect } from "react";
import GetAllAuctions from '../Repo/GetAllAuctions';
import GetAllBids from '../Repo/GetAllBids';
import CreateBid from '../Repo/CreateBid';
import SetBidFlag from '../Services/SetBidFlag';
import CreateAuction from '../Repo/CreateAuction';
import UpdateAuction from '../Repo/UpdateAuction';
import DeleteAuction from '../Repo/DeleteAuction';
import CopyDetails from '../Services/CopyDetails';
import ClearForm from '../Services/ClearForm';

export const AuctionContext = createContext();

const AuctionContextProvider = props => {
  const [allAuctions, setAllAuctions] = useState([]);
  const [search, setSearch] = useState("");
  const [bids, setBids] = useState([]);

  useEffect(() => {
   updateAllAuctions();
  },[]);

  const updateAllAuctions = async () =>{
      let fetchedData = await GetAllAuctions();
      SetBidFlag(fetchedData);
      setAllAuctions(fetchedData);
  }

  const updateAuction = (auction) => {
    UpdateAuction(auction);
  };

  const createAuction = (auction) => {
    CreateAuction(auction);
  };

  
  const deleteAuction = id => {
    DeleteAuction(id);
  };

  const listAuctions = searchParam => {
    setSearch(searchParam);
    console.log({searchParam})
  };
  
  const getBids = async (auctionID) => {
    let fetchedData = await GetAllBids(auctionID);
    setBids(fetchedData);
  }  

 const setNewBid = async (bid) => {
    await CreateBid(bid);
  }

  const copyDetails = inId => {
    CopyDetails(inId,allAuctions);  
  }

  const clearForm = () =>{
    ClearForm();
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
        clearForm,
        updateAllAuctions    
      }}
    >
      {props.children}
    </AuctionContext.Provider>
  );
};

export default AuctionContextProvider;
