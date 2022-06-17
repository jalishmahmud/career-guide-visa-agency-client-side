import React from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../PageTitle/PageTitle";

const StudyInCanada = () => {
  return (
    <div className="content">
      <PageTitle title="Study In Canada" />
      <div className="container">
       <Row>
          <Col md={12}>
            <p className="p-lg">
             Canada is home to top educators of the world and is known for its quality of life. Needless to say, many students just like you wish to study in the friendliest country across the world. As of 2019, 27 Canadian universities made it to the world ranking list. However, even those that weren’t mentioned are worth applying to. Not just that but international students also have the opportunity to explore the country, make new friends, and set the roots for a successful career. As long as you have a Canadian degree, navigating professional life can be much easier. From arts to medicine, the country offers stellar educational programs for undergraduate and graduate students across the world
            </p>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={6}>
            <div className="bg-gray">
              <h3>
             Recognized <span>Institutes</span>
            </h3>
            <p>
             Make your space in the best institutes of Canada and bolster career prospects with the right kind of education.
            </p>
            </div>
          </Col>

          <Col  md={6}>
           <div className="bg-gray">
              <h3>
             Unique <span>Majors</span>
            </h3>
              <p>
                Find the most suitable majors that complement your passion so you can follow your dreams no matter the location.
            </p>
            </div>
          </Col>
          <Col  md={6}>
           <div className="bg-gray">
              <h3>
             Scholarships and <span>Financial Aid</span>
            </h3>
            <p>Discover financial aid programs that make studying abroad more affordable. Find out if your GPA meets the requirement for international scholarships and fee waivers.
            </p>
            </div>
          </Col>
          <Col  md={6}>
           <div className="bg-gray">
              <h3>
             Diversify <span>experiences</span>
            </h3>
            <p>Step out of your comfort zone, meet new people, and broaden your perspective in cosmopolitan spaces brimming with culture.
            </p>
            </div>
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
            <p>We give you a thorough overview of the total cost so you’re mentally prepared for living and studying in Canada. The average cost of an undergraduate and graduate degree in Canada comes down to CAD 22, $000, and $17, 000 respectively. However, an MBA program is often priced higher just as other professional degrees like medicine and law are.
            </p>
            </div>
          </Col>
          <Col  md={6}>
           <div className="bg-gray">
              <h3>
             Accommodation and <span>living expenses</span>
            </h3>
            <p>Student living in Canada is similar to the USA. In that, total monthly costs are around CAD $13, 000. That said, this depends on how you manage your expenses. On average, living in university dorms can be more expensive than sharing an apartment with a roommate. Similarly, your food choices, traveling expenses, internet charges as well as the money tied to amenities matter as well.
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
            <p>Visit the VISA office in your area, show the officials proof of enrolment and apply. In case you’re confused about this step, we will gladly help you out
            </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StudyInCanada;
