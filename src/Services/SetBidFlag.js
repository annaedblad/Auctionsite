import GetAllBids from "../Repo/GetAllBids";

const SetBidFlag = async allAuctions => {
  await allAuctions.forEach(auction => {
    GetAllBids(auction.AuktionID).then(bids => {
      if (bids.length > 0) auction.hasBid = true;
      else auction.hasBid = false;
    });
  });
};

export default SetBidFlag;
