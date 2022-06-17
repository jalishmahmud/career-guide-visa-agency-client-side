import React from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../PageTitle/PageTitle";

const StudyInUK = () => {
  return (
    <div className="content">
      <PageTitle title="Study In UK" />
     <div className="container">
       <Row>
          <Col md={12}>
            <p className="p-lg">
             Higher education in the UK is famous across the world for various reasons. The British have a robust academic structure that challenges students to do better. Be it within London or Manchester, these cities flaunt some of the best universities with long-standing international recognition. However, what truly makes the UK a great place for international students is its embracing environment. Education-wise, UK’s standards are pretty much unparalleled and that’s exactly why many employers around the globe value a British degree.
            </p>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={6}>
            <div className="bg-gray">
              <h3>
             Work Visa <span>Perks</span>
            </h3>
            <p>
              Many people who opt for a foreign education do so to increase their chances of moving abroad. When you choose the UK for higher education, it’s much easier to turn this dream into reality. By availing of a 2-year work VISA, you can establish your career in any British city, extend your stay and apply for permanent residency.
            </p>
            </div>
          </Col>

          <Col  md={6}>
           <div className="bg-gray">
              <h3>
             Plenty of  <span>scholarships</span>
            </h3>
            <p>While the Americas aren’t as generous with scholarships, the UK certainly is. That’s exactly why a large portion of international students in the country is often from developing countries with moderate household income. So, if you have decent grades, getting a scholarship to suit your needs won’t be difficult.
            </p>
            </div>
          </Col>
          <Col  md={6}>
           <div className="bg-gray">
              <h3>
             Global  <span>Rankings</span>
            </h3>
            <p>The option of globally recognized universities in the UK is long and plenty. With LSE and Oxford being just two out of many, we help you apply at coveted institutes you'll be a proud alumnus of.
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
            <p>Most institutes with undergraduate and graduate programs in the country are priced around $15, 000 to $40, 000. While this may seem pricey, our consultants can help you get a scholarship that waives off some portion of the total costs.
            </p>
            </div>
          </Col>
          <Col  md={6}>
           <div className="bg-gray">
              <h3>
             Accommodation and <span>living expenses</span>
            </h3>
            <p>Statistical indexes estimate total living expenses to be around £1000 to £1200 each month. Remember, the UK is a little expensive when compared to the states. However, you can save a lot of money on smart traveling, eating at home, and limiting your entertainment spend. Overall, living expenses include traveling, entertainment, food, gas, internet, rent, and more.
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

export default StudyInUK;
