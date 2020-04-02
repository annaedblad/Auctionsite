const SetNewBid = async (bid) => {
    let uri = 'http://nackowskis.azurewebsites.net/api/bud/2220/';
    await fetch(uri, {
      method: 'POST',
      body: JSON.stringify(bid),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(() => console.log("New bid added"));
  }

  export default SetNewBid;