import React from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../PageTitle/PageTitle";

const StudyInAustralia = () => {
  return (
    <div className="content">
      <PageTitle title="Study In Australia" />
       <div className="container">
       <Row>
          <Col md={12}>
            <p className="p-lg mb-5">
             Over the years, people have begun paying attention to Australia for their higher education needs. This is due to the country's impeccable quality of education combined with high standards of living. Compared to the United States of America or even the UK, Australia isn’t as saturated in terms of international students. It offers brilliant opportunities for personal development at reasonable costs that you probably might not find anywhere else. Of the total number of universities in the country, 6 are ranked in the world’s top 100!
            </p>
          </Col>
        </Row>
        
         <div className="section-title text-center">
          <h2>Managing costs</h2>
        </div>
        <Row className="mb-5">
          <Col  md={6}>
           <div className="bg-gray">
              <h3>
             Academic  <span>Expenses</span>
            </h3>
            <p>Our professionals give you a rundown of the total cost so you’re mentally prepared for living and studying in Australia. On average, tuition fee per year ranges between $15, 000 to $40, 000 for undergraduate and graduate programs. Please note that professional degrees including an MBA are far more expensive.
            </p>
            </div>
          </Col>
          <Col  md={6}>
           <div className="bg-gray">
              <h3>
             Accommodation and <span>living expenses</span>
            </h3>
            <p>International students living in Australia spend around $1500 to $1800 every month. This is inclusive of travel expenses, cellular charges, internet, food, rent, electricity, automobile purchases, and more.
            </p>
            </div>
          </Col>
        </Row>

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

export default StudyInAustralia;
