import React, { useContext } from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import '../../Styling/Details.css';
import { useParams } from "react-router-dom";
import { AuctionContext } from "../../Contexts/AuctionContext";

const Details = () => {
    let { id } = useParams();
    const { allAuctions, getBids, bids, setNewBid } = useContext(AuctionContext);
    const specificAuction = allAuctions.find(x => x.AuktionID == id);

    async function handleSubmit(e) {
        e.preventDefault();
        let formName = document.getElementById("formName");
        let bidAmount = document.getElementById("formBid");

        let fakeBid = {
            Summa: bidAmount.value,
            AuktionID: id,
            Budgivare: formName.value
        }

        await setNewBid(fakeBid);
        await getBids(id);
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
        if (bids.length == 0) {
            getBids(id);
        }
        items = bids.map(x => { return (<div>{x.Budgivare}: {x.Summa} kr</div>) });

        let listBids = "";
        let openOrNot = "";
        let winningBid = "";
        let currentDate = new Date();
        if (currentDate.getTime() < Date.parse(specificAuction.SlutDatum)) {
            openOrNot = "Auktionen är öppen";
            listBids = items;
            winningBid = "Vinnarbud ej klart";

        }
        else {
            openOrNot = "Auktionen är stängd";
            winningBid = "Vinnande bud: " + highestBid + " kr";
            listBids = "Budhistorik ej tillgänglig vid avslutad auktion";
        }

        return (
            <div className="card" id="container">
                <h1>{specificAuction.Titel}</h1>
                <Row>
                    <Col md={6} className="card" id="leftCard">
                        <div className="paddingCards">
                            <Row className="leftRow1">{openOrNot}</Row>
                            <Row className="leftRow2">{winningBid}</Row>
                            <Row className="leftRow3">bild på objektet</Row>
                            <Row className="leftRow4">{specificAuction.Beskrivning}</Row>
                        </div>
                    </Col>
                    <Col md={1} className="h"></Col>
                    <Col md={4} className="rightContainer card" id="rightCard">
                        <div className="paddingCards">
                            <Row>
                                <Col md={12} id="utropsPris">Slutdatum: {specificAuction.SlutDatum.substring(0, 10)} <br></br> Utropspris: {specificAuction.Utropspris} <br></br> Antal bud: {items.length}</Col>
                            </Row>
                            <Row>
                                <Col md={8} id="bud"> Lista på bud: {listBids}
                                </Col>

                            </Row>
                            <Row>
                                <Col md={12}>
                                    <Form className="test" onSubmit={handleSubmit}>
                                        <Form.Group controlId="formName">
                                            <Form.Control type="text" name="formName" placeholder="Ange namn" />
                                        </Form.Group>
                                        <Form.Group controlId="formBid">
                                            <Form.Control type="text" name="bidAmount" placeholder="Ange bud" />
                                        </Form.Group>
                                        <Button variant="outline-dark" type="submit">
                                            Lägg bud
                                </Button>
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

