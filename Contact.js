import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <Container className="py-5">
      {/* Contact Title */}
      <h2 className="text-center fw-bold text-purple">Contact Us</h2>
      <p className="text-center text-dark">
        We'd love to hear from you! Whether you have questions about our courses, need assistance, 
        or just want to say hello, feel free to reach out.
      </p>

      <Row className="mt-4">
        {/* Left Section (Contact Details) */}
        <Col md={6} className="d-flex flex-column justify-content-center">
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

        {/* Right Section (Contact Form) */}
        <Col md={6}>
          <div className="p-4 rounded contact-box">
            <h4 className="text-white text-center fw-bold">Send Message</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" className="border-0" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" className="border-0" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Type your Message</Form.Label>
                <Form.Control as="textarea" rows={3} className="border-0" />
              </Form.Group>
              <div className="text-center">
                <Button className="btn-submit">Submit</Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

// Custom styles
const styles = document.createElement("style");
styles.innerHTML = `
  .text-purple { color: #A348B0; }
  .contact-box { background-color: #D084E7; box-shadow: 2px 2px 8px rgba(0,0,0,0.1); }
  .btn-submit { background-color: #52014A; border: none; padding: 10px 30px; }
  .btn-submit:hover { background-color: #3B0135; }
`;
document.head.appendChild(styles);

export default Contact;
