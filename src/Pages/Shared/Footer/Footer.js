import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import careerGuidelogo from "../../../images/career-guide-logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="footer-content pt-3">
          <Col className="py-4" xs={12} md={3}>
            <h4>About Security Camera</h4>
            <img className="mb-3" src={careerGuidelogo} alt="" />
            <p>
              Encounter the most bewitching wines around the world with a
              knowledgeable wine sommelier to experience the sublime with just a
              sip. Relish from the most
            </p>
          </Col>

          <Col className="py-4" xs={12} md={3}>
            <h4>Popular Services</h4>
            <span>Study In USA</span>
            <span>Study In UK</span>
            <span>Study In Canada</span>
            <span>Study In Australia</span>
            <span>Study In Turkey</span>
          </Col>
          <Col className="py-4" xs={12} md={3}>
            <h4>Customer Service</h4>
            <ul>
              <li>
                <a to="/">About Us</a>
              </li>
              <li>
                <a to="/">Careers</a>
              </li>
              <li>
                <a to="/">Help And FAQs</a>
              </li>
              <li>
                <a to="/">Popular Items</a>
              </li>
              <li>
                <a to="/">Corporate Support</a>
              </li>
              <li>
                <a to="/">Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col className="py-4" xs={12} md={3}>
            <h4>Contact Info</h4>
            <h6>ADDRESS:</h6>
            <p>000 Street Name, City, USA</p>

            <h6>PHONE:</h6>
            <p>(123) 000-0000</p>

            <h6>EMAIL:</h6>
            <p>yourmail@mail.com</p>

            <h6>WORKING DAYS/HOURS:</h6>
            <p>Mon - Sun / 9:00 AM - 8:00 PM</p>
          </Col>
        </Row>
        <Row>
          <p className="copyrhgit text-center py-3">
            Career Guide International &copy; Security Camera, All Rights
            Reserved. Developed By : Jalish Mahmud
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
