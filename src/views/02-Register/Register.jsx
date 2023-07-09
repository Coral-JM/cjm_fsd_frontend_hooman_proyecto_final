import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Register.css'

export const Register = () => {
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
                                className='inputReg'
                                type="name"
                                name="name"
                                placeholder='Escribe un nombre de usuario'
                                >
                                </input>
                                <div className="regText">Email</div>
                                <input
                                className='inputReg'
                                type="email"
                                name="email"
                                placeholder='Escribe un email'
                                >
                                </input>
                                <div className="regText">Password</div>
                                <input
                                className='inputReg'
                                type="password"
                                name="password"
                                placeholder='Escribe una contraseña'
                                >
                                </input>
                            </div>
                            <div className="button">Registro</div>
                            <div className="linkTo">
                            <div className="text">¿Ya tienes una cuenta?</div>
                            <div className="link">Login</div>
                            </div>
                        </div>
                </Col>
            </Row>
        </Container>
    )
}