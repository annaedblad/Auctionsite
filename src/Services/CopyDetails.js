const CopyDetails = (inId,allAuctions) => {
    let id = allAuctions.filter(on => on.AuktionID == inId);
    
    document.getElementById("name").value = id[0].Titel;
    document.getElementById("description").value = id[0].Beskrivning;
    document.getElementById("price").value = id[0].Utropspris;
    document.getElementById("start").value = new Date(Date.parse(id[0].StartDatum)).toLocaleString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).replace(',','');
    document.getElementById("end").value = id[0].SlutDatum;
    document.getElementById("creator").value = id[0].SkapadAv;  
    document.getElementById("update").removeAttribute("hidden");
    document.getElementById("addNew").setAttribute("hidden", true);    
}

export default CopyDetails;