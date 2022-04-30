import {
  faBriefcase,
  faBuildingColumns,
  faHouseChimneyUser,
  faIdCard,
  faPlaneArrival,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./HowWeWork.css";

const HowWeWork = () => {
  return (
    <div id="hwo-we-work" className="how-we-work-wrapper text-center">
      <Container>
        <div className="section-title">
          <h2>How We Work</h2>
          <h5>We provide these exclusive services</h5>
        </div>
        <Row>
          <Col md={2} sm={4} className="single-service">
            <span>
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
            <h4>Career Counselling</h4>
          </Col>
          <Col md={2} sm={4} className="single-service">
            <span>
              <FontAwesomeIcon icon={faBuildingColumns} />
            </span>
            <h4>University Admissions</h4>
          </Col>
          <Col md={2} sm={4} className="single-service">
            <span>
              <FontAwesomeIcon icon={faIdCard} />
            </span>
            <h4>Visa Consultancy</h4>
          </Col>
          <Col md={2} sm={4} className="single-service">
            <span>
              <FontAwesomeIcon icon={faPlaneDeparture} />
            </span>
            <h4>Pre-Departure Briefing</h4>
          </Col>
          <Col md={2} sm={4} className="single-service">
            <span>
              <FontAwesomeIcon icon={faPlaneArrival} />
            </span>
            <h4>Post-Departure Advice</h4>
          </Col>
          <Col md={2} sm={4} className="single-service">
            <span>
              <FontAwesomeIcon icon={faHouseChimneyUser} />
            </span>
            <h4>Accommodation Advice</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowWeWork;
