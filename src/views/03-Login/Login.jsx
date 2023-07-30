import React, { useState } from 'react'
import './Login.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { checkError } from '../../services/useful'
import { useDispatch } from 'react-redux'
import { loginMe } from '../../Services/apiCalls'
import { login } from '../userSlice'


export const Login = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const dispatch = useDispatch();


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
    
    const loginHandler = (e) => {
      e.preventDefault();
      loginMe(userData)
        .then((res) => {
          dispatch(login(res))
          // console.log(res)
            navigate('/')
        })
        .catch((error) => {
          console.log(error);
          setUserError({
            credentials: error.response.data.message,
          });
        });
    };
    const handleInputChange = (e) => {
        setUserData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
    
    return(
        <Container>
            <Row >
            <div className="title">login</div>
                <Col className='loginDesign'>
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
                                value={userData.email || ''}
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
                                value={userData.password || ''}
                                onChange={handleInputChange}
                                onBlur={inputCheck}
                            >
                            </input>
                            <div className="errorText">{userError.passwordError}</div>
                        </div>
                        <div onClick={loginHandler} className="button">Login</div>
                        <div className="linkTo">
                            <div className="textLink">¿No tienes una cuenta?</div>
                            <div className="link" onClick={()=>navigate("/register")}>Regístrate</div>
                        </div>
                    </div>
                </Col>
                <Col>
                <div className="imgLogin">
                    <img src="../../src/img/doggy03.png" alt="" />
                </div>
                </Col>
            </Row>
        </Container>
    )
}