import React, { useEffect, useState }from "react";
import "./Locals.css";
import { Container, Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getLocals} from "../../Services/apiCalls";


export const Locals = () => {
const [local, setLocal] = useState({});
useEffect (() => {
    getLocals()
    .then((res)=> {
        console.log(res);
    })
})
  return (
    <Container>
      <Row>
        <Col>
          <div className="title">Valencia</div>
          <div className="localsDesign">
            <input
              className="input"
              type={"text"}
              placeholder="Busca un local..."
            />
            <div className="filterPoints">
              <div className="circle"></div>
              <div className="text"> O Gluten free</div>
              <div className="circle"></div>
              <div className="text">O Vegetarianos</div>
              <div className="circle"></div>
              <div className="text">O Veganos</div>
            </div>
            <div className="locals">

              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
