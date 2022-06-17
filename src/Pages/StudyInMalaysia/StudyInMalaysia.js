import React from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../PageTitle/PageTitle";

const StudyInMalaysia = () => {
  return (
    <div className="content">
      <PageTitle title="Study In Malaysia" />
      <div className="container">
       <div className="section-title text-center">
          <h2>How it works</h2>
        </div>
        <Row className="mb-5">
          <Col  md={6}>
           <div className="bg-gray">
              <h3>
            Consult and <span>Decide</span>
            </h3>
            <p>Share your educational preferences, the subjects you’re interested in, and your maximum budget. Then, let our professionals provide viable options with respective pros and cons so you can pick the best one.
            </p>
            </div>
          </Col>
          <Col  md={6}>
           <div className="bg-gray">
              <h3>
             Apply and<span> take the test</span>
            </h3>
            <p>We help you apply to selected universities the right way to increase your chances of acceptance. This includes recommendations for writing a personal statement, adding documentation, and more. Additionally, candidates must also take a GTE test in addition to other possible admission prerequisites such as the GRE.
            </p>
            </div>
          </Col>
          <Col  md={6}>
           <div className="bg-gray">
              <h3>
            Get your <span> VISA</span>
            </h3>
            <p>Visit the VISA office in your area, show the officials proof of enrolment and apply. In case you’re confused about this step, we will gladly help you out.
            </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StudyInMalaysia;
