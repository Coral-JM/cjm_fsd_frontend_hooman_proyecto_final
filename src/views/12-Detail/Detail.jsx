import React, { useEffect, useState } from "react";
import "./Detail.css";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getLocalById } from "../../Services/apiCalls";

export const Detail = () => {
  const { id } = useParams();
  const [local, setLocal] = useState({});

  useEffect(() => {
    getLocalById(id)
      .then((res) => {
        console.log(res.data.data);
        setLocal(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Row>
        <div className="titleRest">{local.name}</div>
        <Col>
          <div className="detailDesign">
            <div className="boxDetail">
              <div className="img"></div>
              <div className="textDetails">
                <div className="textLocalDetail">{local.name}</div>
                <div className="textLocalDetailTwo">📍{local.direction}</div>
                <div className="textLocalDetailTwo">🍴{local.type}</div>
                <div className="textLocalDetailSpec">
                  {local.local_specification &&
                    local.local_specification.map((spec) => (
                      <div key={spec.id}>✅{spec.specification.name}</div>
                    ))}
                </div>
              </div>
              <div className="button">Añadir a favoritos</div>
              <div className="img"></div>
              <div className="reviews">
                <div className="textTitle">Reseñas de algunos usuarios</div>
                <div className="boxReviewUsers">
                  {local.review &&
                    local.review.map((review) => (
                      <div key={review.id}>
                        <p>{review.title}</p>
                        <p>{review.description}</p>
                      </div>
                    ))}
                </div>
              </div>
              <div className="textTitle"><br></br>¿Quieres dejar una reseña?</div>
              <div className="boxPostReview">
                <div className="textReview">Titulo</div>
                <input 
                    className="input"
                    type="text"
                    placeholder="Escribe un título"
                /><br></br>
                <div className="textReview">Descripción</div>
                <input 
                    className="inputReview"
                    type="text"
                    maxLength={500} 
                    placeholder="Escribe una reseña"
                />
              </div>
              <div className="button">Enviar</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
