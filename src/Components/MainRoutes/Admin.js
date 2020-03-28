import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styling/Admin.css';



const Admin = (/*props*/) => {   

    //logic needs to be created
    // let list = props.values.map(openAuctionItem => {
    //     return(<li>{openAuctionItem} <button onClick = {() => props.remove(openAuctionItem)}>Ta bort</button></li>)
    // });

    return (
        <div className="card" id = "container">
            <blockquote class="blockquote text-center">
                <h3>Admin Meny</h3>
            </blockquote>            
            <div className = "row">
                <div className = "col-sm">
                <div className="card" id = "left">
                    <form onSubmit = {"some kind of logic"}>
                        <div className="form-group row">
                            <label for="inputName" class="col-sm-2 col-form-label">Titel</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="name" required maxLength="50" minLength = "5" placeholder = "max 50 tecken"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputDescription" className="col-sm-2 col-form-label">Beskrivning</label>
                            <div className="col-sm-9">
                                <textarea type="text" className="form-control" id="description" required maxLength="1000" minLength = "20" placeHolder = "max 1000 tecken"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputPrice" className="col-sm-2 col-form-label">Pris</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="price" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Start</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="start" placeholder = "Startar när du klickar på 'Lägg till'" disabled/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputeEnd" className="col-2 col-form-label">Slut</label>
                            <div className="col-9">
                                <input className="form-control" type="datetime-local" id="end" required/>
                            </div>
                        </div>
                        <div className="form-group row">                            
                            <div className="col-sm-11">                            
                                <button type="submit" className="btn btn-outline-dark btn-sm float-right">Lägg till / Uppdatera</button>  {/*needs to be toggable or 2 buttons*/}
                                <button type="button" className="btn btn-outline-dark btn-sm float-right">Rensa Formulär</button>                               
                            </div>                            
                        </div>
                    </form>
                </div>
                </div>
                <div className = "col-sm">
                    <div className = "row">
                        <div className="col-12">
                            <div class="card" id = "right">                                                        
                                <ul className = "list-group overflow-auto">
                                    {/* just for testing, will be populated via mapping */ } 
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                    <a href="#" class="list-group-item list-group-item-action">Test 1 2 <button type="button" className="btn btn-outline-dark btn-sm float-right">Ta bort</button></a>
                                </ul>                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;