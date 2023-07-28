import React, { useEffect, useState } from "react";
import "./Locals.css";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { getLocals, searchLocals, searchLocalsInput } from "../../Services/apiCalls";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../Services/apiCalls";


export const Locals = () => {
  const navigate = useNavigate();
  const [locals, setLocals] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedSpecifications, setSelectedSpecifications] = useState([]);
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.credentials.token);

  const selectLocal = (local) => {
    navigate(`/detail/${local.id}`);
  };
  
  
  useEffect(() => {
    getLocals()
      .then((res) => {
        console.log(res.data.data);
        setLocals(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

//Búsqueda de los locales a través del input
  useEffect(() => {
    if (search) {
      searchLocalsInput(search)
        .then((res) => {
          setLocals(res.data.data);
        })
        .catch((error) => console.log(error));
    } else {
      getLocals()
        .then((res) => {
          setLocals(res.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [search]);

//Cambio de estado del formulario y búsqueda de los locales a través de las especificaciones del formulario
  const handleSpecification = (e) => {
    const specificationId = parseInt(e.target.id);
    if (e.target.checked) {
      setSelectedSpecifications((prevSelected) => [
        ...prevSelected,
        specificationId,
      ]);
    } else {
      setSelectedSpecifications((prevSelected) =>
        prevSelected.filter((id) => id !== specificationId)
      );
    }
  };

  const handleSearch = () => {
    if (selectedSpecifications.length > 0) {
      searchLocals(selectedSpecifications)
        .then((res) => {
          setLocals(res.data.data);
        })
        .catch((error) => console.log(error));
    } else {
      getLocals()
        .then((res) => {
          setLocals(res.data.data);
        })
        .catch((error) => console.log(error));
    }
  };

  const addToFavorites = (local) => {
    if (token) {
      const localId = local.id;
      addFavorite(localId, token)
        .then((res) => {
          console.log(res.data.message);
          navigate('/favorites');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate("/login");
    }
  };
  
  return (
    <Container>
      <Row>
        <div className="title">Valencia</div>
        <Col>
        <div className="searchingBox">
          <div className="localsDesign">
            <input
              className="input"
              type={"text"}
              placeholder="Busca un local..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="points">
              <Form.Check
                className="point"
                type="checkbox"
                id="1"
                label="Gluten Free"
                onChange={handleSpecification}
              />
              <Form.Check
                className="point"
                type="checkbox"
                id="2"
                label="Vegetariano"
                onChange={handleSpecification}
              />
              <Form.Check
                className="point"
                type="checkbox"
                id="3"
                label="Vegano"
                onChange={handleSpecification}
              />
            </div>
            <div onClick={handleSearch} className="buttonTwo">Buscar</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="locals">
          {locals.map((local) => (
            <div key={local.id}>
              <Card className="localCard" style={{ background: "transparent", border: "solid 0.01em #e34300", borderRadius: "3em", height: "21em"}}>
                <Card.Img variant="top" style= {{borderRadius: "1em"}} src={local.image} />
                <Card.Body>
                <Card.Text >{local.name}</Card.Text>
                  <div className="boxButtons">
                  <div onClick={()=>selectLocal(local)} 
                    className="buttonCard">Ver</div>
                  <div onClick={() => addToFavorites(local)}
                      className="buttonCard">♡</div>
                  </div>
                  
                </Card.Body>
              </Card>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
