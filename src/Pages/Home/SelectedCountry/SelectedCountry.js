import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import australia from "../../../images/australia.jpg";
import canada from "../../../images/canada.jpg";
import japan from "../../../images/japan.jpg";
import uk from "../../../images/london.jpg";
import turkey from "../../../images/turkey.jpg";
import usa from "../../../images/usa.jpg";
import "./SelectedCountry.css";
const SelectedCountry = () => {
  return (
    <div id="services" className="selected-country-wrapper ">
      <Container>
        <Row>
          <Col className="single-country" md={4}>
            <img className="img-fluid" src={usa} alt="" />
            <Link to="/study-in-usa">Study In USA</Link>
          </Col>
          <Col className="single-country" md={4}>
            <img className="img-fluid" src={canada} alt="" />
            <a href="/study-in-canada">Study In Canada</a>
          </Col>
          <Col className="single-country" md={4}>
            <img className="img-fluid" src={uk} alt="" />
            <a href="/study-in-uk">Study In UK</a>
          </Col>
          <Col className="single-country" md={4}>
            <img className="img-fluid" src={australia} alt="" />
            <a href="/study-in-australia">Study In Australia</a>
          </Col>
          <Col className="single-country" md={4}>
            <img className="img-fluid" src={japan} alt="" />
            <a href="/study-in-malaysia">Study In Malaysia</a>
          </Col>
          <Col className="single-country" md={4}>
            <img className="img-fluid" src={turkey} alt="" />
            <a href="/study-in-turkey">Study In Turkey</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SelectedCountry;
