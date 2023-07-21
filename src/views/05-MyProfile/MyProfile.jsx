import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './MyProfile.css'
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../Services/apiCalls";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";

export const MyProfile = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [body, setBody] = useState({});
    const datos = useSelector(userData);
    const token = useSelector(state => state.user.credentials.token);


    useEffect(() => {
        if (user) {
          getProfile(token)
            .then((res) => {
              console.log(res.data);
              if (res.data && res.data.user) {
                setUser(res.data.user);
                setBody(
                  {
                    name: res.data.user.name,
                    email: res.data.email,
                    password: res.data.password
                  }
                )
              }
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
                <div className="myProfileDesign">
                    <div className="boxDesign">
                    <div className="inputTitle">Puedes modificar el nombre de tu mascota:</div>
                    <input
                        className="input"
                        type={"text"}
                        name={"name"}
                        placeholder={datos.name}
                    />
                    <div className="inputTitle">Puedes modificar tu correo electrónico:</div>
                    <input
                        className="input"
                        type={"text"}
                        name={"name"}
                        placeholder={datos.email}
                    />
                    <div className="button">Modificar datos</div>
                    </div>
                </div>

                </Col>
            </Row>
        </Container>
    )
}