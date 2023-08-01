import React, { useEffect, useState } from "react";
import "./PendingLocals.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getLocalsByAdmin } from "../../apiCalls";
import { useSelector } from "react-redux";

export const PendingLocals = () => {
    const navigate = useNavigate();
    const [locals, setLocals] = useState([]);
    const token = useSelector(state => state.user.credentials.token);

    useEffect(() => {
        getLocalsByAdmin(token)
          .then((res) => {
            // console.log(res.data.data);
            setLocals(res.data.data);
          })
          .catch((error) => console.log(error));
      }, []);
  return (
    <Container>
      <Row>
        <div className="titleRest">Locales pendientes</div>
        <Col className="locals">
          {locals.map((local) => (
            <div key={local.id}>
              <Card
                className="localCard"
                style={{
                  background: "transparent",
                  border: "solid 0.01em #e34300",
                  borderRadius: "3em",
                  height: "21em",
                }}
              >
                <Card.Img
                  variant="top"
                  style={{ borderRadius: "1em" }}
                  src={local.image}
                />
                <Card.Body>
                  <Card.Text>{local.name}</Card.Text>
                  <Card.Text>{local.direction}</Card.Text>
                  <Card.Text>{local.url}</Card.Text>
                  <Card.Text>{local.phone}</Card.Text>
                  <Card.Text>{local.type}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
