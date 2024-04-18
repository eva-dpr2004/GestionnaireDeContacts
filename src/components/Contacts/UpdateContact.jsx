import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function UpdateContact() {
  const [contact, setContact] = useState({
    phone: '',
    email: '',
    address: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/contacts/${id}`)
      .then(response => {
        setContact(response.data);
      })
      .catch(error => console.error('Error fetching contact data:', error));
  }, [id]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/contacts/${id}`, contact)
      .then(() => {
        navigate('/');
      })
      .catch(error => console.error('Error updating contact:', error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control 
          type="text" 
          name="phone" 
          value={contact.phone} 
          onChange={handleChange} 
          required 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email" 
          name="email" 
          value={contact.email} 
          onChange={handleChange} 
          required 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control 
          type="text" 
          name="address" 
          value={contact.address} 
          onChange={handleChange} 
          required 
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update Contact
      </Button>
    </Form>
  );
}

export default UpdateContact;
