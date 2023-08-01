import React, { useEffect, useState } from 'react'
import './Profile.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../views/userSlice'
import { getProfile, getMyCompany } from '../../apiCalls'

export const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.credentials.token);
    const [user, setUser] = useState({});
    const [hasCompany, setHasCompany] = useState(false);
    
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

            getMyCompany(token)
        .then((res) => {
          setHasCompany(res.data.data.length > 0);
        })
        .catch((error) => {
          console.log(error);
        });
      }
    }, []);
    

    return (
        <Container>
            <Row>
              <div className="title">{user.name}</div>
                <Col>
                <div className="profileDesign">
                    <div className="boxInfoUser">
                    <div className="boxTextInfo">Nombre de la mascota: {user.name}</div>
                    <div className="boxTextInfo">Email del usuario: {user.email}</div>
                    </div>
                    <div onClick={()=>navigate("/myprofile")}className="boxText">Modificar mis datos</div>
                    <div onClick={()=>navigate("/favorites")}className="boxText">Mis favoritos</div>
                    <div onClick={()=>navigate("/reviews")}className="boxText">Mis reseñas</div>
                    <div className="boxInfoUser">
                    {hasCompany && (
                      <div onClick={() => navigate("/newlocal")} className="boxTextTwo">
                        Publicar un local
                      </div>
                      )}
                    <div onClick={()=>{dispatch(logout()); navigate("/")}} className="boxTextTwo">Log out</div>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    )
}