import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Formulaire.scss";
import complex from "../../../assets/Imgs/complex.jpeg";

const Formulaire = () => {
  return (
    <>
      <div className="demo-background">
        <img src={complex} />
      </div>
      <Container>
        <h2 className="title">Demande de démo</h2>
        <Row className="demo-content">
          <Col className="demo-form">
            <Row className="row-demo-video">
              <Col className="video-desc">
                <h2>My Team</h2>
                <p>INCREASE YOUR PERFORMANCE</p>
              </Col>
            </Row>
            <Form className="demo-elemets">
              <Form.Group className="demo-input mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="demo-input mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="demo-input mb-3">
                <Form.Label>Téléphone*</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="demo-input mb-3">
                <Form.Label>Club</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="demo-input mb-3">
                <Form.Label>Fonction</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">Directeur rechnique</option>
                  <option value="2">Directeur administrative</option>
                  <option value="3">Directeur sportive</option>
                  <option value="4">Entraineur</option>
                  <option value="5">Preparateur physique</option>
                  <option value="6">Medcin</option>
                  <option value="7">Analyste video</option>
                  <option value="8">Autres</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="demo-input text-area mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  className="demo-message"
                  type="text"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Button className="demo-confirm" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Formulaire;
