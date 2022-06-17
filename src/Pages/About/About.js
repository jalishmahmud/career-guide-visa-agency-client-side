import React from "react";
import { Col, Row } from "react-bootstrap";

import aboutUs1 from "../../images/about-us-1.jpg";
import aboutUs2 from "../../images/about-us-2.jpg";
import WhatMakesUsDifferent from "../Home/WhatMakesUsDifferent/WhatMakesUsDifferent";
import PageTitle from "../PageTitle/PageTitle";

const About = () => {
  return (
    <div className="about-us content">
      <PageTitle title="About Us"></PageTitle>
      <div className="container">
        <Row className="mb-5">
          <Col md={12}>
            <p className="p-lg">
              Established in 2019, Career Guide International is a
              student-oriented organization dedicated to helping individuals
              continue their academic journey beyond national borders. Applying
              abroad is a huge leap of faith and riddled with complexity.
              Needless to say, higher education is no light matter which is why
              we treat it with diligence. So, whether you want to move to
              Canada, England, or beyond, we can assist you through the journey.
            </p>
          </Col>
          <Col md={12} >
            <p className="p-sm">
              After all, it’s about making the right choice, and with our
              expertise backing you up, you’re bound to decide wisely. Due to
              our unparalleled approach to student convenience, Career Guide
              International has amassed a name for itself over the years. We
              flaunt an extensive network of satisfied students and coveted
              institutions that recognize our contributions to the people.
            </p>
          </Col>
        </Row>
        <Row className="bg-gray mb-5">
          <Col md={6}>
            <img className="img-fluid" src={aboutUs1} alt="" />
          </Col>
          <Col className="d-flex justify-content-center flex-column" md={6}>
            <h3>
              We lay the groundwork for <span>international success</span>
            </h3>
            <p>
              Studying in the best universities across the globe is a sure-fire
              way to secure your future. At Career Guide International, we
              elevate your academic competency. How? By matching you with the
              right educational institution that cherishes your skills and
              refines them even further.
            </p>
            <p>
              Ultimately, you are guaranteed a quality education as well as a
              promising career.
            </p>
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row className="bg-gray mb-5">
          <Col className="d-flex justify-content-center flex-column" md={6}>
            <h3>
              Choose the <span>best fit</span>
            </h3>
            <p>
              Applying to a foreign university isn’t just about choosing your
              favorite major. Safe to say, a lot of other factors must be
              considered and that’s where we come in. Our team of
              industry-leading professionals equips you with accurate
              information relevant to fees, scholarships, financial aid, degree
              perks, accommodation charges, and much more.
            </p>
            <p>
              This helps students embrace the bigger picture, and focus on their
              educational development within a wholly realistic worldview.
            </p>
          </Col>
          <Col md={6}>
            <img className="img-fluid" src={aboutUs2} alt="" />
          </Col>
        </Row>
      </div>
      <WhatMakesUsDifferent />
    </div>
  );
};

export default About;
