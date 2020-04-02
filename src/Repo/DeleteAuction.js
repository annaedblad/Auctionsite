const DeleteAuction = id => {
    let uri = "http://nackowskis.azurewebsites.net/api/Auktion/2220/" + id;
    fetch(uri, {
      method: "DELETE"
      }).then(() => {
        console.log(`Auction with id ${id} deleted`);
      });
  };

  export default DeleteAuction;