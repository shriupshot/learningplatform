import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      setResponseMessage(res.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setResponseMessage('Error submitting the form. Please try again later.');
    }
  };

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold text-purple">Contact Us</h2>
      <p className="text-center text-dark">
        We'd love to hear from you! Whether you have questions about our courses, need assistance, 
        or just want to say hello, feel free to reach out.
      </p>

      <Row className="mt-4">
        <Col md={6} className="d-flex flex-column justify-content-center">
          {/* Left Section: Contact Details */}
          <div className="d-flex align-items-center mb-3">
            <FaMapMarkerAlt className="fs-3 text-purple me-3" />
            <div>
              <h5 className="text-purple mb-1">Address</h5>
              <p className="mb-0">OMR Street, T Nagar, Chennai - 600001</p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <FaPhoneAlt className="fs-3 text-purple me-3" />
            <div>
              <h5 className="text-purple mb-1">Phone</h5>
              <p className="mb-0">+91 63804 91827</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FaEnvelope className="fs-3 text-purple me-3" />
            <div>
              <h5 className="text-purple mb-1">Email</h5>
              <p className="mb-0">Skillearn@gmail.com</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="d-flex mt-4">
            <FaFacebook className="fs-3 text-purple me-3" />
            <FaLinkedin className="fs-3 text-purple me-3" />
            <FaInstagram className="fs-3 text-purple" />
          </div>
        </Col>

        <Col md={6}>
          <div className="p-4 rounded contact-box">
            <h4 className="text-white text-center fw-bold">Send Message</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  className="border-0"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="border-0"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Type your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="border-0"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>
              <div className="text-center">
                <Button className="btn-submit" type="submit">Submit</Button>
              </div>
            </Form>
            {responseMessage && <p className="text-center mt-3 text-white">{responseMessage}</p>}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
