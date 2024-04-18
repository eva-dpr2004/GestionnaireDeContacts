import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardsContactStyle.css';

function CardsContact() {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get('http://localhost:3001/contacts')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleUpdate = (id) => {
    navigate(`/update-contact/${id}`); 
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/contacts/${id}`)
      .then(() => {
        setData(prevData => prevData.filter(contact => contact.id !== id));
      })
      .catch(err => console.log('Error deleting contact:', err));
  };

  return (
    <Container className='card-container'>
      <Row xs={1} md={3} className="g-4">
        {data.map((d, i) => (
          <Col key={i}>
            <Card className="h-100">
              <Card.Body>
                <p>Img</p>
                <Card.Title>{d.firstName} {d.lastName}</Card.Title>
                <Card.Text>{d.jobTitle}</Card.Text>
                <Card.Text>{d.phone}</Card.Text>
                <Card.Text>{d.email}</Card.Text>
                <Card.Text>{d.address}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Button variant="primary" onClick={() => handleUpdate(d.id)}>Update</Button>
                  <Button variant="danger" onClick={() => handleDelete(d.id)}>Delete</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardsContact;
