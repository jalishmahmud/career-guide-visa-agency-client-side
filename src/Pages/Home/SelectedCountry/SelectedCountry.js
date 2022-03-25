import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import australia from "../../../images/australia.jpg";
import canada from "../../../images/canada.jpg";
import japan from "../../../images/japan.jpg";
import uk from "../../../images/london.jpg";
import turkey from "../../../images/turkey.jpg";
import usa from "../../../images/usa.jpg";
import "./SelectedCountry.css";
const SelectedCountry = () => {
  return (
    <div className="selected-country-wrapper">
      <Container>
        <Row>
          <Col className="single-country" md={4}>
            <img className="img-fluid" src={usa} alt="" />
            <a href="/">Study In USA</a>
          </Col>
          <Col className="single-country" md={4}>
            <img className="img-fluid" src={canada} alt="" />
            <a href="/">Study In Canada</a>
          </Col>
          <Col className="single-country" md={4}>
            <img className="img-fluid" src={uk} alt="" />
            <a href="/">Study In UK</a>
          </Col>
          <Col className="single-country" md={4}>
            <img className="img-fluid" src={australia} alt="" />
            <a href="/">Study In Australia</a>
          </Col>
          <Col className="single-country" md={4}>
            <img className="img-fluid" src={japan} alt="" />
            <a href="/">Study In Japan</a>
          </Col>
          <Col className="single-country" md={4}>
            <img className="img-fluid" src={turkey} alt="" />
            <a href="/">Study In Turkey</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SelectedCountry;
