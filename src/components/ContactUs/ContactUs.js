import React from "react";
import { Form, Button } from "react-bootstrap";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container my-5">
      <div className="contact">
        <h2 className="mb-5">Contact Us</h2>
        <p>Email: gdmamun@yahoo.com</p>
        <p>Phone: 01930336602</p>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Query</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button className="px-5">Send</Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
