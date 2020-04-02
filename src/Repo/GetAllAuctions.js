const GetAllAuctions = async () => {
    let uri = "http://nackowskis.azurewebsites.net/api/Auktion/2220";
    let result;
    await fetch(uri).then(res => result = res.json());
    return result;
}

export default GetAllAuctions;