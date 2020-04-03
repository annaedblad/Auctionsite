const UpdateAuction = async (auction) => {
    let uri = "http://nackowskis.azurewebsites.net/api/Auktion/2220/";
    await fetch(uri, {
      method: "PUT",
      body: JSON.stringify(auction),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }).then(() => console.log(
      auction));
  };

export default UpdateAuction;