import React, { useState } from 'react'
import './Login.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { checkError } from '../../services/useful'

export const Login = () => {
    const navigate = useNavigate();
    const [userError, setUserError] = useState({
        nameError: "",
        emailError: "",
        passwordError: "",
      });
    const inputCheck = (e) => {
        let mensajeError = checkError(e.target.name, e.target.value);
    
        setUserError((prevState) => ({
          ...prevState,
          [e.target.name + "Error"]: mensajeError,
        }));
      };
    return(
        <Container>
            <Row >
                <Col className='loginDesign'>
                    <div className="title">login</div>
                    <div className="boxLogin">
                        <div className="userSub">
                            <div className="text">Email</div>
                            <input
                                className={
                                    userError.nameError === ""
                                    ? "input"
                                    : "input errorInput"
                                }
                                type="email"
                                name="email"
                                placeholder='Escribe un email'
                                onBlur={inputCheck}
                            >
                            </input>
                            <div className="errorText">{userError.emailError}</div>
                            <div className="text">Password</div>
                            <input
                            className={
                                userError.nameError === ""
                                ? "input"
                                : "input errorInput"
                            }
                            type="password"
                            name="password"
                            placeholder='Escribe una contraseña'
                            onBlur={inputCheck}
                            >
                            </input>
                            <div className="errorText">{userError.passwordError}</div>
                        </div>
                        <div className="button">Login</div>
                        <div className="linkTo">
                            <div className="textLink">¿No tienes una cuenta?</div>
                            <div className="link" onClick={()=>navigate("/register")}>Regístrate</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}