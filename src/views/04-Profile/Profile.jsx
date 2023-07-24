import React from 'react'
import './Profile.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../views/userSlice'

export const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const token = useSelector(state => state.user.credentials.token);
    // console.log(token);

    return (
        <Container>
            <Row>
                <Col>
                <div className="profileDesign">
                    <div onClick={()=>navigate("/myprofile")}className="boxText">Mi perfil</div>
                    <div onClick={()=>navigate("/favorites")}className="boxText">Mis favoritos</div>
                    <div onClick={()=>navigate("/reviews")}className="boxText">Mis reseñas</div>
                    <div onClick={()=>{dispatch(logout()); navigate("/")}} className="boxText">Log out</div>
                </div>
                </Col>
            </Row>
        </Container>
    )
}