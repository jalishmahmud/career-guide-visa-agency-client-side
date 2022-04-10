import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import integrity from "../../../images//integrity.jpg";
import extensiveNetwork from "../../../images/extensive-network.jpg";
import transparency from "../../../images/transparency.jpg";
import "./WhatMakesUsDifferent.css";
const WhatMakesUsDifferent = () => {
  return (
    <div className="what-makes-us-different-wrapper">
      <Container>
        <div className="section-title text-center">
          <h2>What Makes Us Different</h2>
          <h5>Yes! We believe in Integrity and Transparency</h5>
        </div>
        <Row>
          <Col className="single-reason" md={4}>
            <img className="img-fluid" src={integrity} alt="" />
            <h3>Integrity</h3>
            <p>
              To us, helping even a single student build their educational and
              professional career abroad matters. We never deploy cookie-cutter
              strategies when dealing with our clients, rather, personalize the
              service to their needs. In that, Career Guide International
              operates with integrity and goes the extra mile to bring you
              closer to the life of your dreams.
            </p>
          </Col>

          <Col className="single-reason" md={4}>
            <img className="img-fluid" src={transparency} alt="" />
            <h3>Transparency</h3>
            <p>
              At Career Guide International, the student is our top priority. We
              are the kind of consultancy that never puts you at a disadvantage,
              sets fair prices for its services, and stays far away from hidden
              charges. Rest assured; our student solutions are bound to reap
              limitless benefits!
            </p>
          </Col>
          <Col className="single-reason" md={4}>
            <img className="img-fluid" src={extensiveNetwork} alt="" />
            <h3>Extensive Network</h3>
            <p>
              We are partnered with a long list of renowned universities across
              Australia, Canada, the US, and the UK. This broadens your
              perspective, thus, allowing you to choose the most suitable
              institute without settling.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhatMakesUsDifferent;
