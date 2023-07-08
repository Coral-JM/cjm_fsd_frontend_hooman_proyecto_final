import React from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <img
            src="../../src/img/homeCover.png"
            alt="Imagen de un galgo con un pañuelo y gafas"
            className="homePic"
          />
          <div className="banner">
            <img src="../../src/img/banner.png" alt="banner de margaritas" />
            <img src="../../src/img/banner.png" alt="banner de margaritas" />
          </div>
          <div className="titleScroll1">descubre los nuevos locales dog-friendly de Valencia </div>
          <Row className="cards">
            <Col className="oneCard">
            <Card style={{ width: "17rem", border: "transparent", marginBottom: "4em"}}>
              <Card.Img
                className="photoCard"
                src="../../src/img/cafeBerlin.jpg"
              />
              <Card.Body>
                <Card.Title>Café Berlín</Card.Title>
              </Card.Body>
              <img src="../../src/img/stamp.png" alt="new" className="stamp" />
            </Card>
            </Col>
            <Col className="oneCard">
            <Card style={{ width: "17rem", border: "transparent", marginBottom: "4em" }}>
              <Card.Img
                className="photoCard"
                src="../../src/img/cafeBerlin.jpg"
              />
              <Card.Body>
                <Card.Title>Café Berlín</Card.Title>
              </Card.Body>
            <img src="../../src/img/stamp.png" alt="new" className="stamp" />
            </Card>
            </Col>
            <Col className="oneCard">
            <Card style={{ width: "17rem", border: "transparent", marginBottom: "4em" }}>
              <Card.Img
                className="photoCard"
                src="../../src/img/cafeBerlin.jpg"
              />
              <Card.Body>
                <Card.Title>Café Berlín</Card.Title>
              </Card.Body>
            <img src="../../src/img/stamp.png" alt="new" className="stamp" />
            </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
