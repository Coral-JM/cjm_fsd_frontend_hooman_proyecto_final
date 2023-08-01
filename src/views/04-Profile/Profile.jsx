import React, { useEffect, useState } from 'react'
import './Profile.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../views/userSlice'
import { getProfile } from '../../apiCalls'

export const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.credentials.token);
    const [user, setUser] = useState({});
    
    useEffect(() => {
        if (user) {
          getProfile(token)
            .then((res) => {
              console.log(res.data.data);
                setUser(res.data.data)
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }, []);
    return (
        <Container>
            <Row>
                <Col>
                <div className="profileDesign">
                    <div className="boxInfoUser">
                    <div className="title">{user.name}</div>
                    <div className="boxTextInfo">Nombre del usuario: {user.name}</div>
                    <div className="boxTextInfo">Email del usuario: {user.email}</div>
                    </div>
                    <div onClick={()=>navigate("/myprofile")}className="boxText">Modificar mis datos</div>
                    <div onClick={()=>navigate("/favorites")}className="boxText">Mis favoritos</div>
                    <div onClick={()=>navigate("/reviews")}className="boxText">Mis reseñas</div>
                    <div onClick={()=>{dispatch(logout()); navigate("/")}} className="boxText">Log out</div>
                </div>
                </Col>
            </Row>
        </Container>
    )
}