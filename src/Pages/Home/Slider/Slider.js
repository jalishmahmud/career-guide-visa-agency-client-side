import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../../images/slider1.jpg";
import slider2 from "../../../images/slider2.jpg";
import slider3 from "../../../images/slider3.jpg";
import slider4 from "../../../images/slider4.jpg";
const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={slider1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider4} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
