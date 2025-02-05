import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiMap, BiPhone, BiEnvelope } from "react-icons/bi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <h4 className="title">Explore top course and certifications</h4>
        <Row>
          <Col md={3}>
            <h5 className="category-title">Web Development</h5>
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>JavaScript</li>
              <li>React JS</li>
              <li>Angular</li>
              <li>Java</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="category-title">Mern Development</h5>
            <ul>
              <li>Mongo DB</li>
              <li>Express</li>
              <li>React JS</li>
              <li>Node JS</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="category-title">Data Science</h5>
            <ul>
              <li>Data Science</li>
              <li>Python</li>
              <li>Machine Learning</li>
              <li>ChatGPT</li>
              <li>Deep Learning</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="category-title">Cloud Computing</h5>
            <ul>
              <li>AWS</li>
              <li>Google App Engine</li>
              <li>Microsoft Azure</li>
              <li>DevOps</li>
            </ul>
          </Col>
        </Row>

        <Row className="about-section">
          <Col>
            <h5 className="category-title">About</h5>
            <ul>
              <li>About us</li>
              <li>Courses and Certification</li>
              <li>Help center</li>
              <li>Contact us</li>
            </ul>
          </Col>
        </Row>

        <Row className="contact-info">
          <Col md={4}>
            <BiMap className="icon" />
            <div>
              <h6>Address</h6>
              <p>OMR street, T Nagar, Chennai - 600001</p>
            </div>
          </Col>
          <Col md={4}>
            <BiPhone className="icon" />
            <div>
              <h6>Phone</h6>
              <p>+91 63804 91827</p>
            </div>
          </Col>
          <Col md={4}>
            <BiEnvelope className="icon" />
            <div>
              <h6>Email</h6>
              <p>Skillearn@gmail.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
