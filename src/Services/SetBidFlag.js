import GetAllBids from "../Repo/GetAllBids";

const setBidFlag = async allAuctions => {
  allAuctions.forEach(auction => {
    GetAllBids(auction.AuktionID).then(bids => {
      if (bids.length > 0) auction.hasBid = true;
      else auction.hasBid = false;
    });
  });
};

export default setBidFlag;
