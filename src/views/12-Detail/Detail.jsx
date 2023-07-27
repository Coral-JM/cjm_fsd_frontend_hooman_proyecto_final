import React, { useEffect, useState } from "react";
import "./Detail.css";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getLocalById } from "../../Services/apiCalls";
import { addFavorite } from "../../Services/apiCalls";
import { useSelector } from "react-redux";
import { newReview } from "../../Services/apiCalls";

export const Detail = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [local, setLocal] = useState({});
  const token = useSelector(state => state.user.credentials.token);
  const [rev, setRev] = useState({
    title: "",
    description: "",
  });
  const localId = local.id;


  useEffect(() => {
    getLocalById(id)
      .then((res) => {
        console.log(res.data.data);
        setLocal(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);




  const addToFavorites = () => {
    if (token) {
      const localId = local.id;
        addFavorite(localId, token)
          .then((res) => {
            console.log(res.data.message); 
          })
          .catch((error) => {console.log(error);});
        navigate('/favorites');
    } else {
        navigate('/login');
    }
  };

  const handleReview = (e) => {
    const { name, value } = e.target;
    setRev((prevRev) => ({
      ...prevRev,
      [name]: value,
    }));
  };
  const addReview = () => {
    if (token) {
      const reviewData = {
        ...rev,
        local_id: local.id,
      };
      newReview(reviewData, token)
      .then(()=> {
        setTimeout(() => {
          navigate('/locals');
        })
      })
      .catch((error) => {console.log(error);});
    } else {
      navigate('/login')
    }
  };

  return (
    <Container>
      <Row>
        <div className="titleRest">{local.name}</div>
        <Col>
          <div className="detailDesign">
            <div className="boxDetail">
              <div className="imgBox">
                <img src={local.image} className="imageLocal"></img>
              </div>
              
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
              <div onClick={addToFavorites} className="button">Añadir a favoritos</div>
              <div className="reviews">
                <div className="textTitle">Reseñas de algunos usuarios</div>
                <div>
                  {local.review &&
                    local.review.map((review) => (
                      <div key={review.id} className="boxReviewUsers">
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
                    name="title"
                    value={rev.title}
                    onChange={handleReview} 
                /><br></br>
                <div className="textReview">Descripción</div>
                <input 
                    className="inputReview"
                    type="text"
                    maxLength={500} 
                    placeholder="Escribe una reseña"
                    name="description"
                    value={rev.description}
                    onChange={handleReview} 
                />
              </div>
              <div onClick={addReview} className="button">Enviar</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
