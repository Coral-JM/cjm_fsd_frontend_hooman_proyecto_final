import React, { useState } from 'react'
import './Profile.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Row>
                <Col>
                <div className="profileDesign">
                    
                </div>
                </Col>
            </Row>
        </Container>
    )
}