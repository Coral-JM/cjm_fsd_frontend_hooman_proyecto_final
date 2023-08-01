import React, { useEffect, useState } from 'react'
import './Companies.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from "react-redux";
import { getCompanies } from "../../apiCalls";
import Card from "react-bootstrap/Card";


export const Companies = () => {
    const [companies, setCompanies] = useState([]);
    const token = useSelector((state) => state.user.credentials.token);

    useEffect(() => {
        getCompanies(token)
        .then((res)=> {
            // console.log(res.data.data);
            setCompanies(res.data.data);
        })
        .catch((error) => console.log(error));
    }, [])

    return (
        <Container>
            <Row>
                <div className="title">Empresas</div>
                <Col className='companies'>
                {companies.map((company) => (
                <div key={company.id}>
                    <Card className="companyCard"style={{border: "transparent" }}>
                      <Card.Body>
                        <Card.Title>{company.company}</Card.Title>
                        <Card.Text>{company.owner_name} {company.owner_surname}</Card.Text>
                        <Card.Text>{company.user.email}</Card.Text>
                        <Card.Text>{company.direction}, {company.zip_code}</Card.Text>
                        <Card.Text>{company.CIF}</Card.Text>
                      </Card.Body>
                      {/* <div className="button">Aprobar</div> */}
                    </Card>
                    </div>
                ))}
                </Col>
            </Row>
        </Container>
    )
}