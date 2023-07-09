import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import { checkError } from '../../services/useful'

export const Register = () => {
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
            <Row>
                <div className="titleRegister">regístrate</div>
                <Col className='imageReg'>
                    <img src='../../src/img/doggy01.png'></img>
                </Col>
                <Col>
                        <div className="boxRegister">
                            <div className="userSub">
                                <div className="regText">Nombre de usuario</div>
                                <input
                                className={
                                    userError.nameError === ""
                                    ? "input"
                                    : "input errorInput"
                                }
                                type="name"
                                name="name"
                                placeholder='Escribe un nombre de usuario'
                                onBlur={inputCheck}
                                >   
                                </input>
                                <div className="errorText">{userError.nameError}</div>
                                <div className="regText">Email</div>
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
                                <div className="regText">Password</div>
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
                            <div className="button">Registro</div>
                            <div className="linkTo">
                            <div className="text">¿Ya tienes una cuenta?</div>
                            <div className="link" onClick={()=>navigate("/login")}>Login</div>
                            </div>
                        </div>
                </Col>
            </Row>
        </Container>
    )
}