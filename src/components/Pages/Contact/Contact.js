import React, { useState } from 'react';
import { Form, Button} from 'react-bootstrap';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const validationErrors = {};
    if (!name) {
      validationErrors.name = 'Name is required';
    }
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email address';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit the data
      console.log('Form submitted:', { name, email, message });
      // Reset the form
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    } else {
      // Form is invalid, update the errors state
      setErrors(validationErrors);
    }
  };

  return (
    // Render the form on the page
    <div className='mx-5'>
      <h2>Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => {
              if (!name) {
                setErrors(() => ({ name: 'Name is required' }));
              } else {
                setErrors(() => ({ name: '' }));
              }
            }}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {
              if (!email) {
                setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
              } else if (!/\S+@\S+\.\S+/.test(email)) {
                setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
              } else {
                setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
              }
            }}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group> 

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className='my-2 prime-custom-2'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;