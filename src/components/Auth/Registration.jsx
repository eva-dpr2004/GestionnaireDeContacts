import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function Registration() {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newUser = {
      lastName,
      firstName,
      email,
      password
    };

    try {
      const response = await axios.post('http://localhost:3001/users', newUser);
      console.log('User enregistré:', response.data);
      setLastName('');
      setFirstName('');
      setEmail('');
      setPassword('');
      alert('Inscription réussie !');
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement:', error);
      alert('Une erreur s\'est produite lors de l\'inscription.');
    }
  };

  return (
    <div>
      <h2>Formulaire d'inscription</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="lastName">
          <Form.Label>Nom :</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="firstName">
          <Form.Label>Prénom :</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email :</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Mot de passe :</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button className='mt-3 px-5 py-2' style={{ backgroundColor: '#6d31ed', borderColor: '#6d31ed' }} type="submit">
          S'inscrire
        </Button>
      </Form>
    </div>
  );
}

export default Registration;
