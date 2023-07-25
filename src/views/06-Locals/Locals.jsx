import React, { useEffect, useState } from "react";
import "./Locals.css";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { getLocals, searchLocals } from "../../Services/apiCalls";

export const Locals = () => {
  const [locals, setLocals] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    getLocals()
      .then((res) => {
        console.log(res.data.data);
        setLocals(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (e) => {
    const text = e.target.value;
    setSearch(text);
  };

  useEffect(() => {
    if (search) {
      searchLocals(search)
        .then((res) => {
          setLocals(res.data.data);
        })
        .catch((error) => console.log(error));
    } else {
      getLocals()
        .then((res) => {
          setLocals(res.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [search]);

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
              value={search}
              onChange={handleSearch} 

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
