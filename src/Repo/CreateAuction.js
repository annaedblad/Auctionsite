const CreateAuction = (auction) => {
    let uri = "http://nackowskis.azurewebsites.net/api/Auktion/2220";
    fetch(uri, {
      method: "POST",
      body: JSON.stringify(auction),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }).then(() => {
      console.log("Auction Created");
    });
  };

  export default CreateAuction;