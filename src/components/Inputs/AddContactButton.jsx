import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddContactButton() {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate("/add-contact");
  };

  return (
    <div className='AddContactButton'>
      <Button
        className='button d-flex mt-5 ms-5 px-5'
        style={{ backgroundColor: '#6d31ed', borderColor: '#6d31ed' }}
        onClick={handleClick} // Appeler handleClick lorsque le bouton est cliqué
      >
        Add New Contact
      </Button>
    </div>
  );
}

export default AddContactButton;
