import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MyProfile.css";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../apiCalls";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { checkError } from "../../useful";
import { updateProf } from "../../apiCalls";

export const MyProfile = () => {
  const navigate = useNavigate();
  const datos = useSelector(userData);
  const token = useSelector((state) => state.user.credentials.token);
  const [user, setUser] = useState({});
  const [body, setBody] = useState({});
  const [userError, setUserError] = useState({
    nameError: "",
    emailError: "",
  });

  useEffect(() => {
    if (user) {
      getProfile(token)
        .then((res) => {
          // console.log(res.data);
          if (res.data && res.data.user) {
            setUser(res.data.user);
            setBody({
              name: res.data.user.name,
              email: res.data.email,
              password: res.data.password,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const updateProfile = () => {
    updateProf(body, token)
      .then(() => {
        setTimeout(() => {
          navigate("/profile");
        }, 1500);
      })
      .catch((error) => console.log(error));
  };

  const inputCheck = (e) => {
    let mensajeError = checkError(e.target.name, e.target.value);
    setUserError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: mensajeError,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBody((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Container>
      <Row>
        <div className="title">{datos.name}</div>
        <Col>
          <div className="myProfileDesign">
            <div className="boxDesign">
              <div className="inputTitle">
                Puedes modificar el nombre de tu mascota:
              </div>
              <input
                className={
                  userError.nameError === "" ? "input" : "input errorInput"
                }
                type="name"
                name="name"
                placeholder={datos.name}
                onChange={handleInputChange}
                onBlur={inputCheck}

              />
              <div className="inputTitle">
                Puedes modificar tu correo electrónico:
              </div>
              <input
                className={
                  userError.nameError === "" ? "input" : "input errorInput"
                }
                type="email"
                name="email"
                placeholder={datos.email}
                onChange={handleInputChange}
                onBlur={inputCheck}

              />
              <div onClick={() => updateProfile()} className="button">
                Modificar datos
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};