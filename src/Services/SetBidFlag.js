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
  
  export default setBidFlag;