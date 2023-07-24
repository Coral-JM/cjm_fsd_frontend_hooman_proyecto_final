import React, { useEffect, useState } from "react";
import "./Locals.css";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { getLocals } from "../../Services/apiCalls";

export const Locals = () => {
  const [locals, setLocals] = useState([]);

  useEffect(() => {
    getLocals()
      .then((res) => {
        console.log(res.data.data);
        setLocals(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Row>
        <div className="title">Valencia</div>
        <Col>
          <div className="localsDesign">
            <input
              className="input"
              type={"text"}
              placeholder="Busca un local..."
            />
          </div>
          <Form >
              {['checkbox'].map((type) => (
                <div key={`${type}`} className="points">
                  <Form.Check 
                    className="point"
                    type={type}
                    id={`default-${type}`}
                    label={`Gluten Free`}
                  />
                  <Form.Check
                    className="point"
                    type={type}
                    id={`${type}`}
                    label={`Vegetariano`}
                  />
                  <Form.Check 
                    className="point"
                    type={type}
                    id={`${type}`}
                    label={`Vegano`}
                  />
                </div>
              ))}
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="locals">
          {locals.map((local) => (
            <div key={local.id}>
              <Card className="localCard" style={{ border: "transparent" }}>
                <Card.Img variant="top" src="" />
                {local.image}
                <Card.Body>
                  <Card.Title>{local.name}</Card.Title>
                  <div className="button">Échale un vistazo</div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
