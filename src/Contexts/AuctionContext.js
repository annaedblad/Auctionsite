import React, { createContext, useState, useEffect } from "react";
import GetAllAuctions from '../Repo/GetAllAuctions';
import GetAllBids from '../Repo/GetAllBids';
import CreateBid from '../Repo/CreateBid';
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
  const[flag, setFlag] = useState([]);

  useEffect(() => {
    const fetch = async () =>{
      let fetchedData = await GetAllAuctions();
      await flagAuctions(fetchedData).then(setAllAuctions(fetchedData));
      
    }
    fetch();
  },[]);

  const updateAllAuctions = async () =>{
      let fetchedData = await GetAllAuctions();
      setAllAuctions(fetchedData);
  }

  const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  const flagAuctions = async (data) => {
    let auctionWithBids = [];
    await asyncForEach(data, async (auction) => { 
      let bidA = await GetAllBids(auction.AuktionID);
      if(bidA.length > 0) auctionWithBids.push(auction.AuktionID);
    })
    setFlag(auctionWithBids);
  }

  const updateAuction = async (auction) => {
    await UpdateAuction(auction);
    await updateAllAuctions();
  };

  const createAuction = async (auction) => {
    await CreateAuction(auction);
    await updateAllAuctions();
  };

  
  const deleteAuction = async id => {
    await DeleteAuction(id);
    await updateAllAuctions();
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
        updateAllAuctions,
        flag  
      }}
    >
      {props.children}
    </AuctionContext.Provider>
  );
};

export default AuctionContextProvider;
