import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import { checkError } from '../../Services/useful'
import { registerMe } from '../../Services/apiCalls'


export const Register = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
      });

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
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUser((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const regMe = () => {
      registerMe(user)
      .then(() => {
        setTimeout(() => {
          navigate("/");
        }, 2500);
      })
      .catch((error) => console.log(error));
    };

    return(
        <Container>
            <Row>
                <div className="title">regístrate</div>
                <Col className='imageReg'>
                    <img src='../../src/img/doggy01.png'></img>
                </Col>
                <Col>
                        <div className="boxRegister">
                            <div className="userSub">
                                <div className="text">Nombre de la mascota</div>
                                <input
                                className={
                                    userError.nameError === ""
                                    ? "input"
                                    : "input errorInput"
                                }
                                type="name"
                                name="name"
                                placeholder='Escribe el nombre de tu mascota'
                                onChange={handleInputChange}
                                onBlur={inputCheck}
                                >   
                                </input>
                                <div className="errorText">{userError.nameError}</div>
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
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
                                onBlur={inputCheck}
                                >
                                </input>
                                <div className="errorText">{userError.passwordError}</div>
                            </div>
                            <div onClick={()=> regMe()} className="button">Registro</div>
                            <div className="linkTo">
                            <div className="textLink">¿Ya tienes una cuenta?</div>
                            <div className="link" onClick={()=>navigate("/login")}>Login</div>
                            </div>
                        </div>
                </Col>
            </Row>
        </Container>
    )
}