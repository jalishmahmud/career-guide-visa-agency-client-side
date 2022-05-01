import {
  faHourglass,
  faMagnifyingGlassPlus,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./WhatMakesUsDifferent.css";
const WhatMakesUsDifferent = () => {
  return (
    <div id="why-us" className="what-makes-us-different-wrapper">
      <Container>
        <div className="section-title text-center">
          <h2>What Makes Us Different</h2>
          <h5>Yes! We believe in Integrity and Transparency</h5>
        </div>
        <Row>
          <Col md={4}>
            <div className="single-reason">
              {/* <img className="img-fluid" src={integrity} alt="" /> */}
              <span>
                <FontAwesomeIcon icon={faHourglass} />
              </span>
              <h3>Integrity</h3>
              <p>
                To us, helping even a single student build their educational and
                professional career abroad matters. We never deploy
                cookie-cutter strategies when dealing with our clients, rather,
                personalize the service to their needs. In that, Career Guide
                International operates with integrity and goes the extra mile to
                bring you closer to the life of your dreams.
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="single-reason">
              {/* <img className="img-fluid" src={transparency} alt="" /> */}
              <span>
                <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
              </span>
              <h3>Transparency</h3>
              <p>
                At Career Guide International, the student is our top priority.
                We are the kind of consultancy that never puts you at a
                disadvantage, sets fair prices for its services, and stays far
                away from hidden charges. Rest assured; our student solutions
                are bound to reap limitless benefits!
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="single-reason">
              {/* <img className="img-fluid" src={extensiveNetwork} alt="" /> */}
              <span>
                <FontAwesomeIcon icon={faNetworkWired} />
              </span>
              <h3>Extensive Network</h3>
              <p>
                We are partnered with a long list of renowned universities
                across Australia, Canada, the US, and the UK. This broadens your
                perspective, thus, allowing you to choose the most suitable
                institute without settling.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhatMakesUsDifferent;
