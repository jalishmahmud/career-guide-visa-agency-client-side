import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";
import "./About.css";
const About = () => {
  return (
    <div className="about-us">
      <PageTitle title="About Us"></PageTitle>
      <div className="container">
        <Row>
          <Col md={10}>
            <p className="p-lg">
              Established in 2019, Career Guide International is a
              student-oriented organization dedicated to helping individuals
              continue their academic journey beyond national borders. Applying
              abroad is a huge leap of faith and riddled with complexity.
              Needless to say, higher education is no light matter which is why
              we treat it with diligence. So, whether you want to move to
              Canada, England, or beyond, we can assist you through the journey.
            </p>
            <p className="p-sm">
              After all, it’s about making the right choice, and with our
              expertise backing you up, you’re bound to decide wisely. Due to
              our unparalleled approach to student convenience, Career Guide
              International has amassed a name for itself over the years. We
              flaunt an extensive network of satisfied students and coveted
              institutions that recognize our contributions to the people.
            </p>
          </Col>
          <Col md={2} className="d-flex align-items-center">
            <Nav.Link as={Link} className="custom-btn" to="/contact">
              Contact Us
            </Nav.Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
