import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import careerGuideFooterLogo from "../../../images/career-guide-footer-logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="footer-content pt-3">
          <Col className="py-4" xs={12} md={3}>
            <h4>About Us</h4>
            <img
              className="mb-3 w-75 img-fluid"
              src={careerGuideFooterLogo}
              alt=""
            />
            <p>
              Established in 2019, Career Guide International is a
              student-oriented organization dedicated to helping individuals
              continue their academic journey beyond national borders.{" "}
              <a className="" href="/">
                learn more
              </a>
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
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Help And FAQs</a>
              </li>
              <li>
                <a href="/">Popular Services</a>
              </li>
              <li>
                <a href="/">Corporate Support</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col className="py-4 contact-info" xs={12} md={3}>
            <h4>Contact Info</h4>
            <h6>ADDRESS:</h6>
            <p>
              R H Home Center, Suite-327, 3rd Floor,74/b/1, Green Road,
              Farmgate, Dhaka, Dhaka Division, Bangladesh
            </p>

            <h6>PHONE:</h6>

            <a href="tel:+8801718229344">(+88) 01718 229344</a>

            <h6>EMAIL:</h6>

            <a href="mailto:contact@careerguide.international">
              contact@careerguide.international
            </a>

            <h6>WORKING DAYS/HOURS:</h6>
            <p>Sun - Thu / 10:00 AM - 8:00 PM</p>
          </Col>
        </Row>
        <Row>
          <p className="copyrhgit text-center py-3">
            Copyright &copy; Career Guide International, All Rights Reserved.
            Developed By : <a href="/">Jalish Mahmud</a>
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
