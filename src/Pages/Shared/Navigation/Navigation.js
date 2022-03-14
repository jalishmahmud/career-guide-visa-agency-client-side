import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import careerGuideLogo from "../../../images/career-guide-logo.png";
import "./Navigation.css";
const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container className="custom-nav py-1">
        <Navbar.Brand href="/">
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
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>

          <Nav.Link as={Button} className="custom-btn" href="/login">
            Apply Online
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
