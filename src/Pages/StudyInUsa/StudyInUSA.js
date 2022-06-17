import React from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../PageTitle/PageTitle";

const StudyInUSA = () => {
  return (
    <div className="content">
      <PageTitle title="Study In USA" />
      <div className="container">
       <Row>
          <Col md={12}>
            <p className="p-lg">
              Want to study in the USA? Recognized as the world’s largest hub for renowned institutes, America welcomes thousands of international students every year. It is a great place to continue your academic journey due to various reasons. Not only is the quality of education top-notch, but you have an extensive curriculum at your disposal to choose from. This is topped off with a brilliant opportunity for first-hand cultural experiences.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="p-sm">
              From a career standpoint, a US-based degree can be your one-way ticket to securing a great job anywhere in the world. In fact, many employers in developing countries prefer candidates with a US-based educational background.
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
              Make your space in the best institutes of the USA and bolster career prospects with the right kind of education.
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
            <p>Our professionals give you a rundown of the total cost so you’re mentally prepared for living and studying in the USA. Typically, tuition fee per year ranges between $20 000 to $45 000 for basic undergraduate and graduate degrees. On the other hand, an MBA can cost you much more depending on the institute you apply to. Please bear in mind that the $45, 000 limit is not set in stone, and professional degrees can even be as high as double this amount.
            </p>
            </div>
          </Col>
          <Col  md={6}>
           <div className="bg-gray">
              <h3>
             Accommodation and <span>living expenses</span>
            </h3>
            <p>In today’s high inflation days, it takes around $1000 to $1500 per month for a student to live in the USA. This includes everything such as traveling, entertainment, food, gas, internet, rent, and other expenses.
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

export default StudyInUSA;
