const GetAllBids = async (auctionID) => {
    let uri = "http://nackowskis.azurewebsites.net/api/bud/2220/" + auctionID;
    let result;
    await fetch(uri).then(res => result = res.json());
    return result;
}

export default GetAllBids;