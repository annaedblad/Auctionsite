import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styling/Admin.css";
import { AuctionContext } from "../../Contexts/AuctionContext";

const Admin = () => {
  //logic needs to be created
  // let list = props.values.filter(allAuctions => {
  //     return(<li>{allAuctions} <button onClick = {() => props.remove(openAuctionItem)}>Ta bort</button></li>)
  // });
  const {
    updateAuction,
    allAuctions,
    //appendLeadingZeroes,
    bids,
    getBids,
    copyDetails,
    deleteAuction
  } = useContext(AuctionContext);
  
  const handleDelete = e => {
    deleteAuction(e.target.id);
  };
  const handleCopyDetails = e => {
    copyDetails(e.target.id);
  };
  var currentDate = new Date();
  
  /*var date =
  currentDate.getFullYear() +
    "-" +
    appendLeadingZeroes(currentDate.getMonth() + 1) +
    "-" +
    appendLeadingZeroes(currentDate.getDate()) +
    "T" +
    appendLeadingZeroes(currentDate.getHours()) +
    ":" +
    appendLeadingZeroes(currentDate.getMinutes()) +
    ":" +
    appendLeadingZeroes(currentDate.getSeconds());*/

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
      <blockquote class="blockquote text-center">
        <h3>Admin Menu</h3>
      </blockquote>
      <div className="row">
        <div className="col-sm">
          <div className="card" id="left">
            <form onSubmit={"some kind of logic"}>
              <div className="form-group row">
                <label for="inputName" class="col-sm-2 col-form-label">
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
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="inputDescription"
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
                    placeHolder="max 1000 signs"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="inputPrice" className="col-sm-2 col-form-label">
                  Price
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="price"
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
                    placeholder="Starts when you click on 'Add new"
                    disabled
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="inputeEnd" className="col-2 col-form-label">
                  Expiration
                </label>
                <div className="col-9">
                  <input
                    className="form-control"
                    type="datetime-local"
                    id="end"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="inputName" class="col-sm-2 col-form-label">
                  Creator
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="creator"
                    required                                        
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-11">
                  <button
                    type="submit"
                    className="btn btn-outline-info my-2 my-sm-0 float-right"
                  >
                    Add new / Update
                  </button>{" "}
                  {/*needs to be toggable or 2 buttons*/}
                  <button
                    type="reset"
                    className="btn btn-outline-info my-2 my-sm-0 float-right"
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
              <div class="card" id="right">
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
