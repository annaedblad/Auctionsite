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
    const { allAuctions } = useContext(AuctionContext);

    const specificAuction = allAuctions.find(x => x.AuktionID == id);
    const { getBids } = useContext(AuctionContext);

    const { bids } = useContext(AuctionContext);
    if (specificAuction !== undefined && bids !== undefined) {

        var items = bids.map(x => { return (<div>{x.Budgivare}: {x.Summa} kr</div>) });
        console.log(items);
        let openOrNot = "";
        let currentDate = new Date();
        if (currentDate.getTime() < Date.parse(specificAuction.SlutDatum)) {
            openOrNot = "Auktionen är öppen";
        }
        else {
            openOrNot = "Auktionen är stängd";
        }
        return (
            <div className="card" id="container">
                <h1>{specificAuction.Titel}</h1>
                <Row>
                    <Col md={6} className="card" id="leftCard">
                        <div className="paddingCards">
                            <Row className="leftRow1">{openOrNot}</Row>
                            <Row className="leftRow2">Vinnande bud: </Row>
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
                                <Col md={8} id="bud"> Lista på bud: {items}
                                </Col>

                            </Row>
                            <Row>
                                <Col md={12}>
                                    <Form className="test">
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control type="text" placeholder="Ange bud" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicCheckbox">
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

