import React, { useEffect, useState } from "react";
import './Favorites.css'
import { Container, Row, Col } from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import { getFavorites } from "../../apiCalls";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteFavorite } from "../../apiCalls";

export const Favorites = () => {
    const navigate = useNavigate()
    const [favorites, setfavorites] = useState([]);
    const token = useSelector((state) => state.user.credentials.token);
    

    const selectLocal = (local) => {
        console.log(local.id);
        navigate(`/detail/${local.id}`);
      };

    useEffect(() => {
        getFavorites(token)
        .then((res)=> {
            // console.log(res.data.data);
            setfavorites(res.data.data);
        })
        .catch((error) => console.log(error));
    }, [])

    const removeFavorite = (localId) => {
        deleteFavorite(token, localId)
            .then(() => {
                setfavorites(favorites.filter((favorite) => favorite.local.id !== localId));
            })
            .catch((error) => console.log(error));
    };

    return (
        <Container>
            <Row>
                <div className="title">mis favoritos</div>
                <Col className="favorites">
                {favorites.map((favorite) => (
                <div key={favorite.id}>
                    <Card className="localCard" style={{ background: "transparent", border: "solid 0.01em #e34300", borderRadius: "3em", height: "21em"}}>
                      <Card.Img variant="top" style= {{borderRadius: "1em"}} src={favorite.local.image} />
                      <Card.Body>
                        <Card.Text>{favorite.local.name}</Card.Text>
                        <div className="boxButtons">
                            <div onClick={() => selectLocal(favorite.local)} className="buttonCard">Ver</div>
                            <div onClick={() => removeFavorite(favorite.local.id)} className="buttonCard">Eliminar</div>
                        </div>
                        
                      </Card.Body>
                    </Card>
                    </div>
                ))}
                </Col>
            </Row>
        </Container>
    )
}