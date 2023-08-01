import React, { useState } from "react";
import "./NewLocal.css";
import { Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { newLocal } from "../../apiCalls";

export const NewLocal = () => {
    const navigate = useNavigate();
    const datos = useSelector(userData);
    const token = useSelector((state) => state.user.credentials.token);
    const [formLocal, setFormLocal] = useState({
        'name': '',
        'direction': '',
        'url': '',
        'phone': '',
        'schedule': '',
        'type': '',
        'image': '',
        'isActive': false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormLocal((prevLocal) => ({
            ...prevLocal,
            [name]: value,
        }));
    };
    const createLocal = () => {
        newLocal( token, formLocal)
        .then(()=> {
            setTimeout(() => {
                navigate('/');
            },)
        })
        .catch((error) => {console.error(error);
    });
    }

  return (
    <Container>
      <Row>
      <div className="titleRest">Bienvenido a la familia Hooman</div>
        <Col className="newLocalDesign">
          <div className="newLocalForm">
            <Form className="form">
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Nombre del local</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribe el nombre del local"
                    name="name"
                    value={formLocal.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribe la dirección"
                    name="direction"
                    value={formLocal.direction}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>URL de tu página web</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Añade la url"
                    name="url"
                    value={formLocal.url}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribe el telefono del local"
                    name="phone"
                    value={formLocal.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Horario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribe el horario de tu local"
                    name="schedule"
                    value={formLocal.schedule}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Tipo de cocina</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribe el tipo de cocina"
                    name="type"
                    value={formLocal.type}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Añade una imágen de tu local</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribe la dirección url de una imágen de tu local"
                    name="image"
                    value={formLocal.image}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
            </Form>
            <div onClick={()=> createLocal()} className="button">Enviar</div>
            <div className="alertBox">
                <div className="text">⚠️ Recuerda que tu local deberá ser aprobado por el administrador de Hooman para que pueda aparecer entre los locales de la aplicación.
                Agradecemos tu paciencia ♡</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
