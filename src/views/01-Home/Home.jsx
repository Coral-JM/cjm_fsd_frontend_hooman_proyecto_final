import React from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userData } from "../userSlice";



export const Home = () => {
  const datos = useSelector(userData);
  const token = useSelector(state => state.user.credentials.token);
  const navigate = useNavigate();

  const handleForm = () => {
    if (token) {
      navigate('/petitions');
    } else {
      navigate('/login');
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <img src="https://s3-images-frontend.s3.amazonaws.com/homeCover.png"
            alt="Imagen de un galgo con un pañuelo y gafas"
            className="homePic"
            />
          <div className="banner">
            <img src="https://s3-images-frontend.s3.amazonaws.com/banner.png" alt="banner de margaritas" />
            <img src="https://s3-images-frontend.s3.amazonaws.com/banner.png" alt="banner de margaritas" />
          </div>
          <div className="titleScroll1">"dogs are my favorite people" </div>
          <Row >
              <Col>
                <img className="gifOne" src="//static.showit.co/file/zSDrG2gnQPq44d-wPlp3Kg/124182/ezgif_com-gif-maker_copy_3.gif" />
                <img className="samoyedoImg" src="https://s3-images-frontend.s3.amazonaws.com/samoyedo.jpg"/>
              </Col>
              <Col>
                <img className="textImg" src="https://s3-images-frontend.s3.amazonaws.com/text.png"/>
              </Col>
          </Row>
          <div className="subtitleHome" onClick={()=>navigate("/locals")}>más bares & restaurantes &gt;&gt;</div>
          <div className="line"></div>
          <div className="ndTitle">¿Quieres aparecer en nuestra web?</div>
          <div className="formHome">
            <div className="formHomeTwo">
              <div className="linkToForm">Rellena nuestro formulario</div>
              <div className="buttonFormHome" onClick={handleForm}>Formulario</div>
            </div>
            <div className="bannerTwo">
              <img src="https://s3-images-frontend.s3.amazonaws.com/backgroundCarousel.png" alt="" />
              <img src="https://s3-images-frontend.s3.amazonaws.com/backgroundCarousel.png" alt="" />
            </div>
          </div>

          {/* <Row>
          <div className="ndTitle">¿Quieres aparecer en nuestra web?</div>
            <Col className="localForm">
              <div className="boxLinkTo">
                <div className="linkToForm">Rellena nuestro formulario</div>
                <div className="button"
                onClick={handleForm}>Formulario</div>
              </div>
            </Col>
          </Row> */}
        </Col>
      </Row>
    </Container>
  );
};
