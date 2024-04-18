import React from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar() {
  return (
    <div className="d-flex justify-content-end mt-4">
      <Form className="d-flex align-items-center">
        <Form.Control type="text" placeholder="Search..." style={{ maxWidth: '300px' }} className="mr-2"/>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="#5c5c5ce3"
        >
          <path d="M18.854 17.146l3.792 3.792-1.708 1.708-3.792-3.792a8 8 0 1 1 1.708-1.708zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
        </svg>
      </Form>
    </div>
  );
}

export default SearchBar;
