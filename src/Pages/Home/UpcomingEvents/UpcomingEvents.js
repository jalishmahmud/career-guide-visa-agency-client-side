import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./UpcomingEvents.css";
const UpcomingEvents = () => {
  return (
    <div className="upcoming-events-wrapper">
      <Container>
        <div className="section-title text-center">
          <h2>Our Upcoming Events</h2>
          <h5>Feel free to join out upcoming out event </h5>
        </div>
        <Row>
          <Col md={4}>
            <div className="single-event">
              <h5>May</h5>
              <h5>27</h5>

              <h3>Macquarie University, Sydney, Australia</h3>
              <div className="time-and-media">
                <div>
                  <small>2:30 pm - 5:50 pm</small>
                  <small>Via Zoom</small>
                </div>
                <span>
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </span>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="single-event">
              <h5>May</h5>
              <h5>27</h5>

              <h3>Macquarie University, Sydney, Australia</h3>
              <div className="time-and-media">
                <div>
                  <small>2:30 pm - 5:50 pm</small>
                  <small>Via Zoom</small>
                </div>
                <span>
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </span>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="single-event">
              <h5>May</h5>
              <h5>27</h5>

              <h3>Macquarie University, Sydney, Australia</h3>
              <div className="time-and-media">
                <div>
                  <small>2:30 pm - 5:50 pm</small>
                  <small>Via Zoom</small>
                </div>
                <span>
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpcomingEvents;
