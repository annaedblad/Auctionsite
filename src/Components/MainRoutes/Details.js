import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import '../../Styling/Details.css';
import { useParams } from "react-router-dom";
import { AuctionContext } from "../../Contexts/AuctionContext";
var tempoId = "";

const Details = () => {
    
    let { id } = useParams();
    const { allAuctions, getBids, bids, setNewBid } = useContext(AuctionContext);
    const specificAuction = allAuctions.find(x => x.AuktionID == id);
    const [error, setError] = useState("");

    if (tempoId !== id) {
        getBids(id);
        tempoId = id;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let formName = document.getElementById("formName");
        let bidAmount = document.getElementById("formBid");
        const highestBidd = Math.max(...bids.map(o => o.Summa), 0);

        if (bidAmount.value <= highestBidd || bidAmount.value <= specificAuction.Utropspris) {
            setError("För lågt bud angivet");
        }
        else {
            setError("");
            let newBid = {
                Summa: bidAmount.value,
                AuktionID: id,
                Budgivare: formName.value
            }
            bidAmount.value = "";
            formName.value = "";

            await setNewBid(newBid);
            await getBids(id);
        }
    }

    if (specificAuction !== undefined && bids !== undefined) {
        const highestBid = Math.max(...bids.map(o => o.Summa), 0);

        bids.sort(
            function (a, b) {
                if (a.Summa === b.Summa) {
                    return b.Budgivare - a.Budgivare;
                }
                return a.Summa < b.Summa ? 1 : -1;
            });
        let items;

        items = bids.map((x, index) => { return (<div key={index}>{x.Budgivare}: {x.Summa} kr</div>) });

        let listBids = "";
        let currentDate = new Date();
        let isOpen = currentDate.getTime() < Date.parse(specificAuction.SlutDatum);
        let text = "";
        let winningBid = "";
        var d = new Date(specificAuction.SlutDatum);
        var endDateString = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2)  + " " +
        ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

        if (isOpen == true) {
            text = "Auktionen är öppen";
            listBids = items;
            winningBid = "Vinnarbud ej klart";

        }
        else {
            text = "Auktionen är stängd";
            winningBid = "Vinnande bud: " + highestBid + " kr";
            listBids = "Budhistorik ej tillgänglig vid avslutad auktion";
        }

        return (
            <div className="card" id="container">
                <h1>{specificAuction.Titel}</h1>
                <Row>
                    <Col md={6} className="card" id="leftCard">
                        <div className="paddingCards">
                            <Row className="leftRow1">{text}</Row>
                            <Row className="leftRow2">{winningBid}</Row>
                            <Row className="leftRow4">{specificAuction.Beskrivning}</Row>
                        </div>
                    </Col>
                    <Col md={1} className="h"></Col>
                    <Col md={4} className="rightContainer card" id="rightCard">
                        <div className="paddingCards">
                            <Row>
                                <Col md={12} id="utropsPris">Slutdatum: {endDateString} <br></br> Utropspris: {specificAuction.Utropspris} <br></br> Antal bud: {items.length}</Col>
                            </Row>
                            <Row>
                                <Col md={8} id="bud"> Lista på bud: {listBids}
                                </Col>

                            </Row>
                            <Row>
                                <Col md={12}>
                                    <Form className="test" onSubmit={handleSubmit}>
                                        <Form.Group controlId="formName">
                                            <Form.Control type="text" name="formName" placeholder="Ange namn" required minLength="2" disabled={!isOpen} />
                                        </Form.Group>
                                        <Form.Group controlId="formBid">
                                            <Form.Control type="text" name="bidAmount" placeholder="Ange bud" required minLength="1" disabled={!isOpen} />
                                        </Form.Group>
                                        <Button id="bidButton" className="btn btn-secondary" type="submit" disabled={!isOpen}>
                                            Lägg bud
                                </Button>
                                        <div className="errorMessage">{error}</div>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
    else {
        getBids(id);
        return null;
    }
}
export default Details;

