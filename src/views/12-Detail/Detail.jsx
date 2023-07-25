import React from "react";
import './Detail.css'
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";


export const Detail = () => {
  const { id } = useParams();


    return (
        <Container>
            <Row>
                <div className="title">bars nd restaurants</div>
                <Col>
                    <div className="hola">
                    </div>
                </Col>
            </Row>
        </Container>
    )
}