import React, {useContext} from 'react';
import {AuctionContext} from '../../Contexts/AuctionContext';
import {useParams} from 'react-router-dom';
import BaconImg from '../../Styling/imgs/baconImg.png';

const Auctions = () => {
    const {GetActual} = useContext(AuctionContext);
    let { id } = useParams();
    let fetchedData = GetActual();

    let data = {
        "AuktionID": 4591,
        "Titel": "Bacon",
        "Beskrivning": "Gott",
        "StartDatum": "2015-01-01T00:00:00",
        "SlutDatum": "2021-01-01T00:00:00",
        "Gruppkod": 2220,
        "Utropspris": 15,
        "SkapadAv": "Anna"
    };



    return (
        <div className="container">
            <h1>All Auctions available</h1>
                <div className="card">
                    <img src={BaconImg} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{data.Titel}</h5>
                        <p className="card-text">{data.Beskrivning} och smaskig auktion</p>
                    </div>
                    <ul className="list-grouo list-group-flush">
                        <li className="list-group-item">Utgångspris: {data.Utropspris}</li>
                        <li className="list-group-item">Start: {data.StartDatum}</li>
                        <li className="list-group-item">Slut: {data.SlutDatum}</li>
                    </ul>
                </div>
        </div>
    )
    // if(id === 'all'){
    //     return (
    //         <div className="auctionContainer">
    //             <h1>All/Search Auctions page</h1>
    //             <p>{fetchedData}</p>
    //         </div>
    //     );
    // }
    // else if(id === 'historic'){
    //     return (
    //         <div className="auctionContainer">
    //             <h1>Historical Auctions page</h1>
    //             <p>{fetchedData}</p>
    //         </div>
    //     );
    // }
    // else{
    //     return (
    //         <div className="container">
    //             <div className="auctionContainer">
    //                 <h1 >Actual Auctions page</h1>

    //                 <p>{fetchedData}</p>
    //             </div>
    //         </div>

    //     );
    // } 
}

export default Auctions;