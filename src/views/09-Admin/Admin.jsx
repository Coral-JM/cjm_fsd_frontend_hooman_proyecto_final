import React from 'react'
import './Admin.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../views/userSlice'

export const Admin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const token = useSelector(state => state.user.credentials.token);
    // console.log(token);

    return (
        <Container>
            <Row>
                <div className="title">Admin</div>
                <Col>
                <div className="profileDesign">
                    <div onClick={()=>navigate("/myprofile")}className="boxText">Mi perfil</div>
                    <div onClick={()=>navigate("/companies")}className="boxText">Empresas</div>
                    <div onClick={()=>navigate("/pending")}className="boxText">Locales pendientes</div>
                    <div onClick={()=>{dispatch(logout()); navigate("/")}} className="boxText">Log out</div>
                </div>
                </Col>
            </Row>
        </Container>
    )
}