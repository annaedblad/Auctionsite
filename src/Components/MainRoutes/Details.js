import React from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import '../../Styling/Details.css';

const Details = () => {
    return (
        <div className="card" id="container">
            <h1>Auktionstiteln</h1>
            <Row>
                <Col md={6} className="card" id="leftCard">
                    <div className="paddingCards">
                        <Row className="leftRow1">AUKTIONEN ÄR ÖPPEN/STÄNGD</Row>
                        <Row className="leftRow2">Vinnande bud: </Row>
                        <Row className="leftRow3">bild på objektet</Row>
                        <Row className="leftRow4">Detaljerad beskrivning</Row>
                    </div>
                </Col>
                <Col md={1} className="h"></Col>
                <Col md={4} className="rightContainer card" id="rightCard">
                    <div className="paddingCards">
                        <Row>
                            <Col md={12} id="utropsPris">Slutdatum <br></br> Utropspris <br></br> Antal bud</Col>
                        </Row>
                        <Row>
                            <Col md={8} id="bud">Lista på bud</Col>

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
export default Details;

