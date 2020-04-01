import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styling/Admin.css";
import { AuctionContext } from "../../Contexts/AuctionContext";

const Admin = (props) => {
  const {
    updateAuction,
    allAuctions,
    bids,
    getBids,
    copyDetails,
    deleteAuction, 
    returnBids,
    clearForm,
    createAuction
  } = useContext(AuctionContext);
  
  const[title, setTitle] = useState('');
  const[description, setDescription] = useState('');
  const[startDate, setStartDate] = useState('');
  const[endDate, setEndDate] = useState('');
  const[price, setPrice] = useState('');
  const[creator, setCreator] = useState('');

  const handleDelete = e => {
    deleteAuction(e.target.id);
  };
  const handleCopyDetails = e => {
    copyDetails(e.target.id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let end = document.getElementById("end");
    let price = document.getElementById("price");
    let creator = document.getElementById("creator");

    let auction = {
      AuktionID: "0000",
      Titel: title.value,
      Beskrivning: description.value,
      StartDatum: new Date(),
      SlutDatum: new Date(Date.parse(end.value).toISOString()),
      Gruppkod: 2220,
      Utropspris: price.value,
      SkapadAv: creator.value
      };
    createAuction(auction);
  };

  const createNewAuction = () =>{
    let auction = {
      AuktionID: "0000",
      Titel: title,
      Beskrivning: description,
      StartDatum: new Date(),
      SlutDatum: endDate,
      Gruppkod: 2220,
      Utropspris: price,
      SkapadAv: creator
      };

    createAuction(auction);
  };

  var currentDate = new Date();

  let ongoingAuctions = allAuctions.filter(on => Date.parse(on.SlutDatum) > currentDate.getTime());
  
  let list = ongoingAuctions.map(auction => {
    return (
      <li
        id={auction.AuktionID}
        onClick={handleCopyDetails}
        className="list-group-item list-group-item-action"
        key={auction.AuktionID}
      >
        {auction.Titel}{" "}
        <button
          id={auction.AuktionID}
          onClick={handleDelete}
          type="button"
          className="btn btn-outline-info btn-sm float-right"
        >
          Delete
        </button>
      </li>
    );
  });

  // let fakeAuctionUpdate = {
  //   AuktionID: 4676,
  //   Titel: "Antik testlampa 2",
  //   Beskrivning: "Uppdaterad via kod",
  //   StartDatum: "2020-03-26T00:00:00",
  //   SlutDatum: "2020-03-31T00:00:00",
  //   Gruppkod: 2220,
  //   Utropspris: 20000,
  //   SkapadAv: "Richard"
  // };

  // updateAuction(fakeAuctionUpdate);

  return (
    <div className="card" id="container">
      <blockquote className="blockquote text-center">
        <h3>Admin Menu</h3>
      </blockquote>
      <div className="row">
        <div className="col-sm">
          <div className="card" id="left">
            <form onSubmit={handleSubmit}>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Title
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    maxLength="50"
                    minLength="5"
                    placeholder="max 50 signs"    
                    onChange={(e) => setTitle(e.target.value)}              
                  />
                </div>
              </div>
              <div className="form-group row">
                <label                  
                  className="col-sm-2 col-form-label"
                >
                  Description
                </label>
                <div className="col-sm-9">
                  <textarea
                    type="text"
                    className="form-control"
                    id="description"
                    required
                    maxLength="1000"
                    minLength="20"
                    placeholder="max 1000 signs"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Price
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Start</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="start"
                    placeholder="Starts when you click on 'Add new'"
                    onChange={(e) => setStartDate(e.target.value)}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-2 col-form-label">
                  Expiration
                </label>
                <div className="col-9">
                  <input
                    className="form-control"
                    type="datetime-local"
                    id="end"
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Creator
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="creator"
                    onChange={(e) => setCreator(e.target.value)}
                    required                                        
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-11">
                <button
                    type="button"
                    className="btn btn-outline-info my-2 my-sm-0 float-right"
                    id = "update"
                    disabled                    
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-info my-2 my-sm-0 float-right"
                    id = "addNew"
                    onClick = {createNewAuction}
                  >
                    Add new
                  </button>{" "}
                  {/*needs to be toggable or 2 buttons*/}
                  <button
                    type="reset"
                    className="btn btn-outline-info my-2 my-sm-0 float-right"
                    onClick = {clearForm}
                    
                  >
                    Clear Form
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-sm">
          <div className="row">
            <div className="col-12">
              <div className="card" id="right">
                <ul className="list-group overflow-auto">
                  {/* just for testing, will be populated via mapping */}

                  {list}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
