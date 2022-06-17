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
            <Link to="/study-in-canada">Study In Canada</Link>
          </Col>
          <Col className="single-country" md={4}>
            <img className="img-fluid" src={uk} alt="" />
            <Link to="/study-in-uk">Study In UK</Link>
          </Col>
          <Col className="single-country" md={4}>
            <img className="img-fluid" src={australia} alt="" />
            <Link to="/study-in-australia">Study In Australia</Link>
          </Col>
          <Col className="single-country" md={4}>
            <img className="img-fluid" src={japan} alt="" />
            <Link to="/study-in-malaysia">Study In Malaysia</Link>
          </Col>
          <Col className="single-country" md={4}>
            <img className="img-fluid" src={turkey} alt="" />
            <Link to="/study-in-turkey">Study In Turkey</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SelectedCountry;
