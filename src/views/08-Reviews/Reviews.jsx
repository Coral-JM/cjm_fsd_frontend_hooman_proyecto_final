import React, { useEffect, useState } from "react";
import './Reviews.css';
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { getReviews } from "../../Services/apiCalls";
import { useSelector } from "react-redux";


export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const token = useSelector((state) => state.user.credentials.token);

    useEffect(() => {
        getReviews(token)
        .then((res)=> {
            console.log(res.data.data);
            setReviews(res.data.data);
        })
        .catch((error) => console.log(error));
    }, [])

    return (
        <Container>
            <Row>
                <div className="title">mis reseñas</div>
                <Col className="reviewDesign">
                {reviews.map((review) => (
                <div key={review.id}>
                    <Card className="reviewCard"style={{border: "transparent" }}>
                      <Card.Body>
                      <Card.Title>{review.local.name}</Card.Title>
                        <Card.Title>{review.title}</Card.Title>
                        <Card.Text>
                          {review.description}
                        </Card.Text>
                        <Card.Link className="linkToWeb" href={review.local.url}>{review.local.url}</Card.Link>
                      </Card.Body>
                    </Card>
                    </div>
                ))}
                </Col>
            </Row>
        </Container>
    )
}
