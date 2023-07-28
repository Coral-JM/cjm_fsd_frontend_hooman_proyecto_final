import React, { useEffect, useState } from "react";
import './Favorites.css'
import { Container, Row, Col } from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import { getFavorites } from "../../Services/apiCalls";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Favorites = () => {
    const navigate = useNavigate()
    const [favorites, setfavorites] = useState([]);
    const token = useSelector((state) => state.user.credentials.token);
    const [local, setLocal] = useState({});

    const selectLocal = (local) => {
        console.log(local.id);
        navigate(`/detail/${local.id}`);
      };

    useEffect(() => {
        getFavorites(token)
        .then((res)=> {
            console.log(res.data.data);
            setfavorites(res.data.data);
        })
        .catch((error) => console.log(error));
    }, [])

    return (
        <Container>
            <Row>
                <div className="title">mis favoritos</div>
                <Col className="favorites">
                {favorites.map((favorite) => (
                <div key={favorite.id}>
                    <Card className="favoriteCard"style={{border: "transparent" }}>
                      <Card.Img variant="top" src={favorite.local.image} />
                      <Card.Body>
                        <Card.Title>{favorite.local.name}</Card.Title>
                        <div onClick={() => selectLocal(favorite.local)} className="button">Échale un vistazo</div>
                      </Card.Body>
                    </Card>
                    </div>
                ))}
                </Col>
            </Row>
        </Container>
    )
}