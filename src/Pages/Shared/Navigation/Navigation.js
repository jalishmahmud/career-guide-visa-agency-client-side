import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import careerGuideLogo from "../../../images/career-guide-logo.png";
import "./Navigation.css";
const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container className="custom-nav py-1">
        <Navbar.Brand as={Link} to="/">
          <img
            className="img-fluid"
            style={{ maxWidth: "130px" }}
            src={careerGuideLogo}
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Text className="welcome-user"></Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end menu-items">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={HashLink} to="/home/#services">
            Services
          </Nav.Link>
          <Nav.Link as={HashLink} to="/home/#events">
            Events
          </Nav.Link>
          <Nav.Link as={HashLink} to="/home/#why-us">
            Why CGI
          </Nav.Link>
          <Nav.Link as={HashLink} to="/home/#hwo-we-work">
            How We Work
          </Nav.Link>

          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>

          <Nav.Link as={Link} className="custom-btn" to="/login">
            Apply Online
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
