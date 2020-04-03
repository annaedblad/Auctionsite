import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styling/Admin.css";
import { useForm } from "react-hook-form";
import { AuctionContext } from "../../Contexts/AuctionContext";

const Admin = () => {
  const {
    updateAuction,
    allAuctions,
    copyDetails,
    deleteAuction,
    clearForm,
    createAuction,
    flag
  } = useContext(AuctionContext);

  const { register, handleSubmit, errors, reset } = useForm();
  
  const[auctionId, setAuctionId] = useState('');
  const[title, setTitle] = useState('');
  const[description, setDescription] = useState('');
  const[startDate, setStartDate] = useState('');
  const[endDate, setEndDate] = useState('');
  const[price, setPrice] = useState('');
  const[creator, setCreator] = useState('');
  const[code, setCode] = useState('');

  const resetState = () =>{
    setAuctionId('');
    setTitle('');
    setDescription('');
    setStartDate('');
    setEndDate('');
    setPrice('');
    setCreator('');
    setCode('');
  };

  const handleDelete = e => {
    reset();
    deleteAuction(e.target.id);
    resetState();
  };
  const handleCopyDetails = e => {
    reset();
    copyDetails(e.target.id);
    
    let auc = allAuctions.filter(on => on.AuktionID == e.target.id);
    setAuctionId(auc[0].AuktionID);
    setTitle(auc[0].Titel);
    setDescription(auc[0].Beskrivning);
    setStartDate(auc[0].StartDatum);
    setEndDate(auc[0].SlutDatum);
    setPrice(auc[0].Utropspris);
    setCreator(auc[0].SkapadAv);
    setCode(auc[0].Gruppkod);
    
    console.log(auc);
  };

  const createNewAuction = () =>{
    let auction = {
      AuktionID: "0000",
      Titel: title,
      Beskrivning: description,
      StartDatum: new Date().toLocaleString(),
      SlutDatum: endDate,
      Gruppkod: 2220,
      Utropspris: price,
      SkapadAv: creator
      };       
    createAuction(auction);
    reset();
    resetState();
  };

  const handleClearForm = () =>{
    clearForm();
    reset();
    resetState();
  };

  const handleUpdate = () =>{
    let auction = {
      AuktionID: auctionId,
      Titel: title,
      Beskrivning: description,
      StartDatum: startDate,
      SlutDatum: endDate,
      Gruppkod: code,
      Utropspris: price,
      SkapadAv: creator
      };
    updateAuction(auction);
    resetState();
    reset();
  };

  var currentDate = new Date(); 
  let ongoingAuctions = allAuctions.filter(on => Date.parse(on.SlutDatum) > currentDate.getTime() && flag.includes(on.AuktionID) === false);  
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
          className="btn btn-outline-warning btn-sm float-right"
        >
          Ta bort
        </button>
      </li>
    );
  });

  return (
    <div className="card" id="container">
      <blockquote className="blockquote text-center">
        <h1>Admin Meny</h1>
      </blockquote>
      <div className="row">
        <div className="col-sm">
          <div className="card" id="left">
            <form>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Titel
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="exampleRequired"
                    ref={
                      register({
                        required: true
                      })
                    }
                    maxLength="50"
                    minLength="5"
                    placeholder="max 50 tecken"    
                    onChange={(e) => setTitle(e.target.value)}              
                  />
                  {errors.exampleRequired && <span className = "errorMessage">*Obligatorisk</span>}
                </div>
              </div>
              <div className="form-group row">
                <label                  
                  className="col-sm-2 col-form-label"
                >
                  Beskrivning
                </label>
                <div className="col-sm-10">
                  <textarea
                    type="text"
                    className="form-control"
                    id="description"
                    name="exampleRequired2"
                    ref={
                      register({
                        required: true
                      })
                    }
                    maxLength="1000"
                    minLength="20"
                    placeholder="max 1000 tecken"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  {errors.exampleRequired2 && <span className = "errorMessage">*Obligatorisk</span>}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Utropspris
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    onChange={(e) => setPrice(e.target.value)}
                    name="exampleRequired3"
                    ref={
                      register({
                        required: true
                      })
                    }
                  />
                  {errors.exampleRequired3 && <span className = "errorMessage">*Obligatorisk</span>}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Start</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="start"
                    placeholder="Startar när du klickar på 'Lägg till'"
                    onChange={(e) => setStartDate(e.target.value)}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-2 col-form-label">
                  Slut
                </label>
                <div className="col-10">
                  <input
                    className="form-control"
                    type="datetime-local"
                    id="end"
                    onChange={(e) => setEndDate(e.target.value)}
                    name="exampleRequired4"
                    ref={
                      register({
                        required: true
                      })
                    }
                  />
                  {errors.exampleRequired4 && <span className = "errorMessage">*Obligatorisk</span>}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Skapad Av
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="creator"
                    onChange={(e) => setCreator(e.target.value)}
                    name="exampleRequired5"
                    ref={
                      register({
                        required: true
                      })}                                        
                  />
                  {errors.exampleRequired5 && <span className = "errorMessage">*Obligatorisk</span>}
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-12">
                <button
                    type="button"
                    className="btn btn-outline-warning my-2 my-sm-0 float-right"
                    id = "update"
                    onClick = {handleSubmit(handleUpdate)}
                    hidden           
                  >
                    Uppdatera
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-warning my-2 my-sm-0 float-right"
                    id = "addNew"
                    onClick = {handleSubmit(createNewAuction)}
                  >
                    Lägg till
                  </button>{" "}                  
                  <button
                    type="reset"
                    className="btn btn-outline-warning my-2 my-sm-0 float-right"
                    onClick = {handleClearForm}
                    
                  >
                    Rensa
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
