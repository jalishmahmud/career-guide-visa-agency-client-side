import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./FeaturedUniversity.css";
const FeaturedUniversity = () => {
  return (
    <div className="featured-university-wrapper">
      <Container>
        <div className="section-title text-center">
          <h2>Our Selected Universities</h2>
          <h5>We have selected best universities for your hight education</h5>
        </div>
        <Row>
          <Col md={2}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedUniversity;

/* 
California State University  
North Dakota State University
Old Dominion University 
Southern Arkansas University
University of Alabama in Huntsville   
University of Mississippi 
University of New Haven 
University of Missouri
University of South Alabama 
State University of New York 
Ohio University 
North Dakota State University 
The University of Texas-Pan American  
Central Michigan University  
University of Louisiana  
Southern New Hampshire University 
New Mexico State University 
Kent State University 
Murray State University 
Washington State University
Oklahoma City University 
University of Florida 
Texas A & M University */
