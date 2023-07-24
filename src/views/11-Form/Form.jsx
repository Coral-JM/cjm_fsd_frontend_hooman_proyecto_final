import React, { useState } from "react";
import "./Form.css";
import { Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { newCompany } from '../../Services/apiCalls'
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { useNavigate } from "react-router-dom";

export const Formulario = () => {
  const navigate = useNavigate();
  const datos = useSelector(userData);
  const token = useSelector((state) => state.user.credentials.token);
    const [form, setForm] = useState({
        company: '',
        CIF: '',
        owner_name: '',
        owner_surname: '',
        direction: '',
        zip_code: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
          ...prevForm,
          [name]: value,
        }));
      };
      const createCompany = () => {
        newCompany(form, token)
          .then((res) => {
            console.log(res.message);
            setTimeout(() => {
                navigate("/");
              }, 1500);
          })
          .catch((error) => {console.error(error);
          });
      };

  return (
    <Container>
      <Row>
        <div className="title">formulario</div>
        <Col className="formCompany">
          <div className="boxForm">
            <Form className="form">
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Empresa</Form.Label>
                  <Form.Control 
                    type="text"
                    placeholder="Escribe nombre de empresa"
                    name="company"
                    value={form.company}
                    onChange={handleChange}  
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>CIF</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Escribe el CIF"
                    name="CIF"
                    value={form.CIF}
                    onChange={handleChange} 
                />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Escribe tu nombre"
                    name="owner_name"
                    value={form.owner_name}
                    onChange={handleChange} 
                    />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Primer apellido</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Escribe tu primer apellido"
                    name="owner_surname"
                    value={form.owner_surname}
                    onChange={handleChange} 
                    />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Escribe la dirección"
                    name="direction"
                    value={form.direction}
                    onChange={handleChange} 
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Zip</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Escribe el código postal"
                    name="zip_code"
                    value={form.zip_code}
                    onChange={handleChange} 
                    />
                </Form.Group>
              </Row>
            </Form>
            <div onClick={()=> createCompany()}className="button">Enviar</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
