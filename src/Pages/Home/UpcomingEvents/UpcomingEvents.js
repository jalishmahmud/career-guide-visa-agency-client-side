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
            <div className="single-event red">
              <h5>May</h5>
              <h5>27</h5>

              <h3>University of California, Los Angeles (UCLA)</h3>
              <div className="time-and-media">
                <div>
                  <small>2:30 pm - 5:50 pm</small>
                  <small>At Office</small>
                </div>
                <a className="link-arrow" href="/">
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </a>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="single-event silver">
              <h5>April</h5>
              <h5>27</h5>

              <h3>Virginia Polytechnic Institute (Virginia Tech)</h3>
              <div className="time-and-media">
                <div>
                  <small>2:30 pm - 5:50 pm</small>
                  <small>At Hotel Pan Pacific, Dhaka</small>
                </div>
                <a className="link-arrow" href="/">
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </a>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="single-event red">
              <h5>May</h5>
              <h5>15</h5>

              <h3>University of Alberta, Canada</h3>
              <div className="time-and-media">
                <div>
                  <small>2:30 pm - 5:50 pm</small>
                  <small>Via Zoom</small>
                </div>
                <a className="link-arrow" href="/">
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </a>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="single-event silver">
              <h5>June</h5>
              <h5>30</h5>

              <h3>The University of Manchester, London, UK</h3>
              <div className="time-and-media">
                <div>
                  <small>2:30 pm - 5:50 pm</small>
                  <small>At Hotel Lakeshore, Gulshan</small>
                </div>
                <a className="link-arrow" href="/">
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </a>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="single-event red">
              <h5>July</h5>
              <h5>23</h5>

              <h3>London School of Economics and Science</h3>
              <div className="time-and-media">
                <div>
                  <small>2:30 pm - 5:50 pm</small>
                  <small>Via Zoom</small>
                </div>
                <a className="link-arrow" href="/">
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </a>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="single-event silver">
              <h5>April</h5>
              <h5>17</h5>

              <h3>McGill University, Canada</h3>
              <div className="time-and-media">
                <div>
                  <small>2:30 pm - 5:50 pm</small>
                  <small>At Office</small>
                </div>
                <a className="link-arrow" href="/">
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpcomingEvents;
